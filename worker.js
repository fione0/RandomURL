export default {
  async fetch(request) {
    const webhook = "__WEBHOOK__"; // This is replaced by the GitHub Action

    let data = {};
    try { data = await request.json(); } catch {}

    const content = data.content || "No content";

    await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    return new Response("OK", { status: 200 });
  }
};
