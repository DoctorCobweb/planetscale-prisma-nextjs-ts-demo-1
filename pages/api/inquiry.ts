import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    return await createInquiry(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "method not allowed", success: false });
  }
};

const createInquiry = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body;
  try {
    const newEntry = await prisma.inquiry.create({
      data: {
        name: body.firstName,
        email: body.email,
        subject: body.subject,
        message: body.message,
      },
    });
    return res.status(200).json({ newEntry, success: true });
  } catch (e) {
    console.error("Request error", e);
    res.status(500).json({ error: "Error creating inquiry", success: false });
  }
};

export default handler;
