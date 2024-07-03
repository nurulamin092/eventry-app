/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         pathname: 'ibb.co'
        //     }
        // ]

        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
        ],
    }
};

export default nextConfig;
