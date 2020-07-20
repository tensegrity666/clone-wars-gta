## [Homepage](https://gta-phaser-promo.netlify.app/)
## [Article on Medium](https://medium.com/@loremipsumrrr/clonewars-gta-8c1da4e202ba)

## [Changelog ](https://github.com/rolling-scopes-school/clonewars-gta/blob/dev/CHANGELOG.md)

* "npm run lint" выполняется автоматически перед любым коммитом.
  * __если сразу после коммита появились несохранённые изменения, значит сработал eslint autofix.__
  __Эти изменения следует добавить к только что сделанному коммиту при помощи "git commit --amend"__

* "git pull" выполняется автоматически перед выполнением "git push".

* текст коммита должен соответствовать [соглашению, принятому в RSSchool](https://docs.rs.school/#/git-convention), иначе будет отклонён линтером.

### Install
* npm i

### Start server
* npm start


#### Run Prettier
* npm run prettier

#### Run linters (includes Prettier, fixes errors)
* npm run lint

#### Show linting errors
* npm run show-errors

#### Build project
* npm run build
