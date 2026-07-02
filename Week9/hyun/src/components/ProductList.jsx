import { useCallback, useMemo } from 'react'
import ProductCard from './ProductCard'
import { useProducts } from '../hooks/useProducts'
import { useCategoryStore } from '../store/useCategoryStore'
import { useCartStore } from '../store/useCartStore'

function ProductList() {
  const { data: products = [], isLoading, isError } = useProducts()
  const selectedCategory = useCategoryStore((state) => state.selectedCategory)
  const addToCart = useCartStore((state) => state.addToCart)

  const filteredProducts = useMemo(
    () =>
      selectedCategory === '전체'
        ? products
        : products.filter((product) => product.category === selectedCategory),
    [products, selectedCategory],
  )

  // 안정적인 참조를 유지해서 cart 수량이 바뀌어도 ProductCard가 리렌더링되지 않도록 함
  const handleAddToCart = useCallback(
    (productId) => {
      addToCart(productId)
    },
    [addToCart],
  )

  if (isLoading) {
    return <p className="empty">상품을 불러오는 중이에요...</p>
  }

  if (isError) {
    return <p className="empty">상품을 불러오지 못했어요.</p>
  }

  if (filteredProducts.length === 0) {
    return <p className="empty">해당 카테고리에 상품이 없어요.</p>
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  )
}

export default ProductList
