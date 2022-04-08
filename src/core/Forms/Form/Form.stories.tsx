import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Form from "./Form";
import { InputText, InputPassword } from "../Input";
import Field from "../Field";
import { Form as Formulaire } from "antd";
export default {
  title: "dmsui/Forms/Form",
  component: Form,
  subcomponents: {
    Field,
    InputText,
    InputPassword,
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const [form] = Formulaire.useForm();
  return (
    <Form {...args} form={form}>
      <Field
        label="Email"
        rules={[
          { required: true, message: "Email is required!" },
          {
            type: "email",
            message: " Please enter an email!",
          },
        ]}
        name="email"
      >
        <InputText placeholder="Enter your email" />
      </Field>
      <Field
        label="Password"
        rules={[{ required: true, message: "Password is required!" }]}
        name="password"
      >
        <InputPassword placeholder="Enter your password" />
      </Field>
      <button
        type="button"
        style={{
          padding: "6px 12px",
          backgroundColor: "rgba(30, 64, 175, .9)",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "1rem",
        }}
        className="px-3 py-2 bg-blue-800"
        onClick={async () => {
          await form.validateFields(["email", "password"]);
        }}
      >
        Login
      </button>
    </Form>
  );
};
export const DMSForm = Template.bind({});

DMSForm.args = {
  initialValues: {
    email: "",
    password: "",
  },
};
