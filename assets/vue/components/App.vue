<template>
  <div>
    <Toolbar></Toolbar>
    <section style="padding-top: 20px;">
      <div class="container">
        <ul class="row files-list">
          <li class="col-md-3 col-sm-6 text-center" v-for="dir in filesList.dirs">
            <a href="#"><img src="images/folder.png" width="75px" height="75px"><p>{{dir}}</p></a>
          </li>
          <li class="col-md-3 col-sm-6 text-center" v-for="file in filesList.files">
            <a href="#"><img src="images/file.png" width="75px" height="75px"><p>{{file}}</p></a>
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
        files: []
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
