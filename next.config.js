/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/frontend-mentor-challenges/"
      : undefined,
};

module.exports = nextConfig;
