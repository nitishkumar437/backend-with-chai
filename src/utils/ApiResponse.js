class ApiResponse {
  constructor(satusCode, data, message = "Success") {
    this.satusCode = satusCode;
    this.data = data;
    this.message = message;
    this.successs = satusCode < 400;
  }
}
