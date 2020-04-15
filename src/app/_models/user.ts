export class User {
  id: number
  username: string
  password: string
  name: string
  access_token?: string
  user: {
    client_id: number
    reviser_id: number
    editor_id: number
  }
}
