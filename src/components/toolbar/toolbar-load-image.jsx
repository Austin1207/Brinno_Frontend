import React from 'react';
import PropTypes from 'prop-types';
import {FaImage as IconLoad} from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import {browserImgUpload}  from '../../utils/browser';

export default function ToolbarLoadImgButton({state}, {translator, projectActions}) {

  let loadImgFromFile = event => {
    event.preventDefault();
    browserImgUpload().then((data) => {
      //projectActions.loadProject(JSON.parse(data));
      console.log("loadImgFromFile")
    });
  };

  return (
    <ToolbarButton active={false} tooltip={translator.t("Load Image")} onClick={loadImgFromFile}>
      <IconLoad />
    </ToolbarButton>
  );
}

ToolbarLoadImgButton.propTypes = {
  state: PropTypes.object.isRequired,
};

ToolbarLoadImgButton.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired,
};
