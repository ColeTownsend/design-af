import React from 'react';
import cxs from 'cxs';
import Rnd from 'react-rnd';
import Spacing from '../styles/spacing';

const base = {
  color: 'white',
  opacity: 0.7,
  WebkitFontSmoothing: 'antialiased',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const leftHandle = {
  left: -3,
};

const rightHandle = {
  right: -3,
};

const topHandle = {
  top: -3,
};

const bottomHandle = {
  bottom: -3,
};

const handleStyle = {
  width: 6,
  height: 6,
  position: 'absolute',
  background: '#FFFFFF',
  cursor: 'col-resize',
  boxShadow: '0 0 1px 0 rgba(0,0,0,0.3)',
};

const resizerHandleStyles = {
  left: {
    ...leftHandle,
    ...handleStyle,
  },
  right: {
    ...handleStyle,
    ...rightHandle,
  },
  top: {
    ...handleStyle,
    ...topHandle,
  },
  bottom: {
    ...handleStyle,
    ...bottomHandle,
  },
};

const isResizable = {
  top: false,
  right: true,
  left: true,
  bottom: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false,
};

export default class ResizeDiv extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      zIndex: 99,
      active: false,
    };
  }

  render () {
    return (
      <Rnd
        ref={(c) => { this.rnd = c; }}
        initial={{
          x: 0,
          y: 0,
          width: 600,
        }}
        style={base}
        minWidth={100}
        minHeight={150}
        maxWidth={Spacing.maxWidth}
        zIndex={this.state.zIndex}
        resizerHandleStyle={resizerHandleStyles}
        isResizable={isResizable}
      >
        <span className={cx.body}>Sick inspiration to keep your design tight, synced
          up, on point, swervy, wavy, a e s t h e t i c, brutalist, “brutalist,”
        anti-design, #dailyui, dribbble ready, mvp, and other buzzwords. </span>
      </Rnd>
    );
  }
}

const cx = {
  body: cxs({
    alignSelf: 'flex-start',
    lineHeight: 1.5,
    border: '1px solid #5B5B60',
    padding: 6,
    ':hover': {
      border: '1px solid #4CC1FC',
    },
  }),
};
