module.exports = {
    webpack(config) {
        config.module.rules.push({
            // test: /\/assets\/Footer\/icons\/.*\.svg$/,
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};