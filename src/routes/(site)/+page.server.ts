import matter from "gray-matter"
import type { PageServerLoad } from "./$types"
import type { PageContent } from "$lib/stackbit/models"
import { error } from "@sveltejs/kit"

export const load: PageServerLoad = async () => {
  try {
    const path = "content/pages/index.md"
    const content = matter.read(path).data as PageContent
    content.path = path
    return {
      content
    }
  } catch (err) {
    throw error(404, "Page not found")
  }
}
