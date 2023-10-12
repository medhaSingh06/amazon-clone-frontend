
import {Typography, Paper, Grid} from '@mui/material'
// import { DUMMY_ITEMS } from '../../MenuData'
import {ProductItem} from './ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../store/productSlice'
import {STATUS} from '../store/productSlice'

export const Products = () => {
    const dispatch = useDispatch()
    const {data: products, status} = useSelector(state => state.product)
  //   const {status} = useSelector( state => state.product)

   

    useEffect(() => {
      dispatch(fetchProducts())
    }, [])
    if(status === STATUS.LOADING) {
      return <h2>Loading...</h2>
    }
    
    if(status === STATUS.ERROR){
      return <h2>Something went wrong</h2>
    }

  return (
    <div>
    <Typography variant="h4">Product List</Typography>
    <Grid container spacing={3}>
    {products.map((item) => (
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
