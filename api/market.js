// api/market.js
export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  const url = 'https://brsapi.ir/Api/Market/Gold_Currency.php?key=BQUJhqgYwQ14gUMeSzIR1LKjhnpxq4ed';
  const r = await fetch(url);
  const data = await r.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=120');

  return res.status(200).json(data);
}
