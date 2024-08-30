import { defineComponent } from 'vue'
import WeatherDetailsItem from './WeatherDetailsItem.js'

export default defineComponent({
  name: 'WeatherItem',

  components: {
    WeatherDetailsItem,
  },

  props: {
    item: {
      type: Object,
      required: true,
    },

    weatherConditionIcons: {
      type: Object,
      required: true,
    }
  },

  setup() {
    function convertNumber(value) {
      return value.toFixed(1);
    }

    function convertMmHg(value) {
      return (value * 0.75).toFixed(0);
    }

    function timeComparison(currentTime, sunriseTime, sunsetTime) {
      return currentTime < sunriseTime || currentTime > sunsetTime;
    }

    return {
      convertNumber,
      convertMmHg,
      timeComparison,
    }
  },

  template: `
    <li
      class="weather-card"
      :class="{ 'weather-card--night' : timeComparison(item.current.dt,item.current.sunrise,item.current.sunset) }"
    >
      <div v-if="item.alert" class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{item.alert.sender_name }}: {{item.alert.description }}</span>
      </div>
      <div>
        <h2 class="weather-card__name">
          {{item.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{item.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon"  :title="item.current.weather.description">️{{ weatherConditionIcons[item.current.weather.id] }}</div>
        <div class="weather-conditions__temp">{{ convertNumber(item.current.temp - 273.15) }} °C</div>
      </div>
      <div class="weather-details">
        <weather-details-item
          label-item="Давление, мм рт. ст."
          :value-item="convertMmHg(item.current.pressure)"
        />
        <weather-details-item
          label-item="Влажность, %"
          :value-item="item.current.humidity"
        />
        <weather-details-item
          label-item="Облачность, %"
          :value-item="item.current.clouds"
        />
        <weather-details-item
          label-item="Ветер, м/с"
          :value-item="item.current.wind_speed"
        />
      </div>
    </li>
  `,
})
