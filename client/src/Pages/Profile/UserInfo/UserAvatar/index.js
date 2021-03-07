import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

import Button from '../../../../Components/Button';
import useStyles from './style';

function UserAvatar({ setRefresh, setOpen }) {
  const classes = useStyles();
  const [previewSource, setPreviewSource] = useState();
  // eslint-disable-next-line no-unused-vars
  const [inputFileState, setInputFileState] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const [errorMsg, setErrorMsg] = useState('');

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await Axios.patch('/api/v1/upload', { data: base64EncodedImage });
      setInputFileState('');
      setPreviewSource('');
      setRefresh(true);
      setOpen(false);
      setErrorMsg('Image uploaded successfully');
    } catch (err) {
      setErrorMsg('Something went wrong!');
    }
  };

  const handleSubmitImage = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      setErrorMsg('Something went wrong!');
    };
  };

  return (
    <div className={classes.modal}>
      <Typography variant="h6">Choose an image</Typography>
      {errorMsg && <Alert variant="error">{errorMsg}</Alert>}
      <div className={classes.formContainer}>
        <form className={classes.avtarForm} onSubmit={handleSubmitImage}>
          <label htmlFor="file-input-select">
            Choose file
            <input
              accept="image/*"
              type="file"
              name="image"
              id="file-input-select"
              value={inputFileState}
              onChange={handleUploadFile}
              className={classes.selectFileBtn}
            />
          </label>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.uploadBtn}
          >
            Upload
          </Button>
        </form>
        <div className={classes.imagePreview}>
          {previewSource && <img src={previewSource} alt="avatar" />}
        </div>
      </div>
    </div>
  );
}

UserAvatar.propTypes = {
  setRefresh: PropTypes.func.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default UserAvatar;
