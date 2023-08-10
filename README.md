# ☀ Solecitos' Website

Homepage for [Solecitos e.V.](https://www.solecitos.de/), a bilingual preschool kindergarten in Hannover, Germany.

## Feature Requests/TODO

- [x] Mobile first UX
- [x] Logo pngs with translucent background
- [x] Automate deployment on main with github actions per release
- [ ] Staff cards
- [ ] Crayon font
- [ ] Popup dialog for news
- [ ] Bilingual (german/spanish)
- [ ] Contact form, probably needs SMTP server
- [ ] Sticky header

## Development

Development is done on `devel` branch, with feature branches.

To develop locally, install dependencies via

```bash
npm install
```

Then, run the website on [localhost:3000](http://localhost:3000/) via

```bash
npm start
```

## Deployment

Production branch is `main` with Semver.

Deployment is done automatically via github actions for each push on main with version number in commit message on branch gh-pages

Manually, this can be achieved via

```bash
npm deploy
```

following [react-gh-pages](https://github.com/gitname/react-gh-pages).

## License

Copyright Solecitos
Author Chris Schindlbeck
