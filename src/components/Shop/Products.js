import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 600,
    title: 'O2 Concentrator',
    description: 'Standard flow (1-5LPM)',
  },
  {
    id: 'p2',
    price: 800,
    title: 'High Flow Concentrator',
    description: 'High Flow (9LPM)',
  },
  {
    id: 'p3',
    price: 800,
    title: 'Low Flow Concentrator',
    description: 'Low Flow',
  },
  {
    id: 'p4',
    price: 900,
    title: 'Portable Oxygen Concentrator (POC)',
    description: 'Compact portable oxygen concentrator',
  },
  {
    id: 'p5',
    price: 1000,
    title: 'Transportable Oxygen Concentrator (TOC)',
    description: 'transportable oxygen concentrator',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
