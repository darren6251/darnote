// darNote DSE Chinese - Past Paper History & Analysis
// Extracted from HKEAA historical data (2018-2025)

window.dseTrendsData = [
    {
        id: "lunyu", title: "論語",
        history: {
            2018: { trans: false, text: false }, 2019: { trans: false, text: "孝" },
            2020: { trans: false, text: "君" }, 2021: { trans: false, text: false },
            2022: { trans: "仁", text: false }, 2023: { trans: "仁", text: false },
            2024: { trans: false, text: false }, 2025: { trans: false, text: "仁" }
        }
    },
    {
        id: "yuwo", title: "魚我所欲也",
        history: {
            2018: { trans: false, text: false }, 2019: { trans: false, text: false },
            2020: { trans: false, text: false }, 2021: { trans: true, text: false },
            2022: { trans: false, text: true }, 2023: { trans: false, text: false },
            2024: { trans: false, text: false }, 2025: { trans: true, text: false }
        }
    },
    {
        id: "quanxue", title: "勸學", // Nuclear threat
        history: {
            2018: { trans: true, text: true }, 2019: { trans: true, text: false },
            2020: { trans: false, text: false }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: false },
            2024: { trans: false, text: false }, 2025: { trans: false, text: false }
        }
    },
    {
        id: "xiaoyao", title: "逍遙遊",
        history: {
            2018: { trans: true, text: false }, 2019: { trans: false, text: false },
            2020: { trans: false, text: false }, 2021: { trans: true, text: true },
            2022: { trans: true, text: false }, 2023: { trans: false, text: false },
            2024: { trans: false, text: false }, 2025: { trans: false, text: false }
        }
    },
    {
        id: "lianpo", title: "廉頗藺相如列傳",
        history: {
            2018: { trans: true, text: false }, 2019: { trans: true, text: false },
            2020: { trans: true, text: false }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: false },
            2024: { trans: true, text: false }, 2025: { trans: false, text: true }
        }
    },
    {
        id: "chushi", title: "出師表",
        history: {
            2018: { trans: true, text: true }, 2019: { trans: true, text: false },
            2020: { trans: true, text: false }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: false },
            2024: { trans: false, text: false }, 2025: { trans: true, text: false }
        }
    },
    {
        id: "tangshi", title: "唐詩三首",
        history: {
            2018: { trans: false, text: false }, 2019: { trans: false, text: "山" },
            2020: { trans: false, text: "登" }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: "月" },
            2024: { trans: false, text: false }, 2025: { trans: false, text: "山" }
        }
    },
    {
        id: "shishuo", title: "師說",
        history: {
            2018: { trans: true, text: true }, 2019: { trans: false, text: false },
            2020: { trans: true, text: false }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: false },
            2024: { trans: true, text: false }, 2025: { trans: false, text: false }
        }
    },
    {
        id: "shide", title: "始得西山宴遊記",
        history: {
            2018: { trans: false, text: false }, 2019: { trans: false, text: true },
            2020: { trans: false, text: false }, 2021: { trans: false, text: false },
            2022: { trans: false, text: true }, 2023: { trans: false, text: true },
            2024: { trans: false, text: true }, 2025: { trans: false, text: false }
        }
    },
    {
        id: "yueyang", title: "岳陽樓記",
        history: {
            2018: { trans: false, text: false }, 2019: { trans: true, text: false },
            2020: { trans: true, text: true }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: false },
            2024: { trans: false, text: true }, 2025: { trans: false, text: false }
        }
    },
    {
        id: "liuguo", title: "六國論",
        history: {
            2018: { trans: true, text: false }, 2019: { trans: false, text: false },
            2020: { trans: false, text: true }, 2021: { trans: false, text: false },
            2022: { trans: false, text: false }, 2023: { trans: false, text: true },
            2024: { trans: false, text: false }, 2025: { trans: false, text: true }
        }
    },
    {
        id: "songci", title: "宋詞三首",
        history: {
            2018: { trans: false, text: "青" }, 2019: { trans: false, text: false },
            2020: { trans: false, text: false }, 2021: { trans: false, text: "念" },
            2022: { trans: false, text: "聲" }, 2023: { trans: false, text: false },
            2024: { trans: false, text: "念" }, 2025: { trans: false, text: false }
        }
    }
];

// The HKEAA Prediction Algorithm 
window.getTrendsAnalysis = () => {
    const currentYear = 2026;
    
    return window.dseTrendsData.map(doc => {
        let lastTransYear = 0;
        let lastTextYear = 0;
        
        Object.keys(doc.history).forEach(year => {
            if (doc.history[year].trans) lastTransYear = Math.max(lastTransYear, parseInt(year));
            if (doc.history[year].text) lastTextYear = Math.max(lastTextYear, parseInt(year));
        });

        // HKEAA Logic:
        // If not tested in 4+ years = Nuclear Threat (Super Hot)
        // If not tested in 2-3 years = High Risk (Hot)
        // Tested last year = Safe (But don't trust them)
        
        const isTransNuclear = lastTransYear > 0 && (currentYear - lastTransYear >= 5);
        const isTransHot = lastTransYear > 0 && (currentYear - lastTransYear >= 3) && !isTransNuclear;
        
        const isTextNuclear = lastTextYear > 0 && (currentYear - lastTextYear >= 5);
        const isTextHot = lastTextYear > 0 && (currentYear - lastTextYear >= 3) && !isTextNuclear;

        // Generate snarky AI commentary based on the data
        let comment = "";
        if (doc.title.includes("勸學")) comment = "HKEAA forgot this exists. It is radioactive. Memorize every word tonight.";
        else if (isTransNuclear && isTextNuclear) comment = "Hasn't been touched in a decade. A double-nuke is imminent.";
        else if (lastTextYear === 2025) comment = "Tested for Long Q in 2025. You are probably safe... unless they hate you.";
        else if (lastTransYear === 2025) comment = "They translated it last year, but a Long Q sneak attack is very possible.";
        else comment = "Mid-tier risk. Don't ignore it, but don't lose sleep over it yet.";

        return {
            ...doc,
            lastTransYear,
            lastTextYear,
            tags: {
                trans: isTransNuclear ? "☢️ 字譯核爆" : (isTransHot ? "🔥 字譯大熱" : (lastTransYear >= 2024 ? "🧊 字譯安全" : "⚠️ 字譯高危")),
                text: isTextNuclear ? "☢️ 長問核爆" : (isTextHot ? "🔥 長問大熱" : (lastTextYear >= 2024 ? "🧊 長問安全" : "⚠️ 長問高危"))
            },
            colors: {
                trans: isTransNuclear ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : (isTransHot ? "bg-danger/10 text-danger border-danger/20" : (lastTransYear >= 2024 ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-warning/10 text-warning border-warning/20")),
                text: isTextNuclear ? "bg-purple-500/10 text-purple-500 border-purple-500/20" : (isTextHot ? "bg-danger/10 text-danger border-danger/20" : (lastTextYear >= 2024 ? "bg-blue-500/10 text-blue-500 border-blue-500/20" : "bg-warning/10 text-warning border-warning/20"))
            },
            comment
        };
    });
};
