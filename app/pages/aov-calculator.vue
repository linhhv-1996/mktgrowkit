<script setup lang="ts">
definePageMeta({
  layout: 'tool'
});

useHead({
  title: 'AOV Calculator – Average Order Value',
  meta: [
    { name: 'description', content: 'Fast, no‑fluff AOV calculator. Compute your Average Order Value from total revenue and number of orders. Includes formula, examples, and tips to increase AOV.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mktgrowkit.com/aov-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question","name": "What is AOV (Average Order Value)?","acceptedAnswer": {"@type": "Answer","text": "AOV is the average dollar amount a customer spends per transaction. Formula: AOV = Total Revenue / Total Number of Orders."}},
          {"@type": "Question","name": "Why is AOV an important metric?","acceptedAnswer": {"@type": "Answer","text": "AOV is a key performance indicator that helps businesses understand customer purchasing behavior. Increasing AOV is one of the most effective ways to grow revenue without needing to acquire new customers."}},
          {"@type": "Question","name": "What are the best ways to increase AOV?","acceptedAnswer": {"@type": "Answer","text": "Common strategies include product bundling, cross-selling related items, upselling to a premium version, setting a free shipping threshold, and offering volume discounts."}},
          {"@type": "Question","name": "Is AOV the same as LTV (Lifetime Value)?","acceptedAnswer": {"@type": "Answer","text": "No. AOV measures the value of a single order. LTV (or CLV) forecasts the total revenue a business can expect from a single customer account throughout their entire relationship."}}
        ]
      })
    }
  ]
});

const revenue = ref<number | null>(null);
const orders = ref<number | null>(null);

// Formatters
const fmtMoney = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return '$' + v.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); };
const fmtMoneyCompact = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:2}).format(v); };

const results = computed(() => {
  const revenueVal = revenue.value || 0;
  const ordersVal = orders.value || 0;

  const aov = ordersVal > 0 ? revenueVal / ordersVal : NaN;

  return {
    aovCompact: fmtMoneyCompact(aov),
    aovFull: aov ? `≈ ${fmtMoney(aov)}` : ''
  };
});

function reset() {
  revenue.value = null;
  orders.value = null;
}
</script>

<template>
  <div>
    <section class="py-10 sm:py-14">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          AOV Calculator – <span class="gradient-text">Average Order Value</span>
        </h1>
        <p class="mt-3 text-slate-600">Quickly calculate your store's Average Order Value (AOV) from total revenue and the total number of orders.</p>
      </div>
    </section>

    <section id="calculator" class="pb-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 neo-card p-6">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Inputs</h2>
          <div class="space-y-4">
            <div>
              <label for="revenue" class="block text-sm font-semibold text-slate-800">Total Revenue</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="revenue" id="revenue" type="number" min="0" step="0.01" placeholder="e.g., 12500" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
            </div>
            <div>
              <label for="orders" class="block text-sm font-semibold text-slate-800">Total Number of Orders</label>
              <input v-model.number="orders" id="orders" type="number" min="0" step="1" placeholder="e.g., 250" class="mt-1 w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
            </div>
          </div>

          <div class="pt-5 flex gap-3">
             <button @click="reset" type="button" class="px-4 py-2 font-bold text-slate-900 bg-white rounded-lg neo-btn">Reset</button>
          </div>
        </div>

        <div class="lg:col-span-2 neo-card p-6 h-fit">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Results</h2>
          <div class="grid grid-cols-1 gap-4">
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-emerald-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Average Order Value (AOV)</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.2rem,4vw,2.2rem)]">{{ results.aovCompact }}</p>
              <p class="mt-0.5 text-[11px] md:text-xs font-mono text-slate-600 break-all" v-html="results.aovFull || '&nbsp;'"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="explain" class="py-10">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
        <article class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">What is Average Order Value?</h3>
          <p class="text-sm text-slate-700 mb-3">Average Order Value (AOV) measures the average amount of money each customer spends per transaction with your business.</p>
          <div class="p-4 bg-slate-50 border-2 border-slate-900 rounded-lg">
            <p class="text-sm font-bold">Formula</p>
            <p class="text-sm">AOV = Total Revenue ÷ Total Number of Orders</p>
            <p class="text-sm">Example: If you earn $12,500 from 250 orders, your AOV is $50.</p>
          </div>
          <p class="mt-3 text-sm text-slate-700">Tracking AOV helps you understand customer purchasing habits and measure the effectiveness of your pricing and marketing strategies. A higher AOV means you're generating more revenue from each customer.</p>
        </article>
        <aside class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">How to Increase Your AOV</h3>
          <p class="text-sm text-slate-700 mb-3">Encouraging customers to spend more per order is a powerful way to boost revenue without increasing ad spend.</p>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>Product Bundling:</strong> Offer curated packages of related products at a slight discount.</li>
            <li><strong>Cross-Sells & Upsells:</strong> Recommend complementary items ("Frequently bought together") or a more premium version of the current product.</li>
            <li><strong>Free Shipping Thresholds:</strong> Offer free shipping on orders over a certain amount (e.g., "Free shipping on orders over $75!").</li>
            <li><strong>Volume Discounts:</strong> Provide incentives for buying in bulk, like "Buy 2, Get 1 Free".</li>
            <li><strong>Loyalty Programs:</strong> Reward customers with points for spending more, which they can redeem later.</li>
          </ul>
        </aside>
      </div>
    </section>

    <section id="faq" class="py-10">
      <div class="container mx-auto px-6 max-w-4xl">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-6">FAQ</h2>
        <div class="space-y-3">
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">What is considered a "good" AOV?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">There is no universal "good" AOV. It varies dramatically by industry, business model, and product price point. A good AOV for a coffee shop might be $10, while for a furniture store it could be $1,500. The best approach is to benchmark against your own historical data and aim for consistent growth.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">How often should I track AOV?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">It's useful to track AOV on a monthly and quarterly basis to identify trends. You should also analyze it after specific marketing campaigns (like a holiday sale or the launch of a free shipping offer) to see how they impacted customer spending.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">Does AOV include shipping costs and taxes?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Typically, AOV is calculated based on revenue generated from the products sold, *before* additional costs like shipping and taxes are applied. However, the most important thing is to be consistent in how you calculate it so you can track trends accurately over time.</div>
          </details>
        </div>
      </div>
    </section>
    
    <section class="py-10">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <NuxtLink to="/" class="inline-block px-6 py-3 font-bold text-slate-900 bg-violet-300 rounded-lg neo-btn transition-all">← Back to Free Tools</NuxtLink>
      </div>
    </section>
  </div>
</template>
