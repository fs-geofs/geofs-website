import Newspage from "@/app/components/newspage"

import { BACKEND_BASE } from "@/app/BACKEND_URL"

export default async function Site(props) {
    const searchParams = await props.searchParams;

    const endpoint_url = `${BACKEND_BASE}/news`
    return <Newspage searchParams={searchParams} newsEndpoint={endpoint_url}/>
}
