import type { ObjectModel } from '@stackbit/types';

export type Hero = {
	type: 'Hero';
	heading: string;
	body: string;
	image: {
		src: string;
		alt: string;
	};
};

export const Hero: ObjectModel = {
	name: 'Hero',
	type: 'object',
	fields: [{ name: 'heading', type: 'string', required: true, default: 'SvelteKit Starter' }]
};
