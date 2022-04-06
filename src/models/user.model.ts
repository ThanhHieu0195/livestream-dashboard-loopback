import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';

@model({name: 'user', settings: {strict: false}})
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    default: () => uuid(),
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
    index: {
      unique: true,
    },
  })
  email: string;

  @property({
    type: 'string',
  })
  displayName?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  verified: boolean;

  @property({
    type: 'string',
    required: true,
  })
  password?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
