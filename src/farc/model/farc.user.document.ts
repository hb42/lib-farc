/**
 * Created by hb on 15.08.16.
 */

import {
    Document,
} from "mongoose";

import {
  FarcSession,
} from "./";

export interface FarcUser {
  uid: string;
  name: string;
  vorname: string;
  mail: string;
  roles: string[];

  session: FarcSession;

}

export interface FarcUserDocument  extends FarcUser, Document { }
