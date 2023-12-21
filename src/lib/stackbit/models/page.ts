import type { PageModel } from '@stackbit/types';
import type { Hero } from './Hero';

export type PageBlock = Hero;

export type PageContent = {
	path: string;
	title: string;
	types: string;
	blocks: PageBlock[];
};

export const page: PageModel = {
	name: 'page',
	type: 'page',
	hideContent: true,
	urlPath: '/{slug}',
	filePath: 'content/pages/{slug}.md',
	fields: [
		{ name: 'title', type: 'string', required: true },
		{ name: 'blocks', type: 'list', items: { type: 'model', models: ['Hero'] } }
	]
};
