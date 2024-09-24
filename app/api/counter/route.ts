// app/api/counter/route.ts
import { NextResponse } from "next/server";
import dbConnect from "../../../lib/mongodb";
import Counter from "../../../lib/counterModel";

export async function GET() {
  await dbConnect();

  try {
    const counter = await Counter.findOne();
    if (!counter) {
      return NextResponse.json({ count: 0 }, { status: 200 });
    }
    return NextResponse.json(counter, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch the counter" },
      { status: 500 }
    );
  }
}

export async function POST() {
  await dbConnect();

  try {
    let counter = await Counter.findOne();
    if (!counter) {
      counter = new Counter({ count: 1 });
    } else {
      counter.count += 1;
    }
    await counter.save();
    return NextResponse.json(counter, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update the counter" },
      { status: 500 }
    );
  }
}
