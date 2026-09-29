const EXPORTABLE_DESCRIPTION = (title) =>
  `این ${title} یک نوع سند موتر است که برای صادرات قابل استفاده می‌باشد. قبل از خرید موتر، نوع تایتل و وضعیت آن را با معلومات موتر مطابقت دهید.`;

const NON_EXPORTABLE_DESCRIPTION = (title) =>
  `این ${title} برای صادرات عادی مناسب نیست و برای آماده‌سازی اسناد صادراتی مصرف اضافی دارد. مصرف عاجل و عادی در پایین نمایش داده شده است.`;

const PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION = (title) =>
  `این ${title} قابل خروج از کشور نمی‌باشد. حتی با پرداخت مصرف اضافی نیز این تایتل برای صادرات قابل تبدیل نیست.`;

const exportable = [
  {
    id: 1,
    titleEn: 'TN - SALVAGE CERTIFICATE',
    titleFa: 'تنسی - سرتیفیکیت سالویج',
  },
  {
    id: 2,
    titleEn: 'NY - MV-907A SALVAGE CERTIFICATE',
    titleFa: 'نیویورک - سرتیفیکیت سالویج MV-907A',
  },
  {
    id: 3,
    titleEn: 'AR - CERT OF TITLE-SALVAGE',
    titleFa: 'آرکانزاس - سند ملکیت سالویج',
  },
  {
    id: 4,
    titleEn: 'IN - CERT OF TITLE-SALVAGE TITLE',
    titleFa: 'ایندیانا - سند ملکیت سالویج',
  },
  {
    id: 5,
    titleEn: 'IL - SALVAGE CERTIFICATE',
    titleFa: 'ایلینوی - سرتیفیکیت سالویج',
  },
  {
    id: 6,
    titleEn: 'CA - SALVAGE CERTIFICATE',
    titleFa: 'کالیفورنیا - سرتیفیکیت سالویج',
  },
  {
    id: 7,
    titleEn: 'MA - CERTIFICATE OF TITLE',
    titleFa: 'ماساچوست - سرتیفیکیت ملکیت',
  },
  {
    id: 8,
    titleEn: 'MO - SALVAGE CERTIFICATE OF TITLE',
    titleFa: 'میسوری - سرتیفیکیت ملکیت سالویج',
  },
  {
    id: 9,
    titleEn: 'NJ - CERT OF TITLE-SALVAGE',
    titleFa: 'نیوجرسی - سند ملکیت سالویج',
  },
  {
    id: 10,
    titleEn: 'IL - CERTIFICATE OF TITLE',
    titleFa: 'ایلینوی - سرتیفیکیت ملکیت',
  },
  {
    id: 11,
    titleEn: 'OH - CERT OF TITLE-SALVAGE',
    titleFa: 'اوهایو - سند ملکیت سالویج',
  },
  {
    id: 12,
    titleEn: 'MD - CERT OF SALVAGE > 75% DAMAGE',
    titleFa: 'مریلند - سرتیفیکیت سالویج با خسارت بیشتر از ۷۵٪',
  },
  {
    id: 13,
    titleEn: 'FL - CERT OF TITLE SLVG REBUILDABLE',
    titleFa: 'فلوریدا - سند سالویج قابل ترمیم',
  },
  {
    id: 14,
    titleEn: 'NY - MV907A-PARTS ONLY',
    titleFa: 'نیویورک - MV907A صرف برای پرزه‌جات',
  },
  {
    id: 15,
    titleEn: 'PA - CERTIFICATE OF SALVAGE',
    titleFa: 'پنسیلوانیا - سرتیفیکیت سالویج',
  },
  {
    id: 16,
    titleEn: 'IL - CERTIFICATE OF TITLE',
    titleFa: 'ایلینوی - سرتیفیکیت ملکیت',
  },
  {
    id: 17,
    titleEn: 'MA - CERT OF TITLE-SALVAGE',
    titleFa: 'ماساچوست - سند ملکیت سالویج',
  },
  {
    id: 18,
    titleEn: 'TX - SALVAGE VEHICLE TITLE',
    titleFa: 'تگزاس - سند ملکیت موتر سالویج',
  },
  {
    id: 19,
    titleEn: 'CO - PUBLIC - SALVAGE TITLE',
    titleFa: 'کلرادو - سند عمومی سالویج',
  },
  {
    id: 20,
    titleEn: 'KY - CERT OF TITLE-SALVAGE',
    titleFa: 'کنتاکی - سند ملکیت سالویج',
  },
  {
    id: 21,
    titleEn: 'VA - CERT OF TITLE - SALVAGE',
    titleFa: 'ویرجینیا - سند ملکیت سالویج',
  },
  {
    id: 22,
    titleEn: 'GA - CERT OF TITLE-SALVAGE',
    titleFa: 'جورجیا - سند ملکیت سالویج',
  },
  {
    id: 23,
    titleEn: 'SC - CERT OF TITLE-SALVAGE',
    titleFa: 'کارولینای جنوبی - سند ملکیت سالویج',
  },
  {
    id: 24,
    titleEn: 'RI - SALVAGE CERTIFICATE OF TITLE',
    titleFa: 'رود آیلند - سرتیفیکیت ملکیت سالویج',
  },
  {
    id: 25,
    titleEn: 'IN - CERTIFICATE OF TITLE',
    titleFa: 'ایندیانا - سرتیفیکیت ملکیت',
  },
  {
    id: 26,
    titleEn: 'AL - CERT OF TITLE-SALVAGE TITLE',
    titleFa: 'آلاباما - سند ملکیت سالویج',
  },
  {
    id: 27,
    titleEn: 'FL - CERTIFICATE OF DESTRUCTION',
    titleFa: 'فلوریدا - سرتیفیکیت تخریب',
  },
  {
    id: 28,
    titleEn: 'AL - CERT OF TITLE-PARTS ONLY SALVG',
    titleFa: 'آلاباما - سند سالویج صرف برای پرزه‌جات',
  },
  {
    id: 29,
    titleEn: 'NC - SALVAGE CERTIFICATE OF TITLE',
    titleFa: 'کارولینای شمالی - سرتیفیکیت ملکیت سالویج',
  },
  {
    id: 30,
    titleEn: 'WV - SALVAGE CERTIFICATE',
    titleFa: 'ویرجینیای غربی - سرتیفیکیت سالویج',
  },
  {
    id: 31,
    titleEn: 'MO - DEALER ONLY CLEAN TITLE',
    titleFa: 'میسوری - تایتل پاک صرف برای دیلر',
  },
  {
    id: 32,
    titleEn: 'TN - SALVAGE CERTIFICATE',
    titleFa: 'تنسی - سرتیفیکیت سالویج',
  },
  {
    id: 33,
    titleEn: 'LA - CERT OF TITLE-SALVAGE',
    titleFa: 'لوئیزیانا - سند ملکیت سالویج',
  },
  {
    id: 34,
    titleEn: 'CO - CERTIFICATE OF TITLE',
    titleFa: 'کلرادو - سرتیفیکیت ملکیت',
  },
  {
    id: 35,
    titleEn: 'MO - CERTIFICATE OF TITLE',
    titleFa: 'میسوری - سرتیفیکیت ملکیت',
  },
  {
    id: 36,
    titleEn: 'CO - SALVAGE TITLE',
    titleFa: 'کلرادو - سند سالویج',
  },
  {
    id: 37,
    titleEn: 'AZ - CERT OF TITLE - SALVAGE',
    titleFa: 'آریزونا - سند ملکیت سالویج',
  },
  {
    id: 38,
    titleEn: 'MS - CERT OF TITLE-SALVAGED',
    titleFa: 'میسیسیپی - سند ملکیت سالویج',
  },
  {
    id: 39,
    titleEn: 'TX - CERTIFICATE OF TITLE',
    titleFa: 'تگزاس - سرتیفیکیت ملکیت',
  },
  {
    id: 40,
    titleEn: 'NH - CERT OF TITLE-SALVAGE',
    titleFa: 'نیوهمپشایر - سند ملکیت سالویج',
  },
  {
    id: 41,
    titleEn: 'ME - CERT OF TITLE-SALVAGE COLLISIO',
    titleFa: 'مین - سند ملکیت سالویج ناشی از تصادم',
  },
  {
    id: 42,
    titleEn: 'MA - CERT OF TITLE-SALVG PARTS ONLY',
    titleFa: 'ماساچوست - سند سالویج صرف برای پرزه‌جات',
  },
  {
    id: 43,
    titleEn: 'MN - CERT OF TITLE-SALVAGE',
    titleFa: 'مینه‌سوتا - سند ملکیت سالویج',
  },
  {
    id: 44,
    titleEn: 'MV-907A (New York)',
    titleFa: 'MV-907A - نیویورک',
  },
  {
    id: 45,
    titleEn: 'SALVAGE (Arizona)',
    titleFa: 'سالویج - آریزونا',
  },
  {
    id: 46,
    titleEn: 'MA-CERT OF TITLE-SALVAGE',
    titleFa: 'ماساچوست - سند ملکیت سالویج',
  },
  {
    id: 47,
    titleEn: 'SALVAGE (South Carolina)',
    titleFa: 'سالویج - کارولینای جنوبی',
  },
  {
    id: 48,
    titleEn: 'NC - DLR ONLY-CLEAN/OVER 25% DAMAGE',
    titleFa: 'کارولینای شمالی - صرف دیلر، پاک با خسارت بیشتر از ۲۵٪',
  },
  {
    id: 49,
    titleEn: 'SALVAGE TITLE (Texas)',
    titleFa: 'سند سالویج - تگزاس',
  },
  {
    id: 50,
    titleEn: 'SALVAGE (North Carolina)',
    titleFa: 'سالویج - کارولینای شمالی',
  },
  {
    id: 51,
    titleEn: 'CERTIFICATE OF DESTRUCTION (Florida)',
    titleFa: 'سرتیفیکیت تخریب - فلوریدا',
  },
  {
    id: 52,
    titleEn: 'KS - NON-REPAIRABLE VEHICLE CERTIFI',
    titleFa: 'کانزاس - سرتیفیکیت موتر غیرقابل ترمیم',
  },
  {
    id: 53,
    titleEn: 'SALVAGE (Louisiana)',
    titleFa: 'سالویج - لوئیزیانا',
  },
  {
    id: 54,
    titleEn: 'NC - DEALER ONLY CLEAN TITLE',
    titleFa: 'کارولینای شمالی - تایتل پاک صرف برای دیلر',
  },
  {
    id: 55,
    titleEn: 'CO - NON-REPAIRABLE CERT OF TITLE',
    titleFa: 'کلرادو - سند ملکیت غیرقابل ترمیم',
  },
  {
    id: 56,
    titleEn: 'MO - JUNKING CERTIFICATE',
    titleFa: 'میسوری - سرتیفیکیت اسقاط',
  },
  {
    id: 57,
    titleEn: 'AR - CERTIFICATE OF TITLE',
    titleFa: 'آرکانزاس - سرتیفیکیت ملکیت',
  },
  {
    id: 58,
    titleEn: 'TX - NONREPAIRABLE TITLE',
    titleFa: 'تگزاس - سند غیرقابل ترمیم',
  },
  {
    id: 59,
    titleEn: 'NM - CERT OF TITLE-SALVAGE',
    titleFa: 'نیومکزیکو - سند ملکیت سالویج',
  },
  {
    id: 60,
    titleEn: 'CLEAR (Tennessee)',
    titleFa: 'تایتل پاک - تنسی',
  },
  {
    id: 61,
    titleEn: 'SALVAGE (Georgia)',
    titleFa: 'سالویج - جورجیا',
  },
  {
    id: 62,
    titleEn: 'SALVAGE (Mississippi)',
    titleFa: 'سالویج - میسیسیپی',
  },
  {
    id: 63,
    titleEn: 'NV - SALVAGE TITLE',
    titleFa: 'نوادا - سند سالویج',
  },
  {
    id: 64,
    titleEn: 'ORIGINAL (Texas)',
    titleFa: 'سند اصلی - تگزاس',
  },
  {
    id: 65,
    titleEn: 'AZ - CERT OF TITLE-RESTORED SALVAGE',
    titleFa: 'آریزونا - سند ملکیت سالویج ترمیم‌شده',
  },
  {
    id: 66,
    titleEn: 'TN - SALVAGE CERTIFICATE',
    titleFa: 'تنسی - سرتیفیکیت سالویج',
  },
  {
    id: 67,
    titleEn: 'AZ-CERT OF TITLE - SALVAGE',
    titleFa: 'آریزونا - سند ملکیت سالویج',
  },
  {
    id: 68,
    titleEn: 'MN-CERTIFICATE OF TITLE',
    titleFa: 'مینه‌سوتا - سرتیفیکیت ملکیت',
  },
  {
    id: 69,
    titleEn: 'AL-CERT OF TITLE-SALVAGE TITLE',
    titleFa: 'آلاباما - سند ملکیت سالویج',
  },
  {
    id: 70,
    titleEn: 'OR-SALVAGE TITLE CERTIFICATE',
    titleFa: 'اورگن - سرتیفیکیت سند سالویج',
  },
  {
    id: 71,
    titleEn: 'UT-SALVAGE CERTIFICATE',
    titleFa: 'یوتا - سرتیفیکیت سالویج',
  },
  {
    id: 72,
    titleEn: 'NE-CERT OF TITLE-SALVAGE',
    titleFa: 'نبراسکا - سند ملکیت سالویج',
  },
  {
    id: 73,
    titleEn: 'OH-CERT OF TITLE-SALVAGE',
    titleFa: 'اوهایو - سند ملکیت سالویج',
  },
  {
    id: 74,
    titleEn: 'GA-CERT OF TITLE-SALVAGE',
    titleFa: 'جورجیا - سند ملکیت سالویج',
  },
  {
    id: 75,
    titleEn: 'TN-NON-REPAIRABLE CERTIFICATE',
    titleFa: 'تنسی - سرتیفیکیت غیرقابل ترمیم',
  },
  {
    id: 76,
    titleEn: 'NM-CERT OF TITLE-SALVAGE',
    titleFa: 'نیومکزیکو - سند ملکیت سالویج',
  },
  {
    id: 77,
    titleEn: 'PA-CERTIFICATE OF SALVAGE',
    titleFa: 'پنسیلوانیا - سرتیفیکیت سالویج',
  },
  {
    id: 78,
    titleEn: 'SALVAGE - GREATER THAN 75%',
    titleFa: 'سالویج - خسارت بیشتر از ۷۵٪',
  },
  {
    id: 79,
    titleEn: 'OK-CERT OF TITLE-SALVAGE',
    titleFa: 'اوکلاهما - سند ملکیت سالویج',
  },
  {
    id: 80,
    titleEn: 'SALVAGE (Florida)',
    titleFa: 'سالویج - فلوریدا',
  },
  {
    id: 81,
    titleEn: 'PA-CERT OF SALV-R=RECONSTRUCTED',
    titleFa: 'پنسیلوانیا - سند سالویج بازسازی‌شده',
  },
  {
    id: 82,
    titleEn: 'GA - CERT OF TITLE-MANUFCTR BUYBACK',
    titleFa: 'جورجیا - سند بازخریدشده توسط تولیدکننده',
  },
  {
    id: 83,
    titleEn: 'MA - CERT OF TITLE-RECONSTRCTD COLL',
    titleFa: 'ماساچوست - سند ملکیت بازسازی‌شده ناشی از تصادم',
  },
  {
    id: 84,
    titleEn: 'CLEAR (Oklahoma)',
    titleFa: 'تایتل پاک - اوکلاهما',
  },
  {
    id: 85,
    titleEn: 'SALVAGE (Missouri)',
    titleFa: 'سالویج - میسوری',
  },
  {
    id: 86,
    titleEn: 'CA-DEALER ONLY SALVAGE TITLE',
    titleFa: 'کالیفورنیا - سند سالویج صرف برای دیلر',
  },
  {
    id: 87,
    titleEn: 'MO-JUNKING CERTIFICATE',
    titleFa: 'میسوری - سرتیفیکیت اسقاط',
  },
  {
    id: 88,
    titleEn: 'MN - NON PUBLIC CLEAN TITLE',
    titleFa: 'مینه‌سوتا - تایتل پاک غیرعمومی',
  },
  {
    id: 89,
    titleEn: 'SALVAGE - GREATER THAN 75% (Maryland)',
    titleFa: 'سالویج - خسارت بیشتر از ۷۵٪ - مریلند',
  },
  {
    id: 90,
    titleEn: 'CLEAR-ENDORSEMENT (Wisconsin)',
    titleFa: 'تایتل پاک با تأییدیه - ویسکانسین',
  },
  {
    id: 91,
    titleEn: 'OK - CERT OF TITLE-REPOSSESSION',
    titleFa: 'اوکلاهما - سند ملکیت بازپس‌گیری‌شده',
  },
  {
    id: 92,
    titleEn: 'PA - CERT OF TITL',
    titleFa: 'پنسیلوانیا - سرتیفیکیت ملکیت',
  },
  {
    id: 93,
    titleEn: 'CLEAR (Arkansas)',
    titleFa: 'تایتل پاک - آرکانزاس',
  },
  {
    id: 94,
    titleEn: 'SALVAGE (Oklahoma)',
    titleFa: 'سالویج - اوکلاهما',
  },
  {
    id: 95,
    titleEn: 'SALVAGE CERTIFICATE (California)',
    titleFa: 'سرتیفیکیت سالویج - کالیفورنیا',
  },
  {
    id: 96,
    titleEn: 'NON-REPAIRABLE (Colorado)',
    titleFa: 'غیرقابل ترمیم - کلرادو',
  },
  {
    id: 97,
    titleEn: 'FL - CERT OF TITLE-TAXI',
    titleFa: 'فلوریدا - سند ملکیت تاکسی',
  },
  {
    id: 98,
    titleEn: 'MA-CERT OF TITLE-RECONSTRCTD COLL',
    titleFa: 'ماساچوست - سند ملکیت بازسازی‌شده ناشی از تصادم',
  },
  {
    id: 99,
    titleEn: 'AK - CERTIFICATE OF VEHICLE TITLE',
    titleFa: 'آلاسکا - سرتیفیکیت ملکیت موتر',
  },
  {
    id: 100,
    titleEn: 'TN - SALVAGE CERTIFICATE',
    titleFa: 'تنسی - سرتیفیکیت سالویج',
  },
  {
    id: 101,
    titleEn: 'MA-CERT OF TITLE-PARTS ONLY SALVA',
    titleFa: 'ماساچوست - سند سالویج صرف برای پرزه‌جات',
  },
  {
    id: 102,
    titleEn: 'AL-CERT OF TITLE-REBUILT',
    titleFa: 'آلاباما - سند ملکیت بازسازی‌شده',
  },
  {
    id: 103,
    titleEn: 'TX - NON PUBLIC CLEAN TITLE',
    titleFa: 'تگزاس - تایتل پاک غیرعمومی',
  },
  {
    id: 104,
    titleEn: 'WA-VEHICLE CERT OF OWNERSHIP-TITL',
    titleFa: 'واشنگتن - سرتیفیکیت ملکیت موتر',
  },
  {
    id: 105,
    titleEn: 'PA-CERT OF TITLE-W&R=FLOOD&RECNST',
    titleFa: 'پنسیلوانیا - سند ملکیت سیلاب و بازسازی',
  },
  {
    id: 106,
    titleEn: 'MI - DEALER ONLY CLEAN TITLE',
    titleFa: 'میشیگان - تایتل پاک صرف برای دیلر',
  },
  {
    id: 107,
    titleEn: 'SC-CERT OF TITLE-SALVAGE',
    titleFa: 'کارولینای جنوبی - سند ملکیت سالویج',
  },
  {
    id: 108,
    titleEn: 'JUNK (Oklahoma)',
    titleFa: 'اسقاط - اوکلاهما',
  },
  {
    id: 109,
    titleEn: 'CA - CERT OF TITLE OR SALVAGE ACQ',
    titleFa: 'کالیفورنیا - سند ملکیت یا خرید سالویج',
  },
  {
    id: 110,
    titleEn: 'KY - CERT OF TITLE-REBUILT VEHICLE',
    titleFa: 'کنتاکی - سند ملکیت موتر بازسازی‌شده',
  },
  {
    id: 111,
    titleEn: 'MI-SCRAP CERTIFICATE OF TITLE',
    titleFa: 'میشیگان - سرتیفیکیت اسقاط ملکیت',
  },
  {
    id: 112,
    titleEn: 'CT - AFFIDAVIT OF REPOSSESSION',
    titleFa: 'کانکتیکات - اظهارنامه بازپس‌گیری',
  },
  {
    id: 113,
    titleEn: 'MN-DEALER ONLY CLEAN TITLE',
    titleFa: 'مینه‌سوتا - تایتل پاک صرف برای دیلر',
  },
  {
    id: 114,
    titleEn: 'MO - JUNKING CERTIFICATE',
    titleFa: 'میسوری - سرتیفیکیت اسقاط',
  },
  {
    id: 115,
    titleEn: 'AB - BOS - SALVAGE',
    titleFa: 'آلبرتا - برگه خرید و فروش سالویج',
  },
  {
    id: 116,
    titleEn: 'TX - BONDED TITLE - CLEAN',
    titleFa: 'تگزاس - تایتل پاک تضمینی',
  },
  {
    id: 117,
    titleEn: 'OK - CERT OF TITLE-INDIAN TRIBAL',
    titleFa: 'اوکلاهما - سند ملکیت قبیله‌ای',
  },
  {
    id: 118,
    titleEn: 'REBUILDABLE (Florida)',
    titleFa: 'قابل ترمیم - فلوریدا',
  },
  {
    id: 119,
    titleEn: 'SALVAGE (Arkansas)',
    titleFa: 'سالویج - آرکانزاس',
  },
  {
    id: 120,
    titleEn: 'PARTS ONLY BOS (Minnesota)',
    titleFa: 'برگه خرید و فروش صرف برای پرزه‌جات - مینه‌سوتا',
  },
  {
    id: 121,
    titleEn: 'FL-DIS/DLR/EXP ONLY SALVAGE TITLE',
    titleFa: 'فلوریدا - سند سالویج مخصوص صادرات/دیلر',
  },
  {
    id: 122,
    titleEn: 'CA - CERT OF TITLE-LEMON LAW BUYBAC',
    titleFa: 'کالیفورنیا - سند ملکیت بازخریدشده طبق قانون لیمون',
  },
].map((item) => ({
  ...item,
  exportable: true,
  urgent: '$0',
  normal: '$0',
  description: EXPORTABLE_DESCRIPTION(item.titleFa),
}));

const nonExportable = [
  {
    id: 1,
    titleEn: 'BILL OF SALE − PARTS ONLY',
    titleFa: 'برگه خرید و فروش - صرف برای پرزه‌جات',
  },
  {
    id: 2,
    titleEn: 'ABANDONMENT DOCUMENTS',
    titleFa: 'اسناد رهاشدگی',
  },
  {
    id: 3,
    titleEn: 'JUNKING, JUNK BILL OF SALE',
    titleFa: 'برگه خرید و فروش اسقاط',
  },
  {
    id: 4,
    titleEn: 'BILL OF SALE − SCRAP',
    titleFa: 'برگه خرید و فروش - اسقاط',
  },
  {
    id: 5,
    titleEn: 'BILL OF SALE − DESTRUCTION',
    titleFa: 'برگه خرید و فروش - تخریب',
  },
  {
    id: 6,
    titleEn: 'WA − BILL OF SALE',
    titleFa: 'واشنگتن - برگه خرید و فروش',
  },
  {
    id: 7,
    titleEn: 'LIEN SALE DOCUMENTS',
    titleFa: 'اسناد فروش دارای حق گرو',
  },
  {
    id: 8,
    titleEn: 'MI − TR−52',
    titleFa: 'میشیگان - TR-52',
  },
  {
    id: 9,
    titleEn: 'NY − MV907A − OPEN LIEN',
    titleFa: 'نیویورک - MV907A با حق گرو باز',
  },
  {
    id: 10,
    titleEn: 'REG 262',
    titleFa: 'فورم ثبت ۲۶۲',
  },
  {
    id: 11,
    titleEn: 'DEALER ONLY/REPO/CANNOT EXPORT',
    titleFa: 'صرف دیلر / بازپس‌گیری / غیرقابل صادرات',
  },
  {
    id: 12,
    titleEn: 'CANADIAN TITLE REGISTRATION PARTS ONLY',
    titleFa: 'ثبت تایتل کانادا - صرف برای پرزه‌جات',
  },
  {
    id: 13,
    titleEn: 'DEALER ONLY − BILL OF SALE',
    titleFa: 'صرف دیلر - برگه خرید و فروش',
  },
  {
    id: 14,
    titleEn: 'MV − 907A − BILL OF SALE',
    titleFa: 'MV-907A - برگه خرید و فروش',
  },
  {
    id: 15,
    titleEn: 'MV − 50 − BILL OF SALE',
    titleFa: 'MV-50 - برگه خرید و فروش',
  },
  {
    id: 16,
    titleEn: 'NY − BILL OF SALE',
    titleFa: 'نیویورک - برگه خرید و فروش',
  },
  {
    id: 17,
    titleEn: 'MT − BILL OF SALE − PARTS ONLY',
    titleFa: 'مونتانا - برگه خرید و فروش صرف برای پرزه‌جات',
  },
  {
    id: 18,
    titleEn: 'MI − SCRAP − BILL OF SALE',
    titleFa: 'میشیگان - برگه خرید و فروش اسقاط',
  },
  {
    id: 19,
    titleEn: 'REGISTRATION DOCUMENT CARD UT',
    titleFa: 'کارت سند ثبت - یوتا',
  },
  {
    id: 20,
    titleEn: 'DEALER ONLY NON−REPAIRABLE',
    titleFa: 'صرف دیلر - غیرقابل ترمیم',
  },
  {
    id: 21,
    titleEn: 'MD − PARTS ONLY − NO TITLE LETTER',
    titleFa: 'مریلند - صرف برای پرزه‌جات - بدون سند',
  },
  {
    id: 22,
    titleEn: 'NY − MV907A− PARTS ONLY W/LIEN HOLDER',
    titleFa: 'نیویورک - MV907A صرف برای پرزه‌جات با دارنده حق گرو',
  },
  {
    id: 23,
    titleEn: 'NY − MV−37 − DISMANTLE OR SCRAP',
    titleFa: 'نیویورک - MV-37 - جداسازی یا اسقاط',
  },
  {
    id: 24,
    titleEn: 'MI − SCRAP − BILL OF SALE',
    titleFa: 'میشیگان - برگه خرید و فروش اسقاط',
  },
  {
    id: 25,
    titleEn: 'DERELICT BOS/PARTS ONLY',
    titleFa: 'برگه خرید و فروش وسیله متروکه - صرف برای پرزه‌جات',
  },
  {
    id: 26,
    titleEn: 'SCRAP DOCUMENT',
    titleFa: 'سند اسقاط',
  },
  {
    id: 27,
    titleEn: 'CERT OF REG−JUNKED VEHICLE',
    titleFa: 'سرتیفیکیت ثبت موتر اسقاط‌شده',
  },
  {
    id: 28,
    titleEn: 'DE − PARTS ONLY',
    titleFa: 'دلاور - صرف برای پرزه‌جات',
  },
  {
    id: 29,
    titleEn: 'CA − SALVAGE ACQUISITION BILL OF SALE',
    titleFa: 'کالیفورنیا - برگه خرید سالویج',
  },
].map((item) => ({
  ...item,
  exportable: false,
  urgentTime: '۱ هفته',
  urgent: '$450',
  normalTime: '۳ تا ۴ هفته',
  normal: '$350',
  description: NON_EXPORTABLE_DESCRIPTION(item.titleFa),
}));

/*
|--------------------------------------------------------------------------
| تایتل‌هایی که اصلاً قابل خروج نیستند
|--------------------------------------------------------------------------
| برای این موارد حتی پرداخت مصرف اضافی نیز باعث قابل صادرات شدن تایتل
| نمی‌شود. به همین دلیل قیمت و زمان پردازش ندارند.
*/

const permanentlyNotExportable = [
  {
    id: 1,
    titleEn: 'LIEN TITLE',
    titleFa: 'تایتل دارای حق گرو',
    description:
      'این تایتل دارای حق گرو می‌باشد. تا زمانی که وضعیت حق گرو به صورت قانونی رفع نشود، این سند قابل خروج نمی‌باشد و پرداخت مصرف اضافی نیز آن را قابل صادرات نمی‌سازد.',
  },
  {
    id: 2,
    titleEn: 'LIEN RELEASE',
    titleFa: 'رفع حق گرو',
    description:
      'این سند مربوط به رفع حق گرو می‌باشد و به عنوان تایتل قابل صادرات استفاده نمی‌شود. پرداخت مصرف اضافی باعث تبدیل این سند به تایتل قابل خروج نمی‌گردد.',
  },
  {
    id: 3,
    titleEn: 'LIEN SATISFIED',
    titleFa: 'تسویه حق گرو',
    description:
      'این سند نشان‌دهنده وضعیت تسویه حق گرو است، اما به تنهایی تایتل قابل صادرات محسوب نمی‌شود. این مورد حتی با پرداخت مصرف اضافی نیز قابل خروج نمی‌باشد.',
  },
].map((item) => ({
  ...item,
  exportable: false,
  permanentlyNotExportable: true,
  noExport: true,
}));

const titlesData = {
  exportable,
  nonExportable,
  permanentlyNotExportable,
};

export default titlesData;
