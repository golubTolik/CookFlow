<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    show(newVal) {
      if (newVal) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    }
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = this.getScrollbarWidth() + 'px';
    },
    enableScroll() {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    },
    getScrollbarWidth() {
      // Создаем временный элемент для измерения ширины скроллбара
      const outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.overflow = 'scroll';
      document.body.appendChild(outer);
      
      const inner = document.createElement('div');
      outer.appendChild(inner);
      
      const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
      outer.parentNode.removeChild(outer);
      
      return scrollbarWidth;
    }
  },
  beforeUnmount() {
    this.enableScroll();
  }
}
</script>

<template>
  <div class="bg-[rgba(0,0,0,0.5)] fixed flex top-0 bottom-0 left-0 right-0 z-1000 items-center justify-center overflow-y-auto" v-if="show" @click="$emit('update:show', false)">
    <div class="!m-auto bg-white relative rounded-[12px] !p-[20px]  !min-w-[300px] !min-h-[50px] overflow-y-auto" @click.stop>
        <button class="absolute top-[0px] text-gray-800 right-[15px] bg-none border-none text-[1.5rem] cursor-pointer" @click="$emit('update:show', false)">×</button>
        <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>