import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cidade'})
export class CidadeEntity {
    //Representa os atributos da tabela do BD
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: false, length: 2})
    uf: string;
}