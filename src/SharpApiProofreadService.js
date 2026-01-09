const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for proofreading text using SharpAPI.com
 */
class SharpApiProofreadService extends SharpApiCoreService {
  /**
   * Creates a new SharpApiProofreadService instance
   * @param {string} apiKey - Your SharpAPI API key
   * @param {string} [apiBaseUrl='https://sharpapi.com/api/v1'] - API base URL
   */
  constructor(apiKey, apiBaseUrl = 'https://sharpapi.com/api/v1') {
    super(apiKey, apiBaseUrl, '@sharpapi/sharpapi-node-proofread/1.0.1');
  }

  /**
   * Proofreads (and checks grammar) of the provided text.
   *
   * @param {string} text
   * @returns {Promise<string>} - The status URL.
   */
  async proofread(text) {
    const data = { content: text };
    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_PROOFREAD.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiProofreadService };