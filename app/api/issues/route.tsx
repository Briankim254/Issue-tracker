import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';
import prisma from '@/prisma/client';

const issueSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export default async function POST (request : NextRequest, response : NextResponse) {

    const body = await request.json();
    const validation = issueSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json( validation.error.errors, {status: 400});
    }

    const newIssue = await prisma.issue.create({
        data: {title: body.title, description: body.description}
    }); 

    return NextResponse.json(newIssue, {status: 201});
}
