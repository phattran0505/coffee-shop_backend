import MenuModel from "../model/MenuModel.js";

export const getAllMenu = async (req, res) => {
  try {
    const menu = await MenuModel.find();
    res
      .status(200)
      .json({ success: true, message: "get menu success", data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: "get menu failed" });
  }
};

export const getSingleMenu = async (req, res) => {
  const id = req.params.id;
  try {
    const menu = await MenuModel.findById(id);
    res.status(200).json({ success: true, message: "get success", data: menu });
  } catch (error) {
    res.status(500).json({ success: false, message: "get failed" });
  }
};
