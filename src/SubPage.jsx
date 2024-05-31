import React, { useState } from 'react';

export const SubPage = () => {
  const [openIndex, setOpenIdx] = useState();
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };


  const acdIdx = (index) => {
    setOpenIdx(openIndex == index ? null : index);
    // console.log(openIndex, index);
  };

  const acdData = [
    { content: "섹션1" },
    { content: "섹션2" },
    { content: "섹션3" }
  ];

  return (
    <div className="sub-wrap">
      <h2>서브 페이지</h2>
      <h3 className="sub-title">아코디언</h3>
      <div className="accordion">
        {acdData.map((item, index) => (
          <div
            key={index}
            className={`acdList ${openIndex == index ? 'active' : ''}`}
          >
            <div className="acdTitle" onClick={() => acdIdx(index)}>
              <h3>{item.content}</h3>
            </div>
            <div className="con">{item.content}</div>
          </div>
        ))}
      </div>
      {/* <div className="accordion">
        <div className="acdList">
          <div className="title" onClick={() => acdIdx(0)}>
            <h3>섹션 1</h3>
          </div>
          {openIndex == 0 && (
            <div className="con">섹션1</div>
          )}
        </div>
        <div className="acdList">
          <div className="title" onClick={() => acdIdx(1)}>
            <h3>섹션 2</h3>
          </div>
          {openIndex == 1 && (
            <div className="con">섹션2</div>
          )}
        </div>
        <div className="acdList">
          <div className="title" onClick={() => acdIdx(2)}>
            <h3>섹션 3</h3>
          </div>
          {openIndex == 2 && (
            <div className="con">섹션3</div>
          )}
        </div>
      </div> */}
      <h3 className="sub-title">CHECKBOX</h3>
      <label>
        <input type="checkbox"name="checkbox1" />
        체크박스 1
      </label>
      <label>
        <input type="checkbox" name="checkbox2"/>
        체크박스 2
      </label>
      <h3 className="sub-title">RADIO</h3>
      <label>
        <input type="radio" name="radio"/>
        체크박스 1
      </label>
      <label>
        <input type="radio" name="radio"/>
        체크박스 2
      </label>
      <h3 className="sub-title">INPUT</h3>
      <input type="text" />
      <h3 className="sub-title">TOOLTIP</h3>
      <button
        className="tooltop-btn"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Hover me
      </button>
      {showTooltip && (
        <div className="tooltip">
          This is a tooltip
        </div>
      )}

    </div>
  );
};
