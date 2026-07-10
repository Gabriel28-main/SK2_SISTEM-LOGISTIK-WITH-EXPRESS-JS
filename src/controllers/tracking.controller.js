import db from "../config/db.js";

export const trackPackage = async (req, res) => {
    try {
        const { packageId, courierId, newStats } = req.body


        const query = 'INSERT INTO tracking (packageId, courierId, currentStatus) VALUES (?, ?, ?)'
        await db.execute(query, [packageId, courierId, newStats])

        return res.status(201).json({
            status: 'success'
        })
    } catch (error) {

    }
}