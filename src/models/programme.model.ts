import {Entity, model, property} from '@loopback/repository';
import {v4 as uuid} from 'uuid';
import {ProgrammeStatus} from '../types/ProgrammeStatus';

@model({name: 'programme', settings: {strict: false}})
export class Programme extends Entity {
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
  name: string;

  @property({
    type: 'string',
  })
  desc?: string;

  @property({
    type: 'string',
    default: ProgrammeStatus.DRAFT,
  })
  status: ProgrammeStatus;

  @property({
    type: 'boolean',
    default: false,
  })
  deleted?: boolean;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  dateCreated?: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Programme>) {
    super(data);
  }
}

export interface ProgrammeRelations {
  // describe navigational properties here
}

export type ProgrammeWithRelations = Programme & ProgrammeRelations;
