export interface Product {
    id: number; // a "?" significa que o id é opcional, pois quando vamos criar o dado, não precisamos enviar o id pois ele é autoincrementado na tabela do banco
    name: string;
    price: number;
}