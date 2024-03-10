<script>
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      count: 0,
    };
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    increment() {
      this.count++;
      console.log(`Vue: The initial count is ${this.count}.`);
    },
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    console.log(`Vue: The initial count is ${this.count}.`);
  },
};
</script>

<template>
  Vue Component: <button @click="increment">Count is: {{ count }} times</button>
</template>
