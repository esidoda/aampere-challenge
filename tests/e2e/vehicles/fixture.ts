class Fixture {
  BASE_PATH_VEHICLE_LIST = '/vehicles';

  get vehiclesListUrl() {
    return `${this.BASE_PATH_VEHICLE_LIST}`;
  }

  get vehiclesDetailUrl() {
    return `${this.BASE_PATH_VEHICLE_LIST}/1`;
  }
}

export default new Fixture();
