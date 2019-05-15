class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  }

  startDate() {
    new Date(this.date)
  }

  yearsExperienceFromBeginningOf(endYear) {
    return endYear - startDate.year
  }
}
