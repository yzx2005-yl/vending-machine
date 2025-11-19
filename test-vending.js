const { Product, SellingMachine } = require('./vending-machine');

// 测试函数
function runTests() {
    console.log('🧪 开始测试自动售货系统...\n');
    
    // 创建售货机实例
    const machine = new SellingMachine();
    
    // 测试1: 显示初始商品列表
    console.log('📋 测试1: 显示初始商品列表');
    machine.listProducts();
    console.log();
    
    // 测试2: 补货功能
    console.log('📦 测试2: 补货功能');
    machine.restock('可乐', 5);
    machine.restock('不存在的商品', 3);
    console.log();
    
    // 测试3: 正常购买
    console.log('💰 测试3: 正常购买');
    let result = machine.sell('可乐', 2, 10);
    console.log(result.message);
    console.log();
    
    // 测试4: 库存不足
    console.log('❌ 测试4: 库存不足');
    result = machine.sell('矿泉水', 50, 200);
    console.log(result.message);
    console.log();
    
    // 测试5: 金额不足
    console.log('💸 测试5: 金额不足');
    result = machine.sell('薯片', 2, 5);
    console.log(result.message);
    console.log();
    
    // 测试6: 商品不存在
    console.log('🔍 测试6: 商品不存在');
    result = machine.sell('不存在的商品', 1, 10);
    console.log(result.message);
    console.log();
    
    // 测试7: 显示更新后的商品列表
    console.log('📋 测试7: 显示更新后的商品列表');
    machine.listProducts();
    console.log();
    
    // 测试8: 边界测试 - 刚好足够的金额
    console.log('💵 测试8: 边界测试 - 刚好足够的金额');
    result = machine.sell('雪碧', 1, 3.5);
    console.log(result.message);
    console.log();
    
    // 测试9: 批量补货和购买
    console.log('📊 测试9: 批量补货和购买');
    machine.restock('巧克力', 20);
    result = machine.sell('巧克力', 5, 25);
    console.log(result.message);
    console.log();
    
    // 最终状态
    console.log('📊 最终商品状态:');
    machine.listProducts();
    
    console.log('\n✅ 所有测试完成！');
}

// 运行测试
runTests();