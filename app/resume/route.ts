import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  try {
    const pdfPath = join(process.cwd(), 'public', 'Tyler-Olli-Resume.pdf')
    const pdfBuffer = await readFile(pdfPath)

    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="Tyler-Olli-Resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error loading resume:', error)
    return new NextResponse('Resume not found', { status: 404 })
  }
}
