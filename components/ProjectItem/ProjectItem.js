// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import style from './style.module.scss';
import ProjectItemChildren from './ProjectItemChildren';

function ProjectItem({item, showModal}) {
  const handleShowModal = () => {
    showModal(item.slug);
  };

  if (item.previewLink) {
    return (
      <a
        className={cn(style.ProjectItem)}
        tabIndex={0}
        href={item.previewLink}
        target="_blank"
        rel="nofollow noreferrer">
        <ProjectItemChildren item={item} />
      </a>
    );
  }

  return (
    <button type="button" className={cn(style.ProjectItem)} tabIndex={0} onClick={handleShowModal}>
      <ProjectItemChildren item={item} />
    </button>
  );
}

ProjectItem.defaultProps = {
  className: '',
};

ProjectItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
  showModal: PropTypes.func,
  index: PropTypes.number,
};

export default ProjectItem;
