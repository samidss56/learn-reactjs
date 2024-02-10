import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      <CardProduct>
        <CardProduct.Header image="images/shoes-1.jpg" />
        <CardProduct.Body title="New Arrival">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae.
        </CardProduct.Body>
        <CardProduct.Footer price="$120.00" />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header image="images/shoes-1.jpg" />
        <CardProduct.Body title="New Arrival">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, quae.
        </CardProduct.Body>
        <CardProduct.Footer price="$120.00" />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
