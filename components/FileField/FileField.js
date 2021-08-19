// Vendor
import {useState} from 'react';
import PropTypes from 'prop-types';
// Internals
import Button from 'components/Button';
import style from './style.module.scss';

function FileField({onChange, t}) {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState(null);
  const [fileSize, setFileSize] = useState();
  const [inputValue, setInputValue] = useState(undefined);
  const [error, setError] = useState(false);

  const handleAttachFile = event => {
    const attachedFiles = event.target.files;
    const attachedFile = attachedFiles[0];
    const newFileSize = (attachedFile.size / 1000000).toFixed(2);
    const newInputValue = event.target.value;
    const newFileName = newInputValue.split('\\').pop();
    if (newFileSize > 20) {
      setError(true);
    } else {
      setError(false);
      setFiles(attachedFiles);
      setFileName(newFileName);
      setFileSize(newFileSize);
      setInputValue(newInputValue);

      onChange(attachedFile);
    }
  };

  const handleDeleteFile = () => {
    setFiles([]);
    setFileName(null);
    setFileSize();
    setInputValue('');
  };

  return (
    <>
      <div className={style.inputContainer}>
        <input
          name="file"
          id="file"
          type="file"
          value={inputValue}
          className={style.input}
          onChange={handleAttachFile}
        />
        <label htmlFor="file" className={style.label}>
          {fileName ? fileName : t('homepage:contacts.files')}
          {files.length > 0 && <small className={style.small}>{`${fileSize} mb`}</small>}
        </label>
        {error && <span className={style.error}>{t('homepage:contacts.isValidFile')}</span>}
      </div>
      {files.length > 0 && (
        <Button color="secondary" size="small" className={style.button} onClick={handleDeleteFile}>
          {t('homepage:contacts.delete')}
        </Button>
      )}
    </>
  );
}

FileField.defaultProps = {
  onChange: () => null,
};

FileField.propTypes = {
  onChange: PropTypes.func,
  t: PropTypes.func,
};

export default FileField;
