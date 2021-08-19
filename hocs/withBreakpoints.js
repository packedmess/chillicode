// Vendor
import React from 'react';
import PropTypes from 'prop-types';
// Internal
import {createHocName} from 'utils/hocs';
import {checkDevice} from 'utils/ui';

/**
 * Ставит обработчики resize на window при маунте и анмаунте
 * компонента и добавляет объект screen в props дочернего компонента:
 *
 * interface screen = {
 *   isPhoneXs: width < breakpoints.phoneXs,
 *   isPhoneVertical: width < breakpoints.phoneVertical,
 *   isPhone: width < breakpoints.phone,
 *   isTablet: width < breakpoints.tablet,
 *   isLaptop: width < breakpoints.laptop,
 *   isDesktop: width < breakpoints.desktop,
 *   isClient: true,
 * };
 *
 * Пример использования:
 * ---------------------
 * import {withBreakpoints} from 'hocs';
 * const YourComponent = ({ screen }) => (
 *  {screen.isPhone ? 'render for phone' : 'render for desktop'}
 * );
 * export default withBreakpoints(YourComponent);
 * ---------------------
 * или как ES6 декоратор
 * ---------------------
 * @withBreakpoints
 * class YourComponent extends React.Component {...}
 * ---------------------
 */
export default Component => {
  return class Hoc extends React.PureComponent {
    static propTypes = {
      children: PropTypes.node,
    };

    static displayName = createHocName(Component, 'withBreakpoints');

    state = checkDevice();

    componentDidMount() {
      this.recognizeScreenSize();
      window.addEventListener('resize', this.recognizeScreenSize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.recognizeScreenSize);
    }

    recognizeScreenSize = () => {
      this.setState(checkDevice());
    };

    render() {
      return <Component {...this.props} screen={this.state} />;
    }
  };
};
