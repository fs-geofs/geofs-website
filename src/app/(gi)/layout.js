import "@/app/globals.css";
import Menu from "@/app/components/navbar-gi"

export const metadata = {
  title: "Fachschaft Geoinformatik",
  description: "Made with Love in Münster",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div id="Page">
        <Menu />
        <div id="ContentGI">
          {children}
        </div>
      </div>
    </>
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
