import React from "react";
import ShopNow, { IShopeNow } from "../Components/ShopeNow";
import FirstBanner from "../assets/first-banner.jpg";
import SecondBanner from "../assets/second-banner.jpg";
import Trending from "../Components/Trending";
import ProductGrid from "../Components/ProductGrid";
import ProductGridItem from "../Components/ProductGridItem";
import { ProductProvider, useProductContext } from "../context/ProductContext";
import Hero from "../Components/Hero";


const ProductWeAreProudOf: React.FC = () => {
  const { productsWeAreProudOf } = useProductContext();
  return (
    <>
      <div
        style={{
          margin: "3rem auto",
        }}
        className={`containerWidth`}
      >
        <h2
          style={{ margin: "7rem 0 3rem", fontWeight: 600, fontSize: "1.5rem" }}
        >
          Product we are proud of
        </h2>
        <ProductGrid>
          {productsWeAreProudOf.map((val) => (
            <ProductGridItem
              key={val.name}
              img={val.imgs.img1}
              name={val.name}
              price={val.price}
            />
          ))}
        </ProductGrid>
      </div>
    </>
  );
};

const Home: React.FC = () => {
  const ShopNowInfo: IShopeNow = {
    image: { src: FirstBanner, alt: "Banner" },
    content: {
      title: "Creative harmonious living",
      desc: "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
    },
  };

  const ShopNowOtherInfo: IShopeNow = {
    image: { src: SecondBanner, alt: "Banner" },
    content: {
      title: "Comfortable & Elegante Living",
      desc: "RAOUF Products are all made to standard sizes so that you can mix and match them freely.",
    },
  };

  return (
    <ProductProvider>
      <Hero />
      <ProductWeAreProudOf />
      <ShopNow image={ShopNowInfo.image} content={ShopNowInfo.content} />
      <Trending />
      <ShopNow
        image={ShopNowOtherInfo.image}
        content={ShopNowOtherInfo.content}
        reverse={true}
      />
    </ProductProvider>
  );
};

export default Home;
