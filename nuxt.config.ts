// https://nuxt.com/docs/api/configuration/nuxt-config

console.log('🔥 Current NODE_ENV is:', process.env.NODE_ENV)
import { posts } from './app/data/blogPosts';
import { sloganDataSource } from './app/utils/sloganDataSource';

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gtag',
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
    ],
    site: {
        url: 'https://mktgrowkit.com',
    },
    sitemap: {
        defaults: {
            changefreq: 'daily',
            priority: 1,
        },
        urls: () => {
            const postRoutes = posts.map((post) => {
                return {
                    loc: `/blog/${post.slug}`,
                    lastmod: post.date,
                    changefreq: 'weekly',
                    priority: 0.8,
                }
            });

            const nicheRoutes = Object.keys(sloganDataSource.niches)
                .map(slug => ({
                    loc: `/slogan-generator/${slug}`,
                    lastmod: new Date(),
                    changefreq: 'monthly',
                    priority: 0.8
                }));

            return [...postRoutes, ...nicheRoutes];
        },
    },
    css: [
        '~/assets/css/main.css',
        '~/assets/css/fonts.css',
    ],
    app: {
        head: {
            title: 'mktgrowkit - Free ROAS, AOV & CPM Calculators for E-commerce',
            htmlAttrs: {
                lang: 'en',
                class: 'scroll-smooth'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                { rel: 'icon', type: 'image/png', href: 'https://placehold.co/32x32/0f172a/f1f5f9?text=M' },
            ],
            bodyAttrs: {
                class: 'bg-slate-100 text-slate-800 antialiased'
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },

                {
                    hid: 'description',
                    name: 'description',
                    content: 'The essential toolkit for e-commerce owners & DTC brands. Calculate ROAS, AOV, CPM, and get the data you need to boost profit and grow smarter.'
                },
                { property: 'og:type', content: 'website' },
                { property: 'og:url', content: 'https://mktgrowkit.com/' },
                { property: 'og:title', content: 'mktgrowkit - Free ROAS, AOV & CPM Calculators for E-commerce' },
                {
                    property: 'og:description',
                    content: 'The essential toolkit for e-commerce owners & DTC brands. Calculate ROAS, AOV, CPM, and get the data you need to boost profit and grow smarter.'
                },

                { property: 'og:image', content: 'https://mktgrowkit.com/og-image.png' },
                { property: 'og:site_name', content: 'mktgrowkit' },
                { property: 'og:locale', content: 'en_US' },

                // --- Twitter Card ---
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:url', content: 'https://mktgrowkit.com/' },
                { name: 'twitter:title', content: 'mktgrowkit - Free ROAS, AOV & CPM Calculators for E-commerce' },
                {
                    name: 'twitter:description',
                    content: 'The essential toolkit for e-commerce owners & DTC brands. Calculate ROAS, AOV, CPM, and get the data you need to boost profit and grow smarter.'
                },
                { name: 'twitter:image', content: 'https://mktgrowkit.com/og-image.png' },
            ],
        }
    },
    runtimeConfig: {
        convertkitApiKey: '1HjCwqylLEiT45VTOMpeKQ',
        convertkitFormId: '8637689',
        supabaseUrl: 'https://gmbsepldvrldwohrsilc.supabase.co',
        supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtYnNlcGxkdnJsZHdvaHJzaWxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3NTIyOTIsImV4cCI6MjA3NTMyODI5Mn0.U8t9HwLfFqTWg0RcLjKXnLcsXQTimNGpdQ5UFGCUziQ',
        groqApiKey: process.env.GROQ_API_KEY,
        public: {
        }
    },
    gtag: {
        id: 'G-BTLSBPTXVS',
        enabled: process.env.NODE_ENV == 'production'
    },
    routeRules: {
        '/blog/master-roas-calculator-guide': { redirect: { to: '/blog/roas-calculator', statusCode: 301 } },
        '/blog/cpm-cpc-calculator-guide': { redirect: { to: '/blog/cpm-cpc-calculator', statusCode: 301 } },
        '/blog/boost-revenue-aov-calculator-guide': { redirect: { to: '/blog/aov-calculator', statusCode: 301 } },

        //
        '/blog/roas-calculator': { redirect: { to: '/blog/what-is-roas', statusCode: 301 } },
        '/blog/cpm-cpc-calculator': { redirect: { to: '/blog/cpm-vs-cpc', statusCode: 301 } },
        '/blog/aov-calculator': { redirect: { to: '/blog/how-to-increase-aov', statusCode: 301 } },
    },
    robots: {},
})
