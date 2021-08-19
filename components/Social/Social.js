// Vendor
import PropTypes from 'prop-types';
import cn from 'classnames';
// Internals
import IconButton from 'components/IconButton';
import GithubIcon from 'public/assets/icons/github.svg';
import YoutubeIcon from 'public/assets/icons/youtube.svg';
import FacebookIcon from 'public/assets/icons/facebook.svg';
import InstagramIcon from 'public/assets/icons/instagram.svg';
import BehanceIcon from 'public/assets/icons/behance.svg';
import style from './style.module.scss';

function Social({className}) {
  return (
    <ul className={cn(style.Social, className)}>
      <li className={style.item}>
        <IconButton
          href="https://github.com/chillicode-dev"
          target="_blank"
          label="Github"
          className={cn(style.iconButton)}>
          <GithubIcon width={20} height={20} />
        </IconButton>
      </li>
      <li className={style.item}>
        <IconButton
          href="https://www.youtube.com/channel/UC5VSUDNLPHv10rGgHhEaMJw"
          target="_blank"
          label="Youtube"
          className={cn(style.iconButton)}>
          <YoutubeIcon width={20} height={20} />
        </IconButton>
      </li>
      <li className={style.item}>
        <IconButton
          href="https://www.facebook.com/chillicode.ru/"
          target="_blank"
          label="Facebook"
          className={cn(style.iconButton)}>
          <FacebookIcon width={20} height={20} />
        </IconButton>
      </li>
      <li className={style.item}>
        <IconButton
          href="https://www.instagram.com/chillicode/"
          target="_blank"
          label="Instagram"
          className={cn(style.iconButton)}>
          <InstagramIcon width={20} height={20} />
        </IconButton>
      </li>
      <li className={style.item}>
        <IconButton
          href="https://www.behance.net/chillicode2"
          target="_blank"
          label="Behance"
          className={cn(style.iconButton)}>
          <BehanceIcon width={25} height={18} />
        </IconButton>
      </li>
    </ul>
  );
}

Social.defaultProps = {
  className: '',
};

Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
