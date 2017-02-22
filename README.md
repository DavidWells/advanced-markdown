# Advanced Markdown with David Wells

## Table of Contents
<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText="Click to expand") -->
<details>
<summary>"Click to expand"</summary>
- [Why markdown?](#why-markdown)
- [Formatting tips](#formatting-tips)
  * [`left` alignment](#left-alignment)
  * [`right` alignment](#right-alignment)
  * [`center` alignment example](#center-alignment-example)
- [Useful packages](#useful-packages)
- [Useful Utilities](#useful-utilities)
- [Using multiple repos](#using-multiple-repos)
  * [Why multiple repos?](#why-multiple-repos)
  * [DEMO](#demo)
- [Other Resources](#other-resources)
- [MD magic DEMO](#md-magic-demo)
</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Why markdown?

Markdown is a universal doc format that is easy to write and easy to add to a version control system.

- **Open** - Anyone can submit content, fix typos & update anything via pull requests
- **Version control** - Roll back & see the history of any given post
- **No CMS lock in** - We can easily port to any static site generator
- **It's just simple** - No user accounts to manage, no CMS software to upgrade, no plugins to install.

## Formatting tips

### `left` alignment

<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">

This is the code you need to align images to the left:
```
<img align="left" width="100" height="100" src="http://www.fillmurray.com/100/100">
```

---

### `right` alignment

<img align="right" width="100" height="100" src="http://www.fillmurray.com/100/100">

This is the code you need to align images to the right:
```
<img align="right" width="100" height="100" src="http://www.fillmurray.com/100/100">
```

---

### `center` alignment example

<p align="center">
  <img width="460" height="300" src="http://www.fillmurray.com/460/300">
</p>

```
<p align="center">
  <img width="460" height="300" src="http://www.fillmurray.com/460/300">
</p>
```

---

## Useful packages

1. [gray-matter](https://www.npmjs.com/package/gray-matter)

  YAML front-matter is your friend. You can keep metadata in markdown files

  ```
  <!--
  title: Serverless Framework Documentation
  menuText: Docs
  layout: Doc
  -->
  ```

2. [Remark](https://www.npmjs.com/package/remark)

  Useful for rendering markdown in HTML/React

3. [Markdown Magic](https://github.com/DavidWells/markdown-magic)

- Show Repo
- Show Plugins
- Show automatic doc generation

## Useful Utilities

1. [Schedule Posts](https://github.com/serverless/post-scheduler) - Post scheduler for static sites

Show DEMO

2. [Zero friction inline content editing](https://jekyll-anon.surge.sh/gods/2015/02/18/vesta.html)

Show DEMO

3. [markdown-preview atom plugin](https://atom.io/packages/markdown-preview)

4. [Byword](https://bywordapp.com/) & [Typora](https://typora.io/)

5. Stuck on WordPress? Try [easy-markdown plugin](https://github.com/DavidWells/easy-markdown)

## Using multiple repos

Serverless.com is comprised of 3 separate repositories

- https://github.com/serverless/blog
- https://github.com/serverless/serverless
- https://github.com/serverless/site

### Why multiple repos?

1. We wanted documentation about the framework to live in the serverless github repo for easy access
2. We wanted our blog content to be easily portable to any static site generator separate from the implementation (site)
3. `prebuild` npm script pulls the content together & processes them for site consumption

### DEMO

- Serverless build process
- Editing Flow
- Github optimizations
  - Link from top of each doc to live link on site
  - use markdown magic =) to [auto generate tables](https://github.com/serverless/examples) etc
  - Hide yaml frontmatter from github folks

# Other Resources

- [Verb](https://www.npmjs.com/package/verb) - Documentation generator for GitHub projects
- ACSII docs - Markdown alternative
