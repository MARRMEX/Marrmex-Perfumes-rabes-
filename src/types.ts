export interface Product {
  id: string;
  name: string;
  brand: string; // "Al Rehab"
  presentation: string; // "5 ml"
  price: number; // 180 MXN
  category: 'Gourmand' | 'Floral' | 'Fresco' | 'Oriental' | 'Amaderado' | 'Musk';
  gender: 'Unisex' | 'Caballero' | 'Dama';
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  image: string;
  popular?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface OrderFormState {
  nombre: string;
  cantidad: number;
  informacionPedido: string;
}
