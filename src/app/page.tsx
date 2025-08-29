import { Footer } from "../../components/footer";
import Header from "../../components/header";
import { Timer } from "../../components/timer";
import HeroSection, { ProjectSection, Work } from "./routeComponents";

export default function Home() {
    return (
        <>
            <Header />
            <div className="max-md:px-4">
                <HeroSection />
                <div className="h-10 md:h-28"></div>
                <ProjectSection />
                <div className="h-10 md:h-28"></div>
                <Work />
            </div>
            {/* <Timer /> */}
            <Footer />
        </>
    );
}
