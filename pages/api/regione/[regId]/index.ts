import { NextApiRequest, NextApiResponse } from "next";
import { regioni } from "../../../../data/regioni";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { regId } = req.query;
  const idRegione = regioni.find((regione) => regione.id === +regId!);
  res.status(200).json(idRegione);
}
