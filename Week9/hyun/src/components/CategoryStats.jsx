import { useMemo } from 'react'
import { useCartStore } from '../store/useCartStore'
import { useProducts } from '../hooks/useProducts'

function CategoryStats() {
  const cart = useCartStore((state) => state.cart)
  const { data: products = [] } = useProducts()

  const categoryTotals = useMemo(() => {
    const totals = {}
    cart.forEach((item) => {
      const product = products.find((p) => p.id === item.id)
      if (!product) return
      const subtotal = product.price * item.quantity
      totals[product.category] = (totals[product.category] ?? 0) + subtotal
    })
    return totals
  }, [cart, products])

  const entries = Object.entries(categoryTotals)

  if (entries.length === 0) {
    return null
  }

  return (
    <div className="category-stats">
      <h3>카테고리별 합계</h3>
      <ul>
        {entries.map(([category, total]) => (
          <li key={category}>
            <span>{category}</span>
            <strong>{total.toLocaleString()}원</strong>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryStats
