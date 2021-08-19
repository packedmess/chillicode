import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {Element} from 'react-scroll';
import MainLayout from 'layouts/MainLayout';
import Intro from 'components/Intro';
import Technologies from 'components/Technologies';
import MobileDevelopment from 'components/MobileDevelopment';
import Projects from 'components/Projects';
import Principles from 'components/Principles';
import Statistic from 'components/Statistic';
import Contact from 'components/Contact';
import {setCases, setLanguage} from 'store/modules/ui';
import {useEffect} from 'react';

function Index({cases, language}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCases(cases));
    dispatch(setLanguage(language));
  }, []);

  return (
    <MainLayout>
      <Intro />
      <div className="sectionsWrapper">
        <Element id="Stack">
          <Technologies />
          <MobileDevelopment />
        </Element>
      </div>
      <Projects />
      <Principles />
      <Statistic />
      <Contact />
    </MainLayout>
  );
}

Index.getInitialProps = async ({req}) => {
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/cases?_locale=all`);
  // const cases = await res.json();

  return {
    namespacesRequired: ['common', 'homepage'],
    // cases,
    language: req?.language || '',
  };
};

Index.propTypes = {
  cases: PropTypes.array,
  language: PropTypes.string,
};

export default Index;
