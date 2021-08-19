// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import parse from 'html-react-parser';
// Internals
import Paragraph from 'components/Paragraph';
import style from './style.module.scss';

function Quote({author, text, link, className}) {
  return (
    <blockquote className={cn(style.Quote, className)}>
      <small className={style.author}>{author}</small>
      <Paragraph className={style.text}>{`“${parse(text)}”`}</Paragraph>
      <footer>
        <cite>
          <a href={link} rel="nofollow noreferrer" className={style.link}>
            Read full
          </a>
        </cite>
      </footer>
    </blockquote>
  );
}

Quote.defaultProps = {
  className: '',
};

Quote.propTypes = {
  className: PropTypes.string,
  author: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

export default Quote;
