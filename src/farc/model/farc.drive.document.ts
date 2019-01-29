import {
    Document,
} from "mongoose";

import {
  FarcDriveTypes,
} from "./";

export const ARCHIVE_NAME = "Archiv für ";

export interface FarcDrive {
  displayname: string;  // source-Name, f. arc wird ARCHIVE_NAME ergaenzt
  source_path: string;   // Linux: mountpoint, Windows: UNC-Path
  archive_path: string;
  type: FarcDriveTypes;  // HOME, DATA, INST
  user_s: string;  // Windows: share-user + pasword f. source
  pwd_s: string;
  user_a: string;  // Windows: share-user + pasword f. archive
  pwd_a: string;
}

export interface FarcDriveDocument extends FarcDrive, Document { }
