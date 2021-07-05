export class User {
  name: string
  email: string
  role: string

  get isAdmin() {
    return this.role === UserRole.Admin
  }

  get isNormal() {
    return this.role === UserRole.Normal
  }

  get isSuper() {
    return this.role === UserRole.Normal
  }
}

export enum UserRole {
  Normal = 'Normal',
  Super = 'Super',
  Admin = 'Admin',
}
