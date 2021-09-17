import Head from "next/head"
import { useRouter } from "next/router"
import NextImage from "@/components/Image"
import { getProducts, getProduct, fetchAPI } from "@/utils/api"
import Disclaimer from "@/components/Disclaimer"

const ProductPage = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product?.title} product</title>
      </Head>
      <div className="rounded-t-lg pt-2 pb-2 m-auto h-80 w-80">
        {
          product && product.images && product.images.length > 0 && <NextImage media={product?.images[0]} />

        }
        {/* <img {...product.images[0]} /> */}
      </div>
      <div className="w-full p-5 flex flex-col justify-between gap-3">
        <div>
          <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {product?.title} - ₱{product?.price}
          </h4>
          <div className="mt-1 text-gray-600">{product?.description}</div>
        </div>
        <div className="text-gray-600 text-sm md:text-base leading-tight">
          <p className="font-semibold">Contact Us</p>
          <div>
            <span>Mobile: </span>
            <span>0926-0995188</span>
          </div>
          <div>
            <span>Landline: </span>
            <span>8801-6349, </span>
            <span>8806-8723, </span>
            <span>8805-5927</span>
          </div>
        </div>
        <Disclaimer />
      </div>
    </div>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  // const product = await getProduct(params.productHandle)
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/products?handle=${params.productHandle}`)
  const product = await response.json()
  return { props: { product } }
}

export async function getStaticPaths() {
  // const products = await getProducts()
  const response = await fetch(`https://staffstore-backend-demo.herokuapp.com/products`)
  const products = await response.json()

  const paths = products?.map(({ handle, category }) => {
      return {
        params: { categorySlug: category.slug, productHandle: handle },
      }
    })
  return {
    paths,
    fallback: 'blocking',
  }
}
