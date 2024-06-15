/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
    return [
      {
        source: "/",
        destination: "/invoices",
        permanent: true,
      },
    //   {
    //     source: "/manage",
    //     destination: "/manage/flashcards",
    //     permanent: false,
    //   },
    ];
  },
};

export default nextConfig;
