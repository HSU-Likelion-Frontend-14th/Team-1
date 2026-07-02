import './App.css'
import Header from './components/Header'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import CartPanel from './components/CartPanel'

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <main className="app__main">
          <CategoryFilter />
          <ProductList />
        </main>

        <CartPanel />
      </div>
    </div>
  )
}

export default App
