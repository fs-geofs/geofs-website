import styles from "./../page.module.css";

export default function () {

    const erstiwoche = {
        year: "2024/25",
        start: "04.10.2024",
        end: "07.10.2024",
        schedule: null,
        locations: [
            {  
                title: "GEO1",
                erklaerung: '"Unser" Gebäude, Adresse: Heisenbergstr. 2',
                detail: null,
                osmlink: null
            },
            {  
                title: "HS/Hörsaal",
                erklaerung: '"Unser" Hörsaal im EG des GEO1',
                detail: null,
                osmlink: null
            },
            {  
                title: "Lernatelier",
                erklaerung: "Im EG des GEO1, Raum-Nr. 10",
                detail: null,
                osmlink: null
            },
            {  
                title: "Fachschaftsraum",
                erklaerung: "Im EG des GEO1, gegenüber des Hörsaals, Raum 24",
                detail: null,
                osmlink: null
            },
            {  
                title: "323, 401, 513",
                erklaerung: "Raumnummern der Seminarräume im 3., 4., un 5. Stock",
                detail: null,
                osmlink: null
            },
            {  
                title: "StudLab",
                erklaerung: "Computerräume im 1. OG des GEO1",
                detail: null,
                osmlink: null
            },
            {  
                title: "FS Mathe/Info",
                erklaerung: "Raum der Fachschaft Mathe und Informatik, Einsteinstr. 64, Raum-Nr. 010",
                detail: "Dies ist der Treffpunkt für die geofs-Rallye. Wer den Weg nicht kennt, kann gerne vorher zur Fragestunde kommen und dann zusammen mit uns dorthin laufen. Um 12:45 gehen wir am Fachschaftsraum los.",
                osmlink: null
            },
            {  
                title: "Mensa am Ring",
                erklaerung: "Große Mensa am Coesfeler Kreuz, wir gehen gemeinsam hin",
                detail: null,
                osmlink: null
            },
            {  
                title: "Bistro Denkpause",
                erklaerung: "Kleinere Mensa direkt gegenüber des GEO 1 (auch dort gehen wir gemeinsam hin)",
                detail: "(In welche Mensa wir gehen entscheidet sich ggf. spontan, vermutlich aber Bistro Denkpause)",
                osmlink: null
            },
            {
                title: "Domplatz",
                erklaerung: "Treffpunkt für die Kneipenrallye",
                detail: null,
                osmlink: null
            },
            {
                title: "Shooter Stars",
                erklaerung: "Gemeinsamer Kneipenabend zum Abschluss",
                detail: null,
                osmlink: null
            }
        ]
    }

    return (
        <>
            <h1 className={styles.BigHeading}>Ersti-Woche</h1>
            <div className={styles.Textblock}>
                Wir laden alle Geoinformatik-Erstsemesterstudierende sehr herzlich zu unserer Ersti-Woche
                (manchmal auch -Woche genannt) ein!
                Diese findet immer in der Woche vor Vorlesungsbeginn statt.
                <br/>
                <em>Nächset Ersti-Woche (Wintersemester {erstiwoche.year})</em> also vom 04.10.2022 – 07.10.2022.
            </div>
            <div className={styles.Textblock}>
                Wir werden euch alles wichtige rund ums Studium erklären, damit ihr gelassen und locker ins Studium starten könnt.
                Keine Panik wegen Anmeldefristen & Co – wir erklären euch alles!
                Außerdem lernt ihr schon einmal eure Kommilitonen kennen, mit denen ihr bald gemeinsam studieren werdet.
                Und für reichlich Spaß wird natürlich auch gesorgt.
            </div>
            <div className={styles.Textblock}>
                Solltet ihr in der Ersti-Woche keine Zeit haben, erklären wir euch alles Wichtige auch gerne später,
                die Fristen sind lang genug! Wenn ihr es irgendwie einrichten könnt,
                legen wir euch die Teilnahme aber sehr ans Herz :-)
            </div>
            <h2 className={styles.SmallHeading}>Ablaufplan Geoinformatik</h2>
            <div className={styles.Textblock}>
                Momentan planen wir die Ersti-Woche als Präsenz-Veranstaltung. Da sich die Corona-Lage kurzfristig ändern kann
                und wir uns an die aktuellen Verordnungen halten müssen, kann es sein, dass wir die Ersti-Woche in ein Hybrid-
                oder Online Format abändern müssen. Checkt bitte regelmäßig diese Homepage, damit ihr wichtige Infos dazu nicht
                verpasst!
            </div>
            <Schedule />
            <h2 className={styles.SmallHeading}>Adresskürzel, und was sich dahinter verbirgt</h2>
            {
                erstiwoche.locations.map(
                    location => <Location title={location.title} erklaerung={location.erklaerung} detail={location.detail} osmlink={location.osmlink}/>
                )
            }
        </>
    )
}

const Schedule = () => {
    return (
        <table className={styles.Table}>
            <thead>
                <tr>
                    <td>Zeit</td>
                    <td>Montag</td>
                    <td>Dienstag</td>
                    <td>Mittwoch</td>
                    <td>Donnerstag</td>
                    <td>Freitag</td>
                </tr>
            </thead>
        </table>
    )
}

const Location = ({title, erklaerung, detail, osmlink}) => {
    return(
        <>
            <strong>{title}: </strong>
            {erklaerung}
            {osmlink ? <a href={osmlink}> (Karte)</a>: ""}
            {detail ? <><br/>{detail}</> : ""}
            <br/>
        </>
    )
}