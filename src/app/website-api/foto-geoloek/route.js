import { BACKEND_BASE } from "@/app/BACKEND_URL"

export async function GET(req) {
    const res = await fetch(`${BACKEND_BASE}/foto_geoloek`, {cache: "no-store"})
    if (!res.ok) return undefined
    return new Response(await res.blob(), {status: 200, headers: res.headers})
}