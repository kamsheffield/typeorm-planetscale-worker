import { DataSource } from "typeorm"
import { PhotoAlbum } from "./entity/PhotoAlbum"
import { Env } from "./Env"

export function createDataSource(env: Env): DataSource {
    return new DataSource({
        name: "planetscale",
        type: "planetscale-serverless",
        url: env.DATABASE_URL,
        disableForeignKeyConstraints: true,
        entities: [PhotoAlbum],
        synchronize: true,
        logging: ["query"],
        // subscribers: [],
        migrations: [],
    })
}
