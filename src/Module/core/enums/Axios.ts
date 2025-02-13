export enum AxiosQueryEnum {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
}

export enum AxiosStatusEnum {
  VALIDATION = 422,
  AUTHENTICATED = 401,
}

export enum AxiosEnum {
  BASEURL = "http://161.97.101.224:3003",
  IMAGE_BASE_URL = "http://161.97.101.224:3003" + '/' as any,
  HEADER_KEY = 'X-Custom-Query-Key',
  HEADER_CUSTOM_MESSAGE = 'X-Custom-message',
  RESPONSE_TYPE = 'json',
  TIMEOUT = 120000,
  BEARER = 'Bearer ',
}

export enum AxiosQueryStatusEnum {
  ERROR = 'error',
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
}
