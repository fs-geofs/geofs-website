import "@/app/globals.css";
import Menu from "@/app/components/navbar-geoloek"
import Footer from "@/app/components/footer"

export const metadata = {
  title: "Fachschaft Geographie-Landschaftsökologie Münster",
  description: "Made with Love by GI in Münster",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div id="Page">
        <Menu />
        <div id="ContentGEOLOEK">
          {children}
        </div>
        <Footer name="GeoLoek"/>
      </div>
    </>
  );
}


function Header() {
  return (
    <header className="Header" id="HeaderGeoloek">
      <a href="/wp/geoloek">
        <h1>Fachschaft Geographie-Landschaftsökologie Münster</h1>
      </a>
    </header>
  )
}
