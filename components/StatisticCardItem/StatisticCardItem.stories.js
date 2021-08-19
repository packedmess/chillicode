import StatisticCardItem from './StatisticCardItem';

export default {
  title: 'App/StatisticCardItem',
  component: StatisticCardItem,
  argTypes: {},
};

const Template = args => <StatisticCardItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
