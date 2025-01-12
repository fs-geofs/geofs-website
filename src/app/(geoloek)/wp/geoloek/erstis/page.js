import {redirect} from 'next/navigation'

/*
Diese Seite hat keine Content und soll nicht verlinkt werden.
Autamatisches Reirect zur ersten Child-Seite (aus der Navbar)
falls irgendein findiger Nutzer diese URL ansteuert.
*/

export default function Content () {
    redirect("/wp/geoloek/erstis/erstiwoche")
}