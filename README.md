# Burcu Kılıç — academic website

A light-theme, static academic website adapted from Jon Barron's template, with a compact layout inspired by Seohong Park's website. No installation, compilation, Jekyll, Node.js, or third-party scripts are required.

## Preview locally

Open Terminal and run:

```bash
cd /Users/brc/workspace/burcukilic.github.io
python3 -m http.server 8000
```

Visit <http://localhost:8000>. Press Control-C to stop the server.

## Publish to burcukilic.github.io

Your existing GitHub repository is `burcukilic/burcukilic.github.io`. These steps replace the previous site on its `main` branch while retaining its commit history. They do not change your archived local site.

1. Sign in to GitHub as **burcukilic** and open <https://github.com/burcukilic/burcukilic.github.io>.

2. Open Terminal in the new website folder. Run this setup **once**. It connects this folder to the existing repository and imports its history; your new website files stay in place:

   ```bash
   cd /Users/brc/workspace/burcukilic.github.io
   git init -b main
   git remote add origin https://github.com/burcukilic/burcukilic.github.io.git
   git fetch origin
   git reset --mixed origin/main
   ```

3. Stage the migration and review the list. The old template files appear as deletions because the new site replaces them:

   ```bash
   git add -A
   git diff --cached --stat
   ```

4. Commit and upload:

   ```bash
   git commit -m "Migrate academic website to a static Jon Barron style layout"
   git push -u origin main
   ```

   Complete GitHub authentication if prompted. If Git requests your author identity, run the following, then repeat the commit and push:

   ```bash
   git config user.name "Burcu Kılıç"
   git config user.email "burcu0kilic@gmail.com"
   ```

   If a push is rejected because the remote changed since step 2, run `git pull --rebase origin main`, resolve any reported conflicts, and push again. Do not force-push.

5. In the repository, open **Settings → Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/(root)**, and click **Save**. The included `.nojekyll` file lets GitHub serve the static files directly. [GitHub publishing-source documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

6. If **Custom domain** contains an old domain, clear it and save so the site uses `burcukilic.github.io`. Enable **Enforce HTTPS** when available. The template's domain configuration has not been copied.

7. Open the repository's **Actions** tab and wait for **pages build and deployment** to succeed. Allow up to 10 minutes for publication. [GitHub Pages setup documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

8. Visit **<https://burcukilic.github.io/>** and check your CV, social links, publications, and **<https://burcukilic.github.io/projects/effect-driven-skill-abstractions/>**. If you still see a cached page, hard-refresh with Command-Shift-R.

The site is self-contained: deleting the archived website or template folders will not affect it.

## Future updates

After editing and previewing:

```bash
git add -A
git commit -m "Update website"
git push
```

GitHub Pages republishes automatically from `main`.

## What to edit

- `index.html`: biography, social links, news, all six publications, education, experience, skills, and repository links.
- `stylesheet.css`: shared typography, spacing, colors, venue badges, and mobile layout.
- `projects/effect-driven-skill-abstractions/index.html`: the initial project page. Add the abstract, figures, videos, and code link here when ready.
- `assets/Burcu_Kilic_CV.pdf`: the copied CV PDF; replace this file to update the downloadable CV.
- `assets/images/burcu-kilic.jpeg`: the copied original portrait.
- `data/publications.bib`: full original bibliography, including DOI, volume, issue, and page metadata. Each homepage publication also has an expandable BibTeX citation.
- `data/cv.yml`: preserved structured CV source. It is a reference copy; editing it does not automatically change the HTML or PDF. Keep the HTML, PDF, and reference data aligned when updating your information.
- `cv/index.html`: a CV download and reading page; the `/cv/` URL remains available.
- `publications/index.html`: forwards the previous `/publications/` URL to the homepage publication section.
- `404.html`, `robots.txt`, and `sitemap.xml`: error page and search-engine metadata.

The fonts are served locally. There are no analytics tags, theme switches, external image dependencies, or template demonstration entries.

## Credits

Website content © 2026 Burcu Kılıç.

Adapted from the supplied [Jon Barron website template](https://github.com/jonbarron/jonbarron.github.io), whose README permits cloning for personal use. The layout and typography are inspired by [Seohong Park's website](https://seohong.me/).

Source Sans 3 is © Adobe and distributed under the SIL Open Font License; see `assets/fonts/OFL.txt`.
