/**
 * Created by hb on 15.08.16.
 */

import {
    Document,
} from "mongoose";

export interface FarcUser {
  uid: string;
  name: string;
  vorname: string;
  mail: string;
  roles: string[];
}

export interface FarcUserDocument  extends FarcUser, Document { }
