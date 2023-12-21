import type { PageContent } from "$lib/stackbit/models"
import { error } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types"
import matter from "gray-matter"

export const prerender = true

export const load: PageServerLoad = async ({ params }) => {
	const path = `content/pages/${params.slug}.md`
	try {
		const content = matter.read(path).data as PageContent
		content.path = path
		return {
			content
		}
	} catch (err) {
		throw error(404, "Page not found")
	}
}
