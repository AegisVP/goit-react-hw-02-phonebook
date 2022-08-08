import React from 'react';
import { Box } from 'components/Common/Box.styled';
import { List, ListItem, Name, Number, DeleteButton, EditButton } from './ListOfContacts.styled';

export const ListOfContacts = ({ onDeleteContact, onEditContact, contacts, children }) => {
  return (
    <List>
      {children}
      {contacts.length > 0
        ? contacts.map(contact => (
            <ListItem key={contact.id}>
              <Box display="flex">
                <Name>{contact.name}</Name>
                <Number className="number">{contact.number}</Number>
              </Box>
              <Box>
                <EditButton
                  onClick={() => {
                    onEditContact(contact);
                  }}
                >
                  ✏️
                </EditButton>
                <DeleteButton
                  onClick={() => {
                    onDeleteContact(contact.id);
                  }}
                >
                  ❌
                </DeleteButton>
              </Box>
            </ListItem>
          ))
        : 'No matches found'}
    </List>
  );
};
