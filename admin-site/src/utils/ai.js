import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

const medicalDB = {
    // Burun va yondosh bo'shliqlar
    nose: {
        keywords: ['burun', 'rino', 'septoplastika', 'gaymorit', 'sinusit', 'polip', 'nafas'],
        data: {
            variations: [
                {
                    title: "Rinoplastika va Septoplastika: Estetika va Funktsiya",
                    causes: "Burun to'sig'i qiyshiqligi asosan mexanik jarohatlar yoki suyak-tog'ay tizimining noto'g'ri rivojlanishi natijasida yuzaga keladi.",
                    symptoms: "- Doimiy burun bitishi\n- Burun ko'rinishidagi qiyshiqlik\n- Kechas xurrak otish\n- Surunkali bosh og'rig'i",
                    diagnosis: "Rinoskopiya, endoskopik tekshiruv va burun bo'shliqlarining MSKT tahlili.",
                    treatment: "Jarrohlik yo'li (Rinoseptoplastika). Bizning klinikada Piezo (ultratovushli) usulda suyaklarni shikastlamasdan amalga oshiriladi."
                },
                {
                    title: "Gaymorit va Sinusit: Sabablar va Yechimlar",
                    causes: "Yuqori nafas yo'llarining virusli yoki bakterial infektsiyalari, davolanmagan tish kasalliklari.",
                    symptoms: "- Burun atrofidagi og'irlik va og'riq\n- Yiringli burun ajralmalari\n- Isitma va holsizlik\n- Hid bilishning pasayishi",
                    diagnosis: "Rengenografiya yoki MSKT, burun yondosh bo'shliqlarini punksiya qilish.",
                    treatment: "Konservativ (antibiotiklar, yuvish muolajalari) yoki og'ir holatlarda jarrohlik (Gaymorotomiya)."
                }
            ],
            excerpts: [
                "Burun shaklini to'g'irlash va nafas olishni yaxshilash bo'yicha eng zamonaviy rinoplastika amaliyotlari.",
                "Gaymoritni punksiyasiz (teshmasdan) davolashning samarali usullari va profilaktikasi.",
                "Burun poliplari: nega paydo bo'ladi va ulardan qanday qilib butunlay qutulish mumkin?"
            ]
        }
    },
    // Rinoplastika maxsus
    rinoplastika: {
        keywords: ['rinoplastika', 'burun operatsiyasi', 'burun plastikasi'],
        data: {
            excerpts: [
                "Rinoplastika - burun shakli va nafas olishni bir vaqtning o'zida tuzatish imkoniyati.",
                "Zamonaviy Piezo texnologiyasi bilan og'riqsiz va tez tiklanadigan rinoplastika.",
                "Burun estetikasi va funktsiyasini mukammal darajada tiklash - VitaMed klinikasida.",
                "3D modellashtirish bilan oldindan natijani ko'rish imkoniyati - rinoplastika.",
                "Rinoplastika: tabiiy ko'rinish va erkin nafas olish kafolati."
            ]
        }
    },
    // Septoplastika maxsus
    septoplastika: {
        keywords: ['septoplastika', 'burun to\'sig\'i', 'septum'],
        data: {
            excerpts: [
                "Septoplastika - burun to'sig'i qiyshiqligini tuzatish va nafas olishni yaxshilash.",
                "Endoskopik septoplastika: tashqi chandiqsiz va tez tiklanish.",
                "Burun to'sig'i operatsiyasi zamonaviy usullar bilan - VitaMed klinikasida.",
                "Septoplastika orqali surunkali burun bitishi va bosh og'rig'idan xalos bo'ling.",
                "Nafas olish qiyinligi? Septoplastika - samarali yechim!"
            ]
        }
    },
    // Tomoq va og'iz bo'shlig'i
    throat: {
        keywords: ['tomoq', 'adenoid', 'tonzillit', 'angina', 'faringit', 'laringit', 'ovoz', 'bez'],
        data: {
            variations: [
                {
                    title: "Adenoidlar: Bolalar salomatligining yashirin dushmani",
                    causes: "Tez-tez qaytalanadigan infektsiyalar, irsiy moyillik va allergik status.",
                    symptoms: "- Burun orqali nafas ololmaslik\n- Eshitishning pasayishi (Otiti)\n- Og'iz ochiq holda uxlash\n- Nutqning o'zgarishi",
                    diagnosis: "Burun-halqumning endoskopik tekshiruvi (eng aniq usul).",
                    treatment: "Koblatsiya (plazmali) usulida adenotomiya. Qonashsiz va tez tiklanadigan zamonaviy usul."
                },
                {
                    title: "Surunkali Tonzillit va Angina",
                    causes: "Bodomcha bezlarining streptokokk va boshqa patogen bakteriyalar bilan surunkali zararlanishi.",
                    symptoms: "- Tomoqda tez-tez og'riq\n- Bezlar shishishi va yiringli tiqinlar\n- Bo'g'imlarda og'riq (revmatizm xavfi)\n- Isitma chiqishi",
                    diagnosis: "Faringoskopiya, qon tahlillari (ASLO, RF, SRB).",
                    treatment: "Vakuum-yuvish (Tonzillor), dori-darmonlar yoki asoratlar xavfi bo'lsa Tonzillektomiya."
                }
            ],
            excerpts: [
                "Tomoq og'rig'i va adenoidlarni pichoqsiz davolashning samarali yo'llari haqida.",
                "Surunkali tonzillitni butunlay davolash imkoniyati: klinikamizda qo'llaniladigan usullar.",
                "Ovoz bo'g'ilishi va laringit: qachon shifokorga murojaat qilish kerak?"
            ]
        }
    },
    // Adenotomiya maxsus
    adenotomiya: {
        keywords: ['adenotomiya', 'adenoid operatsiyasi', 'adenoid olib tashlash'],
        data: {
            excerpts: [
                "Adenotomiya - bolalarda adenoidlarni og'riqsiz va xavfsiz olib tashlash.",
                "Koblatsiya usulida adenotomiya: qonashsiz va tez tiklanish.",
                "Adenoid muammosini bir marta hal qilish - zamonaviy adenotomiya.",
                "Bolangiz erkin nafas olishi uchun - professional adenotomiya VitaMed da.",
                "Adenotomiya: umumiy behushlik ostida xavfsiz va samarali."
            ]
        }
    },
    // Tonzillotomiya va Tonzillektomiya
    tonsil: {
        keywords: ['tonzillotomiya', 'tonzillektomiya', 'bodomcha', 'bodomcha operatsiyasi'],
        data: {
            excerpts: [
                "Tonzillektomiya - surunkali tonzillitdan butunlay xalos bo'lish yo'li.",
                "Tonzillotomiya: bodomchalarni qisman olib tashlash va funktsiyasini saqlash.",
                "Zamonaviy tonzillektomiya - og'riqsiz va tez tiklanish kafolati.",
                "Bodomcha bezlari operatsiyasi: qachon zarur va qanday o'tkaziladi?",
                "Tonzillektomiya orqali angina va asoratlardan butunlay qutulish."
            ]
        }
    },
    // Full Face (yuz estetikasi)
    fullface: {
        keywords: ['full face', 'yuz estetikasi', 'yuz plastikasi', 'yuz lifting'],
        data: {
            excerpts: [
                "Full Face estetikasi - yuzning barcha qismlarini uyg'unlikda yaxshilash.",
                "Yuz liftingi va konturlash: yoshlikni qaytarish imkoniyati.",
                "Full Face jarrohlik - tabiiy va uyg'un natijalar VitaMed klinikasida.",
                "Yuz estetikasi: burun, ko'z va yonoqlarni kompleks yaxshilash.",
                "Full Face rejuvenatsiya - zamonaviy texnologiyalar bilan yoshartirish."
            ]
        }
    },
    // Quloq
    ear: {
        keywords: ['quloq', 'otit', 'eshitish', 'shovqin', 'tinnitus', 'eshitmay', 'og\'riq'],
        data: {
            variations: [
                {
                    title: "Otit: Quloq yallig'lanishi va uning asoratlari",
                    causes: "Sovuq qotish, burun bitishi asorati sifatida yoki quloqqa suv kirishi.",
                    symptoms: "- Quloqda kuchli og'riq\n- Quloq oqishi (yiring)\n- Eshitishning vaqtincha pasayishi\n- Bosh aylanishi",
                    diagnosis: "Otoskopiya, mikroskopik tekshiruv va audiometriya.",
                    treatment: "Antibakterial tomchilar, fizioterapiya va og'ir holatlarda timpanoplastika."
                },
                {
                    title: "Eshitish Pasayishi va Quloqdagi Shovqin",
                    causes: "Yosh o'tishi, shovqinli muhitda ishlash, nevrologik o'zgarishlar.",
                    symptoms: "- Atrofdagilar gapini tushunmaslik\n- Quloqda doimiy shovqin (tinnitus)\n- Yuqori chastotali ovozlarni eshitmaslik",
                    diagnosis: "Kompyuterli audiometriya, timpanometriya.",
                    treatment: "Dori-darmonlar bilan quvvatlash, eshitish apparatlari yoki jarrohlik usullari."
                }
            ],
            excerpts: [
                "Eshitish qobiliyatini tiklash va quloq shovqinidan xalos bo'lish yo'llari.",
                "Bolalarda otit: ota-onalar nimalarni bilishi shart?",
                "Quloq dardi va og'rig'ini uzoq muddatga bartaraf etuvchi muolajalar."
            ]
        }
    }
};

const findLocalCategory = (title) => {
    const t = title.toLowerCase();
    for (const cat in medicalDB) {
        if (medicalDB[cat].keywords.some(k => t.includes(k))) {
            return medicalDB[cat].data;
        }
    }
    return null;
};

/**
 * Generate excerpt using templates (no AI needed for short descriptions)
 */
export const generateExcerpt = async (title) => {
    // Simulate a small delay for UX consistency
    await new Promise(resolve => setTimeout(resolve, 500));

    const catData = findLocalCategory(title);

    if (catData) {
        // Return random excerpt from local database
        return catData.excerpts[Math.floor(Math.random() * catData.excerpts.length)];
    }

    // Generic templates for any medical topic
    const templates = [
        `${title} haqida eng muhim ma'lumotlar va zamonaviy davolash usullari.`,
        `${title}: sabablari, alomatlari va samarali davolash yo'llari.`,
        `VitaMed klinikasida ${title.toLowerCase()} professional davolash xizmatlari.`,
        `${title} muammosini zamonaviy usullar bilan hal qilish imkoniyati.`,
        `${title} bo'yicha mutaxassis maslahatlari va davolash usullari.`,
        `${title} kasalligini erta aniqlash va samarali davolash yo'llari.`,
        `${title}: zamonaviy diagnostika va davolash texnologiyalari.`,
        `VitaMed shifokorlari ${title.toLowerCase()} haqida batafsil ma'lumot beradi.`,
        `${title} bilan kurashishning eng samarali usullari va profilaktikasi.`,
        `${title}: tashxis, davolash va tiklanish jarayoni haqida.`,
        `${title} muammosini professional yechish - VitaMed klinikasida.`,
        `${title} haqida bilishingiz kerak bo'lgan eng muhim faktlar.`,
        `${title}: zamonaviy tibbiyotning so'nggi yutuqlari va usullari.`,
        `VitaMed klinikasida ${title.toLowerCase()} yuqori malakali mutaxassislar tomonidan davolanadi.`,
        `${title} kasalligi: sabablari, oldini olish va davolash choralari.`,
        `${title} bo'yicha professional maslahat va zamonaviy davolash.`,
        `${title}: tez va samarali davolash imkoniyatlari VitaMed klinikasida.`,
        `${title} muammosini hal qilishda tajribali shifokorlarimiz yordam beradi.`
    ];

    return templates[Math.floor(Math.random() * templates.length)];
};

/**
 * AI simulation for generating full blog content in Uzbek
 */
export const generateFullContent = async (title) => {
    try {
        if (!API_KEY) throw new Error("API Key missing");

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash", // Updated for early 2026 availability
            generationConfig: {
                temperature: 0.8,
                topP: 0.9,
                topK: 50,
                maxOutputTokens: 4096, // Increased for complete articles
            }
        });

        const prompt = `Siz Qo'qon shahridagi "VitaMed" xususiy LOR klinikasining bosh shifokorisiz. 
        Sizning vazifangiz "${title}" mavzusida BATAFSIL va TO'LIQ maqola yozish.

        MUHIM: Maqolani to'liq yozib tugatishingiz shart! Hech qanday qismni qoldirmang.

        Maqola tuzilishi (markdown formatida):
        1. **Kirish** (2-3 paragraf): Mavzuning dolzarbligi, statistika va VitaMed klinikasining tajribasi.
        2. **Sabablari** (batafsil): Kasallikning barcha mumkin bo'lgan sabablari - genetik, ekologik, turmush tarzi.
        3. **Alomatlari** (to'liq ro'yxat): Dastlabki, o'rta va og'ir bosqich alomatlari. Har birini alohida bullet point bilan.
        4. **Tashxisi** (professional): Zamonaviy diagnostika usullari - endoskopiya, MSKT, laboratoriya tahlillari, differensial tashxis.
        5. **Davolash** (keng qamrovli): Konservativ va jarrohlik usullari, zamonaviy texnologiyalar (lazer, koblatsiya, piezo), reabilitatsiya.
        6. **Profilaktika** (amaliy maslahatlar): Kundalik hayotda qo'llash mumkin bo'lgan aniq tavsiyalar.
        7. **Xulosa**: Qisqa xulosalar va VitaMed klinikasiga murojaat uchun chaqiriq.

        Har bir bo'limni to'liq yozib chiqing. Matn professional, ishonchli va o'zbek tilida imloviy xatosiz bo'lsin.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        return response.text().trim();
    } catch (error) {
        console.error("Gemini Error (FullContent):", error);
        // Fallback to local logic
        const catData = findLocalCategory(title);
        if (catData) {
            const item = catData.variations[Math.floor(Math.random() * catData.variations.length)];
            return `${item.title}

**Sabablari:**
${item.causes}

**Alomatlari:**
${item.symptoms}

**Tashxisi:**
${item.diagnosis}

**Davolash:**
${item.treatment}

---
*Eslatma: Ushbu ma'lumotlar tanishtiruv xarakteriga ega. To'g'ri tashxis uchun shifokor ko'rigidan o'tishingiz tavsiya etiladi.*`;
        }

        return `"${title}" haqida to'liq ma'lumot.

**Kirish:**
Ushbu maqolada ${title.toLowerCase()} bilan bog'liq asosiy tibbiy ma'lumotlar, klinikamizda qo'llaniladigan zamonaviy yondashuvlar haqida so'z boradi.

**Sabablari:**
Kasallikning asosiy sabablari orasida infektsion omillar, immun tizimining zaiflashishi yoki tashqi muhitning salbiy ta'sirini ko'rsatish mumkin.

**Alomatlari:**
Bemorlarda asosan noqulaylik, og'riq belgilari va funktsional buzilishlar kuzatiladi. Aniq alomatlar kasallik darajasiga qarab o'zgaradi.

**Tashxisi:**
Klinikamizda zamonaviy endoskopik, laboratoriya va apparatli tekshiruvlar orqali ${title.toLowerCase()} aniq tashxisidan o'tishingiz mumkin.

**Davolash:**
Davolash jarayoni konservativ (dori-darmonlar bilan) yoki zarurat tug'ilganda yuqori texnologiyali jarrohlik usullaridan foydalangan holda amalga oshiriladi.`;
    }
};
