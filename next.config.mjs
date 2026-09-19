/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // Modern formats first — Next serves these to browsers that support them,
    // which is one of the cheapest LCP wins available.
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        // Case studies now live at /work. Permanent (308) so search engines
        // transfer ranking from the old URL instead of treating it as new.
        source: '/projects',
        destination: '/work',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
