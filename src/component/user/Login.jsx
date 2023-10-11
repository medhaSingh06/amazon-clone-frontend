import React from 'react'
import { useForm } from 'react-hook-form';
import { Container, Typography, TextField, Button, Grid, Paper, Input} from '@mui/material'
import { Link } from 'react-router-dom';


export const Login = () => {
    const { 
        register, 
        handleSubmit, 
        formState: { errors } 
      } = useForm();
     
      const onSubmit = (data) =>{
        console.log(data)
    };
  return (
    <Container maxWidth="xs">
    <Typography variant="h4" align='center' gutterBottom > Sign In</Typography>
    <form onSubmit={handleSubmit(onSubmit)}>
    <Grid container spacing={2}>
    <Grid item xs={12} gutterBottom>
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
      </Grid>
      <Grid item xs={5}>
      <Button type="submit" variant="contained" color="primary" fullWidth style={{marginTop: '20px'}}>
        Sign In
      </Button>
      </Grid>
    </form>
    {/* if user Authicated-link go to profile */}
    <Typography>
        Don't have an account? <Link to="/register">Register here</Link>
    </Typography>

  </Container>
  )
}
