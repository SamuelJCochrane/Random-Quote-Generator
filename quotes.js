var quotes = "1. You can do anything, but not everything.—David Allen2. Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.—Antoine de Saint-Exupéry3. The richest man is not he who has the most, but he who needs the least.—Unknown Author4. You miss one hundred percent of the shots you never take.—Wayne Gretzky5. Courage is not the absence of fear, but rather the judgement that something else is more important than fear.—Ambrose Redmoon6. You must be the change you wish to see in the world.—Gandhi7. When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.—Lin-Chi8. The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.—A. A. Milne9. To the man who only has a hammer, everything he encounters begins to look like a nail.—Abraham Maslow10. We are what we repeatedly do; excellence, then, is not an act but a habit.—Aristotle11. A wise man gets more use from his enemies than a fool from his friends.—Baltasar Gracian12. Do not seek to follow in the footsteps of the men of old; seek what they sought.—Basho13. Watch your thoughts; they become words.Watch your words; they become actions.Watch your actions; they become habits.Watch your habits; they become character.Watch your character; it becomes your destiny.—Lao-Tze14. Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.—Georg Christoph Lichtenberg15. What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.—John Ruskin16. The real voyage of discovery consists not in seeking new lands but seeing with new eyes.—Marcel Proust17. Work like you don’t need money, love like you’ve never been hurt, and dance like no one’s watching—Unknown Author18. Try a thing you haven’t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.—Virgil Garnett Thomson19. Even if you’re on the right track, you’ll get run over if you just sit there.—Will Rogers20. People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.—Zig Ziglar21. Before I got married I had six theories about bringing up children; now I have six children and no theories.—John Wilmot22. What the world needs is more geniuses with humility, there are so few of us left.—Oscar Levant23. Always forgive your enemies; nothing annoys them so much.—Oscar Wilde24. I’ve gone into hundreds of [fortune-teller’s parlors], and have been told thousands of things, but nobody ever told me I was a policewoman getting ready to arrest her.—New York City detective25. When you go into court you are putting your fate into the hands of twelve people who weren’t smart enough to get out of jury duty.—Norm Crosby26. Those who believe in telekinetics, raise my hand.—Kurt Vonnegut27. Just the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright brothers. But they also laughed at Bozo the Clown.—Carl Sagan28. My pessimism extends to the point of even suspecting the sincerity of the pessimists.—Jean Rostand29. Sometimes I worry about being a success in a mediocre world.—Lily Tomlin30. I quit therapy because my analyst was trying to help me behind my back.—Richard Lewis31. We’ve heard that a million monkeys at a million keyboards could produce the complete works of Shakespeare; now, thanks to the Internet, we know that is not true.—Robert Wilensky32. If there are no stupid questions, then what kind of questions do stupid people ask? Do they get smart just in time to ask questions?—Scott Adams33. If the lessons of history teach us anything it is that nobody learns the lessons that history teaches us.—Anon34. When I was a boy I was told that anybody could become President. Now I’m beginning to believe it.—Clarence Darrow35. Laughing at our mistakes can lengthen our own life. Laughing at someone else’s can shorten it.—Cullen Hightower36. There are many who dare not kill themselves for fear of what the neighbors will say.—Cyril Connolly37. There’s so much comedy on television. Does that cause comedy in the streets?—Dick Cavett38. All men are frauds. The only difference between them is that some admit it. I myself deny it.—H. L. Mencken39. I don’t mind what Congress does, as long as they don’t do it in the streets and frighten the horses.—Victor Hugo40. I took a speed reading course and read ‘War and Peace’ in twenty minutes. It involves Russia.—Woody Allen41. The person who reads too much and uses his brain too little will fall into lazy habits of thinking.—Albert Einstein42. Believe those who are seeking the truth. Doubt those who find it.—André Gide43. It is the mark of an educated mind to be able to entertain a thought without accepting it.—Aristotle44. I’d rather live with a good question than a bad answer.—Aryeh Frimer45. We learn something every day, and lots of times it’s that what we learned the day before was wrong.—Bill Vaughan46. I have made this letter longer than usual because I lack the time to make it shorter.—Blaise Pascal47. Don’t ever wrestle with a pig. You’ll both get dirty, but the pig will enjoy it.—Cale Yarborough48. An inventor is simply a fellow who doesn’t take his education too seriously.—Charles F. Kettering49. Asking a working writer what he thinks about critics is like asking a lamppost how it feels about dogs.—Christopher Hampton50. Better to write for yourself and have no public, than to write for the public and have no self.—Cyril Connolly51. Never be afraid to laugh at yourself, after all, you could be missing out on the joke of the century.—Dame Edna Everage52. I am patient with stupidity but not with those who are proud of it.—Edith Sitwell53. Normal is getting dressed in clothes that you buy for work and driving through traffic in a car that you are still paying for – in order to get to the job you need to pay for the clothes and the car, and the house you leave vacant all day so you can afford to live in it.—Ellen Goodman54. The cure for boredom is curiosity. There is no cure for curiosity.—Ellen Parr55. Advice is what we ask for when we already know the answer but wish we didn’t.—Erica Jong56. Some people like my advice so much that they frame it upon the wall instead of using it.—Gordon R. Dickson57. The trouble with the rat race is that even if you win, you’re still a rat.—Lily Tomlin58. Never ascribe to malice, that which can be explained by incompetence.—Napoleon (Hanlon’s Razor)59. Imagination was given to man to compensate him for what he is not, and a sense of humor was provided to console him for what he is.—Oscar Wilde60. When a person can no longer laugh at himself, it is time for others to laugh at him.—Thomas Szasz";
var quotesArray = quotes.split(/\d/);
quotesArray = quotesArray.filter(e => e !== '' && e !== /[0-9]/)
quotesArray = quotesArray.map(function(e) {
	e = e.split();
	var ex = e[0];
	ex = ex.split(' ')
	ex.shift()
	return e = ex.join(' ')
});

var quotesArrayObj = [];

quotesArray.forEach(function(e) {
	var obj = {};
	var indexLine = e.indexOf('—');
	obj.quote = e.substring(0, indexLine);
	obj.quoted = e.substring(indexLine+1);
	quotesArrayObj.push(obj);
})

function getRandNum() {
	var num = Math.floor(Math.random()*60);
	return num;
}

function getRandQuote() {
	var num = getRandNum();
	var quote = quotesArrayObj[num].quote;
	var quoted = quotesArrayObj[num].quoted;
	return [quote, quoted]
}

getRandQuote()

var quoteButton = document.getElementById('quoteButton');
var quoteSpace = document.getElementById('quoteSpace');
var tweetButton = document.getElementById('tweet');
var quoteAndQuoted; 

quoteButton.addEventListener('click', function() {
	quoteAndQuoted = getRandQuote();
	quoteSpace.innerHTML = '<h2>' + quoteAndQuoted[0] + '</h2><br><h3 class="text-right">' + quoteAndQuoted[1] + '</h3>';

});

tweetButton.addEventListener('click', function() {
	tweetButton.setAttribute("href", 'https://twitter.com/intent/tweet?text=' + quoteAndQuoted[0] + ' -' + quoteAndQuoted[1]);
});





