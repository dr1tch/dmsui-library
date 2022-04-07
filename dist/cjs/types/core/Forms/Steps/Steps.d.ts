import React from "react";
import "antd/dist/antd.css";
import "./index.css";
interface StepsProps {
    current: number;
    steps: string[];
}
declare const Steps: React.FC<StepsProps>;
export default Steps;
