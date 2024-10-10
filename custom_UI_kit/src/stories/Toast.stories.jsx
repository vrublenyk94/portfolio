import React from 'react';
import Toast from '../components/toast/toast';

export default {
  title: 'Toast',
  component: Toast,
};

const Template = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Event is over',
};