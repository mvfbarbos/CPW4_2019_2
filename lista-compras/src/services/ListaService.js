export default class ListaService {

    constructor() {
        this.listas = [];

    }
    async recuperarListas() {
        //puxando do backend
        let requisicao =
            await fetch("http://localhost:3001/listas");
        let dados = await requisicao.json();
        this.listas = dados;
        return this.listas;
    }

}
