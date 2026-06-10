# John Langford — personal site

A minimalist personal site with a blog, built with [Eleventy](https://www.11ty.dev/).
Posts are plain Markdown files. The design: Century Schoolbook (via the TeX Gyre
Schola webfont), Yale Blue, and a Rebonds-inspired percussion line in the hero.

## How to write a post

1. Copy any file in `src/posts/` (e.g. `why-im-starting-this-blog.md`)
2. Rename it — the filename becomes the URL (`my-new-post.md` → `/writing/my-new-post/`)
3. Edit the top section between the `---` marks:

   ```
   ---
   title: "My new post"
   description: "One sentence shown in the writing index."
   date: 2026-06-15
   ---
   ```

4. Write below the second `---` in Markdown (plain text; `*italics*`, `[links](https://...)`, `> blockquotes`)
5. Delete the two sample posts whenever you like

The homepage index and the RSS feed update automatically on the next build.

## Preview on your computer

Requires [Node.js](https://nodejs.org) (any recent version). In this folder:

```
npm install        # first time only
npm start          # opens a live preview at http://localhost:8080
```

## Deploy (free options)

**Netlify (easiest):**
1. Put this folder in a GitHub repository
2. Sign in to netlify.com with GitHub and click "Add new site → Import an existing project"
3. Pick the repo — the included `netlify.toml` handles the rest
4. Every `git push` republishes the site automatically

**Vercel** works the same way (build command `npm run build`, output directory `_site`).

**GitHub Pages** also works; ask Claude Code to set up the Actions workflow.

After deploying, set your real domain in `src/_data/site.json` (`"url"`) so the
RSS feed links correctly.

## Things you'll want to change

- **Your text:** the lede and about section live in `src/index.njk`;
  name, role, and email live in `src/_data/site.json`
- **Headshot:** drop your new photo at `src/images/headshot.jpg` and change the
  `<img>` src in `src/index.njk` to `/images/headshot.jpg`
- **Colors:** all in one place at the top of `src/css/style.css`
- **Footer year** updates itself

## Working with Claude Code

This project is plain HTML/CSS/Markdown — ideal for iterating with Claude Code.
Open this folder and ask for whatever you need: "add an email subscription box,"
"set up GitHub Pages deployment," "add a publications section," etc.

## Structure

```
src/
  _data/site.json      ← name, role, email, site URL
  _includes/base.njk   ← shared header/footer layout
  _includes/post.njk   ← blog post layout
  index.njk            ← homepage (hero, writing index, about)
  posts/               ← your blog posts (Markdown)
  css/style.css        ← all styling
  images/              ← headshot and any post images
  feed.njk             ← RSS/Atom feed template
eleventy.config.js     ← site build configuration
```
