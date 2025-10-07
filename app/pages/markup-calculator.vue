<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'tool'
});

useHead({
  title: 'Free Markup & Product Pricing Calculator',
  meta: [
    { 
      name: 'description', 
      content: 'Simple, no-nonsense Markup Calculator. Instantly find the perfect selling price for your products based on cost. Includes formula, examples, and effective pricing strategies.' 
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://mktgrowkit.com/markup-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What's the difference between Markup and Margin?", "acceptedAnswer": {"@type": "Answer", "text": "Markup is your profit relative to the cost (Profit / Cost). Margin is your profit relative to the selling price (Profit / Selling Price). For the same product, the markup percentage will always be higher than the margin percentage."}},
          {"@type": "Question", "name": "What is a good markup for e-commerce products?", "acceptedAnswer": {"@type": "Answer", "text": "It varies widely by industry. Electronics often have low markups (10-30%), while apparel and jewelry can have high markups (100-500%+). A common starting point for many DTC brands is 'keystone pricing' (a 100% markup)."}},
          {"@type": "Question", "name": "Should I use the same markup for all my products?", "acceptedAnswer": {"@type": "Answer", "text": "Not necessarily. A variable markup strategy is often best. You can use lower markups on competitive 'hero' products and higher markups on accessories or niche items to balance your overall profitability."}}
        ]
      })
    }
  ]
});


const cost = ref(null);
const markup = ref(null);

const results = computed(() => {
  const c = parseFloat(cost.value);
  const m = parseFloat(markup.value);

  if (isNaN(c) || isNaN(m) || c < 0 || m < 0) {
    return {
      sellingPriceFormatted: '$0.00',
      grossProfitFormatted: '$0.00',
    };
  }

  const sellingPrice = c * (1 + (m / 100));
  const grossProfit = sellingPrice - c;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return {
    sellingPriceFormatted: formatter.format(sellingPrice),
    grossProfitFormatted: formatter.format(grossProfit),
  };
});

const reset = () => {
  cost.value = null;
  markup.value = null;
};
</script>


<template>
  <div>
    <section class="py-10 sm:py-14">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          Markup Calculator – <span class="gradient-text">Product Pricing & Profit</span>
        </h1>
        <p class="mt-3 text-slate-600">Easily determine the selling price for your products based on cost and desired markup percentage. Instantly see your gross profit per item.</p>
      </div>
    </section>

    <section id="calculator" class="pb-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 neo-card p-6">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Inputs</h2>
          <div class="space-y-4">
            <div>
              <label for="cost" class="block text-sm font-semibold text-slate-800">Product Cost</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="cost" id="cost" type="number" min="0" step="0.01" placeholder="e.g., 25.50" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
            </div>
            <div>
              <label for="markup" class="block text-sm font-semibold text-slate-800">Markup Percentage</label>
               <div class="mt-1 flex">
                <input v-model.number="markup" id="markup" type="number" min="0" step="1" placeholder="e.g., 150" class="w-full px-3 py-2 border-2 border-slate-900 rounded-l-lg focus:outline-none" />
                <span class="inline-flex items-center px-3 border-2 border-l-0 border-slate-900 rounded-r-lg bg-slate-50 text-sm">%</span>
              </div>
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
              <p class="text-xs font-semibold text-slate-700">Calculated Selling Price</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.2rem,4vw,2.2rem)]">{{ results.sellingPriceFormatted }}</p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-slate-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Gross Profit per Item</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-2xl">{{ results.grossProfitFormatted }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="explain" class="py-10">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
        <article class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">What is Markup?</h3>
          <p class="text-sm text-slate-700 mb-3">Markup is the amount added to the cost of a product to determine its selling price. It's expressed as a percentage of the cost, not the selling price.</p>
          <div class="p-4 bg-slate-50 border-2 border-slate-900 rounded-lg">
            <p class="text-sm font-bold">Formula</p>
            <p class="text-sm">Selling Price = Cost × (1 + (Markup % / 100))</p>
            <p class="text-sm">Example: A product costs $25 and you want a 150% markup. The selling price will be $25 × (1 + 1.5) = $62.50.</p>
          </div>
          <p class="mt-3 text-sm text-slate-700">Using markup is a straightforward way to ensure that every sale not only covers the item's cost but also contributes a specific amount towards your gross profit.</p>
        </article>
        <aside class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">Effective Pricing Strategies</h3>
          <p class="text-sm text-slate-700 mb-3">Your markup shouldn't be random. A smart pricing strategy considers your brand, costs, and market position.</p>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>Keystone Pricing:</strong> A simple starting point where you double the cost (a 100% markup).</li>
            <li><strong>Factor in All Costs:</strong> Your "Product Cost" should include shipping, packaging, and handling—not just the wholesale price.</li>
            <li><strong>Analyze Competitors:</strong> Know what similar brands are charging. You can price higher if your brand is stronger, or lower to be competitive.</li>
            <li><strong>Brand Value:</strong> Premium and luxury brands can command significantly higher markups due to perceived value.</li>
            <li><strong>Psychological Pricing:</strong> Ending prices in .99 or .95 can have a psychological impact on purchasing decisions.</li>
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
              <span class="font-bold">What's the difference between Markup and Margin?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">This is the most common question! <br><b>Markup</b> is your profit as a percentage of the <b>cost</b>. (Profit / Cost). <br><b>Margin</b> is your profit as a percentage of the <b>selling price</b>. (Profit / Selling Price). <br>For the same item, the markup percentage will always be higher than the margin percentage.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">What is a good markup for e-commerce products?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">There's no single answer. It varies wildly by industry. For example: <br>- <b>Electronics:</b> Often have low markups (10-30%). <br>- <b>Apparel/Fashion:</b> Typically have high markups (100-300%+). <br>- <b>Jewelry/Accessories:</b> Can have very high markups (200-500%+). <br>A common starting point for many DTC brands is "keystone pricing," which is a 100% markup.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">Should I use the same markup for all my products?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Not necessarily. Many successful brands use a variable markup strategy. You might use a lower markup on high-volume "hero" products to stay competitive, and a much higher markup on accessories or less frequent purchases. This allows you to balance overall profitability across your entire catalog.</div>
          </details>
        </div>
      </div>
    </section>
    
    <section class="py-10">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <NuxtLink to="/" class="inline-block px-6 py-3 font-bold text-slate-900 bg-violet-300 rounded-lg neo-btn transition-all">← Back to All Tools</NuxtLink>
      </div>
    </section>
  </div>
</template>

