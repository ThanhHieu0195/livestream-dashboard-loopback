import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {Programme, ProgrammeRelations} from '../models';

export class ProgrammeRepository extends DefaultCrudRepository<
  Programme,
  typeof Programme.prototype.id,
  ProgrammeRelations
> {
  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
  ) {
    super(Programme, dataSource);
  }
}
