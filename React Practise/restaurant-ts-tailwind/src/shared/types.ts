export type Order = {
  name: string;
  id: string;
  price: number;
};

export type MenuItem = {
  name: string;
  ingredients: string[];
  id: number;
  price: number;
  emoji: string;
};
