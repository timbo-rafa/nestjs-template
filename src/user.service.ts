import { Injectable } from "@nestjs/common";
import { Userlogin } from "./app.controller";
import { error } from "console";

type UserEntity = {
  userId: string
  password: string

  isDeleted: boolean
}

export type UserLoginError = 'USER_NOT_FOUND' | 'INCORRECT_PASSWORD'

type GetUserOutput = {
  user? : UserEntity
  error : UserLoginError | null
}

@Injectable()
export class UserService {
  private dbService: any;
  getUserByUsername(username: string, inputPassword: string): GetUserOutput {
    const user = this.dbService.getUser(username)

    if (!user || user.isDeleted) {
      return {
        error: 'USER_NOT_FOUND'
      }
    }

    if (!this.validatePassword(user.password, inputPassword)) {
      return {
        error: 'INCORRECT_PASSWORD',
      }
    }

    return {
      error: null,
      user
    };

  }

  private createNewUser(userEmail: string) {}

  private validatePassword(user:UserEntity, password: string) {
    const hashedPassword = this.hash(password);

    if (user.password === hashedPassword) {
      return true
    }

    return false;
  }

  hash(str: string) {
    return str
  }
}
