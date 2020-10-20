import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CidadeEntity } from "./cidade.entity";
import { PedidoEntity } from "./pedido.entity";
import { ProdutoEntity } from "./Produto.entity";

@Entity({name: 'itempedido'})
export class ItemPedidoEntity {
    //Representa os atributos da tabela do BD
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, type:'float'})
    qtidade: number;

    @Column({nullable: false, type:'float'})
    vlrunit: number;

    @ManyToOne(type => ProdutoEntity, {eager: true, nullable: false})
    produto: ProdutoEntity;

    @ManyToOne(type => PedidoEntity, { nullable: false})
    pedido: PedidoEntity;
    
}