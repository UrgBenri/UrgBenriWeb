import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Group, Line, Rect} from 'react-konva';

const PlotView = ({ranges, converter}) => (
    <Group>
    {ranges.map((range, index) => {
        const {x, y} = converter.rangeToPoint(index, range);
        return (<Line 
            key={index}
            points={[0, 0, x, y]}
            stroke='red'
            />)
    }
    )}
    </Group>
)

PlotView.propTypes = {
  ranges: PropTypes.arrayOf(PropTypes.number).isRequired,
  converter: PropTypes.object.isRequired
}

export default PlotView;