import { Entity, model, property } from '@loopback/repository';

@model()
export class Customer extends Entity {
  @property({
    type: 'number',
    generated: true,
    id: 1,
    postgresql: { columnName: 'id', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'NO', generated: undefined },
  })
  id: number;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'firstName', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  firstName?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'lastName', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  lastName?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'email', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  email?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'phoneNumber', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  phoneNumber?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'longDistance', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  longDistance?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'international', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  international?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'local', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  local?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'dropped', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  dropped?: number;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'payMethod', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  payMethod?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'localBillType', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  localBillType?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'longDistanceBillType', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  longDistanceBillType?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'usage', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  usage?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'ratePlan', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  ratePlan?: number;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'gender', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  gender?: string;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'status', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  status?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'children', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  children?: number;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'estIncome', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  estIncome?: number;

  @property({
    type: 'string',
    generated: false,
    postgresql: { columnName: 'carOwner', dataType: 'character varying', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'YES', generated: undefined },
  })
  carOwner?: string;

  @property({
    type: 'number',
    scale: 0,
    generated: false,
    postgresql: { columnName: 'age', dataType: 'integer', dataLength: null, dataPrecision: null, dataScale: 0, nullable: 'YES', generated: undefined },
  })
  age?: number;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;
