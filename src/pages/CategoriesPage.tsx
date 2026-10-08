import { useCategories } from "@/features/categories"

function CategoriesPage() {
  const { data, isPending, isError, error } = useCategories()

  if (isPending) {
    return <p>Loading categories...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

return (
    <>
      <h2>Categories Page</h2>
      {data && data.map((category) => (
        <p key={category.id}>
          {category.name}
        </p>
      ))}
    </>
  )
}

export default CategoriesPage