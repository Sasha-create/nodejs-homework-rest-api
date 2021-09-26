const { update } = require("../controllers/contacts");

const contacts = require("../model/contacts");

jest.mock("../model/contacts");
describe("Unit test contollers contacts", () => {
  const req = { user: { id: 1 }, body: {}, params: { id: 1 } };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn((data) => data),
  };
  const next = jest.fn();

  test("test update contact", async () => {
    contacts.update = jest.fn(() => {
      return { contact: { id: 1 } };
    });
    const result = await update(req, res, next);
    console.log(result);
  });
});
