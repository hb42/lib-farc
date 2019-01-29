export enum FarcEntryTypes {
  strukt, // Struktur-Verzeichnis -> alles oberhalb EP
  ep,     // Endpunkt
  dir,    // "normales" Verzeichnis unterhalb EP
  file,   // Datei
  wait,   // Tree-Node wird geladen
}
