export default async function test(req, res) {
    const data = await (await fetch(process.env.FLASK_APP_URL + "/api")).json();

    res.status(200).json({ data });
}
