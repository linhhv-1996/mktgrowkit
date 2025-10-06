<script setup lang="ts">
definePageMeta({
  layout: 'tool'
});

useHead({
  title: 'ROAS & Break-Even ROAS Calculator | mktgrowkit',
  meta: [
    { name: 'description', content: 'Free, fast ROAS calculator. Compute Return on Ad Spend & find your Break-Even ROAS from profit margin. Includes formula, examples, and tips.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mktgrowkit.com/roas-calculator' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {"@type": "Question","name": "What is ROAS?","acceptedAnswer": {"@type": "Answer","text": "ROAS (Return on Ad Spend) measures revenue generated per dollar of ad spend. The formula is: ROAS = Revenue / Ad Spend."}},
          {"@type": "Question","name": "What is Break-Even ROAS?","acceptedAnswer": {"@type": "Answer","text": "Break-Even ROAS is the minimum ROAS you need to cover your cost of goods and ad spend without losing money. The formula is: 1 / Profit Margin (%). It's crucial for setting profitable advertising goals."}},
          {"@type": "Question","name": "What is a good ROAS?","acceptedAnswer": {"@type": "Answer","text": "It varies by industry and margin. A good ROAS must be higher than your Break-Even ROAS. Many e‑commerce brands aim for 3x–5x on cold traffic."}},
          {"@type": "Question","name": "ROAS vs ROI – what’s the difference?","acceptedAnswer": {"@type": "Answer","text": "ROAS only considers ad spend, not all business costs. ROI considers total costs and returns. A campaign can have high ROAS but low ROI if other costs are high."}},
          {"@type": "Question","name": "How do I improve ROAS?","acceptedAnswer": {"@type": "Answer","text": "Improve ROAS by tightening ad targeting, improving creatives, raising your conversion rate (CVR), increasing AOV with bundles/upsells, and reducing CPC."}}
        ]
      })
    }
  ]
});

const mode = ref('simple'); // 'simple' or 'advanced'

// Simple inputs
const revenueSimple = ref<number | null>(null);
const spendSimple = ref<number | null>(null);

// Advanced inputs
const impressions = ref<number | null>(null);
const ctr = ref<number | null>(null);
const cpc = ref<number | null>(null);
const cvr = ref<number | null>(null);
const aov = ref<number | null>(null);

// **NEW**: Profit Margin input for Break-Even ROAS
const profitMargin = ref<number | null>(null);

// Formatters
const fmtMoney = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return '$' + v.toLocaleString(undefined,{minimumFractionDigits:2, maximumFractionDigits:2}); };
const fmtMoneyCompact = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',notation:'compact',maximumFractionDigits:2}).format(v); };
const fmtX = (v: number) => { if (isNaN(v) || !isFinite(v)) return '—'; return v.toFixed(2) + 'x'; };

const results = computed(() => {
  let revenue = 0, spend = 0;

  if (mode.value === 'advanced') {
    const impVal = impressions.value || 0;
    const ctrVal = (ctr.value || 0) / 100;
    const cpcVal = cpc.value || 0;
    const cvrVal = (cvr.value || 0) / 100;
    const aovVal = aov.value || 0;

    const clicks = impVal * ctrVal;
    spend = clicks * cpcVal;
    const orders = clicks * cvrVal;
    revenue = orders * aovVal;
  } else {
    revenue = revenueSimple.value || 0;
    spend = spendSimple.value || 0;
  }

  const roas = spend > 0 ? revenue / spend : NaN;

  // **NEW**: Break-Even ROAS calculation
  const marginVal = profitMargin.value || 0;
  const breakEvenRoas = marginVal > 0 ? 1 / (marginVal / 100) : NaN;

  let note = '';
  if (!isNaN(roas) && !isNaN(breakEvenRoas)) {
     if (roas < breakEvenRoas) {
      note = `Your ROAS of ${roas.toFixed(2)}x is *below* your break-even point of ${breakEvenRoas.toFixed(2)}x. You are likely losing money after accounting for cost of goods.`;
    } else if (Math.abs(roas - breakEvenRoas) < 1e-9) {
      note = `Your ROAS of ${roas.toFixed(2)}x matches your break-even point. You are covering ad spend and cost of goods, but not making a profit.`;
    } else {
      note = `For every $1 spent, you earn $${roas.toFixed(2)}. This is above your break-even point of ${breakEvenRoas.toFixed(2)}x, generating profit.`;
    }
  } else if (!isNaN(roas)) {
     if (roas < 1) {
      note = `For every $1 spent, you earn $${roas.toFixed(2)} — losing money on ad spend alone.`;
    } else {
       note = `For every $1 spent, you earn $${roas.toFixed(2)}. Enter a profit margin to see if you are profitable overall.`;
    }
  }


  return {
    roasX: fmtX(roas),
    roasP: isNaN(roas) ? '—' : (roas * 100).toFixed(1) + '%',
    breakEvenRoasX: fmtX(breakEvenRoas), // New result
    revenueCompact: fmtMoneyCompact(revenue),
    revenueFull: revenue ? `≈ ${fmtMoney(revenue)}` : '',
    spendCompact: fmtMoneyCompact(spend),
    spendFull: spend ? `≈ ${fmtMoney(spend)}` : '',
    note,
  };
});

function reset() {
  revenueSimple.value = null;
  spendSimple.value = null;
  impressions.value = null;
  ctr.value = null;
  cpc.value = null;
  cvr.value = null;
  aov.value = null;
  profitMargin.value = null;
}
</script>

<template>
  <div>
    <section class="py-10 sm:py-14">
      <div class="container mx-auto px-6 text-center max-w-3xl">
        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
          ROAS & Break-Even ROAS Calculator
        </h1>
        <p class="mt-3 text-slate-600">Our free online ROAS calculator helps you compute Return on Ad Spend and find the break-even point you need to be profitable.</p>
      </div>
    </section>

    <section id="calculator" class="pb-6">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-5 gap-6">
        <div class="lg:col-span-3 neo-card p-6">
          <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-extrabold text-slate-900">Inputs</h2>
            <div class="inline-flex rounded-lg border-2 border-slate-900 overflow-hidden">
              <button @click="mode = 'simple'" type="button" class="px-3 py-1.5 text-sm font-bold" :class="mode === 'simple' ? 'bg-violet-300' : 'bg-white'">Simple</button>
              <button @click="mode = 'advanced'" type="button" class="px-3 py-1.5 text-sm font-bold" :class="mode === 'advanced' ? 'bg-violet-300' : 'bg-white'">Breakdown</button>
            </div>
          </div>
          
          <div class="mb-4">
              <label class="block text-sm font-semibold text-slate-800">Profit Margin (%)</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">%</span>
                <input v-model.number="profitMargin" type="number" min="0" max="100" step="0.1" placeholder="e.g., 45" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
              <p class="text-xs text-slate-500 mt-1">Your margin *before* ad spend. Used to calculate Break-Even ROAS.</p>
          </div>
          
          <hr class="border-slate-300 my-4" />

          <div v-if="mode === 'simple'" class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-slate-800">Revenue</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="revenueSimple" type="number" min="0" step="0.01" placeholder="e.g., 2500" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold text-slate-800">Ad Spend</label>
              <div class="mt-1 flex">
                <span class="inline-flex items-center px-3 border-2 border-r-0 border-slate-900 rounded-l-lg bg-slate-50 text-sm">$</span>
                <input v-model.number="spendSimple" type="number" min="0" step="0.01" placeholder="e.g., 800" class="w-full px-3 py-2 border-2 border-slate-900 rounded-r-lg focus:outline-none" />
              </div>
            </div>
          </div>

          <div v-if="mode === 'advanced'" class="space-y-4">
             <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-semibold text-slate-800">Impressions</label>
                <input v-model.number="impressions" type="number" min="0" step="1" placeholder="e.g., 100000" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-800">CTR (%)</label>
                <input v-model.number="ctr" type="number" min="0" step="0.01" placeholder="e.g., 1.5" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-800">CPC ($)</label>
                <input v-model.number="cpc" type="number" min="0" step="0.01" placeholder="e.g., 0.50" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-800">CVR (%)</label>
                <input v-model.number="cvr" type="number" min="0" step="0.01" placeholder="e.g., 2.0" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
              </div>
              <div>
                <label class="block text-sm font-semibold text-slate-800">AOV ($)</label>
                <input v-model.number="aov" type="number" min="0" step="0.01" placeholder="e.g., 45" class="w-full px-3 py-2 border-2 border-slate-900 rounded-lg focus:outline-none" />
              </div>
            </div>
            <p class="text-xs text-slate-600">Breakdown math: Clicks = Impressions × CTR. Spend = Clicks × CPC. Orders = Clicks × CVR. Revenue = Orders × AOV.</p>
          </div>

          <div class="pt-5 flex gap-3">
            <button @click="reset" type="button" class="px-4 py-2 font-bold text-slate-900 bg-white rounded-lg neo-btn">Reset</button>
          </div>
        </div>

        <ClientOnly>
        <div class="lg:col-span-2 neo-card p-6 h-fit">
          <h2 class="text-lg font-extrabold text-slate-900 mb-4">Results</h2>
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-teal-50 min-w-0 col-span-2">
              <p class="text-sm font-semibold text-slate-700">Break-Even ROAS</p>
              <p class="font-extrabold text-slate-900 leading-tight break-all text-[clamp(1.5rem,3.5vw,2rem)]">{{ results.breakEvenRoasX }}</p>
              <p class="text-xs text-slate-600">(1 ÷ Profit Margin)</p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-emerald-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Actual ROAS</p>
              <p class="font-extrabold text-slate-900 leading-tight break-all text-[clamp(1.1rem,2.8vw,1.6rem)]">{{ results.roasX }}</p>
              <p class="text-xs text-slate-600">(Revenue ÷ Ad Spend)</p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-amber-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Actual ROAS (%)</p>
              <p class="font-extrabold text-slate-900 leading-tight break-all text-[clamp(1.1rem,2.8vw,1.6rem)]">{{ results.roasP }}</p>
              <p class="text-xs text-slate-600">(ROAS × 100)</p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-sky-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Revenue</p>
              <p class="font-extrabold text-slate-900 leading-tight break-all text-[clamp(1rem,2.4vw,1.4rem)]">{{ results.revenueCompact }}</p>
              <p class="mt-0.5 text-[11px] md:text-xs font-mono text-slate-600 break-all" v-html="results.revenueFull || '&nbsp;'"></p>
            </div>
            <div class="p-4 rounded-lg border-2 border-slate-900 bg-fuchsia-50 min-w-0">
              <p class="text-xs font-semibold text-slate-700">Ad Spend</p>
              <p class="font-extrabold text-slate-900 leading-tight break-all text-[clamp(1rem,2.4vw,1.4rem)]">{{ results.spendCompact }}</p>
              <p class="mt-0.5 text-[11px] md:text-xs font-mono text-slate-600 break-all" v-html="results.spendFull || '&nbsp;'"></p>
            </div>
          </div>
          <p class="mt-4 text-xs font-semibold text-slate-800 bg-slate-100 p-2 rounded-md">{{ results.note }}</p>
        </div>
</ClientOnly>

      </div>
    </section>
    
    <section id="explain" class="py-10">
      <div class="container mx-auto px-6 max-w-5xl grid lg:grid-cols-2 gap-6">
        <article class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">What is ROAS?</h3>
          <p class="text-sm text-slate-700 mb-3">ROAS (Return on Ad Spend) tells you the revenue ratio for every dollar you spend on ads. It's a key metric for measuring the effectiveness of an online advertising campaign.</p>
          <div class="p-4 bg-slate-50 border-2 border-slate-900 rounded-lg">
            <p class="text-sm font-bold">Formula</p>
            <p class="text-sm">ROAS = Revenue ÷ Ad Spend</p>
            <p class="text-sm">Example: If you spent $800 and made $2,400, your ROAS is 3.0x (300%).</p>
          </div>
          <h4 class="mt-4 text-sm font-extrabold text-slate-900">Benchmarks (rough)</h4>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700">
            <li>Cold traffic e‑commerce: 2x–4x typical; 5x+ is strong.</li>
            <li>Subscription/Apps with strong LTV: can tolerate lower initial ROAS.</li>
            <li>High‑margin products: aim higher since margins allow scaling.</li>
          </ul>
        </article>
        <aside class="neo-card p-6">
          <h3 class="text-lg font-extrabold text-slate-900 mb-2">ROAS vs. ROI</h3>
          <p class="text-sm text-slate-700 mb-3">ROAS considers only ad spend. ROI considers all costs (COGS, ops, fees). High ROAS doesn’t guarantee profit if other costs are high.</p>
          <h4 class="text-sm font-extrabold text-slate-900">Ways to improve ROAS</h4>
          <ul class="mt-1 list-disc list-inside text-sm text-slate-700">
            <li>Increase CVR (better landing pages, faster load, clarity).</li>
            <li>Increase AOV (bundles, upsells, free‑shipping thresholds).</li>
            <li>Lower CPC (better relevance/Quality Score, refine targeting).</li>
            <li>Refine creatives (hook, offer, proof, clear CTA).</li>
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
              <span class="font-bold">What is Break-Even ROAS?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">Break-Even ROAS is the point where your ad campaign's revenue equals the ad spend plus the cost of the goods sold. Formula: 1 ÷ Profit Margin. If your margin is 40%, your break-even ROAS is 1 / 0.40 = 2.5x. Any ROAS below this means you're losing money overall.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">How do I set a Target ROAS?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">To set a Target ROAS for profitability, you need to know your Profit Margin and your desired Net Profit goal. For example, if your product margin is 50% and you want to make a 20% net profit after ad costs, your Target ROAS would be: 1 / (50% - 20%) = 1 / 0.30 = 3.33x. This becomes your minimum goal for campaigns.</div>
          </details>
           <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">What is a good ROAS?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">A "good" ROAS is always higher than your Break-Even ROAS. While many stores aim for 3x–5x on cold traffic, the real answer depends on your specific profit margin and business goals.</div>
          </details>
          <details class="faq-item neo-card p-4">
            <summary class="flex items-center justify-between cursor-pointer select-none">
              <span class="font-bold">Is ROAS the same as ROI?</span>
              <svg class="w-5 h-5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>
            </summary>
            <div class="pt-3 text-sm text-slate-700">No. ROI includes all costs and returns; ROAS only compares revenue to ad spend.</div>
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
