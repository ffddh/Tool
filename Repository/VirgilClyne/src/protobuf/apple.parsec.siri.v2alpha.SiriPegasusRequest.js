// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusRequest.proto" (syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies,long_type_number,output_javascript
// @generated from protobuf file "apple.parsec.siri.v2alpha.SiriPegasusRequest.proto" (syntax proto3)
// tslint:disable
import { MessageType } from "@protobuf-ts/runtime";
import { SiriPegasusContext } from "./apple.parsec.siri.v2alpha.SiriPegasusContext";
import { PegasusQueryContext } from "./apple.parsec.search.PegasusQueryContext";
// @generated message type with reflection information, may provide speed optimized methods
class SiriPegasusRequest$Type extends MessageType {
    constructor() {
        super("SiriPegasusRequest", [
            { no: 2, name: "queryContext", kind: "message", T: () => PegasusQueryContext },
            { no: 3, name: "userDataShareOptIn", kind: "scalar", opt: true, T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "siriPegasusContext", kind: "message", T: () => SiriPegasusContext }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message SiriPegasusRequest
 */
export const SiriPegasusRequest = new SiriPegasusRequest$Type();