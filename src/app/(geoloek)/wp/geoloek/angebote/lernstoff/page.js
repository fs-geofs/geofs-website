import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Lernstoff</h1>
            <div className={styles.Textblock}>
            Damit ihr Euch auf Prüfungen besser vorbereiten könnt, bieten wir ein Sammelsurium 
            an alten und aktuellen Klausuren, Gedächtnisprotokollen und mündlicher Prüfungen – 
            in allen Bereichen und von häufig prüfenden Dozierenden. 
            </div>
            <div className={styles.Textblock}>
            Wir wollen gewährleisten, dass auch die nachfolgenden Generationen von Studis diese Leistung 
            in Anspruch nehmen können. Gemäß dem Prinzip der Nachhaltigkeit <strong>bitten</strong> wir Euch daher, 
            im Austausch für Eure ausgeliehenen neue Protokolle/Altklausuren einzureichen.
            </div>
            <div>
            An das Passwort für Lernstoff gelangt ihr, indem ihr zu unseren <a href="/wp/geoloek/praesenzzeiten" target="_blank">Präsenzdiensten</a> oder 
            einfach mal zwischendurch vorbeischaut, eine Mail schreibt, auf Insta vorbeischaut, 
            eure Friends fragt, einen geschickten Morsecode sendet oder einen*einer Fachschaftler*in eurer Wahl fragt.
            </div>
            <div className={styles.Textblock}>
            <strong>Disclaimer:</strong> Weiterhin gilt: Altklausuren sind wertvoll - 
            je weniger Dozierende von deren Existenz wissen, desto wertvoller. 
            Darum seid bitte halbwegs diskret mit dem Material, und lauft damit nicht (warum auch immer?!) 
            zum*zur Prof*in!
            </div> 
            <div className={styles.Textblock}>
            Hier ist der <a href="https://sso.uni-muenster.de/LearnWeb/learnweb2/course/view.php?id=75196" target="_blank">Link zum Lernstoff</a>.
            </div>
        </>
    )
}