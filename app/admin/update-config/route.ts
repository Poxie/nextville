import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();

    const { config } = body;

    await fs.writeFile('messages/en.json', JSON.stringify(config, null, 2));

    const newConfig = await fs.readFile('messages/en.json', 'utf-8');

    return new NextResponse(JSON.stringify({ config: JSON.parse(newConfig) }), {
        status: 200,
    })
}