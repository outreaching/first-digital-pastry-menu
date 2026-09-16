export type Category = "Cakes" | "Cake Slices" | "Pastries" | "Cookies" | "Donuts" | "Muffins" | "Desserts" | "Hot Drinks" | "Cold Drinks";

export type CakeSize = { name: string; price: number };

export type Food = {
  id: string;
  name: string;
  nameAm: string;
  category: Category;
  description: string;
  descriptionAm: string;
  ingredients: string[];
  ingredientsAm: string[];
  image: string;
  price: number;
  sizes?: CakeSize[];
  isVisible: boolean;
  isSoldOut: boolean;
  featured?: boolean;
};
