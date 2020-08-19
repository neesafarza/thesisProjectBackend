const {
  getProduct,
  create,
  putProduct,
  deleteProduct,
} = require('./product');
const { product } = require('../models');
const {
  mockProduct,
  mockProductEntry,
  mockDeleteProduct,
  mockUpdateProduct,
  mockErrorEntryId,
  buildReq,
  buildRes,
} = require('./productMockData');
jest.mock('../models', () => ({ product: () => { } }));

const res = buildRes();

afterEach(() => {
  jest.clearAllMocks();
});

describe('postProduct', () => {
  const req = buildReq(mockProductEntry);
  it('product.create should be called once', async () => {
    product.create = jest.fn();
    product.create.mockResolvedValue(mockProductEntry);
    await create(req, res);
    expect(product.create).toHaveBeenCalledTimes(1);
  });
});
