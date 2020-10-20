import { Router } from 'express';
import produtoController from '../controller/produto.controller'

class ProdutoRoute {

    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas de produto
        this.init();
    }

    private init(): void {

        this.router.route ('/')
        .get(produtoController.findAll)
        .post(produtoController.create)
        
        this.router.route ('/:id([0-9]+)')
        .get(produtoController.findByID)
        .put(produtoController.update)
        .delete(produtoController.delete)

    }

}

export default new ProdutoRoute().router;