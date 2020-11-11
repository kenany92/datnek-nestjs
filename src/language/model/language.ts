import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Language {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    name: string;

    @Column({nullable: false})
    spoken: string;

    @Column({nullable: false})
    written: string;

    @Column({nullable: false})
    understanding: string;
}
