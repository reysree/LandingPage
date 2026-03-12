import { NextResponse } from "next/server";

// Allow longer timeout for external API (Vercel default is 10s)
export const maxDuration = 30;

const STATS_API = "https://leetcode-stats.tashif.codes";
const BADGES_API = "https://leetcode-stats.tashif.codes";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ username: string }> }
) {
  const { username } = await params;
  if (!username) {
    return NextResponse.json({ error: "Username required" }, { status: 400 });
  }

  try {
    const [statsRes, badgesRes] = await Promise.all([
      fetch(`${STATS_API}/${username}`),
      fetch(`${BADGES_API}/${username}/badges`),
    ]);

    if (!statsRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch LeetCode stats" },
        { status: statsRes.status }
      );
    }

    const stats = await statsRes.json();
    const badges = badgesRes.ok ? await badgesRes.json() : { badges: [], upcomingBadges: [] };

    return NextResponse.json({
      ...stats,
      badges: badges.badges ?? [],
      upcomingBadges: badges.upcomingBadges ?? [],
    });
  } catch (error) {
    console.error("LeetCode API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch LeetCode data" },
      { status: 500 }
    );
  }
}
