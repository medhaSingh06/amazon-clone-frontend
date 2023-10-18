import { UseAuth } from '../../context/AuthContext';
import { Typography, Box } from '@mui/material';

export const HomePage = () => {
  const { token } = UseAuth();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh" // Adjust this value as needed
    >
      <Typography variant="h4" color="secondary">
        {token ? 'Welcome User' : 'Welcome Guest'} 
        <Typography variant="subtitle1" color="secondary">
        to the techMart
      </Typography>
      </Typography>
    </Box>
  );
};
