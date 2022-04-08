import { Steps as Etapes } from "antd";
import React from "react";
// import Step from "antd/lib/steps";
import "antd/dist/antd.css";

import "./index.css";
const { Step } = Etapes;
interface StepsProps {
  current: number;
  steps: string[];
}
const Steps: React.FC<StepsProps> = ({ current, steps, ...rest }) => {
  return (
    <Etapes size="small" direction="vertical" current={current} {...rest}>
      {steps.map((title, index) => (
        <Step key={index} title={title} />
      ))}
      {/* <Step title='Général' />
            <Step title='Menu' /> */}
    </Etapes>
  );
};

export default Steps;
