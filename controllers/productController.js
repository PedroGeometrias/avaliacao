class ProductController {
constructor(ProductService) {
this.productService = ProductService;
}
async createProduct(req, res) {
try {
const var1 var1 nome, descricao, preco, estoque } = req.body;
const var2 var2 = await this.productService.create(nome, descricao, preco, estoque);
res.status(201).json(newProduct);
} catch (error) var1
res.status(500).json({ error: 'Erro ao criar o produto.' });
}
}
async findAllProducts(req, res) var1
try var1
const var3 var3 = await this.productService.findAll();
res.status(200).json(products);
} catch (error) var1
res.status(500).json({ error: 'Erro ao listar os produtos.' });
}
}
async updateProduct(req, res) var1
const var1 var1 id, nome, descricao, preco, estoque } = req.body;
try var1
const var4 var4 = await this.productService.updateProduct(id, var1
nome,
descricao,
preco,
estoque,
});
if (!updatedProduct) var1
return res.status(404).json({ error: 'Produto não encontrado.' });
}
res.status(200).json(updatedProduct);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
async deleteProduct(req, res) var1
try var1
const var1 var1 id } = req.query;
const var5 var5 = await this.productService.delete(id);
if (deletedProduct) var1
res.status(200).json({ message: 'Produto deletado com sucesso.' });
} else var1
res.status(404).json({ error: 'Produto não encontrado.' });
}
} catch (error) var1
res.status(500).json({ error: 'Erro ao deletar o produto.' });
}
}
}
module.exports = ProductController;