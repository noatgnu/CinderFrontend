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

export interface UserSession {
  status: number,
  data: {
    user: {
      id: number,
      display: string,
      has_usable_password: boolean,
      email: string,
      username: string
    },
    methods: {
      method: string,
      at: number,
      email: string
      username: string
    }[]
  },
  meta: {
    session_token: string,
    access_token: string,
    is_authenticated: boolean
  }
}

export interface UserProfile {
  id: number;
  user: number;
  created_at: Date;
  updated_at: Date;
  created_by_allauth: boolean;
}
