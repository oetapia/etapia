exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreatePage = ({
  page,
  actions: { createPage, deletePage },
}) => {
  const frontmatter = page.context.frontmatter;
  if (frontmatter && frontmatter.type === "post") {
    deletePage(page);
    createPage({
      ...page,
      path: `/posts${page.path}`,
    });
  }
};
