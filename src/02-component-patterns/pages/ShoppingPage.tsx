import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

const product = {
	id: '1',
	title: 'Coffe Mug - Card',
	img: './coffee-mug.png',
};

export const ShoppingPage = () => {
	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />

			<div
				style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{/* <ProductCard product={product}>
					<ProductCard.Image />
					<ProductCard.Title title={''} />
					<ProductCard.Buttons counter={0} increaseBy={() => console.log(1)} />
				</ProductCard> */}

				<ProductCard product={product}>
					<ProductImage />
					<ProductTitle />
					<ProductButtons />
				</ProductCard>
			</div>
		</div>
	);
};
