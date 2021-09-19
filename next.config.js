// next.config.js
module.exports = {
  images: {
    domains: ['i.ibb.co', 'via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: "https://staffstore-backend-demo.herokuapp.com"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }

}
