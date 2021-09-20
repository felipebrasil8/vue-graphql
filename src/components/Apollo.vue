<template>
  <div>{{ countries }}</div>
</template>

<script>
import { COUNTRIES } from "../graphql/countries.query.gql"

export default {
  name: 'Apollo',
  data: function () {
    return {
      countries: '',
    };
  },
  mounted() {
    this.$apollo.query({
      query: COUNTRIES,
    })
    .then(response => {
      this.countries = response
    })
  }
}
</script>