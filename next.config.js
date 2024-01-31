/** @type {import('next').NextConfig} */
const withNextIntl = require("next-intl/plugin")();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/user/register", // Path used in your Next.js app
        destination: "https://www.gokamind.com/MedusaTurApi/register" // External API endpoint
      },
      {
        source: "/api/user/login", // Path used in your Next.js app
        destination: "https://www.gokamind.com/MedusaTurApi/login" // External API endpoint
      },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
