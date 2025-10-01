import styles from "@/app/page.module.css"
import localStyle from "./jobspage.module.css"

import FetchError from "@/app/components/error_fetching"
import sanitizeHtml from "sanitize-html";
import { stringifyError } from "next/dist/shared/lib/utils";

export default async function Jobpage({ backend_jobs_endpoint }) {
    const job_entries = []

    // call API to fetch news articles
    try {
        const resp = await fetch(`${backend_jobs_endpoint}`, { method: "GET", cache: "no-store" })
        if (resp.status !== 200) {
            throw new Error()
        } else {
            const entries = await resp.json()
            entries.map(
                entry => {
                    const dirty_html = entry.content
                        .replaceAll("<h1>", `<h1 class=${styles.BigHeading}>`)  // apply h1 formatting
                        .replaceAll("<h2>", `<h2 class=${styles.SmallHeading}>`) // apply h2 formatting
                        .replaceAll("<h3>", `<h3 class=${styles.VerySmallHeading}>`) //apply h3 formatting
                        .replaceAll("<div>", `<div class=${styles.Textblock}>`) // apply Textbox formatting to divs
                    const html_to_insert = sanitizeHtml(dirty_html)
                    job_entries.push(
                        <div className={localStyle.Blogpost} key={entry.id}>
                            <div dangerouslySetInnerHTML={{ __html: html_to_insert }} />
                        </div>
                    )
                }
            )
        }
    } catch (error) {
        return (
            <>
                <h1 className={styles.BigHeading}>Jobs und Co</h1>
                <FetchError />
            </>
        )
    }



    return (
        <>
            <h1 className={styles.BigHeading}>Jobs und Co</h1>
            {job_entries.map(entry => entry)}
        </>
    )
}