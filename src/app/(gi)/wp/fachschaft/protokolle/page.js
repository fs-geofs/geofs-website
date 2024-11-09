import styles from "@/app/page.module.css"

export default function Content() {
    
    const protokoll_url = process.env.PROTOKOLL_ENDPOINT

    return (
        <>
            <h1 className={styles.BigHeading}>Sitzungsprotokolle</h1>
            <div style={{border: "1px solid lightgrey", width: "100%", padding: "5px"}}>
                <iframe src={protokoll_url} width="100%" height="500px" allowFullScreen></iframe>
            </div>
            <div className={styles.Textblock}>
                oder <a href={protokoll_url} target="_blank">hier</a>.
            </div>
        </>
    )
}

export const dynamic = "force-dynamic";
