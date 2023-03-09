---
id: contributing
title: Contributing Guidelines
sidebar_label: Contributing Guidelines
hide_title: true
hide_table_of_contents: true
slug: /contributing
keywords:
  - contributing
---
import CardLayout from "@theme/CardLayout";

# Contributing Guidelines

Thank you for your interest in **Palo Alto Networks** developer documentation!

Select how you like to contribute:
<div className="row">
<article className="col col--6 padding--sm">
<CardLayout
      href={'/docs/contributing/create-doc-reqs'}
      title="Create"
      description="Create a new doc and add it to the site"
/>
</article>
<article className="col col--6 padding--sm">
<CardLayout
      href={'/docs/contributing/create-doc-tldr'}
      title="Create Doc (Commands only)"
      description="Create a new doc, commands only (assuming you know git, yarn, bash)"
/>
</article>
<article className="col col--6 padding--sm">
<CardLayout
      href={'#edit'}
      title="Edit"
      description="Edit an existing doc"
/>
</article>
<article className="col col--6 padding--sm">
<CardLayout
      href={'https://github.com/PaloAltoNetworks/prisma.pan.dev/issues/new?labels=documentation&amp;template=developer-documentation-issue.md&amp;title=Issue with Docs'}
      target="_blank"
      title="Report"
      description="Report an issue with the docs"
/>
</article>
<article className="col col--6 padding--sm">
<CardLayout
      href={'https://github.com/PaloAltoNetworks/prisma.pan.dev/issues/new?labels=documentation&amp;template=feature_request.md&amp;title=Request'}
      title="Request"
      target="_blank"
      description="Request a new feature or docs"
/>
</article>
</div>

### Edit
1. Select `Edit This Page` at the bottom of the doc you want to edit. If the page doesn't have the option, report an issue above instead.
2. In the top right select the pencil icon "Fork this repo and edit this file"
3. Make edits in github.com UI
4. Add a title and comment to the commit at the bottom of the page
5. Press Propose Changes
6. Press Create Pull Request
7. Now that the pull request is open, we'll automatically generate a preview of the changes and post the URL to view them within the pull request. This can take a few minutes
8. Someone will review and merge your changes 
