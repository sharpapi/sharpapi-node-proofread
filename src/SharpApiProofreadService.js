const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for proofreading text using SharpAPI.com
 */
class SharpApiProofreadService extends SharpApiCoreService {
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