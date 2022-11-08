import React from "react";
import CountUp from "react-countup";

const FeatureCountUp = () => {
  return (
    <div className="my-10">
      <div className="flex justify-center gap-10 pb-6">
        <div className="lg:text-2xl font-bold text-center text-purple-500">
          <CountUp start={0} end={2600} duration={3} delay={0}></CountUp>+
          <h3>Happy Travellers</h3>
        </div>
        <div className="lg:text-2xl font-bold text-center text-purple-500">
          <CountUp start={0} end={300} duration={3} delay={0}></CountUp>+
          <h3>Memorable Tours</h3>
        </div>
        <div className="lg:text-2xl font-bold text-center text-purple-500">
          <CountUp start={0} end={100} duration={3} delay={0}></CountUp>%
          <h3>Reliable</h3>
        </div>
      </div>
    </div>
  );
};

export default FeatureCountUp;
