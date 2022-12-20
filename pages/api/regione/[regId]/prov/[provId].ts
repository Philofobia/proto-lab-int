import { NextApiRequest, NextApiResponse } from "next";
import { provsItaly } from "../../../../../data/prov";
import { provInt } from "../../../../../types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { provId } = req.query;

  const idProv = provsItaly.map((provReg) =>
    provReg.prov.find((prov) => prov.id === +provId!)
  );
  const realIdProv = idProv.filter(el => el !== undefined);
  res.status(200).json(realIdProv[0]);
}
