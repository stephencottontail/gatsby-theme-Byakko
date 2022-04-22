module.exports = ({ wpUrl }) => ({
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: wpUrl,
				html: {
					useGatsbyImage: true,
					placeholderType: "tracedSVG",
				},
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
	],
});
