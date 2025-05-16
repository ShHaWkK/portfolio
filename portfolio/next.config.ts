/** next.config.ts */
import { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,    // <— permet à Next de reconnaître src/app/
  },
}

export default nextConfig
