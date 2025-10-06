
const stationeryProducts = require("../Models/InventoryAPIModel")

// GET - All item

const getStationeryProducts = (req, res) => {
  try {
    if (stationeryProducts.length === 0) {
      return res.status(404).json({ message: "No Item's Found" });
    }
    res.status(200).json(stationeryProducts);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

//GET - Item By ID

const getStationeryProductsById = (req, res) => {
  try {
    const stationeryProduct = stationeryProducts.find(s => s.id === parseInt(req.params.id));
    if (!stationeryProduct) {
      return res.status(404).json({ message: "No Item Found" });
    }
    res.status(200).json(stationeryProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST - Add Item

const createStationeryProduct = (req, res) => {
  try {
    const { item, quantity, price } = req.body;
    if (!item || !quantity || !price) {
      return res
        .status(400)
        .json({ message: "item,quantity and price are required" });
    }
    const newstationeryProduct = {
      id: stationeryProducts.length ? stationeryProducts[stationeryProducts.length - 1].id + 1 : 1,
      item,
    quantity,
      price,
    };
    stationeryProducts.push(newstationeryProduct);
    res.status(201).json(newstationeryProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// PUT - complete update  

const updateStationeryProducts=(req,res)=>{
    try{
        const id=parseInt(req.params.id);
        const {item,quantity,price}=req.body;

        if (!item || !quantity || !price) {
      return res.status(400).json({ message: "item,quantity and price are required" });
    }

    const stationeryProductsIndex = stationeryProducts.findIndex(s => s.id === id);
    if (stationeryProductsIndex === -1) {
      return res.status(404).json({ message: "No Item found" });
    }

    stationeryProducts[stationeryProductsIndex] = { id, item,quantity,price };
    res.status(200).json(stationeryProducts[stationeryProductsIndex]);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// PATCH - partial update

const editStationeryProducts = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { item,quantity,price } = req.body;

    const stationeryProductsIndex = stationeryProducts.findIndex(s => s.id === id);
    if (stationeryProductsIndex === -1) {
      return res.status(404).json({ message: "No item found" });
    }

    if (item) stationeryProducts[stationeryProductsIndex].item = item;
    if (quantity) stationeryProducts[stationeryProductsIndex].quantity = quantity;
    if (price) stationeryProducts[stationeryProductsIndex].price = price;

    res.status(200).json(stationeryProducts[stationeryProductsIndex]);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

// DELETE - remove item

const deleteStationeryProducts = (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const stationeryProductsIndex = stationeryProducts.findIndex(s => s.id === id);

    if (stationeryProductsIndex === -1) {
      return res.status(404).json({ message: "No item found" });
    }

    const deletedItem  = stationeryProducts.splice(stationeryProductsIndex, 1);
    res.status(200).json({ message: "item deleted successfully", deletedItem });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports={getStationeryProducts,getStationeryProductsById,createStationeryProduct,updateStationeryProducts,editStationeryProducts,deleteStationeryProducts}
