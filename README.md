# ROCK - PAPER - SCISSORS

### Loops and Conditionals in Computer Programming

<img src="./rock-paper-scissors.png" width="500">

## Intro

Computers are obedient. They will only do what you tell them to, nothing more.

Pretend you are a computer and that I give you this program first thing in the moring:

```
1. Go to the kitchen
2. Open the cupboard
3. Grab a box of cereal
4. Get a bowl and milk
5. Pour the cereal into a bowl
6. Take a bite of cereal
7. Finish eating your cereal
8. Put dishes in the sink
```

Did you notice that you did not pour milk in the bowl?
Or that you could have been eating standing, with a fork.

Most importantly, did you catch that you only actually ate one bite of cereal?!

As computer scientists and programmers, we get to focus on _solving problems using the least energy possible_. AND Let's face it - you only getting one bite of cereal is a problem! - and we can FIX IT! But how do we program "computer you" so that you can eat every bite of cereal?

Let's put this problem (and our spoons) aside for a second and look at how we would use two critical computer science concepts (**loops and conditionals**) to tackle a similar problem: a game of rock-paper-scissors.

## ROCK PAPER SCISSORS

Look at all of those dishes in the sink! How will you and I decide who will wash and who will dry the dishes?

I'll play you rock, paper, scissors for it. And we'll make it a program.

Except for now .... let's just call it .... rock, rock, and rock (our computer program only registers rock at the moment).

## Loops

A **loop** is an instruction (or series of instructions) that is repeated until a condition or break point is reached.

There are _different types_ of loops that we can use when creating programs. Two of the most used types are while loops and for loops.

A **while loop** will continue running a sequence of steps until a once valid condition is made false.

```
while(conditionIsTrue){
    //run this code
}
```

Notice, there is no defined endpoint. A while loop can keep going for an undefinied amount of iterations before something triggers and exit to the loop.

A **for loop** on the other hand has a start point, an end point, and an iteration increment.

```
for(let i = startingPoint; i < endingPoint; i++){
    //run this code for a specific number of times and then exit
}
```

Fatal errors when looping? An infinite loop. A loop without a breaking point. This will freeze your computer by exceeding the call stack. Make sure every loop you create has a break point.

So now let's apply this to our game! What are some steps that we might need to go through everytime we play a game of rock-rock-rock?

## Conditionals

Now that we can play rock-rock-rock by looping over the instructions, how about we figure out who wins? Let's reintroduce our different game options: rock,paper, and scissors back again.

**Conditionals** mean that the computer should perform a different task based on which conditions are true. Most commonly, they take on an "if - then - else" form. These types of conditional statements _control the flow_ of the code.

```
if (conditionOneIsTrue){
    //this code runs if condition one is true
} else if (conditionTwoIsTrue){
    //this code runs if condition two is true
    //condition one is NOT true if this code runs
} else {
    //this code runs if neither condition one OR condition two is true
}
```

We responnd to conditionals all of the in real life. An example, "If you wash the dishes, then you can go play basketball. Otherwise, you will have to go study for the rest of the night."

In our game, how can we use conditionals to determine the winner of each game?

## Wrap - Up

Loops and conditionals are critical when it comes to saving energy and space. We don't know how many bites of cereal are in your bowl each morning, just like we don't know how many rounds of rock, paper, scissors you will need to play in order to determine who will wash all of the dishes. Loops tell the program to repeat a step (or multiple steps) any number number of times, saving us time and enery in repeating our code. Likewise, Conditionals will tell the program to act differently when faced with different scenarios. What happens when you play 'rock' and your friend throws down 'scissors'? Or determining the step that will follow your first bite versus the step that will follow your last.
