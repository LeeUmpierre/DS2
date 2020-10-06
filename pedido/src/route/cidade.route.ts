import { Router } from 'express';
import cidadeController from '../controller/cidade.controller';

class CidadeRoute {
    public router: Router;

    constructor() {
        this.router = Router();

        //Inicio as rotas do cliente
        this.init();
    }

    private init():void {
        this.router.get('/', cidadeController.findAll);
    }

}

export default new CidadeRoute().router;