import React, { useState, useMemo, forwardRef } from 'react';
import { Search, SlidersHorizontal, Sparkles, X, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductCatalogProps {
  onOpenDetails: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const ProductCatalog = forwardRef<HTMLDivElement, ProductCatalogProps>(
  ({ onOpenDetails, searchQuery, setSearchQuery }, ref) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedGender, setSelectedGender] = useState<string>('all');
    const [sortBy, setSortBy] = useState<'popular' | 'name-asc' | 'price-asc'>('popular');

    const categories = [
      { id: 'all', label: 'Todas las notas' },
      { id: 'Gourmand', label: 'Gourmand (Dulces)' },
      { id: 'Fresco', label: 'Cítricos & Frescos' },
      { id: 'Oriental', label: 'Orientales & Especiados' },
      { id: 'Amaderado', label: 'Amaderados & Cedro' },
      { id: 'Floral', label: 'Florales & Rosas' },
      { id: 'Musk', label: 'Almizcle & Limpio' },
    ];

    const genders = [
      { id: 'all', label: 'Todos' },
      { id: 'Unisex', label: 'Unisex' },
      { id: 'Caballero', label: 'Caballero' },
      { id: 'Dama', label: 'Dama' },
    ];

    const filteredProducts = useMemo(() => {
      let result = [...PRODUCTS];

      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        result = result.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.topNotes.some((n) => n.toLowerCase().includes(q)) ||
            p.heartNotes.some((n) => n.toLowerCase().includes(q)) ||
            p.baseNotes.some((n) => n.toLowerCase().includes(q))
        );
      }

      // Category filter
      if (selectedCategory !== 'all') {
        result = result.filter((p) => p.category === selectedCategory);
      }

      // Gender filter
      if (selectedGender !== 'all') {
        result = result.filter((p) => p.gender === selectedGender);
      }

      // Sort
      if (sortBy === 'popular') {
        result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
      } else if (sortBy === 'name-asc') {
        result.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
      }

      return result;
    }, [searchQuery, selectedCategory, selectedGender, sortBy]);

    const hasActiveFilters =
      selectedCategory !== 'all' || selectedGender !== 'all' || searchQuery.trim() !== '';

    const resetFilters = () => {
      setSelectedCategory('all');
      setSelectedGender('all');
      setSearchQuery('');
      setSortBy('popular');
    };

    return (
      <section id="catalogo" ref={ref} className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#0d140f] border border-emerald-500/40 text-[#fceda7] mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Colección Completa Al Rehab</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl text-white tracking-tight mb-3">
            Catálogo de Perfumes Árabes (5 ml)
          </h2>
          <p className="text-sm sm:text-base text-[#cbd5e1] leading-relaxed">
            Explora nuestros aceites de perfume concentrados originales. Todos con presentación práctica de <strong className="text-white">5 ml</strong> a precio uniforme de <strong className="text-emerald-400">$180 MXN</strong>.
          </p>
        </div>

        {/* Controls Bar: Search, Fixed Metadata Filters, Category Chips, Sort */}
        <div className="bg-[#0d130f] rounded-2xl border border-[#1b261e] p-4 sm:p-6 mb-8 shadow-xl">
          {/* Search bar */}
          <div className="relative mb-5">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              id="catalog-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar perfume Al Rehab por nombre o notas (ej. Choco Musk, vainilla, cedro)..."
              className="w-full pl-11 pr-10 py-3 bg-[#121914] border border-[#223326] focus:border-[#d4af37] rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#d4af37] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Fixed Attributes Chips Bar (Requirements: Marca Al Rehab, Presentación 5 ml, Precio $180 MXN) */}
          <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-[#1b261e] text-xs">
            <span className="text-gray-300 font-medium flex items-center gap-1.5 mr-1">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#d4af37]" />
              Atributos de la colección:
            </span>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#131b15] border border-[#d4af37]/40 text-[#fceda7] font-semibold">
              <Check className="w-3 h-3 text-[#d4af37]" />
              <span>Marca: <strong className="text-white">Al Rehab</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#131b15] border border-[#d4af37]/40 text-[#fceda7] font-semibold">
              <Check className="w-3 h-3 text-[#d4af37]" />
              <span>Presentación: <strong className="text-white">5 ml</strong></span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#131b15] border border-[#d4af37]/40 text-[#fceda7] font-semibold">
              <Check className="w-3 h-3 text-[#d4af37]" />
              <span>Precio: <strong className="text-white">$180 MXN c/u</strong></span>
            </div>
          </div>

          {/* Dynamic Filters & Sort row */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Scrollable Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white font-bold shadow-md shadow-emerald-950/40 border border-emerald-400'
                      : 'bg-[#111713] text-[#cbd5e1] hover:text-white hover:bg-[#162019] border border-[#1e2a21]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sorter & Gender Filter */}
            <div className="flex items-center gap-2.5 flex-wrap sm:flex-nowrap">
              {/* Gender selector */}
              <div className="flex items-center bg-[#111713] rounded-lg border border-[#1e2a21] p-0.5 text-xs">
                {genders.map((g) => (
                  <button
                    key={g.id}
                    onClick={() => setSelectedGender(g.id)}
                    className={`px-2.5 py-1 rounded-md transition-colors ${
                      selectedGender === g.id
                        ? 'bg-[#064e3b] text-[#fceda7] font-bold border border-emerald-500/40'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {g.label}
                  </button>
                ))}
              </div>

              {/* Order selector */}
              <div className="flex items-center gap-1.5 text-xs">
                <span className="text-gray-300 hidden sm:inline">Ordenar:</span>
                <select
                  id="catalog-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#111713] border border-[#1e2a21] text-xs text-white rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-[#d4af37] cursor-pointer"
                >
                  <option value="popular">Más populares</option>
                  <option value="name-asc">Nombre (A - Z)</option>
                  <option value="price-asc">Precio ($180 MXN)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Indicators */}
          {hasActiveFilters && (
            <div className="mt-4 pt-3 border-t border-[#1b261e] flex items-center justify-between text-xs text-gray-300">
              <span>
                Mostrando <strong className="text-white">{filteredProducts.length}</strong> de <strong className="text-white">{PRODUCTS.length}</strong> perfumes
              </span>
              <button
                onClick={resetFilters}
                className="text-[#fceda7] hover:text-white hover:underline flex items-center gap-1 font-bold"
              >
                <X className="w-3.5 h-3.5" />
                Limpiar filtros
              </button>
            </div>
          )}
        </div>

        {/* Products Grid: 2 columns on mobile, 3 on md, 4 on lg/xl */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={onOpenDetails}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0d130f] border border-[#1b261e]">
            <div className="w-14 h-14 rounded-full bg-[#111713] flex items-center justify-center mx-auto text-gray-400 mb-4 border border-[#223326]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              No se encontraron perfumes
            </h3>
            <p className="text-sm text-gray-400 max-w-md mx-auto mb-6">
              No hay fragancias que coincidan con &ldquo;{searchQuery}&rdquo;. Intenta con otro término o restablece los filtros.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#aa771c] text-black font-extrabold text-xs hover:brightness-110 transition-all shadow-md"
            >
              Restablecer filtros
            </button>
          </div>
        )}
      </section>
    );
  }
);

ProductCatalog.displayName = 'ProductCatalog';
