import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {  
      

     remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
          port: '',
           pathname: '/**'
        },
      ],

      formats: ['image/avif', 'image/webp',],
      minimumCacheTTL: 60, // 1 minute cache for images
    },
};


export default nextConfig;
