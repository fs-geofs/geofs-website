import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Newsletter/Mail-Verteiler</h1>
            <div className={styles.Textblock}>
            <i>Vorab noch der folgende Hinweis: Wir leiten keine Anfragen an die Studierenden 
            weiter – weder für die Teilnahme an Studien noch an Umfragen oder Ähnliches.</i>
            </div>
            <h2 className={styles.SmallHeading}>Verwendungsrichtlinie</h2>
            <div className={styles.Textblock}>
            <strong>Verwendung:</strong> Nur der Fachschaftsrat kann Nachrichten an diesen Verteiler schicken. 
            Bei Fragen oder Anmerkungen verwendet nutzt bitte die unten angegebenen Kontaktmöglichkeiten. 
            Der Fachschaftsrat verwendet diesen Verteiler anhand der Richtlinien, die auf dieser Seite eingesehen 
            werden können.
            </div>
            <div className={styles.Textblock}>
            <strong>Kontakt:</strong> Ein Kontakt zur Fachschaft ist 
            über <a href="mailto:fsgelok@uni-muenster.de">fsgelok@uni-muenster.de</a> oder 
            über die <a href="/wp/geoloek/" target="_blank">Internetseite</a> möglich.
            </div>
            <div className={styles.Textblock}>
            <strong>Datenschutz:</strong> Die E-Mail-Adressen werden nicht an den Fachschaftsrat oder 
            einzelne Mitglieder weitergegeben, da der Verteiler automatisch anhand von bestimmten Kriterien, 
            die beim Studierendensekretariat gespeichert sind, vom <a href="https://www.uni-muenster.de/IT/" target="_blank">CIT</a> erstellt 
            und betreut wird. Grundlage bildet ein Beschluss 
            der <a href="https://www.uni-muenster.de/IT/wwu-it/ordnungen/index.html" target="_blank">IV-Kommission</a> des Senats.
            </div>
            <div className={styles.Textblock}>
            <strong>Mitgliedschaft:</strong> Dieser Verteiler wird automatisch erstellt und die Mitglieder anhand von 
            definierten Kriterien aufgenommen. Eine manuelle Aufnahme ist daher nicht möglich. 
            Jedes Mitglied kann die Mitgliedschaft über 
            das <a href="https://osso.uni-muenster.de/IT-Portal/" target="_blank">IT-Portal</a> der 
            Uni Münster steuern, sich also ein- und wieder austragen. 
            Außerdem kann hier dauerhaft festgelegt werden, dass Mitgliedschaften auf den Verteilern des 
            Fachschaftsrates nicht gewünscht sind.
            </div>
            <div className={styles.Textblock}>
            Die vom Fachschaftsrat Geographie/Landschaftsökologie 
            genutzten <strong>Mail-Verteiler</strong> sind die folgenden:
            </div>
            <div className={styles.Textblock}>
                <ul>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geo-zfb-bachelor" target="_blank">geo-zfb-bachelor</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geo-med-master" target="_blank">geo-med-master</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/loek-bachelor" target="_blank">loek-bachelor</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/loek-master" target="_blank">loek-master</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geo-bachelor" target="_blank">geo-bachelor</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geo-master" target="_blank">geo-master</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geoloek-ersties" target="_blank">geoloek-ersties</a></li>
                    <li><a href="https://listserv.uni-muenster.de/mailman/listinfo/geoloek-wawi-master" target="_blank">geoloek-wawi-master</a></li>
                </ul>
            </div>
            <div className={styles.Textblock}>
            @listserv.uni-muenster.de werden ausschließlich und verantwortungsvoll 
            für <strong>folgende Inhalte</strong> verwendet:
            </div>
            <div>
                <ul>
                    <li>Inhalte, die direkt mit der <strong>Arbeit des Fachschaftsrates</strong> zusammenhängen, z.B.</li>
                    <ul>
                        <li>Ankündigungen für Veranstaltungen, wie beispielsweise Geopartys, Sommerfeste und 
                        andere wichtige Termine,</li>
                        <li><a href="/wp/geoloek/erstis/erstiwoche" target="_blank">Informationen für Erstsemester</a>,</li>
                        <li>Hinweise und Tipps für den Studienalltag oder eigene Umfragen,</li>
                    </ul>
                    <li>Inhalte, die uns vom <a href="https://asta.ms" target="_blank">AStA</a> oder 
                    vom <a href="https://stupa.ms" target="_blank">StuPa</a> zur Verfügung gestellt wurden und einen
                    direkten Bezug zum Studium haben,</li>
                    <li>Inhalte, die die Prüfungsordnungen betreffen,</li>
                    <li>Inhalte, die vom Fachbereich oder den Instituten ausgehen und unserer Meinung nach interessant
                    für euch sein könnten sowie</li>
                    <li>Ankündigungen, z.B. Restplätze für Exkursionen.</li>
                </ul>
            </div>
            <div className={styles.Textblock}>
            Wir werden die Verteiler <strong>nicht</strong> nutzen für:
            </div>
            <div className={styles.Textblock}>
                <ul>
                    <li>die Weiterleitung von Anfragen zur Teilnahme an Studien und Umfragen,</li>
                    <li>Werbung, Gewinnspiele, Gratisaktionen oder Ähnliches.</li>
                </ul>
            </div>
        </>
    )
}