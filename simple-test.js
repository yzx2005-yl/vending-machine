// 简单测试版本
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    addStock(amount) {
        this.stock += amount;
    }

    reduceStock(amount) {
        if (this.stock >= amount) {
            this.stock -= amount;
            return true;
        }
        return false;
    }
}

class SellingMachine {
    constructor() {
        this.products = [];
        this.initDefaultProducts();
    }

    initDefaultProducts() {
        this.products.push(new Product('可乐', 3.5, 10));
        this.products.push(new Product('雪碧', 3.5, 8));
        this.products.push(new Product('矿泉水', 2.0, 15));
    }

    listProducts() {
        console.log('=== 商品列表 ===');
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - 库存: ${product.stock}, 价格: ¥${product.price.toFixed(2)}`);
        });
        console.log('================');
    }

    restock(productName, amount) {
        const product = this.products.find(p => p.name === productName);
        if (product) {
            product.addStock(amount);
            console.log(`✅ ${productName} 补货成功，新增 ${amount} 件，当前库存: ${product.stock}`);
            return true;
        } else {
            console.log(`❌ 未找到商品: ${productName}`);
            return false;
        }
    }

    sell(productName, quantity, money) {
        const product = this.products.find(p => p.name === productName);
        
        if (!product) {
            return { success: false, message: `❌ 未找到商品: ${productName}` };
        }

        if (product.stock < quantity) {
            return { success: false, message: `❌ 库存不足，当前库存: ${product.stock}，需要: ${quantity}` };
        }

        const totalPrice = product.price * quantity;
        
        if (money < totalPrice) {
            return { 
                success: false, 
                message: `❌ 金额不足，需要: ¥${totalPrice.toFixed(2)}，支付: ¥${money.toFixed(2)}，还差: ¥${(totalPrice - money).toFixed(2)}` 
            };
        }

        product.reduceStock(quantity);
        const change = money - totalPrice;
        
        return { 
            success: true, 
            message: `✅ 购买成功！商品: ${productName} x${quantity}，总价: ¥${totalPrice.toFixed(2)}，支付: ¥${money.toFixed(2)}，找零: ¥${change.toFixed(2)}`
        };
    }
}

// 运行测试
console.log('🏪 自动售货机系统测试\n');

const machine = new SellingMachine();

console.log('1. 初始商品列表:');
machine.listProducts();

console.log('\n2. 补货测试:');
machine.restock('可乐', 5);

console.log('\n3. 购买测试:');
let result = machine.sell('可乐', 2, 10);
console.log(result.message);

result = machine.sell('可乐', 20, 100);
console.log(result.message);

result = machine.sell('矿泉水', 1, 1);
console.log(result.message);

console.log('\n4. 更新后的商品列表:');
machine.listProducts();

console.log('\n✅ 测试完成！');