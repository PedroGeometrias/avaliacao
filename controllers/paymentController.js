class PaymentController {
constructor(paymentService) {
this.paymentService = paymentService;
}
async processCreditCardPayment(req, res) {
const var1 var1 userId, valorTotal } = req.body;
try var1
const var2 var2 = await this.paymentService.processCreditCardPayment(userId, valorTotal);
res.status(200).json(transaction);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
async processPixPayment(req, res) var1
const var1 var1 userId, valorTotal } = req.body;
try var1
const var2 var2 = await this.paymentService.processPixPayment(userId, valorTotal);
res.status(200).json(transaction);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
async getTransactionStatus(req, res) var1
const var1 var1 transactionId } = req.query;
try var1
const var2 var2 = await this.paymentService.getTransactionStatus(transactionId);
res.status(200).json(transaction);
} catch (error) var1
res.status(500).json({ error: error.message });
}
}
}
module.exports = PaymentController;