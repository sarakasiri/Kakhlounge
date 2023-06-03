const items = [
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "پپرونی تک نفره",
        price: "۱۹۰",
        material: "پپرونی / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "چیکن باربیکیو تک نفره",
        price: "۱۹۹",
        material: "سینه مرغ طمع دار / فلفل دلمه ای رنگی /قارچ / پیاز قرمز / زیتون / سس کچاپ / سس سیر"

    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "کواترو تک نفره",
        price: "۲۳۰",
        material: "سینه مرغ طمع دار / پپرونی / گوشت گوساله اسلایس / گوجه گیلاسی / بروکلی / قارچ / فلفل دلمه ای رنگی / زیتون / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "استافد کراست تک نفره",
        price: "۲۳۵",
        material: "ژامبون گوشت و مرغ / فلفل دلمه ای رنگی / زیتون / قارچ / ذرت / بیکن / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "بریدیت تک نفره",
        price: "۲۶۶",
        material: "گوشت اسلایس گوساله / فلفل دلمه ای رنگی / زیتون / قارچ / دیپ سیر و خامه / فلفل هالوپینو / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "پپرونی دو نفره",
        price: "۲۷۵",
        material: "پپرونی / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "چیکن باربیکیو دو نفره",
        price: "۲۹۹",
        material: "سینه مرغ طمع دار / فلفل دلمه ای رنگی /قارچ / پیاز قرمز / زیتون / سس کچاپ / سس سیر"

    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "پیتزا کاخ لانژ",
        price: "۳۴۵",
        material: "خمیر ایتالیایی / سینه مرغ طمع دار / گوشت گوساله طمع دار / بیکن گوشت / قارچ / دیپ سیر و خامه / فلفل دلمه ای / زیتون / سس سیر / سس کچاپ"

    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "کواترو دو نفره",
        price: "۳۶۰",
        material: "سینه مرغ طمع دار / پپرونی / گوشت گوساله اسلایس / گوجه گیلاسی / بروکلی / قارچ / فلفل دلمه ای رنگی / زیتون / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "استافد کراست دو نفره",
        price: "۳۷۰",
        material: "ژامبون گوشت و مرغ / فلفل دلمه ای رنگی / زیتون / قارچ / ذرت / بیکن / سس کچاپ / سس سیر"
    },
    {
        category_name: "پیتزا",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "بریدیت دو نفره",
        price: "۴۲۰",
        material: "گوشت اسلایس گوساله / فلفل دلمه ای رنگی / زیتون / قارچ / دیپ سیر و خامه / فلفل هالوپینو / سس کچاپ / سس سیر"
    },
    

    //category : steak
    {
        category_name: "استیک",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "چیکن استیک",
        price: "۲۹۰",
        material: "300 گرم سینه مرغ طعم دار / سس قارچ / سیب زمینی سرخ شده / سس دمی گلس / فراید رایس / سبزیجات طعم دار"
    },
    {
        category_name: "استیک",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "میکس استیک",
        price: "۳۹۰",
        material: "150 گرم سینه مرغ طعم دار / 100 گرم فیله گوساله طعم دار / سس قارچ / سیب زمینی سرخ شده / سس دمی گلس / فراید رایس / سبزیجات طعم دار"
    },
    {
        category_name: "استیک",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "استیک فیله مینیون",
        price: "۴۲۰",
        material: "۲۰۰ گرم فیله گوساله طعم دار / سس قارچ / سس دمی گلس / فراید رایس / سیب زمینی سرخ شده / سبزیجات طعم دار"
    },
    {
        category_name: "استیک",
        // category_image: idk,
        // slider: [
        //     // slider_image1,
        //     // slider_image2
        // ],
        title: "استیک ریبای",
        price: "۵۱۰",
        material: "۴۰۰ گرم دنده گوساله طعم دار / سس قارچ / سیب زمینی سرخ شده / سس دمی گلس / فراید رایس / سبزیجات طعم دار "
    },


    //category : kebabs
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "کباب لقمه",
    //     price: "۱۹۵",
    //     material: "مخلوط گوشت گوسند و گوساله 250 گرم",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "جوجه زعفونی",
    //     price: "۱۸۵",
    //     material: "300 گرم ران چرخ شده مزه دار شده با چاشنی ماست و زعفران",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "شیشلیگ",
    //     price: "",
    //     material: "450 گرم گوشت گوسفندی ",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "شفتالیا",
    //     price: "۲۱۰",
    //     material: "250 گرم مخلوط گوشت گوسفند و گوساله پیچیده شده در لای چربی",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "سوماکیا",
    //     price: "۲۱۵",
    //     material: "300 گرم ران مرغ مزه دار شده به همراه چاشنی سماق و انار",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "بیتی کباب",
    //     price: "۲۱۵",
    //     material: "250 گرم مخلوط گوشت گوسفند و گوساله پیچیده شده در لای نان بهمراه سس گوجه و ماست",
    //     sold_out: true,
    // },
    // {
    //     category_name: "کباب",
    //     // category_image: idk,
    //     // slider: [
    //     //     // slider_image1,
    //     //     // slider_image2
    //     // ],
    //     title: "شش طاووق",
    //     price: "۲۲۰",
    //     material: "300 گرم ران مرغ مزه دار شده به همراه چاشنی ماست و زعفران و ادویه",
    //     sold_out: true,
    // },

    //category : salad
    {
        category_name: "سالاد و پیش غذا",
        title: "حمص",
        price: "۴۰",
        material: "حریره نخود بهمراه روغن زیتون و چاشنی های عربی"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "محمره",
        price: "",
        material: "حریره فلفل دلمه ای کبابی / گردو / روغن زیتون / چاشنی های عربی",
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "لبنه بالزعتر",
        price: "۴۵",
        material: "پنیر خامه ای طعم دار با چاشنی های عربی"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "نان سیر",
        price: "۹۰",
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سالاد فتوش",
        price: "۱۲۰",
        material: "کاهو / تربچه / نعناء / گوجه / خیار / بادمجان چیپسی / انار / سس انار و سماق"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سیب تنوری",
        price: "۱۲۰",
        material: "۴۰۰ گرم سیب زمینی / سس کچاپ"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سالاد گاردن",
        price: "۱۵۰",
        material: "کاهو / سیب سبز / پرتقال / کیوی / پنیر / بادام پرک / مغز کدو / توت فرنگی / زیتون کبابی / سس سبزیجات + سس زرشک"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سیب آلفردو",
        price: "۱۵۰",
        material: "سیب زمینی / سس آلفردو‍"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سالاد سزار گریل",
        price: "۱۹۰",
        material: "کاهو / کروتان / سینه مرغ گریل / پنیر پارمسان / سس سزار"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "بیکن فرایز",
        price: "۱۸۵",
        material: "سیب زمینی / پنیر پیتزا / پنیر چدار / بیکن / قارچ / سس کچاپ / سس قارچ"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سالاد چیکن فراید",
        price: "۱۹۵",
        material: "کاهو / سینه مرغ کریسپی / زیتون سیاه / گوجه گیلاسی / پنیر پارمسان / بیبی کورن / خیار / سس سزار"
    },
    {
        category_name: "سالاد و پیش غذا",
        title: "سالاد استیک",
        price: "۲۹۹",
        material: "کاهو / پنیر کبابی / زیتون کبابی / توت فرنگی / پرتقال / فیله گوساله گریل / سس بالزامیک"
    },
    // {
    //     category_name: "سالاد و پیش غذا",
    //     title: "بورانی اسفناج",
    //     price: "۳۵",
    //     sold_out: true,
    // },
    // {
    //     category_name: "سالاد و پیش غذا",
    //     title: "ساالاد شیرازی",
    //     price: "۳۸",
    //     sold_out: true,
    // },
    // {
    //     category_name: "سالاد و پیش غذا",
    //     title: "زیتون ساده با هسته",
    //     price: "۳۵",
    //     sold_out: true,
    // },
    // {
    //     category_name: "سالاد و پیش غذا",
    //     title: "زیتون پرورده",
    //     price: "۵۰",
    //     sold_out: true,
    // },


    //category : plows
    // {
    //     category_name: "پلوها",
    //     title: "ته چین مرغ",
    //     price: "۲۸۰",
    //     material: "... ته چین زعفرانی بهمراه تکه های بادمجان سرخ شده و 1 عدد جوجه مرغ 31 روزه / سس فسنجان + سس",
    //     sold_out: true,
    // },
    // {
    //     category_name: "پلوها",
    //     title: "بقچه پلو با گوشت",
    //     price: "۳۶۰",
    //     material: "گرم چلو پیچیده شده در لای خمیر نان / گوشت گوساله / سس فسنجان / سس پیاز",
    //     sold_out: true,
    // },
    // {
    //     category_name: "پلوها",
    //     title: "مچبوس اللهم",
    //     price: "۲۹۰",
    //     material: "400 گرم پلو عربی بهمراه گوشت گوساله / سس پیاز / سس ...",
    //     sold_out: true,
    // },
    // {
    //     category_name: "پلوها",
    //     title: "مچبوس الدجاج",
    //     price: "۲۷۵",
    //     material: "400 گرم پلو عربی بهمراه 1 عدد جوجه مرغ 31 روزه / سس پیاز / سس ...",
    //     sold_out: true,
    // },
    // {
    //     category_name: "پلوها",
    //     title: "چلو سفید",
    //     price: "۵۵",
    //     sold_out: true,
    // },


    //category : burger
    {
        category_name: "برگر",
        title: "زیتنگر برگر",
        price: "۱۶۵",
        material: "سینه مرغ سوخاری / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی"
    },
    {
        category_name: "برگر",
        title: "بیف برگر",
        price: "۱۹۵",
        material: "180 گرم برگر گوشت / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی"
    },
    {
        category_name: "برگر",
        title: "چیز برگر",
        price: "۱۹۸",
        material: "برگر گوشت ۱۸۰ گرم / پنیر چدار / سیب زمینی سرخ شده / سس کچاپ"
    },
    {
        category_name: "برگر",
        title: "ماشروم برگر",
        price: "۲۰۸",
        material: "برگر گوشت ۱۸۰ گرم / پنیر چدار / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی"
    },
    {
        category_name: "برگر",
        title: "دابل داون",
        price: "۲۵۰",
        material: "۲ عدد سینه مرغ سوخاری / بیکن / پنیر چدار / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی"
    },
    // {
    //     category_name: "برگر",
    //     title: "ریب برگر",
    //     price: "۳۲۰",
    //     material: "350 گرم گوشت دنده گوساله / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی",
    //     sold_out: true,
    // },
    {
        category_name: "برگر",
        title: "میکس برگر",
        price: "۲۹۹",
        material: "180 گرم برگر گوشت / 150 گرم سینه مرغ گریل / سیب زمینی سرخ شده / بیکن / سس کچاپ / سس پارسلی"
    },


    //category : pasta 
    {
        category_name: "پاستا",
        title: "پاستا فتو آلفردو",
        price: "۱۹۹",
        material: "پاستا فتوچینی / سس آلفردو / توپک مرغ گریل / پنیر پارمسان"
    },
    {
        category_name: "پاستا",
        title: "پاستا تومیتو",
        price: "۲۶۰",
        material: "پاستا فتوچینی / سس گوجه / فیله گوساله گریل / پنیر پارمسان"
    },


    //category : crispy
    {
        category_name: "ملل",
        title: "کراکت سیب زمینی",
        price: "۱۵۰",
        material: "پوره سیب زمینی سوخاری / سیب زمینی سرخ شده / سس کچاپ / سس پارسلی"
    },
    {
        category_name: "ملل",
        title: "چیکن بالز",
        price: "۱۶۵",
        material: "توپک مرغ و پنیر / سس باربیکیو / سس کچاپ / سیب زمینی سرخ شده"
    },
    {
        category_name: "ملل",
        title: "اسپرینگ رول",
        price: "۱۸۵",
        material: "۵ عدد / سس پارسلی / سس سوئیت چیلی / سیب زمینی سرخ شده"
    },
    {
        category_name: "ملل",
        title: "سوشی ماکیرول",
        price: "۱۹۵",
        material: "سبزیجات / برنج فوجی موری"
    },
    {
        category_name: "ملل",
        title: "تمپورا ماهی",
        price: "۱۹۵",
        material: "۱۵۰ گرم ماهی شیر طعم دار سوخاری / سیب زمینی سرخ شده / سس تارتار"
    },
    // {
    //     category_name: "ملل",
    //     title: "تمپورا میگو",
    //     price: "۲۲۵",
    //     material: "150 گرم میگو طعم دار سوخاری / سیب زمینی سرخ شده / سس تارتار"
    // },
    {
        category_name: "ملل",
        title: "سوئیت اند ساور",
        price: "۲۴۰",
        material: "۱۵۰ گرم سینه مرغ سوخاری با کاور سس ترش و شیرین / سیب زمینی سرخ شده / سس پارسلی / سس کچاپ"
    },
    {
        category_name: "ملل",
        title: "سوشی دراگون",
        price: "۲۶۵",
        material: "برنج فوجی موری / جلبک خوراکی / میگو سوخاری / آواکادوو / مایونز ژاپنی"
    },
    {
        category_name: "ملل",
        title: "چیکن وینگز",
        price: "۱۹۹",
        material: "بال مرغ سوخاری / سیب زمینی سرخ شده / سس پارسلی / سس باربیکیو"
    },
    {
        category_name: "ملل",
        title: "باربیکیو وینگز",
        price: "۲۹۰",
        material: "بال مرغ سوخاری کاور شده با سس باربیکیو / سیب زمینی سرخ شده / سس پارسلی / سس باربیکیو"
    },
    
   


    //category : ghelian
    {
        category_name: "قلیان",
        title: "دو سیب",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "دو سیب آلبالو",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "آلبالو",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "لاو",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "هندوانه",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "هندوانه یخ",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "شاتوت بستنی",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "سیب یخ",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "دلار",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "شیر قهوه",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "معجون شراب زعفران",
        price: "۱۳۰",
        material: ""
    },
    {
        category_name: "قلیان",
        title: "چای کلاسیک قوری",
        price: "۴۰",
        material: "لیوان . قوری چایی دمی + آب جوش + دارچین + گل سرخ + نبات + شکلات شیری "
    },
    {
        category_name: "قلیان",
        title: "بشقاب مزه",
        price: "۱۰۰",
        material: "حمص / لبنه بالزعتر / محمره"
    },
    //category : stew and food
    // {
    //     category_name: "خورش و خوراک",
    //     title: "چلو خورش طهرونی",
    //     price: "",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "چلو خورش فسنجان با گوشت",
    //     price: "۲۹۵",
    //     material: "250 گرم خورش فسنجان بهمراه 200 گرم گوشت گوساله",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "چلو خورش فسنجان با مرغ",
    //     price: "۲۹۵",
    //     material: "250 گرم خورش فسنجان بهمراه یک عدد جوجه مرغ 31 روزه",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "ماهی قزل آلا به سبک کاخ لانژ",
    //     price: "۲۵۰",
    //     material: "400 گرم ماهی قزل آلا بهمراه سس فسنجان",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "ماهیچه گوسفندی",
    //     price: "۴۵۰",
    //     material: "500 گرم ماهیچه گوسفندی / سس پیاز / سس ..",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "گردن گوسفندی",
    //     price: "۳۷۰",
    //     material: "500 گرم گردن گوسفندی / سس پیاز سس ...",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "خوراک زبان",
    //     price: "۲۹۰",
    //     material: "150 گرم زبان گوساله بهمراه سس قارچ",
    //     sold_out: true,
    // },
    // {
    //     category_name: "خورش و خوراک",
    //     title: "اکبر جوجه",
    //     price: "۱۹۵",
    //     material: "600 گرم جوجه مرغ 21 روزه /سس انار",
    //     sold_out: true,
    // },

    //hot drink
    {
        category_name: "نوشیدنی گرم",
        title: "چای کلاسیک تک نفره",
        price: "۴۵",
        material: "لیوان . قوری چایی دمی + آب جوش + دارچین + گل سرخ + نبات + شکلات شیری "
    },
    {
        category_name: "نوشیدنی گرم",
        title: "چای انگلیسی",
        price: "۵۵",
        material: "چای دمی + شیر 50 میل + سیروپ کارامل + شکلات شیری"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "چای ترش دم",
        price: "۷۵",
        material: "چای ترش 10 گرم + آب جوش + نبات + شکلات شیری +"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "مراکن تی",
        price: "۶۵",
        material: "چای سبز + لیمو اسلاییس 0.5 میل + نعنا"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "چای ماسالا",
        price: "۶۰",
        material: "20 گرم چایی + ماسالا + آب جوش"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "شیرپسته داغ",
        price: "۸۰",
        material: "100 میل شیر + 2 اسکوپ بستنی وانیل پسته + پودر پسته"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "وایت چاکلت / هات چاکلت",
        price: "۸۵",
        material: "پودر هات یا وایت 25 گرم + شیر 180 میل"
    },
    {
        category_name: "نوشیدنی گرم",
        title: "ماچالاته",
        price: "۶۲",
        material: "چای ماچا 20 گرم + شیر"
    },


    //cold drinks (espresso)
    {
        category_name: "نوشیدنی سرد",
        title: "فراپاچینو",
        price: "۸۵",
        material: "یخ + قهوه اسپرسو + شیر 100 میل + سس شکلات 10 گرم + شکر + سس شکلات سفید 2 قاشق"
    },
    {
        category_name: "نوشیدنی سرد",
        title: "آفوگاتو",
        price: "۸۰",
        material: "1 اسکوپ بستنی وانیل + اسپرسو"
    },
    {
        category_name: "نوشیدنی سرد",
        title: "چیلو میوه ای",
        price: "۱۰۵",
        material: "خامه + بستنی شاتوت + اسپرسو + شیر فوم دار - 50 گرم - 1 اسکوپ - 100 میل"
    },
    {
        category_name: "نوشیدنی سرد",
        title: "بلک پینک لاته",
        price: "۹۵",
        material: "ماست توت فرنگی + شیر فوم دار شده 200 میل + اسپرسو + کربن"
    },
    {
        category_name: "نوشیدنی سرد",
        title: "آیس آمریکانو",
        price: "۷۰",
        material: "یخ + اسپرسو"
    },
    {
        category_name: "نوشیدنی سرد",
        title: "آیس لاته طعم دار",
        price: "۹۵",
        material: "تاپینگ + وانیل + کارامل + فندق + شکلات"
    },

    // fruit juices
    {
        category_name: "آبمیوه",
        title: "پرتقال",
        price: "۷۵",
    },
    {
        category_name: "آبمیوه",
        title: "زرشک",
        price: "۶۰",
    },
    {
        category_name: "آبمیوه",
        title: "انار",
        price: "۶۰",
    },
    {
        category_name: "آبمیوه",
        title: "آلبالو",
        price: "۶۰",
    },
    {
        category_name: "آبمیوه",
        title: "آناناس",
        price: "۹۰",
    },
    {
        category_name: "آبمیوه",
        title: "انبه",
        price: "۹۰",
    },
    {
        category_name: "آبمیوه",
        title: "طالبی",
        price: "۷۵",
    },
    {
        category_name: "آبمیوه",
        title: "هندوانه",
        price: "۷۵",
    },
    {
        category_name: "آبمیوه",
        title: "شیر موز",
        price: "۹۵",
    },


    //shakes
    {
        category_name: "شیک",
        title: "بلک وافل چاکلت",
        price: "۱۰۰",
        material: "بستنی + وانیل پسته + شیر + وافل 1 تیکه + کیک شکلات + کربن"
    },
    {
        category_name: "شیک",
        title: "حاج خلیفه",
        price: "۹۸",
        material: "باقلوا + بستنی وانیل + سوهان + گز + شیر"
    },
    {
        category_name: "شیک",
        title: "چری بری",
        price: "۷۵",
        material: "بستنی توت فرنگی 2 اسکوپ + بستنی شاتوت 2 اسکوپ + لواشک 2 عدد + شیر"
    },
    {
        category_name: "شیک",
        title: "جیم لانژ",
        price: "۱۰۵",
        material: "خرما + عسل + موز + کره بادام زمینی + جو دو سر پرک + کنجد + بستنی وانیل + شیر"
    },
    {
        category_name: "شیک",
        title: "خاتون",
        price: "۹۵",
        material: "بستنی شکلات + فندق + بادام زمینی + موز + شیر"
    },


    //punch
    {
        category_name: "پانچ",
        title: "خلیج فارس",
        price: "۱۱۰",
        material: "بلوکاراسائو + میکس عرقیجات اعلا + خاک شیر + تونیک واتر + آلوورا"
    },
    {
        category_name: "پانچ",
        title: "پیروز",
        price: "۹۲",
        material: "آب انگور سفید + آب سیب سبز + ریحان ایتالیایی + عرق بهار نارنج + 5 میل آب غوره "
    },
    {
        category_name: "پانچ",
        title: "پاشا",
        price: "۹۰",
        material: "چای ترش غلیظ + تخمشربتی + زعفران سرددم + پنیرک + آلوورا"
    },
    {
        category_name: "پانچ",
        title: "آناهیتا",
        price: "۹۵",
        material: "کرن بری + بلوکاراسائو + آب لیمو + آلوورا + اکلیل خوراکی + سرددم پنیرک"
    },
    {
        category_name: "پانچ",
        title: "شاهدخت",
        price: "۹۸",
        material: "سیروپ گل رز + گلاب + آب لیمو + آب آلوورا + سرددم پنیرک"
    },

    //smoothie
    {
        category_name: "اسموتی",
        title: "تروپیکال",
        price: "۸۵",
    },
    {
        category_name: "اسموتی",
        title: "ردلایت",
        price: "۹۶",
    },
    {
        category_name: "اسموتی",
        title: "پینک",
        price: "۸۷",
    },
    {
        category_name: "اسموتی",
        title: "تاج الدوله",
        price: "۹۵",
    },
    {
        category_name: "اسموتی",
        title: "ترش",
        price: "۹۵",
    },


    //Cake and dessert
    {
        category_name: "کیک و دسر",
        title: "وافل وانیل نوتلا",
        price: "۹۰",
    },
    {
        category_name: "کیک و دسر",
        title: "وافل وانیل توت فرنگی",
        price: "۸۵",
    },
    {
        category_name: "کیک و دسر",
        title: "وافل موز شکلات",
        price: "۹۰",
    },
    {
        category_name: "کیک و دسر",
        title: "وافل بستنی",
        price: "۸۵",
    },
    {
        category_name: "کیک و دسر",
        title: "کیک بستنی",
        price: "۸۵",
    },
    {
        category_name: "کیک و دسر",
        title: "کیک روز",
        price: "۷۰",
    },
    {
        category_name: "کیک و دسر",
        title: "دسر مخصوص کاخ لانژ",
        price: "۹۵",
    },


    //hot drinks (espresso)
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "اسپرسو",
        price: "۵۵",
        material: ".... (18 الی 20 گرم قهوه آسیاب شده) + شکلات + آب"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "آمریکانو",
        price: "۶۰",
        material: "اسپرسو + آب جوش + شکلات"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "لاته",
        price: "۷۵",
        material: "تاپینگ + وانیل + فندق + کارامل + شکلات + اسپرسو + 250 میل شیر + شکلات"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "کاپوچینو",
        price: "۷۵",
        material: "تاپینگ + شکلات + سس شکلات 10 گرم + 250 میل شیر + اسپرسو + بیسکوئیت"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "موکاچینو",
        price: "۸۲",
        material: "تاپینگ + شکلات + سس شکلات 10 گرم + 250 میل شیر + اسپرسو + بیسکوئیت"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "نوتلاچینو",
        price: "۸۵",
        material: "نوتلا 5 گرم + اسپرسو + 250 می شیر + شکلات یا کوکی"
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "سینامون دورچ لاته",
        price: "۹۴",
        material: "خامه + دارچین + قهوه + عسل + لاته + 20 گرم خامه + خاویار 5 گرم "
    },
    {
        category_name: "نوشیدنی گرم اسپرسو",
        title: "کارامل ماکیاتو",
        price: "۸۲",
        material: "سیروپ کارامل 10 میل + شیر 250 گرم + اسپرسو + شکلات یا کوکی"
    },


    //Mocktail
    {
        category_name: "ماکتیل",
        title: "گرین هون",
        price: "۸۵",
        material: "کاراسائو + آبلیمو + آناناس + انبه + پرتقال + پشن فروت + آلبالو + جوهر لیمو"
    },
    {
        category_name: "ماکتیل",
        title: "سان کوکو هایپ ",
        price: "۹۰",
        material: "پرتقال + عسل + نارگیل + هایپ + دارچین"
    },
    {
        category_name: "ماکتیل",
        title: "جوکر",
        price: "۷۰",
        material: "شیره نارگیل + آب آناناس + گریپ فروت + ریحان ایتالیایی + پنیرک"
    },
    {
        category_name: "ماکتیل",
        title: "هاچ",
        price: "۷۵",
        material: "ترکیب میوه های استوایی گرم + زعفران سرد دم + کربن"
    },
    {
        category_name: "ماکتیل",
        title: "سوماک",
        price: "۶۵",
        material: "سیروپ زرشک و سماق + فلفل قرمز + سرددم زعفران + آب آلبالو قرمز"
    },
    {
        category_name: "ماکتیل",
        title: "لیموناد",
        price: "۷۰",
        material: "لیمو سنگی + آب شکر + آب سودا"
    },
    {
        category_name: "ماکتیل",
        title: "موهیتو - رد موهیتو - بلو موهیتو ",
        price: "۸۵",
        material: "توت فرنگی + بلوکاراسائو"
    },
    {
        category_name: "ماکتیل",
        title: " مخصوص ( بلک لانژ )",
        price: "۱۳۰",
        material: "( ترش + شیرین + ملس ) "
    },
];

export default items;
