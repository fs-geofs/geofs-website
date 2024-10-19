import styles from "./../../page.module.css";

export default function () {

    const erstiwoche = {
        year: "2024/25",
        start: "04.10.2024",
        end: "07.10.2024",
        schedule: {
            montag: {
                9: null,
                10: {
                    title: "Begrüßung",
                    detail: "GEO1, HS"
                },
                11: {
                    title: "Begrüßung",
                    detail: "GEO1, HS"
                },
                12: null,
                13: {
                    title: "Mittagessen",
                    detail: "Mensa am Ring oder Bistro Denkpause"
                },
                14: {
                    title: "Einführung ins Studium",
                    detail: "Lernatelier"
                },
                15: null,
                16: null,
                17: null,
                18: null,
                19: {
                    title: "Spieleabend",
                    detail: "GEO1"
                },
                20: {
                    title: "Spieleabend",
                    detail: "GEO1"
                },
                21: {
                    title: "Spieleabend",
                    detail: "GEO1"
                }
            },
            dienstag: {
                9: null,
                10: {
                    title: "Geo-Brunch",
                    detail: "ab 10:30, Lichthof und Lernatelier GEO1"
                },
                11: {
                    title: "Stadtrallye",
                    detail: "ab 11:30, Start GEO1"
                },
                12: {
                    title: "Stadtrallye",
                    detail: null
                },
                13: {
                    title: "Stadtrallye",
                    detail: null
                },
                14: {
                    title: "Stadtrallye",
                    detail: null
                },
                15: {
                    title: "Stadtrallye",
                    detail: null
                },
                16: {
                    title: "Stadtrallye",
                    detail: null
                },
                17: {
                    title: "Stadtrallye",
                    detail: null
                },
                18: null,
                19: {
                    title: "Knepenabend",
                    detail: "mit Geowissenschaften"
                },
                20: null,
                21: null
            },
            mittwoch: {
                9: null,
                10: null,
                11: {
                    title: "GI-Fragestunde",
                    detial: "GI Fachschaftsraum (GEO1)"
                },
                12: {
                    title: "Mittagessen",
                    detail: "Mensa am Ring oder Bistro Denkpause"
                },
                13: {
                    title: "Geofs-Rallye",
                    detail: "Start am Mathe-Gebäude"
                },
                14: null,
                15: null,
                16: null,
                17: null,
                18: null,
                19: {
                    title: "Filmabend",
                    detail: "GEO1"
                },
                20: {
                    title: "Filmabend",
                    detail: null
                },
                21: {
                    title: "Filmabend",
                    detail: null
                }
            },
            donnerstag: {
                9: null,
                10: null,
                11: null,
                12: {
                    title: "Stadt-Exkursion",
                    detail: "Start an Überwasserkirche"
                },
                13: {
                    title: "xkursion",
                    detail: null
                },
                14: {
                    title: "Exkursion",
                    detail: null
                },
                15: {
                    title: "Exkursion",
                    detail: null
                },
                16: null,
                17: null,
                18: null,
                19: {
                    title: "Kneipenrallye",
                    detail: "Start am Domplatz"
                },
                20: {
                    title: "Kneipenrallye",
                    detail: null
                },
                21: {
                    title: "Kneipenrallye",
                    detail: null
                }
            },
            freitag: {
                9: null,
                10: null,
                11: {
                    title: "Anmeldung ErstiWE",
                    detail: "GEO1"
                },
                12: {
                    title: "Verabschiedung",
                    detail: "GEO1, HS"
                },
                13: {
                    title: "Vorstellung Organisationen",
                    detail: "GEO1, HS"
                },
                14: {
                    title: "Vorstellung Organisationen",
                    detail: null
                },
                15: null,
                16: null,
                17: null,
                18: null,
                19: null,
                20: {
                    title: "Gemeinsamer Kneipenabend",
                    detail: "Shooter Stars"
                },
                21: {
                    title: "Gemeinsamer Kneipenabend",
                    detail: null
                }
            }
        },
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
                <em>Nächset Ersti-Woche</em>  (Wintersemester {erstiwoche.year})also vom 04.10.2022 – 07.10.2022.
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
            <Schedule schedule={erstiwoche.schedule}/>
            <h2 className={styles.SmallHeading}>Adresskürzel, und was sich dahinter verbirgt</h2>
            {
                erstiwoche.locations.map(
                    location => <Location title={location.title} erklaerung={location.erklaerung} detail={location.detail} osmlink={location.osmlink}/>
                )
            }
            <div className={styles.Textblock}>
                Hinweis: Die Teilnahme an unserer Ersti-Woche ist nur für Studierende der Geoinformatik im ersten Semester möglich.
            </div>
        </>
    )
}

const Schedule = ({schedule}) => {

    const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
    const times = []
    for(var i = 9; i<=21; i++){
        times.push(i)
    }

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
            <tbody>
                {times.map(time => <Timeslot schedule={schedule} tage={tage} time={time}/>)}
            </tbody>
        </table>
    )
}

const Timeslot = ({schedule, tage, time}) => {
    return (
        <tr>
            {
                <>
                    <td>{time}</td>
                    {
                        tage.map(
                        tag => schedule[tag][time] ?
                        <Timeslotentry title={schedule[tag][time].title} detail={schedule[tag][time].detail} /> :
                        <td/>

                    )}
                </>
            }
        </tr>
    )
}

const Timeslotentry = ({title, detail}) => {
    return(
        <td>
            <strong>{title}</strong>
            {detail ? <><br/>{detail}</> : ""}
        </td>
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