const questions = [
            {
                id: 1,
                category: "Passé Composé",
                question: "Elle est ______ au marché ce matin.",
                options: ["allé", "allée", "allés", "aller"],
                correctIndex: 1, // 'allée' est la bonne réponse (index 1)
                ruleTitle: "L'accord avec l'auxiliaire Être",
                explanationFR: "Avec l'auxiliaire <strong>Être</strong>, le participe passé s'accorde toujours en genre (féminin/masculin) et en nombre (singulier/pluriel) avec le sujet. Ici, 'Elle' est féminin singulier, donc on ajoute un 'e' à la fin.",
                explanationAR: "مع الفعل المساعد <strong>Être</strong>، يتطابق اسم المفعول دائمًا مع الفاعل في التذكير والتأنيث والإفراد والجمع. هنا 'Elle' مفرد مؤنث، لذا نضيف 'e' في النهاية."
            },
            {
                id: 2,
                category: "Conjugaison",
                question: "Nous ______ nos devoirs hier soir.",
                options: ["avons fini", "sommes finis", "avez fini", "ont fini"],
                correctIndex: 0, 
                ruleTitle: "Le Passé Composé (Avoir)",
                explanationFR: "La plupart des verbes utilisent l'auxiliaire <strong>Avoir</strong> au passé composé. Avec 'Avoir', on n'accorde pas le participe passé avec le sujet.",
                explanationAR: "معظم الأفعال تستخدم الفعل المساعد <strong>Avoir</strong> في الماضي المركب. مع 'Avoir'، لا يتطابق اسم المفعول مع الفاعل."
            },
            {
                id: 3,
                category: "Accord du Participe Passé",
                question: "Il nous a ______.",
                options: ["quitté", "quittés", "quittée", "quitter"],
                correctIndex: 1, // 'quittés' (nous = pluriel)
                ruleTitle: "L'accord avec le COD avant Avoir",
                explanationFR: "En général, on n'accorde pas avec 'Avoir'. MAIS, si le <strong>COD</strong> (ici 'nous') est placé <strong>avant</strong> le verbe, on doit faire l'accord. Comme 'nous' est pluriel, on ajoute un 's'.",
                explanationAR: "بشكل عام، لا يوجد تطابق مع 'Avoir'. ولكن، إذا جاء المفعول به المباشر (COD) (هنا 'nous') <strong>قبل</strong> الفعل، يجب أن نطابق اسم المفعول. وبما أن 'nous' جمع، نضيف 's'."
            },
            // Copie ce bloc pour ajouter tes propres règles depuis l'image
             {
                id: 4,
                category: "Adverbes",
                question: "J'ai déménagé ______ dans ce nouveau quartier.",
                options: ["récemment", "sciemment", "certes", "notamment"],
                correctIndex: 0,
                ruleTitle: "Récemment (Recently)",
                explanationFR: "<strong>Récemment</strong> indique une action qui s'est passée il y a peu de temps (dans un passé proche).",
                explanationAR: "<strong>Récemment</strong> (مؤخراً) تشير إلى حدث وقع منذ وقت قصير."
            },
            {
                id: 5,
                category: "Adverbes",
                question: "Ce bébé pleure ______ la nuit.",
                options: ["constamment", "éventuellement", "certes", "sciemment"],
                correctIndex: 0,
                ruleTitle: "Constamment (Constantly)",
                explanationFR: "<strong>Constamment</strong> signifie 'tout le temps', 'sans arrêt' ou 'en permanence'.",
                explanationAR: "<strong>Constamment</strong> (باستمرار) تعني 'طوال الوقت' أو 'بدون توقف'."
            },
            {
                id: 6,
                category: "Adverbes",
                question: "J'aime les sports d'hiver, ______ le ski.",
                options: ["notamment", "récemment", "certes", "constamment"],
                correctIndex: 0,
                ruleTitle: "Notamment (Especially/Notably)",
                explanationFR: "<strong>Notamment</strong> sert à introduire un exemple précis ou à insister sur un élément particulier parmi un groupe.",
                explanationAR: "<strong>Notamment</strong> (لا سيما / خصوصاً) تُستخدم لتقديم مثال محدد أو التركيز على عنصر معين ضمن مجموعة."
            },
            {
                id: 7,
                category: "Adverbes",
                question: "______, il est tard, mais je veux finir ce film.",
                options: ["Certes", "Sciemment", "Notamment", "Éventuellement"],
                correctIndex: 0,
                ruleTitle: "Certes (Admittedly)",
                explanationFR: "<strong>Certes</strong> est utilisé pour admettre qu'un fait est vrai (concession), souvent avant d'introduire une opposition avec 'mais'.",
                explanationAR: "<strong>Certes</strong> (صحيح أن / طبعاً) تُستخدم للاعتراف بحقيقة ما، وغالباً ما تتبعها معارضة بـ 'لكن'."
            },
            {
                id: 8,
                category: "Adverbes",
                question: "Il a menti ______ pour protéger son ami.",
                options: ["sciemment", "récemment", "notamment", "certes"],
                correctIndex: 0,
                ruleTitle: "Sciemment (Knowingly)",
                explanationFR: "<strong>Sciemment</strong> veut dire faire quelque chose volontairement, en pleine connaissance de cause (exprès).",
                explanationAR: "<strong>Sciemment</strong> (عن قصد / عمداً) تعني فعل شيء بإرادة ومعرفة كاملة بالعواقب."
            },
            {
                id: 9,
                category: "Adverbes",
                question: "Nous pourrons ______ aller au cinéma s'il pleut.",
                options: ["éventuellement", "constamment", "sciemment", "certes"],
                correctIndex: 0,
                ruleTitle: "Éventuellement (Possibly)",
                explanationFR: "Attention ! <strong>Éventuellement</strong> signifie 'peut-être' ou 'si l'occasion se présente'. Ce n'est PAS 'finalement'.",
                explanationAR: "انتبه! <strong>Éventuellement</strong> تعني 'ربما' أو 'إذا لزم الأمر'. هي لا تعني 'في النهاية' (خطأ شائع بسبب الإنجليزية)."
            },
            {
                id: 10,
                category: "Pluriel (-AL)",
                question: "Les ______ galopent dans la prairie. (cheval)",
                options: ["chevals", "chevaux", "chevaus", "chevales"],
                correctIndex: 1,
                ruleTitle: "Pluriel en -AL",
                explanationFR: "En général, les noms terminés par <strong>-al</strong> au singulier font leur pluriel en <strong>-aux</strong> (un journal -> des journaux).",
                explanationAR: "بشكل عام، الأسماء التي تنتهي بـ <strong>-al</strong> في المفرد، يتحول جمعها إلى <strong>-aux</strong> (مثال: un journal -> des journaux)."
            },
            {
                id: 11,
                category: "Pluriel (-OU)",
                question: "Elle porte de magnifiques ______ en or. (bijou)",
                options: ["bijoux", "bijous", "bijouxes", "bijoue"],
                correctIndex: 0,
                ruleTitle: "Pluriel en -OU (Exceptions)",
                explanationFR: "La plupart des mots en -ou prennent un 's'. Mais il y a <strong>7 exceptions</strong> qui prennent un <strong>'x'</strong> : bijou, caillou, chou, genou, hibou, joujou, pou.",
                explanationAR: "معظم الكلمات المنتهية بـ -ou تأخذ 's'. لكن هناك <strong>7 استثناءات</strong> تأخذ <strong>'x'</strong> وهي: bijou (مجوهرات)، caillou (حصاة)، chou (ملفوف)، genou (ركبة)، hibou (بومة)، joujou (لعبة)، pou (قمل)."
            },
            {
                id: 12,
                category: "Pluriel (-EAU)",
                question: "Maman a préparé trois ______ pour la fête. (gâteau)",
                options: ["gâteaus", "gâteau", "gâteaux", "gâteauses"],
                correctIndex: 2,
                ruleTitle: "Pluriel en -EAU / -AU / -EU",
                explanationFR: "Les noms terminés par <strong>-eau</strong>, <strong>-au</strong> et <strong>-eu</strong> prennent un <strong>'x'</strong> au pluriel (ex: un bateau -> des bateaux).",
                explanationAR: "الأسماء التي تنتهي بـ <strong>-eau</strong>، <strong>-au</strong>، و <strong>-eu</strong> تأخذ حرف <strong>'x'</strong> في الجمع (مثال: un bateau -> des bateaux)."
            },
            {
                id: 13,
                category: "Pluriel (-AIL)",
                question: "Les ______ sur la route bloquent la circulation. (travail)",
                options: ["travails", "travaux", "travailles", "travaus"],
                correctIndex: 1,
                ruleTitle: "Pluriel en -AIL",
                explanationFR: "La règle générale est d'ajouter un 's' (un détail -> des détails). Mais attention aux exceptions courantes qui font <strong>-aux</strong> : travail -> travaux, vitrail -> vitraux, corail -> coraux.",
                explanationAR: "القاعدة العامة هي إضافة 's' (مثال: un détail -> des détails). لكن انتبه للاستثناءات الشائعة التي تتحول إلى <strong>-aux</strong> مثل: travail -> travaux (أعمال)، vitrail -> vitraux، corail -> coraux."
            }
        ];