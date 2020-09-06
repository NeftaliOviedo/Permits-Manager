<template>
  <div class="home container">
    
    <div class="row">
      <h2 class="title">List Of Permits</h2>
    </div>

    <div class="row upper-table">
      <div class="col-12">
          <button @click="this.$router.push('/form/permit/Create');" type="button" class="btn btn-info float-right">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
              <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Add Permit
          </button>
      </div>
    </div>
    <PermitList v-bind:permits="this.permits"/>
   
  </div>
</template>

<script>

import PermitList from "../components/PermitList.vue";
import _service from '../service/dataService'
export default {
  name: 'Home',
  components: {
    PermitList,
  },
  data(){
    return {
      permits:[]
    }
  },
  methods:
    {
      GetPemits(){
         _service.getAll().then(response => {
          this.permits = response.data;

          for(let i = 0; i < this.permits.length; i++){
              var arr = response.data[i].fechaPermiso;
                arr = arr.split('T',1);
                this.permits[i].FechaPermiso = arr.toString();
                console.log(this.permits[i].FechaPermiso);
          }
        })
        .catch(e => {
          console.log(e);
        });
      }
    },
    beforeMount(){
      this.GetPemits();
    }
  
}
</script>

<style>
.title{
  margin-top: 20px;
  margin-bottom: 20px;
}

.aling-left{
  align-content:right;
}

.upper-table{
  margin-bottom:15px;
}

</style>

