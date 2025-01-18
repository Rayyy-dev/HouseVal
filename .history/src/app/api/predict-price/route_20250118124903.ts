import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const { income, bathrooms, distance, space } = await req.json();

    // Path to the Python script
    const scriptPath = path.join(process.cwd(), 'src/components/landing-page/ai-model/us_housing.py');

    // Execute the Python script with the input parameters
    const { stdout } = await execAsync(
      `python ${scriptPath} ${income} ${bathrooms} ${distance} ${space}`
    );

    // Extract the predicted price from stdout
    const price = parseFloat(stdout.trim());

    return NextResponse.json({ price });
  } catch (error) {
    console.error('Price prediction error:', error);
    return NextResponse.json(
      { error: 'Failed to predict price' },
      { status: 500 }
    );
  }
} 