class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date (startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    let end = new Date(endYear, 0)

    return end - startDate()
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

  blocksTravelled() {
    let horizontalBlocks = Math.abs(beginningLocation.horizontal - endingLocation.horizontal)
    let verticalBlocks = Math.abs(beginningLocation.vertical - endingLocation.vertical)

    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(timeOfDay) {
    if (timeOfDay == "peak hours") {
      return blocksTravelled() * 2
    } else if (timeOfDay = "not peak hours") {
      return blocksTravelled() * 3
    }
  }
}
