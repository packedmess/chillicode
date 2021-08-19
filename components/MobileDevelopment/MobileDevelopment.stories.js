import MobileDevelopment from './MobileDevelopment';

export default {
  title: 'App/MobileDevelopment',
  component: MobileDevelopment,
  argTypes: {},
};

const Template = args => <MobileDevelopment {...args} />;

export const Default = Template.bind({});
Default.args = {};
