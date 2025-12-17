const questions = [
            {
                id: 1,
                category: "Adjectives",
                question: "I was very ______ by the documentary.",
                options: ["interesting", "interested", "interest", "interestingly"],
                correctIndex: 1, // 'interested' est l'option à l'index 1 (0, 1, 2, 3)
                ruleTitle: "Adjectifs en -ED vs -ING",
                explanationFR: "Les adjectifs finissant par <strong>-ED</strong> décrivent une émotion ou un sentiment ressenti par une personne (ex: I am bored). Les adjectifs finissant par <strong>-ING</strong> décrivent la cause de ce sentiment, souvent une chose ou une situation (ex: The movie is boring).",
                explanationAR: "تُستخدم الصفات المنتهية بـ <strong>-ED</strong> لوصف شعور الشخص (مثال: أنا مهتم). بينما تُستخدم الصفات المنتهية بـ <strong>-ING</strong> لوصف الشيء أو الشخص الذي يسبب هذا الشعور (مثال: الفيلم مثير للاهتمام)."
            },
            {
                id: 2,
                category: "Tenses",
                question: "She ______ to Paris last year.",
                options: ["has gone", "went", "goes", "go"],
                correctIndex: 1, 
                ruleTitle: "Past Simple vs Present Perfect",
                explanationFR: "On utilise le <strong>Past Simple</strong> (went) quand le moment de l'action est terminé et précisé (ici: 'last year'). Le Present Perfect est utilisé quand le temps n'est pas précisé ou a un lien avec le présent.",
                explanationAR: "نستخدم <strong>الماضي البسيط</strong> عندما يكون زمن الفعل قد انتهى ومحددًا بوضوح (مثل: 'السنة الماضية'). أما المضارع التام فيُستخدم عندما يكون الوقت غير محدد أو له علاقة بالحاضر."
            },
            // Tu peux ajouter d'autres règles ici en copiant le bloc {}
            {
                "id": 3,
                "category": "Demonstratives",
                "question": "Look at ______ picture here in my hand.",
                "options": ["that", "this", "these", "those"],
                "correctIndex": 1,
                "ruleTitle": "This vs That (Singulier)",
                "explanationFR": "On utilise <strong>This</strong> pour désigner un objet singulier qui est <strong>proche</strong> du locuteur (ici, 'in my hand').",
                "explanationAR": "نستخدم <strong>This</strong> للإشارة إلى مفرد <strong>قريب</strong> من المتحدث (هنا، 'in my hand' أي في يدي)."
            },
            {
                "id": 4,
                "category": "Demonstratives",
                "question": "Can you see ______ birds flying high in the sky?",
                "options": ["this", "that", "these", "those"],
                "correctIndex": 3,
                "ruleTitle": "These vs Those (Pluriel)",
                "explanationFR": "On utilise <strong>Those</strong> pour désigner des objets au pluriel qui sont <strong>lointains</strong> (ici, 'in the sky').",
                "explanationAR": "نستخدم <strong>Those</strong> للإشارة إلى جمع <strong>بعيد</strong> (هنا، 'in the sky' أي في السماء)."
            },
            {
                "id": 5,
                "category": "Demonstratives",
                "question": "Are ______ your shoes near the door?",
                "options": ["this", "that", "those", "these"],
                "correctIndex": 3,
                "ruleTitle": "These (Pluriel Proche)",
                "explanationFR": "On utilise <strong>These</strong> pour le pluriel <strong>proche</strong>. Bien que les chaussures soient près de la porte, si le locuteur est à côté, c'est 'These'. (Note: Si le locuteur est loin, ce serait Those). Ici, on assume la proximité contextuelle.",
                "explanationAR": "نستخدم <strong>These</strong> للجمع <strong>القريب</strong>. (مثال: هل هذه أحذيتك؟)."
            },
            {
                "id": 6,
                "category": "Demonstratives",
                "question": "______ building over there is the new library.",
                "options": ["This", "That", "These", "Those"],
                "correctIndex": 1,
                "ruleTitle": "That (Singulier Lointain)",
                "explanationFR": "On utilise <strong>That</strong> pour un objet singulier qui est <strong>loin</strong> de nous (indiqué par 'over there').",
                "explanationAR": "نستخدم <strong>That</strong> للمفرد <strong>البعيد</strong> (كما يشير التعبير 'over there' أي هناك)."
            },
            {
                "id": 7,
                "category": "Demonstratives",
                "question": "I don't like ______ apples on my plate.",
                "options": ["that", "those", "these", "this"],
                "correctIndex": 2,
                "ruleTitle": "These (Pluriel Proche)",
                "explanationFR": "Les pommes sont sur l'assiette du locuteur ('my plate'), donc elles sont <strong>proches</strong> et au <strong>pluriel</strong>. On utilise donc <strong>These</strong>.",
                "explanationAR": "التفاح موجود في طبق المتحدث ('my plate')، إذن هو <strong>قريب</strong> وفي صيغة <strong>الجمع</strong>. لذلك نستخدم <strong>These</strong>."
            },
            {
                "id": 8,
                "category": "Demonstratives",
                "question": "Hello? Is ______ John speaking?",
                "options": ["that", "this", "these", "those"],
                "correctIndex": 0,
                "ruleTitle": "Au téléphone (Contexte spécifique)",
                "explanationFR": "Au téléphone, pour demander qui est l'autre personne (qui est physiquement 'loin' mais connectée), on utilise souvent <strong>That</strong> en anglais britannique ou américain standard.",
                "explanationAR": "في المحادثات الهاتفية، للسؤال عن هوية الشخص الآخر، نستخدم عادة <strong>That</strong>."
            }
        ];