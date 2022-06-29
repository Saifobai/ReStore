import {  Button} from "@mui/material";
import { Product } from "../../app/models/product"
import ProductList from "./ProductList";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog(props:Props) {

const {products, addProduct} = props
  return (

    <>
           <ProductList products= {products} /> 
           <Button variant='contained' onClick={addProduct}>Add product</Button>
    </>
  )

}
