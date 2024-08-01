/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-website",
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pallob-portfolio.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

export default nextConfig;
