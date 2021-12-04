import axios from 'axios';
export class User {
    constructor() {
        this.controller = "users";
        this.username = "";
        this.name = "";
        this.lastname = "";
        this.email = "";
        this.password = "";
        this.birthday = null;
        this.token = null;
    }   

    async login() {
        let response = await axios.post(this.controller + "/login", this);
        return response.data;
    }

    async register() {
        let response = await axios.post(this.controller + "/register", this);
        return response.data;
    }

    async sendConfirmation() {
        let response = await axios.post("email/confirmation/" + this.username, this);
        return response.data;
    }

     async sendRecovery() {
        let response = await axios.post(this.controller + "/password/recovery", this);
         return response.data;
     }

      async changePassword() {
          let response = await axios.post(this.controller + "/password/change", this);
          return response.data;
      }

     async passwordRequest() {
         let response = await axios.get(this.controller + "/password/request/" + this.username);
         return response.data;
     }
}