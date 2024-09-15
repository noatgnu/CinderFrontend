export interface User {
  id: number;
  username: string;
  is_staff: boolean;
}

export interface UserQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: User[];
}
