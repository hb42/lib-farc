/**
 * Created by hb on 29.05.16.
 */

import {
    Document,
    Types,
} from "mongoose";

export interface FarcEndpunkt {
  endpunkt: string;  // Dir-Name
  above: [string];   // Pfad ueber EP
  arc: boolean;      // archive j/n
  size?: number;
  roles?: [string];
  // tree?: Types.ObjectId;
  drive?: Types.ObjectId;
  epid: string;   // id f. EP -> daten: Name der AD-Gruppe, home: dir-Name, inst: Pfad (backslash?)
  key: number;
}

export interface FarcEndpunktDocument extends FarcEndpunkt, Document { }
