import axios from 'axios';


export default class ListaService {

    constructor() {
        this.listas = [];
        this.api=axios.create({
            baseURL:"http://localhost:3001"
        });

    }
    async recuperarListas() {
        //puxando do backend
        let resposta = await this.api.get('/listas');
        this.listas = resposta.data;
        return this.listas;

    }
}
