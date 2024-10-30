import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>Protokolle</h1>
            <div className={styles.Textblock}>
                Die Protokolle zu den wöchentlichen Sitzungen findest du hier:
            </div>
            <div className={styles.Textblock} style={{border: "3px solid red", padding: "5px"}}>
                <strong>Under Construction!</strong>
            </div>
        </>
    )
}