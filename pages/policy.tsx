import "tailwindcss/tailwind.css";
import friendly from "@/public/assets/images/friendly01.jpg";
import Image from "next/image";

export default function Policy() {
  return (
    <div className="px-24 py-5 mb-20">
      <div>
        <Image
          src={friendly}
          alt="Friendly"
          className="rounded-xl w-2/6 float-left mr-8 mb-5"
        />
        <div className="text-justify">
          <p className="text-lg">
            At Coffee-Co, we are passionate about delivering not just a cup of
            coffee but an entire experience that revolves around our three core
            values: <span className="font-bold underline">Fair</span>,{" "}
            <span className="font-bold underline">Friendly</span>, and{" "}
            <span className="font-bold underline">Fresh</span>. These principles
            are the bedrock of our commitment to providing you with the finest
            coffee beans from around the world.
          </p>
          <br />
          <p className="text-lg">
            We believe that coffee should not only taste great but also be a
            force for good in the world. That's why we are dedicated to sourcing
            our coffee beans through fair trade practices. We work directly with
            coffee farmers in different corners of the globe, ensuring that they
            receive fair compensation for their hard work and dedication. By
            choosing Coffee-Co, you are supporting a more equitable coffee
            industry.
          </p>
          <br />
          <p className="text-lg">
            Our commitment to friendliness extends beyond our customer service.
            We see our customers as part of our extended coffee-loving family.
            We want to create a warm and welcoming environment where you feel
            valued and appreciated. Whether you have a question about our
            products, need brewing tips, or simply want to chat about your
            coffee preferences, our team is here for you. We believe in
            fostering a friendly and inclusive coffee community.
          </p>
          <br />
          <p className="text-lg">
            For us, freshness is non-negotiable. We understand the critical role
            that freshness plays in the quality of your coffee. That's why we
            roast our beans in small batches to ensure that every bag of coffee
            you receive is bursting with flavor. We are committed to delivering
            coffee beans at their peak freshness so you can savor the rich and
            aromatic notes in every sip.
          </p>
          <br />
          <p className="text-lg">
            Thank you for choosing Coffee-Co, where every cup tells a story of
            quality, ethics, and community. Sip, savor, and enjoy!
          </p>
        </div>
      </div>
    </div>
  );
}
