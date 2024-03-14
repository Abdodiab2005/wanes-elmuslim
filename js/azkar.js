// Switch Between Azkar
let morningAzkarBtn = document.getElementById("morningAzkarBtn");
let eveningAzkarBtn = document.getElementById("EveningAzkarBtn");
let afterPrayAzkarBtn = document.getElementById("AfterPrayAzkarBtn");
let befSleepBtn = document.getElementById("befSleepAzkarBtn");
let aftSleepBtn = document.getElementById("aftSleepAzkarBtn");

// Control Buttons
let nextBtn = document.getElementById("next-Btn");
let progBar = document.getElementById("prog-bar");
let prevBtn = document.getElementById("previous-Btn");

// display
let appearContent = document.getElementById("display-items");
let infoContent = document.getElementById("info-content");
let zekrInfo = document.getElementById("zekr-info-content");
let progNum = document.getElementById("progress-num");
let CounterBtn = document.getElementById("azkarBtn");
let basmala = document.getElementById("basmala");
let visitors;
if (visitors === undefined) {
  visitors = 0;
}

window.onload = () => {
  visitors++;
  console.log(visitors);
};
// !Morning Azkar
const morningAzkar = [
  "من فضائل الذكر عموما وأذكار الصباح والمساء خصوصا ما جاء في الصحيحين وغيرهما أن رسول الله صلى الله عليه وسلم قال: من قال لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير في يوم مائة مرة كانت له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزا من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك.",
  "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.",
  "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
  "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ",
  "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً",
  "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك",
  "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر",
  "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم",
  "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم",
  "اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور",
  "أَصْبَـحْـنا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ",
  "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه",
  "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ",
  "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ",
  "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي",
  "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ",
  "أَصْبَـحْـنا وَأَصْبَـحْ المُـلكُ للهِ رَبِّ العـالَمـين ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ خَـيْرَ هـذا الـيَوْم ، فَـتْحَهُ ، وَنَصْـرَهُ ، وَنـورَهُ وَبَـرَكَتَـهُ ، وَهُـداهُ ، وَأَعـوذُ بِـكَ مِـنْ شَـرِّ ما فـيهِ وَشَـرِّ ما بَعْـدَه",
  "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم",
  "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق",
  "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
  "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
  "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ",
  "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ",
  "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ",
  "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا",
  "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ",
  "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ",
  "سُبْحـانَ اللهِ وَبِحَمْـدِهِ",
  "أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ",
];

const morningAzkarInfo = [
  "",
  "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح",
  "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)",
  "",
  "",
  "",
  "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح",
  "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة",
  "من قالها أعتقه الله من النار",
  "من قالها حين يصبح أدى شكر يومه",
  "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة",
  "لم يضره من الله شيء",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة",
  "",
  "",
  "",
  "",
  "",
  "ذكر طيب",
  "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان",
  "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ",
  "مائة حسنة، ومُحيت عنه مائة سيئة، وكانت له حرزاً من الشيطان حتى يمسى",
];

const morningAzkarCounter = [
  0, 1, 3, 3, 3, 1, 3, 4, 1, 7, 3, 1, 1, 3, 3, 3, 1, 3, 1, 1, 3, 10, 3, 3, 3, 3,
  3, 3, 100, 100, 3,
];

const morningAzkarBasmala = [
  "",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

console.log(morningAzkarBasmala.length);
// Current Index To Control / Switch To Next / Previous Zekr
let currentMorningAzkarIndex = 0;
let morningAzkarInfoIndex = 0;
let morningAzkarCounterIndex = 0;
let morningAzkarBasmalaIndex = 0;

// function displays the Current Zekr By Index
function displayMorningAzkar() {
  appearContent.innerText = morningAzkar[currentMorningAzkarIndex];
}

function displayMorningAzkarInfo() {
  zekrInfo.innerText = morningAzkarInfo[morningAzkarInfoIndex];
}

function displayMorningAzkarCounter() {
  CounterBtn.innerText = morningAzkarCounter[morningAzkarCounterIndex];
}

function displayMorningAzkarBasmala() {
  basmala.innerText = morningAzkarBasmala[morningAzkarBasmalaIndex];
}

// Next Zekr Function
function nextMorningAzkar() {
  if (currentMorningAzkarIndex < morningAzkar.length - 1) {
    currentMorningAzkarIndex++;
    progNum.innerText = `${currentMorningAzkarIndex} / 30`;
    displayMorningAzkar();
  }
  if (morningAzkarInfoIndex < morningAzkarInfo.length - 1) {
    morningAzkarInfoIndex++;
    displayMorningAzkarInfo();
  }
  if (morningAzkarCounterIndex < morningAzkarCounter.length - 1) {
    morningAzkarCounterIndex++;
    displayMorningAzkarCounter();
  }
  if (morningAzkarBasmalaIndex < morningAzkarBasmala.length - 1) {
    morningAzkarBasmalaIndex++;
    displayMorningAzkarBasmala();
  }
}

// Prev Zekr Function
function prevMorningAzkar() {
  if (currentMorningAzkarIndex > 0) {
    currentMorningAzkarIndex--;
    displayMorningAzkar();
    progNum.innerText = `${currentMorningAzkarIndex} / 30`;
  }
  if (morningAzkarInfoIndex > 0) {
    morningAzkarInfoIndex--;
    displayMorningAzkarInfo();
  }
  if (morningAzkarCounterIndex > 0) {
    morningAzkarCounterIndex--;
    displayMorningAzkarCounter();
  }
  if (morningAzkarBasmalaIndex > 0) {
    morningAzkarBasmalaIndex--;
    displayMorningAzkarBasmala();
  }
}

// Call the Functions on click Event
morningAzkarBtn.onclick = () => {
  displayMorningAzkar();
  displayMorningAzkarInfo();
  displayMorningAzkarBasmala();
  nextBtn.addEventListener("click", nextMorningAzkar);
  prevBtn.addEventListener("click", prevMorningAzkar);
  progNum.innerText = `${currentMorningAzkarIndex} / 30`;
  // morningAzkarBtn1.classList.add("act");
};

// Counter Button
CounterBtn.onclick = () => {
  if (CounterBtn.innerText > 0) {
    CounterBtn.innerText--;
  }
};

// ? progress bar
// progressBar.addEventListener("input", () => {
//   if (morningAzkarBtn1.classList.contains("act")) {
//     currentMorningAzkarIndex = parseInt(progressBar.value) - 1;
//     displayMorningAzkar();
//     progNum.innerText = `${currentMorningAzkarIndex} / 30`;
//   }
// });

// !Evening Azkar
const EveningAzkar = [
  "من فضائل الذكر عموما وأذكار الصباح والمساء خصوصا ما جاء في الصحيحين وغيرهما أن رسول الله صلى الله عليه وسلم قال: من قال لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير في يوم مائة مرة كانت له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزا من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا أحد عمل أكثر من ذلك.",
  "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ.",
  "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ.",
  "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
  "أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر",
  "اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ ",
  "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً",
  "اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك",
  "اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر",
  "حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم",
  "بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم ",
  "اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ",
  "أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ",
  "سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه",
  "اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ",
  "اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ",
  "اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي",
  "يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ",
  "أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا",
  "اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم",
  "أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق",
  "اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد",
  "اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
  "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ",
  "أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ",
  "يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ",
  "لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ",
  "اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ",
  "سُبْحـانَ اللهِ وَبِحَمْـدِهِ",
];

const EveningAzkarInfo = [
  "",
  "من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح",
  "من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه",
  "من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)",
  "",
  "",
  "",
  "من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح",
  "من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة",
  "من قالها أعتقه الله من النار",
  "من قالها حين يمسى أدى شكر يومه",
  "من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة",
  "لم يضره من الله شيء",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة",
  "",
  "",
  "",
  "",
  "كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان",
  "ذكر طيب",
  "حُطَّتْ خَطَايَاهُ وَإِنْ كَانَتْ مِثْلَ زَبَدِ الْبَحْرِ. لَمْ يَأْتِ أَحَدٌ يَوْمَ الْقِيَامَةِ بِأَفْضَلَ مِمَّا جَاءَ بِهِ إِلَّا أَحَدٌ قَالَ مِثْلَ مَا قَالَ أَوْ زَادَ عَلَيْهِ",
];

const EveningAzkarCounter = [
  0, 1, 1, 3, 3, 3, 1, 1, 3, 4, 1, 7, 3, 1, 1, 3, 3, 3, 1, 3, 1, 1, 3, 10, 3, 3,
  3, 3, 100, 1, 100,
];

const EveningAzkarBasmala = [
  "",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

let eveningAzkarIndex = 0;
let eveningAzkarInfoIndex = 0;
let eveningAzkarCounterIndex = 0;
let eveningAzkarBasmalaIndex = 0;

// function displays the Current Zekr By Inde
function displayEveningAzkar() {
  appearContent.innerText = EveningAzkar[eveningAzkarIndex];
}

function displayEveningAzkarInfo() {
  zekrInfo.innerText = EveningAzkarInfo[eveningAzkarInfoIndex];
}

function displayEveningAzkarCounter() {
  CounterBtn.innerText = EveningAzkarCounter[eveningAzkarCounterIndex];
}
function displayEveningAzkarBasmala() {
  basmala.innerText = EveningAzkarBasmala[eveningAzkarBasmalaIndex];
}

// Next Zekr Function
function nextEveningAzkar() {
  if (eveningAzkarIndex < EveningAzkar.length - 1) {
    eveningAzkarIndex++;
    displayEveningAzkar();
    progNum.innerText = `${eveningAzkarIndex} / 30`;
  }
  if (eveningAzkarInfoIndex < EveningAzkarInfo.length - 1) {
    eveningAzkarInfoIndex++;
    displayEveningAzkarInfo();
  }
  if (eveningAzkarCounterIndex < EveningAzkarCounter.length - 1) {
    eveningAzkarCounterIndex++;
    displayEveningAzkarCounter();
  }
  if (eveningAzkarBasmalaIndex < EveningAzkarBasmala.length - 1) {
    eveningAzkarBasmalaIndex++;
    displayEveningAzkarBasmala();
  }
}

// Prev Zekr Function
function prevEveningAzkar() {
  if (eveningAzkarIndex > 0) {
    eveningAzkarIndex--;
    displayEveningAzkar();
    progNum.innerText = `${eveningAzkarIndex} / 30`;
  }
  if (eveningAzkarInfoIndex > 0) {
    eveningAzkarInfoIndex--;
    displayEveningAzkarInfo();
  }
  if (eveningAzkarCounterIndex > 0) {
    eveningAzkarCounterIndex--;
    displayEveningAzkarCounter();
  }
  if (eveningAzkarBasmalaIndex > 0) {
    eveningAzkarBasmalaIndex--;
    displayEveningAzkarBasmala();
  }
}

// Call the Functions on click Event
eveningAzkarBtn.onclick = () => {
  displayEveningAzkar();
  displayEveningAzkarInfo();
  nextBtn.addEventListener("click", nextEveningAzkar);
  prevBtn.addEventListener("click", prevEveningAzkar);
  progNum.innerText = `${eveningAzkarIndex} / 30`;
};

// !After Pray Azkar
const afterPrayAzkar = [
  `أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله.
  اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام`,
  "لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد",
  "لا إلهَ إلاّ اللّه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون",
  "سبحان الله",
  "الحمدلله",
  "الله أكبر",
  "لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير",
  "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
  "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  "لا إلهَ إلاّ اللّهُ وحْـدَهُ لا شريكَ لهُ، لهُ المُلكُ ولهُ الحَمْد، يُحيـي وَيُمـيتُ وهُوَ على كُلّ شيءٍ قدير",
  "اللّهُـمَّ إِنِّـي أَسْأَلُـكَ عِلْمـاً نافِعـاً وَرِزْقـاً طَيِّـباً ، وَعَمَـلاً مُتَقَـبَّلاً",
  "اللَّهُمَّ أَجِرْنِي مِنْ النَّار",
  "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
];

const afterPrayAzkarInfo = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى",
  "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى",
  "ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى",
  "[آية الكرسى - البقرة 255]",
  "عَشْر مَرّات بَعْدَ المَغْرِب وَالصّـبْح",
  "بَعْد السّلامِ من صَلاةِ الفَجْر",
  "بعد صلاة الصبح والمغرب",
  "",
];

const afterPrayAzkarCounter = [1, 1, 1, 33, 33, 33, 1, 3, 3, 3, 1, 10, 1, 7, 1];

const AftPrayAzkarBasmala = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "",
  "",
  "",
  "",
];

let afterPrayAzkarIndex = 0;
let afterPrayAzkarInfoIndex = 0;
let afterPrayAzkarCounterIndex = 0;
let AftPrayAzkarBasmalaIndex = 0;

// function displays the Current Zekr By Inde
function displayAfterPrayAzkar() {
  appearContent.innerText = afterPrayAzkar[afterPrayAzkarIndex];
}

function displayAfterPrayAzkarInfo() {
  zekrInfo.innerText = afterPrayAzkarInfo[afterPrayAzkarInfoIndex];
}

function displayAfterPrayAzkarCounter() {
  CounterBtn.innerText = afterPrayAzkarCounter[afterPrayAzkarCounterIndex];
}
function displayAfterPrayAzkarBamala() {
  basmala.innerText = AftPrayAzkarBasmala[AftPrayAzkarBasmalaIndex];
}

// Next Zekr Function
function nextAfterPrayAzkar() {
  if (afterPrayAzkarIndex < afterPrayAzkar.length - 1) {
    afterPrayAzkarIndex++;
    displayAfterPrayAzkar();
    progNum.innerText = `${afterPrayAzkarIndex} / 14`;
  }
  if (afterPrayAzkarInfoIndex < afterPrayAzkarInfo.length - 1) {
    afterPrayAzkarInfoIndex++;
    displayAfterPrayAzkarInfo();
  }
  if (afterPrayAzkarCounterIndex < afterPrayAzkarCounter.length - 1) {
    afterPrayAzkarCounterIndex++;
    displayAfterPrayAzkarCounter();
  }
  if (AftPrayAzkarBasmalaIndex < AftPrayAzkarBasmala.length - 1) {
    AftPrayAzkarBasmalaIndex++;
    displayAfterPrayAzkarBamala();
  }
}

// Prev Zekr Function
function prevAfterPrayAzkar() {
  if (afterPrayAzkarIndex > 0) {
    afterPrayAzkarIndex--;
    displayAfterPrayAzkar();
    progNum.innerText = `${afterPrayAzkarIndex} / 14`;
  }
  if (afterPrayAzkarInfoIndex > 0) {
    afterPrayAzkarInfoIndex--;
    displayAfterPrayAzkarInfo();
  }
  if (afterPrayAzkarCounterIndex > 0) {
    afterPrayAzkarCounterIndex--;
    displayAfterPrayAzkarCounter();
  }
  if (AftPrayAzkarBasmalaIndex > 0) {
    AftPrayAzkarBasmalaIndex--;
    displayAfterPrayAzkarBamala();
  }
}

// Call the Functions on click Event
afterPrayAzkarBtn.onclick = () => {
  displayAfterPrayAzkar();
  displayAfterPrayAzkarCounter();
  displayAfterPrayAzkarInfo();
  nextBtn.addEventListener("click", nextAfterPrayAzkar);
  prevBtn.addEventListener("click", prevAfterPrayAzkar);
  progNum.innerText = `${afterPrayAzkarIndex} / 14`;
};

// !Before Sleep Azkar
const befSleepAzkar = [
  "قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ، مِن شَرِّ مَا خَلَقَ، وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ، وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ، وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
  "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ",
  "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ",
  "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها . اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة",
  "بِاسْمِكَ رَبِّـي وَضَعْـتُ جَنْـبي ، وَبِكَ أَرْفَعُـه، فَإِن أَمْسَـكْتَ نَفْسـي فارْحَـمْها ، وَإِنْ أَرْسَلْتَـها فاحْفَظْـها بِمـا تَحْفَـظُ بِه عِبـادَكَ الصّـالِحـين",
  "اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك",
  "بِاسْـمِكَ اللّهُـمَّ أَحْـيا وَأَمـوتُ، الًّلهُمَّ بِكَ أَمسَينَا وَبِكَ أَصبَحنَا وَبٍكَ نَحْيَا وَبِكَ نَمُوت وَإِليَكَ النُّشَورْ ",
  "اللّهُـمَّ عالِـمَ الغَـيبِ وَالشّـهادةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كُـلِّ شَـيءٍ ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي، وَمِن شَـرِّ الشَّيْـطانِ وَشِـرْكِه، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم",
  "الـحَمْدُ للهِ الَّذي أَطْـعَمَنا وَسَقـانا، وَكَفـانا، وَآوانا، فَكَـمْ مِمَّـنْ لا كـافِيَ لَـهُ وَلا مُـؤْوي",
  "سُبْحَانَ اللَّهِ",
  "الْحَمْدُ لِلَّهِ",
  "اللَّهُ أَكْبَرُ",
  "آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَسِينَا أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
  "",
];

const befSleepAzkarInfo = [
  "",
  "",
  "",
  "أجير من الجن حتى يصبح",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه",
  "هي المنجية من عذاب القبر",
];

const befSleepAzkarCounter = [1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 33, 33, 33, 1, 1];
const BefSleepAzkarBasmala = [
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم",
  "",
];

let befSleepAzkarIndex = 0;
let befSleepAzkarInfoIndex = 0;
let befSleepAzkarCounterIndex = 0;
let BefSleepAzkarBasmalaIndex = 0;

// function displays the Current Zekr By Inde
function displaybefSleepAzkar() {
  appearContent.innerText = befSleepAzkar[befSleepAzkarIndex];
}

function displaybefSleepAzkarInfo() {
  zekrInfo.innerText = befSleepAzkarInfo[befSleepAzkarInfoIndex];
}

function displaybefSleepAzkarCounter() {
  CounterBtn.innerText = befSleepAzkarCounter[befSleepAzkarCounterIndex];
}
function displaybefSleepAzkarBasmala() {
  basmala.innerText = BefSleepAzkarBasmala[BefSleepAzkarBasmalaIndex];
}

// Next Zekr Function
function nextbefSleepAzkar() {
  if (befSleepAzkarIndex < befSleepAzkar.length - 1) {
    befSleepAzkarIndex++;
    displaybefSleepAzkar();
    progNum.innerText = `${befSleepAzkarIndex + 1} / 15`;
  }
  if (befSleepAzkarInfoIndex < befSleepAzkarInfo.length - 1) {
    befSleepAzkarInfoIndex++;
    displaybefSleepAzkarInfo();
  }
  if (befSleepAzkarCounterIndex < befSleepAzkarCounter.length - 1) {
    befSleepAzkarCounterIndex++;
    displaybefSleepAzkarCounter();
  }
  if (BefSleepAzkarBasmalaIndex < BefSleepAzkarBasmala.length - 1) {
    BefSleepAzkarBasmalaIndex++;
    displaybefSleepAzkarBasmala();
    if (befSleepAzkarIndex === 14) {
      var suratElmulkBtn = document.createElement("button");
      suratElmulkBtn.classList.add("btn");
      suratElmulkBtn.classList.add("surah-btn");
      suratElmulkBtn.innerText = "قراءة سورة الملك";
      appearContent.appendChild(suratElmulkBtn);
      suratElmulkBtn.onclick = () => {
        suratElmulk();
      };
    }
  }
}

let funcStatus = false;

// Prev Zekr Function
function prevbefSleepAzkar() {
  if (befSleepAzkarIndex > 0) {
    befSleepAzkarIndex--;
    displaybefSleepAzkar();
    progNum.innerText = `${befSleepAzkarIndex + 1} / 15`;
  }
  if (befSleepAzkarInfoIndex > 0) {
    befSleepAzkarInfoIndex--;
    displaybefSleepAzkarInfo();
  }
  if (befSleepAzkarCounterIndex > 0) {
    befSleepAzkarCounterIndex--;
    displaybefSleepAzkarCounter();
  }
  if (BefSleepAzkarBasmalaIndex > 0) {
    BefSleepAzkarBasmalaIndex--;
    displaybefSleepAzkarBasmala();
  }
}

// Call the Functions on click Event
befSleepAzkarBtn.onclick = () => {
  displaybefSleepAzkar();
  displaybefSleepAzkarInfo();
  displaybefSleepAzkarCounter();
  displaybefSleepAzkarBasmala();
  nextBtn.addEventListener("click", nextbefSleepAzkar);
  prevBtn.addEventListener("click", prevbefSleepAzkar);
  progNum.innerText = `${befSleepAzkarIndex + 1} / 15`;
};

// !After Sleep Azkar
const aftSleepAzkar = [
  " الحَمْدُ لله الذِي أحْيَانا بَعْدَ مَا أمَاتَنَا وإلَيْهِ النَشُور",
  "الحَمْدُ لله الذِي عَافَانِي في جَسَدِي ورَدَّ عَلَيَّ رُوحِي، وأَذِنَ لي بِذِكْرهِ",
  "لا إلَهَ إلاَّ الله وحْدَهُ لا شَرِيكَ لَهُ، لَهُ المُلْكُ ولَهُ الحَمْدُ وهُوَ على كلِّ شيءٍ قَدير",
  "سُبْحانَ الله",
  "الحَمْدُ لله",
  "لا إله إلا الله",
  "الله أكبر",
  "لا حَولَ ولا قُوةَ إلا بالله العلي العظيم",
  "اللَّهُمَّ اغْفِرْ لي",
];

const aftSleepAzkarCounter = [1, 1, 1, 33, 33, 33, 33, 1, 1];

let aftSleepAzkarIndex = 0;
let aftSleepAzkarInfoIndex = 0;
let aftSleepAzkarCounterIndex = 0;

// function displays the Current Zekr By Inde
function displayaftSleepAzkar() {
  appearContent.innerText = aftSleepAzkar[aftSleepAzkarIndex];
}

function displayaftSleepAzkarCounter() {
  CounterBtn.innerText = aftSleepAzkarCounter[aftSleepAzkarCounterIndex];
}

// Next Zekr Function
function nextaftSleepAzkar() {
  if (aftSleepAzkarIndex < aftSleepAzkar.length - 1) {
    aftSleepAzkarIndex++;
    displayaftSleepAzkar();
    progNum.innerText = `${aftSleepAzkarIndex + 1} / 9`;
  }
  if (aftSleepAzkarCounterIndex < aftSleepAzkarCounter.length - 1) {
    aftSleepAzkarCounterIndex++;
    displayaftSleepAzkarCounter();
  }
}

// Prev Zekr Function
function prevaftSleepAzkar() {
  if (aftSleepAzkarIndex > 0) {
    aftSleepAzkarIndex--;
    displayaftSleepAzkar();
    progNum.innerText = `${aftSleepAzkarIndex + 1} / 9`;
  }
  if (aftSleepAzkarCounterIndex > 0) {
    aftSleepAzkarCounterIndex--;
    displayaftSleepAzkarCounter();
  }
}

// Call the Functions on click Event
aftSleepBtn.onclick = () => {
  displayaftSleepAzkar();
  displayaftSleepAzkarCounter();
  nextBtn.addEventListener("click", nextaftSleepAzkar);
  prevBtn.addEventListener("click", prevaftSleepAzkar);
  progNum.innerText = `${aftSleepAzkarIndex + 1} / 9`;
};

// popups
function suratElmulk() {
  Swal.fire({
    title: `<strong class="surah-title">سورة الملك</strong>`,
    html: `
    <p>
    <span class="a3oz">
      أعوذ بالله من الشيطان الرجيم
    </span>
    <br>
    <span class="basmala2">
    بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
    </span>
<br>
<br>

    تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (1)

    الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلا وَهُوَ الْعَزِيزُ الْغَفُورُ (2)
    
    الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَى فِي خَلْقِ الرَّحْمَنِ مِن تَفَاوُتٍ فَارْجِعِ الْبَصَرَ هَلْ تَرَى مِن فُطُورٍ (3)
    
    ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئاً وَهُوَ حَسِيرٌ (4)
    
    وَلَقَدْ زَيَّنَّا السَّمَاء الدُّنْيَا بِمَصَابِيحَ وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ (5)
    
    وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ وَبِئْسَ الْمَصِيرُ (6)
    
    إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا وَهِيَ تَفُورُ (7)
    
    تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ سَأَلَهُمْ خَزَنَتُهَا أَلَمْ يَأْتِكُمْ نَذِيرٌ (8)
    
    قَالُوا بَلَى قَدْ جَاءَنَا نَذِيرٌ فَكَذَّبْنَا وَقُلْنَا مَا نَزَّلَ اللَّهُ مِن شَيْءٍ إِنْ أَنتُمْ إِلاَّ فِي ضَلالٍ كَبِيرٍ (9)
    
    وَقَالُوا لَوْ كُنَّا نَسْمَعُ أَوْ نَعْقِلُ مَا كُنَّا فِي أَصْحَابِ السَّعِيرِ (10)
    </p>
  `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
    <i class="fa fa-next"></i> التالي!
  `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> إغلاق
  `,
    cancelButtonAriaLabel: "Thumbs down",
  }).then((result) => {
    if (result.isConfirmed) {
      next1();
    }
  });
}
function next1() {
  Swal.fire({
    title: "<strong>سورة الملك</strong>",
    html: `
  <p>
  فَاعْتَرَفُوا بِذَنبِهِمْ فَسُحْقًا لِّأَصْحَابِ السَّعِيرِ (11)

  إِنَّ الَّذِينَ يَخْشَوْنَ رَبَّهُم بِالْغَيْبِ لَهُم مَّغْفِرَةٌ وَأَجْرٌ كَبِيرٌ (12)
  
  وَأَسِرُّوا قَوْلَكُمْ أَوِ اجْهَرُوا بِهِ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ (13)
  
  أَلا يَعْلَمُ مَنْ خَلَقَ وَهُوَ اللَّطِيفُ الْخَبِيرُ (14)
  
  هُوَ الَّذِي جَعَلَ لَكُمُ الأَرْضَ ذَلُولا فَامْشُوا فِي مَنَاكِبِهَا وَكُلُوا مِن رِّزْقِهِ وَإِلَيْهِ النُّشُورُ (15)
  
  أَأَمِنتُم مَّن فِي السَّمَاء أَن يَخْسِفَ بِكُمُ الأَرْضَ فَإِذَا هِيَ تَمُورُ (16)
  
  أَمْ أَمِنتُم مَّن فِي السَّمَاء أَن يُرْسِلَ عَلَيْكُمْ حَاصِبًا فَسَتَعْلَمُونَ كَيْفَ نَذِيرِ (17)
  
  وَلَقَدْ كَذَّبَ الَّذِينَ مِن قَبْلِهِمْ فَكَيْفَ كَانَ نَكِيرِ (18)
  
  أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ مَا يُمْسِكُهُنَّ إِلاَّ الرَّحْمَنُ إِنَّهُ بِكُلِّ شَيْءٍ بَصِيرٌ (19)
  
  أَمَّنْ هَذَا الَّذِي هُوَ جُندٌ لَّكُمْ يَنصُرُكُم مِّن دُونِ الرَّحْمَنِ إِنِ الْكَافِرُونَ إِلاَّ فِي غُرُورٍ (20)
  </p>
  `,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: `
    <i class="fa fa-next"></i> التالي!
  `,
    confirmButtonAriaLabel: "Thumbs up, great!",
    cancelButtonText: `
    <i class="fa fa-thumbs-down"></i> إغلاق
  `,
    cancelButtonAriaLabel: "Thumbs down",
  }).then((result) => {
    if (result.isConfirmed) {
      next2();
    }
  });
}
function next2() {
  Swal.fire({
    title: "<strong>سورة الملك</strong>",
    html: `
  <p>
  أَمَّنْ هَذَا الَّذِي يَرْزُقُكُمْ إِنْ أَمْسَكَ رِزْقَهُ بَل لَّجُّوا فِي عُتُوٍّ وَنُفُورٍ (21)

  أَفَمَن يَمْشِي مُكِبًّا عَلَى وَجْهِهِ أَهْدَى أَمَّن يَمْشِي سَوِيًّا عَلَى صِرَاطٍ مُّسْتَقِيمٍ (22)
  
  قُلْ هُوَ الَّذِي أَنشَأَكُمْ وَجَعَلَ لَكُمُ السَّمْعَ وَالأَبْصَارَ وَالأَفْئِدَةَ قَلِيلا مَّا تَشْكُرُونَ (23)
  
  قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الأَرْضِ وَإِلَيْهِ تُحْشَرُونَ (24)
  
  وَيَقُولُونَ مَتَى هَذَا الْوَعْدُ إِن كُنتُمْ صَادِقِينَ (25)
  
  قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُّبِينٌ (26)
  
  فَلَمَّا رَأَوْهُ زُلْفَةً سِيئَتْ وُجُوهُ الَّذِينَ كَفَرُوا وَقِيلَ هَذَا الَّذِي كُنتُم بِهِ تَدَّعُونَ (27)
  
  قُلْ أَرَأَيْتُمْ إِنْ أَهْلَكَنِيَ اللَّهُ وَمَن مَّعِيَ أَوْ رَحِمَنَا فَمَن يُجِيرُ الْكَافِرِينَ مِنْ عَذَابٍ أَلِيمٍ (28)
  
  قُلْ هُوَ الرَّحْمَنُ آمَنَّا بِهِ وَعَلَيْهِ تَوَكَّلْنَا فَسَتَعْلَمُونَ مَنْ هُوَ فِي ضَلالٍ مُّبِينٍ (29)
  
  قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاء مَّعِينٍ (30)
  </p>
  <br>
  <span class="surah-end"> صدق الله العظيم </span>
  `,
    focusConfirm: false,
    confirmButtonText: `
    <i class="fa fa-next"></i> لقد انتهيت، عمل جيد!
  `,
    confirmButtonColor: "green",
    confirmButtonAriaLabel: "Thumbs up, great!",
  });
}
