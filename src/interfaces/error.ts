export interface IError extends Error {
  statusCode: number
  data: Array<any>
}