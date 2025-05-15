import { useEffect } from 'react';
import styles from './ProductList.module.css';
import ProductItem from '../ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import { getProduct } from '../../action/products';

const ProductList = () => {

    const dispatch = useDispatch<AppDispatch>()
    const { products } = useSelector((state: RootState) => state.products)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    if (!products || !Array.isArray(products)) {
        return (
            <p className={styles.emptyMessage}>Không tìm thấy sản phẩm nào!</p>
        )
    }

    return (
        <div className={styles.productList}>
            <h1 className={styles.title}>Danh sách sản phẩm</h1>
            <div className={styles.searchContainer}>

            </div>
            <div className={styles.productGrid}>
                {
                    products.map((product) => (
                        <ProductItem key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductList;