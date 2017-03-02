/**
 * Created by hb on 27.08.16.
 */

/**
 * Benutzer-Session
 *
 * Gespeichert in FarcConfig:
 *   name = <UID>
 *   value = new FarcSession
 */
export interface FarcSession {
  route?: string;
  treepath?: string[];

}
