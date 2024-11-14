import Category from "@/components/Category";
import FeaturedVideos from "@/components/FeatureVideos";
import Homepage from "@/components/Home";
import Must from "@/components/must";
import Trends from "@/components/Trends";

export default function Home() {
  return (
  <div className="bg-white">

    <Homepage/>

    <Must/>

    <Category/>

    <FeaturedVideos/>

    <Trends/>
    
  </div>
  );
}
