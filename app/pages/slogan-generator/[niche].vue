<script setup>
import { sloganDataSource } from '~/utils/sloganDataSource';

definePageMeta({
  layout: 'tool'
});

const route = useRoute();
const nicheSlug = route.params.niche;
const nicheContent = sloganDataSource.niches[nicheSlug];

if (!nicheContent) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

// Tạo nội dung FAQ động
const faqItems = [
    {
        question: `How does this ${nicheContent.name} slogan generator work?`,
        answer: `Our tool leverages advanced AI to understand your keyword and the ${nicheContent.name} industry. It then generates unique and creative slogans that sound natural and compelling.`
    },
    {
        question: `Are the generated slogans free to use?`,
        answer: `Yes, all slogans are 100% free for you to use for your ${nicheContent.name} business or any other commercial project without attribution.`
    },
    {
        question: `How do I choose the best slogan for my ${nicheContent.name} business?`,
        answer: `A great ${nicheContent.name} slogan should be memorable and highlight a key benefit. For the ${nicheContent.name} industry, it's important that the slogan builds trust and differentiates you from competitors.`
    }
];

useHead({
    title: nicheContent.metaTitle,
    meta: [
        { name: 'description', content: nicheContent.metaDescription }
    ],
    link: [
        { rel: 'canonical', href: `https://mktgrowkit.com/slogan-generator/${nicheSlug}` }
    ],
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": faqItems.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            })
        }
    ]
});

const keyword = ref('');
const slogans = ref([]);
const isLoading = ref(false);
const errorMsg = ref('');
const copiedSlogan = ref('');

async function getSlogans() {
    if (!keyword.value.trim()) {
        errorMsg.value = "Please enter a keyword to get started.";
        slogans.value = [];
        return;
    }
    isLoading.value = true;
    slogans.value = [];
    errorMsg.value = '';
    try {
        const response = await $fetch('/api/generate-slogans', {
            method: 'POST',
            body: { 
                keyword: keyword.value,
                niche: nicheSlug,
                count: 20
            }
        });
        if (response.error) throw new Error(response.error);
        slogans.value = response.slogans;
    } catch (error) {
        errorMsg.value = "Sorry, an error occurred. Please try again.";
        console.error("Failed to generate slogans:", error);
    } finally {
        isLoading.value = false;
    }
}

function reset() {
    keyword.value = '';
    slogans.value = [];
    errorMsg.value = '';
    isLoading.value = false;
}

function copyToClipboard(slogan) {
    navigator.clipboard.writeText(slogan);
    copiedSlogan.value = slogan;
    setTimeout(() => {
        copiedSlogan.value = '';
    }, 2000);
}

const resultColors = ['bg-amber-50', 'bg-sky-50', 'bg-emerald-50', 'bg-violet-50', 'bg-rose-50'];
</script>

<style>
.custom-select {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23334155' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.faq-item[open] summary svg {
    transform: rotate(180deg);
}
</style>

<template>
    <div>
        <section class="py-10 sm:py-14">
            <div class="container mx-auto px-6 text-center max-w-3xl">
                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight" v-html="nicheContent.h1"></h1>
                <p class="mt-3 text-slate-600">{{ nicheContent.metaDescription }}</p>
            </div>
        </section>

        <section id="generator" class="pb-6">
            <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6 lg:items-start">
                
                <div class="lg:col-span-3 neo-card p-6">
                    <h2 class="text-lg font-extrabold text-slate-900 mb-4">1. Enter Your Keyword</h2>
                    <form @submit.prevent="getSlogans" class="space-y-4">
                        <div>
                            <label for="keyword-input" class="block text-sm font-semibold text-slate-800">Your {{ nicheContent.name }} Keyword</label>
                            <input id="keyword-input" v-model="keyword" type="text" :placeholder="`e.g., luxury, modern, professional`" required
                                class="mt-1 w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
                        </div>
                        
                        <div class="pt-2 flex gap-3">
                             <button type="submit" :disabled="isLoading"
                                class="px-6 py-3 font-bold text-slate-900 bg-sky-400 rounded-lg neo-btn disabled:bg-sky-200 disabled:cursor-not-allowed">
                                {{ isLoading ? 'Generating...' : `Generate` }}
                            </button>
                            <button @click="reset" type="button" class="px-4 py-2 font-bold text-slate-900 bg-white rounded-lg neo-btn">Reset</button>
                        </div>
                    </form>
                </div>

                <div class="lg:col-span-2 neo-card p-6 h-fit">
                    <h2 class="text-lg font-extrabold text-slate-900 mb-4">Results</h2>
                    <div v-if="isLoading" class="text-center py-10">
                        <p class="font-medium text-slate-600">Generating creative ideas...</p>
                    </div>
                    <div v-else-if="errorMsg" class="text-center py-10 text-rose-600 font-medium">
                        <p>{{ errorMsg }}</p>
                    </div>
                    <div v-else-if="slogans.length > 0" class="space-y-3">
                        <div v-for="(slogan, index) in slogans" :key="slogan" 
                             :class="[resultColors[index % resultColors.length], 'p-4 rounded-lg border-2 border-slate-900 flex justify-between items-center gap-2 group']">
                            <p class="font-medium text-slate-800 text-sm">{{ slogan }}</p>
                            <button @click="copyToClipboard(slogan)" title="Copy to clipboard" class="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0">
                                <span v-if="copiedSlogan === slogan" class="text-emerald-600 font-bold text-xs">Copied!</span>
                                <svg v-else class="w-5 h-5 text-slate-500 hover:text-slate-900" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div v-else class="text-center py-10 border-2 border-dashed border-slate-300 rounded-lg">
                        <p class="text-sm font-medium text-slate-500">Your slogan ideas will appear here.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="explain" class="py-10">
            <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
                <article class="neo-card p-6">
                    <h3 class="text-lg font-extrabold text-slate-900 mb-2">What Makes a Great {{ nicheContent.name }} Slogan?</h3>
                    <p class="text-sm text-slate-700 mb-3">A powerful slogan captures your brand's essence. For the {{ nicheContent.name }} industry, it's crucial to convey trust, quality, and your unique selling proposition.</p>
                    <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1.5">
                        <li><strong>Be Specific:</strong> Instead of "Great Quality", try a slogan that hints at *why* it's great.</li>
                        <li><strong>Highlight a Benefit:</strong> Focus on what the customer gets (e.g., peace of mind, faster results, luxury feel).</li>
                        <li><strong>Keep It Short & Memorable:</strong> The best taglines are easy to remember and repeat.</li>
                    </ul>
                </article>
                <aside class="neo-card p-6">
                    <h3 class="text-lg font-extrabold text-slate-900 mb-2">How to Use This Tool</h3>
                     <p class="text-sm text-slate-700 mb-3">Get the best results with these simple tips:</p>
                    <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1.5">
                        <li><strong>Use Niche Keywords:</strong> Try words specific to {{ nicheContent.name }} (e.g., "property", "agent", "exclusive").</li>
                        <li><strong>Focus on Your Audience:</strong> Use keywords that describe your target customer (e.g., "first-time buyer", "investor").</li>
                        <li><strong>Generate and Combine:</strong> Create multiple lists and mix and match the best ideas to form a unique slogan.</li>
                    </ul>
                </aside>
            </div>
        </section>

        <section id="faq" class="py-10">
            <div class="container mx-auto px-6 max-w-4xl">
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-6">FAQ</h2>
                <div class="space-y-3">
                    <details v-for="(item, index) in faqItems" :key="index" class="faq-item neo-card p-4 bg-white">
                        <summary class="flex items-center justify-between cursor-pointer select-none">
                            <span class="font-bold text-slate-900">{{ item.question }}</span>
                            <svg class="w-5 h-5 transition-transform flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                        </summary>
                        <div class="pt-3 text-sm text-slate-700" v-html="item.answer"></div>
                    </details>
                </div>
            </div>
        </section>
        
        <section class="py-10">
            <div class="container mx-auto px-6 text-center max-w-3xl">
                <NuxtLink to="/slogan-generator" class="inline-block px-6 py-3 font-bold text-slate-900 bg-violet-300 rounded-lg neo-btn transition-all">← Back to Main Slogan Generator</NuxtLink>
            </div>
        </section>
    </div>
</template>
