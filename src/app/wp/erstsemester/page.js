import {redirect} from 'next/navigation'

/*
Diese Seite hat keine Content und soll nicht verlinkt werden.
Autamatisches Reirect zur ersten Child-Seite (aus der Navbar)
falls irgendein findiger GI diese URL ansteuert.
*/

export default function () {
    redirect("/wp/erstsemester/studienstart")
}