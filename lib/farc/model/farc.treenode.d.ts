import { FarcDriveTypes, FarcEntryTypes, FarcSelectType } from "./";
export interface FarcTreeNode {
    label?: string;
    timestamp?: number;
    size?: number;
    children?: FarcTreeNode[];
    files?: FarcTreeNode[];
    entrytype?: FarcEntryTypes;
    arc?: boolean;
    path?: string[];
    data?: any;
    icon?: any;
    expandedIcon?: any;
    collapsedIcon?: any;
    leaf?: boolean;
    type?: string;
    entryid?: string;
    selected?: FarcSelectType;
    selectUid?: string;
    selectDate?: number;
    oe?: string;
    drive?: FarcDriveTypes;
}
