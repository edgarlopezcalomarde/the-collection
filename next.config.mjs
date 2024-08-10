/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: "/",
                destination: "/catalog",
                permanent: true
            },

        ]
    }

};

export default nextConfig;
