const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");
const { v4: uuid } = require("uuid");

const updateContact = async (contactId, body) => {
  try {
    const contacts = await readContacts();
    const [result] = isNaN(contactId)
      ? contacts.filter((contact) => contact.id === contactId)
      : contacts.filter((contact) => contact.id === +contactId);
    if (result) {
      Object.assign(result, body);
      await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    }
    return result;
  } catch (error) {
    throw error;
  }
};
module.exports = {
    updateContact
};