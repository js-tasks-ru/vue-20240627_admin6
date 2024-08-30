import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherItem from './WeatherItem.js'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherItem,
  },

  setup() {
    return {
      getWeatherData,
      WeatherConditionIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul v-for="item in getWeatherData()" class="weather-list unstyled-list">
        <weather-item :item="item" :weather-condition-icons="WeatherConditionIcons" />
      </ul>
    </div>
  `,
})
