export * from './chatgpt-api'
export * from './chatgpt-conversation'
export * from './types'
export * from './utils'
export * from './openai-auth'

import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
  res.json({ message: "Hello guys. Welcome to Vercel" });
};

