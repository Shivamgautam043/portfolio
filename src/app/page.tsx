import { Footer } from "../../components/footer";
import Header from "../../components/header";
import { Timer } from "../../components/timer";
import HeroSection from "./component";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <div className="h-10"></div>
            <Timer />
            <Footer />
        </>
    );
}
