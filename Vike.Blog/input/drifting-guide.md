NavTitle: Drifting Guide
Title: Vike’s Guide to Drifting in MK8DX
PageTitle: Vike’s Guide to Drifting in MK8DX
Order: 2
Image: /images/bg/rdp3.png
---

## Preface
Hi, my name is Vike ([@VikeMK](https://twitter.com/vikemk)) and I’m a competitive Mario Kart player from Australia. In my almost 3 years in the competitive MK8DX community, something I have seen repeatedly are misconceptions and disagreements on how drifting works and how to drift optimally. I also haven’t seen any resources out there (in English) that distil all this information into one place, so I decided to try writing it myself. This guide is targeted to people who already know the basics and controls and so I won’t be going over things like how to perform a drift or what a mini-turbo is.

## Acceleration, Mini-Turbo, and Speed Stats
It is important to keep in mind what the acceleration, mini-turbo (MT), and speed stats are for when choosing your combo. These are your most important stats and will have an impact on how you drive and what lines you take.

- The acceleration stat controls how fast your speed accumulates
- There is a hidden Mini-Turbo stat which is tied to your acceleration stat. This stat controls how fast you are able to accumulate your MT as well as how long the MT lasts after it is released.
- The speed stat controls your maximum speed. The moment you reach your top speed your acceleration stat is no longer being taken advantage of.

The exact value of the Mini-Turbo stat is not visible in-game, and so you must use a website such as [majorasmask9.github.io/mk8dstats](https://majorasmask9.github.io/mk8dstats) to see what it is.

## MT Accumulation
When you start a drift, a counter starts which keeps track of how much mini-turbo (MT) you have accumulated. This counter value increases every frame (with 60 frames per second) and when this counter reaches a certain value, the colour of the sparks under your tire will change indicating what kind of MT you will get when you release the drift. Blue sparks means you will create a Mini-Turbo (MT), orange sparks means you will create a Super Mini-Turbo (SMT), and purple sparks means you will create an Ultra Mini-Turbo (UMT).

### Control Stick Angle
The amount the counter value increases on each frame depends on the angle you are holding the control stick and the rules are simple:

1. If your control stick is more than 45 degrees from the vertical, the counter value increases by 5 each frame
1. If your control stick is 45 degrees or less from the vertical, the counter value increases by 2 each frame.

The below diagram shows all the control stick angles as a shaded region where MT is accumulating at 5 per frame ([Click for higher resolution](https://v-whoami-v.github.io/images/plot_highmt.png)):

<img src="/images/softdrift_region.png" style="display: block; margin: auto; max-width: 100%" width="600px">

In Mario Kart 8 for the Wii U, it was possible to get the best MT accumulation at exactly 45 degrees and this is what led to people using D-Pad because it let them take the widest drift while still building MT optimally. It seems that the way they patched this in Mario Kart 8 Deluxe was to disable the ability to use exactly 45 degrees and so the actual angle is about 45.5 degrees from the vertical.

### MT Thresholds
As mentioned earlier, once this MT counter value reaches a certain threshold, it will activate the different levels of MT. This threshold is determined by the MT stat of the combination you are racing with. A table showing the different thresholds for each MT stat value is found below:

<div class="row justify-content-center">
<div class="col-auto">

<?# Table Class="table table-striped table-sm table-hover text-center table-responsive" HeaderRows=1 ?>
<?*
"MT Stat" "MT Threshold" "SMT Threshold" "UMT Threshold"
1.00 280 590 900     
1.25 278 586 894     
1.50 276 582 888     
1.75 274 578 882     
2.00 272 574 876     
2.25 269 568 867     
2.50 266 562 858     
2.75 263 556 849     
3.00 260 550 840     
3.25 256 542 828     
3.50 252 534 816     
3.75 248 526 804     
4.00 244 518 792     
4.25 240 510 780     
4.50 235 500 765     
4.75 230 490 750     
5.00 223 476 729     
5.25 216 462 708     
5.50 208 446 684     
5.75 200 430 660     
?>
<?#/ Table ?>

</div>
</div>

Using this table, if you have a combination with an MT stat of 4.25 such as Waluigi, Wild Wiggler, Rollers, and Cloud Glider and you wanted to get an SMT you would need to reach a MT counter value of 510. 

- If you are building your MT optimally you will get an SMT in 510/5 = 102 frames which is 102/60 = 1.7 seconds. 
- If you are building your MT non-optimally you will get an SMT in 510/2 = 255 frames which is 255/60 = 4.25 seconds.

The control stick angle diagram and the data about the various MT thresholds were done by [whoami](https://twitter.com/v_whoami_v) and his research can be found at the link below. The research is in Japanese however google translate seems to do a good job of translating and I would definitely recommend reading through this if you wanted to learn more about all the details.

<span style="padding-left: 4rem">[v-whoami-v.github.io](https://v-whoami-v.github.io/)<span>

A good way to practice drifting angles is to open the battle course “Dragon Palace” in any of the modes and drive to the large dojo/temple area. There is a big open space inside with plenty of room to practice your drifting. Once you are there, try and drift at different angles and experiment with how fast you are able to get a UMT. Don’t get too hung up on perfecting the angle, this is something you will be able to get a good intuition for the more you play and get experience.

## The Cost of Turning
Now we have gotten through the technical aspects of building up MTs we can cover some basic driving techniques. The most important thing to understand is that if you are driving, and you start turning, then it will reduce your speed and you will start to go slower. This is true regardless of whether you are turning normally, drifting, or turning in the air. Knowing this will give you a better intuition as to why many techniques are useful and will help you adapt to different scenarios when driving and ensure you are taking the best lines you can.

## Neutral Hops
A “neutral hop” is a technique where, if you are trying to hop over some off-road, you should avoid turning while in the air as much as possible. The reason this works is because if you are turning in the air your speed will drop and your kart will not hop as far. 

Most neutral hops require getting an MT to give you enough boost to clear the off-road and so to perform a neutral hop you need to release the MT and then immediately hop before the off-road starts. Once you have hopped let go of the control stick and only start touching the control stick again once you have landed. 

Some neutral hops are harder than others, but the most common mistake people make when learning neutral hop shortcuts is that they are releasing the MT and hopping too late and lose a bit of speed on the off-road before they have even hopped.

Examples of places you should use neutral hops are the shortcuts on Hyrule Circuit, Mute City, GBA Mario Circuit, and Shy Guy Falls. Even when not doing shortcuts, if you need to hop it is better to avoid turning in the air if you can.

## Neutral Drifts
A “neutral drift” is a technique where you try to minimise turning (aka touching the control stick) while you are in the middle of a drift. If you are drifting and you let go of the control stick but are still holding the drift button down, you will start to accelerate again and can reach your top speed. While this sounds useful it has limited applications since your MT will be accumulating very slowly (increasing 2 per frame) and most of the time when drifting you will be wanting to be moving the stick so you can get your MTs.

One place where neutral drifting is useful is Yoshi Valley on 200cc around the first turn. While it is possible to build up a UMT around this turn and release it before driving onto the bridge, it isn’t that beneficial because you only need a SMT to take you all the way to the end of the bridge. Instead, you can neutral drift around the whole turn while slowly building up an SMT, maintaining your top speed throughout most of the turn. This isn’t useful on 150cc though because an SMT won’t be enough to take you to the end of the bridge and so getting a UMT is optimal which isn’t possible if you are neutral drifting.

Another place where neutral drifts can be quite useful is Wario’s Gold Mine since there are a lot of turns that you only want to get an MT on, but the turn is long enough that you can neutral drift for a part of it.

## Start Angle vs Exit Angle

<img class="img-fluid float-right mx-4 my-2" src="/images/entry_vs_exit_angle.png" width="200px">

An important concept to keep in mind when doing a drift is to think about the angle at which you start your drift, versus the angle at which you exit your drift. Look at the example on the right and compare the green line to the orange line.

In this example, the green line is able to build up an MT, while the orange line is not. The reason for this is because the green line had the ability to turn more than the orange line did, and it was able to turn more because the difference between the start angle and the exit angle is larger. Here the difference between the angles in the green line is about 90 degrees, but for the orange line it is only 45 degrees.

## Counter Hops
Using this knowledge about start angle vs exit angle, we know that the larger the difference between these two angles, the easier it is to build up your MT. So if there is a turn where you are struggling to get the MT level you want, one way to fix it is to perform a “counter hop”. A counter hop is when you hop in the opposite direction of the turn before doing a drift. So if you want to take a left drift, you first do a hop to the right, then follow it up with a drift to the left.

There are many turns in the game where the optimal lines will make use of a counter hop. A great example is when taking the shortcut over the grass at the start of Thwomp Ruins. To see what this looks like, you can watch this video: 

<div class="embed-responsive embed-responsive-16by9" style="max-width: 800px; display: block; margin: auto auto 1rem auto">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/mJ48zh2TQs4" allowfullscreen></iframe>
</div>

In this video you can see that Alberto does a left drift over the grass, but before starting the left drift, he does a right hop. If he didn’t do that right hop he would not have built up the SMT in time to take the shortcut .

## Delay Drifts
A “delay drift”, also known as a “neutral hop drift”, is a technique where you do a neutral hop at the start of a drift. To start a drift in MK8DX you have to press the hop button, but the drift won’t actually start until your wheels have touched the ground again after the hop. Once your wheels have touched the ground your MT will start to accumulate.

If you hop while simultaneously holding the control stick left or right, you are going to be turning in the air while you are hopping. This period of time you are turning in the air you will not be accumulating any MT, and you will also lose some speed as we learnt earlier with neutral hops. Instead what you should do is press the hop button, then wait until your wheels have touched the ground to start turning.

Another reason you don’t want to turn in the air is that it means your starting angle of your drift will change more in the direction of your turn, so that means the difference between the starting angle and exit angle of the drift will be decreased and you will find it more difficult to build an MT.

This might sound like it is a pretty minor thing, but you should be doing delay drifts as much as possible, as it will make it much easier to build MTs and won’t slow you down as much. I personally do a delay drift on every turn I can. The moment I learnt about delay drifting it changed the way I played the game dramatically and I wish I was taught about it earlier. 

A great way to see the effect of delay drifting is to do a time trial comparison with and without doing delay drifts around the first two turns of DK Jungle or in the curvy section in the middle of Neo Bowser City.

## Hard Drifting vs Soft Drifting
Hard drifting means holding the control stick all the way to the left or right, 90 degrees from the vertical. Soft drifting refers to holding the control stick at a wider angle while still building the MT optimally (increasing by 5 per frame). In general, on most turns you will want to be soft drifting as much as possible, but the reasons for this are often misunderstood.

## The Problem with Hard Drifting
The real reason that you should avoid hard drifting is because the overwhelming majority of turns in this game are wide enough that if you did take a hard drift on them the whole way around, you would end up driving off the road or bumping the wall. If you try and hard drift your way through one of these turns you will usually do one of five things:

1. Start the drift later so you have more room and less risk of driving off road.
2. Realise half-way through the drift that you are about to drive off-road, so you steer in the opposite direction and hold it until you get the MT you want.
3. Wiggle drifting where you constantly switch between hard drifting and counter-steering.
4. Fall off because you drifted too tight with no way to recover.
5. Realise you are about to fall off and release your drift early without getting the MT that you wanted.

The first mitigation results in suboptimal racing lines because you will be taking turns too wide. The second and third mitigations are suboptimal because there will be a portion of the drift where you are not accumulating your MT optimally and so you will be holding the drift for much longer than you need to. The other two mitigations are also obviously suboptimal.

To test this out, try getting a UMT around the hairpin turn on DK Jungle that starts just after entering the temple and ends before the set of item boxes before the glider. If you hard drift around this turn to get a UMT, you will find yourself doing one of the five things listed above.

Having said this, there are still a small number of turns in the game that are in fact tight enough that the correct approach is to do a hard drift. A good example is the first turn on Super Bell Subway on 150cc once you have 10 coins. This turn is very tight and if you hard drift around it with 10 coins you will be taking the optimal line without bumping the wall.

## The Case for Soft Drifting
The real benefit of soft drifting is simple: It allows you to accumulate your MT optimally without having to drift so tight that you are forced to start your drift later or countersteer/wiggle drift.

However, soft drifting is not magical. If you start your drift too early you can still drive off the road, and some turns will still be too wide to soft drift the whole way around (see the next section for how to handle this). Soft drifting can suffer from all the same issues that hard drifting can, but if you master it you will start your drifts earlier, and take much more efficient lines while still being able to get the MT as fast as possible.

I’ve often heard people share what their “soft drifting angle” is, but there really isn’t a universal soft drifting angle. Each turn requires different angles depending on how wide it is, what matters is that you try and maximise the time spent accumulating MT optimally throughout the turn while at the same time trying to take the turn as tight as you can. On some turns the best angle will be 45 degrees, on other turns it might be 60 degrees or even 90 degrees.

## Wiggle Drifting is Good Sometimes
One common misconception that I saw repeated a lot when I started out playing is that “wiggle drifting is bad” and that it is a sign that you are a “bad player”. Wiggle drifting refers to when you quickly alternate between moving the stick left and right while in the middle of a drift. You move the stick tight so you build up your MT, and then move the stick wide so that you don’t drive off the road.

For the majority of turns in this game, it is correct that wiggle drifting is not useful and it should be avoided. But there are also a lot of turns in this game that are so wide that even if you soft drifted the whole way around you would go off-road or bump the wall. Some examples are the long turn at the start of Music Park, the turn after the glider on Sweet Sweet Canyon, and almost every turn on Mario Circuit. I would recommend watching the WR video for Mario Circuit below and you can see the wiggle drifting being done by watching the character’s hands moving on the wheel, especially around the first turn on Lap 2.

<div class="embed-responsive embed-responsive-16by9" style="max-width: 800px; display: block; margin: auto auto 1rem auto">
<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/RbckwBMM328?start=49" allowfullscreen></iframe>
</div>

When you approach one of these wide turns, the best way to drive is to keep quickly alternating between soft drifting and holding the stick wide in the opposite direction. Often when newer players are wiggle drifting, the problem is that they are hard drifting when they hold the stick tight, when they should be soft drifting. If you hard drift while wiggle drifting it means you will need to counter steer and drift wide more frequently than if you soft drifted instead.

## Unproven Things
As far as I am aware, there has not been any effort to dig into the game’s code to really understand how drifts work. Because of this there are a number of things that people feel are anecdotally true but have not been proven which I will list below:

- The tighter you turn, the more your speed decreases. The amount of speed lost by turning too tight is not known, so it is unclear if the difference is big or small.
  - If true, this would be another reason to favour soft drifting over hard drifting.
- Your speed while holding a UMT is slower than your speed while holding an SMT, which is slower than your speed while holding an MT.
  - If true, then this means that you should try to get the MT level you want as late as possible, and release it as soon as you get it.

I am not sure whether or not I believe either of the above and feel that it might just be misattributing the benefits of soft drifting to other things, but until they are proven or disproven I will leave them here as I don’t want to mislead people in saying I know for sure what the answer is and spreading even more rumours.

## Conclusion
That is pretty much all there is to teach about drifting that I can think of, thanks for giving my guide a read and if you have any suggestions, comments, or questions feel free to shoot me a message in discord (Vike#9470) or on twitter ([@VikeMK](https://twitter.com/vikemk)).
