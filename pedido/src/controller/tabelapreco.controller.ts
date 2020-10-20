import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { MessageChannel } from "worker_threads";
import { TabelaPrecoEntity } from "../entity/tabelapreco.entity";

class TabelaPrecoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const tabelaprecos: TabelaPrecoEntity[] = await getRepository(TabelaPrecoEntity).find();
            res.send(tabelaprecos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const tabelapreco = req.body;

        try {

            await getRepository(TabelaPrecoEntity).save( tabelapreco );
            res.status(201).send(tabelapreco);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar registro pela ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            //Se n encontrar tabelapreco devolve erro 404
            if (tabelapreco) {
                res.send(tabelapreco);
            } else {
                res.status(404).send({message: 'Not Found'});
            }
            const tabelaprecos: TabelaPrecoEntity[] = await getRepository(TabelaPrecoEntity).find();
            res.send(tabelaprecos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar registro pela ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            //Se n encontrar tabelapreco devolve erro 404
            if (tabelapreco) {
                //Atualizar registro
                await getRepository(TabelaPrecoEntity).update(tabelapreco.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = tabelapreco.id;

                res.send(novo);

            } else {
                res.status(404).send({message: 'Not Found'});
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }
    public async delete(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar registro pela ID
            const tabelapreco = await getRepository(TabelaPrecoEntity).findOne(id);

            if (tabelapreco) {
                await getRepository(TabelaPrecoEntity).delete(id);

                res.status(204).send();
            } else {
                res.status(404).send({message: 'Not Found'});
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new TabelaPrecoController();