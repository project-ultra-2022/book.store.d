export type StatusCode = 200 | 204 | 400 | 404 | 500;

export interface ApiResponse<T> {
  statusCode: StatusCode;
  message: string;
  data?: T;
}

// export type ErrorResponse<T> = Omit<SuccessResponse, 'data'>
