import {Entity, model, property} from '@loopback/repository';

@model()
export class Hash extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  value: string;


  constructor(data?: Partial<Hash>) {
    super(data);
  }
}

export interface HashRelations {
  // describe navigational properties here
}

export type HashWithRelations = Hash & HashRelations;
