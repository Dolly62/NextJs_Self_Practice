import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/product");
  };
  return (
    <>
      <h1>Home</h1>
      <Link href="/blog">Blog</Link> <br />
      <Link href="/product">Product</Link> <br/>
      <button onClick={clickHandler}>Place Order</button>
    </>
  );
}

export default Home;
