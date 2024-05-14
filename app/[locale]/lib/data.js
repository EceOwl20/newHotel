import prisma from "@/prisma/client";
import Cookies from 'js-cookie';

export const fetchTextsByLanguage = async (compName, language) => {
    
  let column;
  switch (language) {
    case 'EN':
      column = 'textEn';
      break;
    case 'TR':
      column = 'textTr';
      break;
    case 'RU':
      column = 'textRu';
      break;
    case 'DE':
      column = 'textDe';
      break;

    default:
      console.error(`Unsupported language: ${language}`);
      return {};
  }

  try {
    let text = await prisma.text.findFirst({
      where: {
        compName: compName,
      },
      select: {
        [column]: true,
      },
    });
    if (!text) {
      console.error(`Text with compName ${compName} not found.`);
      return {}; // Return empty object 
    }

    const jsonData = JSON.parse(text[column]);
    return jsonData;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return {};
  }
};

//---------------------------------

export const fetchComponents = async (compName) => {
  try {
    const text = await prisma.text.findMany({
      where: {
        compName: compName,
      },
    });

    // const jsonData = JSON.stringify(text, null, 2);
    // console.log("Data converted to JSON:", jsonData);

    return text;
  } catch (error) {
    console.error("Error fetching texts:", error);
    return "";
  }
};

//----------------------------------------------

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

//----------------------------------------------

export async function createNewComponent(
  id,
  textTr,
  textEn,
  textRu,
  textDe,
  compName
) {
  try {
    const newData = await prisma.text.create({
      data: {
        id: id,
        textTr: textTr,
        textEn: textEn,
        textRu: textRu,
        textDe: textDe,
        compName: compName,
      },
    });
    return { newData };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
