<template>
  <div>
    <Menu></Menu>
    <div id="main">
      {{ countries }}
    </div>
  </div>
</template>

<script>
import { COUNTRIES } from "../graphql/countries.query.gql"

import Menu from "./Menu";

export default {
  name: 'Apollo',
  components: {
    Menu
  },
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