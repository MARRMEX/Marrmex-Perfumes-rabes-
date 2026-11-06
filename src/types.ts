export interface Product {
  id: string;
  name: string;
  brand: string; // "Al Rehab"
  presentation: string; // "6 ml" o "Pack 3 x 6 ml"
  price: number; // 199 MXN / 549 MXN
  originalPrice?: number;
  category: 'Gourmand' | 'Floral' | 'Fresco' | 'Oriental' | 'Amaderado' | 'Musk' | 'Pack Especial';
  gender: 'Unisex' | 'Caballero' | 'Dama' | 'Variado';
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  image: string;
  popular?: boolean;
  isPack?: boolean;
  packItems?: string[];
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

