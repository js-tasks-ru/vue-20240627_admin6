import { defineComponent, onMounted, ref, watch } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const radioButtonMin = 1;
    const radioButtonMax = 5;
    const radioButtonCurrent = ref(1);
    const meetupCoverTitle = ref('');

    const fetchData = async (meetupId) => {
      const data = await getMeetup(meetupId);

      meetupCoverTitle.value = data.title;
    };


    onMounted(() => {
      fetchData(radioButtonCurrent.value);
    });

    watch(radioButtonCurrent, (newValue) => {
      fetchData(newValue);
    });

    return {
      radioButtonMin,
      radioButtonMax,
      radioButtonCurrent,
      meetupCoverTitle,
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button
          class="button button--secondary"
          type="button"
          :disabled="radioButtonCurrent <= radioButtonMin"
          @click="radioButtonCurrent--"
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div class="radio-group__button" v-for="radioButtonId in radioButtonMax">
            <input
              :id="\`meetup-id-\${radioButtonId}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="radioButtonId"
              :checked="radioButtonCurrent === radioButtonId"
              @change="radioButtonCurrent = radioButtonId"
            />
            <label :for="\`meetup-id-\${radioButtonId}\`" class="radio-group__label">{{ radioButtonId }}</label>
          </div>
        </div>

        <button
          class="button button--secondary"
          type="button"
          :disabled="radioButtonCurrent >= radioButtonMax"
          @click="radioButtonCurrent++"
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetupCoverTitle }}</h1>
        </div>
      </div>
    </div>
  `,
})
