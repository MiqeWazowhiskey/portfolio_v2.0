import React from 'react';

import Button from '../components/common/button/Button';
export default {
  title: 'Button',
  component: Button,
  argTypes: {handleClick: {action: "handleClick"}},
}

const Template = (args) => <Button {...args} />

export const Coral_1 = Template.bind({});
Coral_1.args = {
   backgroundColor: "coral",
   size:"lg",
   label: "Too much pressure on me!",
   cursor: "pointer"
};