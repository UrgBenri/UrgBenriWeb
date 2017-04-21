class Converter {
  constructor(config) {
    this.firstStep = config.firstStep || 0;
    this.lastStep = config.lastStep || 0;
    this.frontStep = config.frontStep || 0;
    this.totalSteps = config.totalSteps || 1;
  }

  rangeToPoint(index, range) {
    let angle = this.indexToAngle(index);
    return {
        x: range * Math.cos(angle),
        y: range * Math.sin(angle)
    }
  }

  indexToAngle(index) {
    let c_index = Converter.clamp(index, this.firstStep, this.lastStep);
    let f_index = c_index - this.frontStep;
    return f_index * (2 * Math.PI) / this.totalSteps;
  }

  static clamp(num, min, max) {
    return num <= min ? min : num >= max ? max : num;
  }
}

export default Converter;