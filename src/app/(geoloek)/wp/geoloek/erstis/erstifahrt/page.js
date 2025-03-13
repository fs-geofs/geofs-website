import styles from "@/app/page.module.css";
import error_data from "./erstiwochenende_data_error.json"

import { BACKEND_BASE } from "@/app/BACKEND_URL";

export default async function Page() {

    var erstiwochenende = {}
    try {
        const resp = await fetch(`${BACKEND_BASE}/erstiwochenende`, { cache: "no-store" })
        if (resp.status != 200) {
            throw new Error();
        } else {
            var erstiwochenende = await resp.json()
        }
    } catch {
        var erstiwochenende = { ...error_data }
    }
    
    return (
        <>
            <h1 className={styles.BigHeading}>Ersti-Fahrt</h1>
            <div className={styles.Textblock}>
                Die Ersti-Fahrt findet am Wochenende vom <strong>{erstiwochenende.hin}</strong> bis <strong>{erstiwochenende.rueck}</strong> statt.
                Wie (fast) immer geht es nach <a href="http://www.druebberholz.de/" target="_blank">Drübberholz</a> (Dörverden).
                Mitfahren können insgesamt 70 Erstis der Studiengänge Landschaftsökologie, Geographie und Geoinformatik.
            </div>
            <div className={styles.Textblock}>
                Geboten wird eine Menge: Wir rennen im Wald rum, feiern, lernen Mitstudenten kennen und lieben, feiern,
                lernen nützliche Dinge über Pflanzen, Tiere, Wind, Wetter und GPS-Geräte, feiern und haben viel
                Spaß dabei. Wer nicht mitfährt, ist selber Schuld, denn es wird jede Menge gefeiert!
            </div>
            <div className={styles.Textblock}>
                Der Unkostenbeitrag beträgt (voraussichtlich) <strong>{erstiwochenende.kosten}€</strong> (inkl. Fahrtkosten, Verpflegung, Unterbringung in Mehrbettzimmern)
                und ist in bar und möglichst passend bei der Anmeldung während des Geobrunches zu zahlen. Dies ist die einzige
                Anmeldegelegenheit! Wer zu diesem Zeitpunkt verhindert ist, kann sich leider nicht von einer anderen Person vertreten
                lassen. Die Anmeldung ist verbindlich. Wenn eine angemeldete Person an der Fahrt nicht mehr teilnehmen kann/will,
                ist die Rückerstattung des Teilnehmerbetrages nur möglich, wenn selbständig ein Nachfolger gestellt wird
                (je nach Andrang auf der Warteliste).
            </div>
            <h2 className={styles.SmallHeading}>Mitbringen</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li>Ausreichend Proviant für Freitagmittag und Nachmittag (lange Busfahrt)</li>
                    <li>Brotdose und Trinkflasche für Lunchpakete</li>
                    <li>einen sehr persönlichen Gegenstand!</li>
                    <li>ein Gesellschaftsspiel</li>
                    <li>Musik: CDs, Gitarre oder andere Instrumente, Texte</li>
                    <li>Hausschuhe (nicht brennbar!)</li>
                    <li>Kleingeld (für Bier, Cola, Saft, Wasser,…)</li>
                    <li>Bettzeug/Schlafsack</li>
                    <li>Handtücher</li>
                    <li>Regenkleidung (warm & trocken)</li>
                    <li>Schreibzeug, Klemmbrett (wer hat),…</li>
                    <li>Gute Laune!</li>
                    <li>Wanderschuhe</li>
                    <li>2tes-ntes Paar Schuhe</li>
                    <li>Deo und Duschgel (im Interesse eurer Mitmenschen)</li>
                </ul>
            </div>
            <div className={styles.Textblock}>
                Zu dokumentarischen Zwecken, für eventuelle Sozialstudien und wegen der Sicherheit
                wird die Ersti-Fahrt in Ton und bewegtem Bild für die Nachwelt festgehalten. Wer das
                lieber vermeiden möchte, sollte aus organisatorischen Gründen im Voraus(!) Rücksprache
                mit der Fachschaft halten.
            </div>
            <div className={styles.Textblock}>
                Aus juristischen Gründen ist eine Teilnahme erst ab 18 Jahren möglich, Ausweise werden
                bei der Anmeldung kontrolliert!!!
            </div>
            <div className={styles.Textblock}>
                Es gibt auch einen kleinen Absatz in der FAQ zum Ersti-WE: <a href="/wp/geoloek/erstis/ersti-fragen/">Ersti-FAQ</a>
            </div>
        </>
    )
}