import { TUser } from './users.type'

declare global {
  namespace App {
    interface IUser extends TUser {}
  }
}