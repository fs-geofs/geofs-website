import styles from "@/app/page.module.css"

export default function () {
    return (
        <>
            <h1 className={styles.BigHeading}>English</h1>
            <div className={styles.Textblock} style={{ border: "3px solid red", padding: "5px" }}>
                <strong>Under Construction!</strong>
            </div>
            <h2 className={styles.SmallHeading}>Who manages this sites</h2>
            <div className={styles.Textblock}>
                We, the „Fachschaftsrat“, are the elected student representatives of the BSc/MSc Geoinformatics
                and MSc Geospatial Technologies students. We represent the GI-students in different committees,
                help you with all sorts of problems during your study and organise social events for the students like
                the ‚legendary‘ Geoparty and the Christmas party.
            </div>
            <div className={styles.Textblock}>
                Being a student representative is voluntary work and we are always happy to welcome new members at
                our weekly meeting which is every Wednesday at 6pm (during semester).
            </div>
            <div className={styles.Textblock}>
                Our office is at the GEO1 building, Heisenbergstraße 2, in room 100.024 (right hand side when entering
                the building).
            </div>

            <h2 className={styles.SmallHeading}>Periodical Events</h2>
            <div className={styles.Textblock}>
                Reocurring Events such as:
                <ul>
                    <li>Elections (November, June)</li>
                    <li>geofs.grillen() (May)</li>
                    <li>geoparty (November) / Erstiparty (freshmen party) (May)</li>
                    <li>Erstiwoche (freshmen’s week) (October, last week before lectures start)</li>
                </ul>
            </div>
            <div className={styles.Textblock}>
                There are several Events which we, your students representative, are organizing for you!<br />
                <strong>geofs.grillen()</strong>: Once or twice a year we arrage a big barbecue where all GI students meet,
                eat, talk, meet new people and have a lot of fun.<br />
                <strong>Geo / Erstiparty</strong>: On the beginning of each semester we organize a party at the Triptychon together
                with the geography and landscape ecology students representatives.<br />
            </div>

            <h2 className={styles.SmallHeading}>Studying</h2>
            <div className={styles.Textblock}>
                <ol>
                    <li>Rights of the Student</li>
                    <li>Duties</li>
                    <li>Study Programm</li>
                    <li>Legal Situ @ NRW</li>
                    <li>Legal Situ @ Münster University</li>
                </ol>
            </div>

            <h2 className={styles.SmallHeading}>Living in Münster</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li>Bikes are Gods in Münster</li>
                    <li>Find a flatshare on <a href="https://wg-gesucht.de">wg-gesucht.de</a></li>
                </ul>
            </div>

            <h2 className={styles.SmallHeading}>Structure of the University</h2>
            <div className={styles.Textblock}>
                <ul>
                    <li>Something about the Faculty, coooperations with other faculties</li>
                </ul>
            </div>

            <h2 className={styles.SmallHeading}>Elections</h2>
            <div className={styles.Textblock}>
                As already mentioned in the introduction, the students representatives are elected. But how?
            </div>
            <div className={styles.Textblock}>
                Each Wintersemester the students of the University of Münster (including Mundus students) vote the
                Students Parliament as well as the „Fachschaftsvertretung“.
            </div>
            <div className={styles.Textblock}>
                For us, it is very important that as many students as possible give their vote, since this is what
                legitizes us to represent the student body.
            </div>
            <div className={styles.Textblock}>
                If you have difficulties to understand the voting documents (unfortunatley they are only distributed
                in German), you can ask the electoral staff, other students, or us. We will also try and prepare an
                unofficial translation for you.
            </div>

            <h2 className={styles.SmallHeading}>Students Parliament</h2>
            <div className={styles.Textblock}>
                The Students Pariliament is a part of the students self organization. It has political parties in it.
                They are discussing about weired things, but also very useful ones like providing the traintickets for
                North-Rhine-Wetfalia for all students.
            </div>

            <h2 className={styles.SmallHeading}>Fachschaftenvertretung and Fachschaftsrat</h2>
            <div className={styles.Textblock}>
                You can also vote for a candidate for the Fachschaftsvertretung (FSV). The FSV which will then appoint
                the Fachschaftsrat (known to you as the students representatives). We are the first contact point for all
                questions and problems during your study. You can contact us via mail (fsgi@uni-muenster.de), or just drop
                in our office when we have office hours or the door is open.
            </div>

            <h2 className={styles.SmallHeading}>Faculty Council</h2>
            <div className={styles.Textblock}>
            </div>

            <h2 className={styles.SmallHeading}>Senatory</h2>
            <div className={styles.Textblock}>
            </div>

            <h2 className={styles.SmallHeading}>AStA</h2>
            <div className={styles.Textblock}>
                <ol>
                    <li>Possibilities</li>
                    <li>Legal Advice</li>
                    <li>Car-Rental</li>
                </ol>
            </div>
        </>
    )
}