import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchTextsByLanguage = async (language) => {
  try {
    const texts = await prisma.text.findMany({
      select: {
        id: true,
        textTr: true,
        textEn: true,
        textRu: true,
        textDe: true,
      },
    });
    console.log(texts);
    // Filter the texts based on the selected language
    let filteredTexts = [];
    switch (language) {
      case "tr":
        filteredTexts = texts.map((text) => text.textTr);
        break;
      case "en":
        filteredTexts = texts.map((text) => text.textEn);
        break;
      case "ru":
        filteredTexts = texts.map((text) => text.textRu);
        break;
      case "de":
        filteredTexts = texts.map((text) => text.textDe);
        break;
      default:
        filteredTexts = texts.map((text) => text.textEn);
        break;
    }
    return filteredTexts;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return [];
  }
};
