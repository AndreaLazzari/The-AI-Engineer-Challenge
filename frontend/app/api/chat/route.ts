import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const apiUrl = process.env.AZURE_API_URL;
  const apiKey = process.env.AZURE_API_KEY;

  if (!apiUrl || !apiKey) {
    return NextResponse.json({ detail: "AZURE_API_URL or AZURE_API_KEY not configured" }, { status: 500 });
  }

  try {
    const response = await fetch(`${apiUrl}?subscription-key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1024,
        system: "You are a supportive mental coach.",
        messages: [{ role: "user", content: message }],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ detail: data.error?.message ?? JSON.stringify(data) }, { status: response.status });
    }

    return NextResponse.json({ reply: data.content[0].text });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ detail: `Error calling Claude API: ${msg}` }, { status: 500 });
  }
}
