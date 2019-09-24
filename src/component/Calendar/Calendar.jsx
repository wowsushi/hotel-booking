/* eslint react/no-multi-comp:0, no-console:0, react/prop-types:0 */

import 'rc-calendar/assets/index.css';
import React from 'react';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';

import moment from 'moment';
import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const format = 'YYYY-MM-DD';

const fullFormat = 'YYYY年MM月DD日';

const now = moment();

class Picker extends React.Component {
  state = {
    hoverValue: [],
  };

  onHoverChange = (hoverValue) => {
    this.setState({ hoverValue });
  }

  render() {
    const props = this.props;
    const { showValue } = props;
    const calendar = (
      <RangeCalendar
        hoverValue={this.state.hoverValue}
        onHoverChange={this.onHoverChange}
        type={this.props.type}
        defaultValue={now}
        format={format}
        onChange={props.onChange}
        disabledDate={props.disabledDate}
      />);
    return (
      <DatePicker
        open={this.props.open}
        onOpenChange={this.props.onOpenChange}
        calendar={calendar}
        value={props.value}
      >
        {
          () => {
            return (
                <input
                  placeholder="請選擇日期"
                  style={{ height: 40, paddingLeft: 8 }}
                  readOnly
                  value={showValue? showValue.format(fullFormat) : ''}
                />
            );
          }
        }
      </DatePicker>);
  }
}

class Calendar extends React.Component {
  componentDidUpdate () {
    //setTimeout(() => this.props.getSubTotal(), 500)
  }

  render() {
    const {
      startValue,
      endValue,
      startOpen,
      endOpen,
      onStartOpenChange,
      onEndOpenChange,
      onStartChange,
      onEndChange,
      disabledStartDate,
    } = this.props

    return (
      <React.Fragment>
        <div className="form-group checking">
          <label>入住日期</label>
          <Picker
            onOpenChange={onStartOpenChange}
            type="start"
            showValue={startValue}
            open={startOpen}
            value={[startValue, endValue]}
            onChange={onStartChange}
          />
        </div>

        <div className="form-group checkout">
          <label>退房日期</label>
          <Picker
            onOpenChange={onEndOpenChange}
            open={endOpen}
            type="end"
            showValue={endValue}
            disabledDate={disabledStartDate}
            value={[startValue, endValue]}
            onChange={onEndChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Calendar
