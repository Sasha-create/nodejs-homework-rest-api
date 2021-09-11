const path = require("path");
const fs = require("fs").promises;
const contactsPath = path.join(__dirname, "../db/contacts.json");
const { v4: uuid } = require("uuid");

const readContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  return contacts;
};
const listContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    throw error;
  }
};

module.exports = {
    readContacts,
    listContacts
}