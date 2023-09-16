import { products } from "@/public/assets/Products";
import { CartProducts, Product } from "@/app/types/index";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import leftArrow from "@/public/assets/images/left-arrow.png";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/app/contexts/CartContext";
import { useContext, useEffect, useState } from "react";

export default function ProductDetail({ product }: { product: Product }) {
  const [isInCart, setIsInCart] = useState(false);
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const [cartStatus, setCartStatus] = useState("");
  const addToCart = cartContext?.addToCart || (() => {});
  const removeFromCart = cartContext?.removeFromCart || (() => {});
  const deleteFromCart = cartContext?.deleteFromCart || (() => {});
  const { cart } = cartContext || { cart: [] };

  // CHECK IF PRODUCT IS IN CART WHEN PAGE IS RENDERED
  useEffect(() => {
    const cartItem = cart.find((item) => item.id === product.id);

    if (cartItem) {
      setIsInCart(true);
      setQuantity(cartItem.qty);
    } else {
      setIsInCart(false);
      setQuantity(0);
    }
  }, [cart, product.id]);

  // + BUTTON FUNCTION
  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setIsInCart(true);
    setQuantity(quantity + 1);
    setCartStatus("Added to Cart");
    const timer = setTimeout(() => {
      setCartStatus("");
    }, 800);
    return () => {
      clearTimeout(timer);
    };
  };

  // - BUTTON FUNCTION
  const handleRemoveFromCart = (product: Product) => {
    if (quantity === 1) {
      deleteFromCart(product);
      setIsInCart(false);
      setQuantity(quantity - 1);
      setCartStatus("Removed to Cart");
      const timer = setTimeout(() => {
        setCartStatus("");
      }, 800);
      return () => {
        clearTimeout(timer);
      };
    } else {
      removeFromCart(product);
      setQuantity(quantity - 1);
      setCartStatus("Removed from Cart");
      const timer = setTimeout(() => {
        setCartStatus("");
      }, 800);
      return () => {
        clearTimeout(timer);
      };
    }
  };

  return (
    <div>
      <div className="flex flex-row mr-auto ml-auto w-3/5 bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl shadow-xl p-8 border-stone-300 border-[1px] ">
        <div className="w-2/6 m-auto relative overflow-hidden">
          <Image
            src={product.img}
            alt={product.name}
            width={200}
            height={250}
            className="mr-auto ml-auto w-44 h-72 duration-500 
                hover:scale-105 transition-[transform]"
          />
        </div>
        <div className="pl-4 w-4/6 text-lg">
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
          <p className="mt-2 text-sm" id="lime-text">
            IN STOCK
          </p>
          <br />
          <p>{product.text}</p>
          <br />
          {isInCart ? (
            <div className="flex flex-row gap-2 ">
              <div
                className="bg-white rounded-xl shadow-md px-3 text-xl cursor-pointer
                       active:text-neutral-400 transition-transform duration-200"
                onClick={() => handleRemoveFromCart(product)}
              >
                <p>-</p>
              </div>
              <p>{quantity}</p>
              <div
                className="bg-white rounded-xl shadow-md px-3 text-xl cursor-pointer
                       active:text-neutral-400 transition-transform duration-200"
                onClick={() => handleAddToCart(product)}
              >
                <p>+</p>
              </div>
              <div className="italic text-md text-neutral-500">
                {cartStatus}
              </div>
            </div>
          ) : (
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 px-4 py-1 shadow-md hover:bg-green-100 transition-colors duration-300 inline-block cursor-pointer active:text-neutral-400"
              onClick={() => handleAddToCart(product)}
            >
              <p className="text-base">Add to Cart</p>
            </div>
          )}
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
        <Link
          href="/shop"
          className="inline-block active:text-neutral-400 transition-colors duration-300"
        >
          <p className="inline-block text-lg">Back to Products</p>
        </Link>
      </div>
    </div>
  );
}

// GET ID NUMBER FROM PARAM
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
