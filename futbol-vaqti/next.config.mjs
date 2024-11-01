/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    DB_URI: "mongodb://127.0.0.1:27017/football_time",
    API: "http://localhost:3000/api",
    NEXTAUTH_SECRET: "OQEBFI4378NFEJKR8349HBFJND8394CDKN393R2NKDE"
  },
};

export default nextConfig;
