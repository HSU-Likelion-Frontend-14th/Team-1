import { useCategoryStore } from '../store/useCategoryStore'

const CATEGORIES = ['전체', '전자기기', '도서', '문구류']

function CategoryFilter() {
  const selected = useCategoryStore((state) => state.selectedCategory)
  const setSelectedCategory = useCategoryStore((state) => state.setSelectedCategory)

  return (
    <div className="category-filter">
      {CATEGORIES.map((category) => (
        <button
          key={category}
          className={selected === category ? 'active' : ''}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
