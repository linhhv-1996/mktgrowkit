<script setup>
import { posts } from '~/data/blogPosts'

useHead({
    title: 'Blog | mktgrowkit',
    meta: [
        { name: 'description', content: 'Articles and insights on marketing, growth, and the journey of building a SaaS in public.' }
    ],
    link: [
        { rel: 'canonical', href: 'https://mktgrowkit.com/blog' }
    ]
})
</script>

<template>
    <div>
        <section class="py-12 sm:py-12">
            <div class="container mx-auto px-6 max-w-3xl">
                <div class="text-center mb-16">
                    <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        From the <span class="gradient-text">Builder's Desk</span>
                    </h1>
                    <p class="mt-4 max-w-2xl mx-auto text-base text-slate-600">
                        Insights on marketing, growth, and the #buildinpublic journey of mktgrowkit.
                    </p>
                </div>

                <div>
                    <NuxtLink 
                        v-for="post in posts" 
                        :key="post.slug" 
                        :to="`/blog/${post.slug}`" 
                        class="block group mb-8"
                    >
                        <div class="neo-card p-6 h-full transition-all duration-200 shadow-lg flex flex-col xx">
                            <div class="flex-grow">
                                <p class="text-sm text-slate-500 font-semibold mb-2">{{ post.date }}</p>
                                <h2 class="text-xl font-bold text-slate-700 mb-2">{{ post.title }}</h2>
                                <p class="text-base text-slate-500">{{ post.excerpt }}</p>
                            </div>
                            <p class="font-bold text-sm text-sky-600 group-hover:text-sky-800 transition-colors mt-6">
                                Read More <span class="inline-block transition-transform group-hover:translate-x-1">→</span>
                            </p>
                        </div>
                    </NuxtLink>
                </div>

            </div>
        </section>
    </div>
</template>
