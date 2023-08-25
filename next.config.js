/** @type {import('next').NextConfig} */

const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";

const nextConfig = {
    experimental:{
        appDir: true
    },
    reactStrictMode: true,
    assetPrefix: branchName,
    basePath: branchName
}

export default nextConfig;
