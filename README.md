# ☀ Solecitos' Website

Homepage for [Solecitos e.V.](https://www.solecitos.de/), a bilingual preschool kindergarten in Hannover, Germany.

## Feature Requests/TODO

- [x] Mobile first UX
- [x] Staff cards
- [x] Crayon font
- [x] Logo pngs with translucent background
- [x] Automate deployment on main with github actions per release
- [x] anmeldung@solecitos.de hinterlegen
- [ ] Popup dialog for news
- [ ] Staff cards
- [ ] Sticky header
- [ ] email einheitlich
- [x] impressum datenschutz underscore
- [x] replace images with free license ones
- [ ] PDF Flyer einpflegen
- [x] bei home sind die cards nicht mittig beim pixel

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

## Docker

```bash
docker build -t solecitos .
```

Then, you can run either

```bash
docker run -p 3000:3000 -v $(pwd):/solecitos solecitos
```

or use docker-compose and run

```bash
docker compose up
```

## Deployment

Production branch is `main` with Semver.

Deployment is done automatically via github actions for each push on main with version number in commit message on branch gh-pages

Manually, this can be achieved via

```bash
npm deploy
```

following [react-gh-pages](https://github.com/gitname/react-gh-pages).

## Precommit Lint

Lint and formatting check are done via pre-commit. The configuration file is .precommit-config.yaml and checks need node version 14 which can be set via

```bash
nvm install 14
```

## License

Copyright Solecitos

Author Chris Schindlbeck
