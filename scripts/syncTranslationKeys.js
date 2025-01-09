const fs = require('fs');
const yaml = require('yaml');

const translationFolder = 'translations/';
const sourceFile = 'en.yml';
const targetFiles = ['de.yml', 'es.yml', 'fr.yml', 'nl.yml'];


function readYamlFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        return yaml.parse(content);
    } catch (err) {
        return {};
    }
}

function mergeDicts(src, tgt) {
    const result = {};

    for (const key in src) {
		if (typeof src[key] === 'object') {
			result[key] = mergeDicts(src[key], tgt[key] || {});
		} else {
			result[key] = (typeof tgt[key] === 'string' && tgt[key]) || '<missing>';
		}
    }

    return result;
}

function updateTranslationKeys() {
	const referenceTranslations = readYamlFile(translationFolder + sourceFile);
	
	targetFiles.forEach(targetFile => {
		const existingTranslations = readYamlFile(translationFolder + targetFile);
		const updatedTarget = mergeDicts(referenceTranslations, existingTranslations);
		fs.writeFileSync(translationFolder + targetFile, yaml.stringify(updatedTarget), 'utf8');
	});
}

updateTranslationKeys();
