// const { update } = require("../controllers/contacts");

// const contact = require("../model/contacts");

// jest.mock("../model/contacts");
// describe("Unit test contollers contacts", () => {
//   const req = { user: { id: 1 }, body: {}, params: { id: 1 } };
//   const res = {
//     status: jest.fn().mockReturnThis(),
//     json: jest.fn((data) => data),
//   };
//   const next = jest.fn();

//   test("test update contact exist", async () => {
//     const contact = { id: 1 };
//     contact.update = jest.fn(() => {
//       return contact;
//     });
//     const result = await update(req, res, next);
//     expect(result.status).toEqual("success");
//     expect(result.code).toEqual(HttpCode.OK);
//     expect(result.data.contact).toEqual(contact);
//   });
// });
