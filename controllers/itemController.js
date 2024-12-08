import Item from '../models/itemModel.js';

// Create a new item (already defined)
const createItem = async (req, res) => {
    try {
        const { name, description, price, category, stock } = req.body;

        const item = new Item({
            name,
            description,
            price,
            category,
            stock,
        });

        const createdItem = await item.save();
        res.status(201).json(createdItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Fetch all items (new function)
const getItems = async (req, res) => {
    try {
        const items = await Item.find(); // Retrieve all items from the database
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { createItem, getItems };
