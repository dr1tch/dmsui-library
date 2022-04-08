import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputNumber } from "./Input";
import "./index.css";
export default {
  title: "dmsui/Forms/Input",
  component: InputNumber,
};

const Template: ComponentStory<typeof InputNumber> = (args) => (
  <InputNumber {...args} />
);
export const DMSInputNumber = Template.bind({});
DMSInputNumber.args = {
  placeholder: "This is a Number input",
  isDisabled: false,
};
