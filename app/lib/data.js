import prisma from "@/prisma/client";

export const fetchTextsByLanguage = async (textId, language) => {
  try {
    const text = await prisma.text.findUnique({
      where: {
        id: textId,
      },
    });
    console.log(`Text found:`, text);
    if (!text) {
      console.error(`Text with textId ${textId} not found.`);
      return [];
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
    }
    console.log("Selected text:", selectedText);
    return selectedText;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return "";
  }
};

export const fetchTextsByLanguage2 = async (textId, language) => {
  try {
    console.log(`Fetching text with textId ${textId} and language ${language}`);
    const text = await prisma.text.findMany();

    console.log("Selected text:", text);
    return selectedText;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return "";
  }
};
