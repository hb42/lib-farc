/*
 * farc Baumknoten
 *
 * Damit das mit primeNG Tree verwendbar ist muss es das primeNG-interface imitieren:
 * (kein extends, Serverseitig wird die Lib nicht gebraucht)
 *
 * export interface TreeNode {
 *   label?: string;
 *   data?: any;
 *   icon?: any;
 *   expandedIcon?: any;
 *   collapsedIcon?: any;
 *   children?: TreeNode[];
 *   leaf?: boolean;
 * }
 */
// import {
//   TreeNode,
// } from "primeng/primeng";

import {
  FarcDriveTypes,
  FarcEntryTypes,
  FarcSelectType,
} from "./";

/*
  Date
  milis: number = date.getTime()
  date: Date = new Date(milis)
 */
export interface FarcTreeNode /*extends TreeNode*/ {
  label?: string;      // primeng.TreeNode -> file-/dir-name
  timestamp?: number;   // milis -> wg. JSON.stringify
  size?: number;
  children?: FarcTreeNode[];  // TreeNode
  files?: FarcTreeNode[];
  entrytype?: FarcEntryTypes;
  arc?: boolean;   // archive j/n
  path?: string[];   // Pfad zu diesem Knoten
  data?: any;          // primeng.TreeNode -> ignore
  icon?: any;          // primeng.TreeNode -> run time
  expandedIcon?: any;  // primeng.TreeNode -> run time
  collapsedIcon?: any; // primeng.TreeNode -> run time
  leaf?: boolean;      // primeng.TreeNode w/ lazy loading
  type?: string;       // primeng.TreeNode -> Template
  entryid?: string;
  selected?: FarcSelectType;  // Auswahl
  selectUid?: string;         //   UID
  selectDate?: number;        //   milis
  oe?: string;   // nur EP
  drive?: FarcDriveTypes; // nur top node (drive)
}
