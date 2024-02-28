import { test, expect } from "@playwright/test";

// ----------------------------------- Home page -----------------------------------

test("test1", async ({ page }) => {
    await page.goto("http://localhost:8080/th/");
    await page.getByRole("link", { name: "us", exact: true }).click();
    expect(page.url()).toBe("http://localhost:8080/us/");
});

test("test2", async ({ page }) => {
    await page.goto("http://localhost:8080/th/");
    await page.getByRole("link", { name: "id" }).click();
    expect(page.url()).toBe("http://localhost:8080/id/");
});

test("test3", async ({ page }) => {
    await page.goto("http://localhost:8080/us/");
    await page.getByRole("link", { name: "th", exact: true }).click();
    expect(page.url()).toBe("http://localhost:8080/th/");
});

test("test4", async ({ page }) => {
    await page.goto("http://localhost:8080/us/");
    await page.getByRole("link", { name: "id"}).click();
    expect(page.url()).toBe("http://localhost:8080/id/");
});

test("test5", async ({ page }) => {
    await page.goto("http://localhost:8080/id/");
    await page.getByRole("link", { name: "th", exact: true }).click();
    expect(page.url()).toBe("http://localhost:8080/th/");
});

test("test6", async ({ page }) => {
    await page.goto("http://localhost:8080/id/");
    await page.getByRole("link", { name: "us", exact: true }).click();
    expect(page.url()).toBe("http://localhost:8080/us/");
});

// check Button cart
test("test7", async ({ page }) => {
    await page.goto("http://localhost:8080");
    await page.getByRole("link", { name: "th", exact: true }).click();
    const checkbtncartth = await expect(page.getByText('รถเข็น')).toBeVisible();
    await page.getByRole("link", { name: "us"}).click();
    const checkbtncartus = await expect(page.getByText('Cart', {exact: true})).toBeVisible();
    await page.getByRole("link", { name: "id"}).click();
    const checkbtncartid = await expect(page.getByText('Troli')).toBeVisible();
});

// check main menu 
test("test8", async ({ page }) => {
    await page.goto("http://localhost:8080");
    await page.getByRole("link", { name: "th", exact: true }).click();
    const checkmenuth1 = await expect(page.getByText('เสื้อผ้า')).toBeVisible();
    const checkmenuth2 = await expect(page.getByText('อุปกรณ์เสริม',{exact: true})).toBeVisible();
    await page.getByRole("link", { name: "us", exact: true }).click();
    const checkmenuus1 = await expect(page.getByText('Clothes')).toBeVisible();
    const checkmenuus2 = await expect(page.getByText('Accessories',{exact: true})).toBeVisible();
    await page.getByRole("link", { name: "id"}).click();
    const checkmenuid1 = await expect(page.getByText('Pakaian')).toBeVisible();
    const checkmenuid2 = await expect(page.getByText('Aksesoris',{exact: true})).toBeVisible();
});

// check Header popular product
test("test9", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkheadth = await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeVisible();
    await page.getByRole("link", { name: "us", exact: true }).click();
    const Checkheadus = await expect(page.getByRole('heading', { name: 'Popular Product' })).toBeVisible();
    await page.getByRole("link", { name: "id", exact: true }).click();
    const Checkheadid = await expect(page.getByRole('heading', { name: 'Populer' })).toBeVisible();
});

// --------- check product name thai language ---------
test("test10", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkpn1 = await expect(page.getByRole('heading', { name: 'เสื้อกันหนาว' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'เสื้อกันหนาว' }).first().hover();
    const checkqv1 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างย่อ' }).first()).toBeVisible();
});

test("test11", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkpn2 = await expect(page.getByRole('heading', { name: 'เสื้อกันหนาวมีฮู้ด' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'เสื้อกันหนาวมีฮู้ด' }).first().hover();
    const checkqv2 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างย่อ' }).first()).toBeVisible();
});

test("test12", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkpn3 = await expect(page.getByRole('heading', { name: 'แก้วน้ำเก็บความเย็น' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'แก้วน้ำเก็บความเย็น' }).first().hover();
    const checkqv3 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างย่อ' }).first()).toBeVisible();
});

test("test13", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkpn4 = await expect(page.getByRole('heading', { name: 'ถุงผ้า' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'ถุงผ้า' }).first().hover();
    const checkqv4 = await expect(page.locator('.quick-view', { name: 'เปิดหน้าต่างย่อ' }).first()).toBeVisible();
});

// --------- check product name English language ---------
test("test14", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "us", exact: true}).click();
    const Checkuspn1 = await expect(page.getByRole('heading', { name: 'Coat' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Coat' }).first().hover();
    const checkusqv1 = await expect(page.locator('.quick-view', { name: 'Quick view' }).first()).toBeVisible();
});

test("test15", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "us", exact: true}).click();
    const Checkuspn2 = await expect(page.getByRole('heading', { name: 'Hoodie' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Hoodie' }).first().hover();
    const checkusqv2 = await expect(page.locator('.quick-view', { name: 'Quick view' }).first()).toBeVisible();
});

test("test16", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "us", exact: true}).click();
    const Checkuspn3 = await expect(page.getByRole('heading', { name: 'Cold Water Glass' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Cold Water Glass' }).first().hover();
    const checkusqv3 = await expect(page.locator('.quick-view', { name: 'Quick view' }).first()).toBeVisible();
});

test("test17", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "us", exact: true}).click();
    const Checkuspn4 = await expect(page.getByRole('heading', { name: 'Cloth Bag' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Cloth Bag' }).first().hover();
    const checkusqv4 = await expect(page.locator('.quick-view', { name: 'Quick view' }).first()).toBeVisible();
});

// --------- check product name Indonesia language ---------
test("test18", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "id", exact: true}).click();
    const Checkidpn1 = await expect(page.getByRole('heading', { name: 'Mantel' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Mantel' }).first().hover();
    const checkidqv1 = await expect(page.locator('.quick-view', { name: 'Lihat sekilas' }).first()).toBeVisible();
});

test("test19", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "id", exact: true}).click();
    const Checkidpn1 = await expect(page.getByRole('heading', { name: 'Tudung' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Tudung' }).first().hover();
    const checkidqv1 = await expect(page.locator('.quick-view', { name: 'Lihat sekilas' }).first()).toBeVisible();
});

test("test20", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "id", exact: true}).click();
    const Checkidpn1 = await expect(page.getByRole('heading', { name: 'Gelas Air Dingin' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Gelas Air Dingin' }).first().hover();
    const checkidqv1 = await expect(page.locator('.quick-view', { name: 'Lihat sekilas' }).first()).toBeVisible();
});

test("test21", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "id", exact: true}).click();
    const Checkidpn1 = await expect(page.getByRole('heading', { name: 'Tas Kain' }).first()).toBeVisible();
    await page.getByRole('link', { name: 'Tas Kain' }).first().hover();
    const checkidqv1 = await expect(page.locator('.quick-view', { name: 'Lihat sekilas' }).first()).toBeVisible();
});

// check Header New Product
test("test22", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkthnew = await expect(page.getByRole('heading', { name: 'สินค้าใหม่' })).toBeVisible();
    await page.getByRole("link", { name: "us", exact: true }).click();
    const Checkusnew = await expect(page.getByRole('heading', { name: 'New Product' })).toBeVisible();
    await page.getByRole("link", { name: "id", exact: true }).click();
    const Checkidnew = await expect(page.getByRole('heading', { name: 'PRODUK BARU' })).toBeVisible();
});

//check content in footer
// that language
test("test23", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "th", exact: true }).click();
    const Checkfth1 = await expect(page.locator('p').filter({ hasText: /^รายการ$/ })).toBeVisible();
    const Checkfth2 = await expect(page.getByRole('link', { name: 'ลดราคา' })).toBeVisible();
    const Checkfth3 = await expect(page.getByRole('link', { name: 'สินค้าใหม่', exact: true })).toBeVisible();
    const Checkfth4 = await expect(page.getByRole('link', { name: 'สินค้าขายดี' })).toBeVisible();

    const Checkfth5 = await expect(page.locator('p').filter({ hasText: /^บริษัทของเรา$/ })).toBeVisible();
    const Checkfth6 = await expect(page.getByRole('link', { name: 'ติดต่อเรา' })).toBeVisible();
    const Checkfth7 = await expect(page.getByRole('link', { name: 'แผนผังเว็บไซต์' })).toBeVisible();
    const Checkfth8 = await expect(page.getByRole('link', { name: 'ร้านค้า' })).toBeVisible();
});

// English
test("test24", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "us", exact: true }).click();
    const Checkfus1 = await expect(page.locator('p').filter({ hasText: /^Products$/ })).toBeVisible();
    const Checkfus2 = await expect(page.getByRole('link', { name: 'Prices drop' })).toBeVisible();
    const Checkfus3 = await expect(page.getByRole('link', { name: 'New products', exact: true })).toBeVisible();
    const Checkfus4 = await expect(page.getByRole('link', { name: 'Best sellers' })).toBeVisible();

    const Checkfus5 = await expect(page.locator('p').filter({ hasText: /^Our company$/ })).toBeVisible();
    const Checkfus6 = await expect(page.getByRole('link', { name: 'Contact us' })).toBeVisible();
    const Checkfus7 = await expect(page.getByRole('link', { name: 'Sitemap' })).toBeVisible();
    const Checkfus8 = await expect(page.getByRole('link', { name: 'Stores' })).toBeVisible();
});

// Indonesia
test("test25", async ({ page }) => {
    await page.goto('http://localhost:8080');
    await page.getByRole("link", { name: "id", exact: true }).click();
    const Checkid1 = await expect(page.locator('p').filter({ hasText: /^Produk$/ })).toBeVisible();
    const Checkid2 = await expect(page.getByRole('link', { name: 'Turun harga' })).toBeVisible();
    const Checkid3 = await expect(page.getByRole('link', { name: 'Produk baru', exact: true })).toBeVisible();
    const Checkid4 = await expect(page.getByRole('link', { name: 'Terlaris' })).toBeVisible();

    const Checkid5 = await expect(page.locator('p').filter({ hasText: /^Perusahaan kami$/ })).toBeVisible();
    const Checkid6 = await expect(page.getByRole('link', { name: 'Hubungi kami' })).toBeVisible();
    const Checkid7 = await expect(page.getByRole('link', { name: 'Sitemap' })).toBeVisible();
    const Checkid8 = await expect(page.getByRole('link', { name: 'Toko' })).toBeVisible();
});

// page clothes
test("test26", async ({ page }) => {
    await page.goto('http://localhost:8080');
    // Thai
    await page.getByRole("link", { name: "th", exact: true }).click();
    await page.getByRole('link', { name: 'เสื้อผ้า' }).click();
    const Checkthct1 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible();
    const Checkthct2 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("สิ่งที่เกี่ยวข้อง")');
    await expect(page.locator('#js-product-list-top')).toContainText('สิ่งที่เกี่ยวข้อง');
    await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ ก ถึง ฮ');
    await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ ฮ ถึง ก');
    await expect(page.locator('#js-product-list-top')).toContainText('ราคา : จากน้อยไปมาก');
    await expect(page.locator('#js-product-list-top')).toContainText('ราคา: จากมากไปน้อย');
    
    // English
    await page.getByRole("link", { name: "us", exact: true }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Clothes' }).click();
    const Checkusct1 = await expect(page.getByText('Suppliers', { exact: true })).toBeVisible();
    const Checkusct2 = await expect(page.getByRole('link', { name: 'Brands' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("Relevance")');
    await expect(page.locator('#js-product-list-top')).toContainText('Relevance');
    await expect(page.locator('#js-product-list-top')).toContainText('Name, A to Z');
    await expect(page.locator('#js-product-list-top')).toContainText('Name, Z to A');
    await expect(page.locator('#js-product-list-top')).toContainText('Price, low to high');
    await expect(page.locator('#js-product-list-top')).toContainText('Price, high to low');

    // Indonesia
    await page.getByRole("link", { name: "id", exact: true }).click();
    await page.locator('#left-column').getByRole('link', { name: 'PAKAIAN' }).click();
    const Checkidct1 = await expect(page.getByText('Supplier', { exact: true })).toBeVisible();
    const Checkidct2 = await expect(page.getByRole('link', { name: 'Brand' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("Relevansi")');
    await expect(page.locator('#js-product-list-top')).toContainText('Relevansi');
    await expect(page.locator('#js-product-list-top')).toContainText('Nama, A ke Z');
    await expect(page.locator('#js-product-list-top')).toContainText('Nama, Z ke A');
    await expect(page.locator('#js-product-list-top')).toContainText('Harga, Rendah ke Tinggi');
    await expect(page.locator('#js-product-list-top')).toContainText('Harga, Tinggi ke Rendah');
});

// Accessories page
test("test27", async ({ page }) => {
    await page.goto('http://localhost:8080');
    // Thai
    await page.getByRole("link", { name: "th", exact: true }).click();
    await page.getByRole('link', { name: 'อุปกรณ์เสริม' }).click();
    const Checkthct1 = await expect(page.getByText('ผู้จัดหาสินค้า', { exact: true })).toBeVisible();
    const Checkthct2 = await expect(page.getByRole('link', { name: 'แบรนด์' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("สิ่งที่เกี่ยวข้อง")');
    await expect(page.locator('#js-product-list-top')).toContainText('สิ่งที่เกี่ยวข้อง');
    await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ ก ถึง ฮ');
    await expect(page.locator('#js-product-list-top')).toContainText('ตามชื่อ ฮ ถึง ก');
    await expect(page.locator('#js-product-list-top')).toContainText('ราคา : จากน้อยไปมาก');
    await expect(page.locator('#js-product-list-top')).toContainText('ราคา: จากมากไปน้อย');
    
    // English
    await page.getByRole("link", { name: "us", exact: true }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Accessories', exact:true }).click();
    const Checkusct1 = await expect(page.getByText('Suppliers', { exact: true })).toBeVisible();
    const Checkusct2 = await expect(page.getByRole('link', { name: 'Brands' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("Relevance")');
    await expect(page.locator('#js-product-list-top')).toContainText('Relevance');
    await expect(page.locator('#js-product-list-top')).toContainText('Name, A to Z');
    await expect(page.locator('#js-product-list-top')).toContainText('Name, Z to A');
    await expect(page.locator('#js-product-list-top')).toContainText('Price, low to high');
    await expect(page.locator('#js-product-list-top')).toContainText('Price, high to low');

    // Indonesia
    await page.getByRole("link", { name: "id", exact: true }).click();
    await page.locator('#left-column').getByRole('link', { name: 'Aksesoris' }).click();
    const Checkidct1 = await expect(page.getByText('Pemasok', { exact: true })).toBeVisible();
    const Checkidct2 = await expect(page.getByRole('link', { name: 'Merek' })).toBeVisible();
    await page.waitForTimeout(1000);
    await page.click('button:has-text("Relevansi")');
    await expect(page.locator('#js-product-list-top')).toContainText('Relevansi');
    await expect(page.locator('#js-product-list-top')).toContainText('Nama, A ke Z');
    await expect(page.locator('#js-product-list-top')).toContainText('Nama, Z ke A');
    await expect(page.locator('#js-product-list-top')).toContainText('Harga, Rendah ke Tinggi');
    await expect(page.locator('#js-product-list-top')).toContainText('Harga, Tinggi ke Rendah');
});