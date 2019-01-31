import { Document } from "mongoose";
import { FarcSelectType } from "./";
export interface FarcResult {
    path: string[];
    label: string;
    arc: boolean;
    selected: FarcSelectType;
    selectUid: string;
    selectDate: number;
    processDate: number;
    success: boolean;
    log: string;
    size: number;
}
export interface FarcResultDocument extends FarcResult, Document {
}
