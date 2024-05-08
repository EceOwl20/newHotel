// TextFetcher.js

import prisma from "@/prisma/client";

class TextFetcher {
  constructor() {
    this.textCache = {}; // Cache to store fetched text data
  }

  async fetchTextByIdAndLanguage(textId, language) {
    try {
      // Check if the text data is already cached
      const cacheKey = `${textId}_${language}`;
      if (this.textCache[cacheKey]) {
        return this.textCache[cacheKey];
      }

      // If not cached, fetch from the database
      const text = await prisma.text.findUnique({
        where: {
          id: textId,
        },
      });

      if (!text) {
        console.error(`Text with textId ${textId} not found.`);
        return "";
      }

      let selectedText = "";
      switch (language) {
        case "TR":
          selectedText = text.textTr;
          break;
        case "EN":
          selectedText = text.textEn;
          break;
        case "DE":
          selectedText = text.textDe;
          break;
        case "RU":
          selectedText = text.textRu;
          break;
        default:
          selectedText = "";
      }

      // Cache the fetched text data
      this.textCache[cacheKey] = selectedText;

      return selectedText;
    } catch (error) {
      console.error("Error fetching text:", error);
      return "";
    }
  }
}

export default new TextFetcher();
