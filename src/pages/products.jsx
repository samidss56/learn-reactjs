import { Fragment, useState, useEffect } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getAllProducts } from "../services/product.service";
import TableCart from "../components/Fragments/TableCart";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts((data) => {
      setProducts(data);
    });
  }, []);

  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  return (
    <Fragment>
      <div className="flex justify-center py-5">
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-2/6">
          <div className="flex gap-5">
            <h1 className="text-3xl font-bold text-blue-600 text-left ml-5 mb-2">
              Your Cart
            </h1>
            <div className="flex items-center text-white font-bold bg-blue-600 p-2 rounded-md">
              {totalCart}
            </div>
          </div>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
