import React from 'react';
import Input from '../components/input/input';

export default {
  title: 'Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'password',
  label: 'password*',
  placeholder: 'Enter username',
  disabled: false,
};

