import styles from "./ProductCard.module.css";

interface ProductCardProps {
    id: number;
    image: string;
    title: string;
    category: string;
    price: number;
}

function ProductCard(props: ProductCardProps) {
    const { id, image, title, category, price } = props;
    return (
        <div className={styles.container} key={id}>
            <img src={image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <p>{category}</p>
                </div>
                <div>
                    <p><strong>${price}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;