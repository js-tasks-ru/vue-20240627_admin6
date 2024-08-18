import { defineComponent, ref, computed} from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstNumber = ref(0);
    const secondNumber = ref(0);
    const picked = ref('sum');
    const result = computed(() => {
      switch(picked.value) {
        case 'sum':
          return firstNumber.value + secondNumber.value
        case 'subtract':
          return firstNumber.value - secondNumber.value
        case 'multiply':
          return firstNumber.value * secondNumber.value
        case 'divide':
          return firstNumber.value / secondNumber.value
        default:
          return 'Error'
      }
    });

    return {
      firstNumber,
      secondNumber,
      picked,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstNumber" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="picked" />➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="picked" />➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="picked" />✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="picked" />➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondNumber" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
