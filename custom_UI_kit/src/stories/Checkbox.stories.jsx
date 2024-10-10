import React from 'react';
import Checkbox from '../components/checkbox/checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Text'
};

