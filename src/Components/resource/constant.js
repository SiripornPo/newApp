import { icon } from '../../../asset'

export const menu = [
    {
        id: 0,
        name: 'เบอร์เกอร์',
        icon: icon.burger
    }, {
        id: 1,
        name: 'พิซซ่า',
        icon: icon.pizza
    }, {
        id: 2,
        name: 'ฮอทด็อก',
        icon: icon.hotdog
    }, {
        id: 3,
        name: 'ข้าว',
        icon: icon.rice
    }, {
        id: 4,
        name: 'ก๋วยเตี๋ยว',
        icon: icon.noodle
    }, {
        id: 5,
        name: 'น้ำผลไม้',
        icon: icon.juice
    },
]

// ======================================================================================================================================================
// ======================================================================================================================================================
export const listMenu = [
    {
        id: 0,
        type: 'เบอร์เกอร์',
        listType: [{
            menu_id: 0,
            menu_name: 'เบอร์เกอร์หมู S',
            menu_price: '30',
        }, {
            menu_id: 1,
            menu_name: 'เบอร์เกอร์หมู L',
            menu_price: '40',
        }, {
            menu_id: 2,
            menu_name: 'เบอร์เกอร์ไก่ S',
            menu_price: '30',
        }, {
            menu_id: 3,
            menu_name: 'เบอร์เกอร์ไก่ L',
            menu_price: '40',
        }, {
            menu_id: 4,
            menu_name: 'เบอร์เกอร์เนื้อ S',
            menu_price: '30',
        }, {
            menu_id: 5,
            menu_name: 'เบอร์เกอร์เนื้อ L',
            menu_price: '40',
        }, {
            menu_id: 6,
            menu_name: 'เบอร์เกอร์ปลา S',
            menu_price: '30',
        }, {
            menu_id: 7,
            menu_name: 'เบอร์เกอร์ปลา L',
            menu_price: '40',
        }]
    }, {
        id: 1,
        type: 'พิซซ่า',
        listType: [{
            menu_id: 0,
            menu_name: 'พิซซ่าแฮมและปูอัด',
            menu_price: '299',
        }, {
            menu_id: 1,
            menu_name: 'พิซซ่าฮาวายเอี้ยน',
            menu_price: '299',
        }, {
            menu_id: 2,
            menu_name: 'พิซซ่าซีฟู้ดค็อกเทล',
            menu_price: '299',
        }, {
            menu_id: 3,
            menu_name: 'พิซซ่าซุปเปอร์เดอลุกซ์',
            menu_price: '349',
        }, {
            menu_id: 4,
            menu_name: 'พิซซ่าทุเรียนหมอนทอง',
            menu_price: '399',
        }, {
            menu_id: 5,
            menu_name: 'พิซซ่าเบคอนโอเวอร์โหลด',
            menu_price: '149',
        }, {
            menu_id: 6,
            menu_name: 'พิซซ่าปูอัดและข้าวโพด',
            menu_price: '149',
        }, {
            menu_id: 7,
            menu_name: 'พิซซ่าเบคอนไส้กรอก',
            menu_price: '149',
        }, {
            menu_id: 8,
            menu_name: 'พิซซ่าซีฟู้ดเดอลุกซ์',
            menu_price: '399',
        }]
    }, {
        id: 2,
        type: 'ฮอทด็อก',
        listType: [{
            menu_id: 0,
            menu_name: 'ฮอทด็อกไก่',
            menu_price: '25',
        }, {
            menu_id: 1,
            menu_name: 'ฮอทด็อกหมู',
            menu_price: '25',
        }, {
            menu_id: 2,
            menu_name: 'ฮอทด็อกเนื้อ',
            menu_price: '25',
        }]
    }, {
        id: 3,
        type: 'ข้าว',
        listType: [{
            menu_id: 0,
            menu_name: 'ข้าวกะเพรา (หมู ไก่ ไก่กรอบ หมูกรอบ)',
            menu_price: '40',
        }, {
            menu_id: 2,
            menu_name: 'ข้าวกะเพรา (ปลาหมึก กุ้ง ทะเล รวม)',
            menu_price: '50',
        }, {
            menu_id: 3,
            menu_name: 'โกยซีหมี่ (หมู ไก่ ไก่กรอบ หมูกรอบ)',
            menu_price: '45',
        }, {
            menu_id: 4,
            menu_name: 'โกยซีหมี่ (ปลาหมึก กุ้ง ทะเล รวม)',
            menu_price: '50',
        }, {
            menu_id: 5,
            menu_name: 'ข้าวผัด',
            menu_price: '40',
        }, {
            menu_id: 6,
            menu_name: 'ข้าวผัดฉ่าแกงป่า',
            menu_price: '40',
        }, {
            menu_id: 7,
            menu_name: 'ข้าวผัดพริกแกง',
            menu_price: '40',
        }, {
            menu_id: 8,
            menu_name: 'ข้าวราดกุ้งคั่วพริกเกลือ',
            menu_price: '40',
        }, {
            menu_id: 9,
            menu_name: 'ข้าวราดแกงกะหรี่กุ้ง',
            menu_price: '40',
        }, {
            menu_id: 10,
            menu_name: 'ข้าวราดข้าวโพดอ่อนผัดหมูสับ+แหนม',
            menu_price: '40',
        }, {
            menu_id: 11,
            menu_name: 'ข้าวหน้าเป็ด',
            menu_price: '40',
        }, {
            menu_id: 12,
            menu_name: 'ข้าวหมูกระเทียม',
            menu_price: '40',
        }, {
            menu_id: 13,
            menu_name: 'ต้มเลือดหมู',
            menu_price: '40',
        }, {
            menu_id: 14,
            menu_name: 'ผัดซีอิ๊ว',
            menu_price: '40',
        }, {
            menu_id: 15,
            menu_name: 'ข้าว(หมู, หมึก, กุ้ง)ผัดน้ำมันหอย',
            menu_price: '40',
        }, {
            menu_id: 16,
            menu_name: 'ราดหน้าไข่เจียว',
            menu_price: '50',
        }, {
            menu_id: 17,
            menu_name: 'สปาเก็ตตี้หมูสับซอสมะเขือเทศ',
            menu_price: '40',
        }, {
            menu_id: 18,
            menu_name: 'สุกี้หมู',
            menu_price: '40',
        }, {
            menu_id: 19,
            menu_name: 'ข้าวหมูทอดผัดผงกะหรี่',
            menu_price: '40',
        }, {
            menu_id: 20,
            menu_name: 'ข้าวไข่เจียว',
            menu_price: '30',
        }, {
            menu_id: 21,
            menu_name: 'ข้าวหมูผัดน้ำพริกเผา',
            menu_price: '40',
        }]

    }, {
        id: 4,
        type: 'ก๋วยเตี๋ยว',
        listType: [{
            menu_id: 0,
            menu_name: 'ก๋วยเตี๋ยว (หมู, หมูตุ๋น, เนื้อ, เนื้อเปื่อย) น้ำตก/น้ำใส/ต้มยำ',
            menu_price: '40',
        }, {
            menu_id: 1,
            menu_name: 'เกาเหลา',
            menu_price: '50',
        }]
    }, {
        id: 5,
        type: 'น้ำผลไม้',
        listType: [{
            menu_id: 0,
            menu_name: 'น้ำส้ม',
            menu_price: '25',
        }, {
            menu_id: 1,
            menu_name: 'น้ำละมุด',
            menu_price: '25',
        }, {
            menu_id: 3,
            menu_name: 'น้ำลำไย',
            menu_price: '25',
        }, {
            menu_id: 4,
            menu_name: 'น้ำมะพร้าว',
            menu_price: '25',
        }, {
            menu_id: 5,
            menu_name: 'น้ำกระเจี๊ยบ',
            menu_price: '25',
        }, {
            menu_id: 6,
            menu_name: 'น้ำเฉาก๋วย',
            menu_price: '25',
        }, {
            menu_id: 7,
            menu_name: 'น้ำแตงโม',
            menu_price: '25',
        }, {
            menu_id: 8,
            menu_name: 'น้ำองุ่น',
            menu_price: '25',
        }, {
            menu_id: 9,
            menu_name: 'น้ำเก๊กฮวย',
            menu_price: '20',
        }, {
            menu_id: 10,
            menu_name: 'น้ำเปล่า',
            menu_price: '10',
        }]
    }
]
// ========================================================================================
// ========================================================================================
