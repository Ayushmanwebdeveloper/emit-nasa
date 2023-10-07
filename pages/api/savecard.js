import clientPromise from "../../utils/database";

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("emit");
        let collection = await db.collection("scards");
        let newDocument = req.body;
        newDocument.date = new Date();
        let result = await collection.insertOne(newDocument);
        res.status(204).send(result);
    }
    catch (e) {
        console.error(e);
    }
};