export async function onRequestPost(context) {

  const { request, env } = context;

  const data = await request.json();

  const password = data.password;

  if (password === env.ADMIN_PASSWORD) {

    return new Response(
      JSON.stringify({ ok: true }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({ ok: false }),
    { status: 401 }
  );

}
