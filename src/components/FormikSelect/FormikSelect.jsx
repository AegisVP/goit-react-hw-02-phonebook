import React from 'react';

export const FormikSelect = ({ formikSelected, onFormikSelect }) => (
  <label>
    Show Formik: &nbsp;
    <input type="checkbox" name="formik" checked={formikSelected} onChange={onFormikSelect} />
  </label>
);
