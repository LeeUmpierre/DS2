import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'produto'})
export class ProdutoEntity {
    //Representa os atributos da tabela do BD
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 6})
    codigo: string;

    @Column({nullable: false, length: 50})
    nome: string;

    @Column({nullable: true, length: 255})
    descricao: string;

    @Column({nullable: false, type:'float'})
    preco: number;
}