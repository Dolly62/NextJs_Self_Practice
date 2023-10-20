import { useRouter } from "next/router";

function ProductDetails() {
  // a hook returns router object
  // the product id can be any string not just a number
  const router = useRouter();

  const productId = router.query.id;

  return <h2>Product Details of {productId}</h2>;
}

export default ProductDetails;
