import { NextApiRequest, NextApiResponse } from "next";
import { regioni } from "../../../data/regioni";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(regioni);
}
