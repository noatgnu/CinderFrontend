export interface UserAccount {
  token: string
  username: string
  darkMode: boolean
  lastVisited: Date
  currentLabGroup: number|null
  currentUser: number|null
}
