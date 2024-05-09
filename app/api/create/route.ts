import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { z } from "zod";

const createTextSchema = z.object({
  textTr: z.string().min(1).max(255),
  textEn: z.string().min(1).max(255),
  textRu: z.string().min(1).max(255),
  textDe: z.string().min(1).max(255),
  compName: z.string().min(1).max(100),
});

//we have to validate our request to make sure it doesnt't have bad data
//for data validation we use zode --> npm i zod@3.22.2
export async function POST(request: NextRequest) {
  const body = await request.json(); //it returns promise so waited to get the body of requst
  const validation = createTextSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
    //400 bad request meaning: client sent invalid data
  }

  //if request is valid we should store this issue in our database,
  // to do that we have to import Prisma client
  //--> go to this site : best practice for instantiating prisma.io then create client.ts copy, paste that code
  const newText = await prisma.text.create({
    data: {
      textTr: body.textTr,
      textEn: body.textEn,
      textRu: body.textRu,
      textDe: body.textDe,
      compName: body.compName,
    },
  });

  return NextResponse.json(newText, { status: 201 });
}
