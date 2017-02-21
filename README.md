# Advanced Markdown with David Wells

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

1. Graymatter

YAML front-matter is your friend. You can keep metadata in markdown files

```
<!--
title: Serverless Framework Documentation
menuText: Docs
layout: Doc
-->
```

2. Remark

Rendering markdown in HTML https://github.com/wooorm/remark

3. Verb

https://github.com/verbose/verb

4. Markdown Magic

https://github.com/DavidWells/markdown-magic

5. Schedule Posts

https://github.com/serverless/post-scheduler

## Using multiple repos

Serverless.com is comprised of 3 separate repositories

- https://github.com/serverless/blog
- https://github.com/serverless/serverless
- https://github.com/serverless/site

### Why 3 repos?

1. We wanted documentation about the framework to live in the serverless github repo for easy access
2. We wanted our blog content to be easily portable to any static site generator separate from the implementation (site)
3. `prebuild` npm script pulls the content together & processes them for site consumption


# Other others

ACSII docs
