<script setup>
import { posts } from '~/data/blogPosts'

const route = useRoute()
const slug = route.params.slug

const article = posts.find(post => post.slug === slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Post Not Found', fatal: true })
}

useHead({
    title: `${article.title} | mktgrowkit`,
    meta: [
        { name: 'description', content: article.excerpt }
    ],
    link: [
        { rel: 'canonical', href: `https://mktgrowkit.com/blog/${slug}` }
    ]
})
</script>

<template>
    <div>
        <section class="py-12 sm:py-12">
            <div class="container mx-auto px-6 max-w-4xl">
                
                <div class="mb-8">
                    <NuxtLink to="/blog" 
                        class="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Back to Blog
                    </NuxtLink>
                </div>

                <div class="neo-card bg-white p-8 sm:p-10">
                    <div class="text-center mb-8">
                        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-700 leading-tight tracking-tight">
                           {{ article.title }}
                        </h1>
                        <p class="mt-4 text-base text-slate-500">
                           Published on {{ article.date }} by {{ article.author }}
                        </p>
                    </div>

                    <div v-html="article.content" class="prose prose-slate max-w-none">
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
