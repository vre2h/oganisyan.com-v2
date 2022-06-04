import { cleanKey } from "../../../helpers/helpers";
import db from "../../../lib/firebase";

const isDisable = process.env.NEXT_PUBLIC_DISABLE_VIEWS;

export default async function getViews(req, res) {
  if (!isDisable && req.method === "POST") {
    const { slug } = req?.body ? JSON.parse(req.body) : {};
    const ref = db.ref("views").child(cleanKey(slug));
    const { snapshot } = await ref.transaction((currentViews) => {
      if (currentViews === null) {
        return 1;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === "GET") {
    const { slug } = req.query;
    const snapshot = await db.ref("views").child(cleanKey(slug)).once("value");
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
}
