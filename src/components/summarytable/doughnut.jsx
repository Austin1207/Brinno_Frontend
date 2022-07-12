import ClickAwayListener from '@mui/material/ClickAwayListener';
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "BAC2000", value: 3 },
  { name: "BCC200", value: 2 },
  { name: "BCC2000", value: 1 },
  { name: "MAC200DN", value: 1 }
];
const totalcoverage = 1;

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={-(119+36-10)} fontSize='20px' textAnchor="middle" fill='#222222'>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={15} fontSize='40px' textAnchor="middle" fill='#222222'>
        {`${(percent * 100).toFixed(1)}%`}
      </text>
      {<Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />}
    </g>
  );
};

export default function Doughnut() {
  const [activeIndex, setActiveIndex] = useState();
  const [selectIndex, setSelectIndex] = useState(false);
  const activeItem = data[activeIndex];
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  const handleClick = useCallback(
    (entry, index) => {
      setActiveIndex(index);
      setSelectIndex(true);
    },
    [setActiveIndex]
  );
  const handleClickAway = () => {
    setActiveIndex();
    setSelectIndex(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <PieChart width={359} height={238+36+10} >
      {!selectIndex && <g>
          <text x={180} y={180-20} dx={5} dy={-(119+36-10-5)} fontSize='20px' textAnchor="middle" fill='#222222'>
            All Cameras
          </text>
          <text id ="totalCoverage" x={180} y={180-20} dx={5} dy={15+5} fontSize='40px' textAnchor="middle" fill='#222222'>
            {/* {`${(totalcoverage * 100).toFixed(0)}%`} */}
          </text>
        </g>}
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          isAnimationActive={false}
          data={data}
          cx={180}
          cy={180-20}
          innerRadius={89}
          outerRadius={119}
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          //onMouseEnter={onPieEnter}
          onClick={handleClick}
          >
          {
            data.map((entry, index) => (
                <Cell
                  cursor='url("https://cursor.s3.ap-northeast-1.amazonaws.com/select.png") 13.5 4.5,pointer'
                  fill={index === activeIndex ? "#e57500" : "#ffa140"}
                  key={`cell-${index}`}
                />
            ))
          }
          </Pie>
      </PieChart>
    </ClickAwayListener>
  );
}
