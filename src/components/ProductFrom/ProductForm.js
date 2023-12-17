import ProductHeader from "../ProductHeader/ProductHeader";
import OptionSize from "../OptionSize/OptionSize";
import OptionColor from "../OptionColor/OptionColor";
import Button from "../Button/Button";
import styles from './ProductFrom.module.scss'
import PropTypes from 'prop-types'

const ProductForm = props => {
    const summaryOrder = (event, title, price, color, size) => {
        event.preventDefault();
        console.log(
          `Summary:
          =========
          title: ${title}
          price: ${price}
          color: ${color}
          size: ${size}
          `
        )
      }
    return (
        <div>
            <ProductHeader title={props.title} currentSize={props.currentSize} totalPrice={props.totalPrice}/>
            <form>
                <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
                <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
                <Button className={styles.button} onClick={ (e) => summaryOrder(e, props.title, props.totalPrice, props.currentColor, props.currentSize.name) }>
                <span className="fa fa-shopping-cart" />
                </Button>
            </form>
        </div>
    )
}
ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.object.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;