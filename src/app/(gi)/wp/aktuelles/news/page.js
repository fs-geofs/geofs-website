import styles from "@/app/page.module.css"
import localStyle from "./page.module.css"

import DOMPurify from "isomorphic-dompurify"
import FetchError from "@/app/components/error_fetching"

import { BACKEND_BASE } from "@/app/BACKEND_URL"

export default async function Site({ searchParams }) {

    let { page } = await searchParams
    if (!page) {
        page = "0"
    }

    page = parseInt(page)

    if (isNaN(page)) {
        page = 0
    }

    if (page < 0) {
        page = 0
    }

    const blog_entries = []
    let next_page = null
    let prev_page = null

    // call API to fetch news articles
    try {
        const resp = await fetch(`${BACKEND_BASE}/news?page=${page}`, { method: "GET", cache: "no-store" })
        if (resp.status !== 200) {
            throw new Error()
        } else {
            const data = await resp.json()
            const entries = data.news
            next_page = data.next
            prev_page = data.prev
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
            <NavButtons prev_page={prev_page} next_page={next_page}/>
            {blog_entries.map(entry => entry)}
            <NavButtons prev_page={prev_page} next_page={next_page}/>
        </>
    )
}


const NavButtons = ({ prev_page, next_page }) => {
    return (
        <div className={localStyle.Navbuttons}>
            <div className={localStyle.Prev}>
                {prev_page !== null ? <a href={`?page=${prev_page}`}>🡐 Neuere Beiträge</a> : ""}
            </div>
            <div className={localStyle.Next}>
                {next_page !== null ? <a href={`?page=${next_page}`}>Ältere Beiträge 🡒</a> : ""}
            </div>
        </div>
    )
}