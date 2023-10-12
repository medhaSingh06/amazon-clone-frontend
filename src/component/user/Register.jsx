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
  Paper, Input
} from '@mui/material'

export const Register = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm();
 
  const onSubmit = (data) => {console.log(data)};

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
              <Grid item xs={12} color="white">
              <TextField
          {...register('password', { required: true })}
          label="Password"
          type="password"
          fullWidth
          error={!!errors.password}
          helperText={errors.password && "Password is required"}
        />
              </Grid>
              <Grid  item xs={12} color="white">
              <Typography variant='body2' gutterBottom >Profile Picture</Typography>
            <Paper elevation={3}>
            <label htmlFor='profilePicture' style={{cursor: 'pointer'}}>
          <Input type="file" id="profilePicture" {...register("profilePicture")} gutterBottom color="secondary" />
          <Button component='span' variant='outlined' color='primary' gutterBottom >Upload Picture</Button>
          </label>
            </Paper>
            
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails"  />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
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
                {/* <Link to="/signIn" variant="body2">
                  Already have an account? Sign in
                </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
  );
}

