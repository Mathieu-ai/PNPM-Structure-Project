import { Button } from "./Button";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Atoms/Button",
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: "Hello World",
};
