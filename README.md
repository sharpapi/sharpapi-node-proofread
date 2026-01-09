![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Proofread & Grammar Checker API for Node.js

## ✍️ Fix grammar and spelling errors with AI — powered by SharpAPI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-proofread.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-proofread)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-proofread.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Proofread & Grammar Checker** uses advanced AI to detect and correct grammar, spelling, punctuation, and style errors. Perfect for content creation, document editing, and quality assurance.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-proofread
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiProofreadService } = require('@sharpapi/sharpapi-node-proofread');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiProofreadService(apiKey);

const text = `
This is a sentance with some erors that need to be fixed.
Their are several gramatical mistakes in this text.
`;

async function proofreadText() {
  try {
    // Submit proofreading job
    const statusUrl = await service.proofread(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    const corrections = result.getResultJson();

    console.log('Original:', text);
    console.log('Corrected:', corrections.corrected_text);
    console.log('Errors found:', corrections.errors.length);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

proofreadText();
```

---

## API Documentation

### Methods

#### `proofread(text: string, language?: string): Promise<string>`

Proofreads text and returns corrections for grammar, spelling, and punctuation errors.

**Parameters:**
- `text` (string, required): The text content to proofread
- `language` (string, optional): The language of the text (default: 'English')

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.proofread(textWithErrors, 'English');
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns corrected text with detailed error information:

```json
{
  "corrected_text": "This is a sentence with some errors that need to be fixed. There are several grammatical mistakes in this text.",
  "errors": [
    {
      "error": "sentance",
      "correction": "sentence",
      "type": "spelling",
      "position": 10,
      "explanation": "Incorrect spelling"
    },
    {
      "error": "erors",
      "correction": "errors",
      "type": "spelling",
      "position": 30,
      "explanation": "Incorrect spelling"
    },
    {
      "error": "Their",
      "correction": "There",
      "type": "grammar",
      "position": 60,
      "explanation": "Wrong usage of 'their' vs 'there'"
    }
  ],
  "error_count": 3
}
```

---

## Examples

### Basic Proofreading

```javascript
const { SharpApiProofreadService } = require('@sharpapi/sharpapi-node-proofread');

const service = new SharpApiProofreadService(process.env.SHARP_API_KEY);

const draft = `
I has been working on this project for three weeks.
Its going very good and we should be done soon.
`;

service.proofread(draft)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const corrections = result.getResultJson();
    console.log('✏️ Corrected text:');
    console.log(corrections.corrected_text);
    console.log(`\n🔍 Found ${corrections.error_count} errors`);
  })
  .catch(error => console.error('Proofreading failed:', error));
```

### Detailed Error Analysis

```javascript
const service = new SharpApiProofreadService(process.env.SHARP_API_KEY);

const document = `
The company annouced their new product line yesterday.
We recieved alot of positive feedback from customers.
`;

const statusUrl = await service.proofread(document);
const result = await service.fetchResults(statusUrl);
const corrections = result.getResultJson();

console.log('Error Report:');
corrections.errors.forEach((error, index) => {
  console.log(`\n${index + 1}. ${error.type.toUpperCase()}`);
  console.log(`   Error: "${error.error}"`);
  console.log(`   Correction: "${error.correction}"`);
  console.log(`   Explanation: ${error.explanation}`);
});
```

### Batch Proofreading

```javascript
const service = new SharpApiProofreadService(process.env.SHARP_API_KEY);

const articles = [
  { title: 'Article 1', content: 'Your text here...' },
  { title: 'Article 2', content: 'More text...' },
  { title: 'Article 3', content: 'Even more text...' }
];

const proofreadResults = await Promise.all(
  articles.map(async (article) => {
    const statusUrl = await service.proofread(article.content);
    const result = await service.fetchResults(statusUrl);
    const corrections = result.getResultJson();

    return {
      title: article.title,
      original: article.content,
      corrected: corrections.corrected_text,
      error_count: corrections.error_count
    };
  })
);

proofreadResults.forEach(result => {
  console.log(`${result.title}: ${result.error_count} errors corrected`);
});
```

---

## Use Cases

- **Content Creation**: Ensure error-free blog posts, articles, and marketing copy
- **Email Communication**: Polish professional emails and messages
- **Academic Writing**: Improve essays, papers, and research documents
- **Business Documents**: Perfect reports, proposals, and presentations
- **Social Media**: Check posts for grammar and spelling before publishing
- **E-commerce**: Ensure product descriptions are error-free
- **Customer Support**: Validate support responses for clarity and correctness

---

## Detection Capabilities

The proofreader identifies various types of errors:

- **Spelling errors**: Typos, misspelled words
- **Grammar mistakes**: Subject-verb agreement, tense errors
- **Punctuation**: Missing or incorrect punctuation marks
- **Capitalization**: Proper noun capitalization, sentence starts
- **Word choice**: Commonly confused words (their/there/they're)
- **Style issues**: Redundancy, wordiness, clarity problems

---

## API Endpoint

**POST** `/content/proofread`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVc)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/proofread-grammar-checker)

---

## Related Packages

- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase) - Text paraphrasing
- [@sharpapi/sharpapi-node-translate](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate) - Text translation
- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text) - Text summarization
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
