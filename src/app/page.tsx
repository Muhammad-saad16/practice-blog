import BlogCards from "./component/blog";
import Contact from "./component/contact";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";


export default function Home() {
  return (
    <div>
   <Header />
   <Hero />
   <BlogCards />
   <Contact />
   <Footer />
    </div>
  );
}
