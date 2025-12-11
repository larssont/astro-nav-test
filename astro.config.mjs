import { defineConfig } from "astro/config";
import node from "@astrojs/node";

export default defineConfig({
    output: "static",
    site: 'https://larssont.github.io',
    base: "/astro-nav-test",
    adapter: node({
        mode: "standalone",
    }),
    server: {
        host: "0.0.0.0",
    },
    build: {
        format: "directory",
    },
    devToolbar: {
        enabled: false,
    },
    prefetch: {
        defaultStrategy: "viewport",
        prefetchAll: true,
    },
});
