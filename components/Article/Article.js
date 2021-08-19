// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from 'next/image';
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown';
// Internals
import Heading from 'components/Heading';
import TagList from 'components/TagList';
import Quote from 'components/Quote';
import Button from 'components/Button';
import ResolveAsset from 'components/ResolveAsset';
import {withTranslation} from 'intl';
import OGmetaTags from 'components/OGmetaTags';
import style from './style.module.scss';

function Article({className, tags, image, title, body, feedback, link, previewDescription, handleShowNextModal, t}) {
  return (
    <article className={cn(style.Article, className)}>
      <OGmetaTags title={title} description={previewDescription} imageUrl={image.url} />
      <Heading className={style.heading} variant="h3" gutterBottom>
        {parse(title)}
      </Heading>
      <TagList className={style.tagList} tags={tags} color="black" />
      <div className={cn(style.image)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${image.url}`}
          alt={image.alternativeText}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
      <div className={style.content}>
        <ReactMarkdown
          components={{
            // TODO: Change eslint rules
            // eslint-disable-next-line react/display-name
            img: ({...props}) => <ResolveAsset {...props} />,
          }}>
          {body}
        </ReactMarkdown>
      </div>
      {feedback.text && (
        <>
          <Heading variant="h4" gutterBottom className={style.feedback}>
            {parse(t('homepage:projects.feedback'))}
          </Heading>
          <Quote author={feedback.author} text={feedback.text} link={feedback.link} />
        </>
      )}
      <Button className={style.link} href={link} target="_blank" color="secondary" size="large">
        {parse(t('homepage:projects.link'))}
      </Button>
      <Button className={style.button} color="primary" size="large" onClick={handleShowNextModal}>
        {parse(t('homepage:projects.next'))}
      </Button>
    </article>
  );
}

Article.defaultProps = {
  className: '',
  tags: [],
  image: {url: '', alternativeText: ''},
  title: '',
  body: null,
  feedback: {author: '', link: '', text: ''},
  link: '',
  src: '',
  alt: '',
  previewDescription: '',
};

Article.propTypes = {
  className: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.node.isRequired,
  feedback: PropTypes.object,
  link: PropTypes.string.isRequired,
  handleShowNextModal: PropTypes.func,
  t: PropTypes.func,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  previewDescription: PropTypes.string.isRequired,
};

export default withTranslation('homepage')(Article);
