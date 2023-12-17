import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductFrom/ProductForm';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0]);

  // const getPrice = () => {
  //   if(currentSize.additionalPrice !== 0){
  //     const currentPrice = props.basePrice + currentSize.additionalPrice;
  //     return currentPrice;
  //   } else {
  //     return props.basePrice
  //   }
  // }

  const totalPrice = useMemo(() => {
    if(currentSize.additionalPrice !== 0){
    const currentPrice = props.basePrice + currentSize.additionalPrice;
    return currentPrice;
  } else {
    return props.basePrice
  } },[props.basePrice, currentSize]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor}/>
      <ProductForm
        sizes={props.sizes}
        colors={props.colors}
        title={props.title}
        totalPrice={totalPrice}
        currentColor={currentColor}
        currentSize={currentSize}
        setCurrentColor={setCurrentColor}
        setCurrentSize={setCurrentSize}
      />
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
}

export default Product;