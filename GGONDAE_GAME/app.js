/* ============================================================
   문항 데이터 (랜덤 출제)
   ============================================================ */
const POOL = [
  { type:'young', q:'새로운 밈이나 유행어를 접하면?', a:[{t:'무슨 소리인지 모르겠다', y:0},{t:'대충 들어는 봤다', y:1},{t:'검색해서 뜻을 안다', y:2},{t:'이미 쓰고 있다', y:3}] },
  { type:'young', q:'나이를 물어보면 드는 생각은?', a:[{t:'당당하게 밝힌다', y:0},{t:'별 생각 없다', y:1},{t:'조금 신경 쓰인다', y:2},{t:'"내가 그렇게 늙어 보이나?"', y:3}] },
  { type:'young', q:'스니커즈나 오버핏 옷을 입는 편인가?', a:[{t:'전혀 안 입는다', y:0},{t:'가끔 입는다', y:1},{t:'자주 입는다', y:2},{t:'옷장 절반이 그렇다', y:3}] },
  { type:'young', q:'전자기기(휴대폰/헤드폰 등)는?', a:[{t:'고장나야 바꾼다', y:0},{t:'적당히 쓰면 된다', y:1},{t:'새 모델이 궁금하다', y:2},{t:'최신형으로 계속 바꾼다', y:3}] },
  { type:'young', q:'SNS(인스타/틱톡) 사용 빈도는?', a:[{t:'거의 안 한다', y:0},{t:'가끔 본다', y:1},{t:'매일 본다', y:2},{t:'직접 콘텐츠도 올린다', y:3}] },
  { type:'young', q:'새로운 카페나 맛집이 생기면?', a:[{t:'굳이 안 간다', y:0},{t:'남들이 가면 간다', y:1},{t:'한 번쯤 가보고 싶다', y:2},{t:'오픈런도 한다', y:3}] },
  { type:'young', q:'유행하는 챌린지나 숏폼을 보면?', a:[{t:'이해가 안 간다', y:0},{t:'그냥 신기하다', y:1},{t:'재미있게 본다', y:2},{t:'나도 따라 해본다', y:3}] },
  { type:'young', q:'옷을 살 때 가장 중요하게 보는 것은?', a:[{t:'편하고 실용적이면 됨', y:0},{t:'가격 대비 품질', y:1},{t:'디자인과 유행', y:2},{t:'브랜드와 요즘 감성', y:3}] },
  { type:'young', q:'친구들과의 약속 장소를 정할 때?', a:[{t:'익숙한 단골집', y:0},{t:'집에서 가까운 곳', y:1},{t:'요즘 핫한 곳', y:2},{t:'SNS에서 본 신상 카페', y:3}] },
  { type:'young', q:'새로운 앱이나 서비스가 나오면?', a:[{t:'관심 없다', y:0},{t:'나중에 필요하면 쓴다', y:1},{t:'궁금해서 깔아본다', y:2},{t:'출시 당일 바로 써본다', y:3}] },
  { type:'young', q:'헤어스타일이나 스타일링은?', a:[{t:'늘 같은 스타일', y:0},{t:'가끔 바꾼다', y:1},{t:'유행에 맞춰 바꾼다', y:2},{t:'최신 트렌드를 적극 반영', y:3}] },
  { type:'young', q:'유튜브/넷플릭스에서 즐겨 보는 것은?', a:[{t:'뉴스나 다큐', y:0},{t:'드라마나 영화', y:1},{t:'예능이나 브이로그', y:2},{t:'숏폼/밈/챌린지', y:3}] },
  { type:'kkoondae', q:'후배가 일하는 방식을 보면?', a:[{t:'존중한다', k:0},{t:'괜찮아 보인다', k:1},{t:'한마디 하고 싶다', k:2},{t:'반드시 가르쳐야 한다', k:3}] },
  { type:'kkoondae', q:'"내가 너 나이 때는~"으로 시작하는 말을?', a:[{t:'거의 안 한다', k:0},{t:'가끔 한다', k:1},{t:'자주 한다', k:2},{t:'입에 달고 산다', k:3}] },
  { type:'kkoondae', q:'후배/자식이 휴대폰만 보고 있으면?', a:[{t:'그냥 둔다', k:0},{t:'신경 쓰이지만 참는다', k:1},{t:'한 번은 말한다', k:2},{t:'바로 지적한다', k:3}] },
  { type:'kkoondae', q:'요즘 유행하는 것에 대한 생각은?', a:[{t:'재미있다고 본다', k:0},{t:'무관심하다', k:1},{t:'이해가 안 간다', k:2},{t:'요즘 것들은 이상하다', k:3}] },
  { type:'kkoondae', q:'회의나 대화에서 내 경험을 이야기하는 편인가?', a:[{t:'거의 안 한다', k:0},{t:'가끔 한다', k:1},{t:'자주 한다', k:2},{t:'내 경험은 항상 옳다', k:3}] },
  { type:'kkoondae', q:'후배가 다른 의견을 내면?', a:[{t:'충분히 들을 수 있다', k:0},{t:'들어는 본다', k:1},{t:'내 생각이 더 맞다', k:2},{t:'결국 내 말이 맞다', k:3}] },
  { type:'kkoondae', q:'아랫사람에게 조언하는 편인가?', a:[{t:'거의 안 한다', k:0},{t:'물어보면 해준다', k:1},{t:'먼저 조언한다', k:2},{t:'조언 없이는 못 배긴다', k:3}] },
  { type:'kkoondae', q:'"요즘 세상은 너무 물러졌다"는 말에?', a:[{t:'동의 안 한다', k:0},{t:'글쎄', k:1},{t:'그런 것 같다', k:2},{t:'강하게 동의한다', k:3}] },
  { type:'kkoondae', q:'식사 자리에서 젊은 사람들이 말이 없으면?', a:[{t:'그럴 수 있지', k:0},{t:'분위기를 띄운다', k:1},{t:'먼저 조언을 한다', k:2},{t:'"요즘 애들은 예의가 없어"', k:3}] },
  { type:'kkoondae', q:'새로운 방식(툴/시스템)을 도입하자는 말에?', a:[{t:'좋다, 해보자', k:0},{t:'장단점을 따져본다', k:1},{t:'기존 방식이 낫다', k:2},{t:'바꾸면 다 꼬인다', k:3}] },
  { type:'kkoondae', q:'후배가 실수했을 때?', a:[{t:'스스로 배우게 둔다', k:0},{t:'조용히 알려준다', k:1},{t:'콕 집어 지적한다', k:2},{t:'"내가 그 나이 때는 안 그랬다"', k:3}] },
  { type:'kkoondae', q:'"요즘 세대는 인내심이 없다"는 말에?', a:[{t:'세대 차이일 뿐', k:0},{t:'일부는 그렇다', k:1},{t:'대체로 맞다', k:2},{t:'완전히 동의한다', k:3}] },
  { type:'mixed', q:'모임에서 처음 보는 젊은 사람과 대화할 때?', a:[{t:'그냥 편하게 대화한다', y:2, k:0},{t:'상대 관심사에 맞춘다', y:2, k:1},{t:'내 경험을 먼저 꺼낸다', y:0, k:2},{t:'조언부터 시작한다', y:0, k:3}] },
  { type:'mixed', q:'새로운 유행어를 젊은 사람이 쓰면?', a:[{t:'같이 써본다', y:3, k:0},{t:'뜻을 물어본다', y:2, k:1},{t:'어색해서 안 쓴다', y:1, k:2},{t:'"그런 말 쓰지 마라"', y:0, k:3}] },
  { type:'mixed', q:'내 물건을 고를 때 가장 중요한 기준은?', a:[{t:'요즘 감성과 디자인', y:3, k:0},{t:'가성비와 실용성', y:1, k:1},{t:'오래 쓸 수 있는 것', y:0, k:2},{t:'무조건 내 방식대로', y:0, k:3}] },
  { type:'mixed', q:'가족/후배가 내 조언을 무시하면?', a:[{t:'그럴 수 있다', y:2, k:0},{t:'아쉽지만 넘어간다', y:1, k:1},{t:'다시 한 번 강조한다', y:0, k:2},{t:'서운하고 화가 난다', y:0, k:3}] },
  { type:'mixed', q:'옷이나 소품을 고를 때?', a:[{t:'유행을 적극 반영', y:3, k:0},{t:'유행은 참고만', y:2, k:1},{t:'내 스타일 고수', y:1, k:2},{t:'남들 눈치 보인다', y:0, k:2}] },
  { type:'mixed', q:'새로운 문화(웹툰/게임/밈)를 접하면?', a:[{t:'재밌게 즐긴다', y:3, k:0},{t:'호기심에 본다', y:2, k:1},{t:'잘 모르겠다', y:1, k:2},{t:'"이게 뭐가 재밌나"', y:0, k:3}] },
  { type:'mixed', q:'대화 중 상대가 나와 다른 세대라면?', a:[{t:'서로 배운다', y:2, k:0},{t:'존중하며 듣는다', y:1, k:1},{t:'내 경험을 기준으로 본다', y:0, k:2},{t:'내 세대가 맞다고 느낀다', y:0, k:3}] },
  { type:'mixed', q:'새로운 것을 배울 때 나는?', a:[{t:'일단 해본다', y:3, k:0},{t:'궁금해서 찾아본다', y:2, k:1},{t:'필요할 때만 배운다', y:1, k:2},{t:'굳이 안 배운다', y:0, k:3}] }
];

/* ============================================================
   상태 변수 및 유틸
   ============================================================ */
let mode = 'both';
let quiz = [];
let current = 0;
let youngScore = 0;
let kkoondaeScore = 0;
let youngMax = 0;
let kkoondaeMax = 0;
let selectedOption = null;

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuiz() {
  if (mode === 'young') {
    quiz = shuffle(POOL.filter(x => x.type === 'young')).slice(0, 12);
  } else if (mode === 'kkoondae') {
    quiz = shuffle(POOL.filter(x => x.type === 'kkoondae')).slice(0, 12);
  } else {
    const pickYoung    = shuffle(POOL.filter(x => x.type === 'young')).slice(0, 6);
    const pickKkoondae = shuffle(POOL.filter(x => x.type === 'kkoondae')).slice(0, 6);
    const pickMixed    = shuffle(POOL.filter(x => x.type === 'mixed')).slice(0, 4);
    quiz = shuffle([...pickYoung, ...pickKkoondae, ...pickMixed]);
  }

  youngMax = 0;
  kkoondaeMax = 0;
  quiz.forEach(q => {
    let yMax = 0, kMax = 0;
    q.a.forEach(opt => {
      if (opt.y !== undefined) yMax = Math.max(yMax, opt.y);
      if (opt.k !== undefined) kMax = Math.max(kMax, opt.k);
    });
    youngMax += yMax;
    kkoondaeMax += kMax;
  });
}

/* ============================================================
   퀴즈 진행 로직
   ============================================================ */
function startQuiz(selectedMode) {
  mode = selectedMode;
  current = 0;
  youngScore = 0;
  kkoondaeScore = 0;
  buildQuiz();

  document.getElementById('startScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = quiz[current];
  const progress = (current / quiz.length) * 100;
  document.getElementById('progressFill').style.width = progress + '%';
  document.getElementById('qCounter').textContent = 'Q' + (current + 1) + '.';
  document.getElementById('questionText').textContent = q.q;

  const box = document.getElementById('answersBox');
  box.innerHTML = '';
  selectedOption = null;
  document.getElementById('nextBtn').disabled = true;

  q.a.forEach(ans => {
    const btn = document.createElement('button');
    btn.className = 'answer';
    btn.textContent = ans.t;
    btn.onclick = () => {
      Array.from(box.children).forEach(c => c.classList.remove('selected'));
      btn.classList.add('selected');
      selectedOption = ans;
      document.getElementById('nextBtn').disabled = false;
    };
    box.appendChild(btn);
  });
}

function nextQuestion() {
  if (!selectedOption) return;

  youngScore += (selectedOption.y || 0);
  kkoondaeScore += (selectedOption.k || 0);

  current++;
  if (current < quiz.length) {
    renderQuestion();
  } else {
    document.getElementById('progressFill').style.width = '100%';
    showResult();
  }
}

/* ============================================================
   결과 처리 및 데이터 매핑
   ============================================================ */
function animateCount(id, from, to, suffix, duration) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const val = Math.round(from + (to - from) * t);
    el.textContent = val + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function showResult() {
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('resultScreen').classList.remove('hidden');

  const youngPct    = youngMax    > 0 ? Math.round((youngScore    / youngMax)    * 100) : 0;
  const kkoondaePct = kkoondaeMax > 0 ? Math.round((kkoondaeScore / kkoondaeMax) * 100) : 0;

  const youngCard    = document.getElementById('youngCard');
  const kkoondaeCard = document.getElementById('kkoondaeCard');
  youngCard.classList.toggle('hidden',    mode === 'kkoondae');
  kkoondaeCard.classList.toggle('hidden', mode === 'young');

  document.getElementById('youngBar').style.width    = '0%';
  document.getElementById('kkoondaeBar').style.width = '0%';
  setTimeout(() => {
    if (mode !== 'kkoondae') document.getElementById('youngBar').style.width    = youngPct + '%';
    if (mode !== 'young')    document.getElementById('kkoondaeBar').style.width = kkoondaePct + '%';
  }, 100);

  animateCount('youngScoreText',    0, youngPct,    '%', 1000);
  animateCount('kkoondaeScoreText', 0, kkoondaePct, '%', 1000);

  const result = getResultData(youngPct, kkoondaePct);

  document.getElementById('resultTitle').textContent = result.title;
  document.getElementById('resultType').textContent  = result.type;
  document.getElementById('descBox').innerHTML       = result.desc;

  const img = document.getElementById('resultImage');
  const fallback = document.getElementById('imgFallback');
  if (result.img) {
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.src = result.img;
  } else {
    img.style.display = 'none';
    fallback.style.display = 'block';
  }

  window._lastResult = result;
}

function getResultData(youngPct, kkoondaePct) {
  if (mode === 'young') {
    if (youngPct >= 75) return {
      img: 'mz.png', title:'찐 영포티', type:'트렌드의 한가운데에 있는 당신',
      desc: `<div class="info-section"><div class="info-title">✨ 당신은 '찐 영포티'입니다</div><div class="info-content">젊은 감각과 트렌드 적응력이 <strong>최상위권</strong>입니다. 새로운 문화를 두려워하지 않고 즐길 줄 알며, 나이에 얽매이지 않는 유연한 사고를 가지고 있습니다.</div></div>`
    };
    if (youngPct >= 50) return {
      img: 'mz.png', title:'영포티 지망생', type:'트렌드를 따라가는 중',
      desc: `<div class="info-section"><div class="info-title">🌱 당신은 '영포티 지망생'입니다</div><div class="info-content">트렌드에 관심이 많고 새로운 것을 받아들이려 노력합니다. 조금만 더 적극적으로 즐겨보면 완벽한 영포티가 될 수 있습니다.</div></div>`
    };
    return {
      img: '', title:'차분한 어른', type:'유행보다는 내 페이스',
      desc: `<div class="info-section"><div class="info-title">🧘 당신은 '차분한 어른'입니다</div><div class="info-content">유행에 휘둘리기보다는 자신만의 리듬을 중요하게 생각합니다. 트렌드보다는 안정감과 실용성을 추구하는 편입니다.</div></div>`
    };
  }

  if (mode === 'kkoondae') {
    if (kkoondaePct >= 75) return {
      img: 'kkoondae.png', title:'뼛속까지 꼰대', type:'경험은 무기, 트렌드는 남의 일',
      desc: `<div class="info-section"><div class="info-title">☕ 당신은 '뼛속까지 꼰대' 유형입니다</div><div class="info-content">자신의 경험을 절대적 기준으로 삼아 타인에게 조언하기를 즐깁니다. 확고한 가치관이 있다는 장점이 있지만, 가끔은 젊은 세대의 방식을 열린 마음으로 관찰해 보세요.</div></div>`
    };
    if (kkoondaePct >= 50) return {
      img: 'kkoondae.png', title:'은근한 꼰대', type:'알게 모르게 조언을 건네는',
      desc: `<div class="info-section"><div class="info-title">🍵 당신은 '은근한 꼰대' 유형입니다</div><div class="info-content">평소에는 잘 드러나지 않지만, 무의식적으로 자신의 경험을 기준으로 남을 판단하는 경향이 있습니다. '내가 너 나이 때는'이라는 말이 튀어나오려 할 때 한 번만 참아보세요.</div></div>`
    };
    return {
      img: '', title:'쿨한 어른', type:'조언보다는 존중을 아는',
      desc: `<div class="info-section"><div class="info-title">🍃 당신은 '쿨한 어른'입니다</div><div class="info-content">상대방의 방식을 존중할 줄 알고, 자신의 경험을 강요하지 않습니다. 세대를 넘어 편안한 소통이 가능한 훌륭한 분입니다.</div></div>`
    };
  }

  const highY = youngPct >= 60;
  const highK = kkoondaePct >= 60;
  const key = (highY ? 'true' : 'false') + '_' + (highK ? 'true' : 'false');

  const map = {
    'true_true': {
      img: 'young.png', title:'영포티 꼰대', type:'겉은 MZ, 속은 꼰대',
      desc: `<div class="info-section"><div class="info-title">🎭 당신은 '겉영속꼰' 유형입니다</div><div class="info-content">겉으로는 트렌드를 따르지만, 말투와 사고는 이미 꼰대입니다. 최신 스니커즈를 신고 다니면서도 "요즘 것들은…"을 입에 달고 사는 타입이죠.</div></div>`
    },
    'true_false': {
      img: 'mz.png', title:'진정한 영포티', type:'트렌드를 즐기지만 강요하지 않는',
      desc: `<div class="info-section"><div class="info-title">✨ 당신은 '스윗 영포티'입니다</div><div class="info-content">트렌드를 자연스럽게 따르면서도 남에게 강요하지 않는 진짜 영포티입니다. 젊은 세대와도 잘 어울리고, 유연한 사고를 가지고 있습니다.</div></div>`
    },
    'false_true': {
      img: 'kkoondae.png', title:'전형적인 꼰대', type:'경험은 무기, 트렌드는 남의 일',
      desc: `<div class="info-section"><div class="info-title">☕ 당신은 '뼛속까지 꼰대' 유형입니다</div><div class="info-content">트렌드에는 무관심하고, 자신의 경험을 이야기하는 것을 좋아하는 전형적인 꼰대형입니다. 나쁜 의미가 아니라, 확고한 가치관과 풍부한 경험이 있다는 뜻이기도 합니다.</div></div>`
    },
    'false_false': {
      img: '', title:'청정 중년', type:'자기 리듬, 남 간섭 없음',
      desc: `<div class="info-section"><div class="info-title">🧘 당신은 '청정 중년'입니다</div><div class="info-content">트렌드도, 꼰대짓도 하지 않는 자기만의 리듬을 가진 사람입니다. 남에게 간섭하지 않고, 유행에 휘둘리지도 않습니다. 가장 편안하고 성숙한 조합입니다.</div></div>`
    }
  };
  return map[key];
}

/* ============================================================
   초기화 및 공유
   ============================================================ */
function restart() {
  document.getElementById('resultScreen').classList.add('hidden');
  document.getElementById('quizScreen').classList.add('hidden');
  document.getElementById('startScreen').classList.remove('hidden');
  document.getElementById('progressFill').style.width = '0%';
}

function shareResult() {
  const result = window._lastResult || {};
  const text = `[영포티 & 꼰대력 판별기]\n나의 결과: ${result.title || ''} (${result.type || ''})\n영포티 ${document.getElementById('youngScoreText').textContent} / 꼰대력 ${document.getElementById('kkoondaeScoreText').textContent}`;

  if (navigator.share) {
    navigator.share({ title: '영포티 & 꼰대력 판별기', text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => {
      alert('결과가 클립보드에 복사되었습니다!');
    }).catch(() => {
      prompt('아래 결과를 복사하세요:', text);
    });
  }
}