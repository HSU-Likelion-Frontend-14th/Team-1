import { useMemo } from 'react'
import { useCartStore } from '../store/useCartStore'
import { useProducts } from '../hooks/useProducts'

function Header() {
  const cart = useCartStore((state) => state.cart)
  const { data: products = [] } = useProducts()

  const totalCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.id)
        return sum + (product?.price ?? 0) * item.quantity
      }, 0),
    [cart, products],
  )

  return (
    <header className="header">
      <h1>🦁 한성 멋사 14기 🦁</h1>
      <div className="header__summary">
        <span>담긴 상품 {totalCount}개</span>
        <span>{totalPrice.toLocaleString()}원</span>
      </div>
    </header>
  )
}

export default Header
