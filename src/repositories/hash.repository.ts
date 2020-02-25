import {DefaultCrudRepository} from '@loopback/repository';
import {Hash, HashRelations} from '../models';
import {SqliteDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HashRepository extends DefaultCrudRepository<
  Hash,
  typeof Hash.prototype.id,
  HashRelations
> {
  constructor(
    @inject('datasources.sqlite') dataSource: SqliteDataSource,
  ) {
    super(Hash, dataSource);
  }
}
