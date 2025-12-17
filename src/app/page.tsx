import { Footer } from "../../components/footer";
import Header from "../../components/header";
import HeroSection, { ContactMe, ProjectSection, Work } from "./routeComponents";

export default function Home() {
    return (
        <>
            <Header />
            <div className="max-md:px-4">
                <HeroSection />
                <div className="h-9 md:h-28"></div>
                <ProjectSection />
                <div className="h-9 md:h-28"></div>
                <Work />
                <div className="h-9 md:h-28"></div>
                <ContactMe />
            </div>
            {/* <Timer /> */}
            <Footer />
        </>
    );
}
