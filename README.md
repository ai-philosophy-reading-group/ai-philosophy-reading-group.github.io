# AI & Philosophy Reading Group

A small, dependency-free website for GitHub Pages. No build step, package installation, or paid service is required.

## Preview

Open `index.html` in your browser. All content works directly from the folder. Alternatively, run `python3 -m http.server 8000` from this folder and visit http://localhost:8000.

## Publish with GitHub Pages

Recommended: create a dedicated **free GitHub organization**, then create a **public repository named exactly `YOUR-ORG.github.io`** within it. This gives the group `https://YOUR-ORG.github.io/` and makes it easier to share responsibility with future organizers. The name is your choice and must be available. A separate public repository under your personal account also works, with a URL like `https://YOUR-USERNAME.github.io/ai-philosophy-reading-group/`.

1. On GitHub, create the organization (choose the free plan) if you want shared ownership.
2. Create the public repository. Do not replace your personal academic website repository.
3. Choose **Add file → Upload files**. Upload the contents of this folder, not the enclosing folder. `index.html` must be at the repository root. Include `data.js`, `app.js`, `style.css`, `favicon.svg`, and optionally this README. `.nojekyll` is included in the ZIP; if Finder hides it, the site also works without it because it uses no underscore-prefixed assets or Jekyll syntax.
4. Commit the files to `main`.
5. Open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then `main` and `/ (root)`. Save.
6. Wait for the deployment to complete, then use the URL shown in Settings → Pages. Check the Actions tab if deployment fails.
7. Open the public URL on desktop and phone. Check navigation, wrapping, and reading links before circulating it.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Routine updates: edit `data.js`

On GitHub, open `data.js`, select the pencil icon, make your change, and commit. Pages republishes automatically. Keep the quotation marks, commas, and brackets in place. Use double quotes around text containing an apostrophe, or escape it as `\'` within single quotes.

### Add a meeting

Copy this object into the appropriate semester's `meetings` array. Replace the example date and title with confirmed information. Separate objects with commas. Meetings sort by date automatically.

```js
{
  date: 'YYYY-MM-DD',
  start: '13:00', end: '', // Eastern time, 24-hour format. Blank end displays 1:00 PM–.
  topic: 'Confirmed meeting topic',
  description: 'Short description of the session.',
  leader: '', // Optional: confirmed discussion leader
  location: '', // Optional: confirmed public location
  meetingUrl: '', // Optional: link suitable for a public website
  notes: '', // Optional
  readings: [
    { title: 'Paper title', url: 'https://example.org/paper' }
  ]
}
```

For the first meeting the confirmed start/end are `13:00` and `14:00`. Do not copy `first: true` to later meetings. The upcoming label follows the Eastern calendar date automatically; on the meeting day it says “Today”.

### Change a reading or add related material

The reading pool lives in `readingGroups`; each group has a `topic` and a `papers` array. A paper can have a `related` array for associated papers (see Constitutional Classifiers). Listing a paper does not schedule it. The order groups appear in the file is the display order, not a chronology of meetings.

### Contact details

Replace `organizers: []` with confirmed public details, for example:

```js
organizers: [
  { name: 'Confirmed name', affiliation: '', email: 'confirmed@example.org' }
],
```

Empty optional fields do not appear. Affiliations describe individual organizers, not university sponsorship. No names or email addresses have been guessed.

### Add a semester and archive the previous one

1. Copy a semester object inside `semesters` (including its `id`, `label`, `theme`, `scheduleNote`, `meetings`, and `readingGroups`).
2. Give it a new unique ID, e.g. `spring-2027`, and label `Spring 2027`.
3. Replace its theme, schedule note, meetings, and reading groups. An empty `meetings: []` is allowed.
4. Change `currentSemester` at the top to the new ID.
5. Keep previous semester objects in the array. A semester selector appears automatically and labels older semesters “archive”. No moving or duplicating files is needed.
6. Update the short About paragraph in `index.html` when the group's focus changes. Update its metadata description as appropriate.

A semester can be linked directly using `?semester=fall-2026` after the site's URL. Links and styles use relative paths, so both organization homepages and repository Pages URLs work.

## Enable GitHub Discussions and giscus

The temporary Discussion section is intentional. There are no fake buttons or invalid repository links.

1. In your public repository's **Settings → General → Features**, enable **Discussions**.
2. Open the Discussions tab. For the embedded thread, create an **Announcements-format category**, e.g. `Website discussion`. This is the format recommended by giscus: visitors comment through the embed, and maintainers manage the category. You can keep the normal General category for ordinary forum threads.
3. Optionally create Interpretability, AI Safety, Paper Discussions, Reading Suggestions, and Announcements categories later. The initial site does not require all of them.
4. Visit https://giscus.app and follow its link to install the giscus GitHub app. Grant it access to this repository. An organization owner may need to approve installation.
5. Enter `YOUR-ORG/YOUR-ORG.github.io` (or your actual owner/repository). Select the category created above. Choose **specific discussion title**, use `reading-group-general`, and enable strict matching.
6. The generated script includes `data-repo`, `data-repo-id`, `data-category`, and `data-category-id`. Copy those four values into `data.js`:

```js
discussion: {
  repo: 'YOUR-ORG/YOUR-ORG.github.io',
  repoId: 'value from data-repo-id',
  category: 'Website discussion',
  categoryId: 'value from data-category-id'
},
```

7. Commit. `app.js` already creates the script in `<div id="giscus">`. Do not paste a second script. The stable mapping keeps one general conversation across semesters and avoids duplicate threads if the page URL changes.
8. Test the published site: the forum link should open the repository's Discussions, and the embed should load. Visitors can read without an account; posting via giscus requires GitHub sign-in/authorization. Verify an actual comment from your own account before announcing the forum.

If only `repo` is set, the site displays the forum link without attempting to load giscus. The remaining IDs must be real values from giscus. No secrets or tokens belong in these files.

## File guide

- `data.js`: meetings, reading pool, semesters, contacts, discussion configuration.
- `index.html`: page structure, introductory and About text.
- `style.css`: typography, desktop/mobile layouts, print styles, keyboard focus.
- `app.js`: rendering, date formatting, archive selector, optional giscus loading.
- `favicon.svg`: simple ampersand icon.
- `.nojekyll`: tells Pages to serve the files as static assets.

## Validation status — October 6, 2026

JavaScript syntax and rendering logic checked. All 15 supplied reading URLs were retrieved successfully with the web tool; arXiv links use HTTPS. The 2026 Constitutional Classifiers link resolves to Constitutional Classifiers++; it remains grouped with the associated 2025 paper under the supplied short title.

Browser permission denied access to both the local preview and GitHub. Consequently desktop/mobile visual inspection, live giscus testing, and deployment could not be completed in this session. The CSS includes layouts for desktop, tablet, and small phones, but these remain visually unverified. Please preview before public circulation.
