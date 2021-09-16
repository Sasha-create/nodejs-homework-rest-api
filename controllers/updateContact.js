const { Contact } = require("../models/contact");

const updateContact = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(
      { _id: contactId },
      req.body
    );

    if (result) {
      return res
        .status(200)
        .json({ status: "success", code: 200, data: { result } });
    }
    return res
      .status(404)
      .json({ status: "error", code: 404, message: "Not found" });
  } catch (error) {
    next(error);
  }
};

module.exports = updateContact;
