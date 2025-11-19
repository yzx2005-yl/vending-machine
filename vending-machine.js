// 商品类
class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    // 增加库存
    addStock(amount) {
        this.stock += amount;
    }

    // 减少库存
    reduceStock(amount) {
        if (this.stock >= amount) {
            this.stock -= amount;
            return true;
        }
        return false;
    }

    // 获取商品信息
    getInfo() {
        return `${this.name} - 库存: ${this.stock}, 价格: ¥${this.price.toFixed(2)}`;
    }
}

// 售货机类
class SellingMachine {
    constructor() {
        this.products = [];
        this.initDefaultProducts();
    }

    // 初始化默认商品
    initDefaultProducts() {
        this.products.push(new Product('可乐', 3.5, 10));
        this.products.push(new Product('雪碧', 3.5, 8));
        this.products.push(new Product('矿泉水', 2.0, 15));
        this.products.push(new Product('薯片', 5.0, 6));
        this.products.push(new Product('巧克力', 4.5, 12));
    }

    // 列出所有商品
    listProducts() {
        console.log('=== 商品列表 ===');
        if (this.products.length === 0) {
            console.log('暂无商品');
            return;
        }
        
        this.products.forEach((product, index) => {
            console.log(`${index + 1}. ${product.getInfo()}`);
        });
        console.log('================');
    }

    // 补货
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

    // 销售商品
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

        // 扣除库存
        product.reduceStock(quantity);
        const change = money - totalPrice;
        
        return { 
            success: true, 
            message: `✅ 购买成功！商品: ${productName} x${quantity}，总价: ¥${totalPrice.toFixed(2)}，支付: ¥${money.toFixed(2)}，找零: ¥${change.toFixed(2)}`,
            change: change
        };
    }

    // 获取商品列表（用于界面显示）
    getProducts() {
        return this.products;
    }
}

// 命令行测试函数
function testVendingMachine() {
    const machine = new SellingMachine();
    
    console.log('=== 自动售货机测试 ===\n');
    
    // 显示商品列表
    machine.listProducts();
    
    // 测试补货
    console.log('\n=== 测试补货 ===');
    machine.restock('可乐', 5);
    machine.restock('不存在的商品', 3);
    
    // 测试购买
    console.log('\n=== 测试购买 ===');
    let result = machine.sell('可乐', 2, 10);
    console.log(result.message);
    
    result = machine.sell('可乐', 20, 100); // 库存不足
    console.log(result.message);
    
    result = machine.sell('薯片', 1, 3); // 金额不足
    console.log(result.message);
    
    // 再次显示商品列表
    console.log('\n=== 更新后的商品列表 ===');
    machine.listProducts();
}

// 如果直接运行此文件，执行测试
if (require.main === module) {
    testVendingMachine();
}

module.exports = { Product, SellingMachine };