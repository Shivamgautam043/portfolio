import { Footer } from "../../components/footer";
import Header from "../../components/header";
import { Timer } from "../../components/timer";
import HeroSection from "./component";
import { ProjectSection } from "./routeComponents";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
             <div className="h-28"></div>
            <ProjectSection/>
            <div className="h-10"></div>
            <Timer />
            <Footer />
        </>
    );
}
