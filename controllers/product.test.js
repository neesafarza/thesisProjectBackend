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

  //   it('should call res.status with 201 on successful post', async () => {
  //     product.create = jest.fn();
  //     product.create.mockResolvedValue(mockProductEntry);
  //     await postProduct(req, res);
  //     expect(res.status).toHaveBeenCalledWith(201);
  //   });

  //   it('should call res.json with DB', async () => {
  //     product.create = jest.fn();
  //     product.create.mockResolvedValue(mockProductEntry);
  //     await postProduct(req, res);
  //     expect(res.json).toHaveBeenCalledWith(mockProductEntry);
  //   });
});

// describe('putProduct fails', () => {
//   it('should call res.sendStatus once when id doesnt exist', async () => {
//     const reqError = buildReq(mockErrorEntryId);
//     await putProduct(reqError, res);
//     expect(res.sendStatus).toHaveBeenCalledTimes(1);
//   });

//   it('should call sendStatus with 500 when id doesnt exist', async () => {
//     const reqError = buildReq(mockErrorEntryId);
//     await putProduct(reqError, res);
//     expect(res.sendStatus).toHaveBeenCalledWith(500);
//   });
// });

// describe('getProduct', () => {
//   //TODO: add error check
//   const req = buildReq();

//   it('Product.findAll should have been called once', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockProduct);
//     await getProduct(req, res);
//     expect(Product.findAll).toHaveBeenCalledTimes(1);
//   });

//   it('should call res.json with Product', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockProduct);
//     await getProduct(req, res);
//     expect(res.json).toHaveBeenCalledWith(mockProduct);
//   });

//   it('should call res.status with 200', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockProduct);
//     await getProduct(req, res);
//     expect(res.status).toHaveBeenCalledWith(200);
//   });
// });

// describe('postProduct fails', () => {
//   it('should call res.sendStatus once when missing max_attendants', async () => {
//     const reqError = buildReq(mockErrorEntryMA);
//     await postProduct(reqError, res);
//     expect(res.sendStatus).toHaveBeenCalledTimes(1);
//   });

//   it('should throw 500 error when missing max_attendants', async () => {
//     const reqError = buildReq(mockErrorEntryMA);
//     await postProduct(reqError, res);
//     expect(res.sendStatus).toHaveBeenCalledWith(500);
//   });

//   it('should throw 500 error when missing name', async () => {
//     const reqError = buildReq(mockErrorEntryN);
//     await postProduct(reqError, res);
//     expect(res.sendStatus).toHaveBeenCalledWith(500);
//   });
// });


// describe('putProduct', () => {
//   const req = buildReq(mockUpdateProduct);
//   Product.update = jest.fn();
//   Product.update.mockResolvedValue(mockUpdateProduct);

//   it('should call Product.update once', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockUpdatedProduct);
//     await putProduct(req, res);
//     expect(Product.update).toHaveBeenCalledTimes(1);
//   });

//   it('should call res.json with updated list from DB', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockUpdatedProduct);
//     await putProduct(req, res);
//     expect(res.json).toHaveBeenCalledWith(mockUpdatedProduct);
//   });

//   it('should call res.status with 200 on successful update', async () => {
//     Product.findAll = jest.fn();
//     Product.findAll.mockResolvedValue(mockUpdatedProduct);
//     await putProduct(req, res);
//     expect(res.status).toHaveBeenCalledWith(200);
//   });
// });

// describe('deleteProduct', () => {
//   const req = buildReq(mockDeleteProduct);
//   Product.destroy = jest.fn();
//   Product.destroy.mockResolvedValue(mockDeleteProduct);

//   it('should call Product.destroy once', async () => {
//     await deleteProduct(req, res);
//     expect(Product.destroy).toHaveBeenCalledTimes(1);
//   });

//   it('should call res.sendStatus with 204 on successful deletion', async () => {
//     await deleteProduct(req, res);
//     expect(res.sendStatus).toHaveBeenCalledWith(204);
//   });
// });
