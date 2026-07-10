import db from "../config/db.js"

export const AddNewCourier = async (req, res) => {
    try {
        const { nama, phone } = req.body
        const query = `INSERT INTO couriers (name, \`phone number\`) VALUES (?, ?)`

        await db.execute(query, [nama, phone])
        return res.status(201).json({
            message: 'berhasil menambahkan kurir baru',
            data: {
                nama,
                'Nomor Telepon': phone
            }
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}


export const displayAllCouriers = async (req, res) => {
    try {
        const query = 'SELECT * FROM couriers'
        const [rows] = await db.query(query)

        await res.status(200).json({
            message: 'berhasil get data',
            data: rows
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
