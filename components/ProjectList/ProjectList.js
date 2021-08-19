// Vendor
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import cn from 'classnames';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
// Internals
import ProjectItem from 'components/ProjectItem';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Article from 'components/Article';
import withBreakpoints from 'hocs/withBreakpoints';
import {withTranslation} from 'intl';
import {saveLayoutScrollPosition} from 'store/modules/ui';
import cases from 'public/cases.json';
import style from './style.module.scss';

function ProjectList({className, screen, t}) {
  // const projects = useSelector(({ui}) => ui.cases.filter(item => item.locale === ui.language));
  const projects = useSelector(({ui}) => cases.filter(item => item.locale === ui.language));

  const projectsPerPage = 4;
  const [projectsShown, setProjectsShown] = useState(projectsPerPage);

  const handleShowMoreProjects = () => {
    setProjectsShown(projectsShown + projectsPerPage);
  };

  const [projectToModal, setProjectToModal] = useState(null);

  const router = useRouter();

  React.useEffect(() => {
    if (router.query.case) {
      const project = projects.find(item => item.slug === router.query.case);

      setProjectToModal(project);
    }
  }, [projects, router.query.case]);

  const dispatch = useDispatch();

  const handleShowModal = slug => {
    dispatch(saveLayoutScrollPosition(window.pageYOffset));

    const url = new URLSearchParams({case: slug});
    router.push(`?${url.toString()}`, null, {shallow: true});
  };

  const handleHideModal = () => {
    router.push('', null, {shallow: true});
  };

  const scrollToTop = () => {
    const container = document.querySelector('.MuiDialog-container');
    container.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleShowNextModal = () => {
    const currentProjectIndex = projects.findIndex(item => item.slug === router.query.case);

    handleHideModal();
    if (currentProjectIndex === projects.length - 1) {
      handleShowModal(projects[0].slug);
    }

    if (!projects[currentProjectIndex + 1].previewLink) {
      handleShowModal(projects[currentProjectIndex + 1].slug);
    }
    scrollToTop();
  };

  let gutter;
  screen.isPhone ? (gutter = '16px') : screen.isTablet ? (gutter = '24px') : (gutter = '32px');

  return (
    <>
      <ResponsiveMasonry className={cn(style.ProjectList, className)} columnsCountBreakPoints={{320: 1, 1024: 2}}>
        <Masonry gutter={gutter}>
          {projects.slice(0, projectsShown).map((item, index) => (
            <ProjectItem key={index} item={item} showModal={handleShowModal} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {projectsShown < projects.length && (
        <Button color="secondary" onClick={handleShowMoreProjects} className={cn(style.button)}>
          {t('homepage:projects.button')}
        </Button>
      )}
      <Modal isModalShown={Boolean(router.query.case)} handleHideModal={handleHideModal}>
        <Article {...projectToModal} handleShowNextModal={handleShowNextModal} />
      </Modal>
    </>
  );
}

ProjectList.defaultProps = {
  className: '',
};

ProjectList.propTypes = {
  className: PropTypes.string,
  t: PropTypes.func,
  screen: PropTypes.object,
  cases: PropTypes.array,
};

export default withTranslation('common')(withBreakpoints(ProjectList));
