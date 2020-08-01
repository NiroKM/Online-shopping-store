const express = require("express");
const router = express.Router();

const {
    create,
    productById,
    read,
    remove,
    update,
    list,
    listRelated,
    listCategories,
    listBySearch,
    photo,
    listSearch,
    updateDiscount,
    getById,
    deleteByID
} = require("../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.get("/product/edit/:productId", getById);
router.post("/product/create/:userId", requireSignin, isAuth, isAdmin, create);
router.delete(
    "/product/:productId",
    remove
);
router.delete("/product/delete/:id",deleteByID);
router.put(
    "/product/:productId/:userId",
    requireSignin,
    isAuth,
    isAdmin,
    update
);

router.get("/products", list);
router.get("/products/search", listSearch);
router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post("/products/by/search", listBySearch);
router.get("/product/photo/:productId", photo);
router.post("/products/updateDiscount/:id",updateDiscount);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
