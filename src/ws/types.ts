export interface ApiPostProps {
  data: object;
  route: string;
  isLoginRequest: boolean;
}

export interface ApiUpdateProps {
  data: object;
  url: string;
}

export interface ApiPostData {
  data: object;
}
