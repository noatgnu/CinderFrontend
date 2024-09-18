export interface User {
  id: number;
  username: string;
  is_staff: boolean;
  first_name: string;
  last_name: string;
  email: string;
}

export interface UserQuery {
  count: number;
  next: string|null;
  previous: string|null;
  results: User[];
}
