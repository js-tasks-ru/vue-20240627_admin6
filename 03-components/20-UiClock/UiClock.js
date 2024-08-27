import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' }));

    const updateTime = () => {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, { timeStyle: 'medium' });
    };

    onMounted(() => {
      const intervalId = setInterval(updateTime, 1000);

      // Очистка интервала при размонтировании компонента
      onUnmounted(() => {
        clearInterval(intervalId);
      });
    });

    return {
      currentTime,
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
