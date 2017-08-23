import React from 'react';
import ReactDOM from 'react-dom';
import {
  MINUTES,
  HOURS,
  TWELVE_HOURS
} from '../../utils/const_value.js';
import PickerPoint from './PickerPoint';

const pickerPointGenerator = (type = "hour", mode = 24) => {
  return class PickerPointGenerator extends React.PureComponent {
    constructor(props) {
      super(props);
      this.handleTimePointerClick = props.handleTimePointerClick.bind(this);
    }

    addAnimation() {
      ReactDOM.findDOMNode(this.pickerPointerContainer).className = 'animation';
    }

    removeAnimation() {
      ReactDOM.findDOMNode(this.pickerPointerContainer).className = '';
    }

    renderMinutePointes() {
      return MINUTES.map((m, index) => {
        const angle = 360 * index / 60;
        if (index % 5 === 0) {
          return (
            <PickerPoint
              index={index}
              key={index}
              angle={angle}
              handleTimeChange={this.handleTimePointerClick}
              pointerRotate={this.props.pointerRotate}
            />
          );
        }
      });
    }

    renderHourPointes() {
      const hours = parseInt(mode) === 24 ? HOURS : TWELVE_HOURS;
      return hours.map((h, index) => {
        const pointClass = index < 12
          ? 'picker_point point_inner'
          : 'picker_point point_outter';
        const angle = index < 12
          ? 360 * (index) / 12
          : 360 * (index - 12) / 12;
        return (
          <PickerPoint
            index={index}
            key={index}
            angle={angle}
            pointClass={pointClass}
            handleTimeChange={this.handleTimePointerClick}
            pointerRotate={this.props.pointerRotate}
          />
        );
      });
    }

    render() {
      return (
        <div
          ref={ref => this.pickerPointerContainer = ref}
          id='picker_pointer_container'>
          {type === 'hour'
              ? this.renderHourPointes()
              : this.renderMinutePointes()}
        </div>
      );
    }
  }
};

export default pickerPointGenerator;
