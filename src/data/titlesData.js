// /*
// |--------------------------------------------------------------------------
// | MTM TITLE DATA
// |--------------------------------------------------------------------------
// | ایالت‌ها عمداً از نام تایتل‌ها حذف شده‌اند.
// | هر نوع تایتل فقط یک‌بار ثبت شده است.
// |--------------------------------------------------------------------------
// */

// const EXPORTABLE_DESCRIPTION = {
//   SALVAGE_CERTIFICATE:
//     'سرتیفیکیت سالویج سندی است که نشان می‌دهد موتر در گذشته خسارت جدی داشته و توسط شرکت بیمه یا مرجع مربوطه در وضعیت سالویج قرار گرفته است. این نوع سند در دیتای MTM در بخش قابل استفاده برای پروسه صادرات قرار گرفته است؛ اما قبل از خرید باید نوع دقیق سند، وضعیت موتر و شرایط صادرات بررسی شود.',

//   SALVAGE_TITLE:
//     'Salvage Title سند ملکیت موتر سالویج است. این سند معمولاً برای موترهایی صادر می‌شود که به دلیل خسارت قابل توجه در وضعیت سالویج قرار گرفته‌اند. قبل از خرید باید میزان خسارت، وضعیت سند و شرایط صادرات بررسی شود.',

//   CERTIFICATE_OF_TITLE:
//     'Certificate of Title سند رسمی ملکیت موتر است و مشخصات مالکیت موتر را نشان می‌دهد. این سند معمولاً از اسناد اصلی موتر محسوب می‌شود. قبل از خرید باید اصل سند، وضعیت آن و قابل انتقال بودن آن بررسی شود.',

//   REBUILDABLE:
//     'Rebuildable یا Salvage Rebuildable به موتر سالویج اشاره دارد که از نظر سند امکان ترمیم و بازسازی آن وجود دارد. وضعیت نهایی موتر و شرایط ثبت یا صادرات باید قبل از خرید بررسی شود.',

//   REBUILT_TITLE:
//     'Rebuilt Title سندی است که برای موتر سالویج پس از بازسازی یا ترمیم صادر شده است. این عنوان نشان می‌دهد موتر قبلاً وضعیت سالویج داشته و بعداً بازسازی شده است. سوابق موتر باید قبل از خرید بررسی شود.',

//   NON_REPAIRABLE:
//     'Non-Repairable Title سندی است که موتر را از نظر مقررات مربوطه غیرقابل ترمیم یا استفاده مجدد برای جاده مشخص می‌کند. این نوع سند محدودیت‌های جدی دارد و شرایط صادرات باید قبل از خرید بررسی شود.',

//   CERTIFICATE_OF_DESTRUCTION:
//     'Certificate of Destruction سندی است که وضعیت تخریب یا از بین رفتن وسیله نقلیه را نشان می‌دهد. این سند با تایتل عادی ملکیت تفاوت دارد و قبل از خرید باید شرایط صادرات و مقصد نهایی موتر بررسی شود.',

//   PARTS_ONLY:
//     'Parts Only به این معنا است که سند یا وسیله برای استفاده به عنوان پرزه‌جات در نظر گرفته شده است. این نوع سند محدودیت بیشتری نسبت به تایتل عادی دارد و باید قبل از خرید شرایط صادرات و مقصد موتر بررسی شود.',

//   DEALER_ONLY_CLEAN:
//     'Dealer Only Clean Title یک تایتل پاک است که در سند یا سیستم مربوطه محدودیت استفاده برای معامله توسط دیلر دارد. پاک بودن تایتل به معنی نبودن محدودیت معامله نیست؛ بنابراین شرایط سند باید قبل از خرید بررسی شود.',

//   CLEAR_TITLE:
//     'Clear Title یا تایتل پاک سندی است که در آن وضعیت سالویج یا خسارت برند مشخص نشده است. این نوع تایتل معمولاً سند عادی ملکیت محسوب می‌شود، اما اصل سند و سابقه موتر باید قبل از خرید بررسی شود.',

//   NON_PUBLIC_CLEAN:
//     'Non-Public Clean Title تایتل پاکی است که در آن محدودیت مربوط به دسترسی عمومی یا نوع ثبت سند وجود دارد. قبل از خرید باید مشخصات سند و امکان استفاده از آن برای صادرات بررسی شود.',

//   CLEAR_ENDORSEMENT:
//     'Clear Title with Endorsement تایتل پاکی است که همراه با یک تأییدیه یا توضیح اضافی در سند ثبت شده است. متن تأییدیه باید بررسی شود تا مشخص شود آیا محدودیت خاصی برای انتقال یا صادرات وجود دارد.',

//   RECONSTRUCTED_TITLE:
//     'Reconstructed Title سندی است که برای موتر بازسازی‌شده صادر شده است. معمولاً نشان‌دهنده این است که موتر قبلاً آسیب دیده و پس از ترمیم دوباره وارد پروسه ثبت شده است.',

//   FLOOD_RECONSTRUCTED:
//     'Flood & Reconstructed Title سندی است که سابقه خسارت ناشی از سیلاب و بازسازی موتر را نشان می‌دهد. قبل از خرید باید هم سابقه خسارت و هم وضعیت فعلی موتر بررسی شود.',

//   REPOSSESSION_TITLE:
//     'Repossession Title مربوط به موترهایی است که به دلیل مسائل مالی یا قراردادی از مالک قبلی بازپس گرفته شده‌اند. این نوع سند با Salvage Title یکسان نیست و وضعیت انتقال آن باید بررسی شود.',

//   MANUFACTURER_BUYBACK:
//     'Manufacturer Buyback نشان می‌دهد موتر در گذشته توسط تولیدکننده از مالک خریداری یا بازخرید شده است. این وضعیت می‌تواند سابقه خاصی در تاریخچه موتر ایجاد کند و باید قبل از خرید بررسی شود.',

//   LEMON_LAW_BUYBACK:
//     'Lemon Law Buyback به موترهایی مربوط می‌شود که تحت قوانین مربوط به مشکلات تکرارشونده یا اساسی توسط تولیدکننده بازخرید شده‌اند. سابقه موتر و دلیل بازخرید باید قبل از خرید بررسی شود.',

//   BONDED_CLEAN_TITLE:
//     'Bonded Clean Title تایتلی است که تحت یک پروسه ضمانتی یا Bond صادر شده است. این نوع سند با Clear Title عادی تفاوت دارد و باید شرایط و محدودیت‌های آن قبل از خرید بررسی شود.',

//   ORIGINAL_TITLE:
//     'Original Title سند اصلی ملکیت موتر است که نشان‌دهنده مالکیت اولیه یا سابقه اصلی ثبت موتر می‌باشد. اصل سند و وضعیت انتقال آن باید قبل از خرید بررسی شود.',

//   TAXI_TITLE:
//     'Taxi Title مربوط به موترهایی است که در گذشته به عنوان تاکسی استفاده شده‌اند. این نوع عنوان به تنهایی نشان‌دهنده خرابی موتر نیست، اما سابقه استفاده تجارتی باید در تصمیم خرید در نظر گرفته شود.',

//   VEHICLE_OWNERSHIP:
//     'Vehicle Certificate of Ownership سند مربوط به ملکیت موتر است و اطلاعات مالکیت وسیله را نشان می‌دهد. اصل سند و وضعیت آن باید قبل از خرید بررسی شود.',

//   TRIBAL_TITLE:
//     'Tribal Title سند ملکیت مرتبط با ثبت قبیله‌ای است. این نوع سند ممکن است با تایتل معمول ایالتی تفاوت داشته باشد؛ بنابراین مشخصات سند و شرایط انتقال یا صادرات باید بررسی شود.',

//   AFFIDAVIT_REPOSSESSION:
//     'Affidavit of Repossession یک اظهارنامه مربوط به بازپس‌گیری موتر است و با تایتل عادی یکسان نیست. قبل از خرید باید بررسی شود که آیا سند نهایی ملکیت نیز موجود است یا خیر.',

//   SALVAGE_ACQUISITION:
//     'Salvage Acquisition سند یا مدرکی مربوط به خرید یا به‌دست‌آوردن موتر سالویج است. باید همراه با اسناد اصلی موتر بررسی شود تا وضعیت واقعی ملکیت و صادرات مشخص شود.',

//   SALVAGE_75_DAMAGE:
//     'این نوع Salvage به موترهایی اشاره دارد که خسارت آن‌ها در سطح بالای تعیین‌شده در سند ثبت شده است. میزان خسارت و وضعیت سند باید قبل از خرید بررسی شود.',
// };

// const NON_EXPORTABLE_DESCRIPTION = {
//   BILL_OF_SALE:
//     'Bill of Sale برگه خرید و فروش است و به تنهایی همانند Certificate of Title سند کامل ملکیت محسوب نمی‌شود. در دیتای MTM این نوع سند برای صادرات عادی مناسب نیست و برای آماده‌سازی اسناد صادراتی نیاز به پروسه اضافی دارد.',

//   PARTS_ONLY_BOS:
//     'Bill of Sale - Parts Only برگه خرید و فروش وسیله‌ای است که برای پرزه‌جات در نظر گرفته شده است. این سند محدودیت بیشتری دارد و در دیتای MTM برای صادرات عادی مناسب نیست.',

//   SCRAP_BOS:
//     'Scrap Bill of Sale مربوط به وسیله‌ای است که برای اسقاط یا ضایعات ثبت شده است. این سند برای صادرات عادی مناسب نیست و نیاز به بررسی و پروسه اضافی دارد.',

//   DESTRUCTION_BOS:
//     'Bill of Sale - Destruction مربوط به وسیله‌ای است که در وضعیت تخریب قرار دارد. این سند برای صادرات عادی مناسب نیست و باید قبل از خرید شرایط آن بررسی شود.',

//   JUNK_DOCUMENT:
//     'Junk Document یا Junk Bill of Sale نشان‌دهنده وضعیت اسقاط موتر است. این نوع سند برای صادرات عادی مناسب نیست و پروسه جداگانه نیاز دارد.',

//   ABANDONMENT:
//     'Abandonment Documents اسناد مربوط به وسیله‌ای است که به عنوان موتر رهاشده ثبت شده است. این سند به عنوان تایتل عادی ملکیت استفاده نمی‌شود و برای صادرات عادی مناسب نیست.',

//   LIEN_SALE:
//     'Lien Sale Documents مربوط به فروش موتر دارای حق گرو است. تا زمانی که وضعیت حق گرو و ملکیت به صورت قانونی مشخص نشود، این سند برای صادرات عادی مناسب نیست.',

//   OPEN_LIEN:
//     'Open Lien نشان می‌دهد که هنوز حق گرو یا ادعای مالی روی موتر باز است. تا زمان حل قانونی این وضعیت، سند برای صادرات عادی مناسب نیست.',

//   DEALER_ONLY_REPO:
//     'این سند دارای محدودیت Dealer Only یا وضعیت بازپس‌گیری است. محدودیت موجود در سند باید قبل از خرید بررسی شود و در دیتای MTM برای صادرات عادی در گروه غیرقابل صادرات قرار گرفته است.',

//   DEALER_ONLY_BOS:
//     'Dealer Only Bill of Sale برگه خرید و فروشی است که برای معامله توسط دیلر محدود شده است. این سند برای صادرات عادی مناسب نیست و نیاز به بررسی و پروسه اضافی دارد.',

//   DEALER_ONLY_NON_REPAIRABLE:
//     'Dealer Only Non-Repairable سندی است که هم محدودیت دیلر و هم وضعیت غیرقابل ترمیم دارد. به دلیل این محدودیت‌ها برای صادرات عادی مناسب نیست.',

//   REGISTRATION_CARD:
//     'Registration Document یا Registration Card مدرک ثبت موتر است و لزوماً جایگزین تایتل اصلی ملکیت نمی‌شود. در صورت نبود سند ملکیت مناسب، برای صادرات عادی قابل استفاده نیست.',

//   MV_907A_BOS:
//     'MV-907A همراه با Bill of Sale یک مدرک مربوط به وضعیت سالویج و انتقال موتر است، اما با تایتل عادی ملکیت یکسان نیست. در این دسته برای صادرات عادی مناسب نیست.',

//   MV_50_BOS:
//     'MV-50 Bill of Sale مدرک مربوط به معامله یا انتقال موتر است و به تنهایی همانند تایتل اصلی ملکیت نیست. برای صادرات عادی نیاز به بررسی و اسناد تکمیلی دارد.',

//   TR_52:
//     'TR-52 یک سند مخصوص وضعیت و انتقال موتر است که با Certificate of Title عادی تفاوت دارد. در دیتای MTM برای صادرات عادی مناسب نیست.',

//   MV_37:
//     'MV-37 مربوط به پروسه جداسازی یا اسقاط وسیله نقلیه است. این نوع سند برای صادرات عادی مناسب نیست.',

//   DERELICT:
//     'Derelict BOS مربوط به وسیله متروکه است و معمولاً محدودیت بیشتری نسبت به تایتل عادی دارد. در دیتای MTM برای صادرات عادی مناسب نیست.',

//   SCRAP_DOCUMENT:
//     'Scrap Document نشان‌دهنده وضعیت اسقاط یا ضایعات وسیله است و برای صادرات عادی مناسب نیست.',

//   JUNKED_VEHICLE:
//     'Certificate of Registration - Junked Vehicle نشان می‌دهد وسیله به عنوان موتر اسقاط‌شده ثبت شده است. این سند برای صادرات عادی مناسب نیست.',

//   CANADIAN_PARTS:
//     'Canadian Title/Registration - Parts Only سندی است که موتر را برای پرزه‌جات مشخص می‌کند. به دلیل محدودیت Parts Only برای صادرات عادی مناسب نیست.',

//   SALVAGE_ACQUISITION_BOS:
//     'Salvage Acquisition Bill of Sale مدرک خرید یا انتقال موتر سالویج است، اما به تنهایی تایتل اصلی ملکیت نیست. در دیتای MTM برای صادرات عادی در گروه غیرقابل صادرات قرار گرفته است.',
// };

// const PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION = {
//   LIEN_TITLE:
//     'این تایتل دارای حق گرو یا ادعای مالی است. تا زمانی که حق گرو به صورت قانونی رفع نشود، سند قابل استفاده برای صادرات نیست. پرداخت مصرف پروسس به تنهایی حق گرو را از بین نمی‌برد.',

//   LIEN_RELEASE:
//     'Lien Release مدرکی برای رفع حق گرو است و خودش تایتل ملکیت محسوب نمی‌شود. این سند به تنهایی قابل استفاده به عنوان تایتل صادراتی نیست.',

//   LIEN_SATISFIED:
//     'Lien Satisfied نشان‌دهنده تسویه حق گرو است، اما خودش تایتل ملکیت محسوب نمی‌شود. برای صادرات باید سند ملکیت مناسب نیز موجود باشد.',
// };


// /*
// |--------------------------------------------------------------------------
// | EXPORTABLE
// |--------------------------------------------------------------------------
// */

// const exportable = [
//   {
//     id: 1,
//     titleEn: 'SALVAGE CERTIFICATE',
//     titleFa: 'سرتیفیکیت سالویج',
//     info: EXPORTABLE_DESCRIPTION.SALVAGE_CERTIFICATE,
//   },
//   {
//     id: 2,
//     titleEn: 'SALVAGE TITLE',
//     titleFa: 'سند سالویج',
//     info: EXPORTABLE_DESCRIPTION.SALVAGE_TITLE,
//   },
//   {
//     id: 3,
//     titleEn: 'CERTIFICATE OF TITLE',
//     titleFa: 'سرتیفیکیت ملکیت',
//     info: EXPORTABLE_DESCRIPTION.CERTIFICATE_OF_TITLE,
//   },
//   {
//     id: 4,
//     titleEn: 'REBUILDABLE / SALVAGE REBUILDABLE',
//     titleFa: 'سالویج قابل ترمیم',
//     info: EXPORTABLE_DESCRIPTION.REBUILDABLE,
//   },
//   {
//     id: 5,
//     titleEn: 'REBUILT TITLE',
//     titleFa: 'تایتل بازسازی‌شده',
//     info: EXPORTABLE_DESCRIPTION.REBUILT_TITLE,
//   },
//   {
//     id: 6,
//     titleEn: 'NON-REPAIRABLE TITLE',
//     titleFa: 'تایتل غیرقابل ترمیم',
//     info: EXPORTABLE_DESCRIPTION.NON_REPAIRABLE,
//   },
//   {
//     id: 7,
//     titleEn: 'CERTIFICATE OF DESTRUCTION',
//     titleFa: 'سرتیفیکیت تخریب',
//     info: EXPORTABLE_DESCRIPTION.CERTIFICATE_OF_DESTRUCTION,
//   },
//   {
//     id: 8,
//     titleEn: 'PARTS ONLY',
//     titleFa: 'صرف برای پرزه‌جات',
//     info: EXPORTABLE_DESCRIPTION.PARTS_ONLY,
//   },
//   {
//     id: 9,
//     titleEn: 'DEALER ONLY CLEAN TITLE',
//     titleFa: 'تایتل پاک صرف برای دیلر',
//     info: EXPORTABLE_DESCRIPTION.DEALER_ONLY_CLEAN,
//   },
//   {
//     id: 10,
//     titleEn: 'CLEAR TITLE',
//     titleFa: 'تایتل پاک',
//     info: EXPORTABLE_DESCRIPTION.CLEAR_TITLE,
//   },
//   {
//     id: 11,
//     titleEn: 'NON-PUBLIC CLEAN TITLE',
//     titleFa: 'تایتل پاک غیرعمومی',
//     info: EXPORTABLE_DESCRIPTION.NON_PUBLIC_CLEAN,
//   },
//   {
//     id: 12,
//     titleEn: 'CLEAR WITH ENDORSEMENT',
//     titleFa: 'تایتل پاک با تأییدیه',
//     info: EXPORTABLE_DESCRIPTION.CLEAR_ENDORSEMENT,
//   },
//   {
//     id: 13,
//     titleEn: 'RECONSTRUCTED TITLE',
//     titleFa: 'تایتل بازسازی‌شده',
//     info: EXPORTABLE_DESCRIPTION.RECONSTRUCTED_TITLE,
//   },
//   {
//     id: 14,
//     titleEn: 'FLOOD & RECONSTRUCTED TITLE',
//     titleFa: 'تایتل سیلاب و بازسازی‌شده',
//     info: EXPORTABLE_DESCRIPTION.FLOOD_RECONSTRUCTED,
//   },
//   {
//     id: 15,
//     titleEn: 'REPOSSESSION TITLE',
//     titleFa: 'تایتل بازپس‌گیری‌شده',
//     info: EXPORTABLE_DESCRIPTION.REPOSSESSION_TITLE,
//   },
//   {
//     id: 16,
//     titleEn: 'MANUFACTURER BUYBACK',
//     titleFa: 'بازخریدشده توسط تولیدکننده',
//     info: EXPORTABLE_DESCRIPTION.MANUFACTURER_BUYBACK,
//   },
//   {
//     id: 17,
//     titleEn: 'LEMON LAW BUYBACK',
//     titleFa: 'بازخریدشده طبق قانون لیمون',
//     info: EXPORTABLE_DESCRIPTION.LEMON_LAW_BUYBACK,
//   },
//   {
//     id: 18,
//     titleEn: 'BONDED CLEAN TITLE',
//     titleFa: 'تایتل پاک تضمینی',
//     info: EXPORTABLE_DESCRIPTION.BONDED_CLEAN_TITLE,
//   },
//   {
//     id: 19,
//     titleEn: 'ORIGINAL TITLE',
//     titleFa: 'سند اصلی',
//     info: EXPORTABLE_DESCRIPTION.ORIGINAL_TITLE,
//   },
//   {
//     id: 20,
//     titleEn: 'TAXI TITLE',
//     titleFa: 'تایتل تاکسی',
//     info: EXPORTABLE_DESCRIPTION.TAXI_TITLE,
//   },
//   {
//     id: 21,
//     titleEn: 'VEHICLE CERTIFICATE OF OWNERSHIP',
//     titleFa: 'سرتیفیکیت ملکیت موتر',
//     info: EXPORTABLE_DESCRIPTION.VEHICLE_OWNERSHIP,
//   },
//   {
//     id: 22,
//     titleEn: 'TRIBAL TITLE',
//     titleFa: 'سند ملکیت قبیله‌ای',
//     info: EXPORTABLE_DESCRIPTION.TRIBAL_TITLE,
//   },
//   {
//     id: 23,
//     titleEn: 'AFFIDAVIT OF REPOSSESSION',
//     titleFa: 'اظهارنامه بازپس‌گیری',
//     info: EXPORTABLE_DESCRIPTION.AFFIDAVIT_REPOSSESSION,
//   },
//   {
//     id: 24,
//     titleEn: 'SALVAGE ACQUISITION',
//     titleFa: 'سند خرید سالویج',
//     info: EXPORTABLE_DESCRIPTION.SALVAGE_ACQUISITION,
//   },
//   {
//     id: 25,
//     titleEn: 'SALVAGE - GREATER THAN 75% DAMAGE',
//     titleFa: 'سالویج با خسارت بیشتر از ۷۵٪',
//     info: EXPORTABLE_DESCRIPTION.SALVAGE_75_DAMAGE,
//   },
// ].map((item) => ({
//   ...item,
//   exportable: true,
//   urgent: '$0',
//   normal: '$0',
//   description: item.info,
// }));


// /*
// |--------------------------------------------------------------------------
// | NON EXPORTABLE
// |--------------------------------------------------------------------------
// */

// const nonExportable = [
//   {
//     id: 1,
//     titleEn: 'BILL OF SALE',
//     titleFa: 'برگه خرید و فروش',
//     info: NON_EXPORTABLE_DESCRIPTION.BILL_OF_SALE,
//   },
//   {
//     id: 2,
//     titleEn: 'PARTS ONLY BILL OF SALE',
//     titleFa: 'برگه خرید و فروش صرف برای پرزه‌جات',
//     info: NON_EXPORTABLE_DESCRIPTION.PARTS_ONLY_BOS,
//   },
//   {
//     id: 3,
//     titleEn: 'SCRAP BILL OF SALE',
//     titleFa: 'برگه خرید و فروش اسقاط',
//     info: NON_EXPORTABLE_DESCRIPTION.SCRAP_BOS,
//   },
//   {
//     id: 4,
//     titleEn: 'DESTRUCTION BILL OF SALE',
//     titleFa: 'برگه خرید و فروش تخریب',
//     info: NON_EXPORTABLE_DESCRIPTION.DESTRUCTION_BOS,
//   },
//   {
//     id: 5,
//     titleEn: 'JUNK / JUNKING DOCUMENT',
//     titleFa: 'سند اسقاط',
//     info: NON_EXPORTABLE_DESCRIPTION.JUNK_DOCUMENT,
//   },
//   {
//     id: 6,
//     titleEn: 'ABANDONMENT DOCUMENT',
//     titleFa: 'سند رهاشدگی',
//     info: NON_EXPORTABLE_DESCRIPTION.ABANDONMENT,
//   },
//   {
//     id: 7,
//     titleEn: 'LIEN SALE DOCUMENT',
//     titleFa: 'سند فروش دارای حق گرو',
//     info: NON_EXPORTABLE_DESCRIPTION.LIEN_SALE,
//   },
//   {
//     id: 8,
//     titleEn: 'OPEN LIEN',
//     titleFa: 'حق گرو باز',
//     info: NON_EXPORTABLE_DESCRIPTION.OPEN_LIEN,
//   },
//   {
//     id: 9,
//     titleEn: 'DEALER ONLY / REPOSSESSION',
//     titleFa: 'صرف دیلر / بازپس‌گیری',
//     info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_REPO,
//   },
//   {
//     id: 10,
//     titleEn: 'DEALER ONLY BILL OF SALE',
//     titleFa: 'برگه خرید و فروش صرف دیلر',
//     info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_BOS,
//   },
//   {
//     id: 11,
//     titleEn: 'DEALER ONLY NON-REPAIRABLE',
//     titleFa: 'صرف دیلر - غیرقابل ترمیم',
//     info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_NON_REPAIRABLE,
//   },
//   {
//     id: 12,
//     titleEn: 'REGISTRATION DOCUMENT / CARD',
//     titleFa: 'سند یا کارت ثبت',
//     info: NON_EXPORTABLE_DESCRIPTION.REGISTRATION_CARD,
//   },
//   {
//     id: 13,
//     titleEn: 'MV-907A BILL OF SALE',
//     titleFa: 'MV-907A - برگه خرید و فروش',
//     info: NON_EXPORTABLE_DESCRIPTION.MV_907A_BOS,
//   },
//   {
//     id: 14,
//     titleEn: 'MV-50 BILL OF SALE',
//     titleFa: 'MV-50 - برگه خرید و فروش',
//     info: NON_EXPORTABLE_DESCRIPTION.MV_50_BOS,
//   },
//   {
//     id: 15,
//     titleEn: 'TR-52',
//     titleFa: 'TR-52',
//     info: NON_EXPORTABLE_DESCRIPTION.TR_52,
//   },
//   {
//     id: 16,
//     titleEn: 'MV-37',
//     titleFa: 'MV-37 - جداسازی یا اسقاط',
//     info: NON_EXPORTABLE_DESCRIPTION.MV_37,
//   },
//   {
//     id: 17,
//     titleEn: 'DERELICT BILL OF SALE',
//     titleFa: 'برگه خرید و فروش وسیله متروکه',
//     info: NON_EXPORTABLE_DESCRIPTION.DERELICT,
//   },
//   {
//     id: 18,
//     titleEn: 'SCRAP DOCUMENT',
//     titleFa: 'سند اسقاط',
//     info: NON_EXPORTABLE_DESCRIPTION.SCRAP_DOCUMENT,
//   },
//   {
//     id: 19,
//     titleEn: 'JUNKED VEHICLE REGISTRATION',
//     titleFa: 'سرتیفیکیت ثبت موتر اسقاط‌شده',
//     info: NON_EXPORTABLE_DESCRIPTION.JUNKED_VEHICLE,
//   },
//   {
//     id: 20,
//     titleEn: 'CANADIAN PARTS ONLY',
//     titleFa: 'سند کانادایی صرف برای پرزه‌جات',
//     info: NON_EXPORTABLE_DESCRIPTION.CANADIAN_PARTS,
//   },
//   {
//     id: 21,
//     titleEn: 'SALVAGE ACQUISITION BILL OF SALE',
//     titleFa: 'برگه خرید سالویج',
//     info: NON_EXPORTABLE_DESCRIPTION.SALVAGE_ACQUISITION_BOS,
//   },
// ].map((item) => ({
//   ...item,
//   exportable: false,

//   /*
//    * این هزینه‌ها مربوط به پروسه MTM هستند
//    * و به عنوان فیس دولتی در نظر گرفته نشوند.
//    */
//   urgentTime: '۱ هفته',
//   urgent: '$450',

//   normalTime: '۳ تا ۴ هفته',
//   normal: '$350',

//   description: item.info,
// }));


// /*
// |--------------------------------------------------------------------------
// | PERMANENTLY NOT EXPORTABLE
// |--------------------------------------------------------------------------
// | این موارد حتی با پرداخت مصرف اضافی نیز در این دسته قابل صادرات نیستند.
// |--------------------------------------------------------------------------
// */

// const permanentlyNotExportable = [
//   {
//     id: 1,
//     titleEn: 'LIEN TITLE',
//     titleFa: 'تایتل دارای حق گرو',
//     description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_TITLE,
//   },
//   {
//     id: 2,
//     titleEn: 'LIEN RELEASE',
//     titleFa: 'رفع حق گرو',
//     description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_RELEASE,
//   },
//   {
//     id: 3,
//     titleEn: 'LIEN SATISFIED',
//     titleFa: 'تسویه حق گرو',
//     description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_SATISFIED,
//   },
// ].map((item) => ({
//   ...item,
//   exportable: false,
//   permanentlyNotExportable: true,
//   noExport: true,
// }));


// /*
// |--------------------------------------------------------------------------
// | FINAL DATA
// |--------------------------------------------------------------------------
// */

// const titlesData = {
//   exportable,
//   nonExportable,
//   permanentlyNotExportable,
// };

// export default titlesData;








/*
|--------------------------------------------------------------------------
| MTM TITLE DATA
|--------------------------------------------------------------------------
| ایالت‌ها عمداً از نام تایتل‌ها حذف شده‌اند.
| هر نوع تایتل فقط یک‌بار ثبت شده است.
|--------------------------------------------------------------------------
*/

const EXPORTABLE_DESCRIPTION = {
  SALVAGE_CERTIFICATE:
    'سرتیفیکیت سالویج سندی است که نشان می‌دهد موتر در گذشته خسارت جدی داشته و توسط شرکت بیمه یا مرجع مربوطه در وضعیت سالویج قرار گرفته است. این نوع سند در دیتای MTM در بخش قابل استفاده برای پروسه صادرات قرار گرفته است؛ اما قبل از خرید باید نوع دقیق سند، وضعیت موتر و شرایط صادرات بررسی شود.',

  SALVAGE_TITLE:
    'Salvage Title سند ملکیت موتر سالویج است. این سند معمولاً برای موترهایی صادر می‌شود که به دلیل خسارت قابل توجه در وضعیت سالویج قرار گرفته‌اند. قبل از خرید باید میزان خسارت، وضعیت سند و شرایط صادرات بررسی شود.',

  CERTIFICATE_OF_TITLE:
    'Certificate of Title سند رسمی ملکیت موتر است و مشخصات مالکیت موتر را نشان می‌دهد. این سند معمولاً از اسناد اصلی موتر محسوب می‌شود. قبل از خرید باید اصل سند، وضعیت آن و قابل انتقال بودن آن بررسی شود.',

  REBUILDABLE:
    'Rebuildable یا Salvage Rebuildable به موتر سالویج اشاره دارد که از نظر سند امکان ترمیم و بازسازی آن وجود دارد. وضعیت نهایی موتر و شرایط ثبت یا صادرات باید قبل از خرید بررسی شود.',

  REBUILT_TITLE:
    'Rebuilt Title سندی است که برای موتر سالویج پس از بازسازی یا ترمیم صادر شده است. این عنوان نشان می‌دهد موتر قبلاً وضعیت سالویج داشته و بعداً بازسازی شده است. سوابق موتر باید قبل از خرید بررسی شود.',

  NON_REPAIRABLE:
    'Non-Repairable Title سندی است که موتر را از نظر مقررات مربوطه غیرقابل ترمیم یا استفاده مجدد برای جاده مشخص می‌کند. این نوع سند محدودیت‌های جدی دارد و شرایط صادرات باید قبل از خرید بررسی شود.',

  CERTIFICATE_OF_DESTRUCTION:
    'Certificate of Destruction سندی است که وضعیت تخریب یا از بین رفتن وسیله نقلیه را نشان می‌دهد. این سند با تایتل عادی ملکیت تفاوت دارد و قبل از خرید باید شرایط صادرات و مقصد نهایی موتر بررسی شود.',

  PARTS_ONLY:
    'Parts Only به این معنا است که سند یا وسیله برای استفاده به عنوان پرزه‌جات در نظر گرفته شده است. این نوع سند محدودیت بیشتری نسبت به تایتل عادی دارد و باید قبل از خرید شرایط صادرات و مقصد موتر بررسی شود.',

  DEALER_ONLY_CLEAN:
    'Dealer Only Clean Title یک تایتل پاک است که در سند یا سیستم مربوطه محدودیت استفاده برای معامله توسط دیلر دارد. پاک بودن تایتل به معنی نبودن محدودیت معامله نیست؛ بنابراین شرایط سند باید قبل از خرید بررسی شود.',

  CLEAR_TITLE:
    'Clear Title یا تایتل پاک سندی است که در آن وضعیت سالویج یا خسارت برند مشخص نشده است. این نوع تایتل معمولاً سند عادی ملکیت محسوب می‌شود، اما اصل سند و سابقه موتر باید قبل از خرید بررسی شود.',

  NON_PUBLIC_CLEAN:
    'Non-Public Clean Title تایتل پاکی است که در آن محدودیت مربوط به دسترسی عمومی یا نوع ثبت سند وجود دارد. قبل از خرید باید مشخصات سند و امکان استفاده از آن برای صادرات بررسی شود.',

  CLEAR_ENDORSEMENT:
    'Clear Title with Endorsement تایتل پاکی است که همراه با یک تأییدیه یا توضیح اضافی در سند ثبت شده است. متن تأییدیه باید بررسی شود تا مشخص شود آیا محدودیت خاصی برای انتقال یا صادرات وجود دارد.',

  RECONSTRUCTED_TITLE:
    'Reconstructed Title سندی است که برای موتر بازسازی‌شده صادر شده است. معمولاً نشان‌دهنده این است که موتر قبلاً آسیب دیده و پس از ترمیم دوباره وارد پروسه ثبت شده است.',

  FLOOD_RECONSTRUCTED:
    'Flood & Reconstructed Title سندی است که سابقه خسارت ناشی از سیلاب و بازسازی موتر را نشان می‌دهد. قبل از خرید باید هم سابقه خسارت و هم وضعیت فعلی موتر بررسی شود.',

  REPOSSESSION_TITLE:
    'Repossession Title مربوط به موترهایی است که به دلیل مسائل مالی یا قراردادی از مالک قبلی بازپس گرفته شده‌اند. این نوع سند با Salvage Title یکسان نیست و وضعیت انتقال آن باید بررسی شود.',

  MANUFACTURER_BUYBACK:
    'Manufacturer Buyback نشان می‌دهد موتر در گذشته توسط تولیدکننده از مالک خریداری یا بازخرید شده است. این وضعیت می‌تواند سابقه خاصی در تاریخچه موتر ایجاد کند و باید قبل از خرید بررسی شود.',

  LEMON_LAW_BUYBACK:
    'Lemon Law Buyback به موترهایی مربوط می‌شود که تحت قوانین مربوط به مشکلات تکرارشونده یا اساسی توسط تولیدکننده بازخرید شده‌اند. سابقه موتر و دلیل بازخرید باید قبل از خرید بررسی شود.',

  BONDED_CLEAN_TITLE:
    'Bonded Clean Title تایتلی است که تحت یک پروسه ضمانتی یا Bond صادر شده است. این نوع سند با Clear Title عادی تفاوت دارد و باید شرایط و محدودیت‌های آن قبل از خرید بررسی شود.',

  ORIGINAL_TITLE:
    'Original Title سند اصلی ملکیت موتر است که نشان‌دهنده مالکیت اولیه یا سابقه اصلی ثبت موتر می‌باشد. اصل سند و وضعیت انتقال آن باید قبل از خرید بررسی شود.',

  TAXI_TITLE:
    'Taxi Title مربوط به موترهایی است که در گذشته به عنوان تاکسی استفاده شده‌اند. این نوع عنوان به تنهایی نشان‌دهنده خرابی موتر نیست، اما سابقه استفاده تجارتی باید در تصمیم خرید در نظر گرفته شود.',

  VEHICLE_OWNERSHIP:
    'Vehicle Certificate of Ownership سند مربوط به ملکیت موتر است و اطلاعات مالکیت وسیله را نشان می‌دهد. اصل سند و وضعیت آن باید قبل از خرید بررسی شود.',

  TRIBAL_TITLE:
    'Tribal Title سند ملکیت مرتبط با ثبت قبیله‌ای است. این نوع سند ممکن است با تایتل معمول ایالتی تفاوت داشته باشد؛ بنابراین مشخصات سند و شرایط انتقال یا صادرات باید بررسی شود.',

  AFFIDAVIT_REPOSSESSION:
    'Affidavit of Repossession یک اظهارنامه مربوط به بازپس‌گیری موتر است و با تایتل عادی یکسان نیست. قبل از خرید باید بررسی شود که آیا سند نهایی ملکیت نیز موجود است یا خیر.',

  SALVAGE_ACQUISITION:
    'Salvage Acquisition سند یا مدرکی مربوط به خرید یا به‌دست‌آوردن موتر سالویج است. باید همراه با اسناد اصلی موتر بررسی شود تا وضعیت واقعی ملکیت و صادرات مشخص شود.',

  SALVAGE_75_DAMAGE:
    'این نوع Salvage به موترهایی اشاره دارد که خسارت آن‌ها در سطح بالای تعیین‌شده در سند ثبت شده است. میزان خسارت و وضعیت سند باید قبل از خرید بررسی شود.',
};

const NON_EXPORTABLE_DESCRIPTION = {
  BILL_OF_SALE:
    'Bill of Sale سند خرید و فروش است و به تنهایی همانند Certificate of Title سند کامل ملکیت محسوب نمی‌شود. در دیتای MTM این نوع سند برای صادرات عادی مناسب نیست و برای آماده‌سازی اسناد صادراتی نیاز به پروسه اضافی دارد.',

  PARTS_ONLY_BOS:
    'Bill of Sale - Parts Only سند خرید و فروش وسیله‌ای است که برای پرزه‌جات در نظر گرفته شده است. این سند محدودیت بیشتری دارد و در دیتای MTM برای صادرات عادی مناسب نیست.',

  SCRAP_BOS:
    'Scrap Bill of Sale مربوط به وسیله‌ای است که برای اسقاط یا ضایعات ثبت شده است. این سند برای صادرات عادی مناسب نیست و نیاز به بررسی و پروسه اضافی دارد.',

  DESTRUCTION_BOS:
    'Bill of Sale - Destruction مربوط به وسیله‌ای است که در وضعیت تخریب قرار دارد. این سند برای صادرات عادی مناسب نیست و باید قبل از خرید شرایط آن بررسی شود.',

  JUNK_DOCUMENT:
    'Junk Document یا Junk Bill of Sale نشان‌دهنده وضعیت اسقاط موتر است. این نوع سند برای صادرات عادی مناسب نیست و پروسه جداگانه نیاز دارد.',

  ABANDONMENT:
    'Abandonment Documents اسناد مربوط به وسیله‌ای است که به عنوان موتر رهاشده ثبت شده است. این سند به عنوان تایتل عادی ملکیت استفاده نمی‌شود و برای صادرات عادی مناسب نیست.',

  LIEN_SALE:
    'Lien Sale Documents مربوط به فروش موتر دارای حق گرو است. تا زمانی که وضعیت حق گرو و ملکیت به صورت قانونی مشخص نشود، این سند برای صادرات عادی مناسب نیست.',

  OPEN_LIEN:
    'Open Lien نشان می‌دهد که هنوز حق گرو یا ادعای مالی روی موتر باز است. تا زمان حل قانونی این وضعیت، سند برای صادرات عادی مناسب نیست.',

  DEALER_ONLY_REPO:
    'این سند دارای محدودیت Dealer Only یا وضعیت بازپس‌گیری است. محدودیت موجود در سند باید قبل از خرید بررسی شود و در دیتای MTM برای صادرات عادی در گروه غیرقابل صادرات قرار گرفته است.',

  DEALER_ONLY_BOS:
    'Dealer Only Bill of Sale سند خرید و فروشی است که برای معامله توسط دیلر محدود شده است. این سند برای صادرات عادی مناسب نیست و نیاز به بررسی و پروسه اضافی دارد.',

  DEALER_ONLY_NON_REPAIRABLE:
    'Dealer Only Non-Repairable سندی است که هم محدودیت دیلر و هم وضعیت غیرقابل ترمیم دارد. به دلیل این محدودیت‌ها برای صادرات عادی مناسب نیست.',

  REGISTRATION_CARD:
    'Registration Document یا Registration Card مدرک ثبت موتر است و لزوماً جایگزین تایتل اصلی ملکیت نمی‌شود. در صورت نبود سند ملکیت مناسب، برای صادرات عادی قابل استفاده نیست.',

  MV_907A_BOS:
    'MV-907A همراه با Bill of Sale یک مدرک مربوط به وضعیت سالویج و انتقال موتر است، اما با تایتل عادی ملکیت یکسان نیست. در این دسته برای صادرات عادی مناسب نیست.',

  MV_50_BOS:
    'MV-50 Bill of Sale مدرک مربوط به معامله یا انتقال موتر است و به تنهایی همانند تایتل اصلی ملکیت نیست. برای صادرات عادی نیاز به بررسی و اسناد تکمیلی دارد.',

  TR_52:
    'TR-52 یک سند مخصوص وضعیت و انتقال موتر است که با Certificate of Title عادی تفاوت دارد. در دیتای MTM برای صادرات عادی مناسب نیست.',

  MV_37:
    'MV-37 مربوط به پروسه جداسازی یا اسقاط وسیله نقلیه است. این نوع سند برای صادرات عادی مناسب نیست.',

  DERELICT:
    'Derelict BOS مربوط به وسیله متروکه است و معمولاً محدودیت بیشتری نسبت به تایتل عادی دارد. در دیتای MTM برای صادرات عادی مناسب نیست.',

  SCRAP_DOCUMENT:
    'Scrap Document نشان‌دهنده وضعیت اسقاط یا ضایعات وسیله است و برای صادرات عادی مناسب نیست.',

  JUNKED_VEHICLE:
    'Certificate of Registration - Junked Vehicle نشان می‌دهد وسیله به عنوان موتر اسقاط‌شده ثبت شده است. این سند برای صادرات عادی مناسب نیست.',

  CANADIAN_PARTS:
    'Canadian Title/Registration - Parts Only سندی است که موتر را برای پرزه‌جات مشخص می‌کند. به دلیل محدودیت Parts Only برای صادرات عادی مناسب نیست.',

  SALVAGE_ACQUISITION_BOS:
    'Salvage Acquisition Bill of Sale مدرک خرید یا انتقال موتر سالویج است، اما به تنهایی تایتل اصلی ملکیت نیست. در دیتای MTM برای صادرات عادی در گروه غیرقابل صادرات قرار گرفته است.',
};

const PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION = {
  LIEN_TITLE:
    'این تایتل دارای حق گرو یا ادعای مالی است. تا زمانی که حق گرو به صورت قانونی رفع نشود، سند قابل استفاده برای صادرات نیست. پرداخت مصرف پروسس به تنهایی حق گرو را از بین نمی‌برد.',

  LIEN_RELEASE:
    'Lien Release مدرکی برای رفع حق گرو است و خودش تایتل ملکیت محسوب نمی‌شود. این سند به تنهایی قابل استفاده به عنوان تایتل صادراتی نیست.',

  LIEN_SATISFIED:
    'Lien Satisfied نشان‌دهنده تسویه حق گرو است، اما خودش تایتل ملکیت محسوب نمی‌شود. برای صادرات باید سند ملکیت مناسب نیز موجود باشد.',
};


/*
|--------------------------------------------------------------------------
| EXPORTABLE
|--------------------------------------------------------------------------
*/

const exportable = [
  {
    id: 1,
    titleEn: 'SALVAGE CERTIFICATE',
    titleFa: 'سرتیفیکیت سالویج',
    info: EXPORTABLE_DESCRIPTION.SALVAGE_CERTIFICATE,
  },
  {
    id: 2,
    titleEn: 'SALVAGE TITLE',
    titleFa: 'سند سالویج',
    info: EXPORTABLE_DESCRIPTION.SALVAGE_TITLE,
  },
  {
    id: 3,
    titleEn: 'CERTIFICATE OF TITLE',
    titleFa: 'سرتیفیکیت ملکیت',
    info: EXPORTABLE_DESCRIPTION.CERTIFICATE_OF_TITLE,
  },
  {
    id: 4,
    titleEn: 'REBUILDABLE / SALVAGE REBUILDABLE',
    titleFa: 'سالویج قابل ترمیم',
    info: EXPORTABLE_DESCRIPTION.REBUILDABLE,
  },
  {
    id: 5,
    titleEn: 'REBUILT TITLE',
    titleFa: 'تایتل بازسازی‌شده',
    info: EXPORTABLE_DESCRIPTION.REBUILT_TITLE,
  },
  {
    id: 6,
    titleEn: 'NON-REPAIRABLE TITLE',
    titleFa: 'تایتل غیرقابل ترمیم',
    info: EXPORTABLE_DESCRIPTION.NON_REPAIRABLE,
  },
  {
    id: 7,
    titleEn: 'CERTIFICATE OF DESTRUCTION',
    titleFa: 'سرتیفیکیت تخریب',
    info: EXPORTABLE_DESCRIPTION.CERTIFICATE_OF_DESTRUCTION,
  },
  {
    id: 8,
    titleEn: 'PARTS ONLY',
    titleFa: 'صرف برای پرزه‌جات',
    info: EXPORTABLE_DESCRIPTION.PARTS_ONLY,
  },
  {
    id: 9,
    titleEn: 'DEALER ONLY CLEAN TITLE',
    titleFa: 'تایتل پاک صرف برای دیلر',
    info: EXPORTABLE_DESCRIPTION.DEALER_ONLY_CLEAN,
  },
  {
    id: 10,
    titleEn: 'CLEAR TITLE',
    titleFa: 'تایتل پاک',
    info: EXPORTABLE_DESCRIPTION.CLEAR_TITLE,
  },
  {
    id: 11,
    titleEn: 'NON-PUBLIC CLEAN TITLE',
    titleFa: 'تایتل پاک غیرعمومی',
    info: EXPORTABLE_DESCRIPTION.NON_PUBLIC_CLEAN,
  },
  {
    id: 12,
    titleEn: 'CLEAR WITH ENDORSEMENT',
    titleFa: 'تایتل پاک با تأییدیه',
    info: EXPORTABLE_DESCRIPTION.CLEAR_ENDORSEMENT,
  },
  {
    id: 13,
    titleEn: 'RECONSTRUCTED TITLE',
    titleFa: 'تایتل بازسازی‌شده',
    info: EXPORTABLE_DESCRIPTION.RECONSTRUCTED_TITLE,
  },
  {
    id: 14,
    titleEn: 'FLOOD & RECONSTRUCTED TITLE',
    titleFa: 'تایتل سیلاب و بازسازی‌شده',
    info: EXPORTABLE_DESCRIPTION.FLOOD_RECONSTRUCTED,
  },
  {
    id: 15,
    titleEn: 'REPOSSESSION TITLE',
    titleFa: 'تایتل بازپس‌گیری‌شده',
    info: EXPORTABLE_DESCRIPTION.REPOSSESSION_TITLE,
  },
  {
    id: 16,
    titleEn: 'MANUFACTURER BUYBACK',
    titleFa: 'بازخریدشده توسط تولیدکننده',
    info: EXPORTABLE_DESCRIPTION.MANUFACTURER_BUYBACK,
  },
  {
    id: 17,
    titleEn: 'LEMON LAW BUYBACK',
    titleFa: 'بازخریدشده طبق قانون لیمون',
    info: EXPORTABLE_DESCRIPTION.LEMON_LAW_BUYBACK,
  },
  {
    id: 18,
    titleEn: 'BONDED CLEAN TITLE',
    titleFa: 'تایتل پاک تضمینی',
    info: EXPORTABLE_DESCRIPTION.BONDED_CLEAN_TITLE,
  },
  {
    id: 19,
    titleEn: 'ORIGINAL TITLE',
    titleFa: 'سند اصلی',
    info: EXPORTABLE_DESCRIPTION.ORIGINAL_TITLE,
  },
  {
    id: 20,
    titleEn: 'TAXI TITLE',
    titleFa: 'تایتل تاکسی',
    info: EXPORTABLE_DESCRIPTION.TAXI_TITLE,
  },
  {
    id: 21,
    titleEn: 'VEHICLE CERTIFICATE OF OWNERSHIP',
    titleFa: 'سرتیفیکیت ملکیت موتر',
    info: EXPORTABLE_DESCRIPTION.VEHICLE_OWNERSHIP,
  },
  {
    id: 22,
    titleEn: 'TRIBAL TITLE',
    titleFa: 'سند ملکیت قبیله‌ای',
    info: EXPORTABLE_DESCRIPTION.TRIBAL_TITLE,
  },
  {
    id: 23,
    titleEn: 'AFFIDAVIT OF REPOSSESSION',
    titleFa: 'اظهارنامه بازپس‌گیری',
    info: EXPORTABLE_DESCRIPTION.AFFIDAVIT_REPOSSESSION,
  },
  {
    id: 24,
    titleEn: 'SALVAGE ACQUISITION',
    titleFa: 'سند خرید سالویج',
    info: EXPORTABLE_DESCRIPTION.SALVAGE_ACQUISITION,
  },
  {
    id: 25,
    titleEn: 'SALVAGE - GREATER THAN 75% DAMAGE',
    titleFa: 'سالویج با خسارت بیشتر از ۷۵٪',
    info: EXPORTABLE_DESCRIPTION.SALVAGE_75_DAMAGE,
  },
].map((item) => ({
  ...item,
  exportable: true,
  urgent: '$0',
  normal: '$0',
  description: item.info,
}));


/*
|--------------------------------------------------------------------------
| NON EXPORTABLE
|--------------------------------------------------------------------------
*/

const nonExportable = [
  {
    id: 1,
    titleEn: 'BILL OF SALE',
    titleFa: 'سند خرید و فروش',
    info: NON_EXPORTABLE_DESCRIPTION.BILL_OF_SALE,
  },
  {
    id: 2,
    titleEn: 'PARTS ONLY BILL OF SALE',
    titleFa: 'سند خرید و فروش صرف برای پرزه‌جات',
    info: NON_EXPORTABLE_DESCRIPTION.PARTS_ONLY_BOS,
  },
  {
    id: 3,
    titleEn: 'SCRAP BILL OF SALE',
    titleFa: 'سند خرید و فروش اسقاط',
    info: NON_EXPORTABLE_DESCRIPTION.SCRAP_BOS,
  },
  {
    id: 4,
    titleEn: 'DESTRUCTION BILL OF SALE',
    titleFa: 'سند خرید و فروش تخریب',
    info: NON_EXPORTABLE_DESCRIPTION.DESTRUCTION_BOS,
  },
  {
    id: 5,
    titleEn: 'JUNK / JUNKING DOCUMENT',
    titleFa: 'سند اسقاط',
    info: NON_EXPORTABLE_DESCRIPTION.JUNK_DOCUMENT,
  },
  {
    id: 6,
    titleEn: 'ABANDONMENT DOCUMENT',
    titleFa: 'سند رهاشدگی',
    info: NON_EXPORTABLE_DESCRIPTION.ABANDONMENT,
  },
  {
    id: 7,
    titleEn: 'LIEN SALE DOCUMENT',
    titleFa: 'سند فروش دارای حق گرو',
    info: NON_EXPORTABLE_DESCRIPTION.LIEN_SALE,
  },
  {
    id: 8,
    titleEn: 'OPEN LIEN',
    titleFa: 'حق گرو باز',
    info: NON_EXPORTABLE_DESCRIPTION.OPEN_LIEN,
  },
  {
    id: 9,
    titleEn: 'DEALER ONLY / REPOSSESSION',
    titleFa: 'صرف دیلر / بازپس‌گیری',
    info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_REPO,
  },
  {
    id: 10,
    titleEn: 'DEALER ONLY BILL OF SALE',
    titleFa: 'سند خرید و فروش صرف دیلر',
    info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_BOS,
  },
  {
    id: 11,
    titleEn: 'DEALER ONLY NON-REPAIRABLE',
    titleFa: 'صرف دیلر - غیرقابل ترمیم',
    info: NON_EXPORTABLE_DESCRIPTION.DEALER_ONLY_NON_REPAIRABLE,
  },
  {
    id: 12,
    titleEn: 'REGISTRATION DOCUMENT / CARD',
    titleFa: 'سند یا کارت ثبت',
    info: NON_EXPORTABLE_DESCRIPTION.REGISTRATION_CARD,
  },
  {
    id: 13,
    titleEn: 'MV-907A BILL OF SALE',
    titleFa: 'MV-907A - سند خرید و فروش',
    info: NON_EXPORTABLE_DESCRIPTION.MV_907A_BOS,
  },
  {
    id: 14,
    titleEn: 'MV-50 BILL OF SALE',
    titleFa: 'MV-50 - سند خرید و فروش',
    info: NON_EXPORTABLE_DESCRIPTION.MV_50_BOS,
  },
  {
    id: 15,
    titleEn: 'TR-52',
    titleFa: 'TR-52',
    info: NON_EXPORTABLE_DESCRIPTION.TR_52,
  },
  {
    id: 16,
    titleEn: 'MV-37',
    titleFa: 'MV-37 - جداسازی یا اسقاط',
    info: NON_EXPORTABLE_DESCRIPTION.MV_37,
  },
  {
    id: 17,
    titleEn: 'DERELICT BILL OF SALE',
    titleFa: 'سند خرید و فروش وسیله متروکه',
    info: NON_EXPORTABLE_DESCRIPTION.DERELICT,
  },
  {
    id: 18,
    titleEn: 'SCRAP DOCUMENT',
    titleFa: 'سند اسقاط',
    info: NON_EXPORTABLE_DESCRIPTION.SCRAP_DOCUMENT,
  },
  {
    id: 19,
    titleEn: 'JUNKED VEHICLE REGISTRATION',
    titleFa: 'سرتیفیکیت ثبت موتر اسقاط‌شده',
    info: NON_EXPORTABLE_DESCRIPTION.JUNKED_VEHICLE,
  },
  {
    id: 20,
    titleEn: 'CANADIAN PARTS ONLY',
    titleFa: 'سند کانادایی صرف برای پرزه‌جات',
    info: NON_EXPORTABLE_DESCRIPTION.CANADIAN_PARTS,
  },
  {
    id: 21,
    titleEn: 'SALVAGE ACQUISITION BILL OF SALE',
    titleFa: 'سند خرید سالویج',
    info: NON_EXPORTABLE_DESCRIPTION.SALVAGE_ACQUISITION_BOS,
  },
].map((item) => ({
  ...item,
  exportable: false,

  /*
   * این هزینه‌ها مربوط به پروسه MTM هستند
   * و به عنوان فیس دولتی در نظر گرفته نشوند.
   */
  urgentTime: '۱ هفته',
  urgent: '$450',

  normalTime: '۳ تا ۴ هفته',
  normal: '$350',

  description: item.info,
}));


/*
|--------------------------------------------------------------------------
| PERMANENTLY NOT EXPORTABLE
|--------------------------------------------------------------------------
| این موارد حتی با پرداخت مصرف اضافی نیز در این دسته قابل صادرات نیستند.
|--------------------------------------------------------------------------
*/

const permanentlyNotExportable = [
  {
    id: 1,
    titleEn: 'LIEN TITLE',
    titleFa: 'تایتل دارای حق گرو',
    description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_TITLE,
  },
  {
    id: 2,
    titleEn: 'LIEN RELEASE',
    titleFa: 'رفع حق گرو',
    description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_RELEASE,
  },
  {
    id: 3,
    titleEn: 'LIEN SATISFIED',
    titleFa: 'تسویه حق گرو',
    description: PERMANENTLY_NOT_EXPORTABLE_DESCRIPTION.LIEN_SATISFIED,
  },
].map((item) => ({
  ...item,
  exportable: false,
  permanentlyNotExportable: true,
  noExport: true,
}));


/*
|--------------------------------------------------------------------------
| FINAL DATA
|--------------------------------------------------------------------------
*/

const titlesData = {
  exportable,
  nonExportable,
  permanentlyNotExportable,
};

export default titlesData;