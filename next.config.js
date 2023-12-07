/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.amazonaws.com", "www.google.com", "planomasjid.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        pathname: "/images.masjid.net/**",
      },
    ],
  },
};

module.exports = nextConfig;
