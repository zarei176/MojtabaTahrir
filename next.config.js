/** @type {import('next').NextConfig} */
const nextConfig = {
  // For GitHub Pages deployment
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://zarei176.github.io/MojtabaTahrir' 
    : '',
  basePath: process.env.NODE_ENV === 'production' 
    ? '/MojtabaTahrir' 
    : '',

  // Experimental features
  experimental: {
    // Enable modern features
  },

  // Environment variables
  env: {
    CUSTOM_KEY: 'value',
  },

  // Redirects and rewrites
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig