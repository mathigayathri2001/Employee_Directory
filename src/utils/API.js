
import axios from "axios";

const url = 'https://randomuser.me/api/?results=15&nat=ca';

//api call
export default {
    search: function () {
        console.log(url)
        return axios.get(url)

    }
}