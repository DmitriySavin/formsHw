import { Component } from "react";
import "./App.css";
import { TextInput } from "./components/TextInput/TextInput";
import { ContactsList } from "./components/ContactsList/ContactsList";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
    name: "",
  };


  changeInput = (value) => {
  this.setState({ name: value, });

  }

  addContacts = () => {
    const { name } = this.state;

    if (name != '') {
      this.setState(({ contacts , name }) => ({
      contacts: [...contacts, { name , id: nanoid()}],
      name: '',
    }));
    }

    console.log(this.state)
  };


  render() {
    const { contacts } = this.state;
     
    return (
      <>
        <TextInput addContacts={this.addContacts} changeInput={this.changeInput} />
        <ContactsList contacts={contacts}  />
      </>
    );
  }
}
