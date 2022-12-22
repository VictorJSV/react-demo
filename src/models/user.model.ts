export interface UserState {
  status: string;
  error: null | string;
  data: {
    id: number;
    name: string;
  }
}
