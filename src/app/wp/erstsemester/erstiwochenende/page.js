import styles from "@/app/page.module.css"

export default function () {

    const erstiwochenende = {
        hin: "25.10.2024, 09:30",
        rueck: "27.10.2024",
        kosten: "50€",
        url: "/erstiwe"
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Ersti-Wochenende</h1>
            <div className={styles.Textblock}>
            Besonders freuen wir uns auch auf unser jährliches Ersti-Wochenende.
            Wir fahren wieder in das <a href="https://druebberholz.de/">Tagungshaus Drübberholz</a>,
            um einander besser kennenzulernen und eine spaßige Zeit zu haben.
            Das Wochenende findet gemeinsam mit der Fachschaft Geographie-Landschaftsökologie statt.
            </div>
            <div className={styles.Textblock}>
                <strong>Hinfahrt</strong>: {erstiwochenende.hin}<br/>
                <strong>Rückfahrt</strong>: {erstiwochenende.rueck}<br/>
                <strong>Kostenbeitrag</strong>: {erstiwochenende.kosten}<br/>
                <strong>Anmeldung</strong>: Online <a href={erstiwochenende.url}>hier</a> (Anwesenheit in er Ersti-Woche erforderlich)
            </div>

            <h2 className={styles.SmallHeading}>Allgemeine Hinweise</h2>
            <div className={styles.Textblock}>
                Am Freitag fahren wir gemeinsam mit Bussen nach Drübberholz.
                Nehmt bitte für diesen Tag genügend Proviant mit, da es erst am Abend eine Mahlzeit gibt.
            </div>
            <div className={styles.Textblock}>
                Der Kostenbeitrag wird für Fahrtkosten, Unterbringung in Mehrbettzimmern und Verpflegung verwendet
                und ist bei der Anmeldung bar zu zahlen (Geld bitte passend mitbringen).
            </div>
            <div className={styles.Textblock}>
                Wir möchten darauf hinweisen, dass wir die Ersti-Fahrt in Ton und bewegtem Bild festhalten.
                Wer damit nicht einverstanden ist, muss aus organisatorischen Gründen im Voraus(!) Rücksprache mit der Fachschaft halten.
            </div>
            <div className={styles.Textblock}>
                Wir freuen uns auch in diesem Jahr auf eine tolle Erstifahrt und hoffen mit Euch das Wochenende zu feiern!
            </div>
            <div className={styles.Textblock}>
                Aus juristischen Gründen ist eine Teilnahme erst ab 18 Jahren möglich, Ausweis wird bei der Anmeldung kontrolliert!!!
            </div>

            <h2 className={styles.SmallHeading}>Anmeldung & Abmeldung</h2>
            <div className={styles.Textblock}>
                Die Anmeldung für die Erstifahrt beginnt vor dem Geobrunch in der Erstiwoche. Die Plätze (vorraussichtlich 70)
                waren in den letzen Jahren sehr begehrt und meist schon gleich nach der Anmeldung vergeben.
                Zur Anmeldung müssen der Personalausweis (Teilnahme leider erst ab 18 Jahren möglich) und der Kostenbeitrag in Bar
                passend mitgebracht werden.
            </div>
            <div className={styles.Textblock}>
                Die Anmeldung ist verbindlich. Wenn eine angemeldete Person an der Fahrt nicht mehr teilnehmen will/kann,
                ist die Rückerstattung des Teilnehmerbetrages nur möglich, wenn ein Nachfolger gestellt wird
                (je nach Andrang auf der Warteliste).
                Mach in dem Fall bitte deinen Platz für andere frei, indem du dich <a href={erstiwochenende.url}>hier</a> abmeldest!
            </div>
            <div className={styles.Textblock}>
                Falls du in der Erstiwoche nicht da bist, aber an der Fahrt teilnehmen willst, kannst du dich
                <a href={erstiwochenende.url}>hier</a> auf die Warteliste setzen lassen. Sobald sich jemand abmeldet,
                werden alle auf der Warteliste per Mail benachrichtigt und haben die Chance
                einen Platz zu bekommen (wer zuerst kommt, mahlt zuerst).
            </div>

            <h2>Packliste</h2>
            <Packliste />
        </>
    )
}

const Packliste = () => {
    return(
        <ul>
            <li>Ausreichend Proviant für Freitag Mittag und Nachmittag</li>
            <li>Einen sehr persönlichen Gegenstand!</li>
            <li>Musik: CDs, Gitarre oder andere Instrumente, Texte</li>
            <li>Hausschuhe (nicht brennbar!)</li>
            <li>Kleingeld (für Bier, Sprudel, Softdrinks)</li>
            <li>Snacks für zwischendurch</li>
            <li>Bettzeug oder Schlafsack & Bettlaken</li>
            <li>Regenkleidung (warm & trocken)</li>
            <li>Schreibzeug, Klemmbrett (wer hat),…</li>
            <li>Gute Laune!</li>
            <li>2 bis x Paar Schuhe (wer hat: Wanderschuhe)</li>
            <li>Handtücher</li>
        </ul>
    )
}