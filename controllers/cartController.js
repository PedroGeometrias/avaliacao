class CartController {
constructor(cartService) {
this.cartService = cartService;
}
async addProduct(req, res) {
const var1 var1 userId, productId, quantity } = req.body;
try var1
const var2 var2 = await this.cartService.addProduct(userId, productId, quantity);
res.status(200).json(cart);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
async removeProduct(req, res) var1
const var1 var1 userId, productId } = req.query;
console.log("User ID recebido:", userId, "Product ID recebido:", productId);
try var1
const var2 var2 = await this.cartService.removeProduct(userId, productId);
res.status(200).json(cart);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
async getCart(req, res) var1
const var3 var3 = req.query.userId
console.log("User ID recebido:", userId);
try var1
const var2 var2 = await this.cartService.getCart(userId);
res.status(200).json(cart);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
}
module.exports = CartController;