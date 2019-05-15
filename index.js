class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  }

  startDate() {
    return new Date.parse(this.date)
  }

  yearsExperienceFromBeginningOf(endYear) {
    let end = new Date(endYear, 0)

    return endYear - startDate()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  
}
