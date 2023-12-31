import { products } from "@/public/assets/data/Products";
import { Product } from "@/app/types/index";
import intenseIcon from "@/public/assets/images/intense-icon.png";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/app/contexts/CartContext";
import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "@/app/contexts/LanguageContext";
import { translations } from "@/app/utils/translations";

export default function ProductDetail({ product }: { product: Product }) {
  const [isInCart, setIsInCart] = useState(false);
  const { text, language } = useContext(LanguageContext);
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
    setCartStatus(translations[language].addedtoCart);
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
      setCartStatus(translations[language].removedFromCart);
      const timer = setTimeout(() => {
        setCartStatus("");
      }, 800);
      return () => {
        clearTimeout(timer);
      };
    } else {
      removeFromCart(product);
      setQuantity(quantity - 1);
      setCartStatus(translations[language].removedFromCart);
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
      <div
        className="flex flex-col md:flex-row mr-auto ml-auto xl:w-3/5 
      bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-300 dark:to-stone-400 
      rounded-xl shadow-xl px-4 py-8 md:p-8 border-stone-300 border-[1px] gap-6 md:gap-0"
      >
        <div className="md:w-2/6 m-auto relative overflow-hidden">
          <Image
            src={product.img}
            alt={product.name[language]}
            width={200}
            height={250}
            className="mr-auto ml-auto w-44 h-72 duration-500 
                hover:scale-105 transition-[transform]"
          />
        </div>
        <div className="pl-4 md:w-4/6 text-lg md:mt-8 mt:0 md:text-left text-center">
          <h1 className="text-2xl font-semibold">{product.name[language]}</h1>
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
            {text.inStock}
          </p>
          <br />
          <p>{product.text[language]}</p>
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
              <div className="italic text-md text-neutral-500 dark:text-neutral-100">
                {cartStatus}
              </div>
            </div>
          ) : (
            <div
              id="main-button"
              className="border-[1px] border-neutral-400 rounded-xl bg-neutral-50 px-4 py-1 
              dark:bg-stone-300 shadow-md hover:bg-green-100 transition-colors duration-300 
              inline-block cursor-pointer active:text-neutral-400"
              onClick={() => handleAddToCart(product)}
            >
              <p className="text-base">{text.addToCart}</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center mt-10 gap-2 dark:text-orange-50">
        <Link href="/shop" className="inline-block">
          <BsArrowLeft alt="Left Arrow" className="w-5 h-5 mb-1 inline-block" />
        </Link>
        <Link
          href="/shop"
          className="inline-block active:text-neutral-400 transition-colors duration-300"
        >
          <p className="inline-block text-lg">{text.backToProducts}</p>
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
