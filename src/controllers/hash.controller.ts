import {HashRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {get} from '@loopback/openapi-v3';


export class HashController {
  constructor(@repository(HashRepository) private hashRepository: HashRepository) {
  }

  @get('/chain/last')
  async getLastHash() {
    return this.hashRepository.findOne({}, {sort: {id: -1}});
  }
}
