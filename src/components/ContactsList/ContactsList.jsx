import { Filter } from "../Filter/Filter";

export const ContactsList = ({ contacts, filterContacts }) => {
  return (
    <>
      <h2>Contacts</h2>



      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button id={contact.id} onClick={() => filterContacts(contact.id)}>
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
