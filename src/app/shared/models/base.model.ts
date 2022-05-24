export interface BaseResponseModel<TData> {
  data: TData;
  errorsMessage: string;
  statusCode: number;
  errorCode: number;
}
