import {HashRepository} from '../repositories';
import {repository} from '@loopback/repository';
import {get, post, requestBody} from '@loopback/openapi-v3';
import {Hash} from '../models';


export class HashController {
  constructor(@repository(HashRepository) private hashRepository: HashRepository) {
  }

  @get('/chain/last')
  async getLastHash() {
    return this.hashRepository.findOne({
      order: ['id DESC']
    }, {});
  }

  @get('/api/v1/chain')
  async getHashes() {
    return this.hashRepository.find({}, {});
  }

  @post('/chain')
  async newHash(@requestBody() hash: Hash) {
    return this.hashRepository.save(new Hash(hash));
  }
}
