"use client";

import Image from "next/image";
import { useState } from "react";

const IMG = {
  // =========================
  // VEGETARIAN
  // =========================

  veg: [
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1593986799230-f9755e668580?auto=format&fit=crop&w=600&q=75",
  ],

  paneer: [
    "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1720787066625-ba5e3e3b8ca7?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=75",
  ],

  mushroom: [
    "https://images.unsplash.com/photo-1508338712271-40539c947a8b?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&q=75",
  ],

  gobi: [
    "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=75",
  ],

  babyCorn: [
    "https://images.unsplash.com/photo-1593986799230-f9755e668580?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=75",
  ],

  kaju: [
    "https://images.unsplash.com/photo-1599599810694-57a9a2c4d4a5?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1536591375737-5d2f2e7e5c16?auto=format&fit=crop&w=600&q=75",
  ],

  dal: [
    "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // EGG
  // =========================

  egg: [
    "https://images.unsplash.com/photo-1626895597772-74988e263fab?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1587486913049-53fc88980cfc?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1507248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // CHICKEN
  // =========================

  chicken: [
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // MUTTON
  // =========================

  mutton: [
    "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // FISH
  // =========================

  fish: [
    "https://images.unsplash.com/photo-1579208030886-b937da0925dc?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1654863404432-cac67587e25d?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // BIRYANI
  // =========================

  biryani: [
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1642972420043-4736c570a716?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1596560520688-e1ecc9da2099?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1691171047312-d809eccef46d?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // RICE / FRIED RICE
  // =========================

  rice: [
    "https://images.unsplash.com/photo-1647577931985-e0c3e8fb815c?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1626500154744-e4b394ffea16?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // INDIAN BREADS
  // =========================

  breads: [
    "https://images.unsplash.com/photo-1697155406014-04dc649b0953?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // TANDOORI
  // =========================

  tandoori: [
    "https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1605908580297-f3e1c02e64ff?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // BEVERAGES
  // =========================

  beverages: [
    "https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1590430752967-d0e116909be1?auto=format&fit=crop&w=600&q=75",
  ],

  // =========================
  // SPECIALS
  // =========================

  specials: [
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1606843046080-45bf7a23c39f?auto=format&fit=crop&w=600&q=75",
    "https://images.unsplash.com/photo-1750190624608-57ceddba8d69?auto=format&fit=crop&w=600&q=75",
  ],
} as const;





type ImageCategory = keyof typeof IMG;

type MenuItem = {
  name: string;
  price?: number;
  description: string;
  imageCategory: ImageCategory;
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



function hashString(value: string): number {
  let hash = 0;

  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function getMenuImage(
  itemName: string,
  category: ImageCategory
): string {
  const images = IMG[category];

  if (!images.length) {
    return "";
  }

  const index = hashString(itemName) % images.length;

  return images[index];
}

const menuSections: MenuSection[] = [
  {
    id: "veg",
    label: "Vegetarian",
    subsections: [
      {
        title: "Starters",
        items: [
          {
            name: "Onion Rings",
            price: 130,
            description: "Crispy onion rings coated in a light seasoned batter and fried until golden.",
            imageCategory: "veg",
          },
          {
            name: "Onion Pakoda",
            price: 130,
            description: "Crispy onion fritters prepared with seasoned gram flour and spices.",
            imageCategory: "veg",
          },
          {
            name: "Capsicum Bajji",
            price: 130,
            description: "Capsicum coated in spiced gram-flour batter and fried until crisp.",
            imageCategory: "veg",
          },
          {
            name: "Kaju Dry",
            price: 190,
            description: "Crispy cashews tossed with aromatic spices for a rich and crunchy starter.",
            imageCategory: "veg",
          },
          {
            name: "Mushroom Manchurian",
            price: 170,
            description: "Crispy mushrooms tossed in a tangy and spicy Manchurian sauce.",
            imageCategory: "veg",
          },
          {
            name: "Mushroom Chilli",
            price: 170,
            description: "Mushrooms stir-fried with peppers, onions and a spicy chilli sauce.",
            imageCategory: "mushroom",
          },
          {
            name: "Mushroom Dry",
            price: 170,
            description: "Crispy mushrooms tossed with aromatic spices and served dry.",
            imageCategory: "mushroom",
          },
          {
            name: "Mushroom Kabab",
            price: 180,
            description: "Seasoned mushrooms prepared in a flavorful kebab style.",
            imageCategory: "mushroom",
          },
          {
            name: "Mushroom 65",
            price: 170,
            description: "Crispy mushroom pieces coated in a spicy South Indian 65-style masala.",
            imageCategory: "mushroom",
          },
          {
            name: "Gobi Manchurian",
            price: 130,
            description: "Crispy cauliflower florets tossed in a tangy Manchurian sauce.",
            imageCategory: "gobi",
          },
          {
            name: "Gobi Chilli",
            price: 130,
            description: "Crispy cauliflower tossed with peppers, onions and chilli sauce.",
            imageCategory: "gobi",
          },
          {
            name: "Gobi Dry",
            price: 130,
            description: "Crispy cauliflower seasoned with aromatic spices and served dry.",
            imageCategory: "gobi",
          },
          {
            name: "Baby Corn Manchurian",
            price: 170,
            description: "Crispy baby corn tossed in a tangy Indo-Chinese Manchurian sauce.",
            imageCategory: "babyCorn",
          },
          {
            name: "Baby Corn Chilli",
            price: 170,
            description: "Baby corn stir-fried with peppers, onions and spicy chilli sauce.",
            imageCategory: "babyCorn",
          },
          {
            name: "Baby Corn Dry",
            price: 170,
            description: "Crispy baby corn tossed with aromatic spices and served dry.",
            imageCategory: "babyCorn",
          },
          {
            name: "Baby Corn 65",
            price: 170,
            description: "Crispy baby corn coated in a spicy 65-style masala.",
            imageCategory: "babyCorn",
          },
          {
            name: "Baby Corn Kabab",
            price: 180,
            description: "Seasoned baby corn prepared in a flavorful kebab style.",
            imageCategory: "babyCorn",
          },
          {
            name: "Paneer Manchurian",
            price: 170,
            description: "Crispy paneer pieces tossed in a tangy and spicy Manchurian sauce.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer Chilli",
            price: 170,
            description: "Paneer tossed with peppers, onions and a spicy chilli sauce.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer Dry",
            price: 180,
            description: "Crispy paneer tossed with aromatic spices and served dry.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer Kabab",
            price: 180,
            description: "Seasoned paneer prepared in a flavorful kebab style.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer 65",
            price: 180,
            description: "Crispy paneer pieces coated in a spicy 65-style masala.",
            imageCategory: "paneer",
          },
        ],
      },
      {
        title: "Veg Curries",
        items: [
          {
            name: "Veg Kadai",
            price: 170,
            description: "Mixed vegetables cooked with peppers and aromatic kadai spices.",
            imageCategory: "veg",
          },
          {
            name: "Veg Kolhapuri",
            price: 170,
            description: "Mixed vegetables cooked in a bold and spicy Kolhapuri-style gravy.",
            imageCategory: "veg",
          },
          {
            name: "Veg Hyderabadi",
            price: 170,
            description: "Mixed vegetables cooked in a rich Hyderabadi-style spiced gravy.",
            imageCategory: "veg",
          },
          {
            name: "Mushroom Masala",
            price: 170,
            description: "Mushrooms cooked in a rich, aromatic masala gravy.",
            imageCategory: "mushroom",
          },
          {
            name: "Mushroom Kadai",
            price: 170,
            description: "Mushrooms cooked with peppers and aromatic kadai spices.",
            imageCategory: "mushroom",
          },
          {
            name: "Kaju Masala",
            price: 200,
            description: "Cashews cooked in a rich and creamy spiced masala gravy.",
            imageCategory: "kaju",
          },
          {
            name: "Palak Paneer",
            price: 190,
            description: "Soft paneer cooked in a smooth, spiced spinach gravy.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer Pulka",
            price: 120,
            description: "Paneer prepared as a flavorful accompaniment to soft Indian bread.",
            imageCategory: "paneer",
          },
          {
            name: "Paneer Butter Masala",
            price: 190,
            description: "Paneer simmered in a rich buttery tomato-based masala gravy.",
            imageCategory: "paneer",
          },
          {
            name: "Panner Kadai",
            price: 190,
            description: "Paneer cooked with peppers and aromatic kadai spices.",
            imageCategory: "paneer",
          },
          {
            name: "Dal Tadka",
            price: 130,
            description: "Lentils finished with a flavorful tempering of spices.",
            imageCategory: "dal",
          },
          {
            name: "Tomato Curry",
            price: 120,
            description: "Tomatoes cooked into a flavorful Indian-style spiced curry.",
            imageCategory: "veg",
          },
          {
            name: "Dal Fry",
            price: 110,
            description: "Slow-cooked lentils finished with a savory spiced tempering.",
            imageCategory: "dal",
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
        title: "Egg Starters",
        items: [
          {
            name: "Egg Pepper Dry",
            price: 150,
            description: "Egg pieces tossed with crushed black pepper and aromatic spices.",
            imageCategory: "egg",
          },
          {
            name: "Egg Bonda",
            price: 130,
            description: "Boiled egg coated in seasoned batter and fried until golden.",
            imageCategory: "egg",
          },
          {
            name: "Egg 65",
            price: 150,
            description: "Crispy egg pieces tossed in a spicy 65-style masala.",
            imageCategory: "egg",
          },
          {
            name: "Egg Manchurian",
            price: 150,
            description: "Crispy egg pieces tossed in a tangy Indo-Chinese Manchurian sauce.",
            imageCategory: "egg",
          },
          {
            name: "Egg Chilli",
            price: 150,
            description: "Egg pieces stir-fried with peppers, onions and chilli sauce.",
            imageCategory: "egg",
          },
          {
            name: "Egg Kasthuri",
            price: 150,
            description: "Egg preparation flavored with aromatic spices and kasthuri-style seasoning.",
            imageCategory: "egg",
          },
        ],
      },
      {
        title: "Egg Curries",
        items: [
          {
            name: "Egg Curry",
            price: 130,
            description: "Boiled eggs simmered in a flavorful spiced curry gravy.",
            imageCategory: "egg",
          },
          {
            name: "Egg Masala",
            price: 130,
            description: "Eggs cooked in a rich and aromatic masala gravy.",
            imageCategory: "egg",
          },
          {
            name: "Anda Kadai",
            price: 130,
            description: "Eggs cooked with peppers and bold kadai-style spices.",
            imageCategory: "egg",
          },
        ],
      },
    ],
  },

  {
    id: "nonveg-starters",
    label: "Non-Vegetarian Starters",
    subsections: [
      {
        title: "Chicken Starters",
        items: [
          {
            name: "Chicken 65",
            price: 200,
            description: "Crispy chicken pieces tossed in a spicy South Indian 65-style masala.",
            imageCategory: "chicken",
          },
          {
            name: "Chilli Chicken",
            price: 190,
            description: "Chicken tossed with peppers, onions and spicy chilli sauce.",
            imageCategory: "chicken",
          },
          {
            name: "Guntur Chicken",
            price: 190,
            description: "Chicken prepared with a bold and spicy Guntur-style seasoning.",
            imageCategory: "chicken",
          },
          {
            name: "Andra Chilli Chicken",
            price: 200,
            description: "Spicy chicken preparation featuring Andhra-style chilli flavors.",
            imageCategory: "chicken",
          },
          {
            name: "Pepper Chicken",
            price: 200,
            description: "Chicken tossed with crushed black pepper and aromatic spices.",
            imageCategory: "chicken",
          },
          {
            name: "Lemon Chicken",
            price: 210,
            description: "Chicken prepared with a bright lemon flavor and aromatic spices.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Kabab",
            price: 160,
            description: "Seasoned chicken prepared in a flavorful kebab style.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Manchurian",
            price: 200,
            description: "Crispy chicken tossed in a tangy Indo-Chinese Manchurian sauce.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Lollipop",
            price: 200,
            description: "Chicken lollipop pieces marinated with spices and fried until crisp.",
            imageCategory: "chicken",
          },
          {
            name: "Kasturi Chicken",
            price: 210,
            description: "Chicken flavored with aromatic spices and kasthuri-style seasoning.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Fry",
            price: 190,
            description: "Spiced chicken pieces fried until crisp and flavorful.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Ghee Roast",
            price: 230,
            description: "Chicken roasted with ghee and a rich blend of aromatic spices.",
            imageCategory: "chicken",
          },
          {
            name: "Egg Chicken Lollipop",
            price: 210,
            description: "Chicken lollipop prepared with an egg-based coating and spices.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Lollipop Manchurian",
            price: 210,
            description: "Crispy chicken lollipop tossed in a tangy Manchurian sauce.",
            imageCategory: "chicken",
          },
          {
            name: "Pudina Chicken",
            price: 200,
            description: "Chicken flavored with fresh mint and aromatic spices.",
            imageCategory: "chicken",
          },
          {
            name: "Dragon Chicken",
            price: 200,
            description: "Crispy chicken tossed in a spicy Indo-Chinese dragon-style sauce.",
            imageCategory: "chicken",
          },
        ],
      },
    ],
  },

  {
    id: "nonveg-main",
    label: "Non-Vegetarian Main Course",
    subsections: [
      {
        title: "Chicken Curries",
        items: [
          {
            name: "Chicken Kadai",
            price: 200,
            description: "Chicken cooked with peppers and aromatic kadai spices.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Masala",
            price: 200,
            description: "Chicken simmered in a rich and flavorful masala gravy.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Hyderabadi",
            price: 210,
            description: "Chicken prepared in a rich Hyderabadi-style spiced gravy.",
            imageCategory: "chicken",
          },
          {
            name: "Butter Chicken Masala",
            price: 200,
            description: "Chicken cooked in a rich buttery tomato-based masala gravy.",
            imageCategory: "chicken",
          },
          {
            name: "Guntur Masala",
            price: 210,
            description: "Chicken preparation featuring bold and spicy Guntur-style masala.",
            imageCategory: "chicken",
          },
          {
            name: "Chicken Kolhapuri",
            price: 210,
            description: "Chicken cooked in a bold and spicy Kolhapuri-style gravy.",
            imageCategory: "chicken",
          },
        ],
      },
    ],
  },

  {
    id: "mutton",
    label: "Mutton",
    subsections: [
      {
        title: "Mutton Starters",
        items: [
          {
            name: "Mutton Fry",
            price: 260,
            description: "Spiced mutton pieces fried until tender and flavorful.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Ghee Roast",
            price: 270,
            description: "Mutton roasted with ghee and a rich blend of aromatic spices.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Dry",
            price: 260,
            description: "Tender mutton cooked with aromatic spices and served dry.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Manchurian",
            price: 260,
            description: "Mutton pieces tossed in a tangy and spicy Manchurian sauce.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Boti Fry",
            price: 180,
            description: "Spiced mutton boti pieces fried until tender and flavorful.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Head Fry",
            price: 190,
            description: "Mutton head pieces prepared with aromatic spices and fried.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Egg Boti",
            price: 210,
            description: "Mutton boti prepared with egg and aromatic spices.",
            imageCategory: "mutton",
          },
        ],
      },
      {
        title: "Mutton Curries",
        items: [
          {
            name: "Mutton Kadai",
            price: 270,
            description: "Tender mutton cooked with peppers and bold kadai spices.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Masala",
            price: 270,
            description: "Mutton simmered in a rich and flavorful masala gravy.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Hyderabadi",
            price: 270,
            description: "Mutton prepared in a rich Hyderabadi-style spiced gravy.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Boti Masala",
            price: 210,
            description: "Mutton boti pieces cooked in a rich spiced masala gravy.",
            imageCategory: "mutton",
          },
          {
            name: "Mutton Head Masala",
            price: 210,
            description: "Mutton head pieces cooked in an aromatic masala gravy.",
            imageCategory: "mutton",
          },
        ],
      },
    ],
  },

  {
    id: "fish",
    label: "Fish",
    subsections: [
      {
        title: "Fish Starters",
        items: [
          {
            name: "Pomfret Fish Tawa Fry",
            price: 180,
            description: "Pomfret seasoned with spices and cooked on the tawa.",
            imageCategory: "fish",
          },
          {
            name: "Basa Fish Tawa Fry",
            price: 200,
            description: "Basa fish seasoned with spices and cooked on the tawa.",
            imageCategory: "fish",
          },
          {
            name: "Bangda Fish Tawa Fry",
            price: 200,
            description: "Bangda fish seasoned with spices and cooked on the tawa.",
            imageCategory: "fish",
          },
        ],
      },
      {
        title: "Fish Curries",
        items: [
          {
            name: "Pomfret Fish Masala",
            price: 190,
            description: "Pomfret cooked in a rich and flavorful masala gravy.",
            imageCategory: "fish",
          },
          {
            name: "Bangda Fish Masala",
            price: 220,
            description: "Bangda fish cooked in an aromatic spiced masala gravy.",
            imageCategory: "fish",
          },
        ],
      },
    ],
  },

  {
    id: "biryanis-rice",
    label: "Biryanis & Rice",
    subsections: [
      {
        title: "Veg Biryanis and Rice",
        items: [
          {
            name: "Veg Biryani",
            price: 150,
            description: "Fragrant rice cooked with mixed vegetables and aromatic spices.",
            imageCategory: "biryani",
          },
          {
            name: "Paneer Biryani",
            price: 150,
            description: "Fragrant rice cooked with paneer and aromatic spices.",
            imageCategory: "biryani",
          },
          {
            name: "Mushroom Biryani",
            price: 150,
            description: "Fragrant rice cooked with mushrooms and aromatic spices.",
            imageCategory: "biryani",
          },
          {
            name: "Kaju Rice",
            price: 180,
            description: "Fragrant rice prepared with cashews and aromatic seasoning.",
            imageCategory: "kaju",
          },
          {
            name: "Paneer Fried Rice",
            price: 150,
            description: "Wok-tossed rice with paneer and flavorful seasoning.",
            imageCategory: "rice",
          },
          {
            name: "Mushroom Fried Rice",
            price: 150,
            description: "Wok-tossed rice with mushrooms and flavorful seasoning.",
            imageCategory: "rice",
          },
          {
            name: "Dal Rice",
            price: 130,
            description: "Rice served with flavorful dal for a comforting combination.",
            imageCategory: "dal",
          },
          {
            name: "Palak Rice",
            price: 130,
            description: "Rice prepared with spinach and aromatic spices.",
            imageCategory: "rice",
          },
          {
            name: "Ghee Rice",
            price: 130,
            description: "Fragrant rice prepared with ghee and aromatic spices.",
            imageCategory: "rice",
          },
          {
            name: "Jeera Rice",
            price: 100,
            description: "Fragrant rice tempered with roasted cumin seeds.",
            imageCategory: "rice",
          },
          {
            name: "Tomata",
            price: 100,
            description: "Rice prepared with tomato and aromatic spices.",
            imageCategory: "rice",
          },
          {
            name: "Veg Fried Rice",
            price: 100,
            description: "Wok-tossed rice prepared with mixed vegetables and seasoning.",
            imageCategory: "rice",
          },
          {
            name: "Curd Rice",
            price: 100,
            description: "Soft rice combined with cooling curd and mild seasoning.",
            imageCategory: "rice",
          },
          {
            name: "Lemon Rice",
            price: 100,
            description: "Rice flavored with fresh lemon and aromatic seasoning.",
            imageCategory: "rice",
          },
        ],
      },
      {
        title: "Egg Biryanis and Rice",
        items: [
          {
            name: "Egg Biryani",
            price: 130,
            description: "Fragrant rice prepared with eggs and aromatic biryani spices.",
            imageCategory: "biryani",
          },
          {
            name: "Egg Fried Rice",
            price: 100,
            description: "Wok-tossed rice prepared with egg and flavorful seasoning.",
            imageCategory: "rice",
          },
        ],
      },
      {
        title: "Chicken Biryanis and Rice",
        items: [
          {
            name: "Chicken Biryani",
            price: 160,
            description: "Fragrant biryani rice cooked with seasoned chicken and aromatic spices.",
            imageCategory: "biryani",
          },
          {
            name: "Chicken Fried Rice",
            price: 150,
            description: "Wok-tossed rice prepared with chicken and flavorful seasoning.",
            imageCategory: "rice",
          },
        ],
      },
      {
        title: "Mutton Biryanis and Rice",
        items: [
          {
            name: "Mutton Boti Rice",
            price: 210,
            description: "Fragrant rice served with flavorful mutton boti pieces.",
            imageCategory: "rice",
          },
          {
            name: "Mutton Fried Rice",
            price: 260,
            description: "Wok-tossed rice prepared with mutton and flavorful seasoning.",
            imageCategory: "rice",
          },
          {
            name: "Mutton Boti Rice",
            price: 210,
            description: "Fragrant rice served with flavorful mutton boti pieces.",
            imageCategory: "rice",
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
            description: "Whole wheat roti baked in the traditional tandoor.",
            imageCategory: "breads",
          },
          {
            name: "Butter Roti",
            price: 30,
            description: "Tandoori roti finished with melted butter.",
            imageCategory: "breads",
          },
          {
            name: "Plain Naan",
            price: 50,
            description: "Soft leavened naan baked fresh in the tandoor.",
            imageCategory: "breads",
          },
          {
            name: "Butter Naan",
            price: 50,
            description: "Soft tandoori naan finished with melted butter.",
            imageCategory: "breads",
          },
          {
            name: "Garlic Naan",
            price: 60,
            description: "Soft naan topped with garlic and baked in the tandoor.",
            imageCategory: "breads",
          },
          {
            name: "Kulcha",
            price: 45,
            description: "Soft leavened Indian bread baked in the tandoor.",
            imageCategory: "breads",
          },
          {
            name: "Butter Kulcha",
            price: 45,
            description: "Soft kulcha finished with melted butter.",
            imageCategory: "breads",
          },
        ],
      },
    ],
  },

  {
    id: "tandoori",
    label: "Tandoori Items",
    subsections: [
      {
        items: [
          {
            name: "Paneer Tikka",
            price: 210,
            description: "Paneer marinated with aromatic spices and prepared in the tandoor.",
            imageCategory: "tandoori",
          },
          {
            name: "Mushroom Tikka",
            price: 210,
            description: "Mushrooms marinated with aromatic spices and prepared in the tandoor.",
            imageCategory: "tandoori",
          },
          {
            name: "Chicken Kalmi",
            price: 180,
            description: "Tender chicken prepared with aromatic spices in a tandoori style.",
            imageCategory: "tandoori",
          },
          {
            name: "Tandoori Chicken",
            price: 210,
            description: "Chicken marinated with aromatic spices and roasted in the tandoor.",
            imageCategory: "tandoori",
          },
          {
            name: "Hariyali Tikka",
            price: 210,
            description: "Tikka prepared with aromatic green herbs and tandoori spices.",
            imageCategory: "tandoori",
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
            description: "Chilled packaged drinking water.",
            imageCategory: "beverages",
          },
          {
            name: "Soft Drinks",
            description: "Assorted chilled soft drinks.",
            imageCategory: "beverages",
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
            name: "Bhagini Gold Chicken Special",
            description: "A signature chicken preparation from the Bhagini Gold Specials menu.",
            imageCategory: "chicken",
          },
          {
            name: "Bhagini Gold Mutton Special",
            description: "A signature mutton preparation from the Bhagini Gold Specials menu.",
            imageCategory: "mutton",
          },
          {
            name: "Bhagini Gold Tandoori Platter",
            description: "A special platter featuring assorted tandoori preparations.",
            imageCategory: "tandoori",
          },
        ],
      },
    ],
  },
];




export default function Home() {
  const [activeSection, setActiveSection] = useState(menuSections[0].id);
  const [showCategoryModal, setShowCategoryModal] = useState(true);

  const currentSection =
    menuSections.find((section) => section.id === activeSection) ??
    menuSections[0];

  const handleCategorySelect = (sectionId: string) => {
    setActiveSection(sectionId);
    setShowCategoryModal(false);
  };

  return (
    <div className="container">

      {/* Initial Category Selection Modal */}
      {showCategoryModal && (
        <div className="category-modal-overlay">
          <div className="category-modal">
            <div className="category-modal-header">
              <Image
                src="/logo.png"
                alt="Bhagini Gold Dhaba & Restaurant"
                width={80}
                height={80}
                className="category-modal-logo"
              />

              <h2>Welcome to Bhagini Gold</h2>

              <p>
                What would you like to explore?
              </p>
            </div>

            <div className="category-options">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  className="category-option"
                  onClick={() => handleCategorySelect(section.id)}
                >
                  <span className="category-option-title">
                    {section.label}
                  </span>

                  <span className="category-option-arrow">
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="header">
        <div className="brand-row">
          <Image
            src="/logo.png"
            alt="Bhagini Gold Dhaba & Restaurant logo"
            width={100}
            height={100}
            className="brand-logo"
          />

          <h1 className="brand-name">
            BHAGINI GOLD DHABA &amp; RESTAURANT
          </h1>
        </div>

        <p className="tagline">
          Authentic Taste • Premium Experience
        </p>
      </div>

      {/* Existing Tabs */}
      <div className="tabs">
        {menuSections.map((section) => (
          <button
            key={section.id}
            type="button"
            className={
              section.id === activeSection
                ? "tab tab-active"
                : "tab"
            }
            onClick={() => setActiveSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Current Menu */}
      {currentSection.subsections.map((subsection, index) => (
        <div
          key={subsection.title ?? index}
          className="subsection"
        >
          {subsection.title && (
            <h2 className="subsection-title">
              {subsection.title}
            </h2>
          )}

          <div className="menu-container">
            {subsection.items.map((item, itemIndex) => (
              <div
                className="menu-item"
                key={`${item.name}-${itemIndex}`}
              >
                <div className="item-image-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={getMenuImage(item.name, item.imageCategory)}
                    alt={item.name}
                    className="item-image"
                    loading="lazy"
                  />

                  {item.price !== undefined && (
                    <span className="price-badge">
                      ₹{item.price}
                    </span>
                  )}
                </div>

                <div className="item-body">
                  <h3 className="item-title">
                    {item.name}
                  </h3>

                  <p className="item-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="footer">
        <p className="closing-tagline">
          &ldquo;Where Every Meal Feels Like Home&rdquo;
        </p>
      </div>
    </div>
  );
}
