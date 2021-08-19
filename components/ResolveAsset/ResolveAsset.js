// Vendor
import PropTypes from 'prop-types';

function ResolveAsset({src, alt}) {
  if (src.includes('.mp4')) {
    return (
      <video controls autoPlay muted>
        <source src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${src}`} type="video/mp4"></source>
      </video>
    );
  }
  return <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${src}`} alt={alt} />;
}

ResolveAsset.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ResolveAsset;
