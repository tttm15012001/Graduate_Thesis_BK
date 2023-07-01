
"use strict";

let CommandTOL = require('./CommandTOL.js')
let ParamSet = require('./ParamSet.js')
let FileClose = require('./FileClose.js')
let FileRemoveDir = require('./FileRemoveDir.js')
let StreamRate = require('./StreamRate.js')
let FileMakeDir = require('./FileMakeDir.js')
let WaypointPush = require('./WaypointPush.js')
let CommandInt = require('./CommandInt.js')
let VehicleInfoGet = require('./VehicleInfoGet.js')
let SetMode = require('./SetMode.js')
let LogRequestEnd = require('./LogRequestEnd.js')
let LogRequestList = require('./LogRequestList.js')
let FileWrite = require('./FileWrite.js')
let ParamPush = require('./ParamPush.js')
let CommandBool = require('./CommandBool.js')
let ParamPull = require('./ParamPull.js')
let FileRemove = require('./FileRemove.js')
let CommandVtolTransition = require('./CommandVtolTransition.js')
let WaypointSetCurrent = require('./WaypointSetCurrent.js')
let CommandTriggerControl = require('./CommandTriggerControl.js')
let CommandAck = require('./CommandAck.js')
let ParamGet = require('./ParamGet.js')
let SetMavFrame = require('./SetMavFrame.js')
let MessageInterval = require('./MessageInterval.js')
let CommandTriggerInterval = require('./CommandTriggerInterval.js')
let FileList = require('./FileList.js')
let CommandLong = require('./CommandLong.js')
let WaypointPull = require('./WaypointPull.js')
let FileOpen = require('./FileOpen.js')
let MountConfigure = require('./MountConfigure.js')
let FileRead = require('./FileRead.js')
let LogRequestData = require('./LogRequestData.js')
let WaypointClear = require('./WaypointClear.js')
let CommandHome = require('./CommandHome.js')
let FileChecksum = require('./FileChecksum.js')
let FileRename = require('./FileRename.js')
let FileTruncate = require('./FileTruncate.js')

module.exports = {
  CommandTOL: CommandTOL,
  ParamSet: ParamSet,
  FileClose: FileClose,
  FileRemoveDir: FileRemoveDir,
  StreamRate: StreamRate,
  FileMakeDir: FileMakeDir,
  WaypointPush: WaypointPush,
  CommandInt: CommandInt,
  VehicleInfoGet: VehicleInfoGet,
  SetMode: SetMode,
  LogRequestEnd: LogRequestEnd,
  LogRequestList: LogRequestList,
  FileWrite: FileWrite,
  ParamPush: ParamPush,
  CommandBool: CommandBool,
  ParamPull: ParamPull,
  FileRemove: FileRemove,
  CommandVtolTransition: CommandVtolTransition,
  WaypointSetCurrent: WaypointSetCurrent,
  CommandTriggerControl: CommandTriggerControl,
  CommandAck: CommandAck,
  ParamGet: ParamGet,
  SetMavFrame: SetMavFrame,
  MessageInterval: MessageInterval,
  CommandTriggerInterval: CommandTriggerInterval,
  FileList: FileList,
  CommandLong: CommandLong,
  WaypointPull: WaypointPull,
  FileOpen: FileOpen,
  MountConfigure: MountConfigure,
  FileRead: FileRead,
  LogRequestData: LogRequestData,
  WaypointClear: WaypointClear,
  CommandHome: CommandHome,
  FileChecksum: FileChecksum,
  FileRename: FileRename,
  FileTruncate: FileTruncate,
};
