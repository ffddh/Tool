import { Message, WireType } from '@bufbuild/protobuf'
import { $ } from '../lib/env'

export abstract class YouTubeMessage {
  name: string
  needProcess: boolean
  needSave: boolean
  message: any
  whiteNo: number[]
  blackNo: number[]
  whiteEml: string[]
  blackEml: string[]
  msgType: Message<any>
  argument: Record<string, any>
  decoder = new TextDecoder('utf-8', {
    fatal: false,
    ignoreBOM: true
  })

  protected constructor (msgType: Message<any>, name: string) {
    this.name = name
    this.msgType = msgType
    this.argument = this.decodeArgument()
    $.isDebug = Boolean(this.argument.debug)
    $.debug(this.name)
    Object.assign(this, $.getJSON('YouTubeAdvertiseInfo', {
      whiteNo: [],
      blackNo: [],
      whiteEml: [],
      blackEml: []
    }))
  }

  decodeArgument (): Record<string, any> {
    const tag = {
      lyricLang: '歌词翻译语言',
      captionLang: '字幕翻译语言',
      blockUpload: '屏蔽上传按钮',
      blockImmersive: '屏蔽选段按钮',
      debug: '启动调试模式'
    }
    const args = {
      lyricLang: 'zh-Hans',
      captionLang: 'zh-Hans',
      blockUpload: true,
      blockImmersive: true,
      debug: false
    }
    return $.decodeParams(args, tag)
  }

  fromBinary (binaryBody: Uint8Array | undefined | string): YouTubeMessage {
    if (binaryBody instanceof Uint8Array) {
      this.message = this.msgType.fromBinary(binaryBody)
      $.debug(`raw: ${Math.floor(binaryBody.length / 1024)} kb`)
      return this
    }
    $.log('YouTube can not get binaryBody')
    $.exit()
    return this
  }

  abstract pure (): Promise<YouTubeMessage> | YouTubeMessage

  async modify (): Promise<YouTubeMessage> {
    const pureMessage = this.pure()
    if (pureMessage instanceof Promise) {
      return await pureMessage
    } else {
      return pureMessage
    }
  }

  toBinary (): Uint8Array {
    return this.message.toBinary()
  }

  listUnknownFields (msg: any): ReadonlyArray<{ no: number, wireType: WireType, data: Uint8Array }> {
    if (msg instanceof Message) {
      return msg.getType().runtime.bin.listUnknownFields(msg)
    }
    return []
  }

  save (): void {
    if (this.needSave) {
      $.debug('Update Config')
      const YouTubeAdvertiseInfo = {
        whiteNo: this.whiteNo,
        blackNo: this.blackNo,
        whiteEml: this.whiteEml,
        blackEml: this.blackEml
      }
      $.setJSON(YouTubeAdvertiseInfo, 'YouTubeAdvertiseInfo')
    }
  }

  // done (response: CFetchResponse): void {
  //   this.save()
  //   let body = response.bodyBytes
  //   if (this.needProcess) body = this.toBinary()
  //
  //   response.headers['Content-Encoding'] = 'identity'
  //   response.headers['Content-Length'] = (body?.length ?? 0)?.toString()
  //
  //   $.done({
  //     response: {
  //       ...response,
  //       bodyBytes: body
  //     }
  //   })
  // }

  done (): void {
    this.save()
    if (this.needProcess) {
      $.timeStart('toBinary')
      const bodyBytes = this.toBinary()
      $.timeEnd('toBinary')
      $.debug(`modify: ${Math.floor(bodyBytes.length / 1024)} kb`)
      $.done({ bodyBytes })
    }
    $.debug('use $done({})')
    $.exit()
  }

  iterate (obj: any = {}, target: string | symbol, call: Function): any {
    const stack: any[] = (typeof obj === 'object') ? [obj] : []
    while (stack.length) {
      const item = stack.pop()
      const keys = Object.keys(item)

      if (typeof target === 'symbol') {
        for (const s of Object.getOwnPropertySymbols(item)) {
          if (s.description === target.description) {
            call(item, stack)
            break
          }
        }
      }

      for (const key of keys) {
        if (key === target) {
          call(item, stack)
        } else if (typeof item[key] === 'object') {
          stack.push(item[key])
        }
      }
    }
  }

  isAdvertise (o: Message<any>): boolean {
    const filed = this.listUnknownFields(o)[0]
    return filed ? this.handleFieldNo(filed) : this.handleFieldEml(o)
  }

  handleFieldNo (field): boolean {
    const no = field.no
    // 增加白名单直接跳过用于提升性能
    if (this.whiteNo.includes(no)) {
      return false
    } else if (this.blackNo.includes(no)) {
      return true
    }
    // 包含 pagead 字符则判定为广告
    const rawText = this.decoder.decode(field.data)
    const adFlag = rawText.includes('pagead')
    adFlag ? this.blackNo.push(no) : this.whiteNo.push(no)
    this.needSave = true
    return adFlag
  }

  handleFieldEml (field): boolean {
    let adFlag = false
    let eml = ''
    this.iterate(field, 'renderInfo', (obj, stack) => {
      eml = obj.renderInfo.layoutRender.eml.split('|')[0]
      if (this.whiteEml.includes(eml)) {
        adFlag = false
      } else if (this.blackEml.includes(eml) || /shorts(?!_pivot_item)/.test(eml)) {
        adFlag = true
      } else {
        const videoContent = obj?.videoInfo?.videoContext?.videoContent
        if (videoContent) {
          const unknownField = this.listUnknownFields(videoContent)[0]
          const rawText = this.decoder.decode(unknownField.data)
          adFlag = rawText.includes('pagead')
          adFlag ? this.blackEml.push(eml) : this.whiteEml.push(eml)
          this.needSave = true
        }
      }
      stack.length = 0
    })
    return adFlag
  }

  isShorts (field): boolean {
    let flag = false
    this.iterate(field, 'eml', (obj, stack) => {
      flag = /shorts(?!_pivot_item)/.test(obj.eml)
      stack.length = 0
    })
    return flag
  }
}
