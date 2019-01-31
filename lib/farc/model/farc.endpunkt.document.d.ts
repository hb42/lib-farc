import { Document, Types } from "mongoose";
export interface FarcEndpunkt {
    endpunkt: string;
    above: string;
    size?: number;
    drive: Types.ObjectId;
    oe?: Types.ObjectId;
}
export interface FarcEndpunktDocument extends FarcEndpunkt, Document {
}
