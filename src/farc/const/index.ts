/**
 * const fuer farc und farc-server
 */

// -- config --
export const confROLES: string = "ROLES"; // -> value: FarcRole[]
export const confUSER: string  = "U$ER"; // -> name=<UID>, value: FarcSession
export const confPACK: string  = "egakcap"; // -> package.json holen

export const confTREEDATE: string  = "farc-server.tree.date";  // tree read date
export const confCRON: string      = "farc-server.cron.date";
export const confREADTREE: string  = "farc-server.readTree";
export const confEXECVORM: string  = "farc-server.execVorm";
export const confMAXERL: string    = "farc-server.max.result.days";
export const confGBPRICE: string   = "farc-server.price.per.gb";
export const confMWST: string      = "farc-server.mwst";
export const confMAILFROM: string  = "farc-server.mail.from";
export const confADMINMAIL: string = "farc-server.adminMail";

// -- SSE --
export const sseNAME: string    = "farc";
export const sseNEWVORM: string = "newvormerk";
export const sseNEWTREE: string = "newtree";

// -- REST-API --
/**
 * Pfad fuer die API
 */
export const apiROOT: string = "/farc";

/**
 * /tree
 *   GET:    Baum bis zu den EPs holen
 *           returns FarcTreeNode[]
 */
export const apiTREE: string = "/tree";
/**
 * /children/:entryid
 *   GET:    naechste Verzeichnisebene unterhalb 'entryid' fuer den Baum holen
 *           returns FarcTreeNode[]
 */
export const apiCHILDREN: string = "/children";
/**
 * /files/:entryid
 *   GET:    Dateien fuer Verzeichnis 'entryid' holen
 *           returns FarcTreeNode[]
 */
export const apiFILES: string = "/files";

/**
 * /oelist
 *   GET:    OE-Uebersicht-Liste holen
 *           returns FarcTreeNode[]
 */
export const apiOELIST: string = "/oelist";

/**
 * "/config/:conf_name"
 *   GET:    Config-Wert fuer 'conf_name' holen
 *           conf_name == confPACK -> holt ./package.json
 *           returns any
 *   POST:   Config-Wert 'conf_name' aendern/anlegen
 *           body: any
 *           returns Config-Wert: any
 *   DELETE: Config-Wert 'conf_name' loeschen
 */
export const apiCONFIG: string = "/config";

/**
 * /drives
 *   GET:    Laufwerksdaten holen
 *           returns FarcDriveDocument[]
 *   POST:   Laufwerk aendern/anlegen
 *           body: FarcDriveDocument
 *           returns FarcDriveDocument
 */
export const apiDRIVES: string = "/drives";
/**
 * /drive/:entryid
 *   DELETE: Laufwerk 'entryid' loeschen
 */
export const apiDRIVE: string = "/drive";

/**
 * /oes
 *   GET:    OEs holen
 *           returns FarcOeDocument[]
 *   POST:   OE aendern/anlegen
 *           body: FarcOeDocument
 *           returns FarcOeDocument
 */
export const apiOES: string = "/oes";
/**
 * /oe/:entryid
 *   DELETE: OE 'entyid' loeschen
 */
export const apiOE: string = "/oe";

/**
 * /eps
 *   GET:    Endpunkte holen
 *           returns FarcEndpunktDocument[]
 *   POST:   Endpunkt-OE-Zuordnung aendern
 *           body: FarcEndpunktDocument
 *           returns FarcEndpunktDocument
 */
export const apiEPS: string = "/eps";

/**
 * /vormerkung
 *   GET:    Vormerkungen des Benutzers holen
 *           returns FarcTreeNode[]
 *   POST:   Vormerkungs-Status speichern
 *           body: FarcTreeNode
 *           returns FarcTreeNode[]
 */
export const apiVORMERKUNG: string = "/vormerkung";
/**
 * /execvorm/:entryid
 *   GET:    Vormerkung 'enntryid' ausfuehren
 *           returns string
 */
export const apiEXECVORM: string = "/execvorm";
/**
 * /results
 *   GET:    Vormerkungsergebnisse holen
 *           returns FarcResultDocument[]
 */
export const apiRESULTS: string = "/results";
/**
 * /result/:entryid
 *   DELETE: Ergebnis 'entryid' loeschen
 */
export const apiRESULT: string = "/result";

/**
 * /readall
 *   GET:    Verzeichnisse sofort einlesen
 *           returns string (Einlesen laeuft im Hintergrund)
 */
export const apiREADALL: string = "/readall";
/**
 * /readvorm
 *   GET:    Alle Vormerkungen sofort ausfuehren
 *           returns string (Vormerkungen laufen im Hintergrund)
 */
export const apiREADVORM: string = "/readvorm";
