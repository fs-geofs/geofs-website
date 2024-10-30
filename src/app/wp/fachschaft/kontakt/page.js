import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>Kontakt</h1>
            <div className={styles.Textblock}>
                Es gibt viele Möglichkeiten uns zu kontaktieren, davon könnt ihr gerne regen Gebrauch machen.
            </div>
            <h2 className={styles.SmallHeading}>Fachschaft Geoinformatik</h2>
            <div className={styles.Textblock}>
                Institut für Geoinformatik<br/>
                Universität Münster<br/>
                Raum 100.024<br/>
                48140 Münster
            </div>
            <h2 className={styles.SmallHeading}>Telefon</h2>
            <div className={styles.Textblock}>0251 83-33947</div>
            <h2 className={styles.SmallHeading}>eMail</h2>
            <div className={styles.Textblock}>
                <a href="mailto:fsgi@uni-muenster.de">fsgi@uni-muenster.de</a>
            </div>
            <h2 className={styles.SmallHeading}>Soziale Netzwerke</h2>
            <div className={styles.Textblock}>
                <a href="https://instagram.com/fsgeoinformatikms">Instagram</a><br/>
                <a href="https://facebook.com/fsgeofs">Facebook</a> (Instagram mirror)<br/>
                <a href="https://twitter.com/geofs">Twitter</a> (inaktiv)<br/>
            </div>
            <h2 className={styles.SmallHeading}>IRC</h2>
            <div className={styles.Textblock}>
                <a href="irc://irc.freenode.net/geofs">#geofs on freenode</a><br/>
                Server: irc.freenode.net<br/>
                Channel: #geofs
            </div>
        </>
    )
}