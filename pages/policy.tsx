import "tailwindcss/tailwind.css";
import fair from "@/public/assets/images/fair.png";
import friendly from "@/public/assets/images/friendly.png";
import fresh from "@/public/assets/images/fresh.png";

import Image from "next/image";

export default function Policy() {
  return (
    <div className="px-24 py-5 mb-20">
      <div
        className="flex flex-col bg-gradient-to-br from-stone-50 to-stone-100 rounded-xl shadow-xl px-14 py-10
           border-stone-300 border-[1px] text-justify gap-6 text-lg"
      >
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">What is 3F?</p>
          <p>
            We are passionate about delivering not just a cup of coffee but an
            entire experience that revolves around our three core values: Fair,
            Friendly and Fresh. These principles are the bedrock of our
            commitment to providing you with the finest coffee beans from around
            the world.
          </p>
          <br />
        </div>
        <div className="flex flex-row gap-10">
          <div className="w-2/6">
            <Image src={fair} alt="Fair" className="mx-auto w-16 h-16 mb-4" />
            <p>
              We believe that coffee should not only taste great but also be a
              force for good in the world. That's why we are dedicated to
              sourcing our coffee beans through{" "}
              <span className="font-bold underline">fair</span> trade practices.
              We work directly with coffee farmers in different corners of the
              globe, ensuring that they receive fair compensation for their hard
              work and dedication. By choosing Coffee-Co, you are supporting a
              more equitable coffee industry.
            </p>
            <br />
          </div>
          <div className="w-2/6">
            <Image
              src={friendly}
              alt="Friendly"
              className="mx-auto w-16 h-16 mb-4"
            />
            <p>
              Our commitment to friendliness extends beyond our customer
              service. We see our customers as part of our family. We want to
              create a warm and welcoming environment where you feel valued and
              appreciated. Whether you have a question about our products, need
              brewing tips, or simply want to chat about your coffee
              preferences, our team is here for you. We believe in fostering a{" "}
              <span className="font-bold underline">friendly</span> and
              inclusive coffee community.
            </p>
            <br />
          </div>
          <div className="w-2/6">
            <Image src={fresh} alt="Fresh" className="mx-auto w-16 h-16 mb-4" />
            <p>
              For us, freshness is non-negotiable. We understand the critical
              role that <span className="font-bold underline">fresh</span>{" "}
              products play in the quality of your coffee. That's why we roast
              our beans in small batches to ensure that every bag of coffee you
              receive is bursting with flavor thanks to its freshness. We are
              committed to delivering coffee beans at their peak time so that
              you can enjoy the rich and aromatic notes in every sip whenever
              you drink your coffee.
            </p>
            <br />
          </div>
        </div>
        <div className="text-center">
          <p>
            Thank you for choosing Coffee-Co, where every cup tells a story of
            quality, ethics, and community. Sip, savor, and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}
