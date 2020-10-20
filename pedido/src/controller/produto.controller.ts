import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { MessageChannel } from "worker_threads";
import { ProdutoEntity } from "../entity/produto.entity";

class ProdutoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const produtos: ProdutoEntity[] = await getRepository(ProdutoEntity).find();
            res.send(produtos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const produto = req.body;

        try {

            await getRepository(ProdutoEntity).save( produto );
            res.status(201).send(produto);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar registro pela ID
            const produto = await getRepository(ProdutoEntity).findOne(id);

            //Se n encontrar produto devolve erro 404
            if (produto) {
                res.send(produto);
            } else {
                res.status(404).send({message: 'Not Found'});
            }
            const produtos: ProdutoEntity[] = await getRepository(ProdutoEntity).find();
            res.send(produtos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar registro pela ID
            const produto = await getRepository(ProdutoEntity).findOne(id);

            //Se n encontrar produto devolve erro 404
            if (produto) {
                //Atualizar registro
                await getRepository(ProdutoEntity).update(produto.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = produto.id;

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
            const produto = await getRepository(ProdutoEntity).findOne(id);

            if (produto) {
                await getRepository(ProdutoEntity).delete(id);

                res.status(204).send();
            } else {
                res.status(404).send({message: 'Not Found'});
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new ProdutoController();