/**
 * Created by hb on 04.09.16.
 */

import {
    Document,
} from "mongoose";

import {
  FarcEntryTypes,
  FarcSelectType,
} from "./";

export interface FarcEntry {
  parent: string; // number;
  key: string; // number;
  label: string;      // file-/dir-name
  timestamp: number;  // milis -> besser zu verarbeiten als Date
  size: number;
  type: FarcEntryTypes;  // enum
  arc: boolean;   // archive j/n
  path: string[];   // Pfad zu diesem Knoten
  leaf?: boolean;      // true -> keine Unterverzeichnisse, wichtig fuer lazy loading
  selected?: FarcSelectType;  // Auswahl
  selectUid?: string;         //   UID
  selectDate?: number;        //   milis
  processDate?: number;       // Verarbeitung millis
  processResult?: string;     //   "OK" oder Fehlermeldung
}

export interface FarcEntryDocument extends FarcEntry, Document { }
