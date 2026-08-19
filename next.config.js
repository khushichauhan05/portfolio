/** @type {import('next').NextConfig} */

module.exports = {
  output: "export",
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.shields.io",
      },
    ],
  },
};
