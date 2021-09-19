import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "@/components/ProductsList"
import { fetchAPI, getCategories, getCategory } from "@/utils/api"
import { Meta } from "@/components/Meta"

const CategoryPage = ({ category }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Meta title={`Cofta Monobloc Furniture`} />

      <ProductsList products={category.products} />
      
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category = await getCategory(params.categorySlug)
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  const paths = categories?.map((_category) => {
      return {
        params: { categorySlug: _category.slug },
      }
    })
  return {
    paths,
    fallback: true,
  }
}
