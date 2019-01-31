import { Document } from "mongoose";
export interface FarcUser {
    uid: string;
    name: string;
    vorname: string;
    mail: string;
    roles: string[];
}
export interface FarcUserDocument extends FarcUser, Document {
}
