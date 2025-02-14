# BeeDee Translations

Our existing translations are listed under the [translations](./translations) folder.
Each file corresponds to one language, named after the [ISO 639 language code](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes), e.g. `en` for English, `es` for Spanish...

You can contribute by adding missing translations, or improving existing translations:

1. Create a GitHub account [here](https://github.com/signup?source_repo=beedeeapp%2FTranslations), or sign in [here](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fbeedeeapp%2Ftranslations), and come back to `https://github.com/beedeeapp/translations` afterwards.
2. Click [here](https://beedee.com/translate/) or go to `https://beedee.com/translate/` and enter the email address of your GitHub account to receive an invite to this repository.
3. Go to the [translation file](https://github.com/beedeeapp/translations/tree/main/translations) of a language you are proficient in. (Entries where the English and "translated" values are the same, are not translated yet.)
4. click the pencil icon on the top left (it looks like this: ![pencil](https://raw.githubusercontent.com/beedeeapp/translations/refs/heads/main/images/pencil.png))
5. Make any adjustments, improvements...
6. Click "Commit changes" in the top left. `Create a new branch for this commit and start a pull request` will be auto-selected. Enter a sensible name for your contributions, preferably starting with the language you're contributing to (e.g. `de-improvements-myname-2`). The name doesn't matter that much. Click `Propose changes` and that's it!

Step 6 looks like this:

![commit button](https://raw.githubusercontent.com/beedeeapp/translations/refs/heads/main/images/commit1.png)

![commit screen](https://raw.githubusercontent.com/beedeeapp/translations/refs/heads/main/images/commit2.png)

## Video

If the above 6 steps are easier to follow through a video, you can watch the video below:

[![Youtube Video tumbnail](https://raw.githubusercontent.com/beedeeapp/translations/refs/heads/main/images/youtube.png)](https://www.youtube.com/watch?v=P359jIFh8xU)

## Yaml format details

The translations are stored in [the YAML format](https://en.wikipedia.org/wiki/YAML), a very user-friendly format.
It may be useful to be aware of some things:

- You need to quote strings if they start/end with spaces, or contain a colon (`:`), hyphen (`-`), single quotes ("'") or double quotes (`"`). E.g.:
```
  partnersYouListed: 'Your partners:'
```
- You also have have to escape double quotes (replace `"` with `\"`):
```
  skipButton: "the grey clock: \"skip\" this profile. You will see this profile again tomorrow, if they still meet your criteria then"
```

- A `#` indicates a comment, they will not be included in the actual translation. We use comments to automatically add the English value for any entry. E.g.:
```
#   English: Occupation
  occupation: Beruf
```

- You can easily write multi-line strings as follows: (no escaping is needed here, and there are plenty of examples of this already)
```
description: |
  Or let your partner scan
  this QR code:
```