"use client";

import Image from "next/image";
import { useState } from "react";

type MenuItem = {
  name: string;
  price: number;
  description: string;
  image: string;
};

type SubSection = {
  title?: string;
  items: MenuItem[];
};

type MenuSection = {
  id: string;
  label: string;
  subsections: SubSection[];
};

const IMG = {
  vegManchurian:
    "https://images.unsplash.com/photo-1682622110433-65513a55d7da?auto=format&fit=crop&w=500&q=60",
  paneerStarter:
    "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=500&q=60",
  chilliPaneer:
    "https://images.unsplash.com/photo-1720787066625-ba5e3e3b8ca7?auto=format&fit=crop&w=500&q=60",
  mushroomStarter:
    "https://images.unsplash.com/photo-1508338712271-40539c947a8b?auto=format&fit=crop&w=500&q=60",
  crispyCorn:
    "https://images.unsplash.com/photo-1593986799230-f9755e668580?auto=format&fit=crop&w=500&q=60",
  paneerCurry:
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=500&q=60",
  vegCurry:
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=500&q=60",
  dal: "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?auto=format&fit=crop&w=500&q=60",
  eggStarter:
    "https://images.unsplash.com/photo-1626895597772-74988e263fab?auto=format&fit=crop&w=500&q=60",
  eggCurry:
    "https://images.unsplash.com/photo-1764315197254-94385571df22?auto=format&fit=crop&w=500&q=60",
  eggBiryani:
    "https://images.unsplash.com/photo-1642972420043-4736c570a716?auto=format&fit=crop&w=500&q=60",
  chickenStarter:
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60",
  chickenLollipop:
    "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?auto=format&fit=crop&w=500&q=60",
  muttonStarter:
    "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=500&q=60",
  fishFry:
    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&w=500&q=60",
  butterChicken:
    "https://images.unsplash.com/photo-1728910107534-e04e261768ae?auto=format&fit=crop&w=500&q=60",
  muttonCurry:
    "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?auto=format&fit=crop&w=500&q=60",
  fishCurry:
    "https://images.unsplash.com/photo-1654863404432-cac67587e25d?auto=format&fit=crop&w=500&q=60",
  chickenBiryani:
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=500&q=60",
  muttonBiryani:
    "https://images.unsplash.com/photo-1691171047312-d809eccef46d?auto=format&fit=crop&w=500&q=60",
  vegBiryani:
    "https://images.unsplash.com/photo-1596560520688-e1ecc9da2099?auto=format&fit=crop&w=500&q=60",
  steamedRice:
    "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?auto=format&fit=crop&w=500&q=60",
  friedRice:
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=60",
  noodles:
    "https://images.unsplash.com/photo-1617622141675-d3005b9067c5?auto=format&fit=crop&w=500&q=60",
  naanBread:
    "https://images.unsplash.com/photo-1697155406014-04dc649b0953?auto=format&fit=crop&w=500&q=60",
  mineralWater:
    "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=500&q=60",
  softDrinks:
    "https://images.unsplash.com/photo-1590430752967-d0e116909be1?auto=format&fit=crop&w=500&q=60",
  tandooriPlatter:
    "https://images.unsplash.com/photo-1750190624608-57ceddba8d69?auto=format&fit=crop&w=500&q=60",
  thali:
    "https://images.unsplash.com/photo-1680993032090-1ef7ea9b51e5?auto=format&fit=crop&w=500&q=60",
} as const;

const menuSections: MenuSection[] = [
  {
    id: "veg",
    label: "Vegetarian",
    subsections: [
      {
        title: "Starters",
        items: [
          {
            name: "Veg Manchurian Dry",
            price: 180,
            description:
              "Crispy vegetable balls tossed in a tangy Indo-Chinese Manchurian sauce.",
            image: IMG.vegManchurian,
          },
          {
            name: "Gobi Manchurian",
            price: 170,
            description:
              "Golden fried cauliflower florets glazed in spicy Manchurian sauce.",
            image: IMG.vegManchurian,
          },
          {
            name: "Chilli Gobi",
            price: 170,
            description:
              "Crunchy cauliflower tossed with bell peppers, onions and fiery chilli sauce.",
            image: IMG.vegManchurian,
          },
          {
            name: "Paneer Tikka",
            price: 220,
            description:
              "Char-grilled cottage cheese cubes marinated in yogurt and tandoori spices.",
            image: IMG.paneerStarter,
          },
          {
            name: "Paneer 65",
            price: 210,
            description:
              "Deep-fried spiced paneer bites tossed in a fiery South Indian style masala.",
            image: IMG.paneerStarter,
          },
          {
            name: "Chilli Paneer",
            price: 210,
            description:
              "Crispy paneer stir-fried with peppers, onions and a spicy chilli-garlic sauce.",
            image: IMG.chilliPaneer,
          },
          {
            name: "Mushroom Pepper Fry",
            price: 190,
            description:
              "Button mushrooms sautéed with crushed black pepper and curry leaves.",
            image: IMG.mushroomStarter,
          },
          {
            name: "Mushroom 65",
            price: 190,
            description:
              "Crispy fried mushrooms coated in a spicy, tangy 65-style masala.",
            image: IMG.mushroomStarter,
          },
          {
            name: "Crispy Corn",
            price: 160,
            description:
              "Golden fried sweet corn kernels tossed with pepper and spring onions.",
            image: IMG.crispyCorn,
          },
          {
            name: "Baby Corn Manchurian",
            price: 180,
            description:
              "Crunchy baby corn fritters tossed in classic Manchurian sauce.",
            image: IMG.crispyCorn,
          },
        ],
      },
      {
        title: "Paneer Specials",
        items: [
          {
            name: "Paneer Butter Masala",
            price: 260,
            description:
              "Soft paneer cubes simmered in a rich, buttery tomato gravy.",
            image: IMG.paneerCurry,
          },
          {
            name: "Kadai Paneer",
            price: 250,
            description: "Paneer and bell peppers cooked in a bold kadai masala.",
            image: IMG.paneerCurry,
          },
          {
            name: "Shahi Paneer",
            price: 260,
            description:
              "Paneer in a creamy, mildly sweet cashew-based royal gravy.",
            image: IMG.paneerCurry,
          },
          {
            name: "Paneer Tikka Masala",
            price: 270,
            description:
              "Grilled paneer tikka simmered in a spiced onion-tomato gravy.",
            image: IMG.paneerCurry,
          },
          {
            name: "Palak Paneer",
            price: 240,
            description: "Paneer cubes in a smooth, spiced spinach purée.",
            image: IMG.paneerCurry,
          },
        ],
      },
      {
        title: "Veg Curries",
        items: [
          {
            name: "Mix Veg Curry",
            price: 200,
            description: "Seasonal vegetables simmered in a lightly spiced curry.",
            image: IMG.vegCurry,
          },
          {
            name: "Veg Kolhapuri",
            price: 210,
            description:
              "Mixed vegetables in a fiery Kolhapuri-style spiced gravy.",
            image: IMG.vegCurry,
          },
          {
            name: "Veg Kadai",
            price: 210,
            description: "Vegetables tossed in a robust kadai masala with peppers.",
            image: IMG.vegCurry,
          },
          {
            name: "Dal Tadka",
            price: 160,
            description:
              "Yellow lentils tempered with garlic, cumin and dried red chillies.",
            image: IMG.dal,
          },
          {
            name: "Dal Fry",
            price: 150,
            description:
              "Slow-cooked lentils finished with a smoky onion-tomato tempering.",
            image: IMG.dal,
          },
        ],
      },
    ],
  },
  {
    id: "egg",
    label: "Eggetarian",
    subsections: [
      {
        title: "Starters",
        items: [
          {
            name: "Egg 65",
            price: 140,
            description:
              "Boiled eggs deep-fried and tossed in a spicy 65-style masala.",
            image: IMG.eggStarter,
          },
          {
            name: "Chilli Egg",
            price: 150,
            description:
              "Boiled eggs sautéed with peppers, onions and chilli-garlic sauce.",
            image: IMG.eggStarter,
          },
          {
            name: "Egg Pakoda",
            price: 130,
            description:
              "Boiled eggs dipped in spiced gram-flour batter and fried crisp.",
            image: IMG.eggStarter,
          },
          {
            name: "Pepper Egg Fry",
            price: 150,
            description:
              "Boiled eggs pan-fried with crushed pepper and curry leaves.",
            image: IMG.eggStarter,
          },
        ],
      },
      {
        title: "Main Course",
        items: [
          {
            name: "Egg Curry",
            price: 170,
            description: "Boiled eggs simmered in a spiced onion-tomato gravy.",
            image: IMG.eggCurry,
          },
          {
            name: "Egg Masala",
            price: 180,
            description: "Eggs cooked in a rich, spiced masala gravy.",
            image: IMG.eggCurry,
          },
          {
            name: "Egg Bhurji",
            price: 160,
            description:
              "Indian-style scrambled eggs cooked with onions, tomatoes and spices.",
            image: IMG.eggCurry,
          },
          {
            name: "Anda Kadai",
            price: 190,
            description: "Boiled eggs tossed in a bold kadai-style masala.",
            image: IMG.eggCurry,
          },
          {
            name: "Egg Rice",
            price: 150,
            description:
              "Steamed rice tossed with scrambled eggs and mild spices.",
            image: IMG.eggBiryani,
          },
          {
            name: "Egg Fried Rice",
            price: 170,
            description: "Wok-tossed rice with egg, vegetables and soy seasoning.",
            image: IMG.friedRice,
          },
          {
            name: "Egg Biryani",
            price: 220,
            description: "Fragrant basmati rice layered with spiced boiled eggs.",
            image: IMG.eggBiryani,
          },
        ],
      },
    ],
  },
  {
    id: "nonveg-starters",
    label: "Non-Veg Starters",
    subsections: [
      {
        title: "Chicken",
        items: [
          {
            name: "Chicken 65",
            price: 240,
            description:
              "Deep-fried spicy chicken bites in a classic South Indian marinade.",
            image: IMG.chickenStarter,
          },
          {
            name: "Chilli Chicken",
            price: 250,
            description:
              "Crispy chicken tossed with peppers, onions and spicy chilli sauce.",
            image: IMG.chickenStarter,
          },
          {
            name: "Pepper Chicken",
            price: 250,
            description:
              "Chicken sautéed with coarsely crushed black pepper and curry leaves.",
            image: IMG.chickenStarter,
          },
          {
            name: "Dragon Chicken",
            price: 260,
            description:
              "Crispy chicken tossed in a fiery Indo-Chinese dragon sauce with cashews.",
            image: IMG.chickenStarter,
          },
          {
            name: "Chicken Lollipop",
            price: 270,
            description:
              "Frenched chicken wings marinated and deep-fried to a spicy crisp.",
            image: IMG.chickenLollipop,
          },
          {
            name: "Chicken Tikka",
            price: 260,
            description:
              "Char-grilled chicken chunks marinated in yogurt and tandoori spices.",
            image: IMG.chickenLollipop,
          },
          {
            name: "Tangdi Kebab",
            price: 280,
            description:
              "Chicken drumsticks marinated in spiced yogurt and roasted in the tandoor.",
            image: IMG.chickenLollipop,
          },
        ],
      },
      {
        title: "Mutton",
        items: [
          {
            name: "Mutton Pepper Fry",
            price: 320,
            description:
              "Tender mutton pieces sautéed with black pepper and curry leaves.",
            image: IMG.muttonStarter,
          },
          {
            name: "Mutton Ghee Roast",
            price: 340,
            description:
              "Mutton slow-roasted in ghee with a fiery Mangalorean-style spice blend.",
            image: IMG.muttonStarter,
          },
          {
            name: "Mutton Sukka",
            price: 330,
            description:
              "Mutton simmered and roasted dry with coconut and roasted spices.",
            image: IMG.muttonStarter,
          },
        ],
      },
      {
        title: "Fish",
        items: [
          {
            name: "Fish Fry",
            price: 280,
            description:
              "Marinated fish fillets shallow-fried with a crisp spiced coating.",
            image: IMG.fishFry,
          },
          {
            name: "Apollo Fish",
            price: 290,
            description:
              "Boneless fish tossed in a spicy Indo-Chinese style batter and sauce.",
            image: IMG.fishFry,
          },
          {
            name: "Fish Tikka",
            price: 300,
            description:
              "Chunks of fish marinated in tandoori spices and char-grilled.",
            image: IMG.fishFry,
          },
          {
            name: "Fish Manchurian",
            price: 280,
            description: "Crispy fish tossed in a tangy Manchurian sauce.",
            image: IMG.fishFry,
          },
        ],
      },
    ],
  },
  {
    id: "nonveg-main",
    label: "Non-Veg Main Course",
    subsections: [
      {
        title: "Chicken",
        items: [
          {
            name: "Butter Chicken",
            price: 300,
            description:
              "Tandoori chicken simmered in a velvety butter-tomato gravy.",
            image: IMG.butterChicken,
          },
          {
            name: "Chicken Curry",
            price: 260,
            description:
              "Chicken cooked in a traditional onion-tomato spiced curry.",
            image: IMG.butterChicken,
          },
          {
            name: "Kadai Chicken",
            price: 280,
            description: "Chicken and peppers tossed in a bold kadai masala.",
            image: IMG.butterChicken,
          },
          {
            name: "Chicken Masala",
            price: 270,
            description: "Chicken simmered in a rich, spiced masala gravy.",
            image: IMG.butterChicken,
          },
          {
            name: "Chicken Tikka Masala",
            price: 310,
            description:
              "Grilled chicken tikka simmered in a creamy spiced tomato gravy.",
            image: IMG.butterChicken,
          },
        ],
      },
      {
        title: "Mutton",
        items: [
          {
            name: "Mutton Curry",
            price: 350,
            description: "Mutton slow-cooked in a traditional spiced curry.",
            image: IMG.muttonCurry,
          },
          {
            name: "Mutton Rogan Josh",
            price: 380,
            description:
              "Mutton simmered in an aromatic Kashmiri-style red gravy.",
            image: IMG.muttonCurry,
          },
          {
            name: "Mutton Kadai",
            price: 360,
            description: "Mutton cooked with peppers in a robust kadai masala.",
            image: IMG.muttonCurry,
          },
          {
            name: "Mutton Keema Masala",
            price: 340,
            description: "Minced mutton cooked with peas in a spiced masala.",
            image: IMG.muttonCurry,
          },
        ],
      },
      {
        title: "Fish",
        items: [
          {
            name: "Fish Curry",
            price: 290,
            description: "Fish simmered in a tangy, spiced coconut-based curry.",
            image: IMG.fishCurry,
          },
          {
            name: "Fish Masala",
            price: 300,
            description: "Fish cooked in a rich onion-tomato spiced masala.",
            image: IMG.fishCurry,
          },
        ],
      },
    ],
  },
  {
    id: "biryani",
    label: "Biryanis",
    subsections: [
      {
        items: [
          {
            name: "Veg Biryani",
            price: 200,
            description:
              "Basmati rice layered with mixed vegetables and aromatic spices.",
            image: IMG.vegBiryani,
          },
          {
            name: "Paneer Biryani",
            price: 230,
            description:
              "Fragrant basmati rice layered with spiced paneer cubes.",
            image: IMG.vegBiryani,
          },
          {
            name: "Mushroom Biryani",
            price: 220,
            description: "Basmati rice cooked with mushrooms and whole spices.",
            image: IMG.vegBiryani,
          },
          {
            name: "Egg Biryani",
            price: 220,
            description: "Basmati rice layered with spiced boiled eggs.",
            image: IMG.eggBiryani,
          },
          {
            name: "Chicken Dum Biryani",
            price: 260,
            description:
              "Basmati rice and marinated chicken slow-cooked together in a sealed pot.",
            image: IMG.chickenBiryani,
          },
          {
            name: "Chicken Fry Piece Biryani",
            price: 280,
            description: "Dum biryani served with a crispy fried chicken piece.",
            image: IMG.chickenBiryani,
          },
          {
            name: "Chicken Boneless Biryani",
            price: 300,
            description: "Fragrant biryani made with tender boneless chicken.",
            image: IMG.chickenBiryani,
          },
          {
            name: "Mutton Biryani",
            price: 350,
            description: "Basmati rice layered with slow-cooked, spiced mutton.",
            image: IMG.muttonBiryani,
          },
          {
            name: "Fish Biryani",
            price: 320,
            description:
              "Basmati rice cooked with marinated fish and warm spices.",
            image: IMG.fishCurry,
          },
          {
            name: "Special Bhagini Gold Family Biryani",
            price: 650,
            description:
              "Our signature family-size biryani loaded with chicken, mutton and boiled eggs.",
            image: IMG.tandooriPlatter,
          },
        ],
      },
    ],
  },
  {
    id: "rice-noodles",
    label: "Rice & Noodles",
    subsections: [
      {
        title: "Rice",
        items: [
          {
            name: "Steam Rice",
            price: 100,
            description: "Plain steamed basmati rice.",
            image: IMG.steamedRice,
          },
          {
            name: "Jeera Rice",
            price: 140,
            description: "Basmati rice tempered with roasted cumin seeds.",
            image: IMG.steamedRice,
          },
          {
            name: "Ghee Rice",
            price: 150,
            description:
              "Fragrant basmati rice cooked in aromatic ghee and whole spices.",
            image: IMG.steamedRice,
          },
          {
            name: "Veg Fried Rice",
            price: 170,
            description:
              "Wok-tossed rice with mixed vegetables and soy seasoning.",
            image: IMG.friedRice,
          },
          {
            name: "Egg Fried Rice",
            price: 190,
            description: "Wok-tossed rice with scrambled egg and vegetables.",
            image: IMG.friedRice,
          },
          {
            name: "Chicken Fried Rice",
            price: 220,
            description: "Wok-tossed rice with diced chicken and vegetables.",
            image: IMG.friedRice,
          },
          {
            name: "Schezwan Fried Rice",
            price: 200,
            description: "Rice tossed in a fiery Schezwan sauce with vegetables.",
            image: IMG.friedRice,
          },
        ],
      },
      {
        title: "Noodles",
        items: [
          {
            name: "Veg Noodles",
            price: 170,
            description: "Stir-fried noodles tossed with fresh vegetables.",
            image: IMG.noodles,
          },
          {
            name: "Egg Noodles",
            price: 190,
            description:
              "Stir-fried noodles tossed with scrambled egg and vegetables.",
            image: IMG.noodles,
          },
          {
            name: "Chicken Noodles",
            price: 220,
            description: "Stir-fried noodles tossed with chicken and vegetables.",
            image: IMG.noodles,
          },
        ],
      },
    ],
  },
  {
    id: "breads",
    label: "Indian Breads",
    subsections: [
      {
        items: [
          {
            name: "Tandoori Roti",
            price: 25,
            description: "Whole wheat bread baked fresh in the tandoor.",
            image: IMG.naanBread,
          },
          {
            name: "Butter Roti",
            price: 30,
            description: "Tandoori roti finished with a brush of melted butter.",
            image: IMG.naanBread,
          },
          {
            name: "Plain Naan",
            price: 40,
            description: "Soft leavened bread baked in the tandoor.",
            image: IMG.naanBread,
          },
          {
            name: "Butter Naan",
            price: 50,
            description: "Tandoori naan finished with a brush of melted butter.",
            image: IMG.naanBread,
          },
          {
            name: "Garlic Naan",
            price: 60,
            description:
              "Naan topped with fresh chopped garlic and baked in the tandoor.",
            image: IMG.naanBread,
          },
          {
            name: "Kulcha",
            price: 45,
            description: "Soft leavened bread stuffed and baked in the tandoor.",
            image: IMG.naanBread,
          },
          {
            name: "Butter Kulcha",
            price: 55,
            description: "Kulcha finished with a brush of melted butter.",
            image: IMG.naanBread,
          },
          {
            name: "Roomali Roti",
            price: 35,
            description:
              "Thin, soft handkerchief bread cooked on an inverted griddle.",
            image: IMG.naanBread,
          },
        ],
      },
    ],
  },
  {
    id: "beverages",
    label: "Beverages",
    subsections: [
      {
        items: [
          {
            name: "Mineral Water",
            price: 20,
            description: "Chilled packaged drinking water.",
            image: IMG.mineralWater,
          },
          {
            name: "Soft Drinks",
            price: 40,
            description: "Assorted chilled soft drinks served over ice.",
            image: IMG.softDrinks,
          },
        ],
      },
    ],
  },
  {
    id: "bhagini-gold",
    label: "Bhagini Gold Specials",
    subsections: [
      {
        items: [
          {
            name: "Bhagini Gold Special Chicken Biryani",
            price: 350,
            description:
              "Our signature slow-cooked chicken biryani with a special house blend of spices.",
            image: IMG.chickenBiryani,
          },
          {
            name: "Bhagini Gold Mutton Special",
            price: 450,
            description:
              "Signature mutton delicacy prepared with our chef's special masala.",
            image: IMG.muttonBiryani,
          },
          {
            name: "Bhagini Gold Tandoori Platter",
            price: 500,
            description:
              "An assorted grill platter of our best tandoori chicken, kebabs and tikkas.",
            image: IMG.tandooriPlatter,
          },
          {
            name: "Family Combo Meals",
            price: 899,
            description:
              "A generous combo meal designed to be shared, with biryani, curry and sides.",
            image: IMG.thali,
          },
          {
            name: "Dhaba Style Chicken Curry",
            price: 280,
            description:
              "Rustic highway-dhaba style chicken curry cooked in traditional spices.",
            image: IMG.butterChicken,
          },
          {
            name: "Dhaba Style Mutton Curry",
            price: 380,
            description:
              "Rustic highway-dhaba style mutton curry slow-cooked in traditional spices.",
            image: IMG.muttonCurry,
          },
          {
            name: "Special Andhra Meals",
            price: 320,
            description:
              "A full Andhra-style meal with rice, curries, and traditional accompaniments.",
            image: IMG.thali,
          },
          {
            name: "Special North Indian Thali",
            price: 300,
            description:
              "A complete North Indian thali with dal, sabzi, roti, rice and accompaniments.",
            image: IMG.thali,
          },
        ],
      },
    ],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const currentSection =
    menuSections.find((section) => section.id === activeSection) ??
    menuSections[0];

  return (
    <div className="container">
      <div className="header">
        <div className="brand-row">
          <Image
            src="/logo.png"
            alt="Bhagini Gold Dhaba & Restaurant logo"
            width={100}
            height={100}
            className="brand-logo"
          />
          <h1 className="brand-name">BHAGINI GOLD DHABA &amp; RESTAURANT</h1>
        </div>
        <p className="tagline">Authentic Taste • Premium Experience</p>
      </div>

      <div className="tabs">
        {menuSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={
              section.id === activeSection ? "tab tab-active" : "tab"
            }
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>

      {currentSection.subsections.map((subsection, index) => (
        <div key={subsection.title ?? index} className="subsection">
          {subsection.title && (
            <h2 className="subsection-title">{subsection.title}</h2>
          )}
          <div className="menu-container">
            {subsection.items.map((item) => (
              <div className="menu-item" key={item.name}>
                <div className="item-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="item-image"
                    loading="lazy"
                  />
                  <span className="price-badge">₹{item.price}</span>
                </div>
                <div className="item-body">
                  <h3 className="item-title">{item.name}</h3>
                  <p className="item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="footer">
        <p className="closing-tagline">
          &ldquo;Where Every Meal Feels Like Home&rdquo;
        </p>
      </div>
    </div>
  );
}
