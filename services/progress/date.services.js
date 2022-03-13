export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

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

  static getYear() {
    const year = new Date().getFullYear();
    return year;
  }

  static getTwoDigitsMonthIdx(
    idx,
    currentMonthIdx = CustomDate.getCurrentMonthIdx()
  ) {
    return idx < 10 ? `0${idx}` : currentMonthIdx;
  }

  static getCurrentMonthIdx() {
    const currentMonthIdx = new Date().getMonth() + 1;

    return currentMonthIdx;
  }

  static getMonthInfoByIdx(idx) {
    return {
      activeMonthIdx: idx,
      twoDigitsMonthIdx: CustomDate.getTwoDigitsMonthIdx(idx),
    };
  }

  static getMonthRange(selectedMonthIdx) {
    const start = `${selectedMonthIdx}/01/${CustomDate.getYear()}`;
    const end = `${selectedMonthIdx}/31/${CustomDate.getYear()}`;
    return { start, end };
  }

  static getWeekRange() {}
}
