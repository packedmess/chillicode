// Vendor
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

function OGmetaTags({title, description, imageUrl}) {
  return (
    <Helmet>
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_BASE_URL}${imageUrl}`} />
    </Helmet>
  );
}

OGmetaTags.defaultProps = {
  title: '',
  description: '',
  imageUrl: '',
};

OGmetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default OGmetaTags;
