# Locale Guard demo: Vue with YAML

A small Vue task board in English, Arabic, French and German, translated with
[vue-i18n](https://vue-i18n.intlify.dev) and YAML locale files. It shows what
[Locale Guard](https://github.com/Mohamed-Almarag/locale-guard) reports on real
pull requests.

## Setup

| | |
|---|---|
| Framework | Vue 3 with Vite |
| Translation library | `vue-i18n`, files loaded by `@intlify/unplugin-vue-i18n` |
| Locale files | `src/locales/{locale}.yaml`, one file per language |
| Base locale | `en` |

The whole setup is one workflow file,
[.github/workflows/translations.yml](.github/workflows/translations.yml):

```yaml
- uses: Mohamed-Almarag/locale-guard@v1
  with:
    files: src/locales/{locale}.yaml
    format: vue-i18n
```

## Pull requests to look at

| Pull request | What it shows | Result |
|---|---|---|
| [#1 Add task filters](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-yaml/pull/1) | A YAML file that no longer parses, a missing key, a list placeholder `{0}` written as `{1}`, a link to a key that does not exist, untranslated text and an extra key | ❌ Fails |
| [#2 Add due date reminders](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-yaml/pull/2) | The first commit forgets French and German, the second one adds them, and the same comment turns green | ✅ Passes |
| [#3 Space out the task list](https://github.com/Mohamed-Almarag/locale-guard-demo-vue-yaml/pull/3) | A change that touches no translation file, so the check finishes in seconds | ✅ Passes |

The `main` branch already has two old issues: a key German never got, and an
empty Arabic value. Locale Guard lists them apart from the issues each pull
request adds, collapsed, and they do not fail the check.

## Run the app

```bash
npm install
npm run dev
```
