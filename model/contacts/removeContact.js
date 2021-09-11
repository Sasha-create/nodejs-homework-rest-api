const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");
const { v4: uuid } = require("uuid");

const removeContact = async (contactId) => {
  try {
    const contacts = await readContacts();
    const idx = isNaN(contactId)
      ? contacts.findIndex((item) => item.id === contactId)
      : contacts.findIndex((item) => item.id === +contactId);
    if (idx === -1) {
      throw new Error(`Contact with id=${id} not found`);
    }
    const filterContacts = contacts.filter(({ id }) => id !== +contactId);
    const contactsString = JSON.stringify(filterContacts, null, 2);
    await fs.writeFile(contactsPath, contactsString);
    console.log(filterContacts);
    return filterContacts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    removeContact
};