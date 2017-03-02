/**
 * Created by hb on 16.01.17.
 */

import {
  Document,
} from "mongoose";

import {
  FarcRole,
} from ".";

export interface FarcOe {
  name: string;
  roles: FarcRole[];
}

export interface FarcOeDocument  extends FarcOe, Document { }
