const events = [
  


{
id: 1,
title: "Tech Escape Room",
description: "Tech Escape is a fun interactive competition where participants solve technical puzzles to progress through stages and escape the room.",
rules: [
"Team size: 1–3 members.",
"Performance is time-based.",
"No cheating or unfair means allowed.",
"Maintain discipline, dignity, and fair play."
],
category: "technical",
image: "/images/techescape.webp",
faculty: [
  { name: "Prof. Yogendra", phone: "7223974933" },
  { name: "Prof. Mridula", phone: "9669500655" },
  { name: "Prof. Twinkle Sharma", phone: "8319133044" },
  { name: "Mr. Rahul Shrivastav", phone: "7804891715" },
  { name: "Prof. Shikha Shukla", phone: "9669995655" }
],
students: [
  { name: "Mehak Jain", phone: "6306815718" },
  { name: "Nikhil Soni", phone: "9098432706" },
  { name: "Deepali Gupta", phone: "7415133108" },
  { name: "Rajesh Gurjar", phone: "7898506649" },
  { name: "Mehak Shaskar", phone: "7987826401" },
  { name: "Mohit Upadhyay", phone: "6266338004" }
]
},

{
id: 2,
title: "LAN Warriors",
description: "LAN Warrior is a high-stakes Free Fire and BGMI battle royale event conducted in a live LAN environment.",
rules: [
"Only mobile devices allowed (no emulators/tablets).",
"No hacks, scripts, or teaming allowed.",
"Squad-based matches only.",
"Scoring based on placement points and kills (1 point per kill).",
"Maintain fair play and discipline."
],
category: "technical",
image: "/images/Lan.webp",
faculty: [
  { name: "Prof. Irfan Khan", phone: "9713052140" },
  { name: "Prof. Rajat Paliwal", phone: "7000144507" },
  { name: "Prof. Nadeem Khan", phone: "9926575552" },
  { name: "Mr. Vinod Mehra", phone: "8817260412" },
  { name: "Rajkumar Yadav", phone: "9685520474" }
],
students: [
  { name: "Harshit Singh", phone: "9113325360" },
  { name: "Vineet Yadav", phone: "6266306643" },
  { name: "Rajesh Gurjar", phone: "7898506649" },
  { name: "Nikhil Soni", phone: "9098432706" },
  { name: "Madhur Soni", phone: "6269570103" }
]
},

{
id: 3,
title: "BGI Shark Tank",
description: "Pitch your startup idea and showcase its real-world impact.",
rules: [
"Present a clear business idea or tech solution.",
"5–15 minutes pitch followed by Q&A.",
"PPTs and prototypes are encouraged.",
"Judging based on innovation, feasibility, and confidence.",
"Maintain professionalism; judges’ decision is final."
],
category: "technical",
image: "/images/sharktank.webp",
faculty: [
  { name: "Prof. Shashank Saxena", phone: "9179060659" },
  { name: "Prof. Sankil Jain", phone: "8349847183" },
  { name: "Prof. Harshika", phone: "6263898053" },
  { name: "Prof. Shreya Sharma", phone: "7869995294" },
  { name: "Prof. Divyanshi", phone: "8770075899" },
  { name: "Prof. Manish Sahu", phone: "9165630211" }
],
students: [
  { name: "Shruti Mehra", phone: "6264894435" },
  { name: "Sourabh Barekar", phone: "9321562477" },
  { name: "Karthik Raj", phone: "6205834044" },
  { name: "Kunal Sen", phone: "9201004472" },
  { name: "Mohit Upadhyay", phone: "6266338004" },
  { name: "Mukul Joshi", phone: "8435084121" }
]
},

{
id: 4,
title: "Reel Craft",
description: "Create engaging reels capturing fest highlights and showcase your storytelling skills.",
rules: [
"Reel duration: 30–60 seconds.",
"Content must be original and creative.",
"Upload on Instagram (public account required).",
"Winners based on likes and views."
],
category: "technical",
image: "/images/reel.webp",
faculty: [
  { name: "Prof. Noreen Khan", phone: "6265740210" },
  { name: "Prof. Twinkle Gour", phone: "9509849176" },
  { name: "Mrs. Rupali", phone: "7223909335" },
  { name: "Mrs. Garima", phone: "9589364933" },
  { name: "Prof. Jagrati", phone: "9399156243" }
],
students: [
  { name: "Ayush Saparia", phone: "9142569929" },
  { name: "Krishna Khare", phone: "7389372501" },
  { name: "Chahat Kumar", phone: "8084452844" },
  { name: "Raj Chidar", phone: "9174851087" },
  { name: "Abhishek Rai", phone: "9669321417" }
]
},

{
id: 5,
title: "Snapshot Saga",
description: "Capture creative moments and showcase your photography skills.",
rules: [
"Only original, self-clicked photos allowed.",
"DSLR or mobile both allowed.",
"No heavy editing/manipulation.",
"Violation leads to disqualification."
],
category: "technical",
image: "/images/snapshot.webp",
faculty: [
  { name: "Prof. Ram Sahu", phone: "7566367646" },
  { name: "Prof. Smita Jain", phone: "9893344709" },
  { name: "Prof. Yogita Mishra", phone: "7999620432" },
  { name: "Ms. Ishika", phone: "7470884025" }
],
students: [
  { name: "Chahat Kumar", phone: "8084452844" },
  { name: "Zaid", phone: "8815900297" },
  { name: "Rupesh Ahirwar", phone: "6265190122" },
  { name: "Dipanker Ukey", phone: "8305285242" }
]
},

{
id: 6,
title: "Prompt to Web",
description: "Build a complete website live using AI tools and prompt engineering.",
rules: [
"Individual participation only.",
"All AI tools allowed.",
"No GitHub or pre-written code.",
"No templates or copied projects.",
"Website must be built live.",
"Theme given at the event.",
"Time limit: 60–90 minutes.",
"Submit website + prompts.",
"Judging based on UI/UX, creativity, and functionality."
],
category: "technical",
image: "/images/prompt.webp",
faculty: [
  { name: "Prof. Alok Singh", phone: "7906880840" },
  { name: "Prof. Upendra Patel", phone: "9713313606" },
  { name: "Prof. Sahil", phone: "9158783814" },
  { name: "Mr. Chanchal Singh", phone: "8319609038" },
  { name: "Prof. Gautam Singh", phone: "9661259888" }
],
students: [
  { name: "Radhika Agrawal", phone: "7828957559" },
  { name: "Madhur Soni", phone: "6269570103" },
  { name: "Ritika Lodhi", phone: "9302735899" },
  { name: "Saniya Pandey", phone: "9243931041" },
  { name: "Neha Yadav", phone: "8305664421" }
]
},

{
id: 7,
title: "AutoCAD Showdown",
description: "Test your technical drawing and design skills using AutoCAD.",
rules: [
"1st Year: Multi-view drawings.",
"2nd & 3rd Year: Create 3D model.",
"Maintain proper dimensions and clarity.",
"Only AutoCAD tools allowed.",
"Complete within given time.",
"No unfair means allowed."
],
category: "technical",
image: "/images/autocad.webp",
faculty: [
  { name: "Prof. Javed", phone: "8269463376" },
  { name: "Prof. Aman Malviye", phone: "9981173133" },
  { name: "Prof. Rohit Jatav", phone: "7024533765" },
  { name: "Dr. Amit Kaimkuriya", phone: "9669252655" }
],
students: [
  { name: "Rohit Yadav", phone: "9179142476" },
  { name: "Mukund", phone: "8770706900" },
  { name: "Lata Ahirwar", phone: "7489969587" },
  { name: "Nabiya Qureshi", phone: "9589671706" }
]
},

{
id: 8,
title: "Treasure Hunt",
description: "Solve clues and race across campus to find the hidden treasure.",
rules: [
"Team of 3-5 members.",
"Follow clues to next location.",
"No tampering with clues.",
"No outside help allowed.",
"Maintain discipline.",
"First team to find treasure wins.",
"Organizers’ decision is final."
],
category: "technical",
image: "/images/treasurehunt.webp",
faculty: [
  { name: "Prof. Sana Khan", phone: "8358810102" },
  { name: "Prof. Aman Malviye", phone: "9981173133" },
  { name: "Prof. Nitesh", phone: "7024688498" }
],
students: [
  { name: "Radhika Agrawal", phone: "7828957559" },
  { name: "Rohit Yadav", phone: "9179142476" },
  { name: "Aayan Ahmed", phone: "6394027710" }
]
},

{
id: 9,
title: "Theme Debate",
description: "Debate on current affairs and express your ideas.",
rules: [
"Individual participation.",
"Speak for or against the topic.",
"2–3 minutes speaking time.",
"Be respectful and fact-based.",
"Judges’ decision is final."
],
category: "technical",
image: "/images/debate.webp",
faculty: [
  { name: "Prof. Harleen Kaur", phone: "8518009545" },
  { name: "Prof. Aman Malviye", phone: "9981173133" },
  { name: "Prof. Janhvi", phone: "9340972188" },
  { name: "Dr. Amit Sahu", phone: "9074524634" }
],
students: [
  { name: "Neha Yadav", phone: "8305664421" },
  { name: "Prakhar Tripathi", phone: "6269037605" },
  { name: "Mukund", phone: "8770706900" },
  { name: "Palak", phone: "9589092665" }
]
},

{
id: 10,
title: "Next Gen Innovator",
description: "Showcase innovative hardware projects and ideas.",
rules: [
"Team size: 1–2 members.",
"Project must be hardware-based.",
"4-slide presentation required.",
"5–7 min presentation + Q&A.",
"Judging based on innovation and impact.",
"Bring your own components."
],
category: "technical",
image: "/images/nextgen.webp",
faculty: [
  { name: "Prof. Neha Khare", phone: "9757410510" },
  { name: "Prof. Janhvi", phone: "9340972188" },
  { name: "Prof. Yashwant", phone: "8962158066" },
  { name: "Prof. Mridula", phone: "9669500655" }
],
students: [
  { name: "Kartik Raj", phone: "6205834044" },
  { name: "Prakhar Tripathi", phone: "6269037605" },
  { name: "Satish Ahirwar", phone: "7489010209" },
  { name: "Akashya Sen", phone: "9340491359" }
]
}

,

/* CULTURAL EVENTS */
{
id:11,
category:"cultural",
title:"Dance Fusion",
image:"./public/images/cultural/dancefusion.webp",
description:"Present an energetic group performance by blending different dance styles like classical, folk, hip-hop, salsa, and more.",
rules:[
"Maximum 6 members per team",
"Time limit must be followed",
"Any dance style/fusion is allowed",
"Music must be submitted in advance"
],
  team: "Max 6",
  fees: 400,
  date: "10-04-2026",
  venue: "Auditorium",

  faculty: [
    { name: "Dr. Pooja Parsai", phone: "9893764157" },
    { name: "Prof. Divyanshi Choudhary", phone: "9770425249" },
    { name: "Prof. Ritu Sharma", phone: "9713455865" },
    { name: "Prof. Nisha Sahu", phone: "9893236699" },
    { name: "Ms. Soniya Gurjar", phone: "8817314948" }
  ],

  students: [
    { name: "Abhilasha Sahu", phone: "8319059241" },
    { name: "Gaurav Ashish", phone: "8676023323" },
    { name: "Anurag Yadav", phone: "7898720032" },
    { name: "Rudra Shrivas", phone: "8823874224" },
    { name: "Lakshay Chouksey", phone: "7898728611" },
    { name: "Nikhil Baghel", phone: "9753951435" }
  ]
},

{
 id:12,
category:"cultural",
title:"Melody Masters",
image:"./public/images/cultural/melodymaster.webp",
description:"Express your musical talent and captivate the audience with your voice through a solo or duet performance.",
rules:[
"Participation can be solo or duet",
"Time limit must be followed",
"Karaoke/track is allowed",
"Inappropriate content is not permitted"
],
  team: "1-2",
  fees: 200,
  date: "08-04-2026",
  venue: "Auditorium",

  faculty: [
    { name: "Prof. Shumaila", phone: "7247333784" },
    { name: "Prof. Purnima Tripathi", phone: "9752674650" },
    { name: "Prof. Neha Pawar", phone: "9399952616" },
    { name: "Prof. Anurag Khare", phone: "9993269475" },
    { name: "Prof. Shubhangi Nema", phone: "7879792503" }
  ],

  students: [
    { name: "Tanishq Vishwakarma", phone: "7489541478" },
    { name: "Soumya Ahirwar", phone: "6232010290" },
    { name: "Mehek Shaskar", phone: "7987826401" },
    { name: "Kunal Kesharwani", phone: "8319846739" },
    { name: "Swastic Ankit", phone: "9142376699" }
  ]
},

{
 id:13,
category:"cultural",
title:"Trash to Treasure",
image:"./public/images/cultural/trashtotreasure.webp",
description:"Turn waste materials into creative and useful products through innovation and imagination.",
rules:[
"Individual or team participation",
"Only waste/recyclable materials should be used",
"Time limit must be followed",
"Judging will be based on creativity and usefulness"
],
  team: "1-3",
  fees: 100,
  date: "10-04-2026",
  venue: "Pharmacy Activity Hall",

  faculty: [
    { name: "Prof. Seema Kirar", phone: "7354885417" },
    { name: "Prof. Simran", phone: "8319377436" },
    { name: "Prof. Sankil Jain", phone: "8349847183" },
    { name: "Prof. Kusumlata Dubey", phone: "8989093872" },
    { name: "Dr. Neelam Swarnkar", phone: "9630874615" },
    { name: "Prof. Anisha Mourya", phone: "9617845569" }
  ],

  students: [
    { name: "Harsh Soni", phone: "8358851466" },
    { name: "Krishna Khare", phone: "7389372501" },
    { name: "Nikhil Baghel", phone: "9753951435" },
    { name: "Nisha Marvi", phone: "8269886033" },
    { name: "Anmol Dwivedi", phone: "9098623986" },
    { name: "Falgunee Vamnya", phone: "9238037903" }
  ]
},

{
 id:14,
category:"cultural",
title:"Dance Battle",
image:"./public/images/cultural/dancebattle.webp",
description:"Compete head-to-head and showcase your freestyle dance skills, energy, and stage presence.",
rules:[
"Solo participation only",
"Battle rounds will be conducted",
"Time limits must be followed",
"Judging will be based on creativity, energy, and technique"
],
  team: "1",
  fees: 200,
  date: "10-04-2026",
  venue: "Auditorium",

  faculty: [
    { name: "Prof. Preeti Chourasia", phone: "8319014102" },
    { name: "Prof. Kalpana Sachan", phone: "9480622722" },
    { name: "Dr. Rama Pawar", phone: "8839113528" },
    { name: "Prof. Kirti Rawat", phone: "6267391493" },
    { name: "Prof. Ankita Khare", phone: "9713947587" },
    { name: "Prof. Deepti Nikhoria", phone: "9770425249" }
  ],

  students: [
    { name: "Shreya Katare", phone: "9752407415" },
    { name: "Abhinav Yadav", phone: "9685115189" },
    { name: "Bhumika Sahu", phone: "6232567885" },
    { name: "Vaishnavi Thakre", phone: "7223896165" },
    { name: "Kanishka Gupta", phone: "8718987556" },
    { name: "Anchal Tekam", phone: "9302701164" }
  ]
},

{
  id:15,
category:"cultural",
title:"Glam Gala",
image:"./public/images/cultural/glamgala.webp",
description:"Showcase your style, confidence, and creativity as you walk the ramp and leave a lasting impression.",
rules:[
"Solo participation only",
"Time limit must be followed",
"Props allowed (no hazardous items)",
"No sleeveless or short dresses are allowed",
"Judging will be based on confidence, style, and presentation"
],
  team: "1",
  fees: 200,
  date: "09-04-2026",
  venue: "Auditorium",

  faculty: [
    { name: "Prof. Toshiba Kohli Khare", phone: "9827447379" },
    { name: "Prof. Toshi Bhavsar", phone: "8871785483" },
    { name: "Dr. Bhavana Bagherwal", phone: "9111116600" },
    { name: "Prof. Rajkumari Lodhi", phone: "7247573737" },
    { name: "Prof. Yashdeep Pachlaniya", phone: "8319058519" },
    { name: "Prof. Jagrati Khanna", phone: "9074331085" }
  ],

  students: [
    { name: "Sudeep Kumar Sharma", phone: "8109161031" },
    { name: "Aarjav Jain", phone: "7879737954" },
    { name: "Ritin Roshan", phone: "7320996399" },
    { name: "Aripra Tiwari", phone: "9302377936" },
    { name: "Divyanshi Chaurasiya", phone: "9131164810" }
  ]
},

{
 id:16,
category:"cultural",
title:"Faceart Frenzy",
image:"./public/images/cultural/coloursplash.webp",
description:"Unleash your creativity by transforming faces into vibrant works of art through face painting.",
rules:[
"Individual participation",
"Participants must bring their own materials",
"Time limit must be followed",
"Theme (if any) must be followed"
],
  team: "1",
  fees: 100,
  date: "08-04-2026",
  venue: "Pharmacy Activity Hall",

  faculty: [
    { name: "Prof. Yogita Mishra", phone: "8989093872" },
    { name: "Prof. Ritu Sharma", phone: "9713455865" },
    { name: "Prof. Amita Rawat", phone: "9713716730" },
    { name: "Prof. Kaushal Saini", phone: "7987740401" },
    { name: "Ms. Khushboo Chourasiya", phone: "8516985910" }
  ],

  students: [
    { name: "Anuj Chaturvedi", phone: "6264324380" },
    { name: "Raj Yadav", phone: "8815857435" },
    { name: "Mehek Soni", phone: "7805906887" },
    { name: "Diksha Parmar", phone: "9977410672" },
    { name: "Minakshi Shakya", phone: "8120933676" }
  ]
},

{
 id:17,
category:"cultural",
title:"Bandwar",
image:"./public/images/cultural/bandwar.webp",
description:"A high-energy battle of bands where music meets passion, coordination, and stage performance.",
rules:[
"Team participation",
"All instruments must be arranged by participants",
"Time limit must be followed",
"Judging will be based on coordination, music quality, and stage presence"
],
  team: "No Limit",
  fees: 1500,
  date: "08-04-2026",
  venue: "Auditorium",

  faculty: [
    { name: "Prof. Aarya Tiwari", phone: "9340177397" },
    { name: "Prof. Shivani Namdeo", phone: "8516084600" },
    { name: "Prof. Adarsh Sharma", phone: "9294825230" },
    { name: "Prof. Santosh Rane", phone: "7566313772" },
    { name: "Mrs. Usha Yadav", phone: "7224958175" }
  ],

  students: [
    { name: "Akshat Tiwari", phone: "7898588133" },
    { name: "Shoury Singh Thakur", phone: "8817999746" },
    { name: "Mayank Shakwar", phone: "8965075564" },
    { name: "Ayush Vishwakarma", phone: "6264228299" },
    { name: "Ayush Peter", phone: "6262082639" }
  ]
},

{
id:18,
category:"cultural",
title:"Kavya Manch",
image:"./public/images/cultural/kavyamanch.webp",
description:"Express your thoughts and emotions through powerful words and engaging poetic performance.",
rules:[
"Solo participation",
"Original/self-written content is preferred",
"Time limit must be followed",
"No offensive or inappropriate content"
],
  team: "1",
  fees: 50,
  date: "09-04-2026",
  venue: "Seminar Hall",

  faculty: [
    { name: "Dr. Meenakshi Lone", phone: "9981575004" },
    { name: "Dr. Sanju Harne", phone: "9425678609" },
    { name: "Prof. Bhavna Shirke", phone: "9827018734" },
    { name: "Prof. Kusumlata Dubey", phone: "8989093872" },
    { name: "Mr. Ramdeen Rathore", phone: "9926769935" }
  ],

  students: [
    { name: "Dev Kishan Vishwakarma", phone: "7389068245" },
    { name: "Harshita Jat", phone: "7566385332" },
    { name: "Ayushi Malviya", phone: "9893482511" },
    { name: "Om Prakash", phone: "9142376699" },
    { name: "Hariom Gaur", phone: "9236619112" }
  ]
,},

/* SPORTS EVENTS */

{
id:21,
category:"sports",
title:"Gully Cricket",
image:"/images/sports/gullycricket.webp",
description:"6 player team cricket match with 5 overs.",
rules:[
"Team of 6 players.",
"5 overs per match.",
"Knock-out format.",
"Overarm tennis ball will be used.",
"One bowler can bowl maximum 2 overs.",
"No LBW rule.",
"Toss decides batting or bowling."
],

  faculty:[
    {name:"Prof. Ankur Saxena", phone:"7869422278"},
    {name:"Prof. Ram Sahu", phone:"9893998794"},
    {name:"Gautam Singh", phone:"9661259888"},
    {name:"Mr. Kishore Atkar", phone:"9977872409"},
    {name:"Mr. Suresh Kant Raut", phone:"9926328061"},
    {name:"Amit Kumar", phone:"9608830619"}
  ],
  students:[
    {name:"Prashant Gupta", phone:"6263069078"},
    {name:"Sanjay Prajapati", phone:"8357068294"},
    {name:"Manjit Dhakad", phone:"6232063445"},
    {name:"Nitesh Ahirwar", phone:"7898570104"},
    {name:"Ritik Patel", phone:"9303975128"}
  ]

},

{
id:22,
category:"sports",
title:"Kabaddi",
image:"/images/sports/kabaddi.webp",
description:"Kabaddi team competition.",
rules:[
"Team of 7 players with 3 substitutes.",
"Match consists of two halves of 10 minutes.",
"Raider must continuously say 'Kabaddi'.",
"If raider is caught, defending team gets 1 point.",
"Bonus line rule may apply.",
"Maximum 3 timeouts allowed per team."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Dr. Gourish Parashar", phone:"9406768960"},
    {name:"Prof. Varchasva Dubey", phone:"6268801392"}
  ],
  students:[
    {name:"Badal Raj", phone:"9752918277"},
    {name:"Aditya Parth", phone:"6207169958"},
    {name:"Vipin Thakur", phone:"9202369855"},
    {name:"Suryansh", phone:"7415930106"}
  ]

},

{
id:23,
category:"sports",
title:"Badminton",
image:"/images/sports/badminton.webp",
description:"Singles or doubles badminton competition.",
rules:[
"Played as singles or doubles.",
"Match played up to 11 points.",
"Player must win by 2 points difference.",
"Shuttle touching boundary line counts IN.",
"Service must be below waist."
],

  faculty:[
    {name:"Ms. Rinki Shah", phone:"7223926704"},
    {name:"Mr. Sumit Soni", phone:"7898276714"},
    {name:"Prof. Piyush Verma", phone:"8109580573"},
    {name:"Prof. Mahima Patel", phone:"9009755133"}
  ],
  students:[
    {name:"Yash Ghosh", phone:"9074115820"},
    {name:"Dev Mishra", phone:"7355542942"},
    {name:"Prabhan", phone:"8982793214"}
  ]

},

{
id:24,
category:"sports",
title:"Volleyball",
image:"/images/sports/volleyball.webp",
description:"Team volleyball match.",
rules:[
"Team of 6 players with substitutes.",
"Match played best of 3 sets.",
"Each set played up to 25 points.",
"Maximum 3 touches per side.",
"Players cannot touch the net during play."
],

  faculty:[
    {name:"Mr. Asif Yaar", phone:"8120786775"},
    {name:"Harish Kumar Singh", phone:"7393869100"},
    {name:"Prof. Neeraj Raghuwanshi", phone:"7024808727"},
    {name:"Mr. Manoj Deshmukh", phone:"7049010710"}
  ],
  students:[
    {name:"Himanshu Bharaskar", phone:"9770026248"},
    {name:"Utsav Kumar", phone:"9608362187"},
    {name:"Chirag", phone:"9754850257"},
    {name:"Yash Pandey", phone:"7000026580"}
  ]

},

{
id:25,
category:"sports",
title:"Basketball",
image:"/images/sports/basketball.webp",
description:"Basketball team tournament.",
rules:[
"Team of 5 players with substitutes.",
"Match played in 4 quarters.",
"Each quarter approximately 8 minutes.",
"24 second shot clock if available.",
"Team with highest score wins."
],

  faculty:[
    {name:"Rinki Shah", phone:"7223926704"},
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Prof. Shashank Shekhar", phone:"8989634207"}
  ],
  students:[
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Arjav", phone:"7879737954"}
  ]

},

{
id:26,
category:"sports",
title:"Tug of War",
image:"/images/sports/tugofwar.webp",
description:"Team strength competition.",
rules:[
"Team of 8 players.",
"Best of 3 rounds.",
"Team pulling opponent beyond center mark wins.",
"Proper shoes and gloves allowed."
],

  faculty:[
    {name:"Harish Kumar Singh", phone:"7393869100"},
    {name:"Mr. Roshan Kumar", phone:"6260825913"},
    {name:"Ms. Ravita Ahirwar", phone:"9644611672"}
  ],
  students:[
    {name:"Shaswat Singh", phone:"9257131784"},
    {name:"Shivam Bele", phone:"7869285391"},
    {name:"Manish Kumar", phone:"6206461973"}
  ]

},

{
id:27,
category:"sports",
title:"Pittu",
image:"/images/sports/pittu.webp",
description:"Traditional game competition.",
rules:[
"Game is played between two teams (5 players each).",
"7 stones are stacked at the center before starting.",
"Attacking team must hit the stack with a ball to begin the round.",
"After hitting, attackers must rebuild the stack.",
"Defending team tries to hit attackers with the ball to eliminate them.",
"A player is out if hit below the head.",
"If attackers rebuild the stack and shout 'Pittu', they win."
],

  faculty:[
    {name:"Harish Kumar Singh", phone:"7393869100"},
    {name:"Lt. Rinki Shah", phone:"8305266603"},
    {name:"Sub Lt. Mrityunjay Singh", phone:"8962137723"}
  ],
  students:[
    {name:"Chirag", phone:"9754850257"},
    {name:"Neeraj Pardi", phone:"8103972242"}
  ]

},
{
id:28,
category:"sports",
title:"Chess",
image:"/images/sports/chess.webp",
description:"Rapid format chess tournament.",
rules:[
"Individual event.",
"Time limit 10 minutes per player.",
"Illegal move results in penalty.",
"Checkmate wins the match."
],

  faculty:[
    {name:"Mr. Asif Yaar", phone:"8120786775"},
    {name:"Prof. Shikha Shukla", phone:"9669995655"},
    {name:"Prof. Yashwant Singh", phone:"8962158066"}
  ],
  students:[
    {name:"Ayan Ahmad Ansari", phone:"6394027710"},
    {name:"Abhinav Tiwari", phone:"8878098724"},
    {name:"Vedant Khare", phone:"9131028606"}
  ]
},

{
id:29,
category:"sports",
title:"Carrom",
image:"/images/sports/carrom.webp",
description:"Carrom board competition.",
rules:[
"Played as singles or doubles.",
"Player must pocket queen and cover it.",
"If striker is pocketed one coin returns.",
"Player finishing all coins first wins."
],

  faculty:[
    {name:"Mr. Asif Yaar", phone:"8120786775"},
    {name:"Harish Kumar Singh", phone:"7393869100"},
    {name:"Prof. Mridula", phone:"9669500655"},
    {name:"Prof. Abhishek", phone:"9926482223"}
  ],
  students:[
    {name:"Dev Niranjan", phone:"6263829891"},
    {name:"Anurag Thakur", phone:"8643087695"},
    {name:"Ashish Vishwakarma", phone:"8819050349"},
    {name:"Sumit", phone:"6265784197"}
  ]

},

{
id:30,
category:"sports",
title:"100m Race",
image:"/images/sports/100m.webp",
description:"Short distance sprint race.",
rules:[
"All runners must start behind start line.",
"False start results in warning.",
"Second false start leads to disqualification.",
"First runner crossing finish line wins."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Harish Kumar Singh", phone:"7393869100"}
  ],
  students:[
    {name:"Rohit Yadav", phone:"8982318171"},
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Neeraj Pardi", phone:"8103972242"},
    {name:"Som Kewat", phone:"8641043232"}
  ]

},

{
id:31,
category:"sports",
title:"200m Race",
image:"/images/sports/100m.webp",
description:"200 meter running race.",
rules:[
"Same rules as 100 meter race.",
"All runners must start behind start line.",
"False start warning allowed once.",
"Second false start leads to disqualification."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Harish Kumar Singh", phone:"7393869100"}
  ],
  students:[
    {name:"Rohit Yadav", phone:"8982318171"},
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Neeraj Pardi", phone:"8103972242"}
  ]

},

{
id:32,
category:"sports",
title:"Shot Put",
image:"/images/sports/longjump.webp",
description:"Athletics throwing event.",
rules:[
"Throw must be inside throwing circle.",
"Distance measured from landing mark.",
"Player cannot cross throw line.",
"Best throw out of 3 attempts counts."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Harish Kumar Singh", phone:"7393869100"}
  ],
  students:[
    {name:"Rohit Yadav", phone:"8982318171"},
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Neeraj Pardi", phone:"8103972242"}
  ]

},

{
id:33,
category:"sports",
title:"Javelin Throw",
image:"/images/sports/longjump.webp",
description:"Athletics javelin throwing event.",
rules:[
"Javelin must land within marked sector.",
"Player cannot cross throw line.",
"3 attempts allowed per participant.",
"Longest valid throw wins."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Harish Kumar Singh", phone:"7393869100"}
  ],
  students:[
    {name:"Rohit Yadav", phone:"8982318171"},
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Neeraj Pardi", phone:"8103972242"}
  ]

},

{
id:34,
category:"sports",
title:"Long Jump",
image:"/images/sports/longjump.webp",
description:"Athletics event.",
rules:[
"Take-off must be from one foot only.",
"Do not cross the foul line.",
"Jump must land inside the sand pit.",
"Distance is measured from board to nearest mark.",
"Best valid jump is final score."
],

  faculty:[
    {name:"Mrityunjay Singh", phone:"8962137723"},
    {name:"Harish Kumar Singh", phone:"7393869100"}
  ],
  students:[
    {name:"Rohit Yadav", phone:"8982318171"},
    {name:"Pranjal Tiwari", phone:"9243475531"},
    {name:"Neeraj Pardi", phone:"8103972242"}
  ]

}
]
export default events
