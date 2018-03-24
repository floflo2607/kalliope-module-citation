/* Magic Mirror Module: random_quotes
 * v1.0 - June 2016
 *
 * By Ashley M. Kirchner <kirash4@gmail.com>
 * Beer Licensed (meaning, if you like this module, feel free to have a beer on me, or send me one.)
 */

Module.register("random_quotes",{

	/* Quotes are courtesy of BrainyQuote.com
	   There is no 'automated' way to fetch random quotes from BrainyQuote.com. You'll have to
	   manually do that yourself. Or find a free random quote API at which point you are welcome
	   to rewrite this module to use that. All the ones I've found are paid services. Free ones
	   only allow a single quote for the day. Kinda defeats the purpose.
	 */

	// Module config defaults.
	defaults: {
		updateInterval: 300,	// Value is in SECONDS
		fadeSpeed: 4,			// How fast (in SECONDS) to fade out and back in when changing quotes
		category: 'random',		// Category to use
		quotes: {
			inspirational: [
				"Votre grande opportunité pourrait être là où vous êtes maintenant. ~ Napoleon Hill",
				"L'espoir n'est que le rêve de ceux qui se réveillent.~ Matthew Prior ",
				"Les hommes doivent vivre et créer, vivre au point de pleurer. ~ Albert Camus ",
				"Essaie d'être un arc-en-ciel dans le nuage de quelqu'un. ~ Maya Angelou",
				"Je pense que la raison de mon succès est que je ne suis vraiment pas ambitieux, je suis inspirant en ce sens que les gens à la maison ont l'impression qu'ils peuvent vraiment m'identifier à moi. ~ Rosie O'Donnell ",
				"En fait, je n'appellerais pas ça un album Gospel, je l'appelle plus un album inspirant. ~ Smokey Robinson ",
				"Agissez comme si vous vous attendiez à entrer dans la zone des buts.~ Christopher Morley ",
				"Un compliment est quelque chose comme un baiser à travers un voile. ~ Victor Hugo",
				"Chaque coeur qui a battu fortement et avec joie a laissé derrière lui une impulsion d'espoir dans le monde, et a amélioré la tradition de l'humanité. ~ Robert Louis Stevenson",
				"J'ai toujours cru, et je crois toujours, que quelle que soit la bonne ou la mauvaise fortune qui se présente à nous, nous pouvons toujours lui donner un sens et la transformer en quelque chose de valeur.~ Hermann Hesse ",			],
			life: [
				"A real man loves his wife, and places his family as the most important thing in life. Nothing has brought me more peace and content in life than simply being a good husband and father. ~ Frank Abagnale",
				"I don't know why his lawyers didn't tell him, 'You don't have to answer any questions about your private life, Mr. President. Let them sue you. Take the heat. You don't have to answer.' ~ Chris Matthews",
				"Life is full of beauty. Notice it. Notice the bumble bee, the small child, and the smiling faces. Smell the rain, and feel the wind. Live your life to the fullest potential, and fight for your dreams. ~ Ashley Smith",
				"For me life is continuously being hungry. The meaning of life is not simply to exist, to survive, but to move ahead, to go up, to achieve, to conquer. ~ Arnold Schwarzenegger",
				"Without deep reflection one knows from daily life that one exists for other people. ~ Albert Einstein",
				"To me, having kids is the ultimate job in life. I want to be most successful at being a good father. ~ Nick Lachey",
				"I believe that I was a dog in a past life. That's the only thing that would explain why I like to snack on Purina Dog Chow. ~ Dean Koontz",
				"To be idle is a short road to death and to be diligent is a way of life; foolish people are idle, wise people are diligent. ~ Buddha",
				"We can't plan life. All we can do is be available for it. ~ Lauryn Hill",
				"Friends are as companions on a journey, who ought to aid each other to persevere in the road to a happier life. ~ Pythagoras",],
			love: [
				"Un grand amour rend légers tous les maux qui nous semblent trop lourds à porter seul. de George Sand "
				"L'amour est l'aspiration sainte de la partie la plus éthérée de notre être vers l'inconnu.de George Sand"
				"L'amour est le seul sentiment qui nous fasse chérir jusqu'aux caprices et travers de la personne aimée, le dernier effort d'une amitié sincère n'allant tout au plus qu'à nous les faire supporter.de Hyacinthe de Charencey"
				"On n'aime par amour ni deux personnes, ni deux fois de la même façon. de Hyacinthe de Charencey"
				"En amour, il ne faut pas toujours savoir ce qu'on dit. de Anne Barratin"
				"L'amour a des jours de tigresse et des heures de gazelle. de Anne Barratin"
				"L'amour, comme il fait bien corps avec la jeunesse, comme il chante bien dans sa voix, comme il badine bien avec son sourire, comme il divague bien sur ses lèvres, comme il désire avec impudeur, comme il part content et comme il revient joyeux ! de Anne Barratin"
				"On a l'amour plus ou moins goulu ; certains amoureux rappellent l'enfant perdu jusqu'au menton dans sa tartine. de Anne Barratin"
				"L'amour ne se prouve pas, il s'éprouve ; il ne se démontre pas, il se montre. de Antoine Claude Gabriel Jobert"
				"L'amour véritable se reconnaît à deux signes authentiques, la constance et l'oubli de soi. de Henri-Frédéric Amiel"
				"Les premiers transports de l'amour sont si violents et si sublimes que tout se range à leur puissance ; toutes les difficultés s'aplanissent, tous les germes de dissension se paralysent, tout marche au gré de ce sentiment qu'on appelle avec raison l'âme du monde, et dont on aurait dû faire le dieu de l'univers ; mais quand il s'éteint, toute la nudité de la vie réelle reparaît, les ornières se creusent comme des ravins, les aspérités grandissent comme des montagnes. de George Sand"
				"L'amour est un feu dont la chaleur s'amortit faute d'aliment, et le refroidissement en est plus prompt quand la flamme a plus de surface que de profondeur, quand le corps aime plus que l'âme. de Charles de Bernard"
				"L'amour est un roman à qui les femmes servent d'éditeur. de Jean Louis Auguste Commerson"
				"L'amour est une émanation du ciel, c'est comme une partie de la substance divine. L'amour rend à la vie sa saveur, sa force et sa plénitude : comme un soleil, il en dissipe les nuages, comme un baume, il en adoucit les amertumes. Quand on aime, on a le ciel au-dedans de soi, nos plus lourds fardeaux deviennent légers, nos plus grandes tribulations sont pleines de charmes.de Alfred Auguste Pilavoine "
				"L'amour est un secret entre deux cœurs, un mystère entre deux âmes.de Henri-Frédéric Amiel"
				"L'amour est une plante de printemps qui parfume tout de son espoir, même les ruines où il s'accroche. de Gustave Flaubert"
				"Quand on aime, on aime tout. Tout se voit en bleu quand on porte des lunettes bleues. L'amour comme le reste n'est qu'une façon de voir et de sentir. C'est un point de vue un peu plus élevé, un peu plus large ; on y découvre des perspectives infinies et des horizons sans bornes. de Gustave Flaubert"
				"L'amour, après tout, n'est qu'une curiosité supérieure, un appétit de l'inconnu qui vous pousse dans l'orage, poitrine ouverte et tête en avant. de Gustave Flaubert"
				"L'amour se compose d'un si grand nombre de sensations qu'il laissera toujours de nouvelles choses à dire. En général, on ne le connaît qu'à proportion de ce qu'il coûte au cœur. Cette idée qui, au premier instant, semble paradoxale, est, au fond, de la plus grande justesse. Lorsque l'amour est d'accord avec les convenances sociales, il conduit par une pente si rapide au bonheur, qu'à peine on peut le sentir tout entier ; puis la sainteté du mariage, réglant l'amour, le condamne à une sorte de quiétude qui, à force d'être douce et paisible, le berce et l'endort. de Antoine-Jean Cassé de Saint-Prosper"
				"L'amour tient tant de place dans la vie d'une femme tendre, il absorbe tellement son temps et ses facultés, le charme idéal dont il l'environne est si puissant, et se répand tellement sur tout, que lorsqu'elle arrive à l'âge où il faut y renoncer, elle croit se réveiller après un long rêve, et apercevoir pour la première fois les peines et les misères de la vie. de Constance de Théis"
				"L'amour ressemble à un torrent impétueux qui entraîne tout dans son cours rapide, mais il perd de sa force à mesure qu'il s'étend. L'amitié ressemble à un fleuve majestueux roulant ses eaux dans une riche plaine, et prenant sans cesse de nouveaux accroissements. de Jean-Claude Delamétherie"
				"L'amour est un véritable état d'ivresse, c'est un sentiment impérieux qui domine tous les autres. de Jean-Claude Delamétherie"
				"Amour ! feu dévorant qui consume l'âme, source de voluptés et de peines, fait pour le bonheur et le malheur des hommes, tu serais le souverain bien si, lorsque tu es heureux, tu pouvais subsister ! Tes charmes sont indicibles, toi seul peux remplir entièrement le cœur. Deux amants se suffisent à eux-mêmes ; le reste de l'univers n'est plus rien pour eux. de Jean-Claude Delamétherie"
				"Le vrai chrétien est la plus belle image de Dieu sur la terre, c'est la sagesse en action. Le chrétien sait tout ce qu'il faut savoir, veut tout ce qu'il doit vouloir, et peut tout ce qu'il veut. Sa puissance intellectuelle est dans sa foi, sa puissance active dans la charité, son bonheur dans l'espérance. de Alfred Auguste Pilavoine"
				"Ne parlez pas d'impossibilité, l'amour n'en connait point ; il franchit les montagnes, il traverse les mers, il fend les rochers. Ardent comme la flamme, fort comme le lion, doux comme la colombe, l'amour se transforme et se multiplie pour multiplier ses bienfaits. Il ne connaît point de repos, à tous les cris de détresse il accourt ; il ne connaît point d'exceptions, il est tout à tous ; en vain la haine rugit autour de lui, en vain l'orgueil déchaîne contre lui toute sa rage ; l'amour n'entend rien, ne sent rien, il ne répond qu'à la voix intérieure qui le pousse à s'immoler. Ô prodige, ô puissance de l'amour ! de Alfred Auguste Pilavoine"			],
				"L'amour, c'est vivre à deux le meilleur comme le pire, c'est partager la jouissance et les pleurs. de Antoine Hamilton"
				"L'amour est la chaleur inépuisable qui rajeunit les êtres, qui les fait fleurir avec grâce et les revêt d'espérance ; c'est l'attrait inséparable de tout signe de perfection. L'amour bien senti suppose le goût de ce qui est beau, de ce qui est honnête, sincère et généreux. de Étienne Pivert de Senancour"
				"Comme l'ambition, l'amour est inspirateur de courage et de grands desseins. L'amour donne surtout à la femme une force de résolution, une énergie de caractère qui la pousse à des actes où s'efface la timidité de son sexe, où disparaît la faiblesse de son corps, où se décuple la puissance de son esprit. L'amour semble inoculer en elle un nouvel être ; de graves pensées l'envahissent et chassent les joies folâtres ; d'autres besoins lui créent une autre existence. de Louis-Auguste Martin"
				"La loi de sacrifice est la première loi de l'amour, il ne vit pas d'hésitations, de réticences ni de calculs. de Louis-Auguste Martin"
				"L'amour exige, pour durer, bien des ménagements délicats ; rien de plus frêle que cette fleur de printemps, elle n'aime que l'haleine du zéphyr et les rayons d'un soleil doux ; elle s'étiole et périt au contact d'un souffle trop brûlant, au choc de mouvements trop brusques. Mais soumise à une culture bienfaisante et modérée, elle conservera longtemps son parfum et sa fraîcheur. de Louis-Auguste Martin"
				"L'amour à un, c'est l'amour unilatéral et anormal. L'amour à deux, c'est l'amour normal et bilatéral. L'amour à trois, c'est l'amour triangulaire et tripartite. L'amour à quatre, c'est l'amour quadrangulaire et au carré. L'amour à cinq, c'est l'amour quinquennal conforme au plan du même nom. L'amour à six, c'est l'amour hexagonal et pyramidal. L'amour à sept, c'est l'amour septennal en fonction de celle du septennat du présidentiel républicain. L'amour à huit, c'est l'amour octogonal qui se fait en faisant des huit. L'amour à neuf, c'est l'amour qui se pratique sur ou sous le pont du même adjectif numéral cardinal. L'amour à dix, c'est l'amour systématique et décadaire du système décimal. L'amour à onze, c'est l'amour fatal au bouillon de la même heure. L'amour à douze, c'est l'amour à la Louis douzième du nom ou à la Père du peuple, qui s'exerce avec une douzaine d'huîtres en bandoulière, une douzaine d'escargots en sautoir et une grosse de moules en couronne autour du ventre. de Pierre Dac"
				"Quand le passif d'un amour dépasse son actif, c'est la faillite de cet amour ou, tout au moins, le dépôt de son bilan amoureux. de Pierre Dac"
				"Pour un homme impulsif et spontané en amour instantané et irraisonné, jeter subitement et brusquement son dévolu sur une femme qui lui plaît beaucoup ne l'autorise pas, pour autant, à la jeter soudainement et brutalement par la fenêtre quand elle ne lui plaît plus du tout. de Pierre Dac"
				"Quand l'amour bout à gros bouillons, c'est qu'il transpire parce qu'il a beaucoup trop chaud. de Pierre Dac"
				"Un amour mort et réduit en cendres ne se met pas en terre, mais se disperse au vent. de Pierre Dac"
				"L'amour est une goutte céleste que les cieux ont versée dans le calice de la vie pour en corriger l'amertume. de Louis de Montchamp"
				"Les courtes absences animent l'amour, mais les longues le font mourir. de Louis de Montchamp"
				"Entre l'amour au mois complet et l'amour à l'année entière, il y a l'amour à la petite semaine. de Pierre Dac"
				"L'amour qui fait du porte-à-porte le fait ainsi et de la sorte pour faire du lit-à-lit et du couche-à-couche. de Pierre Dac"
				"Un amour partagé n'a, paradoxalement, qu'une demi valeur d'apriorisme. de Pierre Dac"
				"L'amour ne se mouille jamais dans les cœurs desséchés. de Pierre Dac"
				"L'amour qui se déchaîne, c'est un fleuve en crue qui ne se contrôle plus. de Pierre Dac"
				"Aimer, absorber tout dans la même pensée, existence future, existence passée, jouissances et pleurs ; Aimer, c'est l'union des plus intimes flammes, c'est la vie entre deux âmes ; aimer, c'est le ciel entre deux cœurs. de Édouard Turquety"
				"Les nouvelles amours sont à leur naissance comme les jeunes oiseaux, qui n'ont besoin d'abord que de chaleur et d'être couvés ; plus tard il leur faut de la nourriture. de Jean-Paul Richter"
				"L'amour est une pure rosée qui descend du ciel dans notre cœur, quand il plaît à Dieu. de Arsène Houssay"
				"Les soupirs de l'amour sont la respiration du cœur ; sans amour, la vie est une nuit au milieu d'une éclipse de lune, mais lorsque cette nuit n'est plus obscurcie par l'interposition d'aucun globe terrestre, une douce lumière éclaire le monde ; les belles de nuit entrouvrent leurs calices, les rossignols font retentir des accents mélodieux, le ciel est partout. de Jean-Paul Richter"
				"L'amour naît et se nourrit du mystère et de l'inconnu. Son but c'est l'unification de deux êtres. Les voiles levés, l'unification consommée, la curiosité satisfaite ; l'amour, si son objet est estimable, se transforme en véritable amour ; sinon, il meurt. de Auguste Guyard"
				"Que d'aimables petits mots que la femme qu'on aime seule comprend ! que de soins imperceptibles qui échappent à tout autre !... Elle paraît, et le cœur se dilate ; elle s'éloigne, et le cœur se resserre ;... elle revient, et on distinguerait son pas entre mille autres femmes. Ses paroles peignent moins ses pensées que l'inflexion de sa voix, il suffit d'entendre prononcer son nom pour frémir doucement. de François-Rodolphe Weiss"
				"Quand se lassera-t-on de représenter l'Amour sous les traits d'un enfant, et de l'orner d'un carquois ? Qui n'est jamais mort des coups partis de ce joujou ? L'Amour, le vrai Amour, c'est un monsieur déjà mûr, ayant de l'or et des diamants dans ses poches, et non ce bambin tout nu qu'on peint sur les plafonds. de Pierre-Jules Stahl"
				"Être aimé n'est qu'un bonheur humain, le charme d'aimer est la volupté des anges. de Charles de Pougens"
				"Ôter du monde les femmes et les fleurs, c'est vivre en un lieu sans beauté ni douceur. de Hypolite de Livry"
				"Dans les affaires d'amour, de l'innocence à la faute, il n'y a qu'un baiser. de Louis de Montchamp"
				"L'amour est le soleil qui fait éclore les fleurs de l'âme, et qui leur fait exhaler de suaves parfums. de Alphonse Karr"
				"L'amour est comme le fruit du lotus, quand on y a goûté, tout ce qui n'est pas lui devient insipide. de Alphonse Karr"
				"L'amour des parents pour leurs enfants, l'amour filial, le dévouement de l'amitié, l'ardeur du courage, se ressemblent dans tous les temps ; mais les relations de l'homme avec la femme varient complètement selon les mœurs, et l'on pourrait dire même qu'elles caractérisent les mœurs. de Louis-Auguste Martin"],
			motivational: [
				"Be kind whenever possible. It is always possible. ~ Dalai Lama",
				"You are never too old to set another goal or to dream a new dream. ~ C. S. Lewis",
				"Get action. Seize the moment. Man was never intended to become an oyster. ~ Theodore Roosevelt",
				"The people who influence you are the people who believe in you. ~ Henry Drummond",
				"The first question which the priest and the Levite asked was: 'If I stop to help this man, what will happen to me?' But... the good Samaritan reversed the question: 'If I do not stop to help this man, what will happen to him?' ~ Martin Luther King, Jr.",
				"We should not give up and we should not allow the problem to defeat us. ~ A. P. J. Abdul Kalam",
				"You can't cross the sea merely by standing and staring at the water. ~ Rabindranath Tagore",
				"Leap, and the net will appear. ~ John Burroughs",
				"Do your work with your whole heart, and you will succeed - there's so little competition. ~ Elbert Hubbard",
				"Do not wait to strike till the iron is hot; but make it hot by striking. ~ William Butler Yeats",
			],
			positive: [
				"I faced quite a few challenging times, and in front of those, I was more positive than some people not facing those conditions. I'm actually of the belief now that it is that struggle that offers you that open-hearted hope. ~ K'naan",
				"So there was a fire inside me. And that fire inside you, it can be turned into a negative form or a positive form. And I gradually realised that I had this fire and that it had to be used in a positive way. ~ John Newcombe",
				"I can walk into a room and create a good ambience. I was taught all about this back when I studied acting. One of the things they would teach you is how to send out positive signals when you enter a room. I am glad I learned this. ~ Jean Reno",
				"Very gifted people, they win and they win, and they are told that they win because they are a winner. That seems like a positive thing to tell children, but ultimately, what that means is when they lose, it must make them a loser. ~ Joshua Waitzkin",
				"I collect crystals and gemstones, and I've been collecting them since I was a little girl. They give me positive energy and strength. They make me feel connected to the earth. I cherish them. ~ Isabel Lucas",
				"Failure is enriching. It's also important to accept that you'll make mistakes - it's how you build your expertise. The trick is to learn a positive lesson from all of life's negative moments. ~ Alain Ducasse",
				"So, we have choice, and sometimes it seems very hard, but the best way to heal physically or emotionally is to keep positive. ~ Petra Nemcova",
				"Say and do something positive that will help the situation; it doesn't take any brains to complain. ~ Robert A. Cook",
				"Everyone at home is so supportive. People recognise me, say how proud they are of me. It's awesome to hear, it's amazing to know I can touch so many people in a positive way. ~ Kirsty Coventry",
				"Electricity is of two kinds, positive and negative. The difference is, I presume, that one comes a little more expensive, but is more durable; the other is a cheaper thing, but the moths get into it. ~ Stephen Leacock",
			],
			success: [
				"The road to success is always under construction. ~ Lily Tomlin",
				"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself. ~ Mark Caine",
				"I mean, we are tribal by nature, and sometimes success and material wealth can divide and separate - it's not a new philosophy I'm sharing - more than hardship, hardship tends to unify. ~ Colin Farrell",
				"Nothing is as seductive as the assurance of success. ~ Gertrude Himmelfarb",
				"Good planning is important. I've also regarded a sense of humor as one of the most important things on a big expedition. When you're in a difficult or dangerous situation, or when you're depressed about the chances of success, someone who can make you laugh eases the tension. ~ Edmund Hillary",
				"I'll tell you, there is nothing better in life than being a late bloomer. I believe that success can happen at any time and at any age. ~ Salma Hayek",
				"My definition of success is to live your life in a way that causes you to feel a ton of pleasure and very little pain - and because of your lifestyle, have the people around you feel a lot more pleasure than they do pain. ~ Tony Robbins",
				"No one who achieves success does so without acknowledging the help of others. The wise and confident acknowledge this help with gratitude. ~ Alfred North Whitehead",
				"Success is not final, failure is not fatal: it is the courage to continue that counts. ~ Winston Churchill",
				"Success is finding satisfaction in giving a little more than you take. ~ Christopher Reeve",
			]
		},
	},


	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastQuoteIndex = -1;

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed * 1000);
		}, this.config.updateInterval * 1000);
	},

	/* randomIndex(quotes)
	 * Generate a random index for a list of quotes.
	 *
	 * argument quotes Array<String> - Array with quotes.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(quotes) {
		if (quotes.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * quotes.length);
		};

		var quoteIndex = generate();

		while (quoteIndex === this.lastQuoteIndex) {
			quoteIndex = generate();
		}

		this.lastQuoteIndex = quoteIndex;

		return quoteIndex;
	},

	/* quoteArray()
	 * Retrieve an array of quotes for the time of the day.
	 *
	 * return quotes Array<String> - Array with quotes for the time of the day.
	 */
	quoteArray: function() {
		if (this.config.category == 'random') {
			return this.config.quotes[Object.keys(this.config.quotes)[Math.floor(Math.random() * Object.keys(this.config.quotes).length)]];
		} else {
			return this.config.quotes[this.config.category];
		}
	},

	/* randomQuote()
	 * Retrieve a random quote.
	 *
	 * return quote string - A quote.
	 */
	randomQuote: function() {
		var quotes = this.quoteArray();
		var index = this.randomIndex(quotes);
		return quotes[index].split(" ~ ");
	},

	// Override dom generator.
	getDom: function() {
		var quoteText = this.randomQuote();

		var qMsg = quoteText[0];
		var qAuthor = quoteText[1];

		var wrapper = document.createElement("div");

		var quote = document.createElement("div");
		quote.className = "bright medium light";
		quote.style.textAlign = 'center';
		quote.style.margin = '0 auto';
		quote.style.maxWidth = '50%';
		quote.innerHTML = qMsg;

		wrapper.appendChild(quote);

		var author = document.createElement("div");
		author.className = "light small dimmed";
		author.innerHTML = "~ " + qAuthor;

		wrapper.appendChild(author);

		return wrapper;
	}

});
