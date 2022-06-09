import axios from 'axios';

//Criamos a variável chamada apie atribuímos a ela axios.create, 
//que será o início e a estrutura base do serviço de API que consumiremos.
const api = axios.create({
    //Recebendo a URL da API que será acessada
    baseURL: 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce'
});

export default api; 