import React from "react";
import BannerCarousel from "./BannerCarousel";
import FollowUs from "./FollowUs";
import GoldenJubli from "./GoldenJubli";
import ImportantLink from "./ImportantLink";
import LoginAdmin from "./LoginAdmin";
import Massage from "./Massage";
import MujibCorner from "./MujibCorner";
import Notice from "./Notice";
import Welcome from "./Welcome"

const Home = () => {
  return (
    <section className="pl-5">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-0 lg:gap-5">
            <div className="mb-5">
                <Massage />
                <LoginAdmin />
                <ImportantLink/>
            </div>
            <div className="col-span-4">
                <BannerCarousel/>
                <Welcome/>
                <GoldenJubli/>
            </div>
            <div>
                <MujibCorner />
                <Notice />
                <FollowUs />
            </div>
        </div>
    </section>
  );
};

export default Home;
