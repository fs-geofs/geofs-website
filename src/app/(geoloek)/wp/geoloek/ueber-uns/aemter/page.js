import styles from "@/app/page.module.css";

export default function Page() {
    return (
        <>
            <h1 className={styles.BigHeading}>Ämter und Gremien</h1>
            <div className={styles.Textblock}>
                Wir, das heißt die gewählten Mitglieder des Fachschaftsrates
                Geographie/Landschaftsökologie, sind für euch als studentische
                Vertreter in diversen Gremien vertreten. Wer mehr zum Thema
                Organisation und Legitimation der „verfassten Studierendenschaft“
                wissen möchte, findet <a href="http://www.stupa.ms/studierendenschaft/">hier</a> nähere
                Informationen.
            </div>
            <div>
                Wer euch in welchen Gremien vertritt, könnt ihr im Folgenden nachlesen.
                Da die Gremien fachbereichsweit besetzt werden, sind auch Mitglieder der
                Fachschaftsräte Geoinformatik (GI) und Geowissenschaften (Gw) in den Gremien vertreten.
            </div>
        </>
    )
}