import { products } from "@/public/assets/Products";
import { Product } from "@/app/types/index";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import leftArrow from "@/public/assets/images/left-arrow.png";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";

export default function ProductDetail({ product }: { product: Product }) {
  const { cart, addToCart } = useCart();

  return (
    <div className="px-24 py-5 mb-20">
      <div className="flex flex-row mr-auto ml-auto w-3/5 bg-white rounded-xl shadow-xl p-10 border-neutral-200 border-[1px] ">
        <div className="w-2/5 m-auto">
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={250}
            className="mr-auto ml-auto"
          />
        </div>
        <div className="pl-6 w-3/4 text-lg">
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <div className="mt-2">
            {Array.from({ length: product.int }, (_, index) => (
              <Image
                key={index}
                src={intenseIcon}
                alt="Intensity"
                width={16}
                height={16}
                className="inline-block"
              />
            ))}
          </div>
          <p className="text-lg mt-2">{product.gr} gr</p>
          <p className="text-lg mt-2">{product.price}€</p>
          <p className="text-green-600 mt-2 text-sm">IN STOCK</p>
          <br />
          <p>{product.text}</p>
          <br />
          <div
            className="border-[1px] border-neutral-400 rounded-3xl bg-neutral-50 px-4 py-1 shadow-md
             hover:bg-green-100 transition-colors duration-300  inline-block cursor-pointer"
            onClick={() => addToCart(product)}
          >
            <p className="text-base">Add to Cart</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 gap-2">
        <Link href="/shop" className="inline-block">
          <Image
            src={leftArrow}
            alt="Left Arrow"
            className="w-5 h-5 mb-1 inline-block"
          />
        </Link>
        <Link href="/shop" className="inline-block">
          <p className="inline-block">Back to Products</p>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const productId = params.id;
  const product = products.find((p) => p.id.toString() === productId);

  return {
    props: {
      product,
    },
  };
}
