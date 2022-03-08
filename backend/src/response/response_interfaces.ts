export interface ResponseErrorMessage {
  errorMessage: string;
}

export interface ResponseSuccessSignIn {
  token: string;
}

export interface ResponseMessage {
  message: string;
}

export interface ResponseGalleryMessage {
  objects: string[];
  page: number;
  total: number;
}

export interface ResponseBadRequestMessage {
  errorMessage: string;
}
