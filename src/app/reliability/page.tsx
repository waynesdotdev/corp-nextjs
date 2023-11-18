import reliabilityImg from "public/reliability.jpg";
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <div className="text-white">
      <Hero
        imgData={reliabilityImg}
        imgAlt="Welding"
        title="Super high reliability hosting"
      />
    </div>
  );
}
