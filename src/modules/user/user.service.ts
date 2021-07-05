import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly repository: Model<UserDocument>,
  ) {}

  create(user: CreateUserDto) {
    this.repository.create(user)
  }

  findAll() {
    return `This action returns all user`
  }

  findOne(id: string) {
    return this.repository.findById(id)
  }

  update(id: string, data: UpdateUserDto) {
    return this.repository.updateOne({ _id: id }, data)
  }

  remove(id: string) {
    return this.repository.deleteOne({ _id: id })
  }
}
