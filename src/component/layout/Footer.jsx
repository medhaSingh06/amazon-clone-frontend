import { AppBar, Toolbar, Typography } from '@mui/material'
import './Layout.css'
export const Footer = () => {
  
  return (
    <AppBar position='static' color="primary">
      <Toolbar>
        <Typography>
          &copy; 2023 E-commerce Website
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
