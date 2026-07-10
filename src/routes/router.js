import e from "express";
import { AddNewCourier, displayAllCouriers } from "../controllers/couriers.controller.js";
import { addNewPackages, cancelPackage, displayAllPackages } from "../controllers/package.controller.js";

const router = e.Router()

//Kurir
router.post('/api/couriers', AddNewCourier) //Mendaftarkan kurir baru (Nama, Nomor HP).
router.get('/api/couriers', displayAllCouriers) //Memperlihatkan daftar Kurir yang terdaftar

// //Paket
router.post('/api/packages', addNewPackages) //menambahkan paket baru
router.get('/api/packages', displayAllPackages) 
// router.get('/api/packages/:id',)
router.delete('/api/packages/:id', cancelPackage)

// //Tracking
// router.post('/api/tracking',)


export default router