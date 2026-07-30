// 外贸商务英语词库 - Penny每日单词卡
// 8个主题分类，共约300个词条
const VOCAB_POOL = [
  // ===== 1. 贸易术语 (Trade Terms) =====
  { word: "MOQ", cn: "最小起订量", en: "Minimum Order Quantity", example: "What's your MOQ for this product?", category: "贸易术语" },
  { word: "FOB", cn: "离岸价", en: "Free On Board", example: "We can offer FOB Shanghai price.", category: "贸易术语" },
  { word: "CIF", cn: "到岸价", en: "Cost, Insurance and Freight", example: "The CIF price includes shipping and insurance.", category: "贸易术语" },
  { word: "EXW", cn: "工厂交货价", en: "Ex Works", example: "EXW price means you arrange the shipping.", category: "贸易术语" },
  { word: "DDP", cn: "完税后交货", en: "Delivered Duty Paid", example: "Under DDP, the seller covers all costs including duties.", category: "贸易术语" },
  { word: "lead time", cn: "交货期/生产周期", en: "Time from order to delivery", example: "Our lead time is 15-20 working days.", category: "贸易术语" },
  { word: "LC", cn: "信用证", en: "Letter of Credit", example: "We accept payment by LC at sight.", category: "贸易术语" },
  { word: "T/T", cn: "电汇", en: "Telegraphic Transfer", example: "Payment terms: 30% T/T in advance, 70% before shipment.", category: "贸易术语" },
  { word: "customs clearance", cn: "清关", en: "Process of clearing goods through customs", example: "How long does customs clearance usually take?", category: "贸易术语" },
  { word: "bill of lading", cn: "提单", en: "Document issued by carrier to shipper", example: "Please send the bill of lading by email.", category: "贸易术语" },
  { word: "proforma invoice", cn: "形式发票", en: "Preliminary invoice for quotation", example: "I'll send you a proforma invoice for reference.", category: "贸易术语" },
  { word: "commercial invoice", cn: "商业发票", en: "Final invoice for payment", example: "The commercial invoice must match the LC terms.", category: "贸易术语" },
  { word: "packing list", cn: "装箱单", en: "Detailed list of packed goods", example: "Please provide the packing list with shipment.", category: "贸易术语" },
  { word: "trade show", cn: "贸易展会", en: "Exhibition for industry networking", example: "We'll attend the Canton Fair this October.", category: "贸易术语" },
  { word: "freight forwarder", cn: "货代", en: "Logistics intermediary", example: "Our freight forwarder will handle the shipping.", category: "贸易术语" },
  { word: "port of loading", cn: "装运港", en: "Port where goods are loaded", example: "Port of loading: Shanghai.", category: "贸易术语" },
  { word: "port of destination", cn: "目的港", en: "Port where goods arrive", example: "Port of destination: Los Angeles.", category: "贸易术语" },
  { word: "customs duty", cn: "关税", en: "Tax imposed on imported goods", example: "What's the customs duty rate for this category?", category: "贸易术语" },
  { word: "import license", cn: "进口许可证", en: "Permit required to import certain goods", example: "Do you need an import license for this product?", category: "贸易术语" },
  { word: "consignment", cn: "寄售", en: "Goods sent for sale by agent", example: "We offer consignment terms for new markets.", category: "贸易术语" },
  { word: "sole agent", cn: "独家代理", en: "Exclusive representative in a region", example: "We'd like to be your sole agent in Europe.", category: "贸易术语" },
  { word: "counteroffer", cn: "还盘/还价", en: "Reply to an offer with different terms", example: "We'd like to make a counteroffer on the price.", category: "贸易术语" },
  { word: "down payment", cn: "预付款/定金", en: "Partial payment before full delivery", example: "A 30% down payment is required to start production.", category: "贸易术语" },
  { word: "after-sales service", cn: "售后服务", en: "Support provided after sale", example: "We provide 1-year after-sales service.", category: "贸易术语" },

  // ===== 2. 购销沟通 (Sales Communication) =====
  { word: "inquiry", cn: "询价/询盘", en: "Request for product info or pricing", example: "Thanks for your inquiry about our underwear line.", category: "购销沟通" },
  { word: "quotation", cn: "报价/报价单", en: "Price offer document", example: "Please find our quotation attached.", category: "购销沟通" },
  { word: "sample", cn: "样品", en: "Product specimen for evaluation", example: "We can send free samples for your evaluation.", category: "购销沟通" },
  { word: "bulk order", cn: "大批量订单", en: "Large quantity purchase order", example: "We offer discounts for bulk orders over 5000 pcs.", category: "购销沟通" },
  { word: "negotiation", cn: "谈判/协商", en: "Discussion to reach agreement", example: "Let's start the negotiation on pricing terms.", category: "购销沟通" },
  { word: "concession", cn: "让步/妥协", en: "Compromise in negotiation", example: "We can make a small concession on the delivery date.", category: "购销沟通" },
  { word: "win-win", cn: "双赢", en: "Mutually beneficial outcome", example: "We aim for a win-win partnership.", category: "购销沟通" },
  { word: "cold call", cn: "陌生拜访/冷启动联系", en: "Unsolicited sales contact", example: "Cold calls can be effective for new client acquisition.", category: "购销沟通" },
  { word: "follow-up", cn: "跟进/后续联系", en: "Continued contact after initial interaction", example: "I'm following up on our last conversation about the order.", category: "购销沟通" },
  { word: "pitch", cn: "推销话术", en: "Sales presentation or proposal", example: "Let me give you a quick pitch on our new collection.", category: "购销沟通" },
  { word: "closing", cn: "促成成交", en: "Finalizing a sale", example: "What's your closing strategy for this deal?", category: "购销沟通" },
  { word: "value proposition", cn: "价值主张", en: "Unique benefit offered to customers", example: "Our value proposition is quality at competitive prices.", category: "购销沟通" },
  { word: "target market", cn: "目标市场", en: "Specific market segment aimed at", example: "Our target market is mid-range fashion retailers.", category: "购销沟通" },
  { word: "market penetration", cn: "市场渗透", en: "Entering and gaining share in a market", example: "We're focusing on market penetration in Southeast Asia.", category: "购销沟通" },
  { word: "competitive edge", cn: "竞争优势", en: "Advantage over competitors", example: "Our competitive edge is fast lead time and flexible MOQ.", category: "购销沟通" },
  { word: "testimonial", cn: "客户证言", en: "Customer endorsement or review", example: "We can share testimonials from our existing clients.", category: "购销沟通" },
  { word: "referral", cn: "转介绍", en: "Word-of-mouth customer recommendation", example: "We got this inquiry through a referral from John.", category: "购销沟通" },
  { word: "price list", cn: "价格表", en: "Catalog of product prices", example: "I'll email you our updated price list today.", category: "购销沟通" },
  { word: "discount", cn: "折扣", en: "Reduction in price", example: "We offer a 5% discount for first-time orders.", category: "购销沟通" },
  { word: "promotion", cn: "促销/推广", en: "Marketing activity to boost sales", example: "We're running a promotion for the new season.", category: "购销沟通" },
  { word: "product catalog", cn: "产品目录", en: "Brochure listing all products", example: "Please check our product catalog for more options.", category: "购销沟通" },
  { word: "place an order", cn: "下单", en: "Submit a purchase request", example: "We'd like to place an order for 3000 units.", category: "购销沟通" },
  { word: "confirm an order", cn: "确认订单", en: "Verify and accept a purchase order", example: "Let me confirm the order details before processing.", category: "购销沟通" },
  { word: "cancel an order", cn: "取消订单", en: "Withdraw a purchase request", example: "Can we cancel the order if production hasn't started?", category: "购销沟通" },
  { word: "repeat order", cn: "续单/翻单", en: "Reorder of previous purchase", example: "We'd like to place a repeat order for the same style.", category: "购销沟通" },

  // ===== 3. 产品与质量 (Product & Quality) =====
  { word: "specification", cn: "规格/参数", en: "Detailed product description", example: "Please check the specification sheet for size details.", category: "产品与质量" },
  { word: "fabric", cn: "面料", en: "Material used for textiles", example: "We use premium cotton fabric for comfort.", category: "产品与质量" },
  { word: "material", cn: "材质/材料", en: "Physical substance of product", example: "The material is 95% cotton, 5% spandex.", category: "产品与质量" },
  { word: "size chart", cn: "尺码表", en: "Table of body measurements and sizes", example: "Please refer to our size chart for the right fit.", category: "产品与质量" },
  { word: "color swatch", cn: "色卡/色样", en: "Sample showing available colors", example: "I'll send you the color swatch for this season.", category: "产品与质量" },
  { word: "defect", cn: "缺陷/瑕疵", en: "Product flaw or imperfection", example: "We have a zero-defect policy for all shipments.", category: "产品与质量" },
  { word: "quality control", cn: "质量控制/QC", en: "Process ensuring product standards", example: "Our QC team checks every batch before shipping.", category: "产品与质量" },
  { word: "quality assurance", cn: "质量保证/QA", en: "Systematic quality management", example: "QA procedures are in place throughout production.", category: "产品与质量" },
  { word: "compliance", cn: "合规", en: "Meeting regulatory requirements", example: "All our products comply with EU safety standards.", category: "产品与质量" },
  { word: "certification", cn: "认证", en: "Official approval document", example: "We have CE and FDA certification for this product.", category: "产品与质量" },
  { word: "prototype", cn: "原型/样品原型", en: "Initial version for testing", example: "We'll develop a prototype based on your design.", category: "产品与质量" },
  { word: "SKU", cn: "库存单位", en: "Stock Keeping Unit", example: "Each color and size has a unique SKU.", category: "产品与质量" },
  { word: "warranty", cn: "质保/保修", en: "Guarantee against defects", example: "We offer a 2-year warranty on all products.", category: "产品与质量" },
  { word: "labeling", cn: "标签/贴标", en: "Product labeling requirements", example: "Custom labeling is available with your brand logo.", category: "产品与质量" },
  { word: "packaging", cn: "包装", en: "Product wrapping and presentation", example: "We offer custom packaging with your brand design.", category: "产品与质量" },
  { word: "sizing", cn: "尺码/定尺", en: "Product size determination", example: "What sizing system do you use - US or EU?", category: "产品与质量" },
  { word: "design draft", cn: "设计稿", en: "Preliminary design sketch", example: "Please send us your design draft for review.", category: "产品与质量" },
  { word: "collection", cn: "系列/系列款式", en: "Group of related product designs", example: "Our Spring 2026 collection features 30 new styles.", category: "产品与质量" },
  { word: "lifestyle product", cn: "生活方式产品", en: "Product aligned with lifestyle branding", example: "We're expanding into lifestyle products beyond underwear.", category: "产品与质量" },
  { word: "trend forecast", cn: "趋势预测", en: "Prediction of future market trends", example: "The trend forecast shows pastels dominating next season.", category: "产品与质量" },

  // ===== 4. 物流运输 (Logistics & Shipping) =====
  { word: "shipment", cn: "装运/发货", en: "Process of sending goods", example: "The shipment will be dispatched next Monday.", category: "物流运输" },
  { word: "consolidation", cn: "拼箱/合装", en: "Combining smaller shipments into one", example: "We can arrange consolidation to save shipping costs.", category: "物流运输" },
  { word: "container", cn: "集装箱", en: "Standard shipping box (20ft/40ft)", example: "We need a 40ft container for this order.", category: "物流运输" },
  { word: "warehouse", cn: "仓库", en: "Storage facility for goods", example: "Goods are stored in our Shanghai warehouse.", category: "物流运输" },
  { word: "inventory", cn: "库存", en: "Stock of goods available", example: "We have sufficient inventory for immediate shipment.", category: "物流运输" },
  { word: "dispatch", cn: "发货/发出", en: "Send out goods", example: "We'll dispatch your order within 3 business days.", category: "物流运输" },
  { word: "tracking number", cn: "追踪号/物流单号", en: "Code to track shipment", example: "Here's your tracking number: YT2026xxxx.", category: "物流运输" },
  { word: "delivery time", cn: "送达时间", en: "Time for goods to arrive at destination", example: "Estimated delivery time is 25-30 days by sea.", category: "物流运输" },
  { word: "air freight", cn: "空运", en: "Transport by airplane", example: "Air freight is faster but more expensive.", category: "物流运输" },
  { word: "sea freight", cn: "海运", en: "Transport by ship", example: "Sea freight is the most cost-effective for large orders.", category: "物流运输" },
  { word: "express shipping", cn: "快递运输", en: "Fast courier delivery (DHL/FedEx/UPS)", example: "We can send samples by express shipping.", category: "物流运输" },
  { word: "storage fee", cn: "仓储费", en: "Cost for keeping goods in warehouse", example: "Storage fees apply after 30 days in our warehouse.", category: "物流运输" },
  { word: "demurrage", cn: "滞期费", en: "Fee for delayed container pickup", example: "Please arrange pickup quickly to avoid demurrage charges.", category: "物流运输" },
  { word: "transshipment", cn: "转船/转运", en: "Transfer between vessels during transit", example: "Transshipment is required for some destinations.", category: "物流运输" },
  { word: "ETA", cn: "预计到达时间", en: "Estimated Time of Arrival", example: "The ETA for your shipment is March 15th.", category: "物流运输" },
  { word: "ETD", cn: "预计出发时间", en: "Estimated Time of Departure", example: "ETD is scheduled for next Thursday.", category: "物流运输" },

  // ===== 5. 付款结算 (Payment & Finance) =====
  { word: "payment terms", cn: "付款条件", en: "Conditions for payment", example: "Our standard payment terms are 30/70 T/T.", category: "付款结算" },
  { word: "balance payment", cn: "尾款", en: "Remaining amount after deposit", example: "Balance payment is due before shipment.", category: "付款结算" },
  { word: "refund", cn: "退款", en: "Return of payment", example: "We'll process a refund for the defective items.", category: "付款结算" },
  { word: "rebate", cn: "返利/回扣", en: "Return of part of payment as incentive", example: "We offer a 2% rebate for annual orders over $100k.", category: "付款结算" },
  { word: "exchange rate", cn: "汇率", en: "Rate of currency conversion", example: "Please note the exchange rate may fluctuate.", category: "付款结算" },
  { word: "currency", cn: "货币", en: "Type of money (USD/EUR/CNY)", example: "We quote in USD but accept EUR payments too.", category: "付款结算" },
  { word: "invoice", cn: "发票", en: "Document requesting payment", example: "The invoice will be issued upon shipment.", category: "付款结算" },
  { word: "receipt", cn: "收据", en: "Proof of payment received", example: "We'll send the receipt once payment is confirmed.", category: "付款结算" },
  { word: "overdue", cn: "逾期/过期未付", en: "Past due for payment", example: "The payment is overdue by 5 days.", category: "付款结算" },
  { word: "down payment", cn: "首付/定金", en: "Initial partial payment", example: "A 30% down payment secures your production slot.", category: "付款结算" },
  { word: "net profit", cn: "净利润", en: "Revenue minus all costs", example: "Our net profit margin is about 15%.", category: "付款结算" },
  { word: "gross margin", cn: "毛利润率", en: "Revenue minus cost of goods", example: "We aim for a 40% gross margin on retail.", category: "付款结算" },
  { word: "cost breakdown", cn: "成本明细", en: "Detailed cost analysis", example: "Here's the cost breakdown for your reference.", category: "付款结算" },
  { word: "budget", cn: "预算", en: "Planned spending limit", example: "What's your budget for this project?", category: "付款结算" },
  { word: "ROI", cn: "投资回报率", en: "Return on Investment", example: "The expected ROI for this campaign is 3:1.", category: "付款结算" },

  // ===== 6. 商务邮件 (Business Email) =====
  { word: "subject line", cn: "邮件主题行", en: "Title of an email", example: "Keep the subject line concise and clear.", category: "商务邮件" },
  { word: "attachment", cn: "附件", en: "File attached to email", example: "Please find the quotation as an attachment.", category: "商务邮件" },
  { word: "CC", cn: "抄送", en: "Carbon Copy - secondary recipients", example: "Please CC your manager on this email.", category: "商务邮件" },
  { word: "BCC", cn: "密送", en: "Blind Carbon Copy - hidden recipients", example: "I'll BCC the team so the client doesn't see.", category: "商务邮件" },
  { word: "reply all", cn: "回复所有人", en: "Respond to all email recipients", example: "Be careful with 'reply all' - not always necessary.", category: "商务邮件" },
  { word: "follow up on", cn: "跟进某事", en: "Check progress on a matter", example: "I'm following up on our meeting last Friday.", category: "商务邮件" },
  { word: "at your earliest convenience", cn: "尽早/方便时", en: "As soon as you can", example: "Please reply at your earliest convenience.", category: "商务邮件" },
  { word: "look forward to", cn: "期待", en: "Anticipate eagerly", example: "We look forward to your positive response.", category: "商务邮件" },
  { word: "on behalf of", cn: "代表", en: "Representing someone", example: "I'm writing on behalf of our sales team.", category: "商务邮件" },
  { word: "regarding", cn: "关于/有关", en: "Concerning a topic", example: "Regarding your inquiry dated Jan 15th...", category: "商务邮件" },
  { word: "pursuant to", cn: "依照/根据", en: "In accordance with", example: "Pursuant to our agreement, shipment begins Monday.", category: "商务邮件" },
  { word: "acknowledge", cn: "确认/知悉", en: "Confirm receipt or awareness", example: "We acknowledge receipt of your order.", category: "商务邮件" },
  { word: "escalate", cn: "升级处理", en: "Raise issue to higher authority", example: "Let me escalate this to our production manager.", category: "商务邮件" },
  { word: "deadline", cn: "截止日期", en: "Final date for completion", example: "The deadline for payment is March 20th.", category: "商务邮件" },
  { word: "reminder", cn: "提醒", en: "Prompt notification", example: "This is a gentle reminder about the pending order.", category: "商务邮件" },
  { word: "as per", cn: "按照/根据", en: "According to", example: "As per our discussion, the price is $5/unit.", category: "商务邮件" },
  { word: "kindly", cn: "烦请/恳请", en: "Polite request word", example: "Kindly confirm the shipping details.", category: "商务邮件" },
  { word: "best regards", cn: "诚挚问候(邮件结尾)", en: "Polite email closing", example: "Best regards, Penny", category: "商务邮件" },
  { word: "cordially", cn: "诚挚地", en: "Warmly and politely", example: "We cordially invite you to visit our factory.", category: "商务邮件" },
  { word: "FYI", cn: "供参考", en: "For Your Information", example: "FYI - our new catalog is attached.", category: "商务邮件" },

  // ===== 7. 社媒营销 (Social Media Marketing) =====
  { word: "engagement", cn: "互动/参与度", en: "User interaction with content", example: "Our engagement rate on Instagram is 4.5%.", category: "社媒营销" },
  { word: "impression", cn: "曝光量", en: "Number of times content is displayed", example: "The post got 50k impressions in 24 hours.", category: "社媒营销" },
  { word: "conversion rate", cn: "转化率", en: "Percentage of visitors who take action", example: "Our conversion rate from social is about 2%.", category: "社媒营销" },
  { word: "reach", cn: "触达量", en: "Number of unique viewers", example: "The campaign reached 100k unique users.", category: "社媒营销" },
  { word: "click-through rate", cn: "点击率/CTR", en: "Percentage who click a link", example: "Our CTR on this ad is 3.2%.", category: "社媒营销" },
  { word: "content calendar", cn: "内容日历", en: "Schedule of planned content", example: "I've updated our content calendar for next month.", category: "社媒营销" },
  { word: "hashtag", cn: "标签/话题标签", en: "Social media topic marker (#)", example: "Use #underwearfashion to boost visibility.", category: "社媒营销" },
  { word: "influencer", cn: "KOL/网红", en: "Person with large social following", example: "We're collaborating with 3 micro-influencers.", category: "社媒营销" },
  { word: "brand awareness", cn: "品牌知名度", en: "How well people know a brand", example: "Our goal is to increase brand awareness in Europe.", category: "社媒营销" },
  { word: "call to action", cn: "行动号召/CTA", en: "Prompt encouraging user action", example: "Add a clear CTA like 'Shop Now' in every post.", category: "社媒营销" },
  { word: "audience", cn: "受众", en: "Target group of viewers", example: "Our primary audience is women 25-40.", category: "社媒营销" },
  { word: "organic reach", cn: "自然触达", en: "Unpaid content visibility", example: "Organic reach has declined since the algorithm change.", category: "社媒营销" },
  { word: "paid promotion", cn: "付费推广", en: "Sponsored content advertising", example: "We allocated $500 for paid promotion this week.", category: "社媒营销" },
  { word: "A/B testing", cn: "A/B测试", en: "Comparing two versions to find best", example: "We're A/B testing two headline styles.", category: "社媒营销" },
  { word: "follower growth", cn: "粉丝增长", en: "Increase in social media followers", example: "Our follower growth rate is 5% per month.", category: "社媒营销" },
  { word: "social proof", cn: "社会认同/口碑证明", en: "Evidence of others' approval", example: "Customer reviews serve as social proof.", category: "社媒营销" },
  { word: "UGC", cn: "用户生成内容", en: "User-Generated Content", example: "We encourage UGC by running photo contests.", category: "社媒营销" },
  { word: "viral", cn: "爆火/病毒式传播", en: "Content spreading rapidly", example: "That video went viral with 2M views.", category: "社媒营销" },
  { word: "retention", cn: "留存率", en: "Keeping existing customers engaged", example: "Customer retention is key to sustainable growth.", category: "社媒营销" },
  { word: "KPI", cn: "关键绩效指标", en: "Key Performance Indicator", example: "Our main KPIs are engagement and conversion rates.", category: "社媒营销" },

  // ===== 8. 谈判策略 (Negotiation Strategy) =====
  { word: "leverage", cn: "筹码/杠杆优势", en: "Advantage used in negotiation", example: "Our fast delivery is a strong leverage in negotiations.", category: "谈判策略" },
  { word: "bargaining power", cn: "议价能力", en: "Strength in price negotiations", example: "Large orders give you more bargaining power.", category: "谈判策略" },
  { word: "bottom line", cn: "底线", en: "Minimum acceptable terms", example: "Our bottom line price is $4.50 per unit.", category: "谈判策略" },
  { word: "walk away", cn: "放弃/退出谈判", en: "Leave negotiation if terms unacceptable", example: "We're prepared to walk away if terms don't improve.", category: "谈判策略" },
  { word: "deal breaker", cn: "交易障碍/关键分歧", en: "Issue that prevents agreement", example: "Payment terms could be a deal breaker for us.", category: "谈判策略" },
  { word: "mutual benefit", cn: "互利", en: "Advantage for both parties", example: "We always seek mutual benefit in partnerships.", category: "谈判策略" },
  { word: "compromise", cn: "折中/妥协", en: "Middle-ground agreement", example: "Let's find a compromise on the lead time.", category: "谈判策略" },
  { word: "firm offer", cn: "实盘/确定报价", en: "Definite, non-revocable offer", example: "This is a firm offer valid for 7 days.", category: "谈判策略" },
  { word: "conditional offer", cn: "有条件报价", en: "Offer dependent on certain terms", example: "This is a conditional offer subject to MOQ.", category: "谈判策略" },
  { word: "trial order", cn: "试订单", en: "Small initial order to test", example: "We suggest a trial order of 500 pieces first.", category: "谈判策略" },
  { word: "rock-bottom price", cn: "最低价", en: "Absolute lowest price possible", example: "This is our rock-bottom price, no further discount.", category: "谈判策略" },
  { word: "sweeten the deal", cn: "使交易更有吸引力", en: "Add benefits to make offer more appealing", example: "We can sweeten the deal with free shipping.", category: "谈判策略" },
  { word: "negotiate in good faith", cn: "诚信谈判", en: "Negotiate honestly and fairly", example: "We always negotiate in good faith with partners.", category: "谈判策略" },
  { word: "meeting halfway", cn: "各让一步", en: "Both parties compromise equally", example: "Let's meet halfway - split the difference on price.", category: "谈判策略" },
  { word: "binding agreement", cn: "有约束力的协议", en: "Legally enforceable contract", example: "Once signed, this becomes a binding agreement.", category: "谈判策略" },

  // ===== 9. 跨境电商 (Cross-border E-commerce) =====
  { word: "dropshipping", cn: "一件代发", en: "Retailer sells, supplier ships directly", example: "We offer dropshipping for overseas sellers.", category: "跨境电商" },
  { word: "fulfillment", cn: "履约/发货执行", en: "Process of completing an order", example: "We use Amazon FBA for order fulfillment.", category: "跨境电商" },
  { word: "listing", cn: "产品上架/商品页面", en: "Product page on e-commerce platform", example: "Optimize your listing with better keywords.", category: "跨境电商" },
  { word: "SEO", cn: "搜索引擎优化", en: "Search Engine Optimization", example: "Good SEO helps your products get found.", category: "跨境电商" },
  { word: "cross-selling", cn: "交叉销售", en: "Selling related products to same customer", example: "Cross-selling accessories with main products.", category: "跨境电商" },
  { word: "upselling", cn: "升级销售", en: "Encouraging purchase of premium version", example: "Upselling from basic to premium quality.", category: "跨境电商" },
  { word: "return policy", cn: "退换货政策", en: "Rules for product returns", example: "Our return policy allows 14-day returns.", category: "跨境电商" },
  { word: "customer review", cn: "客户评价/买家评论", en: "Buyer feedback on product", example: "Positive customer reviews boost conversion.", category: "跨境电商" },
  { word: "shipping template", cn: "运费模板", en: "Standardized shipping cost rules", example: "Set up shipping templates for different regions.", category: "跨境电商" },
  { word: "platform fee", cn: "平台佣金/手续费", en: "Charge by e-commerce platform", example: "Amazon's platform fee is about 15%.", category: "跨境电商" },
  { word: "shopping cart abandonment", cn: "购物车放弃率", en: "Customers leaving without buying", example: "Reduce cart abandonment with better UX.", category: "跨境电商" },
  { word: "conversion funnel", cn: "转化漏斗", en: "Path from awareness to purchase", example: "Optimize each step of the conversion funnel.", category: "跨境电商" },
  { word: "product sourcing", cn: "选品/寻源", en: "Finding products to sell", example: "Product sourcing from reliable suppliers is key.", category: "跨境电商" },
  { word: "reorder rate", cn: "复购率", en: "Percentage of repeat purchases", example: "Our reorder rate is 35% - very healthy.", category: "跨境电商" },
  { word: "wholesale", cn: "批发", en: "Bulk selling at lower prices", example: "We offer wholesale pricing for distributors.", category: "跨境电商" },
];

// 每日单词卡选取算法
function getDailyVocab(forceRefresh) {
  const today = Utils.todayStr();
  const stored = localStorage.getItem('penny_dailyVocab');
  let record = stored ? JSON.parse(stored) : null;

  if (!record || record.date !== today || forceRefresh) {
    // 每天选12-15个词：覆盖4-5个不同分类，混合难度
    const count = 12 + Math.floor(Math.random() * 3); // 12-14
    const categories = [...new Set(VOCAB_POOL.map(v => v.category))];

    // 选取3-4个分类，每个分类选3-4个词
    const seed = today.split('-').join('');
    let hash = 0;
    for (let i = 0; i < seed.length; i++) hash = ((hash << 5) - hash) + seed.charCodeAt(i);

    // 随机选分类
    const selectedCats = [];
    const catCount = 4 + (hash % 2); // 4或5个分类
    const shuffledCats = categories.sort(() => (hash = (hash * 9301 + 49297) % 233280) / 233280 - 0.5);
    for (let i = 0; i < catCount && i < shuffledCats.length; i++) selectedCats.push(shuffledCats[i]);

    // 每个分类里选词
    const selectedWords = [];
    const perCat = Math.ceil(count / selectedCats.length);

    // 排除已标记为"熟悉"的词
    const knownWords = JSON.parse(localStorage.getItem('penny_knownVocab') || '[]');

    selectedCats.forEach(cat => {
      const pool = VOCAB_POOL.filter(v => v.category === cat && !knownWords.includes(v.word));
      const shuffled = pool.sort(() => (hash = (hash * 9301 + 49297) % 233280) / 233280 - 0.5);
      shuffled.slice(0, perCat).forEach(v => selectedWords.push(v));
    });

    record = { date: today, words: selectedWords.slice(0, count) };
    localStorage.setItem('penny_dailyVocab', JSON.stringify(record));
  }

  return record.words;
}
