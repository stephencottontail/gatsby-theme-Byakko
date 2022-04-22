import React from "react";

const ComponentParser = (props) => {
	const { block } = props;

	switch (block.name) {
		default:
			return (
				<div dangerouslySetInnerHTML={{ __html: block.saveContent }} />
			);
	}
};

export default ComponentParser;
