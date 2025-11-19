# 自动售货机系统

一个简单而功能完整的自动售货机系统，包含命令行版本和可视化Web界面。

## 📁 文件说明

- `vending-machine.js` - 核心类文件（Product类和SellingMachine类）
- `vending-machine-ui.html` - 可视化Web界面
- `simple-test.js` - 简单测试脚本
- `demo01.js` - 原始文件

## 🚀 功能特性

### 核心功能
- ✅ 商品管理：显示所有商品的名称、价格、库存
- ✅ 补货功能：为指定商品添加库存
- ✅ 销售功能：处理购买请求，验证库存和金额，自动计算找零
- ✅ 错误处理：库存不足、金额不足、商品不存在等情况

### 可视化界面功能
- 🎨 现代化UI设计，响应式布局
- 📊 实时统计显示（商品种类、总库存、总价值）
- 🖱️ 点击商品卡片快速选择
- 💰 自动计算支付金额
- 📱 移动端适配

## 🛠️ 使用方法

### 命令行版本

```bash
# 运行简单测试
node simple-test.js

# 运行完整测试
node test-vending.js
```

### Web界面

1. 打开 `vending-machine-ui.html` 文件
2. 在浏览器中查看和使用
3. 支持以下操作：
   - 查看商品列表和统计信息
   - 选择商品进行购买
   - 为商品补货
   - 刷新显示和重置系统

## 📋 类设计

### Product 类
```javascript
class Product {
    constructor(name, price, stock)
    addStock(amount)      // 增加库存
    reduceStock(amount)   // 减少库存
    getInfo()            // 获取商品信息
}
```

### SellingMachine 类
```javascript
class SellingMachine {
    constructor()
    listProducts()       // 列出所有商品
    restock(name, amount) // 补货
    sell(name, qty, money) // 销售商品
}
```

## 🎯 示例操作

### 补货
```javascript
machine.restock('可乐', 10);
// 输出: ✅ 可乐 补货成功，新增 10 件，当前库存: 20
```

### 购买
```javascript
const result = machine.sell('可乐', 2, 10);
// 输出: ✅ 购买成功！商品: 可乐 x2，总价: ¥7.00，支付: ¥10.00，找零: ¥3.00
```

### 错误处理
```javascript
const result = machine.sell('可乐', 50, 100);
// 输出: ❌ 库存不足，当前库存: 18，需要: 50
```

## 🌟 特色功能

1. **智能计算** - 自动计算总价和找零
2. **实时更新** - 购买和补货后立即更新显示
3. **友好提示** - 详细的错误信息和成功反馈
4. **可视化界面** - 直观的Web操作界面
5. **响应式设计** - 适配各种屏幕尺寸

## 🔧 扩展建议

- 添加商品分类功能
- 实现销售记录和统计
- 添加会员系统和折扣功能
- 集成支付接口
- 添加多语言支持

## 📝 开发说明

系统采用面向对象设计，代码结构清晰，易于维护和扩展。Web界面使用原生HTML/CSS/JavaScript，无需额外依赖。