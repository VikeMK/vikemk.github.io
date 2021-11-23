Title: NITA Speedrun Challenge
Published: 19/11/2022
Image: /images/bg/rttc.png
---

<style>
.lang-en:not(.lang-active) { display: none }
.lang-jp:not(.lang-active) { display: none }
</style>

<div class="dropdown-menu d-block position-static float-right ml-3">
    <h6 class="dropdown-header">Language</h6>
    <a class="dropdown-item" value="en" href="#" onclick="event.preventDefault(); setLang('en')" id="lang-selector-en">English</a>
    <a class="dropdown-item" value="jp" href="#" onclick="event.preventDefault(); setLang('jp')" id="lang-selector-jp">日本語</a>
</div>

<div class="lang-en">

## Information
Shroomless Time Trials, also known as NITA (No-Item Time Attack) in Japan, are a [great way to practice your lines](xref:Learning-Lines-in-Mario-Kart-8-Deluxe).
This challenge is a speedrun in which you must complete shroomless time trials on all 48 tracks in order without any restarts using the same combination throughout the whole run.

There are five categories for this challenge:
- 150cc Waluigi Wiggler
- 150cc Waluigi Biddybuggy
- 150cc Inward
- 150cc Baby
- 200cc

For each challenge, the top 3 fastest times will win a prize:
- 1st Place: $20 USD
- 2nd Place: $10 USD
- 3rd Place: $5 USD

Your final time is the sum of all the individual TTs.

## Submitting
This challenge will run for over 3 months with a submission deadline of [February 28 2022 at 11:59 PM UTC](https://www.timeanddate.com/worldclock/fixedtime.html?msg=NITA+Speedrun+Challenge+Deadline&iso=20220228T235959&p1=1440).

To submit, you must post a video of your submission in one channel in the [MK8DX NITA Discord](https://discord.gg/9jc88HW):
- **#speedrun-150-wiggler**: 150cc Waluigi Wiggler
- **#speedrun-150-biddy**: 150cc Waluigi Biddybuggy
- **#speedrun-150-inward**: 150cc Inward
- **#speedrun-150-baby**: 150cc Baby
- **#speedrun-200**: 200cc

## Rules
- The whole run must be recorded.
- Motion controls are not allowed.
- You are only allowed one attempt at each track and are not allowed to pause or restart.
- You are not allowed to use a mushroom.
  - If you accidentally use a mushroom, the run will be invalid and you are not allowed to restart the time trial.
- Tracks must be completed in the correct order. 
  - The correct order is Mushroom Cup, Flower Cup, Star Cup, Special Cup, Shell Cup, Banana Cup, Leaf Cup, Lightning Cup, Egg Cup, Triforce Cup, Crossing Cup, Bell Cup.
  - The order wraps around, so Mario Kart Stadium should be done after Big Blue.
- You are allowed to start on any track.
- You may submit as many time as you like up until the deadline.

### Category Rules

#### 150cc Waluigi Wiggler
- Must be done in 150cc
- Must use either Waluigi, Roy, or Donkey Kong
- Must use Wild Wiggler

#### 150cc Waluigi Biddybuggy
- Must be done in 150cc
- Must use either Waluigi, Roy, or Donkey Kong
- Must use Biddybuggy or Mr. Scooty

#### 150cc Inward
- Must be done in 150cc
- Can use any character
- Must use an inward bike (Comet, Sport Bike, Jet Bike, Yoshi Bike, Master Cycle)

#### 150cc Baby
- Must be done in 150cc
- Must use either Baby Mario, Baby Luigi, Baby Peach, Baby Daisy, Baby Rosalina, or Lemmy
- Can use any vehicle

#### 200cc
- Must be done in 200cc
- Can use any character or vehicle

### Tips/Suggestions
- To prevent yourself from accidentally using a mushroom, change your controller input bindings to disable L and ZL.
- Create new switch accounts for each category so you can practice against a ghost which is shroomless and using the same combination.
- To keep track of your times during a NITA speedrun, 


</div>

<div class="lang-jp">

</div>

<script>
function setLang(lang)
{
    window.history.replaceState('', '', window.location.origin + window.location.pathname + "?lang=" + lang);

    var languages = ["en", "jp"];

    for (let l of languages)
    {
        for (let d of document.getElementsByClassName("lang-" + l))
        {
            if (l === lang)
                d.classList.add("lang-active");
            else
                d.classList.remove("lang-active");
        }

        if (l === lang)
            document.getElementById("lang-selector-" + l).classList.add("active");
        else
            document.getElementById("lang-selector-" + l).classList.remove("active");
    }

    return false;
}

var lang = new URLSearchParams(window.location.search).get("lang") || "en";
setLang(lang);
</script>