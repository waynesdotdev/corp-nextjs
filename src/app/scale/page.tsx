import scaleImg from "public/scale.jpg";
import Hero from "@/components/Hero";

export default function PerformancePage() {
  return (
    <div className="text-white">
      <Hero
        imgData={scaleImg}
        imgAlt="steel factory"
        title="Scale you app infinitly"
      />
    </div>
  );
}
