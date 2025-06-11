<script>
export default {
  props: {
    title: String,
    options: Array,
    modelValue: Array, // Используем v-model для двухстороннего связывания
  },
  data() {
    return {
      isOpen: true
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
    updateSelection(option, isChecked) {
      let newValue = [...this.modelValue];
      if (isChecked) {
        newValue.push(option);
      } else {
        newValue = newValue.filter(item => item !== option);
      }
      this.$emit('update:modelValue', newValue);
    }
  }
};
</script>

<template>
  <div class="filter-section">
    <div 
      class="!font-bold text-gray-700 !mb-3 !pb-2 border-b border-gray-300 font-[Comfortaa] cursor-pointer flex justify-between items-center"
      @click="toggle"
    >
      <h3>{{ title }}</h3>
      <svg 
        class="w-5 h-5 transition-transform duration-300" 
        :class="{ 'rotate-180': !isOpen }" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
    <div v-show="isOpen" class="space-y-2 mt-3 max-h-60 overflow-y-auto">
      <div 
        v-for="option in options" 
        :key="option"
        class="filter-option"
      >
        <label class="flex items-center cursor-pointer py-1 px-2 rounded" @selectstart.prevent>
          <input 
            type="checkbox"
            :value="option"
            :checked="modelValue.includes(option)"
            @change="updateSelection(option, $event.target.checked)"
            class="rounded text-orange-500 focus:ring-orange-500"
          >
          <span class="!ml-2 text-gray-600">{{ option }}</span>
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.filter-section {
  transition: all 0.3s ease;
}
.filter-option {
  transition: background-color 0.2s;
}
.filter-option:hover {
  background-color: #f3f4f6;
}

/* Стили для скролла */
.max-h-60::-webkit-scrollbar {
  width: 6px;
}
.max-h-60::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}
.max-h-60::-webkit-scrollbar-thumb {
  background: #c5c5c5;
  border-radius: 4px;
}
.max-h-60::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>