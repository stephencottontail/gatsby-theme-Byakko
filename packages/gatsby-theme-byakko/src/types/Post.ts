type Blocks = {
	name: string;
	saveContent: string;
	attributes?: {
		id: number;
		uri: string;
	};
};

type PostProps = {
	wpPost: {
		blocks: Array<Blocks>;
	};
};

export { PostProps, Blocks };
