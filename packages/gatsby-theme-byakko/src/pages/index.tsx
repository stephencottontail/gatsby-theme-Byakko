import React from "react";
import { graphql } from "gatsby";

const Index = (props) => {
	const { data } = props;

	return (
		<div>
			{data.wpPost?.blocks &&
				data.wpPost.blocks.map((el, idx) => (
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
