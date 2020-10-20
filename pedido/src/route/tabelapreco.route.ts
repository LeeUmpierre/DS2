import { Router } from 'express';
import tabelaprecoController from '../controller/tabelapreco.controller'

class TabelaPrecoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de tabelapreco
        this.init();
    }

    private init(): void {

        this.router.route ('/')
        .get(tabelaprecoController.findAll)
        .post(tabelaprecoController.create)
        
        this.router.route ('/:id([0-9]+)')
        .get(tabelaprecoController.findByID)
        .put(tabelaprecoController.update)
        .delete(tabelaprecoController.delete)

    }

}

export default new TabelaPrecoRoute().router;