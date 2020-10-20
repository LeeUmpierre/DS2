import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { MessageChannel } from "worker_threads";
import { PedidoEntity } from "../entity/pedido.entity";

class PedidoController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const pedidos: PedidoEntity[] = await getRepository(PedidoEntity).find();
            res.send(pedidos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const pedido = req.body;

        try {

            await getRepository(PedidoEntity).save( pedido );
            res.status(201).send(pedido);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar registro pela ID
            const pedido = await getRepository(PedidoEntity).findOne(id);

            //Se n encontrar pedido devolve erro 404
            if (pedido) {
                res.send(pedido);
            } else {
                res.status(404).send({message: 'Not Found'});
            }
            const pedidos: PedidoEntity[] = await getRepository(PedidoEntity).find();
            res.send(pedidos);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar registro pela ID
            const pedido = await getRepository(PedidoEntity).findOne(id);

            //Se n encontrar pedido devolve erro 404
            if (pedido) {
                //Atualizar registro
                await getRepository(PedidoEntity).update(pedido.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = pedido.id;

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
            const pedido = await getRepository(PedidoEntity).findOne(id);

            if (pedido) {
                await getRepository(PedidoEntity).delete(id);

                res.status(204).send();
            } else {
                res.status(404).send({message: 'Not Found'});
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new PedidoController();