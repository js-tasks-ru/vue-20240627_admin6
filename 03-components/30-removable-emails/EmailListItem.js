import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },

    marked: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['deleteEmailItem'],

  methods: {
    clickDeleteEmail() {
      this.$emit('deleteEmailItem');
    }
  },

  template: `
    <li :class="{ marked }">
      {{ email }}
      <button
        type="button"
        aria-label="Удалить"
        @click.stop
        @click="clickDeleteEmail"
      >❌</button>
    </li>
  `,
})
