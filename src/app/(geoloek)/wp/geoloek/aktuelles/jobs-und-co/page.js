import { BACKEND_BASE } from "@/app/BACKEND_URL"
import Jobpage from "@/app/components/jobspage"

export default async function Site() {
    const jobs_endpiont_url = `${BACKEND_BASE}/geoloek_joblistings`
    return <Jobpage backend_jobs_endpoint={jobs_endpiont_url} />
}