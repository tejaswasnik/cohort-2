import React from "react";
import Card from "./components/Card";

const App = () => {
const products = [
  {
    id: 1,
    name: "Sony Headphones",
    description: "WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
    price: 339,
    colors: ["#000000", "#B0B0B0", "#1E1E1E"],
    image: "https://www.sony.co.in/image/6145c1d32e6ac8e63a46c912dc33c5bb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
  },
  {
    id: 2,
    name: "Apple AirPods Max",
    description: "Over-ear headphones with high-fidelity audio and Active Noise Cancellation",
    price: 549,
    colors: ["#E5E5E5", "#2F2F2F", "#0A84FF"],
    image: "https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/231421_n3yvmu.png"
  },
  {
    id: 3,
    name: "Bose QuietComfort 45",
    description: "Wireless Bluetooth Headphones with world-class noise cancellation",
    price: 329,
    colors: ["#000000", "#FFFFFF", "#4A4A4A"],
    image: "https://avstore.in/cdn/shop/files/2.AVStore-Bose-QuietComfort-45-Noise-Right-Side-View.jpg?v=1685695623"
  },
  {
    id: 4,
    name: "JBL Live 660NC",
    description: "Wireless over-ear headphones with adaptive noise cancelling",
    price: 199,
    colors: ["#000000", "#0033FF", "#FF0000"],
    image: "https://5.imimg.com/data5/ECOM/Default/2023/6/321363653/VL/DU/BY/192275783/jbl-live-660nc-product-image-hero-black-500x500.webp"
  },
  {
    id: 5,
    name: "Beats Studio3",
    description: "High-performance wireless noise cancelling headphones",
    price: 349,
    colors: ["#000000", "#C8102E", "#FFFFFF"],
    image: "https://www.bhphotovideo.com/images/fb/beats_by_dr_dre_mwuh2ll_a_studio3_wireless_headphones_1512397.jpg"
  },
  {
    id: 6,
    name: "Sennheiser Momentum 4",
    description: "Premium wireless headphones with exceptional sound quality",
    price: 399,
    colors: ["#2B2B2B", "#E0D7C6", "#4F4F4F"],
    image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/262567_vfvuy8.png"
  },
  {
    id: 7,
    name: "Anker Soundcore Life Q35",
    description: "Hi-Res wireless headphones with hybrid active noise cancelling",
    price: 129,
    colors: ["#000000", "#1F3C88", "#888888"],
    image: "https://img.drz.lazcdn.com/static/lk/p/4ba0c4f3db4330c7e3f4a427d322a242.png_720x720q80.png"
  },
  {
    id: 8,
    name: "Skullcandy Crusher Evo",
    description: "Wireless over-ear headphones with sensory bass",
    price: 199,
    colors: ["#000000", "#6B6B6B", "#8B0000"],
    image: "https://m.media-amazon.com/images/I/61TuQdBSgsL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 9,
    name: "Marshall Monitor II",
    description: "Bluetooth noise cancelling headphones with iconic design",
    price: 319,
    colors: ["#3B2F2F", "#000000", "#C2B280"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuG9sgEgsxy5fiFlphZx7I0NI8MeFeV930kQ&s"
  },
  {
    id: 10,
    name: "AKG N700NC",
    description: "Studio-quality wireless headphones with adaptive noise cancelling",
    price: 299,
    colors: ["#000000", "#4A4A4A", "#FFFFFF"],
    image: "https://m.media-amazon.com/images/I/71fhdVDtt-L.jpg"
  },
  {
    id: 11,
    name: "OnePlus Buds Pro",
    description: "Smart adaptive noise cancellation with immersive sound",
    price: 149,
    colors: ["#000000", "#F2F2F2", "#1E90FF"],
    image: "https://image01.oneplus.net/ebp/202203/24/1-m00-37-a4-rb8lb2i8sz-aurhlaagnchkbeb0637.png"
  },
  {
    id: 12,
    name: "Nothing Headphone (1)",
    description: "Minimalist design with premium sound and ANC support",
    price: 279,
    colors: ["#FFFFFF", "#000000", "#D3D3D3"],
    image: "https://cdn.shopify.com/s/files/1/0586/3270/0077/files/Arbok-Primary-Black-1.png?v=1750839188"
  }
];

  return (
     <div className="parent">
      {products.map((elem) => (
        <Card
          key={elem.id}
          name={elem.name}
          description={elem.description}
          price={elem.price}
          colors={elem.colors}
          image={elem.image}
        />
      ))}
    </div>
  );
};

export default App;
