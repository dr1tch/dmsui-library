import React from "react";
import { ComponentStory } from "@storybook/react";
import { InputText } from "./Input";
import "./index.css";
export default {
  title: "dmsui/Forms/Input",
  component: InputText,
};

const Template: ComponentStory<typeof InputText> = (args) => (
  <InputText {...args} />
);
export const DMSInputText = Template.bind({});
DMSInputText.args = {
  placeholder: "This is a text input",
  isDisabled: false,
};
