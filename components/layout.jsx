import Header from "./header/header.jsx";
import Footer from "./footer.jsx";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen text-black-BoBody bg-white-true font-rubik">
      <Header />
      <main className="flex-1 w-full mx-auto ">
        {props.children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
