Title: Invincibility in Mario Kart 8 Deluxe
Description: How to calculate invincibility time for your combination
Published: 25/5/2023
Image: /images/bg/bwp.jpg
---

In version 2.2.0, Nintendo introduced a new hidden stat to Mario Kart 8 Deluxe, Invincibility, which controls how long you will be invincible for after you have gotten hit. 
In this blog post I will walk through how you can see this stat, how that stat value maps to a scaling factor, and how you can use the scaling factor to calculate exactly how long the invincibility time will be.

The majority of the information and numbers in this guide come from the [Mario Kart Blog](http://japan-mk.blog.jp/mk8dx.info-1) and it would not be possible without their work.

## Seeing your invincibility stat
To find your invincibility stat, you will need to use a combo builder website and fill in your combination.
Two such sites are [mk8dxbuilder.com](https://mk8dxbuilder.com/) or the [combo finder](/tools/mk8dx-combo-finder) on my site.
The stat value should be a number between 1 and 5.75.

As an example, the combination Yoshi / Inkstriker / Roller / Cloud Glider has an invincibility stat of 2.25.

## How it gets converted to in-game invincibility time
When you get hit, you are stopped and unable to move for a short period of time, then you are able to start driving again and the invincibility time (also known as invincibility frames or i-frames) will start.
The duration of time you are unable to move, and the duration you are invincible depends on what you were hit by. Below is a table showing how many frames each component takes for each damage source. Durations are given in a number of frames which can be converted to seconds by dividing by 60 as Mario Kart 8 Deluxe runs at 60 frames per second.

<div class="row justify-content-center">
<div class="col-auto">

<?# Table Class="table table-striped table-bordered table-sm table-hover text-center table-responsive" HeaderRows=1 ?>
<?*
"Damage Source" "Stopped Frames" "Invincibility Frames"
"Green Shell, Red Shell" 90 91     
"Banana, Blue Shell, Bob-omb" 90 90     
Lightning 60 90     
"Boomerang Flower" 65 57     
"Bullet Bill, Super Horn" 65 56     
"Fire Flower" 63 56     
"Star, Piranha Plant, Other" 60 60     
?>
<?#/ Table ?>

</div>
</div>

The invincibility stat works by scaling up or down the number of invincibility frames and does not affect the number of stopped frames.
To calculate how much it gets scaled by, you need to find the scaling factor using the following table.

<div class="row justify-content-center">
<div class="col-auto">

<?# Table Class="table table-striped table-bordered table-sm table-hover text-center table-responsive" HeaderRows=1 ?>
<?*
"Invincibility Stat" "Scaling Factor"
1.00 0.65     
1.25 0.67     
1.50 0.70     
1.75 0.74     
2.00 0.79     
2.25 0.85     
2.50 0.91     
2.75 0.97     
3.00 1.03     
3.25 1.09     
3.50 1.15     
3.75 1.20     
4.00 1.25     
4.25 1.29     
4.50 1.33     
4.75 1.37     
5.00 1.41     
5.25 1.44     
5.50 1.47     
5.75 1.50     
?>
<?#/ Table ?>

</div>
</div>

Once you have the scaling factor, you can multiply it by the number of invincibility frames to get the actual number of invincibility frames you will experience in-game.

## A worked example

As an example, let's say that you are using Yoshi / Inkstriker / Roller / Cloud Glider and have just hit a banana.

- We know that the invincibility stat is 2.25, and using the table we can get a scaling factor of 0.85.
- Getting hit by a banana will stop you for 90 frames (1.5 seconds), and will then have a further 90 frames (1.5 seconds) of invincibility.
- We multiply the 90 frames of invincibility by 0.85 to get the correct invincibility frame count of ~77 frames (1.28 seconds).
- In total, you will be stopped or invincible for 167 frames (2.78 seconds).

## Some more examples to compare

<div class="row justify-content-center">
<div class="col-auto">

<?# Table Class="table table-striped table-bordered table-sm table-hover text-center table-responsive" HeaderRows=1 ?>
<?*
Combination "Invincibility Stat" "Damage Source" "Stopped Duration" "Invincibility Duration" "Total Duration"
"Yoshi / Inkstriker / Roller / Cloud" 2.25 Banana "90F / 1.5s" "77F / 1.28s" "167F / 2.78s"     
"Yoshi / Teddy Buggy / Button / Cloud" 2.75 Banana "90F / 1.5s" "87F / 1.45s" "177F / 2.95s"     
"Yoshi / Teddy Buggy / GLA / Cloud" 3.25 Banana "90F / 1.5s" "98F / 1.63s" "188F / 3.13s"     
"Yoshi / Inkstriker / Roller / Cloud" 2.25 Star "60F / 1s" "51F / 0.85s" "111F / 1.85s"     
"Yoshi / Teddy Buggy / Button / Cloud" 2.75 Star "60F / 1s" "58F / 0.97s" "118F / 1.97s"     
"Yoshi / Teddy Buggy / GLA / Cloud" 3.25 Star "60F / 1s" "65F / 1.08s" "125F / 2.08s"     
?>
<?#/ Table ?>

</div>
</div>

## How much invincibility do I need?

This is a much harder question to answer and it really comes down to each individual and their playstyle.
My blog post on [choosing your combination](/posts/mk8dx-combos) goes into more details about how to choose your combination and weigh it against the other stats.

As an example of why playstyle matters, imagine a situation where you are in first place and you currently have two protective items, but you really want to get a super horn as you think a blue shell may come soon.
Having higher invincibility makes throwing away those two protective items slightly less risky since the person behind you will have to space out red shells more to hit you twice, and it is more likely they will fail to space it apart enough and waste a red shell. 
If you are a more risk-averse player who would instead prefer to hold those two protective items, then maybe you won't benefit as much from that additional invincibility.

A 0.25 increase in invincibility stat is not very noticeable, but a 1.00 increase in invincibility stat is much more noticeable with you getting around 0.35 seconds extra invincibility when hit by a banana and 0.23 seconds extra invincibility when hit by a star.
It is easy to think of scenarios where having an extra 0.35 seconds of invincibility could get you a much better position at the end of the race.
Increasing your invincibility stat will usually come at the cost of some other stat values, so you will need to weight those costs against the benefits when choosing your combination.

GLA Tires seems to be a popular choice at the moment for getting significantly more invincibility, however it does come at the cost of 0.5 MT.
Leaf and Button tires also are good options for getting a bit more invincibility while only sacrificing 0.25 MT. 
Cushion and Sponge tires also have very good invincibility, but from my experience they seem to be very bouncy and that impacts driving lines a lot where it may not be a viable choice, but I would encourage you to try it out and form your own opinion. 
If after all this, you think that the invincibility stat seems like it has too little impact to be useful, then sticking with Roller tires will be the best option.
