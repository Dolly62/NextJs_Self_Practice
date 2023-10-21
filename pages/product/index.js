import Link from "next/link";

function ProductList(id = 1) {
  return (
    <>
      <Link href="/">Back to home</Link>
      <br />
      <Link href={`/product/${id}`}>Product 1</Link>
      <br />
      <Link href="/product/2">Product 2</Link>
      <br />
      <Link href="/product/3">Product 3</Link>
      <br />
    </>
  );
}

export default ProductList;
