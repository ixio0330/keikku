import setupSwagger from '@/swagger';
import { NextResponse } from 'next/server';

export async function GET() {
  const spec = await setupSwagger();
  return NextResponse.json(spec);
}
