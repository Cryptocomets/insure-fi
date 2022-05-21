/**
 * Next Config
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: false,
  swcMinify: false,
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
    localeDetection: true
  },
  images: {
    domains: []
  }
};

module.exports = nextConfig;
