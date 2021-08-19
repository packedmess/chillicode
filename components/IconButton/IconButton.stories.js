import TestIcon from 'public/assets/icons/test-icon.svg';
import IconButton from './IconButton';

export default {
  title: 'App/Buttons/IconButton',
  component: IconButton,
  argTypes: {},
};

const Template = args => {
  return (
    <IconButton {...args}>
      <TestIcon />
    </IconButton>
  );
};

export const Default = Template.bind({});
Default.args = {};
