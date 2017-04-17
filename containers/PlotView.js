import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage, Group} from 'react-konva';
import clickdrag from 'react-clickdrag';

import RangePlot from '../components/RangePlot';
import Converter from '../Sensor/Converter'

const converter = new Converter({firstStep: 0, lastStep: 1081, frontStep: 541, totalSteps: 1440});
const ranges = Array
  .apply(null, Array(1081))
  .map(Number.prototype.valueOf, 100)

var scaleBy = 1.02;
class PlotView extends React.Component {
  constructor(props) {
    super(props)
    this.handleWheel = this
      .handleWheel
      .bind(this)
      this.state = {
            lastPositionX: 0,
            lastPositionY: 0,
            currentX: 0,
            currentY: 0
        };
  }
  componentWillReceiveProps(nextProps) {
        if(nextProps.dataDrag.isMoving) {
            this.setState({
                currentX: this.state.lastPositionX + nextProps.dataDrag.moveDeltaX,
                currentY: this.state.lastPositionY + nextProps.dataDrag.moveDeltaY
            });
        }
        else {
            this.setState({
                lastPositionX: this.state.currentX,
                lastPositionY: this.state.currentY
            });
        }
    }
  componentDidMount() {
    this.stage = this.refs.stage;
    this.nativeStage = this
      .refs
      .stage
      .getStage();
    window.addEventListener('wheel', this.handleWheel)
  }
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleWheel)
  }

  handleWheel(e) {
    var evt = e;
    var stage = this.nativeStage;
    evt.preventDefault();
    if (stage) {
      var oldScale = stage.scaleX();
      var mousePointTo = {
        x: stage
          .getPointerPosition()
          .x / oldScale - stage.x() / oldScale,
        y: stage
          .getPointerPosition()
          .y / oldScale - stage.y() / oldScale
      };
      var newScale = evt.deltaY > 0
        ? oldScale * scaleBy
        : oldScale / scaleBy;
      stage.scale({x: newScale, y: newScale});
      var newPos = {
        x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
        y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
      };
      stage.position(newPos);
      stage.batchDraw();
    }
  }

  render() {
    return (
      <Stage
        ref="stage"
        width={this.props.width}
        height={this.props.height}
        x={this.state.currentX}
        y={this.state.currentY}
        rotation={-90}>
        <Layer>
          <RangePlot ranges={ranges} converter={converter}/>
        </Layer>
      </Stage>
    )
  }
}

export default clickdrag(PlotView, {touch: true});