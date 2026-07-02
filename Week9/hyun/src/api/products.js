import products from '../data/products'

// 실제 서버 호출을 흉내내기 위한 지연
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 300)
  })
}
