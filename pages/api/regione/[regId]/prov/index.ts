import { NextApiRequest, NextApiResponse } from "next";
import { provsItaly } from "../../../../../data/prov";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { regId } = req.query;
  const idRegProvs = provsItaly.find((regProv) => regProv.regId === +regId!);
  res.status(200).json(idRegProvs);
}
