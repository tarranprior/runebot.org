exports.createPages = async ({ graphql, actions }) => {
    const { createRedirect } = actions
    createRedirect({
      fromPath: `/support`,
      toPath: `/privacy`,
    })
  }