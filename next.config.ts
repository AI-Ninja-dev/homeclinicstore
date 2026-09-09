import type {NextConfig} from 'next';
const nextConfig:NextConfig={output:'export',images:{unoptimized:true},outputFileTracingRoot:process.cwd(),distDir:process.env.NODE_ENV==='development'?'.next-dev':'.next'};
export default nextConfig;
