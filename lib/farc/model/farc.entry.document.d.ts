import { Document, Types } from "mongoose";
import { FarcEntryTypes, FarcSelectType } from "./";
export interface FarcEntry {
    parent: string;
    key: string;
    label: string;
    timestamp: number | undefined | null;
    size: number;
    type: FarcEntryTypes;
    arc: boolean;
    path: string[];
    leaf?: boolean;
    selected?: FarcSelectType;
    selectUid?: string;
    selectDate?: number;
    clientState?: string;
    drive: Types.ObjectId;
}
export interface FarcEntryDocument extends FarcEntry, Document {
}
