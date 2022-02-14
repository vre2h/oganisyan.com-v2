import { orderBy } from "firebase/firestore";
import { Documents } from "../../constants/progress/documents";
import {
  addItem,
  getAll,
  getByCondition as getByCond,
} from "../../lib/firebase.client";
import { CustomDate } from "./date.services";

export async function getEvents() {
  return getAll(Documents.events, [orderBy("date", "desc")]);
}

export async function getByCondition(condition) {
  return getByCond(Documents.events, condition);
}

export async function addEvent(item) {
  return addItem(
    Documents.events,
    item,
    CustomDate.getStrictDate(item.date).replaceAll("/", "-")
  );
}
