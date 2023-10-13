
import {Typography, Paper, Grid, TextField, InputAdornment} from '@mui/material'
// import { DUMMY_ITEMS } from '../../MenuData'
import {ProductItem} from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchProducts } from '../store/productSlice'
import SearchIcon from '@mui/icons-material/Search';
import {STATUS} from '../store/productSlice'


export const Products = () => {
  // const token = localStorage.getItem('Atoken')


    const dispatch = useDispatch()
    const [searchQuery, setSearchQuery] = useState('')
    const {data: products, status} = useSelector(state => state.product)
    console.log(products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
    if(status === STATUS.LOADING) {
      return <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>Loading...</Typography>
    }
    
    if(status === STATUS.ERROR){
      return <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>Something went wrong</Typography>
    }

  return (
    <div>
      <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>Please Login First</Typography>
    
    <Typography variant="h4" color='secondary' sx={{ textAlign: 'center', paddingTop: '20px' }}>Product List</Typography>

    <TextField
      label="Search products..."
      variant="outlined"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
        sx: {
          color: 'white',
          '& fieldset': { borderColor: 'white' },
          '&:hover fieldset': { borderColor: 'white' },
        },
      }}
    />

    <Grid container spacing={3}>
    {products.length > 0 && products.map((item) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
      <Paper key={item.id} elevation={3} style={{ padding: '20px', margin: '10px'}}>
        <ProductItem
          id={item.id}
          itemName={item.itemName}
          price={item.price}
          description={item.description}
          imageURL={item.imageURL}
        />
      </Paper>
      </Grid>
    ))}
    </Grid>

       </div>
  )
}
