<template>
  <div>
    <Menu></Menu>
    <div id="main">
      <DomainList></DomainList>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

import Menu from "./components/Menu";
import DomainList from "./components/DomainList";

export default {
  name: "app",
  components: {
    Menu,
    DomainList
  }
};
</script>

<style>
#slogan {
  margin-top: 80px;
  margin-bottom: 30px;
}
#main {
  background-color: #F1F1F1;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>