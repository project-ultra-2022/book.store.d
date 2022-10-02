export type StatusCode = 200 | 400 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>
