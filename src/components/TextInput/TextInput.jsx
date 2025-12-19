import './TextInput.css'

export const TextInput = ({ addContacts, changeInputName , changeInputNumber }) => {
  return (
    <form className="form">
      <label className='form-label'>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={(e) => changeInputName(e.target.value)}
          
        />
      </label>

      <label className='form-label'>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={(e) => changeInputNumber(e.target.value)}
        />
      </label>

      <button type="button" onClick={addContacts}>
        Add Contact
      </button>
    </form>
  );
};
