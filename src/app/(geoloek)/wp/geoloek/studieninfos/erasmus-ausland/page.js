import styles from "@/app/page.module.css";

export default function Page() {
    return(
        <>
            <h1 className={styles.BigHeading}>Erasmus und Ausland</h1>
            <div className={styles.Textblock}>
            Es gibt viele verschiedene Möglichkeiten während des Studiums ein oder zwei Semester im Ausland
            zu verbringen, um dort zu studieren oder um ein Praktikum zu machen. 
            </div>
            <div className={styles.Textblock}>
            Die Universität Münster und speziell die Institute an unserem Fachbereich haben über 
            das <a href="https://www.erasmusplus.de/" target="_blank">Erasmus-Programm</a> der Europäischen Union
            Kooperationsverträge mit Partneruniversitäten in Europa. Wie genau das an unserem Fachbereich
            funktioniert, findet ihr auf der Homepage 
            des <a href="https://www.uni-muenster.de/Geowissenschaften/studium/erasmus/index.html" target="_blank">Erasmusbüros</a>.
            </div>
            <div className={styles.Textblock}>
            Das Erasmus-Programm umfasst neben der Austauschmöglichkeit innerhalb Europas eine Befreiung der
            Studiengebühren an der Gastuniversität und ein Stipendium. An unseren Instituten erfreut sich
            das Programm jedes Jahr an einer großen Zahl von Teilnehmer*innen.  
            </div>
            <div className={styles.Textblock}>
            Das <a href="https://www.uni-muenster.de/Geowissenschaften/studium/erasmus/index.html" target="_blank">Erasmusbüro</a> kümmert 
            sich dabei um die Betreuung der Bewerber*innen und den Studierenden im Ausland, den Incoming Students sowie um die Organisation 
            des Programms an unserem Fachbereich. Hier findet ihr eine Liste 
            der <a href="https://www.uni-muenster.de/Geowissenschaften/studium/erasmus/partner.html" target="_blank">Partneruniversitäten</a>.
            </div>
            <div className={styles.Textblock}>
            Ihr wollt weiter weg als nur innerhalb Europas? Dann steht euch 
            das <a href="https://www.uni-muenster.de/InternationalOffice/" target="_blank">International Office</a> zur Seite.
            Stipendien gibt es bei verschiedenen Stellen, zum Beispiel 
            vom <a href="https://www.daad.de/de/" target="_blank">DAAD</a>. Es gibt aber auch viele andere Stellen, wo ihr euch
            über Stipendien und Studienaufenthalte informieren und euch bewerben könnt. Einfach mal drauflos suchen!
            </div>
            <div className={styles.Textblock}>
            Darüber hinaus kann man zur Finanzierung auch <a href="https://www.bafög.de/bafoeg/de/das-bafoeg-alle-infos-auf-einen-blick/einzelfragen-der-foerderung/gibt-es-bafoeg-auch-im-ausland/gibt-es-bafoeg-auch-im-ausland.html" target="_blank">Auslands-BAföG</a> beantragen.
            Hier gelten sogar höhere Fördersätze, das bedeutet, dass viele Studierende im Ausland gefördert werden können, die im Inland gar nicht
            BAföG-berechtigt sind. Auf jeden Fall sollte man hier also einen Antrag stellen!
            </div>
            <div className={styles.Textblock}>
            Abschließend möchten wir euch auf jeden Fall ans Herz legen, ein Auslandsaufenthalt während des Studiums zu machen.
            Gerade beim Erasmus funktioniert die Betreuung recht gut und auch für Aufenthalte außerhalb Europas gibt es super viele Möglichkeiten!
            In einem anderen Land zu studieren oder ein Praktikum zu machen ist einfach sehr bereichernd. Und außerdem ist es verdammt spaßig.
            </div>
        </>
    )
}