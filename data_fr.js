const questions = [

            {
            "id": 1,
            "category": "Pronoms Démonstratifs",
            "question": "Je ne sais pas quel livre choisir. Je prends ______ ?",
            "options": ["celui", "celui-ci", "celle-ci", "ceux-ci"],
            "correctIndex": 1,
            "ruleTitle": "Celui-ci (Masculin Singulier)",
            "explanationFR": "Le mot 'livre' est masculin singulier. On utilise <strong>celui-ci</strong> pour désigner un objet proche ou que l'on montre du doigt.",
            "explanationAR": "كلمة 'livre' مذكر مفرد. نستخدم <strong>celui-ci</strong> للإشارة إلى شيء قريب أو شيء نشير إليه الآن."
            },
            {
            "id": 2,
            "category": "Pronoms Démonstratifs",
            "question": "Parmi toutes ces fleurs, je préfère ______.",
            "options": ["ceux-là", "celle-là", "celles", "celles-là"],
            "correctIndex": 3,
            "ruleTitle": "Celles-là (Féminin Pluriel)",
            "explanationFR": "'Fleurs' est féminin pluriel. On utilise <strong>celles-là</strong> pour désigner un groupe spécifique parmi d'autres.",
            "explanationAR": "كلمة 'Fleurs' مؤنث جمع. نستخدم <strong>celles-là</strong> للإشارة إلى مجموعة محددة من بين مجموعات أخرى."
            },
            {
            "id": 3,
            "category": "Pronoms Démonstratifs",
            "question": "Regarde ces deux photos : ______ est floue, mais ______ est magnifique.",
            "options": ["celui-ci / celui-là", "celle / celle", "celle-ci / celle-là", "ceux-ci / ceux-là"],
            "correctIndex": 2,
            "ruleTitle": "Celle-ci / Celle-là (Opposition)",
            "explanationFR": "On oppose deux objets féminins ('photos'). <strong>Celle-ci</strong> désigne la plus proche et <strong>celle-là</strong> la plus lointaine.",
            "explanationAR": "نحن نقارن بين شيئين مؤنثين ('photos'). <strong>Celle-ci</strong> تشير للقريب و <strong>celle-là</strong> تشير للبعيد."
            },
            {
            "id": 4,
            "category": "Pronoms Démonstratifs",
            "question": "Mes clés ? Ce sont ______ qui sont sur la table.",
            "options": ["celles-ci", "celles", "ceux", "celle"],
            "correctIndex": 1,
            "ruleTitle": "Celles (Forme simple)",
            "explanationFR": "On utilise la forme simple <strong>celles</strong> car elle est suivie d'une proposition relative introduite par 'qui'.",
            "explanationAR": "نستخدم الصيغة البسيطة <strong>celles</strong> لأنها متبوعة بجملة صلة تبدأ بـ 'qui'."
            },
            {
            "id": 5,
            "category": "Pronoms Démonstratifs",
            "question": "Il y a deux chemins : ______ mène au village, l'autre à la forêt.",
            "options": ["celle-ci", "celui", "ceux-ci", "celui-ci"],
            "correctIndex": 3,
            "ruleTitle": "Celui-ci (Désignation)",
            "explanationFR": "'Chemin' est masculin singulier. <strong>Celui-ci</strong> permet de désigner précisément l'un des deux éléments présentés.",
            "explanationAR": "كلمة 'Chemin' مذكر مفرد. نستخدم <strong>celui-ci</strong> لتمييز أحد العنصرين المعروضين بدقة."
            },
            {
            "id": 6,
            "category": "Pronoms Démonstratifs",
            "question": "Tes résultats sont meilleurs que ______ de ton frère.",
            "options": ["ceux-là", "celui", "ceux", "celles"],
            "correctIndex": 2,
            "ruleTitle": "Ceux (Suivi de 'de')",
            "explanationFR": "On utilise la forme simple <strong>ceux</strong> (masculin pluriel pour 'résultats') car elle est suivie du complément 'de'.",
            "explanationAR": "نستخدم الصيغة البسيطة <strong>ceux</strong> (جمع مذكر لـ 'résultats') لأنها متبوعة بالمضاف إليه 'de'."
            },
            {
            "id": 7,
            "category": "Pronoms Démonstratifs",
            "question": "De toutes les solutions proposées, ______ me semble la plus risquée.",
            "options": ["celui-ci", "celle", "celles-ci", "celle-ci"],
            "correctIndex": 3,
            "ruleTitle": "Celle-ci (Féminin Singulier)",
            "explanationFR": "'Solution' est féminin singulier. <strong>Celle-ci</strong> désigne la solution dont on parle actuellement.",
            "explanationAR": "كلمة 'Solution' مؤنث مفرد. نستخدم <strong>celle-ci</strong> للإشارة إلى الحل الذي نتحدث عنه حالياً."
            },
            {
            "id": 8,
            "category": "Pronoms Démonstratifs",
            "question": "Ce gâteau est bon, mais ______ est encore meilleur !",
            "options": ["celui", "celui-là", "celle-là", "ceux-là"],
            "correctIndex": 1,
            "ruleTitle": "Celui-là (Éloignement/Comparaison)",
            "explanationFR": "<strong>Celui-là</strong> marque l'opposition ou l'éloignement par rapport au premier gâteau mentionné.",
            "explanationAR": "تستخدم <strong>celui-là</strong> للإشارة إلى الفرق أو البعد مقارنة بأول قطعة حلوى تم ذكرها."
            },
  
    //---------------------------
    
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
            },
            {
                id: 14,
                category: "Démonstratifs",
                question: "Regarde ______ photo dans ma main.",
                options: ["ce", "cet", "cette", "ces"],
                correctIndex: 2,
                ruleTitle: "Cette (Féminin Singulier)",
                explanationFR: "On utilise <strong>Cette</strong> devant un nom féminin singulier (une photo -> cette photo).",
                explanationAR: "نستخدم <strong>Cette</strong> أمام الاسم المفرد المؤنث (une photo -> cette photo)."
            },
            {
                id: 15,
                category: "Démonstratifs",
                question: "Vois-tu ______ oiseaux dans le ciel ?",
                options: ["ce", "cet", "cette", "ces"],
                correctIndex: 3,
                ruleTitle: "Ces (Pluriel)",
                explanationFR: "On utilise <strong>Ces</strong> devant tous les noms au pluriel, qu'ils soient masculins ou féminins (des oiseaux -> ces oiseaux).",
                explanationAR: "نستخدم <strong>Ces</strong> أمام جميع الأسماء في صيغة الجمع، سواء كانت مذكرًا أو مؤنثًا (des oiseaux -> ces oiseaux)."
            },
            {
                id: 16,
                category: "Démonstratifs",
                question: "Sont-ce ______ chaussures près de la porte ?",
                options: ["ce", "cet", "cette", "ces"],
                correctIndex: 3,
                ruleTitle: "Ces (Pluriel)",
                explanationFR: "Comme pour les oiseaux, 'chaussures' est au pluriel. On utilise donc <strong>Ces</strong>.",
                explanationAR: "كلمة 'chaussures' (أحذية) في صيغة الجمع، لذا نستخدم <strong>Ces</strong>."
            },
            {
                id: 17,
                category: "Démonstratifs",
                question: "______ bâtiment là-bas est la nouvelle bibliothèque.",
                options: ["Ce", "Cet", "Cette", "Ces"],
                correctIndex: 0,
                ruleTitle: "Ce (Masculin Consonne)",
                explanationFR: "On utilise <strong>Ce</strong> devant un nom masculin singulier qui commence par une consonne (un bâtiment -> ce bâtiment).",
                explanationAR: "نستخدم <strong>Ce</strong> أمام الاسم المفرد المذكر الذي يبدأ بحرف ساكن (un bâtiment -> ce bâtiment)."
            },
            {
                id: 18,
                category: "Démonstratifs",
                question: "Je n'aime pas ______ pommes dans mon assiette.",
                options: ["ce", "cet", "cette", "ces"],
                correctIndex: 3,
                ruleTitle: "Ces (Pluriel)",
                explanationFR: "Les 'pommes' sont au pluriel. Le démonstratif pluriel est toujours <strong>Ces</strong>.",
                explanationAR: "كلمة 'pommes' (تفاح) في صيغة الجمع، وأداة الإشارة للجمع هي دائمًا <strong>Ces</strong>."
            },
            {
                id: 19,
                category: "Démonstratifs",
                question: "J'adore ______ arbre dans ton jardin.",
                options: ["ce", "cet", "cette", "ces"],
                correctIndex: 1,
                ruleTitle: "Cet (Masculin Voyelle/H)",
                explanationFR: "Cas particulier : On utilise <strong>Cet</strong> devant un nom masculin singulier qui commence par une voyelle ou un 'h' muet (un arbre -> cet arbre) pour faire la liaison.",
                explanationAR: "حالة خاصة: نستخدم <strong>Cet</strong> أمام الاسم المفرد المذكر الذي يبدأ بحرف متحرك أو 'h' صامتة لتسهيل النطق."
            },
            {
                id: 20,
                category: "Prépositions (Pays)",
                question: "Je rêve de voyager ______ France.",
                options: ["au", "en", "à", "aux"],
                correctIndex: 1,
                ruleTitle: "En (Pays Féminin)",
                explanationFR: "La France est un pays féminin (elle finit par 'e'). On utilise <strong>En</strong> devant les pays féminins.",
                explanationAR: "فرنسا (La France) دولة مؤنثة (تنتهي بحرف 'e'). نستخدم <strong>En</strong> أمام الدول المؤنثة."
            },
            {
                id: 21,
                category: "Prépositions (Pays)",
                question: "Mon ami habite ______ Maroc.",
                options: ["en", "au", "à", "aux"],
                correctIndex: 1,
                ruleTitle: "Au (Pays Masculin)",
                explanationFR: "Le Maroc est un pays masculin (il ne finit pas par 'e'). On utilise <strong>Au</strong> devant les pays masculins commençant par une consonne.",
                explanationAR: "المغرب (Le Maroc) دولة مذكرة (لا تنتهي بحرف 'e'). نستخدم <strong>Au</strong> أمام الدول المذكرة التي تبدأ بحرف ساكن."
            },
            {
                id: 22,
                category: "Prépositions (Pays)",
                question: "Il va travailler ______ Portugal l'année prochaine.",
                options: ["en", "au", "à", "aux"],
                correctIndex: 1,
                ruleTitle: "Au (Pays Masculin)",
                explanationFR: "Le Portugal est masculin. On dit donc <strong>Au</strong> Portugal.",
                explanationAR: "البرتغال (Le Portugal) دولة مذكرة. لذلك نقول <strong>Au</strong> Portugal."
            },
            {
                id: 23,
                category: "Prépositions (Pays)",
                question: "Nous partons ______ Italie demain.",
                options: ["au", "en", "à", "aux"],
                correctIndex: 1,
                ruleTitle: "En (Voyelle)",
                explanationFR: "L'Italie commence par une voyelle. Devant un pays commençant par une voyelle (même masculin comme l'Iran), on utilise toujours <strong>En</strong>.",
                explanationAR: "إيطاليا (L'Italie) تبدأ بحرف متحرك. أمام أي دولة تبدأ بحرف متحرك (حتى لو كانت مذكرة مثل إيران)، نستخدم دائمًا <strong>En</strong>."
            },
            {
                id: 24,
                category: "Singulier vs Pluriel",
                question: "Je dois appeler ce ______ pour avoir un devis.",
                options: ["commercial", "commerciaux", "commerce", "commerciales"],
                correctIndex: 0,
                ruleTitle: "Singulier (-AL)",
                explanationFR: "Le mot 'ce' indique le singulier. Le singulier des mots finissant par ce son s'écrit souvent <strong>-al</strong> (un commercial, un journal).",
                explanationAR: "كلمة 'ce' تشير للمفرد. المفرد في هذه الحالة ينتهي بـ <strong>-al</strong> (مثل un commercial)."
            },
            {
                id: 25,
                category: "Singulier vs Pluriel",
                question: "Tous ces ______ ont dépassé leurs objectifs.",
                options: ["commercial", "commerciaux", "commerce", "commercialement"],
                correctIndex: 1,
                ruleTitle: "Pluriel (-AUX)",
                explanationFR: "Le mot 'ces' indique le pluriel. Les mots finissant par <strong>-al</strong> au singulier font leur pluriel en <strong>-aux</strong> (un commercial -> des commerciaux).",
                explanationAR: "كلمة 'ces' تشير للجمع. الكلمات التي تنتهي بـ <strong>-al</strong> في المفرد تجمع بـ <strong>-aux</strong> (un commercial -> des commerciaux)."
            },
            {
                id: 26,
                category: "Singulier vs Pluriel",
                question: "Il y a deux grands centres ______ dans cette ville.",
                options: ["commercial", "commerciaux", "commercials", "commerce"],
                correctIndex: 1,
                ruleTitle: "Accord Adjectif (-AUX)",
                explanationFR: "Ici, 'commerciaux' est un adjectif qui s'accorde avec 'centres' (pluriel). Un centre commercial -> Des centres commerciaux.",
                explanationAR: "هنا 'commerciaux' صفة تتبع الموصوف 'centres' في الجمع. (Un centre commercial -> Des centres commerciaux)."
            },
            {
                id: 27,
                category: "Nom vs Adjectif",
                question: "Pour avoir un bon style, il faut éviter la ______.",
                options: ["redondante", "redondance", "redondant", "redondances"],
                correctIndex: 1,
                ruleTitle: "Nom (Redondance)",
                explanationFR: "Ici, nous avons l'article 'la' qui introduit un nom féminin. <strong>La redondance</strong> est le nom qui désigne la répétition inutile.",
                explanationAR: "هنا لدينا أداة التعريف 'la' التي تسبق الاسم المؤنث. <strong>Redondance</strong> هو الاسم الذي يعني التكرار غير الضروري."
            },
            {
                id: 28,
                category: "Nom vs Adjectif",
                question: "Cette explication est inutilement ______.",
                options: ["redondance", "redondant", "redondante", "redondances"],
                correctIndex: 2,
                ruleTitle: "Adjectif (Redondante)",
                explanationFR: "On cherche un adjectif pour qualifier 'cette explication' (féminin singulier). L'adjectif doit donc être <strong>redondante</strong>.",
                explanationAR: "نبحث عن صفة لوصف 'cette explication' (مفرد مؤنث). لذا يجب أن تكون الصفة <strong>redondante</strong>."
            },
            {
                id: 29,
                category: "Verbe Devoir (Temps)",
                question: "Tu ______ faire plus de sport, c'est bon pour la santé.",
                options: ["dois", "devrais", "devras", "as dû"],
                correctIndex: 1,
                ruleTitle: "Conditionnel (Le Conseil)",
                explanationFR: "Ici, c'est une suggestion ou un conseil poli, pas un ordre strict. On utilise donc le **Conditionnel Présent** : 'Tu devrais' (You should).",
                explanationAR: "هنا نقدم اقتراحًا أو نصيحة مهذبة، وليس أمرًا صارمًا. لذلك نستخدم **صيغة الشرط** : 'Tu devrais' (ينبغي عليك)."
            },
            {
                id: 30,
                category: "Verbe Devoir (Temps)",
                question: "Attention ! Tu ______ t'arrêter au feu rouge.",
                options: ["devrais", "devais", "dois", "aurais dû"],
                correctIndex: 2,
                ruleTitle: "Présent (L'Obligation)",
                explanationFR: "C'est une règle absolue et immédiate (loi). On utilise le **Présent de l'Indicatif** pour une obligation forte : 'Tu dois' (You must).",
                explanationAR: "هذه قاعدة مطلقة وفورية (قانون). نستخدم **المضارع** للتعبير عن الالتزام القوي: 'Tu dois' (يجب عليك)."
            },
            {
                id: 31,
                category: "Verbe Devoir (Temps)",
                question: "Hier, j'______ attendre mon collègue pendant une heure.",
                options: ["ai dû", "devrais", "dois", "devrai"],
                correctIndex: 0,
                ruleTitle: "Passé Composé (Action Terminée)",
                explanationFR: "L'action est passée et terminée (hier). On utilise le **Passé Composé** : 'J'ai dû' (I had to). Cela marque un événement ponctuel.",
                explanationAR: "الحدث ماضٍ ومنتهٍ (أمس). نستخدم **الماضي المركب**: 'J'ai dû' (اضطررت لـ). هذا يشير إلى حدث محدد."
            },
            {
                id: 32,
                category: "Verbe Devoir (Temps)",
                question: "Quand j'étais petit, je ______ me coucher à 20h tous les soirs.",
                options: ["ai dû", "devais", "devrais", "devrai"],
                correctIndex: 1,
                ruleTitle: "Imparfait (Habitude Passée)",
                explanationFR: "C'est un souvenir d'une habitude dans le passé. On utilise l'**Imparfait** : 'Je devais' (I used to have to / I was supposed to).",
                explanationAR: "هذه ذكرى لعادة في الماضي. نستخدم **الماضي الناقص**: 'Je devais' (كان عليّ أن / اعتدت أن)."
            },
            {
                id: 33,
                category: "Verbe Devoir (Temps)",
                question: "Dommage ! Tu ______ venir avec nous à la fête hier soir.",
                options: ["devras", "dois", "aurais dû", "devrais"],
                correctIndex: 2,
                ruleTitle: "Conditionnel Passé (Le Regret)",
                explanationFR: "On exprime un regret sur quelque chose qui ne s'est pas passé. On utilise le **Conditionnel Passé** : 'Tu aurais dû' (You should have).",
                explanationAR: "نعبر عن الندم على شيء لم يحدث. نستخدم **الشرط الماضي**: 'Tu aurais dû' (كان ينبغي عليك)."
            },
            {
                id: 34,
                category: "Féminin/Masculin (-if/-ive)",
                question: "Mon frère est très ______, il court tous les jours.",
                options: ["sportive", "sportif", "sportives", "sportifs"],
                correctIndex: 1,
                ruleTitle: "Masculin (-if)",
                explanationFR: "On parle du 'frère' (masculin). L'adjectif masculin finit par <strong>-if</strong> (sportif).",
                explanationAR: "نتحدث عن 'الأخ' (مذكر). الصفة المذكرة تنتهي بـ <strong>-if</strong> (sportif)."
            },
            {
                id: 35,
                category: "Féminin/Masculin (-if/-ive)",
                question: "Ma sœur est aussi très ______.",
                options: ["sportif", "sportive", "sportifs", "sportives"],
                correctIndex: 1,
                ruleTitle: "Féminin (-ive)",
                explanationFR: "On parle de la 'sœur' (féminin). L'adjectif féminin change le <strong>-if</strong> en <strong>-ive</strong> (sportive).",
                explanationAR: "نتحدث عن 'الأخت' (مؤنث). الصفة المؤنثة تغير الـ <strong>-if</strong> إلى <strong>-ive</strong> (sportive)."
            },
            {
                id: 36,
                category: "Féminin/Masculin (-if/-ive)",
                question: "Ce nouveau projet est très ______.",
                options: ["créative", "créatif", "créatives", "créatifs"],
                correctIndex: 1,
                ruleTitle: "Masculin (-if)",
                explanationFR: "'Projet' est un mot masculin. On utilise donc la forme en <strong>-if</strong> : créatif.",
                explanationAR: "'Projet' كلمة مذكرة. لذا نستخدم الصيغة المنتهية بـ <strong>-if</strong> : créatif."
            },
            {
                id: 37,
                category: "Féminin/Masculin (-if/-ive)",
                question: "Elle a trouvé une solution ______ au problème.",
                options: ["créatif", "créative", "créatifs", "créatives"],
                correctIndex: 1,
                ruleTitle: "Féminin (-ive)",
                explanationFR: "'Solution' est féminin (une solution). L'adjectif devient féminin : <strong>créative</strong>.",
                explanationAR: "'Solution' مؤنث (une solution). الصفة تصبح مؤنثة: <strong>créative</strong>."
            },
            {
                id: 38,
                category: "Féminin/Masculin (-f/-ve)",
                question: "C'est un chien très ______.",
                options: ["vive", "vif", "vives", "vifs"],
                correctIndex: 1,
                ruleTitle: "Masculin (-f)",
                explanationFR: "Pour le masculin (un chien), l'adjectif finit par <strong>-f</strong> (vif).",
                explanationAR: "للمذكر (un chien)، تنتهي الصفة بـ <strong>-f</strong> (vif)."
            },
            {
                id: 39,
                category: "Féminin/Masculin (-f/-ve)",
                question: "J'ai ressenti une douleur ______ au bras.",
                options: ["vif", "vive", "vifs", "vives"],
                correctIndex: 1,
                ruleTitle: "Féminin (-ve)",
                explanationFR: "'Douleur' est féminin (une douleur). Le <strong>-f</strong> du masculin se transforme en <strong>-ve</strong> au féminin (vif -> vive).",
                explanationAR: "'Douleur' مؤنث. الـ <strong>-f</strong> في المذكر تتحول إلى <strong>-ve</strong> في المؤنث (vif -> vive)."
            },
            {
                id: 40,
                category: "Accord Participe Passé",
                question: "Les pièces comptables que j'ai ______.",
                options: ["comptabilisé", "comptabilisée", "comptabilisés", "comptabilisées"],
                correctIndex: 3,
                ruleTitle: "COD avant Avoir",
                explanationFR: "La règle d'or : Avec <strong>avoir</strong>, si le COD (<em>que</em> = les pièces comptables) est placé <strong>avant</strong> le verbe, on accorde. 'Pièces' est féminin pluriel -> <strong>comptabilisées</strong>.",
                explanationAR: "القاعدة الذهبية: مع <strong>avoir</strong>، إذا جاء المفعول به (الذي = les pièces comptables) <strong>قبل</strong> الفعل، نطبق المطابقة. كلمة 'Pièces' جمع مؤنث -> <strong>comptabilisées</strong>."
            },
            {
                id: 41, 
                category: "Connecteurs Logiques (C1)", 
                question: "Il est très compétent, ______ il manque parfois de confiance en lui.", 
                options: ["néanmoins", "parce que", "puisque", "donc"], 
                correctIndex: 0, 
                ruleTitle: "L'Opposition (Soutenu)",
                explanationFR: "<strong>Néanmoins</strong> est un connecteur d'opposition de registre soutenu (C1), synonyme de 'pourtant' ou 'cependant'.",
                explanationAR: "<strong>Néanmoins</strong> هي أداة ربط تعبر عن التعارض بمستوى لغوي رفيع، ومرادفها 'pourtant'."
            },
             {
                id: 42, category: "Confusion Fréquente", 
                question: "Il a beaucoup révisé, ______ il a raté son examen.", 
                options: ["pourtant", "portant", "pour temps", "port temps"], 
                correctIndex: 0, 
                ruleTitle: "Pourtant vs Portant",
                explanationFR: "<strong>Pourtant</strong> (cependant) exprime l'opposition. <strong>Portant</strong> est le participe présent du verbe porter (ex: un mur portant).",
                explanationAR: "<strong>Pourtant</strong> (لكن/مع ذلك) تعبر عن التناقض. أما <strong>Portant</strong> فهي اسم الفاعل من فعل 'porter' (يحمل)."
            },
            {
                id: 43,
                category: "Connecteurs Logiques",
                question: "Dépêche-toi, ______ tu vas rater ton train !",
                options: ["autrement", "autre", "autres", "autre part"],
                correctIndex: 0,
                ruleTitle: "Autrement (Sinon)",
                explanationFR: "Ici, <strong>autrement</strong> signifie 'sinon' (otherwise). On l'utilise pour annoncer une conséquence si on ne fait pas quelque chose.",
                explanationAR: "هنا، <strong>autrement</strong> تعني 'وإلا' (sinon). نستخدمها للتحذير من عاقبة عدم القيام بشيء ما."
            },
            {
                id: 44,
                category: "Vocabulaire",
                question: "Ce week-end, je vais ______ à ma tante.",
                options: ["visiter", "rendre visite", "regarder", "voir"],
                correctIndex: 1,
                ruleTitle: "Visiter vs Rendre visite",
                explanationFR: "Attention ! On <strong>visite</strong> un lieu (une ville, un musée), mais on <strong>rend visite</strong> à une personne.",
                explanationAR: "انتبه! نستخدم <strong>visiter</strong> للأماكن (مدينة، متحف)، بينما نستخدم <strong>rendre visite</strong> للأشخاص."
            },
            {
                id: 45,
                category: "Expressions",
                question: "Je ne sais pas quoi faire, je suis vraiment dans le ______.",
                options: ["pétrin", "pain", "pépin", "chemin"],
                correctIndex: 0,
                ruleTitle: "Être dans le pétrin",
                explanationFR: "'Être dans le pétrin' est une expression familière qui signifie être dans une situation très difficile ou avoir de gros ennuis.",
                explanationAR: "'Être dans le pétrin' تعبير يعني الوقوع في ورطة كبيرة أو مأزق صعب."
            },
            {
                id: 46,
                category: "Expressions",
                question: "J'ai ______ qu'il allait y avoir une grève demain.",
                options: ["entendu dire", "entendu parler", "entendu dit", "entendu raconter"],
                correctIndex: 0,
                ruleTitle: "Entendre dire que",
                explanationFR: "On utilise <strong>entendre dire que</strong> suivi d'une phrase pour rapporter une information (I heard that...). On utilise 'entendre parler de' avec un nom (I heard about...).",
                explanationAR: "نستخدم <strong>entendre dire que</strong> متبوعة بجملة لنقل معلومة (سمعت أن...). بينما نستخدم 'entendre parler de' مع الأسماء (سمعت عن...)."
            },


            //----------
            
        ];