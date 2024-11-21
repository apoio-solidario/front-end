type Errors = Map<string, string>;

export interface Error {
  path: string;
  method: string;
  status: number;
  statusText: string;
  message: string;
  errors: Errors;
}
