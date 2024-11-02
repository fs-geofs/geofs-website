import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>Newsletter</h1>
            <div className={styles.Textblock}>
                Um sich für den Newsletter anzumelden, muss man sich auf
                den <a href="https://listserv.uni-muenster.de/mailman/listinfo/geoinf-newsletter/general">Seiten des Listenservers</a> eintragen.
            </div>
            <div className={styles.Textblock}>
                Dort muss man im Abschnitt Abonnieren von <em>geoinf-newsletter</em> seine E-Mailadresse und ein
                Passwort eingeben (die Sicherheitshinweise sind zu beachten) und den Anweisungen folgen.
            </div>
            <div className={styles.Textblock}>
                Abmelden funktioniert ähnlich, <a href="https://listserv.uni-muenster.de/mailman/listinfo/geoinf-newsletter/general">dieselbe Seite</a> aufrufen
                und dann bei Austragen / Ändern einer Mailadresse seine E-Mailadresse angeben und den Anweisungen folgen.
            </div>
            <div className={styles.Textblock}>
                Sollte es immer noch Probleme mit dem Newsletter geben (zB. kein Empfang, keine Anmeldung möglich,
                Abmeldung funktioniert nicht), dann einfach an uns wenden.
            </div>
        </>
    )
}