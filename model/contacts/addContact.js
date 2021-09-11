const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");
const { v4: uuid } = require("uuid");

const addContact = async (body) => {
  try {
    const newContact = {
      id: uuid(),
      ...body,
    };
    const contacts = await readContacts();
    contacts.push(newContact);
    const contactsString = JSON.stringify(contacts, null, 2);
    await fs.writeFile(contactsPath, contactsString);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
    addContact
}