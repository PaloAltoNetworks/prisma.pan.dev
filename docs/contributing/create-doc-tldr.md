---
id: create-doc-tldr
title: Create a Doc, But Faster
sidebar_label: 6. Create a Doc, Commands Only
---

1. Make sure you have node, yarn, and git installed
2. <a className="button button--secondary button--outline" href="https://github.com/PaloAltoNetworks/prisma.pan.dev/fork" target="_blank"> Fork the Repository </a>
1. ```bash
   git clone https://github.com/<your_username>/prisma.pan.dev.git
   ```
1. ```bash
    cd prisma.pan.dev
   ```
1. ```bash
    yarn
   ```
1. ```bash
    git checkout -b <feature-branch>
   ```
1. ```bash
    yarn start
   ```
1. Create File
  ```bash
    touch docs/tutorials/new-doc.md
   ```
1. Add frontmatter with unique `id`
  ```md title="docs/tutorial/new-doc.md"
  ---
  id: new-doc-id
  title: New Doc
  sidebar_label: New Doc
  ---
  ```
1. Add to sidebar it fits in
  ```json title="sidebars.js"
    cloud: [ // Add your new doc inside an existing sidebar
      {
        type: 'category',
        label: 'Tutorials', // Category label
        items: ['tutorials/api', 'tutorials/new-doc-id'], // Document ID (including relative path after docs)
      },
    ],
  ```
1. ```bash
    yarn start //get live preview of site while editing
   ```
1. Add markdown to file below frontmatter
1. ```bash
    git add .
   ```
1. ```bash
    git commit -m "commit message"
   ```
1. ```bash
    git push origin <feature-branch>
   ```
1. Create a pull request
  - Go to `https://github.com/<your-username>/prisma.pan.dev`
  - In the top left corner under code where is says `master` select the branch you made
  - Just below that you'll see **This branch is XX commits ahead of PaloAltoNetworks:master.** Click the `Contribute` button next to it and then `Open Pull Request`
  - Open pull request from your `<your-username>/<your-feature>` to `PaloAltoNetworks/master`

6. **Check out the deploy preview**

  Now that the pull request is open, we'll automatically generate a preview of the changes and post the URL to view them within the pull request.