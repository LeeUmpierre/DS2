import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CidadeEntity } from "./cidade.entity";
import { TabelaPrecoEntity } from "./tabelapreco.entity";

@Entity({name: 'cliente'})
export class ClienteEntity {
    //Representa os atributos da tabela do BD
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 50})
    email: string;

    //ligacao de muitos para um
    //eager: true ligacao de inner join, sem n faz ligacao
    @ManyToOne(type => TabelaPrecoEntity, {eager: true, nullable: false})
    tabelapreco: TabelaPrecoEntity;

    @ManyToOne(type => CidadeEntity, {eager: true, nullable: false})
    cidade: CidadeEntity;

}