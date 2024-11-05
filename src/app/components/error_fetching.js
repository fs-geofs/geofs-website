import styles from "@/app/page.module.css"

export default function FetchError() {


    return(
        <div style={{border: "1px solid red", padding: "5px"}}>
            <div className={styles.Textblock}>
                Fehler beim fetchen des Inhalts vom Backend.<br/>
                Bitte versuche es später erneut!
            </div>
            <div className={styles.Textblock}>
                Failed to fetch content from backend.<br/>
                Please try again later.
            </div>
        </div>
    )
}