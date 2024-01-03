/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: {
      protocol: "https",
      hostname: "npius.dev",
      port: "",
      pathname: "/**",
    },
  },
};

module.exports = nextConfig;
