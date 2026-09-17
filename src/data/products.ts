import { Product } from '../types';
import chocoMuskImg from '../assets/images/alrehab_choco_musk_1789590028683.jpg';
import frenchCoffeeImg from '../assets/images/alrehab_french_coffee_1789590038368.jpg';
import softImg from '../assets/images/alrehab_soft_1789590048358.jpg';
import silverImg from '../assets/images/alrehab_silver_1789591258709.jpg';
import sultanImg from '../assets/images/alrehab_sultan_1789591269537.jpg';
import goldenSandImg from '../assets/images/alrehab_golden_sand_1789591280605.jpg';
import whiteMuskImg from '../assets/images/alrehab_white_musk_1789591290721.jpg';
import dalalImg from '../assets/images/alrehab_dalal_1789591301344.jpg';
import avenueImg from '../assets/images/alrehab_avenue_1789591313429.jpg';
import dakarImg from '../assets/images/alrehab_dakar_1789591323888.jpg';
import redRoseImg from '../assets/images/alrehab_red_rose_1789591336269.jpg';
import khalijiImg from '../assets/images/alrehab_khaliji_1789591350537.jpg';
import lovelyImg from '../assets/images/alrehab_lovely_box_1789674503850.jpg';
import aseelImg from '../assets/images/alrehab_aseel_bottle_1789591752275.jpg';
import saatSafaImg from '../assets/images/alrehab_saat_safa_bottle_1789591763601.jpg';
import championImg from '../assets/images/alrehab_champion_bottle_1789591773752.jpg';
import zidanImg from '../assets/images/alrehab_zidan_bottle_1789591784911.jpg';
import classicImg from '../assets/images/alrehab_classic_bottle_1789591796003.jpg';
import distanceImg from '../assets/images/alrehab_distance_magenta_1789674779007.jpg';
import narjisImg from '../assets/images/alrehab_narjis_box_1789674441102.jpg';
import dialaImg from '../assets/images/alrehab_diala_box_1789674490782.jpg';
import sabayaImg from '../assets/images/alrehab_sabaya_1789672277208.jpg';
import appleLoveImg from '../assets/images/alrehab_loveapple_box_1789674475481.jpg';
import lordImg from '../assets/images/alrehab_lord_blue_v2_1789675617012.jpg';
import ambassadorImg from '../assets/images/alrehab_ambassador_box_1789674533903.jpg';
import rashaImg from '../assets/images/alrehab_rasha_box_1789674515462.jpg';
import blackImg from '../assets/images/alrehab_black_1789673219693.jpg';
import goldenImg from '../assets/images/alrehab_golden_1789673232358.jpg';
import whiteImg from '../assets/images/alrehab_white_1789673245032.jpg';
import redMuskImg from '../assets/images/alrehab_red_musk_1789673255804.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'distance',
    name: 'Al Rehab Distance',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'Una creación oriental hipnótica y seductora de Al Rehab. Destaca por su elegante combinación de maderas preciosas, frutas exóticas maduras, ámbar dorado y un fondo limpio de almizcle aterciopelado.',
    topNotes: ['Frutas exóticas', 'Cítricos dulces'],
    heartNotes: ['Acorde floral oriental', 'Especias cálidas'],
    baseNotes: ['Ámbar dorado', 'Vainilla suave', 'Almizcle blanco'],
    image: distanceImg,
    popular: true
  },
  {
    id: 'narjis',
    name: 'Al Rehab Narjis',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Floral',
    gender: 'Dama',
    description: 'La pureza sublime de la flor de narciso silvestre (Narjis en árabe). Una fragancia floral luminosa, femenina y refrescante con rocío verde matinal, jazmín sambac y un suave lecho de almizcle.',
    topNotes: ['Flor de narciso', 'Rocío verde'],
    heartNotes: ['Jazmín sambac', 'Lirio blanco'],
    baseNotes: ['Almizcle blanco puro', 'Madera ligera'],
    image: narjisImg,
    popular: true
  },
  {
    id: 'diala',
    name: 'Al Rehab Diala',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Dama',
    description: 'Dulzura radiante y femenina inspirada en los vergeles árabes. Notas irresistibles de bayas dulces y frutas aterciopeladas con caramelo suave, flores exóticas y una base de ámbar y vainilla.',
    topNotes: ['Frutas silvestres', 'Mandarina dulce'],
    heartNotes: ['Flores blancas', 'Caramelo líquido'],
    baseNotes: ['Ámbar cálido', 'Vainilla bourbon', 'Almizcle sedoso'],
    image: dialaImg,
    popular: true
  },
  {
    id: 'sabaya',
    name: 'Al Rehab Sabaya',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Floral',
    gender: 'Dama',
    description: 'Uno de los perfumes femeninos insignia más aclamados de Al Rehab. Una armonía chispeante y romántica de rosas frescas de Taif, cítricos jugosos y notas verdes cristalinas con una estela dulce y atalcada.',
    topNotes: ['Cítricos espumosos', 'Notas verdes'],
    heartNotes: ['Rosa fresca de Taif', 'Peonía'],
    baseNotes: ['Almizcle blanco', 'Maderas sutiles'],
    image: sabayaImg,
    popular: true
  },
  {
    id: 'apple-love',
    name: 'Al Rehab Apple Love',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Gourmand',
    gender: 'Unisex',
    description: 'Un irresistible deleite aromático centrado en manzanas verdes frescas y crujientes con un sutil espolvoreado de canela dulce, caramelo dorado y una base cálida de vainilla y almizcle.',
    topNotes: ['Manzana verde crujiente', 'Cítricos frescos'],
    heartNotes: ['Canela dulce', 'Flor de manzano'],
    baseNotes: ['Vainilla cremosa', 'Caramelo', 'Almizcle blanco'],
    image: appleLoveImg,
    popular: true
  },
  {
    id: 'lord-blue',
    name: 'Al Rehab Lord Blue',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Amaderado',
    gender: 'Caballero',
    description: 'El legendario titán masculino de Al Rehab en su presentación azul y blanca. Salida fresca de bergamota y notas aromáticas ozónicas, corazón denso de cedro y pachulí terroso, con fondo noble de ámbar y resinas finas.',
    topNotes: ['Bergamota fresca', 'Hierbas aromáticas', 'Especias'],
    heartNotes: ['Pachulí terroso', 'Cedro noble'],
    baseNotes: ['Ámbar oriental', 'Almizcle oscuro', 'Resinas balsámicas'],
    image: lordImg,
    popular: true
  },
  {
    id: 'embassador',
    name: 'Al Rehab Embassador',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Amaderado',
    gender: 'Caballero',
    description: 'Un perfume de porte diplomático, distinción y carácter. Empaque prisma triangular azul noche con medallón dorado. Combina notas cítricas de bergamota con maderas nobles, lavanda fina y fondo persistente de sándalo y ámbar.',
    topNotes: ['Bergamota', 'Cardamomo verde'],
    heartNotes: ['Lavanda aromática', 'Maderas nobles'],
    baseNotes: ['Sándalo cremoso', 'Ámbar oriental', 'Pachulí'],
    image: ambassadorImg,
    popular: true
  },
  {
    id: 'rasha',
    name: 'Al Rehab Rasha',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Floral',
    gender: 'Dama',
    description: 'Cautivadora y dulce joya oriental femenina en caja carmesí con placa dorada. Delicioso acorde de durazno dulce y flores exquisitas con jazmín, rosa aterciopelada, vainilla bourbon y fondo de ámbar y pachulí.',
    topNotes: ['Durazno dulce jugoso', 'Frutas rojas'],
    heartNotes: ['Rosa aterciopelada', 'Jazmín sambac', 'Cilantro'],
    baseNotes: ['Vainilla bourbon', 'Ámbar cálido', 'Pachulí'],
    image: rashaImg,
    popular: true
  },
  {
    id: 'silver',
    name: 'Al Rehab Silver',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Unisex',
    description: 'Famoso por su perfil metálico y refrescante reminiscente del agua de manantial alpino. Notas nítidas de té verde, bergamota crujiente y grosellas negras sobre almizcle puro.',
    topNotes: ['Bergamota', 'Mandarina helada'],
    heartNotes: ['Té verde', 'Grosella negra'],
    baseNotes: ['Almizcle cristalino', 'Petit grain', 'Sándalo'],
    image: silverImg,
    popular: true
  },
  {
    id: 'choco-musk',
    name: 'Al Rehab Choco Musk',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Gourmand',
    gender: 'Unisex',
    description: 'El gourmand más viral y aclamado de Al Rehab. Una apertura irresistible de chocolate con leche cremosa envuelta en vainilla tibia, malvaviscos y suave almizcle blanco.',
    topNotes: ['Chocolate con leche', 'Canela dulce'],
    heartNotes: ['Vainilla de Madagascar', 'Malvavisco'],
    baseNotes: ['Almizcle blanco', 'Sándalo cremoso', 'Ámbar'],
    image: chocoMuskImg,
    popular: true
  },
  {
    id: 'french-coffee',
    name: 'Al Rehab French Coffee',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Gourmand',
    gender: 'Unisex',
    description: 'Una fragancia hiperrealista y envolvente a café recién tostado de cafetería parisina, con toques de leche condensada dulce, caramelo y canela fina.',
    topNotes: ['Café espresso tostado', 'Canela'],
    heartNotes: ['Leche condensada', 'Caramelo caliente'],
    baseNotes: ['Granos de cacao', 'Vainilla bourbon', 'Azúcar morena'],
    image: frenchCoffeeImg,
    popular: true
  },
  {
    id: 'soft',
    name: 'Al Rehab Soft',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Gourmand',
    gender: 'Dama',
    description: 'Dulce, cítrico y adictivo. Combina toques alegres de cáscara de naranja confitada con algodón de azúcar, orquídeas y un fondo cálido de vainilla caramelizada.',
    topNotes: ['Mandarina jugosa', 'Cítricos espumosos'],
    heartNotes: ['Caramelo', 'Algodón de azúcar', 'Orquídea'],
    baseNotes: ['Vainilla', 'Almizcle blanco', 'Notas amaderadas'],
    image: softImg,
    popular: true
  },
  {
    id: 'golden-sand',
    name: 'Al Rehab Golden Sand',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'Aroma de lujo árabe con acordes densos de caramelo dorado, miel silvestre, ámbar cálido y un fondo amaderado aterciopelado con extraordinaria fijación.',
    topNotes: ['Caramelo dorado', 'Miel de flores'],
    heartNotes: ['Vainilla dorada', 'Ámbar cálido'],
    baseNotes: ['Oud ligero', 'Almizcle sedoso', 'Maderas nobles'],
    image: goldenSandImg,
    popular: true
  },
  {
    id: 'sultan',
    name: 'Al Rehab Sultan',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Amaderado',
    gender: 'Caballero',
    description: 'Elegancia imperial masculina con presencia distinguida. Notas secas de cedro noble, bayas de enebro vigorizantes, bergamota fresca y toques de canela fina.',
    topNotes: ['Bergamota', 'Bayas de enebro', 'Cardamomo'],
    heartNotes: ['Canela', 'Cedro del Atlas'],
    baseNotes: ['Almizcle blanco', 'Sándalo', 'Vainilla suave'],
    image: sultanImg,
    popular: true
  },
  {
    id: 'white-musk',
    name: 'Al Rehab White Musk',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Musk',
    gender: 'Unisex',
    description: 'La máxima expresión de limpieza y pureza. Un almizcle blanco sedoso con un matiz atalcado, jazmín fresco y una sensación de frescura recién salida del baño que dura todo el día.',
    topNotes: ['Almizcle blanco puro', 'Aldehídos limpios'],
    heartNotes: ['Jazmín de primavera', 'Lirio blanco'],
    baseNotes: ['Almizcle sedoso', 'Madera de ámbar suave'],
    image: whiteMuskImg,
    popular: true
  },
  {
    id: 'red-rose',
    name: 'Al Rehab Red Rose',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Floral',
    gender: 'Dama',
    description: 'Una suntuosa y aterciopelada rosa roja de Taif, endulzada armoniosamente con vainilla suave, ámbar y un toque romántico de talco floral.',
    topNotes: ['Rosas rojas frescas', 'Pétalos de geranio'],
    heartNotes: ['Rosa de Taif', 'Vainilla delicada'],
    baseNotes: ['Ámbar dulce', 'Almizcle aterciopelado'],
    image: redRoseImg,
    popular: false
  },
  {
    id: 'dalal',
    name: 'Al Rehab Dalal',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Gourmand',
    gender: 'Unisex',
    description: 'Una obra de arte dulce y elegante. Caramelo derretido sobre cáscaras de naranja dulce y flores finas con una base persistente de sándalo noble.',
    topNotes: ['Naranja dulce', 'Mandarina'],
    heartNotes: ['Caramelo suave', 'Jazmín'],
    baseNotes: ['Sándalo', 'Vainilla bourbon'],
    image: dalalImg,
    popular: true
  },
  {
    id: 'avenue',
    name: 'Al Rehab Avenue',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Caballero',
    description: 'Un aroma distinguido, vigoroso y con alta proyección. Salida chispeante de piña madura y bergamota con corazón ahumado de abedul y pachulí.',
    topNotes: ['Piña jugosa', 'Bergamota italiana'],
    heartNotes: ['Abedul ahumado', 'Pachulí', 'Jazmín'],
    baseNotes: ['Musgo de roble', 'Ámbar gris', 'Almizcle'],
    image: avenueImg,
    popular: true
  },
  {
    id: 'khaliji',
    name: 'Al Rehab Khaliji',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Unisex',
    description: 'Inspirado en la brisa de los golfos árabes. Cítricos vibrantes combinados con hierba de limón aromática, toques marinos frescos y madera de sándalo.',
    topNotes: ['Limoncillo', 'Naranja amarga'],
    heartNotes: ['Notas acuáticas', 'Jengibre sutil'],
    baseNotes: ['Sándalo cremoso', 'Ámbar blanco'],
    image: khalijiImg,
    popular: false
  },
  {
    id: 'golden',
    name: 'Al Rehab Golden',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'Resinas preciosas orientales con vainilla espesa, ámbar dorado y flores exóticas. Una fragancia que evoca los zocos de lujo del Medio Oriente.',
    topNotes: ['Ámbar dorado', 'Flores exóticas'],
    heartNotes: ['Vainilla dulce', 'Caramelo'],
    baseNotes: ['Oud refinado', 'Almizcle'],
    image: goldenImg,
    popular: false
  },
  {
    id: 'black',
    name: 'Al Rehab Black',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Amaderado',
    gender: 'Caballero',
    description: 'Misterioso, sobrio y magnético. Combina acordes de cuero fino, especias nocturnas, maderas oscuras y un fondo terroso de vetiver y pachulí.',
    topNotes: ['Especias oscuras', 'Pimienta negra'],
    heartNotes: ['Cuero fino', 'Pachulí'],
    baseNotes: ['Vetiver ahumado', 'Maderas nobles'],
    image: blackImg,
    popular: false
  },
  {
    id: 'lovely',
    name: 'Al Rehab Lovely',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Floral',
    gender: 'Dama',
    description: 'Juvenil, alegre y luminoso. Un ramo de flores blancas bañadas por rocío matinal con toques de mandarinas dulces y almizcle limpio y ligero.',
    topNotes: ['Mandarina', 'Flores silvestres'],
    heartNotes: ['Magnolia', 'Azucena'],
    baseNotes: ['Almizcle suave', 'Maderas blancas'],
    image: lovelyImg,
    popular: false
  },
  {
    id: 'red-musk',
    name: 'Al Rehab Red Musk',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Musk',
    gender: 'Unisex',
    description: 'Un almizcle rojo seductor y especiado. Destaca por su mezcla de canela cálida, pimienta dulce, rosas carmesí y un fondo resinoso profundo.',
    topNotes: ['Canela', 'Pimienta rosa'],
    heartNotes: ['Rosas rojas', 'Almizcle rojo'],
    baseNotes: ['Tabaco dulce', 'Ámbar resinoso'],
    image: redMuskImg,
    popular: false
  },
  {
    id: 'white',
    name: 'Al Rehab White (Blanc)',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Unisex',
    description: 'Frescura cítrica y herbal ultra limpia. Menta fresca picada con lima persa, cardamomo aromático y fondo de cedro claro y almizcle puro.',
    topNotes: ['Lima persa', 'Menta fresca'],
    heartNotes: ['Cardamomo verde', 'Flor de azahar'],
    baseNotes: ['Cedro blanco', 'Almizcle limpio'],
    image: whiteImg,
    popular: false
  },
  {
    id: 'classic',
    name: 'Al Rehab Classic',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'La tradición árabe concentrada. Nuez moscada, cilantro tostado, resinas orientales y maderas exóticas con una proyección cálida insuperable.',
    topNotes: ['Nuez moscada', 'Cilantro'],
    heartNotes: ['Ámbar dulce', 'Maderas orientales'],
    baseNotes: ['Vainilla especiada', 'Almizcle'],
    image: classicImg,
    popular: false
  },
  {
    id: 'dakar',
    name: 'Al Rehab Dakar',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Amaderado',
    gender: 'Caballero',
    description: 'Un clásico fougère aromático y varonil. Notas verdes intensas de salvia esclarea, musgo de roble, maderas nobles y un toque de lavanda fina.',
    topNotes: ['Salvia', 'Lavanda francesa'],
    heartNotes: ['Musgo de roble', 'Cedro aromático'],
    baseNotes: ['Cuero suave', 'Sándalo', 'Ámbar'],
    image: dakarImg,
    popular: true
  },
  {
    id: 'champion',
    name: 'Al Rehab Champion',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Caballero',
    description: 'Enérgico, dinámico y refrescante. Combina bergamota italiana con notas acuáticas ozónicas, cedro fresco y almizcle deportivo duradero.',
    topNotes: ['Bergamota', 'Limón'],
    heartNotes: ['Acorde acuático', 'Menta fresca'],
    baseNotes: ['Cedro', 'Ámbar gris', 'Almizcle'],
    image: championImg,
    popular: false
  },
  {
    id: 'saat-safa',
    name: 'Al Rehab Saat Safa',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'El clásico perfume oriental de rosas y oud amaderado. Rosa de Damasco opulenta entrelazada con oud tradicional, jazmín silvestre y musgo.',
    topNotes: ['Rosa de Damasco', 'Azafrán'],
    heartNotes: ['Oud árabe tradicional', 'Pachulí'],
    baseNotes: ['Ámbar oscuro', 'Musgo de roble'],
    image: saatSafaImg,
    popular: false
  },
  {
    id: 'aseel',
    name: 'Al Rehab Aseel',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Oriental',
    gender: 'Unisex',
    description: 'Autenticidad árabe en su estado puro. Una armonía de rosas rojas con azafrán persa, madera de agar oud y sándalo balsámico.',
    topNotes: ['Azafrán', 'Rosa oriental'],
    heartNotes: ['Madera de agar (Oud)', 'Sándalo'],
    baseNotes: ['Vainilla suave', 'Caramelo ligero'],
    image: aseelImg,
    popular: false
  },
  {
    id: 'zidan',
    name: 'Al Rehab Zidan',
    brand: 'Al Rehab',
    presentation: '5 ml',
    price: 180,
    category: 'Fresco',
    gender: 'Caballero',
    description: 'Chispeante y sofisticado. Ralladura fresca de mandarina y ruibarbo crujiente con pimienta suave, té y un lecho de ámbar y vainilla.',
    topNotes: ['Mandarina', 'Ruibarbo'],
    heartNotes: ['Té negro', 'Coriandro'],
    baseNotes: ['Vainilla', 'Ámbar', 'Cedro'],
    image: zidanImg,
    popular: false
  }
];

export const BUSINESS_CONFIG = {
  name: 'MARRMEX Perfumes Árabes',
  tagline: 'Perfumes Árabes Originales en México',
  brand: 'Al Rehab',
  phone: '522213276563', // WhatsApp directo
  displayPhone: '+52 221 327 6563',
  email: 'contacto@marrmexperfumes.mx',
  address: 'Centro, Huajuapan de León, Oaxaca, México',
  facebookUrl: 'https://www.facebook.com/share/1Fb4fnU4BE/',
  freeShippingThreshold: 1500,
  singlePrice: 180
};
