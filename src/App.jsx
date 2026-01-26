import { Component } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { Filter } from "./components/Filter/Filter";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  componentDidMount() {
    const defaultContacts = [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    this.setState({
      contacts: savedContacts.length ? savedContacts : defaultContacts,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  changeInputName = (inputName) => {
    this.setState({ name: inputName });
  };

  changeInputNumber = (inputNumber) => {
    this.setState({ number: inputNumber });
  };

  addContacts = () => {
    const { contacts, name, number } = this.state;

    if (name.trim() === "") {
      return;
    }

    // console.log("INPUT:", name);
    // console.log(
    //   "CONTACTS:",
    //   contacts.map((c) => c.name)
    // );

    const findContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.trim().toLowerCase(),
    );

    if (findContact) {
      alert(` ${name} is already in contacts`);
      return;
    }

    if (number.trim() === "") {
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, { id: nanoid(), name, number }],
      name: "",
      number: "",
    }));
  };

  filterContacts = (id) => {
    const { contacts } = this.state;
    const newContacts = contacts.filter((contact) => {
      return contact.id !== id;
    });

    this.setState(({ contacts }) => ({
      contacts: newContacts,
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  changeFilter = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  render() {
    return (
      <>
        <h2>PhoneBook</h2>
        <TextInput
          addContacts={this.addContacts}
          changeInputName={this.changeInputName}
          changeInputNumber={this.changeInputNumber}
          name={this.state.name}
          number={this.state.number}
        />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactsList
          contacts={this.getVisibleContacts()}
          filterContacts={this.filterContacts}
        />
      </>
    );
  }
}
