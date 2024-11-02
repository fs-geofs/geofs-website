import styles from "@/app/page.module.css"
import localStyle from "./page.module.css"

export default async function Site() {
    
    const blog_entries = []

    // call API
    const resp = await fetch(
        "http://localhost:3000/api/news",
        {method: "GET", cache: "no-store"}
    )
    
    if (resp.status !== 200){
        blog_entries.push("Error")
    } else {
        const entries = await resp.json()
        entries.map(entry => {
            const html_to_insert = entry.content
                .replaceAll("<h1>", `<h1 class=${styles.BigHeading}>`)  // apply h1 formatting
                .replaceAll("<h2>", `<h1 class=${styles.SmallHeading}>`) // apply h2 formatting
                .replaceAll("<h3>", `<h1 class=${styles.VerySmallHeading}>`) //apply h3 formatting
                .replaceAll("<div>", `<div class=${styles.Textblock}>`) // apply Textbox formatting to divs
            blog_entries.push(<div className={localStyle.Blogpost} dangerouslySetInnerHTML={{__html: html_to_insert}} key={entry.id}/>)}
        )
    }

    return (
        <>
            {blog_entries.map(entry => entry)}
        </>
    )
}