import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@mui/material';

const PasswordForm = ({ initialValues, handleSubmit }) => {
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  return (
    <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema} 
      onSubmit={handleSubmit}
    >
      {({ dirty, isValid }) => (
        <Form>
          <Field 
            as={TextField} 
            name="currentPassword" 
            type="password" 
            label="Current Password" 
            helperText={<ErrorMessage name="currentPassword" />} 
          />
          <Field 
            as={TextField} 
            name="newPassword" 
            type="password" 
            label="New Password" 
            helperText={<ErrorMessage name="newPassword" />} 
          />
          <Button 
            type="submit" 
            variant="contained" 
            color="primary" 
            disabled={!dirty || !isValid}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordForm;
