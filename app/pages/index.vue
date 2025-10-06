<script setup>
useHead({
    title: 'Free Marketing Calculators for Indie Devs & Creators | mktgrowkit',
    meta: [
        { name: 'description', content: 'Boost your growth with our free marketing calculators: ROAS, CPM/CPC, and AOV. Simple, no-fluff tools designed for data-driven indie hackers, developers, and creators.' }
    ],
    link: [
        { rel: 'canonical', href: 'https://mktgrowkit.com/' }
    ]
})

// State để lưu email từ input
const email = ref('')
// State để quản lý trạng thái loading
const isLoading = ref(false)
// State để hiển thị message sau khi submit
const message = ref('')
const isError = ref(false)

async function subscribe() {
    if (!email.value) {
        isError.value = true
        message.value = 'Please enter a valid email address.'
        return
    }

    isLoading.value = true
    message.value = ''
    isError.value = false

    try {
        // Gọi tới API route `/api/subscribe` vừa tạo
        await $fetch('/api/subscribe', {
            method: 'POST',
            body: { email: email.value }
        })

        message.value = "🎉 Success! Please check your email to confirm."
        email.value = ''

    } catch (error) {
        isError.value = true
        message.value = error.data?.message || 'An unexpected error occurred. Please try again.'
    } finally {
        isLoading.value = false
    }
}

</script>

<template>
    <div>
        <section class="py-16 sm:py-20">
            <div class="container mx-auto px-6 text-center max-w-4xl">
                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Stop Guessing. <span class="gradient-text">Start Growing.</span>
                </h1>
                <p class="mt-4 max-w-2xl mx-auto text-base text-slate-600">
                    A curated kit of essential, no‑fluff marketing calculators for <span
                        class="font-semibold text-slate-900">indie hackers, creators, and solo marketers</span>. Make
                    data-driven decisions on ad spend, campaign costs, and customer value—without the enterprise price
                    tag.
                </p>
                <div class="mt-8 flex justify-center gap-4">
                    <a href="#tools" class="px-7 py-3 font-bold text-slate-900 bg-violet-300 rounded-lg neo-btn">Explore
                        Free Tools →</a>
                </div>
            </div>
        </section>

        <section id="tools" class="py-12 sm:py-16 bg-white">
            <div class="container mx-auto px-6 max-w-5xl">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">The Free Toolkit</h2>
                    <p class="mt-2 text-slate-600">Three essential calculators to sharpen your marketing decisions.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <NuxtLink to="/roas-calculator" class="tool-card-link group">
                        <div class="neo-card p-6 h-full">
                            <div
                                class="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100 mb-5 border-2 border-slate-900">
                                <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z">
                                    </path>
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3v4m0 0h4M3 7l4-4m14 14v4m0 0h-4m4 0l-4-4M7 21H3m0 0v-4m0 4l4-4M21 7h-4m0 0V3m0 4l4-4">
                                    </path>
                                </svg>
                            </div>
                            <h3 class="text-base font-bold text-slate-900 mb-1">ROAS Calculator</h3>
                            <p class="text-sm text-slate-600 mb-5">Instantly see the profitability of your ad campaigns.
                                Know exactly how much revenue you're generating for every dollar spent.</p>
                            <p class="font-bold text-sm text-amber-600 group-hover:text-amber-800 transition-colors">
                                Calculate ROAS <span
                                    class="inline-block transition-transform group-hover:translate-x-1">→</span></p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/cpm-cpc-calculator" class="tool-card-link group">
                        <div class="neo-card p-6 h-full">
                            <div
                                class="flex items-center justify-center h-12 w-12 rounded-lg bg-sky-100 mb-5 border-2 border-slate-900">
                                <svg class="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" stroke-width="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M4 6h16M4 10h10M4 14h7M4 18h4"></path>
                                </svg>
                            </div>
                            <h3 class="text-base font-bold text-slate-900 mb-1">CPM & CPC Calculator</h3>
                            <p class="text-sm text-slate-600 mb-5">Effortlessly calculate and compare your ad costs.
                                Master both CPM and CPC to optimize campaign efficiency and maximize your budget.</p>
                            <p class="font-bold text-sm text-sky-600 group-hover:text-sky-800 transition-colors">
                                Calculate Ad Costs <span
                                    class="inline-block transition-transform group-hover:translate-x-1">→</span></p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/aov-calculator" class="tool-card-link group">
                        <div class="neo-card p-6 h-full">
                            <div
                                class="flex items-center justify-center h-12 w-12 rounded-lg bg-emerald-100 mb-5 border-2 border-slate-900">
                                <svg class="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2"
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z">
                                    </path>
                                </svg>
                            </div>
                            <h3 class="text-base font-bold text-slate-900 mb-1">AOV Calculator</h3>
                            <p class="text-sm text-slate-600 mb-5">Understand the average value of every sale. A key
                                metric for boosting revenue without needing more customers.</p>
                            <p
                                class="font-bold text-sm text-emerald-600 group-hover:text-emerald-800 transition-colors">
                                Calculate AOV <span
                                    class="inline-block transition-transform group-hover:translate-x-1">→</span></p>
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

        <section id="from-the-builder" class="py-12 sm:py-16">
            <div class="container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-12">
                    <img src="https://pbs.twimg.com/profile_images/1953022266650050561/eKUjHUYE_400x400.jpg" alt="Founder's Avatar"
                        class="w-28 h-28 rounded-full mx-auto mb-6 border-2 border-slate-900" />
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">From The Builder</h2>
                    <p class="mt-2 text-slate-600">For builders, by a builder.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="neo-card p-6 text-center bg-amber-50">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">I build tools I wish I had.</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                            I'm a dev with 3 years in product monetization. I got tired of bloated, expensive marketing
                            suites. So I built this: a collection of practical, precise tools with zero fluff. No
                            complex dashboards, no confusing jargon. Just get the numbers you need and get back to what
                            you love—building.
                        </p>
                    </div>
                    <div class="neo-card p-6 text-center bg-emerald-50">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">Built in Public, Shaped by You.</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                            This toolkit is an evolving project. I share my progress and revenue openly. Your feedback
                            on Twitter directly shapes the new tools and features we launch next. It's a journey we're
                            on together.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="newsletter" class="py-12 sm:py-16 bg-white border-t-2 border-b-2 border-slate-900">
            <div class="container mx-auto px-6 text-center max-w-2xl">
                <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">Join the Journey.</h2>
                <p class="text-slate-700 mb-6">Get new tool alerts, exclusive templates, and follow my #buildinpublic
                    story. No spam, just pure value.</p>
                <ClientOnly>
                    <div>
                        <form @submit.prevent="subscribe" class="flex flex-col md:flex-row gap-3 justify-center">
                            <input 
                                v-model="email"
                                type="email" 
                                placeholder="you@company.com" 
                                required
                                :disabled="isLoading"
                                class="w-full md:w-auto flex-grow px-4 py-3 rounded-lg text-sm border-2 border-slate-900 focus:outline-none disabled:bg-slate-100 disabled:cursor-not-allowed" />
                            <button 
                                type="submit"
                                :disabled="isLoading"
                                class="px-6 py-3 font-bold text-slate-900 bg-sky-400 rounded-lg neo-btn disabled:bg-sky-200 disabled:cursor-not-allowed">
                                {{ isLoading ? 'Subscribing...' : 'Subscribe' }}
                            </button>
                        </form>
                        <p id="prof" class="mt-4 text-xs text-slate-600 font-medium">Join 100+ other builders and
                            marketers!</p>
                    </div>
                </ClientOnly>
            </div>
        </section>
    </div>
</template>

