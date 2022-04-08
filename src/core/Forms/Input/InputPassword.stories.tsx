import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputPassword } from "./Input";
import "./index.css";
export default {
  title: "dmsui/Forms/Input",
  component: InputPassword,
};

const Template: ComponentStory<typeof InputPassword> = (args) => (
  <InputPassword {...args} />
);
export const DMSInputPassword = Template.bind({});
DMSInputPassword.args = {
  placeholder: "Enter your password",
  isDisabled: false,
};
