const express=require('express');
const router = express.Router();
const {getStationeryProducts,getStationeryProductsById,createStationeryProduct,updateStationeryProducts,editStationeryProducts,deleteStationeryProducts} = require('../controllers/InventoryAPIcontrollers');


router.get('/', getStationeryProducts);
router.get('/:id', getStationeryProductsById);
router.post('/', createStationeryProduct);
router.put('/:id', updateStationeryProducts);
router.patch('/:id', editStationeryProducts);
router.delete('/:id', deleteStationeryProducts);

module.exports = router;