import React from 'react';
import { Field, ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import { Labell } from './ContactForm.styled';
import { Box } from 'components/Common/Box.styled';
import PropTypes from 'prop-types';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  id: yup.bool(),
});

const initialValues = { name: '' };
let buttonText = 'Add user';

export const ContactForm = ({ submitHandler }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
      <Form>
        <Box display="flex" flexDirection="column" my={p => p.theme.mp(2)}>
          <Labell htmlFor="contactName">Name</Labell>
          <Field id="contactName" name="name" />
          <ErrorMessage name="name" />
          <input name="id" hidden />
        </Box>
        <button type="submit">{buttonText}</button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  children: PropTypes.object,
  id:PropTypes.bool,
};
