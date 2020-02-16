<template>
  <div id="app">
    <main>
      <div class="row">
        <div class="col-md">
          <h5>Prex <span class="badge badge-info">{{ prexs.length }}</span></h5>
          <div class="card">
            <div class="card-body">
              <ul class="list-group">
                <li class="list-group-item" v-for="(prex, index) in prexs" v-bind:key="index">{{ prex }}</li>
              </ul>
              <br>
              <div class="input-group">
                <input class="form-control" type="text" v-model="prefix" @keyup.enter="addPrefix(prefix)" placeholder="Digite o prefixo"/>
                <div class="input-group-append">
                  <button class="btn btn-info" @click="addPrefix(prefix)"><span class="fa fa-plus"></span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function(){
    return  {
      prexs: ['pri', 'seg', 'ter'],
      prefix: ''
    };
  },
  methods: {
    novo() { 
      this.prexs.push(...['qua'])
    },
    addPrefix( prex ){
      this.prexs.push(...[prex])
      this.prefix = ''
    }
  },
  mounted() {
    this.novo()
  }
}
</script>

<style>
  main{
    margin: 10%;
  }
</style>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.css"></style>