import { AbstractSurvivor } from '../AbstractSurvivor.js';

export class Team extends AbstractSurvivor {
    constructor() {
        super();
        this.controller = "Team";
        this.name = "";
        this.stadium_name = "";
        this.location = "";
        this.league_id = "";
        this.img_url = "";
    }   
}