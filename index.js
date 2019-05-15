class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(endDate) {
    let end = new Date(endDate, 1, 1)
    let totalYears = Math.floor((end - this.startDate) / (365 * 24 * 60 * 60 * 1000));
    return totalYears
  }
}

let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  avenueToInteger(avenue) {
    return eastWest.indexOf(avenue)
  }

  blocksTravelled() {
    let horizontalBlocks = Math.abs(beginningLocation.horizontal - endingLocation.horizontal)
    let verticalBlocks = Math.abs(beginningLocation.vertical - endingLocation.vertical)

    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(timeOfDay) {
    if (timeOfDay == "peak hours") {
      return this.blocksTravelled() * 2
    } else if (timeOfDay = "not peak hours") {
      return this.blocksTravelled() * 3
    }
  }
}
