// hacky fix for missing `WpBlockAttributesObject`
exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions;
	const typeDefs = `
		type WpBlockAttributesObject {
			foobar: String
		}
	`;

	createTypes(typeDefs);
};
