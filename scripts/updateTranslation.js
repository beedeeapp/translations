
const fs = require('fs');
const yaml = require('yaml');

const translationFolder = 'translations/';

function readYamlFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return yaml.parse(content);
    } catch (err) {
        return {};
    }
}

function deepMerge(obj1, obj2) {
  for (let key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (obj2[key] instanceof Object && obj1[key] instanceof Object) {
        obj1[key] = deepMerge(obj1[key], obj2[key]);
      } else {
        obj1[key] = obj2[key];
      }
    }
  }
  return obj1;
}

function updateTranslation(language, translations) {
	const translationFile = translationFolder + language + ".yml";
	const existingTranslations = readYamlFile(translationFile);
	if (!existingTranslations) {
		console.error('Did not find translations for language ' + language + ', aborting.');
		process.exit(1);
	}
	
	const mergedTranslations = deepMerge(existingTranslations, translations);
	fs.writeFileSync(translationFile, yaml.stringify(mergedTranslations), 'utf8');
}

function updateTranslationFromIssue(eventFile) {
	const event = fs.readFileSync(eventFile, 'utf8'); // Read the file as a string
    const eventData = JSON.parse(event);
	const issueBody = eventData.issue.body;
	
	const langMatch = issueBody.match(/Language\s*(\w+)/);
	const translationMatch = issueBody.match(/Translations\s*```YAML(.+?)```/s);
	
	if (!langMatch || !translationMatch) {
		console.error('Unable to extract language and translations from: ' + issueBody);
		process.exit(1);
	}
	
	const language = langMatch[1];
	const translations = translationMatch[1];
	updateTranslation(language, yaml.parse(translations));
	
	console.log("Success");
}

// Eg: '### Language\r\n\r\nen\r\n\r\n### Translations\r\n\r\n```YAML\r\nyes: floep\r\nsection:\r\n   world: xxx```\r\n'
const eventFile = process.argv[2];
updateTranslationFromIssue(eventFile)