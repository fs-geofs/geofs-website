import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Herzlich Willkommen...</h1>
      <div>
      …auf den Seiten der Fachschaft Geoinformatik an der Westfälischen Wilhelms-Universität Münster.
      Auf den folgenden Seiten findet ihr Informationen zum Studium, der Fachschaft und vielem mehr,
      was für euch als (zukünftige) Studierende der Geoinformatik interessant sein könnte.
      </div>
      <Termine />
      <Praesidienste />
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
      <h2>Termine</h2>
      <table>
        <tbody>
          {
            termine.map(
              termin => {
                return(
                  <tr>
                    <td><strong>{termin.was}</strong></td>
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
      <h2>Präsenzzeiten im Fachschaftsraum</h2>
      <div>
        Während der Vorlesungszeit sind zu diesen Zeiten Fachschaftler und Fachschaftlerinnen im Raum anzutreffen,
        die euch gerne Fragen beantworten. In den Semesterferien sind wir nach Vereinbarung vor Ort und stets per Mail
        und Facebook/Instagram erreichbar.<br/>
        Unseren Raum 024 findet ihr im Erdgeschoss des GEO1 – wenn man rein kommt auf der rechten Seite, direkt gegenüber vom Hörsaal! Die Sitzungen finden in Präsenz statt. Im Normalfall finden diese in Raum 242 des GEO1 statt, also im Seminarraum im 2. Stock. Kommt also gerne auch zur Sitzung vorbei, alternativ könnt ihr euch auf Discord dazu schalten, dazu müsstet ihr euch einmal rechtzeitig vor der Sitzung bei uns per Mail melden. Eine Anleitung wie ihr auf unseren Discord Server gelangt findet ihr hier. In den Semesterferien finden die Sitzungen nur unregelmäßig statt, schreibt uns im Zweifelsfall vorher eine Mail, damit wir euch informieren können, wann die nächste Sitzung stattfindet.
      </div>
      <table>
        <thead>
          <tr>
            <td></td>
            <td>Montag</td>
            <td>Dienstag</td>
            <td>Mittwoch</td>
            <td>Donnerstag</td>
            <td>Freitag</td>
          </tr>
        </thead>
        {
          times.map(time => <Praeasitime dienste={dienste} tage={tage} time={time}/>)
        }
      </table>
    </>
  )
}

const Praeasitime = ({dienste, tage, time}) => {

  return(
    <tbody>
      <tr>
        <td>{time} - {time+1}</td>
        {
          tage.map(tag => <td>{dienste[tag][time]}</td>)
        }
      </tr>
    </tbody>
  )
}