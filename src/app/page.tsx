import homeImg from "public/home.jpg";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="text-white">
      <Hero
        imgData={homeImg}
        imgAlt="Car Factory"
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
