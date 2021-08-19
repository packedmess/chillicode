import CardList from './CardList';

export default {
  title: 'App/CardList',
  component: CardList,
  argTypes: {},
};

const Template = args => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {};
