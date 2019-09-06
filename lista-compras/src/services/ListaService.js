import axios from 'axios';


export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: "https://secret-plateau-95576.herokuapp.com/listas"
        });

    }
    async recuperarListas() {
        //puxando do backend
        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;

    };


    async salvar(lista) {      
            let resposta = await this.api .post("/", lista);
        
        
    }
}

