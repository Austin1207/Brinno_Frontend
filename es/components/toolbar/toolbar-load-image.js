import React from 'react';
import PropTypes from 'prop-types';
import { FaImage as IconLoad } from 'react-icons/fa';
import ToolbarButton from './toolbar-button';
import { browserImgUpload } from '../../utils/browser';

export default function ToolbarLoadImgButton(_ref, _ref2) {
  var state = _ref.state;
  var translator = _ref2.translator,
      projectActions = _ref2.projectActions;


  var loadImgFromFile = function loadImgFromFile(event) {
    event.preventDefault();
    browserImgUpload().then(function (data) {
      //projectActions.loadProject(JSON.parse(data));
      console.log("loadImgFromFile");
    });
  };

  return React.createElement(
    ToolbarButton,
    { active: false, tooltip: translator.t("Load Image"), onClick: loadImgFromFile },
    React.createElement(IconLoad, null)
  );
}

ToolbarLoadImgButton.propTypes = {
  state: PropTypes.object.isRequired
};

ToolbarLoadImgButton.contextTypes = {
  projectActions: PropTypes.object.isRequired,
  translator: PropTypes.object.isRequired
};