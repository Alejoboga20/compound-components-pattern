import { ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface ProductCardProps {
	children?: ReactElement | ReactElement[];
	product: Product;
}
interface Product {
	id: string;
	title: string;
	img?: string;
}

interface ProductButtonsProps {
	counter: number;
	increaseBy: (value: number) => void;
}

export const ProductImage = ({ img = '' }) => (
	<img className={styles.productImg} src={img ? img : noImage} alt='Product' />
);

export const ProductTitle = ({ title }: { title: string }) => (
	<span className={styles.productDescription}>{title}</span>
);

export const ProductButtons = ({ counter, increaseBy }: ProductButtonsProps) => (
	<div className={styles.buttonsContainer}>
		<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
			-
		</button>

		<div className={styles.countLabel}>{counter}</div>

		<button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
			+
		</button>
	</div>
);

export const ProductCard = ({ children, product }: ProductCardProps) => {
	const { counter, increaseBy } = useProduct();

	return <div className={styles.productCard}>{children}</div>;
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
