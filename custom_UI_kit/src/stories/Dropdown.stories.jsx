import React from 'react';
import Dropdown from '../components/dropdown/dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const Template = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    options: ['Week', 'Day', 'Hour'],
    defaultOption: 'Week'
};