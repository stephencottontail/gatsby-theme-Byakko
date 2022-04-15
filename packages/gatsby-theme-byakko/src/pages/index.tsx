import React from "react";
import { graphql, PageProps } from "gatsby";

type DataProps = {
	wpPost: {
		blocks: Array<{ saveContent: string }>;
	};
};

const Index = ({ data: { wpPost } }: PageProps<DataProps>) => {
	return (
		<div>
			{wpPost.blocks &&
				wpPost.blocks.map((el, idx) => (
					<div
						key={idx}
						dangerouslySetInnerHTML={{
							__html: el.saveContent,
						}}
					/>
				))}
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
			featuredImage {
				node {
					localFile {
						childImageSharp {
							fluid {
								src
								sizes
							}
						}
					}
				}
			}
		}
	}
`;
