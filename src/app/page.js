import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.BigHeading}>Herzlich Willkommen...</h1>
      <div className={styles.Textblock}>
        …auf den Seiten der Fachschaft Geoinformatik an der Westfälischen Wilhelms-Universität Münster.
        Auf den folgenden Seiten findet ihr Informationen zum Studium, der Fachschaft und vielem mehr,
        was für euch als (zukünftige) Studierende der Geoinformatik interessant sein könnte.
      </div>
      <Termine />
      <Praesidienste />
      <Newsletter />
    </>
  );
}

function Termine() {

  const termine = [
    {
      was: "Vorlesungsfreie Zeit",
      von: "06.02.2023",
      bis: "31.03.2023"
    },
    {
      was: "Vorlesungszeit SoSe 2023",
      von: "03.04.2023",
      bis: "14.07.2023"
    }
  ]

  return(
    <>
      <h2 className={styles.SmallHeading}>Termine</h2>
      <table className={styles.Table}>
        <tbody>
          {
            termine.map(
              termin => {
                return(
                  <tr>
                    <td className={styles.category}>{termin.was}</td>
                    <td>{termin.von} - {termin.bis}</td>
                  </tr>
                )
              }
            )
          }
        </tbody>
      </table>
    </>
  )
}

function Praesidienste() {

  const dienste = {
    montag: {
      8: "Flo, Andi", 9: "Flo, Andi", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: ""
    },
    dienstag: {
      8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: ""
    },
    mittwoch: {
      8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: "Sitzung!"
    },
    donnerstag: {
      8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: ""
    },
    freitag: {
      8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "", 15: "", 16: "", 17: "", 18: ""
    }
  }

  const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
  const times = []
  for(var i = 8; i<=18; i++){
    times.push(i)
  }

  return(
    <>
      <h2 className={styles.SmallHeading}>Präsenzzeiten im Fachschaftsraum</h2>
      <div className={styles.Textblock}>
          <div className={styles.Textblock}>
          Während der Vorlesungszeit sind zu diesen Zeiten Fachschaftler und Fachschaftlerinnen im Raum anzutreffen,
          die euch gerne Fragen beantworten. In den Semesterferien sind wir nach Vereinbarung vor Ort und stets per Mail
          und Facebook/Instagram erreichbar.
        </div>
        <div className={styles.Textblock}>
          Unseren Raum 024 findet ihr im Erdgeschoss des GEO1 – wenn man rein kommt auf der rechten Seite, direkt gegenüber vom Hörsaal!
          Die Sitzungen finden in Präsenz statt. Im Normalfall finden diese in Raum 242 des GEO1 statt, also im Seminarraum im 2. Stock.
          Kommt also gerne auch zur Sitzung vorbei, alternativ könnt ihr euch auf Discord dazu schalten,
          dazu müsstet ihr euch einmal rechtzeitig vor der Sitzung bei uns per Mail melden.
          In den Semesterferien finden die Sitzungen nur unregelmäßig statt, schreibt uns im Zweifelsfall vorher eine Mail,
          damit wir euch informieren können, wann die nächste Sitzung stattfindet.
        </div>
      </div>
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
        {
          times.map(time => <Praeasitime dienste={dienste} tage={tage} time={time}/>)
        }
        </tbody>
      </table>
    </>
  )
}

const Praeasitime = ({dienste, tage, time}) => {

  return(
      <tr>
        <td>{time} - {time+1}</td>
        {
          tage.map(tag => <td>{dienste[tag][time]}</td>)
        }
      </tr>
  )
}

const Newsletter = () => {
  return (
    <>
      <h2 className={styles.SmallHeading}>Newsletter</h2>
      <div className={styles.Textblock}>
        Um euch regelmäßig über wichtige Neuigkeiten und Termine zu informieren, haben wir einen E-Mail-Newsletter
        eingerichtet. <a href="/wp/fachschaft/newsletter">Hier</a> findet ihr alle Infos zur Anmeldung (und Abmeldung).
      </div>
    </>
  )
}