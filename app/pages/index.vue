<script setup>
useHead({
    // SỬA 1: Title cụ thể hơn, nhắm thẳng vào e-commerce và các từ khóa chính
    title: 'mktgrowkit - Free ROAS, AOV & CPM Calculators for E-commerce',
    meta: [
        {
            name: 'description',
            // SỬA 2: Description tập trung vào đối tượng và lợi ích cốt lõi (lợi nhuận)
            content: 'The essential toolkit for e-commerce owners & DTC brands. Calculate ROAS, AOV, CPM, and get the data you need to boost profit and grow smarter.'
        },
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
                <!-- SỬA 3: Headline mạnh mẽ, tập trung vào lợi nhuận - nỗi đau cuối cùng -->
                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                    Go Beyond ROAS. <span class="gradient-text">Master Your Profit.</span>
                </h1>

                <!-- SỬA 4: Sub-headline nói chuyện trực tiếp với đối tượng mục tiêu -->
                <p class="mt-4 max-w-2xl mx-auto text-base text-slate-600">
                    The e-commerce toolkit that actually makes sense. We provide sharp, no-fluff tools to help <span class="font-semibold text-slate-900">DTC brands and Shopify owners</span> make every ad dollar count.
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
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">The E-commerce Toolkit</h2>
                    <p class="mt-2 text-slate-600">Essential calculators to sharpen your marketing decisions.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Các tool card giữ nguyên, chúng đã rất tốt rồi -->
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

        <!-- SỬA 5: Thêm section FAQ để tăng word count và giải quyết vấn đề SEO -->
        <section id="faq" class="py-12 sm:py-16">
            <div class="container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-12">
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Your E-commerce Questions, Answered</h2>
                    <p class="mt-2 text-slate-600">A few common questions we get from founders.</p>
                </div>
                <div class="space-y-6">
                    <div class="neo-card p-6 bg-white">
                        <h3 class="font-bold text-slate-900 mb-2">What is a good ROAS for an e-commerce business?</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                            While it varies by industry and profit margins, a common benchmark for a good ROAS is <strong>4:1</strong> — meaning you generate $4 for every $1 spent on ads. A ratio of 2:1 is often considered the break-even point after accounting for product costs. Our tools help you find the exact number you need to be profitable.
                        </p>
                    </div>
                     <div class="neo-card p-6 bg-white">
                        <h3 class="font-bold text-slate-900 mb-2">Are these tools really free to use?</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                           Yes, all the calculators on our site are 100% free to use, with no sign-up required. Our mission is to provide accessible, high-quality tools for the community. In the future, we may introduce advanced AI-powered tools that operate on a freemium model.
                        </p>
                    </div>
                     <div class="neo-card p-6 bg-white">
                        <h3 class="font-bold text-slate-900 mb-2">What makes mktgrowkit different from other tool suites?</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                            Simplicity and focus. We are not a bloated, all-in-one platform. Each tool is designed to do one job exceptionally well, with zero fluff or confusing dashboards. We're built by a solo builder for founders and marketers who value speed and clarity.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="from-the-builder" class="py-12 sm:py-16 bg-white">
            <div class="container mx-auto px-6 max-w-4xl">
                <div class="text-center mb-12">
                    <img src="/avt.jpg" alt="Founder's Avatar"
                        class="w-28 h-28 rounded-full mx-auto mb-6 border-2 border-slate-900" />
                    <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">From The Builder</h2>
                    <p class="mt-2 text-slate-600">For DTC founders, by a builder.</p>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                    <div class="neo-card p-6 text-center bg-amber-50">
                        <h3 class="text-lg font-bold text-slate-900 mb-2">I build tools I wish I had.</h3>
                        <p class="text-sm text-slate-700 leading-relaxed">
                            Tired of bloated marketing suites that slow you down? I was too.

As a dev focused on profit, I built this toolkit with one rule: zero fluff.

Just the numbers you need to get back to growing your business.
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
                        <p id="prof" class="mt-4 text-xs text-slate-600 font-medium">Join 100+ other founders and
                            marketers!</p>
                    </div>
                </ClientOnly>
            </div>
        </section>
    </div>
</template>
