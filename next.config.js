/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,

  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests'
          }
        ]
      }
    ]
  },

  api: {
    bodyParser: {
      sizeLimit: '8mb'
    },
    responseLimit: false
  },

  experimental: {
    serverComponentsExternalPackages: ['sharp']
  },

  // Update the API config to use the new format
  serverRuntimeConfig: {
    // Will only be available on the server side
    bodyParser: {
      sizeLimit: '4mb'
    }
  },

  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },

  images: {
    domains: ["example.s3.us-west-2.amazonaws.com" ,"https://tarkhineh-chi.vercel.app"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    removeConsole: false,
    styledComponents: true,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }


 


    return config;
  },
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots",
      },
    ];
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disableDevLogs: false,
  },
});

module.exports = nextConfig;
