
"use strict";

let VehicleInfo = require('./VehicleInfo.js');
let RTCM = require('./RTCM.js');
let BatteryStatus = require('./BatteryStatus.js');
let LogData = require('./LogData.js');
let WaypointList = require('./WaypointList.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let MountControl = require('./MountControl.js');
let VFR_HUD = require('./VFR_HUD.js');
let Thrust = require('./Thrust.js');
let Tunnel = require('./Tunnel.js');
let ActuatorControl = require('./ActuatorControl.js');
let StatusText = require('./StatusText.js');
let RCIn = require('./RCIn.js');
let RadioStatus = require('./RadioStatus.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let CommandCode = require('./CommandCode.js');
let WaypointReached = require('./WaypointReached.js');
let Mavlink = require('./Mavlink.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let GPSINPUT = require('./GPSINPUT.js');
let GPSRTK = require('./GPSRTK.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let Trajectory = require('./Trajectory.js');
let HilSensor = require('./HilSensor.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let HilGPS = require('./HilGPS.js');
let ParamValue = require('./ParamValue.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let TerrainReport = require('./TerrainReport.js');
let PositionTarget = require('./PositionTarget.js');
let ManualControl = require('./ManualControl.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let HilControls = require('./HilControls.js');
let ExtendedState = require('./ExtendedState.js');
let CellularStatus = require('./CellularStatus.js');
let Vibration = require('./Vibration.js');
let GPSRAW = require('./GPSRAW.js');
let RTKBaseline = require('./RTKBaseline.js');
let State = require('./State.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let LogEntry = require('./LogEntry.js');
let Waypoint = require('./Waypoint.js');
let DebugValue = require('./DebugValue.js');
let FileEntry = require('./FileEntry.js');
let HomePosition = require('./HomePosition.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let LandingTarget = require('./LandingTarget.js');
let RCOut = require('./RCOut.js');
let Altitude = require('./Altitude.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let Param = require('./Param.js');
let ESCInfo = require('./ESCInfo.js');
let ESCStatus = require('./ESCStatus.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');

module.exports = {
  VehicleInfo: VehicleInfo,
  RTCM: RTCM,
  BatteryStatus: BatteryStatus,
  LogData: LogData,
  WaypointList: WaypointList,
  NavControllerOutput: NavControllerOutput,
  ESCInfoItem: ESCInfoItem,
  MountControl: MountControl,
  VFR_HUD: VFR_HUD,
  Thrust: Thrust,
  Tunnel: Tunnel,
  ActuatorControl: ActuatorControl,
  StatusText: StatusText,
  RCIn: RCIn,
  RadioStatus: RadioStatus,
  AttitudeTarget: AttitudeTarget,
  CommandCode: CommandCode,
  WaypointReached: WaypointReached,
  Mavlink: Mavlink,
  CompanionProcessStatus: CompanionProcessStatus,
  ESCTelemetryItem: ESCTelemetryItem,
  ADSBVehicle: ADSBVehicle,
  ESCStatusItem: ESCStatusItem,
  GPSINPUT: GPSINPUT,
  GPSRTK: GPSRTK,
  OverrideRCIn: OverrideRCIn,
  Trajectory: Trajectory,
  HilSensor: HilSensor,
  WheelOdomStamped: WheelOdomStamped,
  HilGPS: HilGPS,
  ParamValue: ParamValue,
  PlayTuneV2: PlayTuneV2,
  EstimatorStatus: EstimatorStatus,
  TerrainReport: TerrainReport,
  PositionTarget: PositionTarget,
  ManualControl: ManualControl,
  OpticalFlowRad: OpticalFlowRad,
  OnboardComputerStatus: OnboardComputerStatus,
  HilControls: HilControls,
  ExtendedState: ExtendedState,
  CellularStatus: CellularStatus,
  Vibration: Vibration,
  GPSRAW: GPSRAW,
  RTKBaseline: RTKBaseline,
  State: State,
  HilActuatorControls: HilActuatorControls,
  LogEntry: LogEntry,
  Waypoint: Waypoint,
  DebugValue: DebugValue,
  FileEntry: FileEntry,
  HomePosition: HomePosition,
  CamIMUStamp: CamIMUStamp,
  GlobalPositionTarget: GlobalPositionTarget,
  LandingTarget: LandingTarget,
  RCOut: RCOut,
  Altitude: Altitude,
  TimesyncStatus: TimesyncStatus,
  CameraImageCaptured: CameraImageCaptured,
  ESCTelemetry: ESCTelemetry,
  Param: Param,
  ESCInfo: ESCInfo,
  ESCStatus: ESCStatus,
  HilStateQuaternion: HilStateQuaternion,
  MagnetometerReporter: MagnetometerReporter,
};
