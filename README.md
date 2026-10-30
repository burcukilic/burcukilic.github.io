# Burcu Kılıç — academic website

A light-theme, static academic website adapted from Jon Barron's template. No installation, compilation, Jekyll, Node.js, or third-party scripts are required.

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

- `index.html`: biography, social links, six illustrated publications, education, and compact experience highlights.
- `stylesheet.css`: shared typography, spacing, colors, venue badges, and mobile layout.
- `projects/effect-driven-skill-abstractions/project.css`: the wider project layout, light abstract/citation boxes, paired figures, and responsive media galleries.
- `projects/effect-driven-skill-abstractions/media.js`: plays visible video clips, keeps manually paused clips paused, and respects reduced-motion preferences.
- `projects/effect-driven-skill-abstractions/index.html`: the paper project page, including its abstract, affiliations, method, figures, and citation. See the media instructions below to add GIFs or videos.
- `assets/Burcu_Kilic_CV.pdf`: the copied CV PDF; replace this file to update the downloadable CV.
- `assets/images/burcu-kilic.jpeg`: the copied original portrait.
- `data/publications.bib`: full original bibliography, including DOI, volume, issue, and page metadata. The homepage keeps paper/arXiv/code links without per-publication BibTeX controls.
- `data/cv.yml`: preserved structured CV source. It is a reference copy; editing it does not automatically change the HTML or PDF. Keep the HTML, PDF, and reference data aligned when updating your information.
- `cv/index.html`: a CV download and reading page; the `/cv/` URL remains available.
- `publications/index.html`: forwards the previous `/publications/` URL to the homepage publication section.
- `404.html`, `robots.txt`, and `sitemap.xml`: error page and search-engine metadata.

The fonts are served locally. There are no analytics tags, theme switches, external image dependencies, or template demonstration entries.

## Credits

Website content © 2026 Burcu Kılıç.

Adapted from the supplied [Jon Barron website template](https://github.com/jonbarron/jonbarron.github.io), whose README permits cloning for personal use.

Source Sans 3 is © Adobe and distributed under the SIL Open Font License; see `assets/fonts/OFL.txt`.

## Project figures and citation

The Effect-Driven Skill Abstractions project page includes the full research abstract and author affiliations from the final manuscript. The manuscript's temporary “project page in progress” sentence is omitted. The affiliations retain the paper's numbering, including Bogazici University as Burcu's paper affiliation.

The project figures are copied into `projects/effect-driven-skill-abstractions/figures/`. PDF figures have PNG previews; clicking a figure opens its original PDF. The comprehensive environment montage comes from the supplied `environments (1).pdf`. Both prediction/execution figures appear side by side on larger screens and stack on phones. The removed maze start/goal visualization is not displayed. Five predicted visual outcomes use the standalone originals from `visual-scene-seed1-selected` to illustrate the meaning of the learned skill codes. The webpage has no dependency on the manuscript, Downloads, or slide folders.

The paper citation is `projects/effect-driven-skill-abstractions/citation.bib`. It uses the author spellings from the manuscript and is shown in the project page’s citation box. No unconfirmed proceedings volume, page range, or DOI has been added.

## Add execution or effect-prediction GIFs

1. Copy your GIFs into `projects/effect-driven-skill-abstractions/media/`. Use short filenames without spaces, such as `antmaze-execution.gif` and `effect-prediction.gif`.
2. Open `projects/effect-driven-skill-abstractions/index.html`. Search for the comment `Add execution GIFs` in the evaluation section, or `Add effect-prediction GIFs` in the predictions section.
3. Paste this markup at the desired position, using your filenames and captions:

   ```html
   <div class="media-grid">
     <figure>
       <img src="media/antmaze-execution.gif"
            alt="AntMaze agent reaching a goal by executing discrete skills"
            loading="lazy">
       <figcaption>AntMaze execution. Colors identify the selected skills.</figcaption>
     </figure>
     <figure>
       <img src="media/effect-prediction.gif"
            alt="Predicted skill outcomes compared with executed trajectories"
            loading="lazy">
       <figcaption>Predicted effects and the resulting trajectories.</figcaption>
     </figure>
   </div>
   ```

4. Preview locally with `python3 -m http.server 8000`, then open <http://localhost:8000/projects/effect-driven-skill-abstractions/>. Commit and push the HTML and media files when ready.

For longer recordings, an MP4 is generally smaller and offers playback controls. Put it in the same `media/` folder and replace the `<img>` with:

```html
<video controls playsinline preload="metadata"
       aria-label="AntMaze execution with discrete skills">
  <source src="media/antmaze-execution.mp4" type="video/mp4">
  <a href="media/antmaze-execution.mp4">Download the execution video</a>
</video>
```

The existing `media-grid` styles arrange clips responsively. Added MP4 clips automatically use the project’s visibility and motion-preference handling. No build step is needed.


## Animations from the presentation

The project page includes four trained-policy GIFs from `neurips_slides` as smaller, looping MP4 clips with poster images and playback controls. Their filenames and source mappings are recorded in `projects/effect-driven-skill-abstractions/media/sources.json`.

- `dgcbc-visual-antmaze.mp4`: trained D-GCBC policy executions with pixel observations.
- `dgciql-puzzle-play.mp4`: trained D-GCIQL policy executions in Puzzle.
- `dgcbc-pusht-sample1.mp4` and `dgcbc-pusht-sample2.mp4`: the two D-GCBC examples from the presentation.
The tested-environment figure provides environment context; environment-illustration videos are not displayed.

The GIF timing is preserved in the MP4 conversions. Videos play while visible, pause offscreen, and remain paused by default when reduced motion is requested. Visitors can pause or resume any clip using its controls. The paper names in the project text link to their original papers.


## Homepage publication previews

The six left-hand previews live in `assets/publications/`. Static figures are resized losslessly for sharp thumbnails while preserving their full composition. The supplied figures are `bilevel_planning_ss.png`, `joint_discovery_figure.png`, `predictability_based.png`, and `learning_action_primitives.png`.

The NeurIPS preview uses only the successful lower-left execution from `dgciql_puzzle_play.gif`: a 160×158 crop at (0, 160), ending at 2.46 seconds before the completion fade. The top goal row is excluded. Social navigation uses the supplied `social_navigation.gif`. Both animations are served as small looping MP4s with a still poster, pause/play controls, and reduced-motion support in `assets/publication-previews.js`.

Publication titles are plain text; use the paper, arXiv, code, and project links below them. The Bilevel Planning entry includes the RA-L abbreviation and the IROS 2026 RoBoWoMo Workshop Best Paper Award.
