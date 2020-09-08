import axios from "axios";
import swal from 'sweetalert'

var baseURL = "http://localhost:59667/api";
class DataService{
    //API requests
    getAll(){
        return axios.get(baseURL+'/permit/getAll');
    }

    getItem(id){
        return axios.get(baseURL+`/permit/${id}`)
    }

    getPermitTypes(){
        return axios.get(baseURL+'/permitTypes')
    }
    create(data){
        return axios.post(baseURL+'/permit/create',data)
    }
    update(data){
        return axios.put(baseURL+'/permit/edit',data);
    }
    delete(id){
        return axios.delete(baseURL+`/permit/delete/${id}`)
    }   

    //Delete confirmation
    confirmDelete(id){
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.delete(id).then(
                swal("Permit has been deleted!", {
                    icon: "success",
                    })
                )
                
            } else {
                swal("Your file is safe!");
            }
            });
    }

} 

export default new DataService();