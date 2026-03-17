const events = [
  {
    id: 1,
    title: "Tech Escape Room",
    description: "Solve puzzles and complete challenges in a timed tech-themed escape room.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/techescape.webp"
  },
  {
    id: 2,
    title: "LAN Warriors",
    description: "Competitive multiplayer gaming event.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/lan.webp"
  },
  {
    id: 3,
    title: "BGI Shark Tank",
    description: "Startup pitching competition.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/sharktank.webp"
  },
  {
    id: 4,
    title: "Reel Craft",
    description: "Short film making and editing competition.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/reel.webp"
  },
  {
    id: 5,
    title: "Snapshot Saga",
    description: "Photography competition with a creative twist.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/snapshot.webp"
  },
  {
    id: 6,
    title: "Prompt to Web",
    description: "Convert creative prompts into working web pages.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/prompt.webp"
  },
  {
    id: 7,
    title: "AutoCAD Showdown",
    description: "Design and modeling challenge using AutoCAD.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/autocad.webp"
  },
  {
    id: 8,
    title: "Treasure Hunt",
    description: "Solve clues and find hidden treasures around the campus.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/treasurehunt.webp"
  },
  {
    id: 9,
    title: "Theme Debate",
    description: "Debate on tech-related themes and current issues.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/debate.webp"
    
  },
  {
    id: 10,
    title: "Next Gen Innovator",
    description: "Showcase innovative ideas and IoT projects.",
    rules: "Add rules here later",
    category: "technical",
    image: "./public/images/nextgen.webp",
  },




/* CULTURAL EVENTS */

{
id:11,
category:"cultural",
title:"Dance Fusion",
image:"./public/images/cultural/dancefusion.jpg",
description:"Group dance competition.",

},

{
id:12,
category:"cultural",
title:"Melody Masters",
image:"./public/images/cultural/melodymaster.jpg",
description:"Solo singing competition.",

},

{
id:13,
category:"cultural",
title:"Trash to Treasure",
image:"./public/images/cultural/trashtotreasure.jpg",
description:"Creative craft from waste.",

},

{
id:14,
category:"cultural",
title:"Dance Battle",
image:"./public/images/cultural/dancebattle.jpg",
description:"One on one dance battle.",

},

{
id:15,
category:"cultural",
title:"Glam Gala",
image:"./public/images/cultural/glamgala.jpg",
description:"Fashion show competition.",

},

{
id:16,
category:"cultural",
title:"Colour Splash",
image:"./public/images/cultural/coloursplash.jpg",
description:"Painting competition."
},

{
id:17,
category:"cultural",
title:"Bandwar",
image:"./public/images/cultural/bandwar.jpg",
description:"Battle of bands.",

},

{
id:18,
category:"cultural",
title:"Kavya Manch",
image:"./public/images/cultural/kavyamanch.jpg",
description:"Poetry performance.",

},

{
id:19,
category:"cultural",
title:"Standup Comedy",
image:"./public/images/cultural/standupcomedy.jpg",
description:"Comedy stage event.",

},

{
id:20,
category:"cultural",
title:"Drama Night",
image:"./public/images/cultural/dramanight.jpg",
description:"Short theatre performance.",

},

/* SPORTS EVENTS */

{
id:21,
category:"sports",
title:"Gully Cricket",
image:"./public/images/sports/cricket.jpg",
description:"6 player team cricket match with 5 overs.",
rules:[
"Team of 6 players.",
"5 overs per match.",
"Knock-out format.",
"Overarm tennis ball will be used.",
"One bowler can bowl maximum 2 overs.",
"No LBW rule.",
"Toss decides batting or bowling."
]
},

{
id:22,
category:"sports",
title:"Kabaddi",
image:"./public/images/sports/kabaddi.jpg",
description:"Kabaddi team competition.",
rules:[
"Team of 7 players with 3 substitutes.",
"Match consists of two halves of 10 minutes.",
"Raider must continuously say 'Kabaddi'.",
"If raider is caught, defending team gets 1 point.",
"Bonus line rule may apply.",
"Maximum 3 timeouts allowed per team."
]
},

{
id:23,
category:"sports",
title:"Badminton",
image:"./public/images/sports/badminton.webp",
description:"Singles or doubles badminton competition.",
rules:[
"Played as singles or doubles.",
"Match played up to 11 points.",
"Player must win by 2 points difference.",
"Shuttle touching boundary line counts IN.",
"Service must be below waist."
]
},

{
id:24,
category:"sports",
title:"Volleyball",
image:"./public/images/sports/volleyball.jpg",
description:"Team volleyball match.",
rules:[
"Team of 6 players with substitutes.",
"Match played best of 3 sets.",
"Each set played up to 25 points.",
"Maximum 3 touches per side.",
"Players cannot touch the net during play."
]
},

{
id:25,
category:"sports",
title:"Basketball",
image:"./public/images/sports/basketball.jpg",
description:"Basketball team tournament.",
rules:[
"Team of 5 players with substitutes.",
"Match played in 4 quarters.",
"Each quarter approximately 8 minutes.",
"24 second shot clock if available.",
"Team with highest score wins."
]
},

{
id:26,
category:"sports",
title:"Tug of War",
image:"./public/images/sports/tugofwar.jpg",
description:"Team strength competition.",
rules:[
"Team of 8 players.",
"Best of 3 rounds.",
"Team pulling opponent beyond center mark wins.",
"Proper shoes and gloves allowed."
]
},

{
id:27,
category:"sports",
title:"Kho Kho",
image:"./public/images/sports/khokho.png",
description:"Traditional Kho Kho competition.",
rules:[
"Team of 9 players playing.",
"Match consists of two innings of 9 minutes.",
"Chasers must sit in alternate directions.",
"Touching runner means OUT.",
"Team with maximum outs wins."
]
},

{
id:28,
category:"sports",
title:"Chess",
image:"./public/images/sports/chess.jpg",
description:"Rapid format chess tournament.",
rules:[
"Individual event.",
"Time limit 10 minutes per player.",
"Illegal move results in penalty.",
"Checkmate wins the match."
]
},

{
id:29,
category:"sports",
title:"Carrom",
image:"./public/images/sports/carrom.jpg",
description:"Carrom board competition.",
rules:[
"Played as singles or doubles.",
"Player must pocket queen and cover it.",
"If striker is pocketed one coin returns.",
"Player finishing all coins first wins."
]
},

{
id:30,
category:"sports",
title:"100m Race",
image:"./public/images/sports/100m.jpg",
description:"Short distance sprint race.",
rules:[
"All runners must start behind start line.",
"False start results in warning.",
"Second false start leads to disqualification.",
"First runner crossing finish line wins."
]
},

{
id:31,
category:"sports",
title:"200m Race",
image:"./public/images/sports/200m.jpg",
description:"200 meter running race.",
rules:[
"Same rules as 100 meter race.",
"All runners start behind start line.",
"False start warning allowed once.",
"Second false start leads to disqualification."
]
},

{
id:32,
category:"sports",
title:"Shot Put",
image:"./public/images/sports/shotput.jpg",
description:"Athletics throwing event.",
rules:[
"Throw must be inside throwing circle.",
"Distance measured from landing mark.",
"Player cannot cross throw line.",
"Best throw out of 3 attempts counts."
]
},

{
id:33,
category:"sports",
title:"Javelin Throw",
image:"./public/images/sports/javelin.jpg",
description:"Athletics javelin throwing event.",
rules:[
"Javelin must land within marked sector.",
"Player cannot cross throw line.",
"3 attempts allowed per participant.",
"Longest valid throw wins."
]
}]
export default events