import type { MDXInstance, Page } from "astro";


interface IElement {
	readonly as?: keyof HTMLElementTagNameMap;
}


type PaginationLink = {
	url: string;
	text?: string;
	srLabel?: string;
};

interface Post {
	title: string;
	description: string;
	publishDate?: Date;
	tags?: string[];
}

export type {
	MDXInstance,
	Page,
	IElement,
	PaginationLink,
	Post,
};
