import Statistic from './Statistic';

export default {
  title: 'App/Statistic',
  component: Statistic,
  argTypes: {},
};

const Template = args => <Statistic {...args} />;

export const Default = Template.bind({});
Default.args = {};
