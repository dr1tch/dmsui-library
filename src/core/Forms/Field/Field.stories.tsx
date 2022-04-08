import React from "react";
import { ComponentStory } from "@storybook/react";
import Field from "./Field";
import { InputText } from "../Input";
import "./style.css";
export default {
  title: "dmsui/Forms/Field",
  component: Field,
  subcomponents: { InputText },
};

const Template: ComponentStory<typeof Field> = (args) => (
  <Field {...args}>
    <InputText placeholder="Enter your email" />
  </Field>
);
export const DMSField = Template.bind({});
DMSField.args = {
  label: "Email",
  rules: [
    { required: true, message: "Email is required!" },
    {
      type: "email",
      message: " Please enter an email!",
    },
  ],
  name: "email",
};
