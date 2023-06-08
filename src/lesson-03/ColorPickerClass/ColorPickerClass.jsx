import React from 'react';
import styles from './ColorPickerClass.module.css';

const options = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default class ColorPickerClass extends React.Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({ activeOptionIdx: index });
  };

  makeOptionClassName = index => {
    return index === this.state.activeOptionIdx
      ? styles.activeOption
      : styles.option;
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { label } = options[activeOptionIdx];

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Color Picker</h2>
        <p>Current color: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              aria-label={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}