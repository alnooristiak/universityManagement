import { Model, Schema, model } from 'mongoose'
import { IUser } from './users.interface'

// user model
type UserModel = Model<IUser, object>

// creating a model
const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const User = model<IUser, UserModel>('User', userSchema)
