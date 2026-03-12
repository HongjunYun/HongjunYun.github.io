---
title:  "워털루 ECE 1학년: 한국인 유학생 후기"
summary: "워털루 대학교 ECE 1학년 과정(1A, 1B)과 첫 코업 구직"
date:   2022-09-03T22:21:56
updatedDate: 2026-03-09
draft: false
tags:
- UWaterloo
- First Year
- "[KR]"
slug: "03-uw-first-year-kr"
canonicalUrl: "https://andylang8445.github.io/blog/uw-first-year-kr"
audioUrl: "https://andylang8445.github.io/audio/blog03-first-year-audio-kr.mp3"
readingTime: "11 min read"
hreflangEn: "https://andylang8445.github.io/blog/uw-first-year"
hreflangKo: "https://andylang8445.github.io/blog/uw-first-year-kr"
order: 1
---

### Summary

- 워털루 공대가 다른 대학과 차별화 되는 이유
- University of Waterloo 첫 1년 경험
- 캐나다 대학 생활에서 느낀 현실적인 변화
- 워털루에서 컴퓨터공학을 공부하며 느낀 점

>이 글을 음성으로 듣고 싶다면 아래 플레이어를 이용하세요.
<div class="not-prose my-10 flex flex-col gap-2 max-w-md">
  <div class="flex items-center gap-2 px-1">
    <span class="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-indigo-600 text-white rounded-md shadow-sm">Post 03</span>
    <span class="h-[1px] flex-1 bg-indigo-100 dark:bg-indigo-900/50"></span>
  </div>

  <div class="flex items-center p-5 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-200 dark:border-indigo-800 rounded-2xl transition-all hover:shadow-lg cursor-pointer group" id="custom-audio-player">
    <audio id="article-audio" src="/audio/blog03-first-year-audio-kr.mp3" preload="metadata"></audio>
    <div class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
      <svg id="play-icon" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 ml-1"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg>
      <svg id="pause-icon" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 hidden"><path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-5 flex-1">
      <div class="font-extrabold text-indigo-900 dark:text-indigo-100 text-base md:text-lg leading-tight tracking-tight">음성으로 이 글 듣기</div>
      <div class="text-xs md:text-sm text-indigo-600/70 dark:text-indigo-400/70 font-medium mt-1" id="audio-status">Premium AI Voice (Han)</div>
    </div>
    <div class="flex gap-1 items-end h-8 ml-3" id="wave-animation">
      <div class="w-1.5 h-3 bg-indigo-200 dark:bg-indigo-800 rounded-full transition-all"></div>
      <div class="w-1.5 h-6 bg-indigo-200 dark:bg-indigo-800 rounded-full transition-all"></div>
      <div class="w-1.5 h-4 bg-indigo-200 dark:bg-indigo-800 rounded-full transition-all"></div>
      <div class="w-1.5 h-7 bg-indigo-200 dark:bg-indigo-800 rounded-full transition-all"></div>
    </div>
  </div>
</div>

<script>
  (function() {
    const player = document.getElementById('custom-audio-player');
    const audio = document.getElementById('article-audio');
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const statusText = document.getElementById('audio-status');
    const waves = document.querySelectorAll('#wave-animation div');

    player.onclick = function() {
      if (audio.paused) {
        audio.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        waves.forEach((w, i) => {
          w.style.animation = `audio-pulse 1s infinite ${i * 0.2}s`;
          w.classList.add('bg-indigo-500', 'dark:bg-indigo-400');
        });
      } else {
        audio.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        statusText.innerText = "Paused";
        waves.forEach(w => {
          w.style.animation = 'none';
          w.classList.remove('bg-indigo-500', 'dark:bg-indigo-400');
        });
      }
    };

    audio.ontimeupdate = function() {
      if (!audio.paused) {
        const current = Math.floor(audio.currentTime);
        const mins = Math.floor(current / 60);
        const secs = (current % 60).toString().padStart(2, '0');
        statusText.innerText = `Playing • ${mins}:${secs}`;
      }
    };
  })();
</script>

<style>
  @keyframes audio-pulse {
    0%, 100% { height: 0.75rem; }
    50% { height: 1.75rem; }
  }
</style>

이 글은 지난 1년간 워털루 대학교에서 보낸 제 1학년 생활의 간단한 후기입니다. 입학 전에는 미처 몰랐던 점들과 직접 부딪히며 배운 것들을 정리해 보았습니다. 이제 막 입학을 앞둔 분들이나 생생한 경험담이 필요하신 분들께 조금이나마 보탬이 되었으면 합니다. 제가 겪은 시행착오가 누군가에게는 더 나은 선택을 위한 길잡이가 되길 바랍니다.

<details>
<summary><strong>📖 The Waterloo Dictionary: 낯선 단어들이 일상이 되기까지 (클릭해서 펼치기)</strong></summary>

<br>

* **1A / 1B / 2A...:** 워털루만의 독특한 학기 구분법입니다. 1학년 1학기(1A)부터 졸업까지, 4개월 단위로 학업과 코업(인턴십)을 정교하게 오가는 삶의 이정표가 됩니다.
* **Co-op (코업):** 학교의 정체성과도 같은 유급 인턴십 프로그램입니다. 전공 지식을 실무 현장에서 증명하고, 졸업 전 최대 2년의 경력을 쌓게 해주는 워털루의 핵심 동력입니다.
* **Sequence (시퀀스):** 4.8년의 재학 기간 동안 언제 공부하고 언제 일할지를 정해놓은 일정표입니다. 스트림(Stream)이라고도 불리며, 이에 따라 방학 없는 치열한 대학 생활의 흐름이 결정됩니다.
* **WaterlooWorks (워털루웍스):** 수천 개의 채용 공고가 올라오는 학교 전용 구직 포털입니다. 지원부터 면접 일정 관리까지 모든 과정이 이곳에서 이루어집니다.
* **Ranking (매칭 시스템):** 구직의 마지막 단계입니다. 학생과 기업이 서로를 1~10순위로 매기고, 합산 점수가 낮은 순서대로 '매칭'되는 워털루만의 독특한 합격 시스템입니다.
* **SWPP & PR:** 유학생 취업의 현실적인 문턱입니다. 캐나다 정부 보조금(SWPP)이나 영주권(PR) 취득 여부에 따라 유학생은 지원 가능한 포지션이 달라지기도 하므로 전략적인 준비가 필요합니다.
* **Work Term Report:** 코업 기간 중 제출해야 하는 전공 관련 보고서입니다. 단순한 업무를 넘어 학문적 성찰을 요구하는, 코업 이수를 위한 필수 관문입니다.
* **Quest & Learn:** 매일 마주하게 될 디지털 캠퍼스입니다. Quest는 학사 행정(수강신청, 성적)을, Learn은 실제 수업 자료 조회와 과제 제출을 지원합니다.
* **The Plaza (플라자):** 캠퍼스 바로 옆에 위치한 식당가입니다. 유학 생활 중 가장 많은 끼니를 해결하게 될 학생들에게는 오아시스 같은 장소입니다.
* **Landmarks (E7, DC, MC):** 전공에 따라 가장 많은 시간을 보내게 될 건물들입니다. E7은 공학도의 요람이며 DC와 MC는 수학과 컴퓨터 공학의 중심지이자 도서관이 있는 곳입니다.
* **Don (돈) & Residence:** 기숙사 생활의 멘토인 선배 학생(Don)을 말하며, WEN과 CMH로 대표되는 기숙사는 대부분의 학생들이 모여서 공부하고 숙식을 해결하는 곳입니다.

</details>

## 1A 학기

### 수강과목

워털루에서의 첫 학기는 학업 그 자체보다 **적응**하는 데 더 많은 에너지를 쏟게 됩니다. 개별 과목의 난이도 자체는 예상보다 높지 않지만 고등학교에 비해 훨씬 늘어난 과목 수와 쏟아지는 과제, 그리고 당장 시작해야 하는 코업(Co-op) 준비까지 동시에 해야합니다.

참고로 컴퓨터 공학(Computer Engineering) 전공은 학생이 직접 수강신청을 하는 것이 아니라 학교에서 일괄적으로 짠 시간표를 배정받는 시스템입니다. 같은 수업을 듣더라도 시퀀스(Stream)나 학생 그룹에 따라 수업 시간대는 오전반과 오후반 등으로 나뉘게 됩니다.

1A 학기에 제가 수강했던 과목들은 다음과 같습니다:

| 과목 코드 | 과목 명 | 특징 및 요약 |
| :---: | --- | --- |
| **ARTS 190** | First-Year Topics in Arts Disciplines | 방대한 양의 독서와 영상 시청, 그리고 보고서 제출이 요구되는 필수 교양 과목입니다. |
| **ECE 105** | Classical Mechanics | 온타리오주 고등학교 과정을 기반으로, 수학적 접근이 한층 강조된 고전 역학 과목입니다. 쪽지시험과 과제의 비중이 상당히 높습니다. |
| **ECE 150** | Fundamentals of Programming | C++ 프로그래밍 기초를 다룹니다. 초심자를 기준으로 수업이 진행되므로, 다른 언어라도 코딩 경험이 있다면 비교적 수월하게 따라갈 수 있습니다. |
| **ECE 190** | Engineering Profession and Practice | 엔지니어링 윤리와 실무를 다룹니다. 엔지니어가 갖춰야 할 책임감을 배우는 이론 중심의 과목입니다. |
| **ECE 198** | Project Studio | 마이크로컨트롤러(STM32)를 활용해 실제 하드웨어를 설계하고 제작하는 흥미로운 실습 과목입니다. 체감상 아두이노 실습과 비슷한 난이도입니다. |
| **MATH 115** | Linear Algebra for Engineering | 공학 선형대수학입니다. 행렬과 벡터를 다루며 공학 수학의 기초를 다지는 중요한 관문이지만, 개념이 다소 생소하여 온전히 이해하는 데 꽤 시간이 걸릴 수 있습니다. |
| **MATH 117** | Calculus 1 for Engineering | 공학 미적분학입니다. 극한과 미분 등 기초를 다루며, 고등학교 과정보다 난이도가 조금 더 높습니다. 온타리오주 고교 과정인 'Calculus and Vectors'를 이수했다면 한결 수월합니다. |

이 중에서 제가 가장 흥미롭게 수강했던 과목은 **ECE 150**과 **ECE 198**입니다. **ECE 150**은 이전에 익혔던 프로그래밍 개념들을 다시금 체계적으로 정리할 수 있는 유익한 시간이었고, **ECE 198**은 이론으로만 배우던 것들을 실제 하드웨어로 구현해 보는 과정 자체가 무척 즐거웠습니다.

반면 수많은 공대생들이 공감하듯, **MATH 117**과 **ARTS 190**은 제가 가장 고전했던 과목들입니다.

> 구체적인 이유는 굳이 설명하지 않아도 짐작하시리라 생각합니다. 🤫

### 기숙사 생활과 음식

제 기숙사는 **WEN North**였고, Don의 바로 옆방 이었습니다.

가장 다행이었던 점은 1인실을 배정받았다는 것, 그리고 유닛 내 공용 거실에 주방이 딸려 있어 원하는 음식을 직접 해 먹을 수 있었다는 것입니다. 하지만 신입생은 밀플랜(Meal Plan) 구매가 필수였기에, 아침 식사나 가벼운 간식, 늦은 밤 야식 등은 주로 기숙사 식당을 이용하며 해결했습니다.

* **최애 메뉴:** 부스터 주스(Booster Juice)와 파스타를 주식으로 먹었고, 늦은 밤까지 공부나 과제를 할때면 한번씩 햄버거가 피자도 가끔<small>~~사실은 자주~~</small> 먹었습니다.
* **기숙사 컨디션:** 오래된 건물이긴 했지만 전반적인 상태는 나쁘지 않았습니다. 특히 겨울 난방이 아주 훌륭했습니다. 다만 한 가지 치명적인 단점은 **에어컨이 아예 없다는 것**이었습니다. 다행히 1A 학기는 가을과 겨울에 걸쳐서 진행되었기에, 실내가 살짝 답답하게 느껴지는 정도 선에서 무사히 넘길 수 있었습니다.
* **샤워 눈치 게임:** 화장실과 샤워실 두 개를 4명이서 공유하는 구조라 평소엔 큰 문제가 없었습니다. 하지만 아침 첫 수업 시간이 겹치거나 날이 더울 때는 꽤 난감했습니다. 급할 때는 같은 기숙사에 사는 친구 방으로 달려가 샤워를 해결한 적도 종종 있었습니다.
* **위치:** CMH, WEN같은 건물은 E7, DC, MC같은 공학 건물들과 가깝습니다. 덕분에 다른 기숙사에 사는 동기들보다 아침 시간을 훨씬 여유롭게 쓸 수 있었습니다.

### 학습 장비 (Gears)

1A 학기 동안 저의 학업을 함께해 준 주력 장비는 강의 필기용으로 산 **아이패드 프로 11인치 M1**와 예전부터 사용해 오던 구형 맥북 프로 13인치(2018년형)였습니다.

그런데 기말고사를 코앞에 둔 시점에 노트북이 갑자기 켜지지 않는 대참사가 발생했습니다. 당장 과제와 시험을 치러야 하는 급박한 상황이었기에, 선택의 여지 없이 당장 재고가 남아있던 맥북 프로 16인치(M1 Pro) 모델을 당일에 바로 구매해야만 했습니다. 생각도 하지 않았던 예상치 못한 큰 지출이었습니다<small>(뛰어난 성능 덕분에 지금까지도 아주 만족스럽게 사용하고 있습니다!)</small>.

---

## CO-OP 1

Co-operative Work Term 1

### WaterlooWorks

저의 첫 구직 사이클은 **대참사**였습니다. 당시에는 따라할 만한 제대로 된 가이드가 없었고, 무엇보다 입사 지원 **횟수 제한**이 있다는 기본적인 규칙조차 몰랐습니다.

* 첫 번째 라운드: 이름만 들어도 아는 빅테크 기업들에만 이력서를 난사하다가 지원 가능 횟수를 허무하게 다 날려버렸습니다.
* 서버 다운: 마감 시간이 다가오자 접속자가 몰려 서버가 점점 느려지더니 어느 순간 아예 터져버리는 당황스러운 일도 있었습니다.

첫 시도는 처참히 실패했지만, 덕분에 남은 지원 페이스를 어떻게 조절해야 하는지 제대로 배웠습니다. 다행히 이어지는 컨티뉴어스 라운드(Continuous Cycle)에서 면접 기회를 얻었고, 무사히 첫 직장을 구할 수 있었습니다.

### 실무 경험

첫 코업으로 저는 **Stackpole International**에서 **소프트웨어 개발자**로 일하게 되었습니다.

당시 차도 없는 상황에서 워털루에서 해밀턴(Hamilton)까지 대중교통으로 출퇴근하는 것은 너무 멀었기에 재택근무를 기대했습니다. 하지만 매일 출근을 필요로 하는 포지션이었고 협상의 여지는 없었습니다.

**담당 업무 & 기술 스택:**
제 주된 업무는 **강화학습 의사결정 트리**를 활용한 초기 단계의 특수 AI를 다루는 것이었습니다. **Jetson Nano** 같은 로컬 엣지 디바이스를 이용하여 생산 공정 중 발생하는 결함을 찾아내는 시스템이었습니다.

여기서 큰 장애물을 마주치는데, 워털루 1학년 과정에서는 파이썬(Python)이나 파이토치(PyTorch)를 가르쳐주지 않았기 때문입니다. 회사에서 이 기술들을 요구했을 때 저는 급하게 당장 필요한 기술들 위주로 벼락치기를 했고, 원리를 이해하기보다 용법만을 공부해서 때웠습니다. 솔직히 말하면 툴 사용법을 익히느라 시간을 너무 많이 써버려서 회사에 실질적인 기여를 크게 하지 못한 것 같아 아쉬움이 남습니다. 하지만 그 압박감 속에서 실전 소프트웨어 엔지니어링의 산을 처음으로 깊게 경험할 수 있었습니다.

### PD 19

**직장 생활 생존법 <small>Tactics for Workplace Success</small>**

코업 중에 의무적으로 들어야 하는 온라인 강의(PD)입니다. 이 수업은 대학생을 마치 고등학생이라고 가정하고 이메일 작성하는 법, 근무 시간에 졸지 않는 법, 직장 멘토와 면담하는 법 등을 가르칩니다.
과제 내용 자체가 어렵지는 않지만, 시간이 오래걸리고 매주 전혀 다른 보고서 과제가 주어지기에 순수하게 성가시고 귀찮게 느껴졌습니다. 대부분의 학생들이 불호하는 과목중 하나입니다.

### 집 구하기

처음에는 직장에서 그나마 가까운 맥마스터(McMaster) 대학교 근처의 student housing을 알아봤지만, 가격도 너무 비싸고 직장과도 대중교통으로는 애매하게 멀었습니다.
차선책으로 직장 근처에 있는 장기 **Airbnb**를 구했습니다. 주변에 정말 아무것도 없는 허허벌판이었지만, 다행히 걸어갈 수 있는 거리에 월마트(Walmart)가 하나 있어서 그럭저럭 생활할 수 있었습니다.

---

## 1B 학기

### Course Load

코업에서 돌아와서 바로 그주에 개학을 했습니다. 첫 몇개의 수업은 반정도 졸았던것 같습니다.
이번 학기에 제가 수강한 과목은 다음과 같습니다:

| 과목 코드 | 과목명 | 특징 및 요약 |
| :---: | --- | --- |
| **ECE 106** | Electricity and Magnetism | ECE 105의 후속작 격인 전자기학입니다. 보이지 않는 자기장, 맥스웰 방정식, 그리고 알수없는 수학을 다룹니다. |
| **ECE 108** | Discrete Mathematics and Logic 1 | 이산수학과 논리입니다. 증명, 집합 등을 다루며, 사실상 숫자가 거의 등장하지 않는 수학입니다. 코딩의 근원에 가깝습니다. |
| **ECE 124** | Digital Circuits and Systems | 디지털 회로 설계, K-map, 그리고 FPGA 보드를 만지며 실습하는 과목입니다. 매우 흥미롭습니다. |
| **ECE 140** | Linear Circuits | 저항, 커패시터, 연산 증폭기(Op-amp) 등으로 이루어진 선형 전기 회로를 분석합니다. |
| **ECE 192** | Engineering Economics and Impact on Society | 공학 경제 과목으로, 이자율이나 세금 등 현실에서 기업의 돈이 어떻게 굴러가는지를 배웁니다. |
| **MATH 119** | Calculus 2 for Engineering | 공학 미적분학 2입니다. 적분, 테일러 급수, 3D 도형 등을 다룹니다. 어렵지만 좋은 교수님을 만나면 할 만합니다. |

1B 학기 이야기를 본격적으로 시작하기 전에 이 글을 읽는 분들께 꼭 하고 싶은 말이 있습니다. 워털루 1학년 과정은 전기/전자 공학(EE) 세부 과목들을 선택해서 들을 수 있는 옵션이 없습니다. 가끔은 본인의 관심사와 전혀 맞지 않는 과목도 억지로 들어야만 하는 것이 현실입니다.

**가장 큰 장애물: ECE 140**

이번 학기에서 가장 힘들었던 과목은 **ECE 140** 였습니다. 학기 내내 수업 내용을 이해하는 데 큰 어려움을 겪었고, 기말고사는 그야말로 대참사였습니다. 시험지를 바라보며 분명 어디선가 본 개념이라는 건 알겠는데, 문제를 어떻게 접근해야 할지 감조차 오지 않았습니다.<br> 결국 거의 백지에 가까운 답안지를 내고 나왔습니다. 시험장 밖 계단에 한참을 멍하니 앉아 허공을 응시하며, 이 대학에 온게 저에게 맞는 선택인지 고민했던 기억이 납니다.

결과적으로 저는 이 과목에서 낙제(Fail)했습니다. 자존심에 엄청난 타격이었지만, 역설적이게도 이 실패는 제 공부 습관을 바꾸는 강력한 계기가 되었습니다.<br>교수님의 강의 스타일이 저와 맞지 않는다면 그냥 가만히 강의만 듣고있어선 안 된다는 걸 뼈저리게 깨달았습니다. 그 이후로는 전통적인 강의 수강 방식에만 의존하지 않고, 교과서와 인터넷(구글링, 유튜브 등)을 총동원해 완전히 저만의 방식으로 독학하는 법을 터득하게 되었습니다.

<br>


**한 줄기 빛: ECE 124 & MATH 119**

반대로 **ECE 124**와 **MATH 119**는 이번 학기 최고의 과목이었습니다.

* **ECE 124:**  디지털 논리가 어떻게 작동하고 현실 세계의 하드웨어에서 어떻게 구현되는지 배울 수 있었던, 저에겐 최고의 과목이었습니다.
* **MATH 119:** 과목 자체의 난이도는 높았지만, 강의를 이끌어주신 교수님이 정말 최고였습니다.

### 기숙사 생활 (여름 생존기)

코업을 마치고 다시 WEN North 기숙사로 돌아왔습니다. 문제는 1B 학기가 **여름 학기**에 진행되었다는 것입니다. 지난 1A 때 에어컨이 없는 게 <i>살짝 답답한 정도</i>였다면, 여름의 WEN 기숙사는 그야말로 <b>순수 생존 모드</b>였습니다.

탁상용 선풍기 하나로 더위를 버텨보려 했지만 어림도 없었습니다. 이번 학기 내내 완벽한 에어컨 시설을 갖춘 최신 건물인 CMH 기숙사 식당과 E7 공학 건물은 제 유일한 피난처였습니다.<br>엎친 데 덮친 격으로 룸메이트가 지난 학기보다 2명이나 더 늘어나서 유닛 내부의 열기는 더 뜨거워졌습니다. 그래도 여전히 밥을 해 먹을 수 있는 주방이 있다는 사실 하나를 위안으로 삼았습니다.

---

## CO-OP 2

Co-operative Work Term 2

### 눈물겨운 두 번째 구직 (WaterlooWorks)

두 번째 구직 사이클이 시작되고, 다행히 첫 번째 라운드(Main Round)에서 몇 개의 면접 기회를 얻었습니다. 그중 하나가 꽤 규모가 있고, 캠퍼스에서 가까운 소프트웨어 기업인 OpenText였습니다.

이때까지만 해도 저는 채용 공고에 적힌 <b>영주권(PR)/시민권자 전용</b>이라는 자격 요건을 대수롭지 않게 여겼습니다. 면접이나 이력으로 커버가 될 줄 알았습니다. 면접 분위기는 정말 최고였습니다. 면접관이 제게 영주권이 있는지 묻기 전까지는요. 제가 영주권이 없다고 대답하는 순간 면접은 그 자리에서 싸늘하게 끝이 났고, 이는 유학생의 현실적인 벽을 확실히 깨닫는 아주 씁쓸한 경험이 되었습니다.

그날 이후, 저의 워털루웍스(WaterlooWorks) 지원 전략은 180도 바뀌었습니다. 시스템에 내장된 필터 기능조차 믿지 않았습니다. 무조건 사파리(Safari)에서 **Cmd + F**를 눌러 채용 공고의 모든 텍스트를 샅샅이 스캔하며, 영주권(PR)이나 시민권, 혹은 캐나다 정부 보조금(SWPP)을 요구하는 포지션은 지원 단계에서 가차 없이 걸러냈습니다.

정말 다행히도 두 번째 라운드에서 다른 기업의 면접 기회를 얻었고, 꽤 만족스러운 급여 조건으로 합격 통보를 받았습니다. 이번 코업을 위해 저는 또다시 짐을 싸서 이번에는 캐나다의 수도, **오타와**로 이사를 가야 했습니다.

---

돌이켜보면, 1A 학기 때 기숙사에 에어컨이 없다고 스트레스받던 갓 입학한 신입생과 지금 오타와로 이사 갈 짐을 싸고 있는 저는 완전히 다른 사람이 된 것 같습니다.

저의 1학년은 예상치 못한 실패, 거의 백지로 냈던 기말고사 답안지, 그리고 크고 작은 멘붕의 연속이었습니다. 하지만 저는 꿋꿋하게 살아남았습니다. 무사히 두 번의 코업(Co-op)을 구했고, 강의실에만 갇혀있지 않고 저만의 방식으로 공부하는 법을 터득했으며, 무엇보다 제가 진정으로 재미를 느끼는 분야가 무엇인지 감을 잡기 시작했습니다.

이제 다음 챕터로 넘어갈 준비가 되었습니다.

Bring on Year 2.

---

앞으로 워털루에 오게 될 다른 학생들에게 이 글이 조금이나마 도움이 되었으면 합니다.

[← 워털루 생존 가이드로 돌아가기](/waterloo)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://andylang8445.github.io/blog/uw-first-year-kr"
  },
  "headline": "First year at University of Waterloo: 12개월 생존기",
  "description": "캐나다 워털루 대학교 컴퓨터 공학과 1학년 유학생의 생생한 후기. 1A/1B 학기 수강 과목, 에어컨 없는 기숙사 생존기, 그리고 눈물겨운 두 번의 코업(Co-op) 구직 경험담을 담았습니다.",
  "author": {
    "@type": "Person",
    "name": "Andy Yun"
  },
  "datePublished": "2022-09-03T22:21:56+09:00",
  "dateModified": "2022-09-03T22:21:56:40+09:00",
  "timeRequired": "PT11M",
  "inLanguage": "ko",
  "audio": {
    "@type": "AudioObject",
    "contentUrl": "https://andylang8445.github.io/audio/blog03-first-year-audio-kr.mp3",
    "encodingFormat": "audio/mpeg",
    "name": "오디오로 듣는 워털루 1학년 생존기",
    "duration": "PT8M30S" 
  }
}
</script>