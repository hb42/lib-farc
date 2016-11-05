/**
 * Created by hb on 29.05.16.
 */

import {
    Document,
} from "mongoose";

import {
  FarcDriveTypes,
} from "./";

export interface FarcDrive {
  displayname: string;
  sourcepath: string;
  arc: boolean;
  // archivepath: string;
  type: FarcDriveTypes;  // HOME, DATA, INST

}

export interface FarcDriveDocument extends FarcDrive, Document { }
