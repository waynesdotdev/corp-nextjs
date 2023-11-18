import performanceImg from "public/performance.jpg";
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <div className="text-white">
      <Hero
        imgData={performanceImg}
        imgAlt="Car Factory"
        title="We serve high performance applications"
      />
    </div>
  );
}
