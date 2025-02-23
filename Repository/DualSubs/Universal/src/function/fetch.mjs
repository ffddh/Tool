import { $platform, log } from "../utils/utils.mjs";

/**
 * Fetch Ruled Reqeust
 * @author VirgilClyne
 * @link https://github.com/BiliUniverse/Global/blob/main/js/BiliBili.Global.request.js
 * @param {Object} request - Original Request Content
 * @return {Promise<*>}
 */
export default async function fetch(request = {}, format = "application/json") {
	log("☑️ Fetch Ruled Reqeust", "");
	if ($platform === "Quantumult X") {
		switch (format) {
			case undefined: // 视为无body
				// 返回普通数据
				break;
			default:
				// 返回普通数据
				delete request.bodyBytes;
				break;
			case "application/protobuf":
			case "application/x-protobuf":
			case "application/vnd.google.protobuf":
			case "application/grpc":
			case "application/grpc+proto":
			case "applecation/octet-stream":
				// 返回二进制数据
				request.body = undefined;
				if (ArrayBuffer.isView(request.bodyBytes)) request.bodyBytes = request.bodyBytes.buffer.slice(request.bodyBytes.byteOffset, request.bodyBytes.byteLength + request.bodyBytes.byteOffset);
				break;
		};
	};
	const response = (request?.body ?? request?.bodyBytes)
		? await $.http.post(request)
		: await $.http.get(request);
        log(`🚧 Fetch Ruled Reqeust, response:${JSON.stringify(response)}`, "");
        log("✅ Fetch Ruled Reqeust", "");
	return response;
};
