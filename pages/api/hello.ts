// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

// We use type when we know that we aren't going to extend it
// We just need an specific type
type Data = {
  name: string;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

  res.status(200).json({ name: 'John Doe' })
}
