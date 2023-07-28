/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://dbofury.github.io/frontend-mentor-challenges/"
      : undefined,
};

module.exports = nextConfig;
