/**
 * Created by hb on 29.05.16.
 */

import {
    Document,
} from "mongoose";

import {
  FarcDriveTypes,
} from "./";

export const ARCHIVE_NAME = "Archiv für ";

export interface FarcDrive {
  displayname: string;  // source-Name, f. arc wird ARCHIVE_NAME ergaenzt
  sourcepath: string;
  archivepath: string;
  type: FarcDriveTypes;  // HOME, DATA, INST

}

export interface FarcDriveDocument extends FarcDrive, Document { }
