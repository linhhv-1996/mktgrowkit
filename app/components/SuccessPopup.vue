<script setup>
// Định nghĩa props để component cha có thể truyền dữ liệu vào
const props = defineProps({
  show: Boolean
})

// Định nghĩa event để component con có thể báo cho cha biết khi nó muốn đóng
const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="show" class="fixed inset-0 bg-slate-900 bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center p-6">
    <div class="neo-card bg-white p-8 rounded-lg max-w-sm w-full text-center relative animate-fade-in-up">
      <button @click="emit('close')" class="absolute top-4 right-4 text-slate-500 hover:text-slate-900 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>

      <div class="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 border-2 border-slate-900 mx-auto mb-6">
        <svg class="w-9 h-9 text-emerald-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>

      <h2 class="text-2xl font-extrabold text-slate-900 mb-2">You're on the list!</h2>
      <p class="text-slate-600 mb-8">
        Welcome aboard! You'll be the first to know when our Pro Tools launch.
      </p>

      <a href="https://x.com/MaxSlashWang" target="_blank" rel="noopener noreferrer" class="w-full px-7 py-3 font-bold text-slate-900 bg-sky-400 rounded-lg neo-btn">
        Follow on Twitter →
      </a>
    </div>
  </div>
</template>

<style>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}
</style>
