import Image from "next/image";
import LandingPage from "./components/landing-page/LandingPage";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background font-sans">
      <LandingPage />
    </div>
  );
}
