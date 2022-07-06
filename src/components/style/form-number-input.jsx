import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as SharedStyle from '../../shared-style';
import { MdUpdate } from 'react-icons/md';
import { KEYBOARD_BUTTON_CODE } from '../../constants';

//調input樣式

const STYLE_INPUT = {
  display: 'block',
  // width: '100px',
  // height: '53px',
  // padding: '0 2px',
  // fontSize: '44px',
  // lineHeight: '1.25',
  // color: "#ff8200",
  // backgroundColor: '#271807',
  // backgroundImage: 'none',
  // border: '1px solid rgba(0,0,0,.15)',
  // width: '71px',
  position: 'absolute',
  right: '-27px',
  width: '100px',
  height: '45px',
  // padding: '0 2px',
  fontSize: '38px',
  fontStretch:"normal",
  fontStyle:"normal",
  lineHeight: 'normal',
  letterSpacing:"normal",
  color: "#c7c7c7",
  backgroundColor: '#222222',
  // backgroundImage: 'none',
  // border: '1px solid rgba(0,0,0,.15)',
  outline: 'none'
};

const confirmStyle = {
  position: 'absolute',
  cursor: 'url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png"),pointer',
  width: '2em',
  height: '2em',
  right: '0.35em',
  top: '1em',
  // backgroundColor: SharedStyle.SECONDARY_COLOR.main,
  color: '#FFF',
  transition: 'all 0.1s linear'
};

export default class FormNumberInput extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      focus: false,
      valid: true,
      showedValue: props.value
    };
  }

  componentWillReceiveProps( nextProps ) {
    if( this.props.value !== nextProps.value ) {
      this.setState({ showedValue: nextProps.value });
    }
  }

  render() {

    // let { value, min, max, precision, onChange, onValid, onInvalid, style, placeholder } = this.props;
    let { value, min, max, onChange, onValid, onInvalid, style, placeholder } = this.props;
    let numericInputStyle = { ...STYLE_INPUT, ...style };
    let precision = 2;

    if (this.state.focus) numericInputStyle.border = `1px solid ${SharedStyle.SECONDARY_COLOR.main}`;

    let regexp = new RegExp(`^-?([0-9]+)?\\.?([0-9]{0,${precision}})?$`);

    if (!isNaN(min) && isFinite(min) && this.state.showedValue < min) this.setState({ showedValue: min }); // value = min;
    if (!isNaN(max) && isFinite(max) && this.state.showedValue > max) this.setState({ showedValue: max }); // value = max;

    let currValue = regexp.test(this.state.showedValue) ? this.state.showedValue : parseFloat(this.state.showedValue).toFixed(precision);

    let different = parseFloat(this.props.value).toFixed(precision) !== parseFloat(this.state.showedValue).toFixed(precision);

    let saveFn = (e) => {
      e.stopPropagation();

      if (this.state.valid) {
        let savedValue = (this.state.showedValue !== '' && this.state.showedValue !== '-') ? parseFloat(this.state.showedValue) : 0;
        localStorage.setItem("ScaleValue",savedValue)

        this.setState({ showedValue: savedValue });
        onChange({ target: { value: savedValue } });
      }
    };

    return (
      <div style={{ position: 'relative' }}>
        <input
          id = "scaleinput"
          type="text"
          value={currValue}
          style={numericInputStyle}
          onChange={(evt) => {
            let valid = regexp.test(evt.nativeEvent.target.value);

            if (valid) {
              this.setState({ showedValue: evt.nativeEvent.target.value });
              if (onValid) onValid(evt.nativeEvent);
            }
            else {
              if (onInvalid) onInvalid(evt.nativeEvent);
            }

            this.setState({ valid });
          }}
          onClick = {e => saveFn(e)}
          onFocus={e => this.setState({ focus: true })}
          onBlur={e => this.setState({ focus: false })}
          onKeyDown={e => {
            var keyCode = e.keyCode || e.which;
            if ((keyCode == KEYBOARD_BUTTON_CODE.ENTER || keyCode == KEYBOARD_BUTTON_CODE.TAB) && different) {
              saveFn(e);
            }
          }}
          placeholder={placeholder}
        />

          {/* 取消顯示Scale確認鍵 */}

        {/* <div
          onClick={e => { if (different) saveFn(e); }}
          title={this.context.translator.t('Confirm')}
          style={{ ...confirmStyle, visibility: different ? 'visible' : 'hidden', opacity: different ? '1' : '0' }}
        >
          <MdUpdate style={{ width: '100%', height: '100%', padding: '0.2em', color: '#FFF' }} />
        </div> */}
      </div>
    );
  }
}

FormNumberInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onValid: PropTypes.func,
  onInvalid: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  precision: PropTypes.number,
  placeholder: PropTypes.string
};

FormNumberInput.contextTypes = {
  translator: PropTypes.object.isRequired
};

FormNumberInput.defaultProps = {
  value: 0,
  style: {},
  min: Number.MIN_SAFE_INTEGER,
  max: Number.MAX_SAFE_INTEGER,
  precision: 3
};
