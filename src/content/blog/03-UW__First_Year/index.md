---
title:  "My First Year at University of Waterloo as a Korean International Student"
summary: "My experience at UWaterloo for the last 12 months"
date:   2022-09-03T18:50:40
draft: false
tags:
  - UWaterloo
  - First Year
  - "[EN]"
slug: "03-uw-first-year"
canonicalUrl: "https://hongjunyun.github.io/blog/03-uw-first-year"
audioUrl: "https://hongjunyun.github.io/audio/blog03-first-year-audio.mp3"
readingTime: "10 min read"
hreflangEn: "https://hongjunyun.github.io/blog/03-uw-first-year"
hreflangKo: "https://hongjunyun.github.io/blog/03-uw-first-year-kr"
order: 2
---

### Summary

- Reasons behind choosing Canada for my international studies as a Korean
- An honest recap of my first 12 months at the University of Waterloo
- Realistic lifestyle changes and cultural shifts in Canadian university life
- Key takeaways and reflections on the Computer Engineering (ECE) curriculum

> If you'd rather listen than read, use the player below to hear the audio version of this post.
<div class="not-prose my-10 flex flex-col gap-2 max-w-md">
  <div class="flex items-center gap-2 px-1">
    <span class="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-indigo-600 text-white rounded-md shadow-sm">Post 03</span>
    <span class="h-[1px] flex-1 bg-indigo-100 dark:bg-indigo-900/50"></span>
  </div>

  <div class="flex items-center p-5 bg-indigo-50/50 dark:bg-indigo-950/10 border border-indigo-200 dark:border-indigo-800 rounded-2xl transition-all hover:shadow-lg cursor-pointer group" id="custom-audio-player">
    <audio id="article-audio" src="/audio/blog03-first-year-audio.mp3" preload="metadata"></audio>
    <div class="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-indigo-600 dark:bg-indigo-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
      <svg id="play-icon" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 ml-1"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg>
      <svg id="pause-icon" xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7 hidden"><path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z" clip-rule="evenodd" /></svg>
    </div>
    <div class="ml-5 flex-1">
      <div class="font-extrabold text-indigo-900 dark:text-indigo-100 text-base md:text-lg leading-tight tracking-tight">Listen to this article</div>
      <div class="text-xs md:text-sm text-indigo-600/70 dark:text-indigo-400/70 font-medium mt-1" id="audio-status">Premium AI Voice (Zara)</div>
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


Before jumping in, why am I writing this? Honestly, it's mostly to leave a record of myself from this chaotic period. But at the same time, I hope some incoming UWaterloo student stumbles upon this and gets a little help—or at least avoids the stupid mistakes I made.

<details>
<summary><strong>📖 Quick UWaterloo Dictionary for Non-Waterloo Peeps (Click to expand)</strong></summary>

<br>

* **1A / 1B:** UWaterloo's way of counting semesters. "1A" means Year 1, Semester 1. "1B" means Year 1, Semester 2.
* **Don:** Basically a Resident Advisor (RA) in the dorms.
* **WEN North:** Wellesley Court North, one of the residence buildings on campus.
* **WaterlooWorks:** The school's official job portal for co-op students. Infamous for crashing right before the application deadline.
* **Continuous Cycle:** The survival phase of WaterlooWorks. If you don't get a job in the first main round, you enter this chaotic everyday-apply-and-interview phase.
* **PD (Professional Development):** Mandatory online courses you have to take while working your full-time co-op job.
* **CMH & E7:** Claudette Millar Hall (residence) and Engineering 7. The newest buildings on campus with actual working Air Conditioning.
* **PR:** Permanent Residency in Canada.
* **SWPP:** Student Work Placement Program. A Canadian government subsidy for employers hiring domestic students (which means international students can't apply).

</details>

## 1A Term

### Course Load

I took the following courses in my first term at UWaterloo:

| Course Code | Course Name | What it actually is |
| :---: | --- | --- |
| **ARTS 190** | First-Year Topics in Arts Disciplines | A mandatory arts elective. Lots of reading and writing essays. |
| **ECE 105** | Classical Mechanics | High school physics on steroids. Dropping objects, calculating tension, and pure stress. |
| **ECE 150** | Fundamentals of Programming | Intro to C++. Learning how to code from scratch (or reviewing if you already know it). |
| **ECE 190** | Engineering Profession and Practice | Learning engineering ethics and how not to get sued. Very dry. |
| **ECE 198** | Project Studio | Hands-on project course. Building actual physical things using microcontrollers. |
| **MATH 115** | Linear Algebra for Engineering | Matrices, vectors, and wondering why we need so many dimensions. |
| **MATH 117** | Calculus 1 for Engineering | Limits, derivatives, and pain. High school calculus but way harder. |

I honestly didn't enjoy the term. Not that the courses were super hard, but there was a massive bump in workload compared to secondary school.

My favorite courses this term were **ECE 150** and **ECE 198**:

* **ECE 150** was basically reviewing fundamental concepts I already knew.
* **ECE 198** was about learning how to make actual physical products that work in the real world.

Quite obviously, my least favorite courses were **MATH 117** and **ARTS 190**.
> And I will not explain why. 🤫

### Residence and Food

I was placed in **WEN North**, right next to my Don's room.

Thankfully, I had a kitchen in my residence room, so I was able to cook my own meals. However, since it was mandatory to buy a meal plan, I used the cafeteria for breakfast, snacks, and late suppers.

* **My go-to menu:** Booster Juice and pasta (sometimes burgers and pizza when I was up late).
* **Room condition:** The room was not bad, and the heating was super nice. **There was no AC whatsoever**, but since 1A was during the Fall-Winter season, it was only slightly annoying.
* **The Shower Struggle:** The washrooms and showers were shared, so sometimes I had literally to run to my friend's room when I needed a quick shower.

### Gears

In my 1A term, I used an **iPad Pro 11-inch (M1)** for my note-taking, alongside my old **MacBook Pro 13-inch** (2018, 4-port base model).

However, during my finals week, **my laptop just decided to stop working.** I had to emergency-buy a new **MacBook Pro 16-inch (M1 Pro)** base model. It was the only available option at the moment, and I had no choice. (Still a great machine, though.)

---

## CO-OP 1

Co-operative Work Term 1

### WaterlooWorks

WaterlooWorks was a disaster for me. There was no practical guide that I could follow at the time, and only one partial guide was available.

Also, I didn't realize there were **application limits** on how many positions I could apply to.

* **The First Round:** I only applied to Big Tech companies and completely ran out of my application caps.
* **The Server Crash:** As the deadline approached, the server became slower. At some point, it just decided to fail on me.

It was a total disaster on my first run, but it taught me the hard way how to pace my applications. Thankfully, during the continuous cycle, I was able to get an interview and land a job.

### Actual Work

For my first co-op, I worked at **Stackpole International** as a **Software Developer Co-op Student**.

I was hoping for a remote position, as commuting from Waterloo to Hamilton without a car during COVID was quite far. But it was an in-person position, and there was no room for negotiation.

**My Role & Tech Stack:**
My job included working with an early-stage specialized AI utilizing a **reinforcement decision tree**. It was designed to detect defects during production on local edge devices like the **Jetson Nano**.

Here is the reality check: UWaterloo didn't teach me Python or PyTorch in my first year. When I was told to use them at work, I had to learn everything from scratch on the fly. To be completely honest, I felt like I spent so much time learning the tools that I couldn't contribute much to the actual company. But that intense pressure was exactly where I got my first taste of real-world software engineering.

### PD 19

**Tactics for Workplace Success**

It basically treats you like a high schooler and teaches you how to write an email, how to stay awake at work, and how to interview a mentor in the workplace.

Honestly, the assignments are simple and not hard at all; they are just purely annoying.

### Housing

I looked into McMaster's off-campus accommodation options, but it turned out to be too expensive and far from work.
My second pick was a long-term **Airbnb** near the workplace. There was absolutely nothing around the area, but I had a Walmart within walkable distance, and I could live with that.

---

## 1B Term

### Course Load

I took the following courses in my second term at UWaterloo:

| Course Code | Course Name | What it actually is |
| :---: | --- | --- |
| **ECE 106** | Electricity and Magnetism | The sequel to ECE 105. Invisible fields, Maxwell's equations, and pure suffering. |
| **ECE 108** | Discrete Mathematics and Logic 1 | Proofs, sets, and logic. Basically math without numbers. |
| **ECE 124** | Digital Circuits and Systems | Designing logic circuits, K-maps, and playing with FPGA boards. |
| **ECE 140** | Linear Circuits | Analyzing electrical circuits with resistors, capacitors, and op-amps. |
| **ECE 192** | Engineering Economics and Impact on Society | Learning about interest rates, taxes, and how money works in the real world. |
| **MATH 119** | Calculus 2 for Engineering | Integrals, Taylor series, and 3D shapes. Hard, but doable with a good prof. |

Before getting into 1B, there is one thing I want to share: I really wish there was an option for us to choose which Electrical Engineering courses we want to take. Sometimes you just have to take things that don't fit your interests at all.

**The Biggest Hurdle: ECE 140**

My worst course was **ECE 140**. I honestly struggled to grasp most of the course material. The final exam was a complete disaster. I remember staring at the paper, knowing I had seen the concepts somewhere, but having absolutely no idea how to approach the problems. I ended up handing in an almost blank paper. After walking out, I just sat on the stairs outside the exam hall for a long time, staring into the void and questioning my life choices.

I failed ECE 140 this term. It was a devastating blow to my confidence, but it forced a massive change in my study habits. I realized that if the lecture style didn't work for me, I couldn't just sit there. I completely ignored the traditional approach and started teaching myself entirely through textbooks and the internet.

**The Highlights: ECE 124 & MATH 119**

On the flip side, **ECE 124** and **MATH 119** were my absolute favorite courses this term.

* **ECE 124:** This course taught me how digital logic works and how it is implemented in the real world. ECE 124 was the GOAT.
* **MATH 119:** The course was hard, but the instructor was the GOAT.

### Residence

I came back to WEN North after my co-op. This time, 1B fell during the **Summer term**, which meant the lack of AC went from "slightly annoying" to "pure survival mode."

I thought a desk fan could handle the heat, but it definitely could not. The AC in **CMH** (Claudette Millar Hall) and **E7** (Engineering 7) was my savior this term. Having two more roommates than the last term didn't help the heat situation at all. I still had a kitchen, though, so that was nice.

---

## CO-OP 2

Co-operative Work Term 2

### WaterlooWorks

For my second application cycle, I got a few interviews in the first round. One of them was **OpenText**.

At this point, I wasn't paying attention to "PR/Citizenship only" requirements and applied to everything. The OpenText interview was going super well—until they asked if I had a PR. I didn't. The interview crashed and burned right there, which was a deeply unpleasant wake-up call.

After that, my WaterlooWorks strategy completely changed. I didn't even trust the built-in filters. Instead, I started aggressively hitting **`Cmd + F` on Safari** to manually scan every job description and weed out postings that required PR, Citizenship, or Canadian government-subsidized positions (like SWPP).

Fortunately, in the second round, I got another interview, and they offered me good money. I got the job, but it meant I had to pack my bags and move to **Ottawa** for the next term.

---

Looking back, the kid who was stressing out over a lack of AC in 1A is very different from the one moving to Ottawa now. My first year was full of unexpected failures, almost-blank exam papers, and random disasters. But I survived, secured solid co-ops, figured out how to study my own way, and ultimately found what I actually like doing.

Bring on Year 2.

---

Hope this helps any future Warriors out there. 

[← Back to Waterloo Survival Guide](/waterloo)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://hongjunyun.github.io/blog/03-uw-first-year"
  },
  "headline": "First year at University of Waterloo: 12 months survival",
  "description": "University of Waterloo Computer Engineering year 1 story. 1A/1B term courses, dorm with no AC, and two co-op interviews.",
  "author": {
    "@type": "Person",
    "name": "Andy Yun"
  },
  "datePublished": "2022-09-03T18:50:40+09:00",
  "dateModified": "2022-09-03T18:50:40+09:00",
  "timeRequired": "PT10M",
  "inLanguage": "en",
  "audio": {
    "@type": "AudioObject",
    "contentUrl": "https://hongjunyun.github.io/audio/blog03-first-year-audio.mp3",
    "encodingFormat": "audio/mpeg",
    "name": "Audible University of Waterloo 12 months survival story",
    "duration": "PT4M03S" 
  }
}
</script>