export type ApiResponseType<T> = {
	href: string;
	limit: number;
	next: string | null;
	offset: number;
	previous: string | null;
	total: number;
	items: T[];
};

export type ImageObjectType = {
    url: string;
    height: number | null;
    width: number | null;
}