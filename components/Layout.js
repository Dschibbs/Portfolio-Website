import Navbar from './Navbar'
import Footer from './Footer'
 
export default function Layout({ footerData, children }) {

  return (
    <div className="w-full">
      <Navbar />

      <main>
        {children}
      </main>

      <Footer blok={footerData}/>
    </div>
  )
}