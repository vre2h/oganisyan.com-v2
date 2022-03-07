export class CustomDate {
  static getToday() {
    const date = new Date();
    return CustomDate.getDate(date);
  }

  static getDate(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["en"], {
      day: "numeric",
      month: "short",
    }).format(normalizedDate);
  }

  static getDetailedDate(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["en"], {
      dateStyle: "long",
      timeStyle: "short",
    }).format(normalizedDate);
  }

  static getTime(date) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat(["en"], {
      hour: "numeric",
      minute: "numeric",
    }).format(normalizedDate);
  }

  static getStrictDate(date = new Date()) {
    const normalizedDate = typeof date !== "object" ? new Date(date) : date;
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(normalizedDate);
  }
}
