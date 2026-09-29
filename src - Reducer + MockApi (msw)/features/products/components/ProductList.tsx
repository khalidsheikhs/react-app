import type { Product } from '../types'
import Button from '../../../components/ui/Button'

type ProductListProps = {
  products: Product[]
}

function ProductList({ products }: ProductListProps) {
  return (
    <div>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <Button onClick={() => console.log(product.id)}>
            View Product
          </Button>
        </div>
      ))}
    </div>
  )
}

export default UserList