import breakpoints from 'styles/config/breakpoints';

import {isClient} from './env';

/**
 * Checks device based on breakpoints.json file
 * @returns {{isDesktop: boolean, isTablet: boolean, isPhone: boolean, isLaptop: boolean, isClient: boolean, isPhoneXs: boolean}}
 */
export const checkDevice = () => {
  if (isClient()) {
    const width = window.innerWidth;
    return {
      isPhoneXs: width < breakpoints.phoneXs,
      isPhone: width < breakpoints.phone,
      isTablet: width < breakpoints.tablet,
      isLaptop: width < breakpoints.laptop,
      isDesktop: width < breakpoints.desktop,
      isClient: true,
    };
  } else {
    return {
      isClient: false,
      isPhoneXs: false,
      isPhoneVertical: false,
      isPhone: false,
      isTablet: false,
      isLaptop: false,
      isDesktop: false,
    };
  }
};
