import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class PhotoAlbum {
    @PrimaryGeneratedColumn("uuid", { name: "id" })
    id: string

    @Column("varchar")
    name: string

    @Column("varchar")
    description: string

    @Column("varchar")
    filename: string

    @Column("int")
    views: number

    @Column("boolean")
    isPublished: boolean
}
