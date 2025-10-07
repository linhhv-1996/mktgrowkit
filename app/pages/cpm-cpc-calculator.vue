<script setup lang="ts">
definePageMeta({
  layout: 'tool'
});

useHead({
  title: 'Free CPM & CPC Calculator (Instant Results) | mktgrowkit',
  meta: [
    { name: 'description', content: 'Instantly calculate CPM, CPC, and CTR for your Google Ads, Facebook, or YouTube campaigns. Fast, free, and no-fluff ad metrics calculator.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mktgrowkit.com/cpm-cpc-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question","name": "What is CPM?","acceptedAnswer": {"@type": "Answer","text": "CPM (Cost Per Mille) is the cost for 1,000 ad impressions. It's used for branding campaigns where visibility is key. Formula: CPM = (Ad Spend / Impressions) * 1000."}},
          {"@type": "Question","name": "What is CPC?","acceptedAnswer": {"@type": "Answer","text": "CPC (Cost Per Click) is the cost for a single click on your ad. It's used for performance campaigns where driving traffic is the goal. Formula: CPC = Ad Spend / Clicks."}},
          {"@type": "Question","name": "What is a good CTR?","acceptedAnswer": {"@type": "Answer","text": "CTR (Click-Through Rate) varies widely by industry and ad platform. For Google Search, 2-5% is common. For social media display ads, 0.5-2% is typical. A higher CTR generally means your ad is more relevant to the audience."}},
          {"@type": "Question","name": "When should I use CPM vs. CPC?","acceptedAnswer": {"@type": "Answer","text": "Use CPM bidding for brand awareness campaigns to maximize reach. Use CPC bidding for performance campaigns (like lead gen or sales) where you want to pay for users who actively engage by clicking."}}
        ]
      })
    }
  ]
});

const spend = ref<number | null>(null);
const impressions = ref<number | null>(null);
const clicks = ref<number | null>(null);

// Formatters
const fmtMoney = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return '$' + v.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); };
const fmtMoneyCompact = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:2}).format(v); };
const fmtPercent = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return v.toFixed(2) + '%'; };

const results = computed(() => {
  const spendVal = spend.value || 0;
  const impressionsVal = impressions.value || 0;
  const clicksVal = clicks.value || 0;

  const cpm = impressionsVal > 0 ? (spendVal / impressionsVal) * 1000 : NaN;
  const cpc = clicksVal > 0 ? spendVal / clicksVal : NaN;
  const ctr = impressionsVal > 0 ? (clicksVal / impressionsVal) * 100 : NaN;

  return {
    cpmCompact: fmtMoneyCompact(cpm),
    cpmFull: cpm ? `≈ ${fmtMoney(cpm)}` : '',
    cpcCompact: fmtMoneyCompact(cpc),
    cpcFull: cpc ? `≈ ${fmtMoney(cpc)}` : '',
    ctr: fmtPercent(ctr),
  };
});

function reset() {
  spend.value = null;
  impressions.value = null;
  clicks.value = null;
}
</script>

<template>
  <div>
    <section class="py-10 sm:py-14">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          CPM & CPC Calculator – <span class="gradient-text">Ad Cost Metrics</span>
        </h1>
        <p class="mt-3 text-slate-600">Instantly compute CPM (Cost Per 1,000 Impressions), CPC (Cost Per Click), and CTR (Click-Through Rate) from your campaign data.</p>
      </div>
    </section>

    <section id="calculator" class="pb-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 neo-card p-6">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Inputs</h2>
          <div class="space-y-4">
            <div>
              <label for="spend" class="block text-sm font-semibold text-slate-800">Ad Spend</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="spend" id="spend" type="number" min="0" step="0.01" placeholder="e.g., 500" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
            </div>
            <div>
              <label for="impressions" class="block text-sm font-semibold text-slate-800">Total Impressions</label>
              <input v-model.number="impressions" id="impressions" type="number" min="0" step="1" placeholder="e.g., 150000" class="mt-1 w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
            </div>
            <div>
              <label for="clicks" class="block text-sm font-semibold text-slate-800">Total Clicks</label>
              <input v-model.number="clicks" id="clicks" type="number" min="0" step="1" placeholder="e.g., 2250" class="mt-1 w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
            </div>
          </div>

          <div class="pt-5 flex gap-3">
             <button @click="reset" type="button" class="px-4 py-2 font-bold text-slate-900 bg-white rounded-lg neo-btn">Reset</button>
          </div>
        </div>

        <div class="lg:col-span-2 neo-card p-6 h-fit">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Results</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-emerald-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">CPM</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.1rem,2.8vw,1.6rem)]">{{ results.cpmCompact }}</p>
              <p class="mt-0.5 text-[11px] md:text-xs font-mono text-slate-600 break-all" v-html="results.cpmFull || '&nbsp;'"></p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-sky-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">CPC</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.1rem,2.8vw,1.6rem)]">{{ results.cpcCompact }}</p>
              <p class="mt-0.5 text-[11px] md:text-xs font-mono text-slate-600 break-all" v-html="results.cpcFull || '&nbsp;'"></p>
            </div>
            <div class="col-span-2 p-4 rounded-lg border-2 border-slate-900 bg-amber-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">CTR (%)</p>
              <p class="font-extrabold text-slate-900 leading-tight break-words text-[clamp(1.1rem,2.8vw,1.6rem)]">{{ results.ctr }}</p>
              <p class="text-xs text-slate-600">(Click-Through Rate)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="why-us" class="py-10">
      <div class="container mx-auto px-6 max-w-5xl">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-6">Why Use Our Calculator?</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="neo-card p-4 text-center">
            <h3 class="font-bold text-slate-900">Instant & Accurate</h3>
            <p class="text-sm text-slate-600 mt-1">Get precise CPM, CPC, and CTR results immediately as you type.</p>
          </div>
          <div class="neo-card p-4 text-center">
            <h3 class="font-bold text-slate-900">Completely Free</h3>
            <p class="text-sm text-slate-600 mt-1">No sign-ups, no limits. A 100% free tool for all marketers.</p>
          </div>
          <div class="neo-card p-4 text-center">
            <h3 class="font-bold text-slate-900">All-in-One Metrics</h3>
            <p class="text-sm text-slate-600 mt-1">Calculate three core ad metrics in a single, easy-to-use interface.</p>
          </div>
          <div class="neo-card p-4 text-center">
            <h3 class="font-bold text-slate-900">Platform Agnostic</h3>
            <p class="text-sm text-slate-600 mt-1">Works for any platform, from Google Ads and Facebook to TikTok and LinkedIn.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="explain" class="pb-10 pt-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
        <article class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">What are CPM, CPC & CTR?</h3>
          <p class="text-sm text-slate-700 mb-3">These are core metrics for measuring advertising performance and efficiency on any digital platform.</p>
          <div class="p-4 bg-slate-50 border-2 border-slate-900 rounded-lg space-y-2">
            <div>
              <p class="text-sm font-bold">CPM (Cost Per Mille)</p>
              <p class="text-sm">Cost for 1,000 ad impressions. Formula: `(Spend / Impressions) × 1000`</p>
            </div>
            <div>
              <p class="text-sm font-bold">CPC (Cost Per Click)</p>
              <p class="text-sm">Cost for a single click. Formula: `Spend / Clicks`</p>
            </div>
            <div>
              <p class="text-sm font-bold">CTR (Click-Through Rate)</p>
              <p class="text-sm">Percentage of impressions that result in a click. Formula: `(Clicks / Impressions) × 100`</p>
            </div>
          </div>
        </article>
        <aside class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">When to Use CPM vs. CPC</h3>
          <p class="text-sm text-slate-700 mb-3">Choosing the right bidding model depends on your campaign goals.</p>
          <h4 class="text-sm font-extrabold text-slate-900">Use CPM for:</h4>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>Brand Awareness:</strong> To maximize visibility and reach as many people as possible.</li>
            <li><strong>New Product Launches:</strong> To generate initial buzz and introduce your brand to a wide audience.</li>
            <li><strong>Display & Video Ads:</strong> Common for platforms where visual impact is prioritized, such as <strong>Google Display Network, YouTube, or Facebook Ads</strong>.</li>
          </ul>
          <h4 class="mt-4 text-sm font-extrabold text-slate-900">Use CPC for:</h4>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700 space-y-1">
            <li><strong>Performance Marketing:</strong> When the goal is to drive specific actions like sales, leads, or sign-ups.</li>
            <li><strong>Search Ads:</strong> Ideal for capturing high-intent users actively looking for solutions on <strong>Google Search or Bing Ads</strong>.</li>
            <li><strong>Controlling Costs:</strong> You only pay when a user shows genuine interest by clicking.</li>
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
              <span class="font-bold">What does "Mille" in CPM mean?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">"Mille" is Latin for thousand. So, CPM is literally "Cost Per Thousand" impressions.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">Is a high CTR always good?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Mostly, yes. A high CTR indicates your ad is relevant. However, if those clicks don't convert into sales or leads on your website, you may be attracting the wrong audience or have issues with your landing page.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">How do I lower my CPC?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">You can lower CPC by improving your ad's Quality Score (on platforms like Google Ads), which involves increasing ad relevance, improving landing page experience, and achieving a higher expected CTR. Better audience targeting also helps.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">Can I calculate one metric from the others?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Yes. The metrics are related. For example, `CPC = (CPM / 1000) / (CTR / 100)`. This shows that if you can increase your CTR while keeping CPM constant, your CPC will decrease.</div>
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
