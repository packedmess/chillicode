import CookieConsent from './CookieConsent';

export default {
  title: 'App/CookieConsent',
  component: CookieConsent,
  argTypes: {},
};

const Template = args => <CookieConsent {...args} />;

export const Default = Template.bind({});
Default.args = {};
