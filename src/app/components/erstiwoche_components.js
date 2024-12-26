import styles from "@/app/page.module.css"

export const Schedule = ({ schedule }) => {

    const tage = ["montag", "dienstag", "mittwoch", "donnerstag", "freitag"]
    const times = []
    for (var i = 9; i <= 21; i++) {
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
                {times.map(time => <Timeslot schedule={schedule} tage={tage} time={time} key={time} />)}
            </tbody>
        </table>
    )
}

const Timeslot = ({ schedule, tage, time }) => {
    return (
        <tr>
            {
                <>
                    <td>{time}</td>
                    {
                        tage.map(
                            tag => schedule[tag][time] ?
                                <Timeslotentry title={schedule[tag][time].title} detail={schedule[tag][time].detail} key={tag} /> :
                                <td key={tag} />

                        )}
                </>
            }
        </tr>
    )
}

const Timeslotentry = ({ title, detail }) => {
    return (
        <td>
            <strong>{title}</strong>
            {detail ? <><br />{detail}</> : ""}
        </td>
    )
}

export const Locations = ({locations}) => {
    return (
        <div className={styles.Textblock}>
            {
                locations.map(
                    location => <Location title={location.title} erklaerung={location.erklaerung} detail={location.detail} osmlink={location.osmlink} key={location.title} />
                )
            }
        </div>
    )
}

const Location = ({ title, erklaerung, detail, osmlink }) => {
    return (
        <>
            <strong>{title}: </strong>
            {erklaerung}
            {osmlink ? <a href={osmlink}> (Karte)</a> : ""}
            {detail ? <><br />{detail}</> : ""}
            <br />
        </>
    )
}