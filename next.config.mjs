/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.tsx");

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'instant-storage.s3.amazonaws.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);
