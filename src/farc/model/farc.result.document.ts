/**
 * Created by hb on 18.06.17.
 */

import {
  Document,
} from "mongoose";

import {
  FarcSelectType,
} from "./";

export interface FarcResult {
  path: string[];
  label: string;    // file-name|*
  arc: boolean;    // archive j/n
  selected: FarcSelectType;
  selectUid: string;     //   UID
  selectDate: number;        //   milis
  processDate: number;    // Verarbeitung millis
  success: boolean;
  log: string;  // log, error des scripts
  size: number;  // Datei-/Verzeichnis-Groesse
}

export interface FarcResultDocument  extends FarcResult, Document { }
