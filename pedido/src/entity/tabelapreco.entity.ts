import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tabelapreco'})
export class TabelaPrecoEntity {
    //Representa os atributos da tabela do BD
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, type: 'float'})
    fator: number;
}