import 'bootstrap/dist/css/bootstrap.min.css';

import "@/app//globals.css";
import Menu from "@/app/components/navbar"

export const metadata = {
  title: "Fachschaft Geoinformatik",
  description: "Made with Love in Münster",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div id="Page">
          <Menu />
          <div id="Content">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}


function Header() {
  return (
    <header className="Header" id="HeaderGI">
      <a href="/">
        <h1>Fachschaft Geoinformatik Münster</h1>
      </a>
    </header>
  )
}
