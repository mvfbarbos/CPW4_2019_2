import axios from "axios";

export default class SeriesService {

    constructor() {
        this.service = axios.create({
            baseURL:"http://api.tvmaze.com/search/"
        });
    }

    pesquisar(nomeSerie) {
        const consulta =`/shows?q=${nomeSerie}`;
        //retorna a Promise(promessa)
       return this.service.get(consulta);
    }
}