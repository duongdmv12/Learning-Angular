import { BaseResponseModel } from "../base.model";
import { DoctorModel } from "../doctor.model";

export namespace DoctorResponse {
  export interface GetDoctors extends BaseResponseModel<DoctorModel.DoctorInfo[]> {

  }

  export interface CreateDoctor extends BaseResponseModel<DoctorModel.DoctorInfo> {

  }
}
