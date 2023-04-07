import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      events: this.props.data || [],
      dayLayoutAlgorithm: 'no-overlap',
    }
  }


  onEventResize = (data) => {
    const { start, end } = data;
    this.setState((state) => {
      const obj = { ...state.events };
      const key = Object.keys(obj)[Object.values(obj).indexOf(data.event)];
      state.events[key].start = start;
      state.events[key].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = (data) => {
    const { start, end } = data;
    console.log("data", data.event);
    this.setState((state) => {
      const obj = { ...state.events };
      const key = Object.keys(obj)[Object.values(obj).indexOf(data.event)];
      state.events[key].start = start;
      state.events[key].end = end;
      return { events: state.events };
    });
  };

  handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }


  render() {
    return (
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={this.state.events}
          localizer={localizer}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          selectable
          onSelectSlot={this.handleSelect}
          dayLayoutAlgorithm={this.state.dayLayoutAlgorithm}
          onSelectEvent={event => alert(event.title)}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default App;
