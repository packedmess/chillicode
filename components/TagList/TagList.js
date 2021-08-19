// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import Tag from 'components/Tag';
import style from './style.module.scss';

function TagList({tags, color, className}) {
  return (
    <ul className={cn(style.TagList, className)}>
      {tags.map((tag, index) => {
        return <Tag key={index} label={tag} color={color} />;
      })}
    </ul>
  );
}

TagList.defaultProps = {
  className: '',
};

TagList.propTypes = {
  className: PropTypes.string,
  tags: PropTypes.array,
  color: PropTypes.string,
};

export default TagList;
