import React from "react";
import { Blocks } from "../types/Post";
interface ComponentParserProps {
	block: Blocks;
}

const ComponentParser = (props: ComponentParserProps) => {
	const { block } = props;

	switch (block.name) {
		default:
			return (
				<div dangerouslySetInnerHTML={{ __html: block.saveContent }} />
			);
	}
};

export default ComponentParser;
