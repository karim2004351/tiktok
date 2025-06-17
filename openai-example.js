import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

// إعداد المفتاح من متغير البيئة
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// اختيار نموذج Gemini
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// إرسال رسالة للموديل
const result = await model.generateContent("Write a one-sentence bedtime story about a unicorn.");
const response = await result.response;
const text = response.text();

console.log(text);
