/**
 * @type {import('next').NextConfig}
 */
/*
const devConfig = {
  rewrites: async () => [
    {
      source: "/api/:path(.*)",
      destination: `${
        process.env.SERVER_BASE_URL || "http://localhost:8080"
      }/api/:path`,
    },
  ],
};
*/
const devConfig = {
  rewrites: async () => [
    {
      source: "/api/:path*",  // 通配符匹配所有子路径
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`, // 直接使用环境变量
    },
  ],
};

/**
 * @type {import('next').NextConfig}
 */
const prodConfig = {
  output: "export", // we're generating static files, since we don't have a node server
  images: {
    unoptimized: true, // required by export
  },
};


module.exports =
  process.env.NODE_ENV === "development" ? devConfig : prodConfig;
