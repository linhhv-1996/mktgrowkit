<script setup>
import { posts } from '~/data/blogPosts'

const sortedPosts = computed(() => {
    return [...posts].sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });
});

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
        <section class="py-16 sm:py-20">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-16 max-w-3xl mx-auto">
                    <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                        From the <span class="gradient-text">Builder's Desk</span>
                    </h1>
                    <p class="mt-4 text-base text-slate-600">
                        Welcome to the official blog of mktgrowkit. This is where we share practical strategies, actionable guides, and transparent lessons from building a bootstrapped SaaS for the e-commerce community. Whether you're looking to optimize your ad spend, increase your store's conversion rate, or just follow along with our #buildinpublic journey, you'll find valuable insights here.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <NuxtLink 
                        v-for="post in sortedPosts" 
                        :key="post.slug" 
                        :to="`/blog/${post.slug}`" 
                        class="block group"
                    >
                        <div class="neo-card p-6 h-full transition-all duration-200 flex flex-col bl-card-hover">
                            <div class="flex-grow">
                                <p class="text-sm text-slate-500 font-semibold mb-2">{{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</p>
                                <h2 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{{ post.title }}</h2>
                                <p class="text-base text-slate-600">{{ post.excerpt }}</p>
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
