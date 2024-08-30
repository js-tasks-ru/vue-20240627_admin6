import {defineComponent, watch, ref, computed} from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const currentCount = computed(() => props.count);

    const reachedMin = computed(() => currentCount.value <= props.min);
    const reachedMax = computed(() => currentCount.value >= props.max);

    const decrement = () => {
      emit('update:count', currentCount.value -= 1)
    }

    const increment = () => {
      emit('update:count', currentCount.value += 1)
    }

    return {
      currentCount,
      decrement,
      increment,
      reachedMin,
      reachedMax
    }
  },

  template: `
    <div class="counter">
      <UiButton
        aria-label="Decrement"
        :disabled="reachedMin"
        @click="decrement"
      >➖</UiButton>
      <span class="count" data-testid="count">{{ currentCount }}</span>
      <UiButton
        aria-label="Increment"
        :disabled="reachedMax"
        @click="increment"
      >➕</UiButton>
    </div>
  `,
})
