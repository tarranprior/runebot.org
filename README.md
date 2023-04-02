# Runebot.gg
[![Netlify Status](https://api.netlify.com/api/v1/badges/05a5d027-6b37-4a85-bf7c-6b385e16e43b/deploy-status)](https://app.netlify.com/sites/runebot-gg/deploys)

The official website for Runebot. Built with Gatsby and styled-components.

## Live Demo
You can view a live version of this website [here](runebot-gg.netlify.app/).

![Preview](https://i.imgur.com/KAJiiXI.png)

## Installation
1. Fork and clone the repository.
  ```bash
  # Clone the repo
  git clone https://github.com/your_username/gatsby-discord-bot-website.git
  cd gatsby-discord-bot-website
  ```
2. Install the dependencies.
  ```bash
  # Install the dependencies
  npm install
  ```
3. Install Gatsby CLI
  ```bash
  # Install Gatsby CLI
  npm install -g gatsby-cli
  ```
4. Start the development server.
  ```bash
  gatsby develop # or npm run develop
  ```

## Colour Reference
| Colour  | Hex |
| ------------- | ------------- |
| Dark Grey  | ![#1d1e28](https://via.placeholder.com/10/1d1e28?text=+) `#1d1e28` |
| Grey  | ![#2b2c3b](https://via.placeholder.com/10/2b2c3b?text=+) `#2b2c3b` |
| Light Grey  | ![#c4c4cb](https://via.placeholder.com/10/c4c4cb?text=+) `#c4c4cb` |
| Lightest Grey | ![#e7e7ea](https://via.placeholder.com/10/e7e7ea?text=+) `#e7e7ea` |
| White | ![#f3f3f6](https://via.placeholder.com/10/f3f3f6?text=+) `#f3f3f6` |
| Blurple | ![#5865f2](https://via.placeholder.com/10/5865f2?text=+) `#5865f2` |

## References
<details>
  <summary>Gatsby's Starter Setup Guide (https://github.com/gatsbyjs/gatsby-starter-hello-world)</summary>
  <!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
  <br/>
  <p align="center">
    <a href="https://www.gatsbyjs.com">
      <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
    </a>
  </p>
  <h1 align="center">
    Gatsby's hello-world starter
  </h1>

  Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

  _Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

  ## 🚀 Quick start

  1.  **Create a Gatsby site.**

      Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the hello-world starter.

      ```shell
      # create a new Gatsby site using the hello-world starter
      gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
      ```

  1.  **Start developing.**

      Navigate into your new site’s directory and start it up.

      ```shell
      cd my-hello-world-starter/
      gatsby develop
      ```

  1.  **Open the source code and start editing!**

      Your site is now running at `http://localhost:8000`!

      Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries).

      Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

  ## 🚀 Quick start (Netlify)

  Deploy this starter with one click on [Netlify](https://app.netlify.com/signup):

  [<img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

  ## 🧐 What's inside?

  A quick look at the top-level files and directories you'll see in a typical Gatsby project.

      .
      ├── node_modules
      ├── src
      ├── .gitignore
      ├── gatsby-browser.js
      ├── gatsby-config.js
      ├── gatsby-node.js
      ├── gatsby-ssr.js
      ├── LICENSE
      ├── package.json
      └── README.md

  1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

  1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

  1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

  1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/) for more detail).

  1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

  1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

  1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

  1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

  1.  **`README.md`**: A text file containing useful reference information about your project.

  ## 🎓 Learning Gatsby

  Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

  - **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

  - **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

  ## 💫 Deploy

  [Build, Deploy, and Host On Netlify](https://netlify.com)

  The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. And also the best place to build, deploy, and host your Gatsby sites.

  <!-- AUTO-GENERATED-CONTENT:END -->
</details>