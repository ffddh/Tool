// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,keep_enum_prefix,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusContext.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,keep_enum_prefix,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusContext.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { DeviceState } from "./apple.parsec.siri.v2alpha.DeviceState";
// @generated message type with reflection information, may provide speed optimized methods
class SiriPegasusContext$Type extends MessageType {
    constructor() {
        super("SiriPegasusContext", [
            { no: 1, name: "deviceState", kind: "message", T: () => DeviceState },
            { no: 2, name: "siriInteractionType", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "restrictions", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "conversationContext", kind: "message", T: () => N14 }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message SiriPegasusContext
 */
export const SiriPegasusContext = new SiriPegasusContext$Type();
// @generated message type with reflection information, may provide speed optimized methods
class N14$Type extends MessageType {
    constructor() {
        super("N14", [
            { no: 1, name: "cc", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "unknown2", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 3, name: "unknown3", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message N14
 */
export const N14 = new N14$Type();
