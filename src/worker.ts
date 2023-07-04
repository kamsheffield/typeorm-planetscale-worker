import "reflect-metadata"
import { PhotoAlbum } from "./entity/PhotoAlbum";
import { v4 as uuid } from 'uuid';
import { createDataSource } from "./PlanetScaleDataSource";
import { Env } from "./Env";

let planetScaleDataSource = null

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		console.log(request.url);

		if (!planetScaleDataSource) {
			console.log("Initializing data source with env: ", env.DATABASE_URL)
			planetScaleDataSource = createDataSource(env)
			await planetScaleDataSource.initialize()
			console.log("Initialized")
		}

		if (request.url.endsWith("/insert")) {
			const photo = new PhotoAlbum()
			photo.id = uuid()
			photo.name = "Me and Bears"
			photo.description = "I am near polar bears"
			photo.filename = "photo-with-bears.jpg"
			photo.views = 1
			photo.isPublished = true

			await planetScaleDataSource.manager.save(photo)
			console.log("Photo has been saved. Photo id is", photo.id)
			return new Response("Inserted photo with id: " + photo.id)
		} else {
			const photoRepository = planetScaleDataSource.manager.getRepository(PhotoAlbum)
			const allPhotos = await photoRepository.find()
			console.log("All photos from the db: ", allPhotos)
			return new Response("All photos from the db: " + JSON.stringify(allPhotos))
		}
	},
};
