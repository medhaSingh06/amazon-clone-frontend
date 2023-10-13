import { useForm } from 'react-hook-form';
import { Link,  } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Snackbar,
  Alert
} from '@mui/material'
import { userRegister } from '../../api/apiHandler';
import { useState } from 'react';

export const Register = () => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
  const token = localStorage.getItem('Atoken')

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
  const handleSnackbarOpen = (message) => {
    setIsSnackbarOpen(true)
  }
  const handleSnackbarClose = (message) => {
    setIsSnackbarOpen(false)
  }

  const onSubmit = (data) => {
    // console.log(data);
    userRegister(data).then(res=>{
      console.log(res)
      console.log(res.status)
      if(res.status === 201){
        // first display toaster to verify an email
        // and then navigate to login
          handleSnackbarOpen("Please verify from email")
      }
      // else{
      //   console.log("HELLO")
      //   console.log(res)
      //   handleSnackbarOpen("Error")
  // }
})}
  return (
    <>
    {token ? (
      <>
      <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>Already Registered</Typography>
      </>
    ) : (
      <>
    <Container component="main" maxWidth="xs" sx={{bgcolor: 'white'}}>
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3}}>
            <Grid container spacing={2}>
          
              <Grid item xs={12} sm={6}>
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
                    pattern: {
                      value: /^[a-zA-Z ]+$/,
                      message: "Name should contain only alphabetic characters",
                    },
                  })}
                  label="First Name"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName && errors.firstName.message }
                />
              </Grid>

              <Grid item xs={12} sm={6} color="white">
                <TextField
                  {...register('lastName', { pattern: /^[A-Za-z]+$/i })}
                  label="Last Name"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName && "Last Name is required"}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message : "Invalid email address format"
                    }
                  })}
                label="Email"
                fullWidth
                error={!!errors.email}
                helperText={errors.email && errors.email.message }
                />
              </Grid>
              
              <Grid item xs={12} color="white">
                <TextField
                  {...register('password', { required: "Name is required", 
                    minLength: {
                      value: 3,
                      message: "Name should be greater than 2 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Name should be less than 20 characters",
                    }
                    // pattern: {
                    //   value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    //   message: "minimum eight characters, at least one letter and one number",
                    // }
                    })}
                    label="Password"
                    type="password"
                    fullWidth
          error={!!errors.password}
          helperText={errors.password && "Password is required"}
        />
              </Grid>
              <Grid  item xs={12} color="white">
              <Typography variant='body2' gutterBottom >Profile Picture</Typography>
            {/* <Paper elevation={3}>
            <label htmlFor='profilePicture' style={{cursor: 'pointer'}}>
          <Input type="file" id="profilePicture" {...register("profilePicture")} gutterBottom color="secondary" />
          <Button component='span' variant='outlined' color='primary' gutterBottom >Upload Picture</Button>
          </label>
            </Paper> */}
            
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
              <Typography>
     <Link to="/signIn">Already have an account? Sign in</Link>
    </Typography>
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snackbar
  open={isSnackbarOpen}
  autoHideDuration={3000} // Adjust the duration as needed (e.g., 3000ms = 3 seconds)
  onClose={handleSnackbarClose}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
>
  <Alert >
    message
  </Alert>
</Snackbar>
      </Container>
      </>
  )
    }
    </>
  )
}


