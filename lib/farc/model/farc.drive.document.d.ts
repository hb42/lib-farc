import { Document } from "mongoose";
import { FarcDriveTypes } from "./";
export declare const ARCHIVE_NAME = "Archiv f\u00FCr ";
export interface FarcDrive {
    displayname: string;
    source_path: string;
    archive_path: string;
    type: FarcDriveTypes;
    user_s: string;
    pwd_s: string;
    user_a: string;
    pwd_a: string;
}
export interface FarcDriveDocument extends FarcDrive, Document {
}
