import styles from "@/app/page.module.css"

import { PROTOKOLL_URL } from "@/app/BACKEND_URL"

export default function Content() {
    console.log(PROTOKOLL_URL)
    return (
        <>
            <h1 className={styles.BigHeading}>Sitzungsprotokolle</h1>
            <div style={{border: "1px solid lightgrey", width: "100%", padding: "5px"}}>
                <iframe src={PROTOKOLL_URL} width="100%" height="500px" allowFullScreen></iframe>
            </div>
            <div className={styles.Textblock}>
                oder <a href={PROTOKOLL_URL} target="_blank">hier</a>.
            </div>
        </>
    )
}