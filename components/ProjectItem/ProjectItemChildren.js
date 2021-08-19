// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
import Image from 'next/image';
import parse from 'html-react-parser';
// Internals
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import TagList from 'components/TagList';
import ArrowIcon from 'public/assets/icons/arrow.svg';
import style from './style.module.scss';

function ProjectItemChildren({item}) {
  return (
    <>
      <div className={cn(style.image)}>
        <Image
          src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.previewImage.url}`}
          alt={item.previewImage.alternativeText}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </div>
      <TagList tags={item.tags} />
      <div className={cn(style.innerContainer)}>
        <Heading variant="h3" className={cn(style.heading)}>
          {parse(item.previewTitle)}
        </Heading>
        <ArrowIcon className={cn(style.headingIcon)} width={24} height={18} />
        <Paragraph className={cn(style.text)}>{parse(item.previewDescription)}</Paragraph>
      </div>
    </>
  );
}

ProjectItemChildren.propTypes = {
  item: PropTypes.object,
};

export default ProjectItemChildren;
