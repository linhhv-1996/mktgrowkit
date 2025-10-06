<template>
  <footer class="bg-slate-100 border-t-2 border-slate-900">
    <div class="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm max-w-5xl">
      <div class="text-center md:text-left">
        <p class="font-extrabold text-slate-900">MKT<span class="gradient-text">GROWKIT</span></p>
        <p class="text-slate-600 font-medium">&copy; 2025 mktgrowkit.com. A #buildinpublic project.</p>
      </div>
      <div class="flex space-x-6 mt-4 md:mt-0 font-semibold text-slate-700">
        <NuxtLink to="/privacy" class="hover:text-slate-900 transition-colors">Privacy</NuxtLink>
        <NuxtLink to="/terms" class="hover:text-slate-900 transition-colors">Terms</NuxtLink>
        <a href="https://x.com/MaxSlashWang" target="_blank" rel="noopener noreferrer" class="hover:text-slate-900 transition-colors" aria-label="Twitter">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
        </a>
      </div>
    </div>
  </footer>
</template>
