import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here - Здесь можно будет включать SSR, ISR, basePath и т.п. */
  sassOptions: {
    additionalData: `@use '@/shared/styles/helpers' as *;`,
  },

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@entities': path.resolve(__dirname, 'src/entities'),
    }

    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(__dirname, 'src/shared/assets/icons'),
      use: [
        {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: '[name]',
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      exclude: path.resolve(__dirname, 'src/shared/assets/icons'),
      use: [{ loader: '@svgr/webpack' }],
    })

    return config
  },
}

export default nextConfig
