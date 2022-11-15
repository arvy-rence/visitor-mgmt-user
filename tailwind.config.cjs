const config = {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            colors: {
                'primary': '#00104A',
                'secondary': '#E10909',
                'tertiary': '#000D3E',
            },
            fontFamily: {
                'kulim': ['Kulim Park', 'sans-serif'],
                'khula': ['Khula', 'sans-serif'],
            }
        },
    },

    plugins: [],
};

module.exports = config;
