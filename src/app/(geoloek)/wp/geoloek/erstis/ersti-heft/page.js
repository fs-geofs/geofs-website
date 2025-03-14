import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Ersti-Heft</h1>
            <div>
                Hier könnt ihr euch das Ersti-Heft runterladen. Darin findet ihr sämtliche Studiengänge, 
                Module, Nebenfachinfos und vieles mehr beschrieben. Dieses Info-Heft eurer Fachschaft 
                soll euch nicht nur im ersten Semester weiterhelfen, sondern auch während des Studiums 
                immer wieder eine Nachschlagemöglichkeit bieten.
            </div>
            <h2 className={styles.SmallHeading}>Doch bevor ihr jetzt einen Drucker sucht oder uns mit Fragen dazu überhäuft...:</h2>
            <div>
                Das Ersti-Heft schicken wir euch nochmal zu Beginn der O-Woche, damit ihr das alle digital habt.
                Aus offensichtlichen Gründen drucken wir das nicht mehr für alle Erstis aus. Wenn ihr mögt, 
                könnt ihr das Heft aber gerne selbst ausdrucken.
            </div>
            <h2 className={styles.SmallHeading}>Download:</h2>
            <div>
                Befindet sich noch im Aufbau. Hier könnt ihr bald die aktuellste Version des Ersti-Hefts runterladen.
            </div>
        </>
    )
}