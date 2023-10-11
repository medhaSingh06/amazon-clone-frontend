import React from 'react';
import { useForm } from 'react-hook-form';
import { Container, Typography, TextField, Button, Grid, Paper, Input} from '@mui/material'

export const Register = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
 
  const onSubmit = (data) => {console.log(data)};

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align='center' gutterBottom > Registration</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
      <Grid item xs={12} gutterBottom >
        <TextField
          {...register('firstName', { 
            required: "Name is required", 
            minLength: {
            value: 3,
            message: "Name should be greater than 2 characters",
          },
          maxLength: {
            value: 20,
            message: "Name should be less than 20 characters",
          },
           })}
          label="First Name"
          fullWidth
          error={!!errors.firstName}
          helperText={errors.firstName && errors.firstName.message }
        />
        </Grid>

        <Grid item xs={12} gutterBottom >
        <TextField
          {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
          label="Last Name"
          fullWidth
          error={!!errors.lastName}
          helperText={errors.lastName && "Last Name is required"}
        />
        </Grid>
        <Grid item xs={12} gutterBottom >
        <TextField
           {...register("email", {
              required: "Email is required",
              pattern: {
                value: 
                  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message : "Invalid email address format"
                
              }
            })}
          label="Email"
          fullWidth
          error={!!errors.email}
          helperText={errors.email && errors.email.message }
        />
        </Grid>
        <Grid item xs={12} gutterBottom >
        <TextField
          {...register('password', { required: true })}
          label="Password"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password && "Password is required"}
        />
        </Grid>
        <Grid item xs={12} gutterBottom >
            <Typography variant='body2' gutterBottom >Profile Picture</Typography>
            <Paper elevation={3}>
            <label htmlFor='profilePicture' style={{cursor: 'pointer'}}>
          <Input type="file" id="profilePicture" {...register("profilePicture")} gutterBottom/>
          <Button component='span' variant='outlined' color='primary' gutterBottom >Upload Picture</Button>
          </label>
            </Paper>
        </Grid>
        </Grid>
        <Grid item xs={5}>
        <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop: '20px'}}>
          Register
        </Button>
        </Grid>
      </form>
    </Container>
  );
}

