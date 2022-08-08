import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SubmitButton, Label, InputField } from './ContactForm.styled';
import { Box } from 'components/Common/Box.styled';

const initialValues = { id: '', name: '', number: '' };

let buttonText = 'Add user';

export class ContactForm extends Component {
  state = initialValues;

  contactSubmitHandler = e => {
    e.preventDefault();
    const { id, name, number } = e.target.elements;
    if (this.props.onSubmit({ id: id.value, name: name.value, number: number.value })) this.setState(initialValues);
  };

  handleChange = e => {
    this.setState({ [e?.currentTarget?.name]: e?.currentTarget?.value });
  };

  render() {
    return (
      <form action="#" onSubmit={this.contactSubmitHandler}>
        <input name="id" defaultValue={this.state.id} hidden />

        <Box display="flex" flexDirection="column" my="10px" p="0" border="1px solid #888888" borderRadius="2px">
          <Label htmlFor="contactName">Name</Label>
          <InputField
            id="contactName"
            type="text"
            name="name"
            value={this.state.name}
            title="Enter your name"
            required
            onChange={this.handleChange}
          />
        </Box>

        <Box display="flex" flexDirection="column" my="10px" p="0" border="1px solid #888888" borderRadius="2px">
          <Label htmlFor="contactNumber">Phone number</Label>
          <InputField
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,15}"
            title="Phone number must be up to 15 digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleChange}
          />
        </Box>

        <SubmitButton type="submit">{buttonText}</SubmitButton>
        Classic form
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
