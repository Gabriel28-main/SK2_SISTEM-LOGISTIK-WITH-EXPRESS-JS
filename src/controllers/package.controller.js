import db from "../config/db.js";

export const addNewPackages = async (req, res) => {
    try {
        const { namaBarang, penerima, alamatTujuan } = req.body
        const firstUpdate = [{
            status: "Pending",
            updatedAt: new Date()
        }]

        const query = `INSERT INTO packages (itemName, receiver, history) VALUES (?, ?, ?)`
        await db.execute(query, [namaBarang, penerima, firstUpdate])

        return res.status(201).json({
            status: 'success'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const displayAllPackages = async (req, res) => {
    try {
        const query = `SELECT * FROM packages`
        const [rows] = await db.execute(query)

        return res.status(201).json({
            status: 'success',
            data: rows
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const cancelPackage = async (req, res) => {
    try {
        const { id } = req.params
        const query = 'DELETE FROM packages WHERE packageId = ?'
        await db.execute(query, [id])

        return res.status(201).json({
            status: 'success',
            message: 'berhasil cancel paket'
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}