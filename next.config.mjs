/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.tsx");

const nextConfig = {};

export default withNextIntl(nextConfig);
