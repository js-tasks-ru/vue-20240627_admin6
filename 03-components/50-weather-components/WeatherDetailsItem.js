import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherDetailsItem',

  props: {
    labelItem: {
      type: String,
      required: true,
    },

    valueItem: {
      type: [Number, String],
      required: true,
    },
  },

  template: `
    <div class="weather-details__item">
      <div class="weather-details__item-label">{{ labelItem }}</div>
      <div class="weather-details__item-value">{{ valueItem }}</div>
    </div>
  `,
})
