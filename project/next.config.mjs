import createMDX from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  transpilePackages: ["@splinetool/react-spline", "@splinetool/runtime"],
  webpack: (config, { isServer }) => {
    // Fix @splinetool/react-spline package exports issue (missing "default" in exports field)
    config.resolve.alias["@splinetool/react-spline"] = path.resolve(
      __dirname,
      "node_modules/@splinetool/react-spline/dist/react-spline.js"
    );
    return config;
  },
};

export default withMDX(nextConfig);
