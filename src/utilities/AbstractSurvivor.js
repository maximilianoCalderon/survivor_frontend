import axios from "axios";

export class AbstractSurvivor {
    constructor() {
        this.id = 0;
        this.controller = "Default";
        this.created_at = null;
        this.created_by = null;
    }
    async all() {
        let response = await axios.get(this.controller);
        return response.data;
    }
    async data() {
        let response = await axios.get(this.controller + "/data");
        return response.data;
    }
    async retrieve() {
        if (this.id == 0 || this.id == "" || this.id == null) 
            throw "ERROR. Ingrese un id para encontrar el registro"
        let response = await axios.get(this.controller + "/" + this.id);
        return response.data;
    }
    async retrieve_param(_id) {
        if (_id == 0 || _id == "" || _id == null) 
            throw "ERROR. Ingrese un id para encontrar el registro"
        let response = await axios.get(this.controller + "/" + this.id);
        return response.data;
    }
    async save() {
        let response = await axios.post(this.controller, this);
        return response.data;
    }
    async update() {
        if (this.id == 0 || this.id == "" || this.id == null) 
            throw "ERROR. Seleccione un registro para actualizar"
        let response = await axios.put(this.controller + "/" + this.id, this);
        return response.data;
    }
    async delete() {
        if (this.id == 0 || this.id == "" || this.id == null) 
            throw "ERROR. Seleccione un registro para eliminar";
        await axios.delete(this.controller + "/" + this.id);
    }
    async delete_param(_id) {
        if (_id == 0 || _id == "" || _id == null) 
            throw "ERROR. Seleccione un registro para eliminar";
        await axios.delete(this.controller + "/" + _id);
    }
}