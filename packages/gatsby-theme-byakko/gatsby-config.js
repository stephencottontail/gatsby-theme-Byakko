module.exports = ({ wpUrl }) => ({
    plugins: [
        {
            resolve: 'gatsby-source-wordpress',
            options: {
                url: wpUrl
            }
        }
    ]
})