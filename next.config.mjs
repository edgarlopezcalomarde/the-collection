/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.externals.push("@node-rs/argon2", "@node-rs/bcrypt");
        return config;
    },
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
