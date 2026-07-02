import { useMemo } from 'react'
import { useMutation } from '@tanstack/react-query'
import CartItem from './CartItem'
import CategoryStats from './CategoryStats'
import { useCartStore } from '../store/useCartStore'
import { useProducts } from '../hooks/useProducts'
import { submitOrder } from '../api/order'

function CartPanel() {
  const cart = useCartStore((state) => state.cart)
  const increase = useCartStore((state) => state.increase)
  const decrease = useCartStore((state) => state.decrease)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)
  const { data: products = [] } = useProducts()

  const cartItems = useMemo(
    () =>
      cart.map((item) => {
        const product = products.find((p) => p.id === item.id)
        return { ...product, quantity: item.quantity }
      }),
    [cart, products],
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  const orderMutation = useMutation({
    mutationFn: submitOrder,
    onSuccess: () => clearCart(),
  })

  const handleCheckout = () => {
    orderMutation.mutate(cartItems)
  }

  return (
    <aside className="cart-panel">
      <h2>장바구니</h2>

      {cartItems.length === 0 ? (
        <p className="empty">장바구니가 비어 있어요.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onIncrease={increase}
              onDecrease={decrease}
              onRemove={removeFromCart}
            />
          ))}
        </ul>
      )}

      <CategoryStats />

      <div className="cart-panel__total">
        <span>총 합계</span>
        <strong>{totalPrice.toLocaleString()}원</strong>
      </div>

      {orderMutation.isSuccess && <p className="order-success">주문이 완료됐어요!</p>}
      {orderMutation.isError && <p className="order-error">주문에 실패했어요.</p>}

      <button
        className="checkout-btn"
        disabled={cartItems.length === 0 || orderMutation.isPending}
        onClick={handleCheckout}
      >
        {orderMutation.isPending ? '주문 중...' : '주문하기'}
      </button>
    </aside>
  )
}

export default CartPanel
