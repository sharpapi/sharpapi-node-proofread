![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Proofreader & Grammar Checker API for Node.js

## 📝 Check grammar and spelling with AI — powered by SharpAPI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-proofread.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-proofread)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-proofread.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Proofreader** checks your text for grammar, spelling, punctuation, and style issues. Provides detailed corrections and suggestions to improve your writing quality.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

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

const text = 'This text has some erors that need fixing.';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.proofread(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVi).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiProofreadService } = require('@sharpapi/sharpapi-node-proofread');

const service = new SharpApiProofreadService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/proofread-grammar-checker).

---

## Use Cases

- **Content Quality**: Ensure error-free blog posts and articles
- **Email Composition**: Check emails before sending
- **Document Review**: Proofread reports and documentation
- **E-commerce**: Quality check product descriptions
- **Customer Support**: Verify response quality
- **Academic Writing**: Check essays and research papers

---

## API Endpoint

**POST** `/content/proofread`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVi)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/proofread-grammar-checker)

---

## Related Packages

- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase)
- [@sharpapi/sharpapi-node-translate](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate)
- [@sharpapi/sharpapi-node-summarize-text](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)

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
