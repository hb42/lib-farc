/**
 * cron time string pruefen (hh:mm)
 *
 * liefert ein string[] | null (ungueltiger string)
 * -> [1] = "hh", [2] = "mm"
 *
 * @param c - Benutzereingabe
 */
export const checkCronTime = (c: string): string[] | null => {
  const re = /^(\d?\d{1}):(\d?\d{1})$/;
  if (typeof c !== "string") {
    return null;
  }
  let match = re.exec(c.trim());
  if (match) {
    const h = parseInt(match[1], 10);
    const m = parseInt(match[2], 10);
    if (h >= 0 && h < 24 && m >= 0 && m < 60) {
      match[1] = ("0" + match[1]).slice(-2);
      match[2] = ("0" + match[2]).slice(-2);
    } else {
      match = null;
    }
  }
  return match;
};

/**
 * Wert fuers Speichern in der Config aufbereiten
 *
 * string, boolean, number werden als Object gespeichert: {_val_: value}
 * object wird unveaendert uebernommen
 * null -> Datensatz loeschen
 * undefined -> keine Aktion
 *
 * @param val
 */
export const setConfigValue = (val: any): any => {
  switch (typeof val) {
    case "string" :
    case "number" :
    case "boolean":
      return {_val_: val};
      break;
    case "object" :  // auch null!
      return val;
      break;
    default:
      return undefined;
  }
};

/**
 * Wert aus der Config zurueckgeben (s.o.)
 *
 * Einzelne string, number oder boolean werden als Einzelwerte geliefert,
 * der Rest wird unveraendeert zurueckgegeben.
 *
 * @param val
 */
export const getConfigValue = (val: any): any => {
  return val && val._val_ !== undefined ? val._val_ : val;
};
