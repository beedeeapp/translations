# BeeDee Translations

Our existing translations are listed under the [translations](./translations) folder.
Each file corresponds to one language, named after the [ISO 639 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), e.g. `en` for English, `es` for Spanish...

You can contribute by adding missing translations, or improving existing translations:

- Go to the [translation file](./tree/main/translations) of a language you are proficient in. (Entries marked `<missing>` are not translated yet.)
- Next, also open the [english translation](./translations/en.yml), which is the reference for all translations.
- Identify any translation you want to add or adjust, and [open an issue](../../issues/new/choose).
  You'll have to fill some fields:
     - **Title**, not that important, but a meaningful title helps to get an overview of what is still in our review queue.
	   Ideally, include the language you are helping with. E.g.: `Additional Spanish translations`
	 - **Language**: select the language you are helping with from the dropdown. E.g.: `es`
	 - **Translations**: enter any translations you'd like to update.
	   You can simply copy the relevant sections from your language file (e.g. `es.yml`), edit them, and paste them in the text box.
	   Try to preserve capitalization as in the English version, and try to match the word use of the already existing translations.
- That's it! The system will automatically create a _pull request_, which will get reviewed.
  If there's any issues, we may comment on the issue to request additional actions.
	   
## An example

Imagine the English file (`en.yml`) looks like this. It contains 5 translation keys (`uploadPhoto`, `yes`, `no`, `Man` and `Woman`), with 5 corresponding English words/sentences (`Upload photo`, `Yes`, `No`, `Man`, `Woman`). Note that `commonText` isn't a translation key, but is used to group together 3 translation keys.

```
commonText:
  uploadPhoto: Upload photo
  yes: Yes
  no: No
  
Man: Man
Woman: Woman
```

Imagine the Spanish file (`es.yml`) looks like this. It contains the same 5 translation keys, but they correspond to Spanish translations.
We notice that the translations for `yes` and `no` are wrong, and we also want to fill in the missing translations.

```
commonText:
  uploadPhoto: Subir foto
  yes: No
  no: Si

Man: <missing>
Woman: <missing>
```

So, we could [open an issue](../../issues/new/choose) with the following details:

- Title: `Fix & complete Spanish translations`
- Language: `es`
- Translations:

```
commonText:
  yes: Si
  no: No

Man: Hombre
Woman: Mujer
```

Note that:

- We need to include `commonText`, as to preserve the structuring of the translation keys.
- There's no need to include the unchanged translation (`uploadPhoto`).
- We match the capitalization used in the English file (`Hombre` instead of `hombre`).

## Translations format details

The translations are stored in [the YAML format](https://en.wikipedia.org/wiki/YAML), a very user-friendly format.
It may be useful to be aware of some things:

- You need to quote strings if they start/end with whitespace, or contain a `:`. E.g.:
```
partnersYouListed: 'Your partners:'
```

- A `#` indicates a comment, they will not be included in the actual translation. E.g.:
```
# These were already translated, but were switched around.
commonText:
  yes: Si
  no: No
```

- You can easily write multi-line strings as follows:
```
description: |-
  Or let your partner scan
  this QR code:
```