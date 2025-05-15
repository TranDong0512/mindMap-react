import { useDispatch } from 'react-redux';
import styles from './ProductItem.module.css';
import { removeProduct } from '../../action/products';
import type { AppDispatch } from '../../store/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductItem = ({ product }: any) => {
    const dispatch = useDispatch<AppDispatch>()
    return (
        <div className={styles.productItem}>

            <img src={product.avatar} alt={product.name} className={styles.productImage} />
            <h3 className={styles.productName}>{product.name}</h3>
            <button className={styles.detailButton}>Xem chi tiết</button>
            <button
                onClick={() => dispatch(removeProduct(product.id))}
                className={styles.deleteButton}
            >
                Xóa
            </button>
        </div>
    );
};

export default ProductItem;