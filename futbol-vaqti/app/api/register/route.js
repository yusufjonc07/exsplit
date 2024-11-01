import { NextResponse } from "next/server";

import dbConnect from "@/utils/dbConnect";

import User from "@/models/user";
import { generateFromEmail } from "unique-username-generator";

import bcrypt from "bcrypt";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();

  try {
    const username = generateFromEmail(body.email, 3);

    const { name, phone, email, password } = body;

    const user = await new User({
      username,
      name,
      phone,
      email,
      password: await bcrypt.hash(password, 10),
    }).save();

    return NextResponse.json({ msg: `User ${user.name} has been created successfully` }, );
  } catch (error) {
    return NextResponse.json({
      err: error.message,
    }, {status: 500});
  }
}
