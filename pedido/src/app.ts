import express from 'express';
import cors from 'cors';
import {createServer, Server} from 'http';
import socketIO from 'socket.io';

import cidadeRoute from './route/cidade.route'
import clienteRoute from './route/cliente.route'
import pedidoRoute from './route/pedido.route'
import produtoRoute from './route/produto.route'
import tabelaprecoRoute from './route/tabelapreco.route'

export class App {
    private express: express.Application;
    private io: socketIO.Server;

    public server: Server;

    constructor() {
        this.express = express();

        this.middleware();
        this.socket();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(cors());
    }

    private socket(): void {
        this.server = createServer( this.express );
        this.io = socketIO(this.server);
    }

    private routes(): void {
        this.express.use((req, res, next) => {
            req.io = this.io;
            
            next();
        });

        this.express.use('/cidades', cidadeRoute);
        this.express.use('/clientes', clienteRoute);
        this.express.use('/pedidos', pedidoRoute);
        this.express.use('/produtos', produtoRoute);
        this.express.use('/tabelasprecos', tabelaprecoRoute);
    }

}

export default new App();