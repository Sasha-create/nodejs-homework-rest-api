const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");
const { v4: uuid } = require("uuid");

const getByIdContact = async (contactId) => {
  try {
    const contacts = await readContacts();
    const selectContacts = isNaN(contactId)
      ? contacts.find(({ id }) => id === contactId)
      : contacts.find(({ id }) => id === +contactId);
    if (!selectContacts) {
      return null;
    }
    return selectContacts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    getByIdContact
};