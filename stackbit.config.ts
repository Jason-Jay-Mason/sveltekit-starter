import { defineStackbitConfig } from "@stackbit/types"
import { GitContentSource } from "@stackbit/cms-git"
import { page, Hero } from "./src/lib/stackbit/models"

export default defineStackbitConfig({
	stackbitVersion: "~0.6.0",
	contentSources: [
		new GitContentSource({
			rootPath: __dirname,
			contentDirs: ["content"],
			models: [page, Hero],
			assetsConfig: {
				referenceType: "static",
				staticDir: "static",
				uploadDir: "images",
				publicPath: "/"
			}
		})
	]
})
