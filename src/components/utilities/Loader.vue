<template>
  <v-ons-alert-dialog :visible="localValue">
    <div style="text-align: center">{{ text }}</div>
    <br />
    <v-ons-progress-bar indeterminate></v-ons-progress-bar>
  </v-ons-alert-dialog>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
    },
    text: {
      type: String,
      default: "Cargando",
    },
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  watch: {
    localValue(newValue) {
      this.$emit("input", newValue);
    },
    value(newValue) {
      this.localValue = newValue;
    },
  },
};
</script>

<style>
</style>