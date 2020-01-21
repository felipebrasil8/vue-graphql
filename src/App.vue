<template>
  <div id="app">
    <main>
      <div class="row">
        <div class="col-md">
          <h5>Prex <span class="badge badge-info">{{ prexs.length }}</span></h5>
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item" v-for="prex in prexs" v-bind:key="prex">{{ prex }}</li>
              </ul>
              <br>
              <input type="text" name="prex" class="form-control" placeholder="Digite seu prefixo">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import "bootstrap/dist/css/bootstrap.css"
  import "font-awesome/css/font-awesome.css"

export default {
  name: 'app',
  data: function(){
    return  {
      prexs: ['pri', 'seg', 'ter']
    };
  }
}
</script>

<style>
  main{
    margin: 10%;
  }
</style>
