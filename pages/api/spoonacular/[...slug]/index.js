async function handler(req, res) {
  try {
    const baseUrl = "https://api.spoonacular.com";
    const path = req.query.slug.reduce((acc, cur) => acc + "/" + cur, "");
    const { slug, ...query } = req.query;
    console.log("slug", slug);
    console.log("query", query);
    const queryString = new URLSearchParams({
      apiKey: process.env.API_KEY,
      ...query,
    }).toString();
    console.log(queryString);
    const url = baseUrl + path + "?" + queryString;
    console.log(url);
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();

      return res.status(200).json(data);
    } else {
      throw new Error(`status: ${response.status}`);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error" });
  }
}
export default handler;
