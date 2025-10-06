<template>
    <div>
        <section class="py-12 sm:py-12">
            <div class="container mx-auto px-6 max-w-4xl">
                
                <div class="mb-8">
                    <NuxtLink to="/" 
                        class="inline-flex items-center gap-2 font-bold text-slate-600 hover:text-slate-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                        Back to Home
                    </NuxtLink>
                </div>

                <div class="neo-card bg-white p-8 sm:p-10">
                    <div class="text-center">
                        <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                            Terms of Service
                        </h1>
                        <p class="mt-4 text-base text-slate-600">
                            Last Updated: October 6, 2025
                        </p>
                    </div>

                    <div class="mt-12 space-y-6 prose prose-slate max-w-none">
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">1. Acceptance of Terms</h2>
                            <p class="text-slate-700 leading-relaxed">
                                By accessing and using the tools available on mktgrowkit.com (the "Service"), you agree to be bound
                                by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the
                                Service.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">2. Description of Service</h2>
                            <p class="text-slate-700 leading-relaxed">
                                mktgrowkit provides a collection of free, <span class="font-semibold text-slate-900">client-side</span> marketing calculators and tools for modern builders. "Client-side" means all calculations are performed in your
                                browser. We do not store, view, or transmit any data you enter into the calculators.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">3. Use of the Service</h2>
                            <p class="text-slate-700 leading-relaxed mb-4">
                                You agree to use the Service only for its intended purposes. You must not use the Service for
                                any illegal or unauthorized purpose. You agree not to:
                            </p>
                            <ul class="list-disc list-inside space-y-2 pl-4 text-slate-700">
                                <li>Attempt to reverse engineer, decompile, or otherwise discover the source code of the Service.</li>
                                <li>Use any automated system, such as "bots" or "scrapers," to access the Service.</li>
                                <li>Interfere with or disrupt the integrity or performance of the Service.</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">4. Disclaimer of Warranties</h2>
                            <p class="text-slate-700 leading-relaxed">
                                The Service is provided on an <span class="font-semibold text-slate-900">"as is"</span> and <span class="font-semibold text-slate-900">"as available"</span> basis. mktgrowkit makes no warranties,
                                expressed or implied, and hereby disclaims all other warranties. The calculations and data provided are for informational purposes only and
                                should not be considered financial or business advice.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">5. Limitation of Liability</h2>
                            <p class="text-slate-700 leading-relaxed">
                                In no event shall mktgrowkit or its owner be liable for any damages (including, without
                                limitation, damages for loss of data or profit, or due to business interruption) arising out of
                                the use or inability to use the materials on mktgrowkit.com.
                            </p>
                        </div>
                        
                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">6. Changes to Terms</h2>
                            <p class="text-slate-700 leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time. Your continued use of the Service after any such changes constitutes
                                your acceptance of the new Terms.
                            </p>
                        </div>

                        <div>
                            <h2 class="text-2xl font-extrabold text-slate-900 mb-3">7. Contact Us</h2>
                            <p class="text-slate-700 leading-relaxed">
                                If you have any questions about these Terms, please contact us through the links provided on the
                                website, such as our <a href="https://x.com/MaxSlashWang" target="_blank" rel="noopener noreferrer" class="font-semibold text-sky-600 hover:text-sky-800 transition-colors">Twitter profile</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
