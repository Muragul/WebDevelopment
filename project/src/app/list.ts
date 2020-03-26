import {CATEGORIES} from './mock-categories';

export const List = [
  {
    id: 1,
    title: 'Antipasto Squares',
    description: 'Layers of roasted red bell pepper and deli meats cheeses are baked inside a crescent roll crust.',
    ingredients: [
          '2 (10 ounce) cans refrigerated crescent dinner rolls',
          '1/4 pound thinly sliced boiled ham',
          '1/4 pound thinly sliced provolone cheese',
          '1/4 pound thinly sliced Swiss cheese',
          '1/4 pound thinly sliced Genoa salami',
          '1/4 pound thinly sliced pepperoni sausage',
          '1 (12 ounce) jar roasted red peppers, drained, cut into thin strips',
          '3 eggs',
          '3 tablespoons grated Parmesan cheese',
          '1/2 teaspoon ground black pepper'
        ],
    steps: [
            'Preheat oven to 350 degrees F (175 C).',
            'Unroll one package of crescent roll dough, and cover the bottom of a 9x13 inch pan. ' +
            'Layer the ham, provolone cheese, Swiss cheese, salami, pepperoni, and red peppers, on top of the dough.',
            'In a bowl, beat the eggs lightly, and stir in the parmesan cheese and black pepper. ' +
            'Pour 3/4 of this mixture over the peppers. Unroll the second package of dough, and place over the top of ' +
            'the peppers. Brush with the remaining egg mixture. Cover with aluminum foil.',
            'Bake for 25 minutes in the preheated oven. Remove foil, and bake another 10 to 20 minutes, or until dough ' +
            'is fluffy and golden brown. Cut into squares. Serve warm, or at room temperature.'
        ],
    likes: 17,
    comments: [
            'Oh my goodness! Followed previous advice about baking the bottom layer for 6 minutes, and that is all I changed.' +
            ' Ranting and raving followed! ',
            'YUM!!!!!!!!!!! I took these to a party and they were a MAJOR HIT!!!! I spruced up the recipe a little bit' +
            ' after reading the reviews.',
            'Delicious! I don\'t care for swiss cheese. So, I did eliminate it from the recipe. ' +
            'I also just did one layer of the red peppers. '
        ],
    front_image: '../../assets/1_0.jpg',
    images: [
            '../../assets/1_1.jpg',
            '../../assets/1_2.jpg',
            '../../assets/1_3.jpg'
        ],
    category: CATEGORIES[0]
  },
  {
    id: 2,
    title: 'Mushroom and Ricotta Bruschetta',
    description: 'This appetizer is super simple and tasty. Cook the mushrooms while you prepare the toasted bread, ' +
      'and you\'ll be serving these up in no time.',
    ingredients: [
      '1 cup ricotta cheese',
      '1 egg',
      '1 lemon, zested',
      '1/2 teaspoon salt',
      '1 pinch freshly ground black pepper, or to taste',
      '1 pinch red pepper flakes, or to taste',
      '4 slices French bread, toasted',
      '1 tablespoon olive oil',
      '1 tablespoon butter'
    ],
    steps: [
      'Preheat oven to 425 degrees F (220 degrees C).',
      'Mix ricotta, egg, lemon zest, 1/2 teaspoon salt, black pepper, and red pepper flakes in a bowl until smooth.',
      'Place toasted bread slices on a baking sheet. Sprinkle with 1 tablespoon olive oil and evenly divide ricotta mixture ' +
      'atop 4 bread slices.',
      'Bake in the preheated oven until cheese is browned, about 12 minutes.',
      'Heat butter and 1 tablespoon olive oil in a large skillet over medium-high heat; cook and stir mushrooms in mixture ' +
      'until browned, 5 to 6 minutes. Add green onions; cook and stir until softened, 2 to 3 minutes. Stir marsala wine ' +
      'into mixture and cook until reduced by half, about 1 minute.',
      'Reduce heat to medium-low. Add chicken stock and lemon juice to skillet; cook until liquid has evaporated. ' +
      'Reduce heat to low. Stir in parsley and butter. Season with salt and black pepper to taste.',
      'Spoon mushroom mixture equally atop 4 slices of ricotta-topped bread slices.'
    ],
    likes: 39,
    comments: [
      'Delicious! I don\'t care for swiss cheese. So, I did eliminate it from the recipe. ' +
      'I also just did one layer of the red peppers.',
      'Oh my goodness! Followed previous advice about baking the bottom layer for 6 minutes, and that is all I changed.' +
      ' Ranting and raving followed! '
    ],
    front_image: '../../assets/2_0.jpg',
    images: [
      '../../assets/2_1.jpg',
      '../../assets/2_2.jpg'
    ],
    category: CATEGORIES[0]
  },
  {
    id: 3,
    title: 'Mexican White Cheese Dip/Sauce',
    description: 'This dip is similar to white cheese sauces served in many Mexican restaurants. The amount of heat ' +
      'can be adjusted by adding your favorite chili pepper or crushed cayenne pepper to taste. As is, it is kid-friendly, ' +
      'quick, and delicious! It can be used as a dip for tortilla chips or a sauce for many Mexican dishes.',
    ingredients: [
      '1 pound white American cheese, cubed',
      '1/2 cup milk, or as needed',
      '1 tablespoon butter or margarine',
      '2 (4 ounce) cans chopped green chilies',
      '2 teaspoons cumin',
      '2 teaspoons garlic powder',
      '2 teaspoons onion powder',
      'cayenne pepper to taste'
    ],
    steps: [
      'Place cheese, milk, and butter in a medium saucepan over low heat. Cook until cheese has melted, stirring frequently. ' +
      'Stir in green chilies, cumin, garlic powder, onion powder, and cayenne pepper to taste. Add more milk if dip is too thick. ' +
      'Heat through and serve immediately.'
    ],
    likes: 19,
    comments: [
      'I think the people that are giving this a low rating are simply using the wrong type of cheese. You HAVE TO use ' +
      'white american cheese.',
      'I made the dip exactly as written & this dip is not edible. I gave it 3 stars because I worked on it this week ' +
      '& the recipe is fixable.'
    ],
    front_image: '../../assets/3_0.jpg',
    images: [
      '../../assets/3_1.jpg',
      '../../assets/3_2.jpg',
      '../../assets/3_3.jpg'
    ],
    category: CATEGORIES[0]
  },
  {
    id: 4,
    title: 'Puff Pastry Waffles',
    description: 'Add puff pastry to the list of good things you can snackify in your waffle iron. Although they don\'t ' +
      'puff up as much as oven-baked puff pastry, they turn out crispy on the outside and tender on the inside, and they ' +
      'take only minutes to make. Serve hot or at room temperature with syrup, fruit, Nutella®, fruit preserves, or nut butter.',
    ingredients: [
      '1 (17.3 ounce) package frozen puff pastry, thawed',
      'cooking spray'
    ],
    steps: [
      'Line a cutting board with parchment paper. Unfold puff pastry onto cutting board. Cut each sheet into 4 equal squares.',
      'Preheat a waffle iron according to manufacturer\'s instructions. Grease with cooking spray.',
      'Place one puff pastry square in the preheated waffle iron; cook until golden brown, 3 to 5 minutes. Repeat with ' +
      'remaining puff pastry squares.'
    ],
    likes: 235,
    comments: [
      'I love, love, love new ideas to use my waffle maker and this is one more keeper for it. The room temp leftovers make ' +
      'great sandwiches. Just a quick heads up, this doesn\'t work as nicely with glu...',
      'It\'s puff pastry shaped like a waffle, that\'s all. Not as good as traditional waffles and way more expensive. And ' +
      'puff pastry can be put to better use, such as in apple or cherry turnovers.'
    ],
    front_image: '../../assets/4_0.jpg',
    images: [
      '../../assets/4_1.jpg',
      '../../assets/4_2.jpg',
      '../../assets/4_3.jpg'
    ],
    category: CATEGORIES[1]
  },
  {
    id: 5,
    title: 'Chef John\'s French Omelette',
    description: 'A true French omelette, or omelet as we Americans call it, is just eggs and butter, no filling. The egg ' +
      'is folded for a soft, tender texture. It\'s 10% ingredients and 90% technique, so it does take a bit of practice to ' +
      'perfect.',
    ingredients: [
      '3 fresh eggs',
      '1/4 teaspoon kosher salt',
      '1/2 teaspoon cold water',
      '2 tablespoons unsalted butter, divided',
      '1 pinch cayenne or white pepper to taste (optional)'
    ],
    steps: [
      'Whisk eggs, salt, and water together in a mixing bowl. Whisk until mixture is very liquid and whites are completely ' +
      'blended in, 1 or 2 minutes.',
      'Heat 1 1/2 tablespoons butter in a 9- or 10-inch non-stick skillet over medium-high heat. As soon as butter melts ' +
      'and before it starts to sizzle, pour in the whisked eggs. Stir in a circular pattern with a heat-proof spatula, lifting ' +
      'and "scrambling" eggs, shaking pan to keep leveling out the mixture, and scraping down the sides. Continue stirring ' +
      'until shaking the pan no longer levels the eggs.',
      'Reduce heat to low. Using the spatula, smooth the surface of the eggs to move runny eggs to less runny spots, working' +
      ' toward an even thickness. As soon as surface is wet but not runny, remove from heat.',
      'Starting at the handle side of the pan, use the spatula to begin rolling the omelette into a cylinder shape, about ' +
      '3 rolls until omelette is about 2 inches from opposite side of pan. Use spatula to fold the last flap of egg over the ' +
      'top of the cylinder leaving the seam side up. Add cubes of the remaining 1/2 tablespoon butter to pan. Gently push the ' +
      'butter as it melts under the omelette.',
      'Slide omelette to edge of pan. Flip onto a plate with the seam side down. Even out the shape, if necessary. ' +
      'You can tuck in the ends, if you like. Brush surface with a bit more butter. Dust with cayenne pepper.'
    ],
    likes: 135,
    comments: [
      'Learned new technique, and made as written. Oh yes, will be making this again and again and again...',
      'Like the recipe but the instructions for medium high heat instantly burned the butter and the eggs. I dialed it down' +
      ' to low (2-3 on a scale of up to 9) and while it took longer got much better'
    ],
    front_image: '../../assets/5_0.jpg',
    images: [
      '../../assets/5_1.jpg',
      '../../assets/5_2.jpg'
    ],
    category: CATEGORIES[1]
  },
  {
    id: 6,
    title: 'Dessert Crepes',
    description: 'Essential crepe recipe. Sprinkle warm crepes with sugar and lemon, or serve with cream or ice cream and fruit.',
    ingredients: [
      '4 eggs, lightly beaten',
      '1 1/3 cups milk',
      '2 tablespoons butter, melted',
      '1 cup all-purpose flour',
      '2 tablespoons white sugar',
      '1/2 teaspoon salt'
    ],
    steps: [
      'In large bowl, whisk together eggs, milk, melted butter, flour sugar and salt until smooth.',
      'Heat a medium-sized skillet or crepe pan over medium heat. Grease pan with a small amount of butter or oil applied' +
      ' with a brush or paper towel. Using a serving spoon or small ladle, spoon about 3 tablespoons crepe batter into hot ' +
      'pan, tilting the pan so that bottom surface is evenly coated. Cook over medium heat, 1 to 2 minutes on a side, or' +
      ' until golden brown. Serve immediately.'
    ],
    likes: 27,
    comments: [
      'I had never made crepes before, but thought, "how hard could it be?" Well, it does take a little practice. The first ' +
      'few attempts were "practice crepes"!',
      'This was a great, easy recipe...I just think it was a bit too eggy for me.'
    ],
    front_image: '../../assets/6_0.jpg',
    images: [
      '../../assets/6_1.jpg',
      '../../assets/6_2.jpg',
      '../../assets/6_3.jpg'
    ],
    category: CATEGORIES[2]
  },
  {
    id: 7,
    title: 'Ultimate Chocolate Dessert',
    description: 'Luckily, richer, sexier, and more decadent is exactly what this chocolate mocha pot de creme recipe is ' +
      'all about.',
    ingredients: [
      '4 ounces bittersweet chocolate, chopped',
      '1/2 teaspoon instant coffee',
      '1 pinch salt',
      '1 cup heavy cream',
      '3 tablespoons white sugar',
      '1/2 teaspoon vanilla extract'
    ],
    steps: [
      'Stir chocolate, instant coffee, and salt together in a medium bowl.',
      'Heat cream, sugar, and vanilla in a saucepan over medium heat, stirring constantly, until it just begins to simmer.',
      'Pour hot cream mixture over the chocolate mixture; let sit for 1 minute.',
      'Whisk the chocolate and cream mixture for 1-2 minutes until combined.',
      'Pour the mixture into four small espresso cups. Tap to remove any air bubbles. Chill thoroughly in the refrigerator ' +
      'for at least 4 hours.',
      'Serve topped with grated chocolate, or add lightly whipped cream and dust with cocoa powder.'
    ],
    likes: 208,
    comments: [
      'I love how quick an easy this is while being very elegant. Adding a little cayenne or mint or lemon/orange oil ' +
      'make for a different twist and flavour.',
      'Please help me. Mine was in the fridge for over eight hours and did not set up one bit. I followed the recipe ' +
      'and instructions to the T, I even watched the tutorial video.'
    ],
    front_image: '../../assets/7_0.jpg',
    images: [
      '../../assets/7_1.jpg',
      '../../assets/7_2.jpg'
    ],
    category: CATEGORIES[2]
  },
  {
    id: 8,
    title: 'Broiled Tilapia Parmesan',
    description: 'Flavorful recipe for this farm raised fish that is easy and done in minutes! The fish is broiled with' +
      ' a creamy cheese coating for an impressive flavor and texture.',
    ingredients: [
      '1/2 cup Parmesan cheese',
      '1/4 cup butter, softened',
      '3 tablespoons mayonnaise',
      '2 tablespoons fresh lemon juice',
      '1/4 teaspoon dried basil',
      '1/4 teaspoon ground black pepper',
      '1/8 teaspoon onion powder',
      '1/8 teaspoon celery salt',
      '2 pounds tilapia fillets'
    ],
    steps: [
      'Preheat your oven\'s broiler. Grease a broiling pan or line pan with aluminum foil.',
      'In a small bowl, mix together the Parmesan cheese, butter, mayonnaise and lemon juice. Season with dried basil,' +
      ' pepper, onion powder and celery salt. Mix well and set aside.',
      'Arrange fillets in a single layer on the prepared pan. Broil a few inches from the heat for 2 to 3 minutes. ' +
      'Flip the fillets over and broil for a couple more minutes. Remove the fillets from the oven and cover them with' +
      ' the Parmesan cheese mixture on the top side. Broil for 2 more minutes or until the topping is browned and fish' +
      ' flakes easily with a fork. Be careful not to over cook the fish.'
    ],
    likes: 48,
    comments: [
      'We love this recipe and I keep finding new ways to modify it (I feel I have to, since I make it at LEAST once a week)',
      'I scaled this recipe in half and went with some of the suggestions of reviewer, Shannon:) (click on "most helpful" ' +
      'and you\'ll see her review). '
    ],
    front_image: '../../assets/8_0.jpg',
    images: [
      '../../assets/8_1.jpg',
      '../../assets/8_2.jpg',
      '../../assets/8_3.jpg'
    ],
    category: CATEGORIES[3]
  },
  {
    id: 9,
    title: 'Marinated Grilled Shrimp',
    description: 'A very simple and easy marinade that makes your shrimp so yummy you don\'t even need cocktail sauce!' +
      ' Don\'t let the cayenne pepper scare you, you don\'t even taste it. My 2 and 4 year-olds love it and eat more shrimp ' +
      'than their parents! It is also a big hit with company, and easy to prepare. I make this with frozen or fresh shrimp' +
      ' and use my indoor electric grill if the weather is not good for outside grilling. Try it with a salad, baked potato,' +
      ' and garlic bread. You will not be disappointed!!!',
    ingredients: [
      '3 cloves garlic, minced',
      '1/3 cup olive oil',
      '1/4 cup tomato sauce',
      '2 tablespoons red wine vinegar',
      '2 tablespoons chopped fresh basil',
      '1/2 teaspoon salt',
      '1/4 teaspoon cayenne pepper',
      '2 pounds fresh shrimp, peeled and deveined',
      'skewers'
    ],
    steps: [
      'In a large bowl, stir together the garlic, olive oil, tomato sauce, and red wine vinegar. Season with basil, salt,' +
      ' and cayenne pepper. Add shrimp to the bowl, and stir until evenly coated. Cover, and refrigerate for 30 minutes ' +
      'to 1 hour, stirring once or twice.',
      'Preheat grill for medium heat. Thread shrimp onto skewers, piercing once near the tail and once near the head. ' +
      'Discard marinade.',
      'Lightly oil grill grate. Cook shrimp on preheated grill for 2 to 3 minutes per side, or until opaque.'
    ],
    likes: 198,
    comments: [
      'These were very nice. I was expecting outstanding flavour for five stars though and this just didn\'t make it. Next ' +
      'time I would add sweet chilli sauce, more tomato and garlic.',
      'We followed the directions exactly as given and even used yummy fresh shrimp we brought home from our Gulf vacation, ' +
      'but I thought this was very blah. '
    ],
    front_image: '../../assets/9_0.jpg',
    images: [
      '../../assets/9_1.jpg',
      '../../assets/9_2.jpg',
      '../../assets/9_3.jpg'
    ],
    category: CATEGORIES[3]
  },
  {
    id: 10,
    title: 'Rachel\'s Rose Sangria',
    description: 'This is my twist on \'traditional\' Sangria. It\'s the perfect drink for a girls \'Sex and the City\' ' +
      'movie night or a spa party. It\'s very pretty and very easy to drink. Cheers!',
    ingredients: [
      '2 trays ice cubes',
      '1 cup rum',
      '1 cup brandy',
      '1 1/2 cups white Zinfandel wine',
      '4 cups lemon-lime flavored soda',
      '1/2 cup diced apple',
      '1/2 cup seedless green grapes, halved',
      '1/2 cup seedless red grapes, halved',
      '1/2 lemon, sliced and cut into small pieces',
      '1/2 lime, sliced and cut into small pieces'
    ],
    steps: [
      'Place the ice cubes into a glass pitcher. Pour in the rum, brandy, wine, and lemon-lime soda and stir to blend. ' +
      'Add the apple, grapes, lemon, and lime to the pitcher, and stir again. Pour into glasses.'
    ],
    likes: 18,
    comments: [
      'I didn\'t have any brandy, so I substituded for more rum & it was delish. Also, used pinot grigio for a less sweet flavor ' +
      'since the fruit and sprite made it sweet enough',
      'Great Sangria and pretty too. I put some of the fruit on toothpicks for a garnish.',
      'I made this for a BBQ. Everyone loved it. The only changes I made was I used pineapple flavored rum and skipped the brandy. ' +
      'Will definitely make again!',
      'Pretty good!!!! I added a spray of orange juice for a little more sweetness.',
      'I thought this was good, although I did alter it to use ingredients I had on hand. I used a red zinfandel and used diet soda. ' +
      'Thanks for sharing your recipe!'
    ],
    front_image: '../../assets/10_0.jpg',
    images: [
      '../../assets/10_1.jpg'
    ],
    category: CATEGORIES[4]
  },
  {
    id: 11,
    title: 'Starter Smoothie',
    description: 'Smoothies are an easy way to get more fruits and vegetables into your day, but calories can add up fast. For a ' +
      'smoothie that\'s only about 200 calories, follow our formula and use 1 cup fresh fruit or vegetables and/or cooked, frozen ' +
      'vegetables + 1 cup fruit juice. Blueberries and grape juice are featured here.',
    ingredients: [
      '1 cup fresh blueberries',
      '1 cup grape juice',
      '1 banana, cut into chunks and frozen',
      '1/2 cup low-fat plain Greek-style yogurt',
      '1 cup ice (optional)',
      '1 teaspoon honey, or to taste'
    ],
    steps: [
      'Blend blueberries, grape juice, banana, yogurt, ice, and honey in a blender until smooth, at least 3 minutes.'
    ],
    likes: 17,
    comments: [
      'Today I used fresh pineapple, pineapple juice, and Cabot® Greek Low Fat Vanilla Bean Yogurt (what I had on hand) for this ' +
      'smoothie. I did add some of the optional ice',
      'I made some changes. I decided to use cherries and cranberry juice as well as flavored yogurt',
      'I will definitely make this again! It’s a great start to your morning! :) A bit less yogurt would be nice though.',
      'This is an easy smoothie with great flavor. I have tried the blueberry one, raspberry and can\'t wait to try more!!!',
      'Made it exactly as set out. It was good.'
    ],
    front_image: '../../assets/11_0.jpg',
    images: [
      '../../assets/11_1.jpg'
    ],
    category: CATEGORIES[4]
  },
  {
    id: 12,
    title: 'Vintage Lemonade',
    description: 'In the 1800\'s this is how people made lemonade--you can do it too! It\'s not that difficult, and tastes wonderful!',
    ingredients: [
      '5 lemons',
      '1 1/4 cups white sugar',
      '1 1/4 quarts water'
    ],
    steps: [
      'Peel the rinds from the 5 lemons and cut them into 1/2 inch slices. Set the lemons aside.',
      'Place the rinds in a bowl and sprinkle the sugar over them. Let this stand for about one hour, so that the sugar begins to ' +
      'soak up the oils from the lemons.',
      'Bring water to a boil in a covered saucepan and then pour the hot water over the sugared lemon rinds. Allow this mixture to ' +
      'cool for 20 minutes and then remove the rinds.',
      'Squeeze the lemons into another bowl. Pour the juice through a strainer into the sugar mixture. Stir well, pour into pitcher ' +
      'and pop it in the fridge! Serve with ice cubes.'
    ],
    likes: 24,
    comments: [
      'This is wonderful, especially with Meyer lemons. Be careful with the sugar though. I started with less sugar and didn\'t ' +
      'need to add the rest.',
      'Tasted too much of the lemon rinds.'
    ],
    front_image: '../../assets/12_0.jpg',
    images: [
      '../../assets/12_1.jpg',
      '../../assets/12_2.jpg'
    ],
    category: CATEGORIES[4]
  },
  {
    id: 13,
    title: 'Janet\'s Rich Banana Bread',
    description: 'This is the moistest banana bread that I have ever tasted. It\'s also very easy to make!',
    ingredients: [
      '1/2 cup butter, melted',
      '1 cup white sugar',
      '2 eggs',
      '1 teaspoon vanilla extract',
      '1 1/2 cups all-purpose flour',
      '1 teaspoon baking soda',
      '1/2 teaspoon salt',
      '1/2 cup sour cream',
      '1/2 cup chopped walnuts',
      '2 medium bananas, sliced'
    ],
    steps: [
      'Preheat oven to 350 degrees F (175 degrees C). Grease a 9x5 inch loaf pan.',
      'In a large bowl, stir together the melted butter and sugar. Add the eggs and vanilla, mix well. Combine the flour, baking ' +
      'soda and salt, stir into the butter mixture until smooth. Finally, fold in the sour cream, walnuts and bananas. Spread evenly ' +
      'into the prepared pan.',
      'Bake at 350 degrees F (175 degrees C) for 60 minutes, or until a toothpick inserted into the center of the loaf comes out ' +
      'clean. Cool loaf in the pan for 10 minutes before removing to a wire rack to cool completely.'
    ],
    likes: 19,
    comments: [
      'With minor variations this is the recipe I\'ve been making for 40 years. It originally came from a home ec teacher ' +
      'and it is beyond awesome.',
      'As other reviewers mentioned, it was very moist and the flavor was good. My only issue was the sight & feel of the bananas ' +
      'in the bread.'
    ],
    front_image: '../../assets/13_0.jpg',
    images: [
      '../../assets/13_1.jpg',
      '../../assets/13_2.jpg',
      '../../assets/13_3.jpg'
    ],
    category: CATEGORIES[5]
  },
  {
    id: 14,
    title: 'French Baguettes',
    description: 'Great eaten fresh from oven. Used to make sub sandwiches, etc.',
    ingredients: [
      '1 cup water',
      '2 1/2 cups bread flour',
      '1 tablespoon white sugar',
      '1 teaspoon salt',
      '1 1/2 teaspoons bread machine yeast',
      '1 egg yolk',
      '1 tablespoon water'
    ],
    steps: [
      'Place 1 cup water, bread flour, sugar, salt and yeast into bread machine pan in the order recommended by manufacturer. ' +
      'Select Dough cycle, and press Start.',
      'When the cycle has completed, place dough in a greased bowl, turning to coat all sides. Cover, and let rise in a warm place ' +
      'for about 30 minutes, or until doubled in bulk. Dough is ready if indentation remains when touched.',
      'Punch down dough. On a lightly floured surface, roll into a 16x12 inch rectangle. Cut dough in half, creating two 8x12 inch ' +
      'rectangles. Roll up each half of dough tightly, beginning at 12 inch side, pounding out any air bubbles as you go. Roll gently' +
      ' back and forth to taper end. Place 3 inches apart on a greased cookie sheet. Make deep diagonal slashes across loaves every 2' +
      ' inches, or make one lengthwise slash on each loaf. Cover, and let rise in a warm place for 30 to 40 minutes, or until doubled' +
      ' in bulk.',
      'Preheat oven to 375 degrees F (190 degrees C). Mix egg yolk with 1 tablespoon water; brush over tops of loaves.',
      'Bake for 20 to 25 minutes in the preheated oven, or until golden brown.'
    ],
    likes: 345,
    comments: [
      'OUTSTANDING! You definitely DO NOT need a bread machine for these. (Click on the picture to see the photo I submitted).',
      'Very nice tasting bread. It was a bit tough, but that may have been my fault.',
      'This is an excellent recipe for French bread/baguettes. I use my KitchenAid and follow standard bread making procedures.',
      'I  am a VERY picky person when it comes to bread. I lived almost all my life in France and I tried many baguette recipes, ' +
      'but this one is the closest to the real thing I could find.'
    ],
    front_image: '../../assets/14_0.jpg',
    images: [
      '../../assets/14_1.jpg',
      '../../assets/14_2.jpg',
      '../../assets/14_3.jpg'
    ],
    category: CATEGORIES[5]
  },
  {
    id: 15,
    title: 'No-Bake Greek Yogurt Cheesecake',
    description: 'This no-bake Greek yogurt cheesecake is perfect for parties or as a post-dinner dessert.',
    ingredients: [
      '½ cup butter',
      '9 whole graham crackers',
      '¼ cup packed dark brown sugar',
      '¼ teaspoon sea salt',
      '2 ½ teaspoons unflavored gelatin',
      '1 tablespoon cold water',
      '3 (8 ounce) packages cream cheese, at room temperature',
      '2 cups whole-milk Greek yogurt, at room temperature',
      '½ pinch white sugar',
      '1 tablespoon lemon juice',
      '1 teaspoon lemon zest',
      '1 pinch sea salt',
      '1 teaspoon vanilla extract',
      '4 cups fresh blueberries',
      '3 tablespoons packed dark brown sugar',
      '2 tablespoons poppy seeds (optional)',
      '2 tablespoons lemon juice',
      '1 teaspoon lemon zest',
    ],
    steps: [
      'Heat butter in a small saucepan over medium-low heat until it smells nutty and brown bits form on the bottom, 15 to 17 ' +
      'minutes. Don\'t crank up the heat to try to get there faster; you\'ll just end up with burned butter.',
      'Meanwhile, pulse together graham crackers, brown sugar, and salt in a food processor until fine crumbs form. Carefully pour ' +
      'butter into crumb mixture while food processor is running. Press combined mixture into bottom and sides of a 10-inch tart ' +
      'pan with a removable bottom. Chill for 1 hour or freeze for 20 minutes until set.',
      'Stir together gelatin and cold water in a small bowl. Let stand for 5 minutes, then microwave until gelatin dissolves, about ' +
      '10 seconds.',
      'Beat cream cheese in a bowl with an electric mixer for 30 seconds. Add yogurt, white sugar, lemon juice, lemon zest, salt, ' +
      'and vanilla. Beat until smooth, then beat in gelatin. Pour mixture into the chilled crust. Chill until set, about 2 hours.',
      'Stir together blueberries, brown sugar, poppy seeds, lemon juice, and lemon zest. Scatter topping over cheesecake.'
    ],
    likes: 10,
    comments: [],
    front_image: '../../assets/15_0.jpg',
    images: [
      '../../assets/15_0.jpg'
    ],
    category: CATEGORIES[6]
  },
  {
    id: 16,
    title: 'Keto Berry-Pecan Cheesecake Bars',
    description: 'These cheesecake bars are an excellent sweet on a low-carb or keto lifestyle.',
    ingredients: [
      '1 cup pecans',
      '1 teaspoon stevia-erythritol sweetener (such as Truvia®)',
      '1 teaspoon cinnamon',
      '¼ teaspoon ground nutmeg',
      '2 tablespoons melted butter',
      '1 egg',
      '12 ounces cream cheese',
      '½ cup stevia-erythritol sweetener (such as Truvia®)',
      '¼ cup sour cream',
      '½ teaspoon vanilla extract',
      '¼ cup unsweetened almond milk',
      '1 tablespoon melted butter',
      '1 cup frozen mixed berries',
      '1 tablespoon stevia-erythritol sweetener (such as Truvia®)'
    ],
    steps: [
      'Preheat the oven to 350 degrees F (175 degrees C).',
      'Add pecans to a food processor and chop very finely. Add sweetener, cinnamon, and nutmeg and process for a few more seconds. ' +
      'Pour mixture into a bowl and add melted butter. Stir together and press crust mixture into the bottom of a divided brownie pan ' +
      'with the divider removed.',
      'Beat egg until fluffy in a large bowl with an electric mixer. Mix in cream cheese 1 ounce at a time. Beat mixture until cream' +
      ' cheese is smooth. Add sweetener, sour cream, vanilla extract, and almond milk. Beat together until filling is smooth. Stir in' +
      ' melted butter. Pour filling over the crust in the brownie pan. Insert divider into the pan.',
      'Bake in the preheated oven for about 35 minutes.',
      'Meanwhile, heat a small pot over medium heat. Add mixed berries and sweetener and bring to a simmer, about 5 minutes. ' +
      'Stir berries and crush some with a spoon so that a liquid starts to form. Cook for about 10 minutes more.',
      'Allow cheesecake bars to cool in the brownie pan, about 1 hour. Pour berry sauce on top of bars.'
    ],
    likes: 75,
    comments: [
      'This is definitely going to be a favorite. Even though I made the mistake of making it the day before so it was soggy on the ' +
      'bottom everybody LOVED it! It still tasted delicious.',
      'I made this for my Book Club friends because there are so many who are counting carbs gluten free vegetarian and on keto diets. ' +
      'Everyone loved this dessert and some asked for the recipe. I broke up the bars and put them in a dessert dish and then added the' +
      ' fruit on top....very pretty! I used a small square cake pan to bake them.',
      'We LOVED these!! I don’t have much experience baking, but the instructions were easy. I will definitely make this again. I ' +
      'baked them in a cupcake pan since I didn’t have a brownie pan.'
    ],
    front_image: '../../assets/16_0.jpg',
    images: [
      '../../assets/16_1.jpg',
      '../../assets/16_2.jpg',
      '../../assets/16_3.jpg'
    ],
    category: CATEGORIES[6]
  },
  {
    id: 17,
    title: 'Chantal\'s New York Cheesecake',
    description: 'This cake is easy to make, and it\'s so delicious. Everyone that\'s tried it has said it tasted just like the ' +
      'ones in a deli! You\'ll love it!',
    ingredients: [
      '15 graham crackers, crushed',
      '2 tablespoons butter, melted',
      '4 (8 ounce) packages cream cheese',
      '1 ½ cups white sugar',
      '¾ cup milk',
      '4 eggs',
      '1 cup sour cream',
      '1 tablespoon vanilla extract',
      '¼ cup all-purpose flour'
    ],
    steps: [
      'Preheat oven to 350 degrees F (175 degrees C). Grease a 9 inch springform pan.',
      'In a medium bowl, mix graham cracker crumbs with melted butter. Press onto bottom of springform pan.',
      'In a large bowl, mix cream cheese with sugar until smooth. Blend in milk, and then mix in the eggs one at a time, mixing ' +
      'just enough to incorporate. Mix in sour cream, vanilla and flour until smooth. Pour filling into prepared crust.',
      'Bake in preheated oven for 1 hour. Turn the oven off, and let cake cool in oven with the door closed for 5 to 6 hours; ' +
      'this prevents cracking. Chill in refrigerator until serving.'
    ],
    likes: 80,
    comments: [
      'OK - I don\'t want to be rude, but this is the deal: this is a perfect recipe, and if it fails for you, it\'s your fault, ' +
      'not the recipe\'s. A couple of things you should know about cheesecakes: OVERBEATING WILL CAUSE A CHEESECAKE TO CRACK. Beat ' +
      'cream cheese with sugar only until smooth. Proceed with a wooden spoon for the rest of the recipe. OVERBEATING WILL CAUSE A ' +
      'CHEESECAKE TO HAVE THE "WRONG" TEXTURE. Air bubbles, gritty/not creamy texture, etc., are fixed my the same instructions above. ' +
      'OVERCOOKING WILL CAUSE A CHEESECAKE TO CRACK. Do NOT cook this cheesecake until it\'s set. Matter of fact, don\'t check it at ' +
      'all. Put the cheesecake in the oven, set the timer to 60 min., turn the oven off, and forget it. I mean it! Don\'t open the oven, ' +
      'just leave it alone to do its thing. And that\'s it. A beautiful cheesecake. Far from bland: this is a PURIST\'S cheesecake. ' +
      'It\'s great as is, but also a great foil for other flavours. I serve mine with passionfruit pulp or mango puree.',
      'AMAZING! The KING of all cheesecakes! This is the recipe you are looking for Thick and Creamy! Ive made this 2X now ' +
      'with tremendous sucess.'
    ],
    front_image: '../../assets/17_0.jpg',
    images: [
      '../../assets/17_1.jpg',
      '../../assets/17_2.jpg'
    ],
    category: CATEGORIES[6]
  },
  {
    id: 18,
    title: 'Cake Balls',
    description: 'This recipe is very versatile and heavily addictive. You can mix and match cake and icing flavors as well as the ' +
      'chocolate coatings. The variations are unlimited, and they can be nicely packaged and given as gifts.',
    ingredients: [
      '1 (18.25 ounce) package chocolate cake mix',
      '1 (16 ounce) container prepared chocolate frosting',
      '1 (3 ounce) bar chocolate flavored confectioners coating'
    ],
    steps: [
      'Prepare the cake mix according to package directions using any of the recommended pan sizes. When cake is done, crumble ' +
      'while warm into a large bowl, and stir in the frosting until well blended.',
      'Melt chocolate coating in a glass bowl in the microwave, or in a metal bowl over a pan of simmering water, stirring ' +
      'occasionally until smooth.',
      'Use a melon baller or small scoop to form balls of the chocolate cake mixture. Dip the balls in chocolate using a toothpick' +
      ' or fork to hold them. Place on waxed paper to set'
    ],
    likes: 50,
    comments: [
      '#1) Bake cake as directed. #2) Let the cake COOL for at least a half hour! Don\'t mix in the frosting while HOT! ' +
      'You will get a gooey, albeit yummy, mess! #3) I used a handmixer to mix the cake and frosting.',
      'These are great!!! And so easy!!! I see some members say they take hours to make (like one says 7....NOT!!! ) ' +
      'If you follow the instructions they are not that hard!!!'
    ],
    front_image: '../../assets/18_0.jpg',
    images: [
      '../../assets/18_1.jpg',
      '../../assets/18_2.jpg',
      '../../assets/18_3.jpg'
    ],
    category: CATEGORIES[6]
  },
  {
    id: 19,
    title: 'Roasted Beet Salad',
    description: 'Roasted beets with balsamic vinegar dressing.',
    ingredients: [
      '6 medium beets, trimmed and scrubbed',
      '2 tablespoons aged balsamic vinegar',
      '2 teaspoons real maple syrup',
      'salt and ground black pepper to taste'
    ],
    steps: [
      'Preheat the oven to 400 degrees F (200 degrees C). Wrap beets loosely in aluminum foil and place on a rimmed baking sheet.',
      'Roast in the preheated oven until easily pierced with a knife or skewer, 50 to 60 minutes. Unwrap and cool until easily handled,' +
      ' about 10 minutes. Peel beets and cut into chunks.',
      'Mix vinegar and maple syrup together; season with salt and pepper. Pour over beets. Refrigerate until beets absorb the ' +
      'flavors, at least 1 hour. Serve cold.'
    ],
    likes: 89,
    comments: [
      'Roasted the beets yesterday, peeled, and put them in the fridge overnight. Peeling and cutting beets is so much easier when ' +
      'they’re tender after roasting, so don’t even think about peel',
      'My Hubby and I both loved this a lot! What a great way to use up some beets from our garden! The maple syrup and balsamic ' +
      'really compliments the beets well, without completely overwhelming them'
    ],
    front_image: '../../assets/19_0.jpg',
    images: [
      '../../assets/19_1.jpg'
    ],
    category: CATEGORIES[7]
  },
  {
    id: 20,
    title: 'Caesar Salad Supreme',
    description: 'A wonderful, rich, anchovy dressing makes this salad a meal. Serve with crusty Italian Bread.',
    ingredients: [
      '6 cloves garlic, peeled, divided',
      '3/4 cup mayonnaise',
      '5 anchovy fillets, minced',
      '6 tablespoons grated Parmesan cheese, divided',
      '1 teaspoon Worcestershire sauce',
      '1 teaspoon Dijon mustard',
      '1 tablespoon lemon juice, or more to taste',
      'salt to taste',
      'ground black pepper to taste',
      '1/4 cup olive oil',
      '4 cups day-old bread, cubed',
      '1 head romaine lettuce, torn into bite-size pieces'
    ],
    steps: [
      'Mince 3 cloves of garlic, and combine in a small bowl with mayonnaise, anchovies, 2 tablespoons of the Parmesan cheese, ' +
      'Worcestershire sauce, mustard, and lemon juice. Season to taste with salt and black pepper. Refrigerate until ready to use.',
      'Heat oil in a large skillet over medium heat. Cut the remaining 3 cloves of garlic into quarters, and add to hot oil. Cook ' +
      'and stir until brown, and then remove garlic from pan. Add bread cubes to the hot oil. Cook, turning frequently, until lightly ' +
      'browned. Remove bread cubes from oil, and season with salt and pepper.',
      'Place lettuce in a large bowl. Toss with dressing, remaining Parmesan cheese, and seasoned bread cubes.'
    ],
    likes: 57,
    comments: [
      'Whether it\'s at home or in restaurants, my husband and I are always spoiled by good, fresh, from scratch Caesar dressing. ' +
      'This recipe sounded too good to be true',
      'This was very good! I took the suggestion of another reviewer and put everything in a blender after chopping the garlic ' +
      'and anchovies.',
      'Sound the trumpets! Call off the dogs! The search for the ultimate creamy Caesar dressing is over. This is IT.'
    ],
    front_image: '../../assets/20_0.jpg',
    images: [
      '../../assets/20_1.jpg',
      '../../assets/20_2.jpg',
      '../../assets/20_3.jpg'
    ],
    category: CATEGORIES[7]
  },

  {
    id: 21,
    title: 'Kotletki s pyurewkoi',
    description: 'best of bests',
    ingredients: ['beef', 'potato'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'kotletki.png',
    images: ['kotletka1.png', 'kotletka2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 22,
    title: 'Uchpuchmak',
    description: 'with love from Tatarstan',
    ingredients: ['beef', 'testo', 'potato'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'uchpuchmak.png',
    images: ['uchpuchmak1.png', 'Uchpuchmak2.png'],
    category: {id: 11, name: 'Beef'}
  },
  {
    id: 23,
    title: 'Beshbarmak',
    description: 'with love from Kazakhstan',
    ingredients: ['horse meat', 'potato', 'onion', 'testo'],
    steps: ['1', '2', '3'],
    likes: 0,
    comments: [],
    front_image: 'beshbarmak.png',
    images: ['beshbarmak1.png', 'beshbarmak2.png'],
    category: {id: 4, name: 'Dinner'}
  }
];
