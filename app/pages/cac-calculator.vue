
<script setup>
import { ref, computed } from 'vue';

definePageMeta({
  layout: 'tool'
});

// =================================================================
// SEO & HEAD MANAGEMENT
// =================================================================
useHead({
  title: 'Free Customer Acquisition Cost (CAC) Calculator',
  meta: [
    { 
      name: 'description', 
      content: 'How much does it cost to get a new customer? Use our simple CAC calculator by entering your marketing spend and new customers. Essential for DTC brands.' 
    },
  ],
  link: [
    { rel: 'canonical', href: 'https://mktgrowkit.com/cac-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question", "name": "What costs should I include in CAC?", "acceptedAnswer": {"@type": "Answer", "text": "Include all expenses related to acquiring customers: ad spend, agency fees, content creation costs, and subscriptions for marketing tools."}},
          {"@type": "Question", "name": "What is a 'good' CAC?", "acceptedAnswer": {"@type": "Answer", "text": "A 'good' CAC is one that is significantly lower than your Customer Lifetime Value (LTV). A commonly accepted benchmark for a sustainable business is an LTV:CAC ratio of 3:1 or higher."}},
          {"@type": "Question", "name": "How can I lower my CAC?", "acceptedAnswer": {"@type": "Answer", "text": "You can lower CAC by improving your website's conversion rate (CRO), refining ad targeting, increasing organic traffic through SEO, and implementing a customer referral program."}}
        ]
      })
    }
  ]
});


// =================================================================
// CALCULATOR LOGIC
// =================================================================
const totalCost = ref(null);
const newCustomers = ref(null);

const results = computed(() => {
  const tc = parseFloat(totalCost.value);
  const nc = parseFloat(newCustomers.value);

  if (isNaN(tc) || isNaN(nc) || tc < 0 || nc <= 0) {
    return {
      cacFormatted: '$0.00',
    };
  }

  const cac = tc / nc;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return {
    cacFormatted: formatter.format(cac),
  };
});

const reset = () => {
  totalCost.value = null;
  newCustomers.value = null;
};
</script>


<template>
  <div>
    <section class="py-10 sm:py-14">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          <span class="gradient-text">Customer Acquisition Cost</span> (CAC) Calculator
        </h1>
        <p class="mt-3 text-slate-600">How much does it really cost to get a new customer? Use our simple CAC calculator to measure your campaign profitability.</p>
      </div>
    </section>

    <section id="calculator" class="pb-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 neo-card p-6">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Inputs</h2>
          <div class="space-y-4">
            <div>
              <label for="cost" class="block text-sm font-semibold text-slate-800">Total Marketing & Sales Cost</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="totalCost" id="cost" type="number" min="0" step="0.01" placeholder="e.g., 5000" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
              <p class="mt-1 text-xs text-slate-500">Include ad spend, agency fees, tool subscriptions, etc.</p>
            </div>
            <div>
              <label for="customers" class="block text-sm font-semibold text-slate-800">Number of New Customers Acquired</label>
               <div class="mt-1 flex">
                <input v-model.number="newCustomers" id="customers" type="number" min="0" step="1" placeholder="e.g., 250" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
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
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-sky-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Customer Acquisition Cost (CAC)</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.2rem,4vw,2.2rem)]">{{ results.cacFormatted }}</p>
              <p class="mt-0.5 text-xs font-mono text-slate-600">per customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="explain" class="py-10">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
        <article class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">What is CAC?</h3>
          <p class="text-sm text-slate-700 mb-3">Customer Acquisition Cost (CAC) is the total amount of money a business spends to acquire a single new customer.</p>
          <div class="p-4 bg-slate-50 border-2 border-slate-900 rounded-lg">
            <p class="text-sm font-bold">Formula</p>
            <p class="text-sm">CAC = Total Marketing & Sales Costs ÷ New Customers Acquired</p>
            <p class="text-sm">Example: If you spent $5,000 to get 250 new customers, your CAC is $20.</p>
          </div>
          <p class="mt-3 text-sm text-slate-700">It's a critical metric for understanding the profitability and scalability of your business. A successful business model requires a customer's lifetime value (LTV) to be higher than the cost to acquire them.</p>
        </article>
        <aside class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">Why CAC is Important</h3>
          <p class="text-sm text-slate-700 mb-3">Knowing your CAC helps you make smarter decisions about your marketing budget and strategy.</p>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>Measure ROI:</strong> Determine the true return on investment of your marketing campaigns.</li>
            <li><strong>Optimize Spending:</strong> Identify which channels bring in customers most affordably and allocate your budget accordingly.</li>
            <li><strong>Improve Profitability:</strong> The ultimate goal is to keep CAC low while increasing Customer Lifetime Value (LTV). A healthy LTV:CAC ratio is often cited as 3:1.</li>
            <li><strong>Scale Sustainably:</strong> A low, stable CAC is a sign you can sustainably grow your business by acquiring more customers.</li>
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
              <span class="font-bold">What costs should I include in CAC?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Be thorough. You should include all expenses related to acquiring customers within a specific period: advertising spend (Google Ads, Facebook Ads, etc.), agency or contractor fees, content creation costs, and subscriptions for marketing tools (e.g., email marketing platforms).</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">What is a "good" CAC?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">A 'good' CAC is one that is significantly lower than your Customer Lifetime Value (LTV). There is no magic number, as it depends on your product's price and customer loyalty. A commonly accepted benchmark for a sustainable business is an LTV to CAC ratio of 3:1 or higher.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">How can I lower my CAC?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">You can lower your CAC by: 1) Improving your website's conversion rate (CRO). 2) Refining your ad targeting to reach a more relevant audience. 3) Increasing your organic traffic through SEO and content marketing. 4) Implementing a customer referral program to encourage word-of-mouth marketing.</div>
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
