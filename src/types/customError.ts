export interface ApiError {
  response?: {
    data?: {
      message?: string;
      shouldReLogin?: boolean;
    };
  };
}
