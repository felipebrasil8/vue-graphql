<template>
  <div>OI?</div>
</template>

<script>
import { COUNTRIES } from "../graphql/countries.query.gql"

export default {
  name: 'Apollo',
  mounted() {
    console.log(this.$apollo)
    this.$apollo.query({
      query: COUNTRIES,
    })
    .then(response => {
      console.log(response)
    })
  }
}
</script>