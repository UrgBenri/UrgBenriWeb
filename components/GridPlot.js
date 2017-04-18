import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Group, Line, Rect} from 'react-konva';

const GridPlot = ({maxRange, interval, stroke}) => {
    const cellCount = maxRange/interval;
    const ranges = Array
        .apply(null, Array(cellCount))
        .map((range, index) => (index*interval))
        const strokeWidth = 1;
        const strokeColor = stroke || '#e2e2e2';
    return (
        <Group>
            {ranges.map((range, index) => {
                return (
                    <Line 
                    key={index} 
                    points={[range, maxRange, range, -maxRange]} 
                    stroke={strokeColor}
                    strokeScaleEnabled={false}
                    strokeWidth={strokeWidth}
                    />)
            })}
            {ranges.map((range, index) => {
                return (
                    <Line 
                    key={index} 
                    points={[-range, maxRange, -range, -maxRange]} 
                    stroke={strokeColor}
                    strokeScaleEnabled={false}
                    strokeWidth={strokeWidth}
                    />)
            })}
            {ranges.map((range, index) => {
                return (
                    <Line 
                    key={index} 
                    points={[maxRange, range, -maxRange, range]} 
                    stroke={strokeColor}
                    strokeScaleEnabled={false}
                    strokeWidth={strokeWidth}
                    />)
            })}
            {ranges.map((range, index) => {
                return (
                    <Line 
                    key={index} 
                    points={[maxRange, -range, -maxRange, -range]} 
                    stroke={strokeColor}
                    strokeScaleEnabled={false}
                    strokeWidth={strokeWidth}
                    />)
            })}
        </Group>
    )
}

GridPlot.propTypes = {
    maxRange: PropTypes.number.isRequired,
    interval: PropTypes.number.isRequired
}

export default GridPlot;