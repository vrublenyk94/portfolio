import React from 'react';
import Datepicker from '../components/datepicker/datepicker';

export default {
  title: 'Datepicker',
  component: Datepicker,
};

const Template = (args) => <Datepicker {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    date: new Date()
};