export const TextInput = ({addContacts , changeInput}) => {
  return (
    <div>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={(e) => changeInput(e.target.value)}
      />

      <button type="button" onClick={addContacts}>Add Contact</button>
    </div>
  );
};
