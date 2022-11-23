let inputText;
function main() {

    var jsonData = JSON.parse("[\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"264 отзыва\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"4 333 грн\",\n" +
        "      \"newUan\":\"3 799 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Motorola MOTO G4 (XT1622) Black\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"1355 отзывов\",\n" +
        "    \"price\":\"4 999 грн\",\n" +
        "    \"name\":\"Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"426 отзывов\",\n" +
        "    \"price\":\"5 199 грн\",\n" +
        "    \"name\":\"Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"403 отзыва\",\n" +
        "    \"price\":\"4 349 грн\",\n" +
        "    \"name\":\"Xiaomi Redmi Note 4X 3/32GB Black\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"488 отзывов\",\n" +
        "    \"price\":\"6 199 грн\",\n" +
        "    \"name\":\"Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"198 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"3 495 грн\",\n" +
        "      \"newUan\":\"2 995 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Lenovo K5 (A6020a40) Silver\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"352 отзыва\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"9 799 грн\",\n" +
        "      \"newUan\":\"7 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Apple iPhone 5s 16GB Space Gray\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"59 отзывов\",\n" +
        "    \"price\":\"5 999 грн\",\n" +
        "    \"name\":\"Nokia 5 Dual Sim Tempered Blue\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"119 отзывов\",\n" +
        "    \"price\":\"11 999 грн\",\n" +
        "    \"name\":\"Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"1106 отзывов\",\n" +
        "    \"price\":\"3 999 грн\",\n" +
        "    \"name\":\"Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"380 отзывов\",\n" +
        "    \"price\":\"2 199 грн\",\n" +
        "    \"name\":\"Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"86 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"24 999 грн\",\n" +
        "      \"newUan\":\"22 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Samsung Galaxy S8 64GB Midnight Black + карта памяти 64гб + оригинальный чехол!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"177 отзывов\",\n" +
        "    \"price\":\"6 499 грн\",\n" +
        "    \"name\":\"Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"347 отзывов\",\n" +
        "    \"price\":\"4 299 грн\",\n" +
        "    \"name\":\"Xiaomi Redmi 4X 3/32GB Black (Международная версия)\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"709 отзывов\",\n" +
        "    \"price\":\"2 799 грн\",\n" +
        "    \"name\":\"Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"527 отзывов\",\n" +
        "    \"price\":\"3 999 грн\",\n" +
        "    \"name\":\"Huawei Y6 Pro Gold + чехол + защитное стекло!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"66 отзывов\",\n" +
        "    \"price\":\"16 499 грн\",\n" +
        "    \"name\":\"Apple iPhone 6s 32GB Gold\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"14 отзывов\",\n" +
        "    \"price\":\"11 499 грн\",\n" +
        "    \"name\":\"Apple iPhone 6 32GB Space Gray\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"70 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"7 399 грн\",\n" +
        "      \"newUan\":\"5 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Asus ZenFone 2 32GB (ZE551ML) Black\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"45 отзывов\",\n" +
        "    \"price\":\"4 299 грн\",\n" +
        "    \"name\":\"Nokia 3 Dual Sim Silver White + сертификаты 500 грн!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"376 отзывов\",\n" +
        "    \"price\":\"3 899 грн\",\n" +
        "    \"name\":\"Meizu M3 Note 32GB Grey (Международная версия)\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"111 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"9 999 грн\",\n" +
        "      \"newUan\":\"7 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Sony Xperia X Dual (F5122) White\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"40 отзывов\",\n" +
        "    \"price\":\"2 222 грн\",\n" +
        "    \"name\":\"Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"93 отзыва\",\n" +
        "    \"price\":\"18 999 грн\",\n" +
        "    \"name\":\"Apple iPhone 7 32GB Black\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"33 отзыва\",\n" +
        "    \"price\":\"16 999 грн\",\n" +
        "    \"name\":\"Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"71 отзыв\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"2 399 грн\",\n" +
        "      \"newUan\":\"1 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"LG K5 X220ds Gold\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"39 отзывов\",\n" +
        "    \"price\":\"2 995 грн\",\n" +
        "    \"name\":\"Lenovo C2 Power (K10a40) Black\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"156 отзывов\",\n" +
        "    \"price\":\"2 599 грн\",\n" +
        "    \"name\":\"Nous NS 5006 Gold\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"40 отзывов\",\n" +
        "    \"price\":\"19 689 грн\",\n" +
        "    \"name\":\"LG G6 Mystic White\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"24 отзыва\",\n" +
        "    \"price\":\"5 995 грн\",\n" +
        "    \"name\":\"Motorola MOTO G5 (XT1676) Grey\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"7 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"10 999 грн\",\n" +
        "      \"newUan\":\"9 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"HTC One X10 Dual Sim Silver\"\n" +
        "  },\n" +
        "  {\n" +
        "    \"ratingRevievs\":\"18 отзывов\",\n" +
        "    \"price\":{\n" +
        "      \"oldUan\":\"5 999 грн\",\n" +
        "      \"newUan\":\"4 999 грн\"\n" +
        "    },\n" +
        "    \"name\":\"Sony Xperia L1 Dual Black\"\n" +
        "  }\n" +
        "]");

    console.log(jsonData);
}


