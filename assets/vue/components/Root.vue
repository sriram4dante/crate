<template>
  <div>
    <Toolbar></Toolbar>
    <section style="padding-top: 20px;">
      <div class="container">
        <ul class="row files-list">
          <li class="col-md-3 col-sm-6 text-center" v-for="dir in filesList.dirs">
            <router-link v-bind:to="'/'+dir">
              <img src="images/folder.png" width="75px" height="75px"><p>{{dir}}</p>
            </router-link>
          </li>
          <li class="col-md-3 col-sm-6 text-center" v-for="file in filesList.files">
            <a v-bind:href="'/d/'+file"><img src="images/file.png" width="75px" height="75px"><p>{{file}}</p></a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Toolbar from './Toolbar.vue'

export default {
  name: 'App',
  data: function() {
    return {
      filesList: {
        dirs: [],
        files: [],
        cwd: ""
      }
    }
  },
  components: {
    Toolbar
  },
  mounted: function () {
    this.getFiles();
  },
  methods: {
    getFiles: function() {
      var elem = this
      fetch("/api/files/")
      .then(function(res) { return res.json(); })
      .then(function(data){
        console.log(data);
        elem.filesList = data;
      });
    },
    downloadFile: function(filename) {
      fetch("/api/files/download/", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify( {"filename": filename} )
      })
      .then(function(res) { return res.json(); })
      .then(function(data){
        console.log(data)
      });
    }
  }
}
</script>

<style>
.files-list {
  list-style: none;
}
.files-list li{
  display: inline-block;

}
</style>
