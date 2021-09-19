import Head from "next/head"
import { useRouter } from "next/router"
import ProductsList from "@/components/ProductsList"
import { fetchAPI, getCategories, getCategory } from "@/utils/api"

const CategoryPage = ({ category }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading category...</div>
  }

  return (
    <div>
      <Head>
        <title>{category.name} products</title>
      </Head>

      <ProductsList products={category.products} />
      
    </div>
  )
}

export default CategoryPage

export async function getStaticProps({ params }) {
  const category = await getCategory(params.categorySlug)
  // const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories?slug=${params.categorySlug}`)
  // const category = await response.json()
  return { props: { category } }
}

export async function getStaticPaths() {
  const categories = await getCategories()
  
  // const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/categories`)
  // const categories = await response.json()


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
