<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-slate-100/80 backdrop-blur-sm border-b-2 border-slate-900">
    <nav class="container mx-auto px-6 py-3 flex justify-between items-center max-w-5xl">
      <NuxtLink to="/" class="flex items-center text-xl font-extrabold text-slate-900 tracking-tight">
        <span>MKT<span class="gradient-text">GROWKIT</span></span>
        <span class="ml-1.5 w-2 h-2 bg-pink-500 rounded-full"></span>
      </NuxtLink>
      <div class="flex items-center space-x-4 md:space-x-6">
        <a href="/#tools" class="hidden md:inline-block text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">Free Tools</a>
        <a href="/#from-the-builder" class="hidden md:inline-block text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors">From The Builder</a>
        <a href="/#newsletter" class="px-4 py-2 text-sm font-bold text-slate-900 bg-sky-400 rounded-lg neo-btn whitespace-nowrap">Get Updates</a>
        <button id="mobile-menu-button" class="md:hidden text-slate-800" aria-label="Toggle menu" @click="toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </nav>
    <div id="mobile-menu" :class="{ 'hidden': !isMobileMenuOpen }" class="md:hidden border-t-2 border-slate-900 bg-white">
      <div class="container mx-auto px-6 py-3 max-w-5xl space-y-2">
        <a href="/#tools" class="block font-bold text-slate-800" @click="isMobileMenuOpen = false">Free Tools</a>
        <a href="/#from-the-builder" class="block font-bold text-slate-800" @click="isMobileMenuOpen = false">From The Builder</a>
      </div>
    </div>
  </header>
</template>
