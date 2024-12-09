const contacts = [
    {
        id:1,
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
];

function Contact({ id, name, phone, email }) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {
    this.contacts = contacts || [];
}

Book.prototype.find = function (name)  {
    return this.contacts.filter(contact =>
        contact.name.toLowerCase() ).includes(name.toLowerCase());
};

Book.prototype.add = function (contact)  {
    const newId = this.contacts.length ? this.contacts[this.contacts.length - 1].id + 1 : 1;
    const newContact = new Contact({ id: newId, ...contact });
    this.contacts.push(newContact);
};

Book.prototype.remove = function (id) {
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        return this.contacts.splice(index, 1)[0];
    }
    return null;
};

Book.prototype.update = function (id,updatedData)  {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
        this.contacts[contactIndex] = { ...this.contacts[contactIndex], ...updatedData };
    }
};

const mappedContacts = contacts.map((el, index) => {
    return new Contact({ id: index + 1, ...el });
});


const book = new Book(mappedContacts);

book.add({ name: "John", phone: "+123456789", email: "john@example.com" });
console.log(book.find("John")); // Find by name
book.update(1, { phone: "+987654321" }); // Update contact with id=1
book.remove(1); // Remove contact with id=1
console.log(book.contacts)