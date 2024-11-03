export type ProductCategory = 'electronics' | 'clothing' | 'food' | 'accessories';

export interface Product {
  image: string;
  title: string;
  price: number;
  category: ProductCategory;
}