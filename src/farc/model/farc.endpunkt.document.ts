/**
 * Created by hb on 29.05.16.
 */

import {
    Document,
    Types,
} from "mongoose";

export interface FarcEndpunkt {
  endpunkt: string;  // Dir-Name
  above: string;   // Pfad ueber EP (no leading, trailing slash)
  size?: number;
  drive: Types.ObjectId;
  oe?: Types.ObjectId;
}

export interface FarcEndpunktDocument extends FarcEndpunkt, Document { }
