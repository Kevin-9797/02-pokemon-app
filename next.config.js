/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:['raw.githubusercontent.com'] //aqui declaramos las url de las imagenes que next va a permitir
  }
}

module.exports = nextConfig
