<template>
    <div>

       <form>
            <div class="form-row">
                <input v-model="permit.Id" hidden  type="text" class="form-control" id="inputEmail4">
                <div class="form-group col-md-6">
                <label>Name</label>
                <input v-model="permit.EmployeeName" type="text" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-6">
                <label>Lastnames</label>
                <input v-model="permit.EmployeeLastname" type="text" class="form-control" id="inputPassword4">
                </div>
            </div>
     
            <div class="form-row">
                <div class="form-group col-md-4">
                <label for="inputState">Type Of Permit</label>
                <select id="inputState" v-model="permit.PermitTypeId" class="form-control">
                    <option v-for="type in types" v-bind:key="type.id" v-bind:value="+type.id" >{{type.description}}</option>
                </select>
                {{type}}
                </div>
                <div class="form-group col-md-6">
                <label for="example-datepicker">Choose a date</label>
                 <input type="date" v-model="permit.FechaPermiso"/>
                </div>
            </div>
            <a type="button" @click="createOrEdit(permit)" class="btn btn-success mr-4">{{action}}</a>
            <button  @click="this.$router.push('/')"  class="btn btn-danger">Cancel</button>
            </form>
    </div>
</template>



<script>

import _service from '../service/dataService'


export default {
    name:"CreateOrEdit",
    props:["action"],
    data() {
      return {
        types:[],
        permit:{Id:0},
      }
    },
    mounted(){

        _service.getPermitTypes().then(response => {
            this.types = response.data
        })

        if(this.action == "Edit"){
            _service.getItem(this.$route.params.id).then(resp => {
                this.permit.Id = resp.data.id;
                this.permit.EmployeeName = resp.data.employeeName;
                this.permit.EmployeeLastname = resp.data.employeeLastname;
                this.permit.PermitTypeId = resp.data.permitTypeId;


                var arr = resp.data.fechaPermiso;
                arr = arr.split('T',1);
                this.permit.FechaPermiso = arr.toString();

                console.log(this.permit.FechaPermiso)
            })
        

        }
    },
    methods:{
        createOrEdit(data){
            if(this.action == "Edit"){
              _service.update(data).then(this.$router.push('/'))
            }else{
               _service.create(data).then(this.$router.push('/'))
            }

            }
        }
    }

</script>