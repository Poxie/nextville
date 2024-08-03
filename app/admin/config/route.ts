import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(req: NextRequest, res: NextResponse) {
    const config = await fs.readFile('messages/en.json', 'utf-8');
    return new NextResponse(config, {
        status: 200,
    });
}