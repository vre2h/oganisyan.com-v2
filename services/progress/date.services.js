export class CustomDate {
  static getToday() {
    const date = new Date();
    return CustomDate.getDate(date);
  }

  static getDate(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["hy"], {
      day: "numeric",
      month: "short",
    }).format(normalizedDate);
  }

  static getDetailedDate(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["hy"], {
      dateStyle: "long",
      timeStyle: "short",
    }).format(normalizedDate);
  }

  static getTime(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["hy"], {
      hour: "numeric",
      minute: "numeric",
    }).format(normalizedDate);
  }

  static getStrictDate(date = new Date()) {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }).format(date);
  }
}
