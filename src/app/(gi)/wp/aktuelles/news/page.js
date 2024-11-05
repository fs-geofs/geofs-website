import styles from "@/app/page.module.css"
import localStyle from "./page.module.css"

import DOMPurify from "isomorphic-dompurify"
import FetchError from "@/app/components/error_fetching"

import { BACKEND_BASE } from "@/app/(gi)/BACKEND_URL"

export default async function Site() {

    const blog_entries = []

    // call API to fetch news articles
    try {
        const resp = await fetch(`${BACKEND_BASE}/news`, { method: "GET", cache: "no-store" })
        if (resp.status !== 200) {
            throw new Error()
        } else {
            const entries = await resp.json()
            entries.map(entry => {
                const html_to_insert = DOMPurify.sanitize(
                    entry.content
                        .replaceAll("<h1>", `<h1 class=${styles.BigHeading}>`)  // apply h1 formatting
                        .replaceAll("<h2>", `<h1 class=${styles.SmallHeading}>`) // apply h2 formatting
                        .replaceAll("<h3>", `<h1 class=${styles.VerySmallHeading}>`) //apply h3 formatting
                        .replaceAll("<div>", `<div class=${styles.Textblock}>`) // apply Textbox formatting to divs
                )
                blog_entries.push(
                    <div className={localStyle.Blogpost} key={entry.id}>
                        <h4>{
                            // reformat date string
                            entry.date
                                .split("-")
                                .reverse()
                                .join(".")
                        }</h4>
                        <div dangerouslySetInnerHTML={{ __html: html_to_insert }} />
                    </div>
                )
            }
            )
        }
    } catch {
        blog_entries.push(
            <>
                <h1 className={styles.BigHeading}>News</h1>
                <FetchError />
            </>
        )
    }

    return (
        <>
            {blog_entries.map(entry => entry)}
        </>
    )
}