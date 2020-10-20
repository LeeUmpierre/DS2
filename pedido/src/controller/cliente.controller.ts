import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { MessageChannel } from "worker_threads";
import { ClienteEntity } from "../entity/cliente.entity";

class ClienteController {
    
    public async findAll(req: Request, res: Response) {

        try {

            const clientes: ClienteEntity[] = await getRepository(ClienteEntity).find();
            res.send(clientes);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async create(req: Request, res: Response) {

        const cliente = req.body;

        try {

            await getRepository(ClienteEntity).save( cliente );
            res.status(201).send(cliente);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async findByID(req: Request, res: Response) {
        const id = req.params.id;

        try {
            //Buscar registro pela ID
            const cliente = await getRepository(ClienteEntity).findOne(id);

            //Se n encontrar cliente devolve erro 404
            if (cliente) {
                res.send(cliente);
            } else {
                res.status(404).send({message: 'Not Found'});
            }
            const clientes: ClienteEntity[] = await getRepository(ClienteEntity).find();
            res.send(clientes);

        } catch (error) {
            res.status(500).send(error);
        }

    }

    public async update(req: Request, res: Response) {
        const id = req.params.id;
        const novo = req.body;

        try {
            //Buscar registro pela ID
            const cliente = await getRepository(ClienteEntity).findOne(id);

            //Se n encontrar cliente devolve erro 404
            if (cliente) {
                //Atualizar registro
                await getRepository(ClienteEntity).update(cliente.id, novo);

                //Atualiza o ID do objeto novo
                novo.id = cliente.id;

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
            const cliente = await getRepository(ClienteEntity).findOne(id);

            if (cliente) {
                await getRepository(ClienteEntity).delete(id);

                res.status(204).send();
            } else {
                res.status(404).send({message: 'Not Found'});
            }

        } catch (error) {
            res.status(500).send(error);
        }

    }

}

export default new ClienteController();