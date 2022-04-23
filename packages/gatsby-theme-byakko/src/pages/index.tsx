import React from "react";
import { graphql, PageProps } from "gatsby";

import { PostProps } from "../types/Post";
import ComponentParser from "../components/ComponentParser";

const Index = ({ data: { wpPost } }: PageProps<PostProps>) => {
	return (
		<div>
			{wpPost.blocks &&
				wpPost.blocks.map((el, idx) => {
					return <ComponentParser key={idx} block={el} />;
				})}
		</div>
	);
};

export default Index;

export const query = graphql`
	query {
		wpPost(slug: { eq: "post-w-image-featured-image" }) {
			blocks {
				name
				saveContent
				... on WpCoreImageBlock {
					attributesJSON
				}
			}
		}
	}
`;
