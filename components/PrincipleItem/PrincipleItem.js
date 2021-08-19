// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import parse from 'html-react-parser';
// Internals
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import style from './style.module.scss';

function PrincipleItem({item}) {
  return (
    <div>
      <div className={cn(style.step)}>{item.step}</div>
      <Heading className={cn(style.heading)} variant="h3">
        {parse(item.label)}
      </Heading>
      <Paragraph className={cn(style.text)}>{parse(item.text)}</Paragraph>
    </div>
  );
}

PrincipleItem.propTypes = {
  className: PropTypes.string,
  item: PropTypes.object,
};

export default PrincipleItem;
