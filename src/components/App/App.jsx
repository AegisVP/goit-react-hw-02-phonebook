import { Section } from 'components/Section/Section';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  contactSubmitHandler = e => {
    console.log(this.addContact({ name: e.name }));
  };

  addContact = ({ name }) => {
    const id = nanoid();

    this.setState(({contacts}) => ( { contacts: [ ...contacts, { id, name }] }));
    return id;
  };

  render() {
    return (
      <>
        <Section title="Contact info">
          <ContactForm submitHandler={this.contactSubmitHandler} />
        </Section>

        <Section title="Contact list">
          <ListOfContacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}
