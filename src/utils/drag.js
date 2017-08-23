const mousePosition = (e) => {
  e = e || window.event;
  const xPos = e.pageX
    ? e.pageX
    : (e.clientX + document.body.scrollLeft - document.body.clientLeft)
    ? (e.clientX + document.body.scrollLeft - document.body.clientLeft)
    : e.touches[0]
    ? e.touches[0].clientX
    : e.changedTouches[0].clientX;
  const yPos = e.pageY
    ? e.pageY
    : (e.clientY + document.body.scrollTop - document.body.clientTop)
    ? (e.clientY + document.body.scrollTop - document.body.clientTop)
    : e.touches[0]
    ? e.touches[0].clientY
    : e.changedTouches[0].clientY;
  return {
    x: xPos + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
    y: yPos + Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
};

const disableMouseDown = (e) => {
  const event = e || window.event;
  event.preventDefault();
  event.stopPropagation();
};

const getRotateStyle = (degree) => {
  return {
    'transform': `rotate(${degree}deg)`,
    'OTransform': `rotate(${degree}deg)`,
    'MozTransform': `rotate(${degree}deg)`,
    'mstransform': `rotate(${degree}deg)`,
    'WebkitTransform': `rotate(${degree}deg)`
  };
};

const getInlineRotateStyle = (degree) => {
  return {
    'transform': `translateX(-50%) rotate(${degree}deg)`,
    'OTransform': `translateX(-50%) rotate(${degree}deg)`,
    'MozTransform': `translateX(-50%) rotate(${degree}deg)`,
    'mstransform': `translateX(-50%) rotate(${degree}deg)`,
    'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`
  };
};

const getInitialPointerStyle = (height, top, degree) => {
  return {
    'height': `${height}px`,
    'top': `${top}px`,
    'transform': `translateX(-50%) rotate(${degree}deg)`,
    'OTransform': `translateX(-50%) rotate(${degree}deg)`,
    'MozTransform': `translateX(-50%) rotate(${degree}deg)`,
    'mstransform': `translateX(-50%) rotate(${degree}deg)`,
    'WebkitTransform': `translateX(-50%) rotate(${degree}deg)`
  };
};

const getStandardAbsolutePosition = (position, minPosition, maxPosition) => {
  if (position < minPosition) {
    position = minPosition;
  }
  if (position > maxPosition) {
    position = maxPosition;
  }
  return position;
};

const degree2Radian = (degree) => degree * (2 * Math.PI) / 360;

export default {
  degree2Radian,
  mousePosition,
  disableMouseDown,
  rotateStyle: getRotateStyle,
  inlineRotateStyle: getInlineRotateStyle,
  initialPointerStyle: getInitialPointerStyle,
  validatePosition: getStandardAbsolutePosition
};
