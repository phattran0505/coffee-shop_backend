const MenuModel = require("../model/Menu");

class MenuController {
  // [POST]
  addMenu(req, res) {
    MenuModel.create(req.body)
      .then((menu) => {
        res.json({ success: true, message: "add menu success", data: menu });
      })
      .catch((error) => {
        res.json({ success: false, message: "add menu failed", error: error });
      });
  }
  // [GET]
  getMenu(req, res) {
    MenuModel.find()
      .then((menu) => {
        res.json({ success: true, message: "get menu success", data: menu });
      })
      .catch((error) => {
        res.json({ success: false, message: "get menu failed", error: error });
      });
  }
}

module.exports = new MenuController();
