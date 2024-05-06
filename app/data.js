import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchData = async (textId, language) => {
  try {
    //Belirli bir metnin ID'sine göre metni çek
    const texts = await prisma.text.findUnique({
      where: {
        id: textId,
      },
    });
    // Seçilen dilin metin sütununu belirle
    let languageColumn;
    switch (language) {
        case "TR":
        languageColumn="textTr";
        break;
        case 'EN':
            languageColumn = 'textEn';
            break;
          case 'RU':
            languageColumn = 'textRu';
            break;
          case 'DE':
            languageColumn = 'textDe';
            break;
          default:
            languageColumn = 'textTr';
    }
    return texts[languageColumn];

  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch data");
    return null;
  }
};
