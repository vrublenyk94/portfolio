import React from 'react';
import Textarea from '../components/textarea/textarea';

export default {
  title: 'Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: 'textarea',
  label: 'textarea',
  placeholder: 'Write something',
  cols: '63',
  rows: '5',
  width: '300px',
  disabled: false,
};