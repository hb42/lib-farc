/**
 * Created by hb on 29.05.16.
 */

import {
    Document,
    Types,
} from "mongoose";

import { FarcTreeNode } from "./";

export interface FarcTree {
  endpunkt: Types.ObjectId;
  tree: FarcTreeNode;
}

export interface FarcTreeDocument extends FarcTree, Document { }
