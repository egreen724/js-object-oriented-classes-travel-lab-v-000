class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  }

  startDate() {
    return new Date(this.date)
  }

  yearsExperienceFromBeginningOf(endYear) {
    let end = new Date(endYear, 0)

    return endYear - startDate()
  }
}
