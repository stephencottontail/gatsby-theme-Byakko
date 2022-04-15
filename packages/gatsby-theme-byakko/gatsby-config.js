module.exports = ({ wpUrl }) => ({
	plugins: [
		{
			resolve: "gatsby-source-wordpress",
			options: {
				url: wpUrl,
				html: {
					useGatsbyImage: false,
				},
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
	],
});
