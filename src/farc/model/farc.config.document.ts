/**
 * Created by hb on 06.02.17.
 */

import {
  Document,
} from "mongoose";

export interface FarcConfig {
  name: string;
  value: any;

}

export interface FarcConfigDocument  extends FarcConfig, Document { }
