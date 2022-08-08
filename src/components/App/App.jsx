import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Box } from 'components/Common/Box.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ListOfContacts } from 'components/ListOfContacts/ListOfContacts';
import { FilterForm } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-84' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-88-76' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-98' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-98-76' },
      { id: 'CQG3SQvP8CIMhSL_TwHAJ', name: 'Vlad', number: '876-54-34' },
      { id: '-x6fAYKt2r_kuK64F9c_6', name: 'Olga', number: '987-65-43' },
    ],
    filter: '',
    editId: '',
    editName: '',
    editNumber: '',
  };

  onAddContact = ({ id, name, number }) => {
    if (id === '' || id === null) id = nanoid();

    const normalizedName = name.trim();

    if (this.state.contacts.map(contact => contact.name).includes(normalizedName)) {
      window.alert('This name already exists in the list!');
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [...contacts, { id, name: normalizedName, number }] }));
    return id;
  };

  onEditContact = ({ id, name, number }) => {
    console.log( id, name, number);
    this.setState({ editId: id, editName: name, editNumber: number });
  };

  // onSaveContact = ({ id, name, number }) => {
  //   console.log('id, name, number', id, name, number);
  // };

  onDeleteContact = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) });
  };

  onFilterContacts = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };

  clearFilterField = () => {
    this.setState({ filter: '' });
  };

  render() {
    const { filter, contacts, editName, editNumber, editId } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));

    return (
      <Box display="flex" flexDirection="row">
        <Box display="flex" flexDirection="column">
          <Section title="Contact info">
            <ContactForm name={editName} number={editNumber} id={editId} onSubmit={this.onAddContact} />
          </Section>
          {this.state.contacts.length > 0 && (
            <Section>
              <FilterForm
                filterValue={this.state.filter}
                onClear={this.clearFilterField}
                onChange={this.onFilterContacts}
              />
            </Section>
          )}
        </Box>

        {this.state.contacts.length > 0 && (
          <Box display="flex" flexDirection="column">
            <Section title="Contact list" height="100%">
              <ListOfContacts
                onEditContact={this.onEditContact}
                onDeleteContact={this.onDeleteContact}
                contacts={filteredContacts}
              ></ListOfContacts>
            </Section>
          </Box>
        )}
      </Box>
    );
  }
}