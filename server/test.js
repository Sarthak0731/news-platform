import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
import { db } from "./lib/firebaseAdmin.js";

async function test() {
  const snap = await db.collection("news").limit(1).get();
  console.log("Firestore connected:", snap.size);
}

test();