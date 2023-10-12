
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from '@mui/material'
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
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
             <TextField
          {...register('password', { required: true })}
          label="Password"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password && "Password is required"}
        />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container justifyContent="space-between">
  <Grid item xs>
    <Button color="primary" component={Link}>
      Forgot Password
    </Button>
  </Grid>
  <Grid item>
    <Button color="primary" component={Link} to="/register">
      Don't have an account? Sign Up
    </Button>
  </Grid>
</Grid>
          </Box>
        </Box>

      </Container>
  )
}