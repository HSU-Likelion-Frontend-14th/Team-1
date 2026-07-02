// 실제 주문 API 호출을 흉내내는 함수
export function submitOrder(cartItems) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cartItems.length === 0) {
        reject(new Error('장바구니가 비어 있어요.'))
        return
      }
      resolve({ success: true, orderedAt: new Date().toISOString() })
    }, 500)
  })
}
