import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const firstNumber = ref(0);
    const secondNumber = ref(0);
    const picked = ref('sum');
    const result = ref(0);

    watch([firstNumber, secondNumber, picked], () => {
      switch(picked.value) {
        case 'sum':
          return result.value = firstNumber.value + secondNumber.value
        case 'subtract':
          return result.value = firstNumber.value - secondNumber.value
        case 'multiply':
          return result.value = firstNumber.value * secondNumber.value
        case 'divide':
          return result.value = firstNumber.value / secondNumber.value
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
