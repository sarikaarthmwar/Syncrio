import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY;

function cleanText(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function cleanArray(value: unknown, maxItems = 20) {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string").map((item) => item.trim().slice(0, 200)).filter(Boolean).slice(0, maxItems)
    : [];
}

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return NextResponse.json({ error: "Survey storage is not configured." }, { status: 500 });
  }

  try {
    const body = await request.json();
    const payload = {
      name: cleanText(body.name, 120),
      email: cleanText(body.email, 254),
      role: cleanText(body.role, 120),
      gcc_size: cleanText(body.gccSize, 80),
      capabilities: cleanArray(body.capabilities),
      hiring_challenge: cleanText(body.hiringChallenge, 200),
      emerging_locations: cleanText(body.emergingLocations, 100),
      location_barriers: cleanArray(body.locationBarriers),
      training_hiring: cleanText(body.trainingHiring, 120),
      talent_type: cleanText(body.talentType, 120),
      readiness_signals: cleanArray(body.readinessSignals, 10),
      underprepared: cleanText(body.underprepared, 2000),
      comments: cleanText(body.comments, 3000),
      source: "syncrio.tech/survey",
    };

    if (!payload.name || !payload.email || !payload.role || !payload.gcc_size ||
        payload.capabilities.length === 0 || !payload.hiring_challenge ||
        !payload.emerging_locations || !payload.training_hiring || !payload.talent_type) {
      return NextResponse.json({ error: "Please complete all required questions." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
      return NextResponse.json({ error: "Please enter a valid work email." }, { status: 400 });
    }

    const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/survey_responses`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_KEY,
        Authorization: `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!insertResponse.ok) {
      const detail = await insertResponse.text();
      console.error("Survey storage failed:", detail);
      return NextResponse.json({ error: "We couldn't save your response. Please try again." }, { status: 502 });
    }

    // EmailJS is optional until its service/template/public key are configured in Vercel.
    const emailjsServiceId = process.env.EMAILJS_SERVICE_ID;
    const emailjsTemplateId = process.env.EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = process.env.EMAILJS_PUBLIC_KEY;

    if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
      const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: {
            name: payload.name,
            email: payload.email,
            role: payload.role,
            gcc_size: payload.gcc_size,
            capabilities: payload.capabilities.join(", "),
            hiring_challenge: payload.hiring_challenge,
            emerging_locations: payload.emerging_locations,
            location_barriers: payload.location_barriers.join(", "),
            training_hiring: payload.training_hiring,
            talent_type: payload.talent_type,
            readiness_signals: payload.readiness_signals.join(", "),
            underprepared: payload.underprepared,
            comments: payload.comments,
          },
        }),
      });
      if (!emailResponse.ok) console.error("EmailJS notification failed:", await emailResponse.text());
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Survey submission error:", error);
    return NextResponse.json({ error: "Unable to submit your response. Please try again." }, { status: 500 });
  }
}
