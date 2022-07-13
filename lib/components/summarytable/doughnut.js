"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = Doughnut;

var _ClickAwayListener = require("@mui/material/ClickAwayListener");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _recharts = require("recharts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = [{ name: "BAC2000", value: 3 }, { name: "BCC200", value: 2 }, { name: "BCC2000", value: 1 }, { name: "MAC200DN", value: 1 }];
var totalcoverage = 1;

var renderActiveShape = function renderActiveShape(props) {
  var RADIAN = Math.PI / 180;
  var cx = props.cx,
      cy = props.cy,
      midAngle = props.midAngle,
      innerRadius = props.innerRadius,
      outerRadius = props.outerRadius,
      startAngle = props.startAngle,
      endAngle = props.endAngle,
      fill = props.fill,
      payload = props.payload,
      percent = props.percent,
      value = props.value;

  var sin = Math.sin(-RADIAN * midAngle);
  var cos = Math.cos(-RADIAN * midAngle);
  var sx = cx + (outerRadius + 10) * cos;
  var sy = cy + (outerRadius + 10) * sin;
  var mx = cx + (outerRadius + 30) * cos;
  var my = cy + (outerRadius + 30) * sin;
  var ex = mx + (cos >= 0 ? 1 : -1) * 22;
  var ey = my;
  var textAnchor = cos >= 0 ? "start" : "end";

  return _react2.default.createElement(
    "g",
    null,
    _react2.default.createElement(
      "text",
      { x: cx, y: cy, dy: -(119 + 36 - 10), fontSize: "20px", textAnchor: "middle", fill: "#222222" },
      payload.name
    ),
    _react2.default.createElement(
      "text",
      { x: cx, y: cy, dy: 15, fontSize: "40px", textAnchor: "middle", fill: "#222222" },
      (percent * 100).toFixed(1) + "%"
    ),
    _react2.default.createElement(_recharts.Sector, {
      cx: cx,
      cy: cy,
      innerRadius: innerRadius,
      outerRadius: outerRadius,
      startAngle: startAngle,
      endAngle: endAngle,
      fill: fill
    })
  );
};

function Doughnut() {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      selectIndex = _useState4[0],
      setSelectIndex = _useState4[1];

  var activeItem = data[activeIndex];
  var onPieEnter = (0, _react.useCallback)(function (_, index) {
    setActiveIndex(index);
  }, [setActiveIndex]);
  var handleClick = (0, _react.useCallback)(function (entry, index) {
    setActiveIndex(index);
    setSelectIndex(true);
  }, [setActiveIndex]);
  var handleClickAway = function handleClickAway() {
    setActiveIndex();
    setSelectIndex(false);
  };

  return _react2.default.createElement(
    _ClickAwayListener2.default,
    { onClickAway: handleClickAway },
    _react2.default.createElement(
      _recharts.PieChart,
      { width: 359, height: 238 + 36 + 10 },
      !selectIndex && _react2.default.createElement(
        "g",
        null,
        _react2.default.createElement(
          "text",
          { x: 180, y: 180 - 20, dx: 5, dy: -(119 + 36 - 10 - 5), fontSize: "20px", textAnchor: "middle", fill: "#222222" },
          "All Cameras"
        ),
        _react2.default.createElement("text", { id: "totalCoverage", x: 180, y: 180 - 20, dx: 5, dy: 15 + 5, fontSize: "40px", textAnchor: "middle", fill: "#222222" })
      ),
      _react2.default.createElement(
        _recharts.Pie,
        {
          activeIndex: activeIndex,
          activeShape: renderActiveShape,
          isAnimationActive: false,
          data: data,
          cx: 180,
          cy: 180 - 20,
          innerRadius: 89,
          outerRadius: 119,
          startAngle: 90,
          endAngle: -270,
          dataKey: "value"
          //onMouseEnter={onPieEnter}
          , onClick: handleClick
        },
        data.map(function (entry, index) {
          return _react2.default.createElement(_recharts.Cell, {
            cursor: "url(\"https://cursor.s3.ap-northeast-1.amazonaws.com/select.png\") 13.5 4.5,pointer",
            fill: index === activeIndex ? "#e57500" : "#ffa140",
            key: "cell-" + index
          });
        })
      )
    )
  );
}