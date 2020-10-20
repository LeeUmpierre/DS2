import express from 'express';
import cors from 'cors';

import cidadeRoute from './route/cidade.route';
import clienteRoute from './route/cliente.route';
import pedidoRoute from './route/pedido.route';
import produtoRoute from './route/produto.route';
import tabelaprecoRoute from './route/tabelapreco.route';

export class App {

    public express : express.Application;

    constructor() {
        this.express = express();

        this.middleware();
        this.routes();
    }

    private middleware() {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private routes() :void {
        this.express.use('/cidades', cidadeRoute);
        this.express.use('/clientes', clienteRoute);
        this.express.use('/pedido', pedidoRoute);
        this.express.use('/produtos', produtoRoute);
        this.express.use('/tabelasprecos', tabelaprecoRoute);

    }

}

export default new App().express;