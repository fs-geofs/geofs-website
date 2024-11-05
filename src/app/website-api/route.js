export async function GET(req) {
    return new Response(JSON.stringify({version: "1.0"}), {status: 200})
}