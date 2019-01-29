import {
  Document,
  Types,
} from "mongoose";

import {
  FarcEntryTypes,
  FarcSelectType,
} from "./";

export interface FarcEntry {
  parent: string; // number;
  key: string; // number;
  label: string;      // file-/dir-name
  timestamp: number | undefined | null;  // milis -> besser zu verarbeiten als Date
  size: number;
  type: FarcEntryTypes;  // enum
  arc: boolean;   // archive j/n
  path: string[];   // Pfad zu diesem Knoten
  leaf?: boolean;      // true -> keine Unterverzeichnisse, wichtig fuer lazy loading
  selected?: FarcSelectType;  // Auswahl
  selectUid?: string;         //   UID
  selectDate?: number;        //   milis
  clientState?: string;     //   nur fuer UI
  drive: Types.ObjectId;  // driveID -> Pfade f. copy/move
}

export interface FarcEntryDocument extends FarcEntry, Document { }
