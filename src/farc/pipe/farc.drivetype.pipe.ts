/**
 * Created by hb on 27.01.17.
 */

import {
  Pipe,
  PipeTransform,
} from "@angular/core";

import {
  FarcDriveTypes,
} from "../model";

@Pipe({name: "drivetype"})
export class FarcDrivetypePipe implements PipeTransform {

  public transform(value: any[]/*, params: any[]*/): any {
    let item: number = Number(value);
    return FarcDriveTypes[item.toString()].toString();
  }

}
