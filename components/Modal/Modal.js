// Vendor
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
// Internals
import {withTranslation} from 'intl';
import style from './style.module.scss';

function Modal({isModalShown, handleHideModal, children, t}) {
  return (
    <Dialog
      id="modal"
      open={isModalShown}
      onClose={handleHideModal}
      scroll="body"
      maxWidth={false}
      aria-labelledby="Modal">
      <button type="button" onClick={handleHideModal} className={style.closeButton}>
        {t('common:modal.closeButton')}
      </button>
      {children}
    </Dialog>
  );
}

Modal.defaultProps = {
  className: '',
};

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isModalShown: PropTypes.bool,
  handleHideModal: PropTypes.func,
  t: PropTypes.func,
};

export default withTranslation('common')(Modal);
