import Image from "next/image";



const menuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Main Course",
    description: "Fragrant basmati rice cooked with tender chicken and aromatic spices.",
    price: 280,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.6,
    preparationTime: 25,
    image: "/images/chicken-biryani.jpg"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Starters",
    description: "Grilled cottage cheese marinated with spices and yogurt.",
    price: 220,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    preparationTime: 15,
    image: "/images/paneer-tikka.jpg"
  },
  {
    id: 3,
    name: "Butter Chicken",
    category: "Main Course",
    description: "Tender chicken cooked in a creamy tomato and butter gravy.",
    price: 320,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.7,
    preparationTime: 25,
    image: "/images/butter-chicken.jpg"
  },
  {
    id: 4,
    name: "Masala Dosa",
    category: "South Indian",
    description: "Crispy dosa filled with spiced potato masala, served with chutney and sambar.",
    price: 120,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.4,
    preparationTime: 12,
    image: "/images/masala-dosa.jpg"
  },
  {
    id: 5,
    name: "Chicken Tikka",
    category: "Starters",
    description: "Juicy chicken pieces marinated in spices and grilled to perfection.",
    price: 260,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.6,
    preparationTime: 18,
    image: "/images/chicken-tikka.jpg"
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    category: "Main Course",
    description: "Soft paneer cubes cooked in a rich, creamy tomato gravy.",
    price: 240,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    preparationTime: 20,
    image: "/images/paneer-butter-masala.jpg"
  },
  {
    id: 7,
    name: "Veg Fried Rice",
    category: "Rice & Noodles",
    description: "Fried basmati rice tossed with fresh vegetables and Asian spices.",
    price: 180,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.2,
    preparationTime: 15,
    image: "/images/veg-fried-rice.jpg"
  },
  {
    id: 8,
    name: "Chicken Fried Rice",
    category: "Rice & Noodles",
    description: "Aromatic fried rice tossed with chicken, vegetables and sauces.",
    price: 220,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.4,
    preparationTime: 18,
    image: "/images/chicken-fried-rice.jpg"
  },
  {
    id: 9,
    name: "Chilli Chicken",
    category: "Chinese",
    description: "Crispy chicken tossed with bell peppers, onions and spicy chilli sauce.",
    price: 260,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.3,
    preparationTime: 20,
    image: "/images/chilli-chicken.jpg"
  },
  {
    id: 10,
    name: "Veg Manchurian",
    category: "Chinese",
    description: "Crispy vegetable balls served in a flavorful Manchurian sauce.",
    price: 190,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.2,
    preparationTime: 15,
    image: "/images/veg-manchurian.jpg"
  },
  {
    id: 11,
    name: "Margherita Pizza",
    category: "Pizza",
    description: "Classic pizza topped with tomato sauce, mozzarella and fresh basil.",
    price: 299,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    preparationTime: 20,
    image: "/images/margherita-pizza.jpg"
  },
  {
    id: 12,
    name: "Chicken Pizza",
    category: "Pizza",
    description: "Loaded pizza topped with chicken, mozzarella cheese and fresh vegetables.",
    price: 399,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.6,
    preparationTime: 22,
    image: "/images/chicken-pizza.jpg"
  },
  {
    id: 13,
    name: "Chicken Burger",
    category: "Burgers",
    description: "Crispy chicken patty with lettuce, cheese and special sauce.",
    price: 249,
    currency: "INR",
    isVeg: false,
    isAvailable: true,
    rating: 4.4,
    preparationTime: 15,
    image: "/images/chicken-burger.jpg"
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Burgers",
    description: "Crispy vegetable patty with lettuce, tomato, cheese and signature sauce.",
    price: 199,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.2,
    preparationTime: 12,
    image: "/images/veg-burger.jpg"
  },
  {
    id: 15,
    name: "French Fries",
    category: "Sides",
    description: "Golden crispy potato fries seasoned with a touch of salt.",
    price: 129,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.1,
    preparationTime: 8,
    image: "/images/french-fries.jpg"
  },
  {
    id: 16,
    name: "Caesar Salad",
    category: "Salads",
    description: "Fresh lettuce, croutons and parmesan cheese with Caesar dressing.",
    price: 220,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.0,
    preparationTime: 10,
    image: "/images/caesar-salad.jpg"
  },
  {
    id: 17,
    name: "Mango Lassi",
    category: "Beverages",
    description: "Refreshing yogurt-based drink blended with sweet ripe mangoes.",
    price: 110,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.6,
    preparationTime: 5,
    image: "/images/mango-lassi.jpg"
  },
  {
    id: 18,
    name: "Cold Coffee",
    category: "Beverages",
    description: "Chilled creamy coffee blended with milk and ice.",
    price: 140,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.3,
    preparationTime: 5,
    image: "/images/cold-coffee.jpg"
  },
  {
    id: 19,
    name: "Chocolate Brownie",
    category: "Desserts",
    description: "Rich and fudgy chocolate brownie served warm.",
    price: 160,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.7,
    preparationTime: 8,
    image: "/images/chocolate-brownie.jpg"
  },
  {
    id: 20,
    name: "Gulab Jamun",
    category: "Desserts",
    description: "Soft milk-solid dumplings soaked in warm sugar syrup.",
    price: 100,
    currency: "INR",
    isVeg: true,
    isAvailable: true,
    rating: 4.5,
    preparationTime: 5,
    image: "/images/gulab-jamun.jpg"
  }
];
const item = menuItems[0]
export default function Home() {

  return (
    <div className="container">
      <div className="header">
        <h1>Restaurant Name</h1>
      </div>
      <div className="menu-container">
        {menuItems.map(item => 
                <div className="menu-item">
        <div className="h-row">
        <h1 className="item-title">{item.name} </h1>
        <span>₹{item.price}</span>
        </div>
        <p className="item-description">{item.description}</p>
        <div className="h-row">
          <p className="tag">{item.category}</p> 
          <p>{item.rating}</p>
        </div>
      </div>
        )}
      </div>

    </div>
  );
}
