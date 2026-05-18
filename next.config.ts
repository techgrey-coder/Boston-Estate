import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "192.168.0.*",
    "192.168.1.*",
    "192.168.69.*",
    "192.168.203.199",
    "192.168.249.199",
    "192.168.249.199",
     "192.168.229.199",
    "192.168.229.*",
    "192.168.*.*",

    "10.*.*.*",
    "localhost",
  ],

};
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
