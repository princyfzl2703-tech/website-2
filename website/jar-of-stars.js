/* =========================================
   ELEMENTS
========================================= */

const jarWrapper = document.getElementById("jarWrapper");
const flyingStar = document.getElementById("flyingStar");
const blackTransition = document.getElementById("blackTransition");
const reasonScreen = document.getElementById("reasonScreen");

const reasonNumber = document.getElementById("reasonNumber");
const reasonText = document.getElementById("reasonText");


/* =========================================
   YOUR 1000 REASONS
========================================= */

const reasons = [
    "Because talking to you feels like home",

"Because you make ordinary moments magical",

"Because our existence itself makes me happy",

"Because you understand me in ways nobody else does",

"Because you have the most beautiful soul in the world", 

"Because you care for me more than anyone else",

"Because you have the kindest heart in the whole world", 

"Because you love me more than I deserve",

"Because you always make me feel special", 

"Because you always try to prioritize me",

"Because you never made me feel unloved", 

"Because you always motivate me", 

"Because you are my comfort zone",

"Because you always scold me for skipping meals",

"Because you are the best thing that ever happened to me",

"Because you have never judged me", 

"Because you make me smile even when I'm not in the mood to", 

"Because you apologize to me even when you did nothing wrong",

"Because you understand me better than anyone else",

"Because you always listen to me even when all I'm talking about is super borinng",

"Because you were present for me when no one was there", 

"Because you loved me like no one does",

"Because I even love you more when you get jealous after seeing me with my other frnds", 

"Beacuse the way you comppliment me, I swear no one else does",

"Because you never made our friendship feel one sided",

"Because you have the prettiest smile",

"Because you have the prettiest eyes",

"Because you have the most perfect lips",

"Because you are supercalifragilisticexpialidocious", 

"Because you mentions me in your prayers and even I do",

"Because you always let me win in our hehehehe competition",

"Because you comes to me when I need you the most",

"Because your single text makes me smile like an idiot",

"Because the nickname that you gave me have a special place in my heart",

"Because our little fights",

"Because our each and every moment that we spent together talking to each other",

"Because you did the countdown for my birthday from 62 days before and now you are doing it from 307 days before, how could not love you ", 

"Because you listens to my non sense talks", 

"Because the videos that you edited for my birthday", 

"Because you are my secret keeper", 

"Because you made time to talk to me even when you were super busy",

"Because you have the sweetest voice in the whole world", 

"Because no one could ever be like you", 

"Because you are irreplaceable", 

"Because you laugh at my non sense jokes",

"Because you are my 11:11 wish",

"Because I pray for your happiness, anti stress life and all", 

"Because you have a speecial place in my heart", 

"Because you are such a cutie",

"Because you came into my life and chnaged everything",

"Because I have never thought we would be this close",

"Because you make my boring days intersting",

"Because you understand my silence too",

"Because you made online friendship feel so special",

"Because our senseless are my fav",

"Because the way you say 'AK47 se uda dunngi' to every person who hurts me", 

"Because I litreally tell you everything without even thinking once",

"Because you remeber even my smallest details",

"Because you make me feel like I matter to you",

"Because life geuninely feels better with you in it",

"Because we always fight but you never left me alone",

"Because talking to you never feel forced",

"Because you somehow make every conversation memorable",

"Because your presence feels comforting even through the screen",

"Because you make me feel heard",

"Because my vibe matches the most to you",

"Because you never judged me for being weird",

"Because our friendship feels safe",

"Because you know how to calm me down",

"Because your happiness geuninely matters to me",

"Because I can be the real me around you",

"Because the compliments that you give me stay in my mind for days",

"Because our friendship feels different from others",

"Because you care for me deeply ",

"Because you've seen the version of me which no one else has",

"Because every memory with you feels special",

"Because you even celebrates my little achievements",

"Because no matter how much I talk to you it always feels like I missed somehting like it's never enouhg",

"Because your kidness makes me feel like I'm the only one who matters",

"Because you make me check my phone constantly",

"Because I feel lucky to have you in my life",

"Because our friendship feels like home",

"Because I remeber your little things",

"Because I could talk to you for hours and still not get bored",

"Because I could never find a friend like you", 

"Because you are one in millions",

"Because you could never imagine how much you matter to me",

"Because my heart melts everytime you call me madam jii or kaju katli", 

"Because you've helped me in that ways you don't even know",

"Because you always ask me if I'm okay if I give dry replies",

"Because you need no words to understand me",

"Because our hehehehe competition is the best part of our chats and irreaplaceable",

"Because nothing can separate us",

"Because you make me feel apreciated",

"Because you did everything you could do just to make me feel special",

"Because your little efforts mean the world to me",

"Because you are always my priority no matter what",

"Because I feel the safeest around you",

"Because no one can treat me better than you",

"Because the way you checks on me even when you are busy",

"Because you mean the most to me",

"Because you never hurt me",

"Because your msg are something I always look forward to",

"Because you even remeber the things I said long ago",

"Because you somehow make every situation less stressful",

"Because you never make me feel if I'm being annoying",

"Because we became so close naturally",

"Because our late night talks are always my fav", 

"Because our friendship is full of random moments", 

"Because you make feel less insecure",

"Because you was, you are and you will always be my fav no matter what",

"Because you made me believe in female friendship are not toxic",

"Because you can control my mood just by the way you talk to me",

"Because your excitement is adorable",

"Because you make every topic intersting",

"Because your personality is differnet from everyone else",

"Because you make my bad days good just by talking to me",

"Because I'll talk to you for hours and still not get bored", 

"Because I never get tired of talking to you", 

"Because you are the part of my life that I cherish the most",

"Because you always make me blush by your flirting skills",

"Because you are the type o friend other peopel wish they had", 

"Because being your friend is genuinely one of my fav thing",

"Because you make life feel lighter",

"Because our ordinary memories feel special",

"Because you make me smile at muy phone like a weird while talking to you",

"Because even your existence makes my life better",

"Because you know how to cheer me up",

"Because your random msg brightens my day instanyly",

"Because I can never stay upset whilw talking to you",

"Because your personality is impossible not to love",

"Because you always listens to me patiently",

"Because your care feel genuine",

"Because you've become such an important part of my life",

"Because you are the best friend I could ever ask for",

"Because you always make time for me",

"Because our cahts are litrally like a therapy for me",

"Because I trust you blindly",

"Because your love feels like a warm embrace",

"Because you make silence feel comfortable too",

"Because you are one of those people who truly gets me", 

"Because you love me the way I'm",

"Because you make my life feel happier",

"Because I can love without any reason", 

"Because I will love you even when you don't love me", 

"Because I even laugh at the dumbest thing with you",

"Because I can be chaotic around you without any embarrassment",

"Because you always try to help me out",

"Because I even think about you in my dreams",

"Because I will always choose you in a room full of people",    

"Because you notice my mood swings", 

"Because you are only one who knows my all secrets",

"Because you are first person i think about after waking up in the morning",

"Because you are the last thought of my day",

"Because you make distance feel nothing",

"Because you somehow understand my weird explanations",

"Because you make difficlut times esier", 

"Because you show kindness in small things",

"Because our friendship has never felt one sided",

"Because your reactions are always memorable",

"Because you make me feel safe to open up",

"Because you make my everyday intersting",

"Because I never have to pretend to be okay around you",

"Because you are my favorite person",

"Because your friendship feels like a warm hug even thorugh the screen",

"Because you make me feel like I'm important in your life",

"Because your friendship feels honest and real",

"Because your friendship feels like a blessing",

"Because I can talk to you about anything",

"Because your energy makes conversations enjoyable",

"Because nothing feels awkward around you", 

"Because you somehow trun ordinanary moments into beautiful memories",

"Because your support has helped me more than you know",

"Because I have never felt bored while talking to you",

"Because you understands my mood too well",

"Because you are diamond in a world full of gold",

"Because you always try to make me feel special",

"Because maybe no one can have a friend like you",

"Because the way you treat poeple",

"Because your loyalty",

"Because you never get tired of me",

"Because you take care of me like my mother",

"Because you are that 7 minutes for me",

"Because you've always been my side",

"Because I can talk to you for the wholw day without getting bored",

"Because the paragraph that you wrote for me on 13th of May I still remeber that",

"Because you get angry if I forget to take my medicine",

"Because your each and every word matters to me a lot",

"Because you've such a cute name",

"Because you have the perfect skin",

"Because your love for me",

"Because you believe in me when I don't",

"Because I reread our chats and still end up laughing",

"Because our friendship started with a random chat and I've never imagined you could be this important for me",

"Because you make late replies forgivable",

"Because I didn't realize when talking to you became a part of my daily routine",

"Because every notification from you feels special",

"Because you made online friendship fee so special",

"Because we talk a lot even after saying bye to each other",

"Because I open my gallery because of you",

"Because you know the verison of me that nobody else does",

"Because we can argue and still end up laughing",

"Because your energy is impossible to replace",

"Because you are the proof that distance means nothing in friendhsip",

"Because you make me tell even my little thinghs first to you",

"Because if my life was a book, you would have been my fav chapter",

"Because when everyone starts hating on you, always remeber I'm never that part of it",

"Because I can even write a novel about our friendship",

"Because you made my screen time wroth it",

"Because you are the reason why my phone's battery dies so fast",

"Because nobody understands me like you do",

"Because you made online friendship feel more real than school friendship", 

"Because I can text you out of anywhere no matter how busy I'm",

"Because our chats have no stucture but maximum entertainment",

"Because whenever I type A in my keyboard suddenly your name pops up",

"Because you made me emotionally attached with a notification sound",

"Because talking to you is my fav hobby",

"Because no one could ever seperate us",

"Because you always know I'm not feeling well even wwhen I was acting normal",

"Because talking to you feels like taking a break from this stressful world",

"Because we can go from deep talks to non sense talks within seconds", 

"Because meeting you is the bestest thing happened to me",

"Because my days feel incomplete without talking to you",

"Because our chats have more plot twist than dramas",

"Because you make me laugh even when I'm trying to stay serious",

"Because your msgs are never boring",

"Because our friendship feels rare",

"Because you remeber things which I casually mentioned once",

"Because no matter how bad my mood is, you make it better somehow",

"Because we can make memories out of normal conversations",

"Because you know how to match my energy perfectly",

"Because even our fights become a special memory",

"Because I will again and again choose you as my best friend",

"Because our friendship feels like finding the right song in the perfect time",

"Because you are the reason why I check my phone so often",

"Because we cahnge topics while talking like the second hand of the clock moves",

"Because your single text is enough to make me happy",

"Because we will talk about something for hours and in the end we'll say 'chhodo hume kya?'", 

"Because even short conversations with you improves my mood",

"Because you msg are my fav interruption",

"Because you made me realize that friendship like this exists",

"Because I'll text you while I'm not in a good mood and end the conversation while launghing",

"Because we've created a lot of memories even without realizing",

"Because I can never get tired of you",

"Because you even appreaciates my small efforts",

"Because out of everyone, I'm glad that life led me to you",

"Because having a friend like you is a true blessing",

"Because you are the reason why I'm still living happily on this cruel earth",

"Because if our chats got leaked, we'd both be finished",

"Because you replies to the every reel I send you whenever you get time",

"Because our conversations are so hilarious that it deserves it's own netflix series",

"Because you are the only person who understands my mood swings well",

"Because having a best friend like you is like having everything precious in the world",

"Because talking to you never feels like wasting time",

"Because you make me smile at random times",

"Because you have your own unique way of seeing the world",

"Because you get excited about things and it becomes contagious",

"Because you make me look forwward to tomorrow",

"Because you happiness matters to me",

"Because you are unforgettable",

"Because you make life feel less borign",

"Because you make memories without even trying",

"Because you made me realize that friendship can be this addictive",

"Because whenever someone asks me about my best friend the first thing that comes into my mind is you",

"Because our friendhsip is the best example of unexpected friendhsip",

"Because I always get jealous whenever you mention someone else in our conversations",

"Because idk why but some song remind me of you",

"Because you know the thiings which no body else does",

"Because you stayed even when things got boring",

"Because whenever I reread our chats and still end up smiling",

"Because you feel familiar in the best way possible",

"Because you listen to my random like they are very important",

"Because life genuinely become intersting after meeting you",

"Because your happiness matters to me more than mine",

"Because I smile whenever I hear your name",

"Because I have never seen someone like you",

"Because you'll still be special for me if we ever got distant",

"Because I can never unlove you",

"Because you are the proof that people can be unexpectedly be come important",

"Because you make edits about our friendship to make me feel spcial",

"Because I could never found someone better than you",

"Because your presence itself make mmy life better",

"Because my mood gets better after talking to you",

"Because you are important for me",

"Because you never made me feel ignored",

"Because I can talk to you for hours without any topic",

"Because you made me realize that friendship can be this comforting",

"Because I automatically want to tell you every little detail of my life first to you",

"Because I can disappear for some time and still come back comfortably",

"Because whenever I feel loe I think there is a person who lovs me a lot amd that's YOU and it actually improves my mood",

"Because you somehow understands my weird humor",

"Because I smile while writing msgs to you", 

"Because you turned into a important part of my life",

"Because our late night talks were so comforting that I sacrificed my sleep for it",

"Because our friendhsip has it's won world",

"Because you made distance feel nothing",

"Because talking to you is one of my fav hobby",

"Because you are the proof that distance means nothing in fri3ndships",

"Because you made me believe in online friendships",

"Because you are perfect",

"Because I'm so comfortabel with you like we are friends from childhood but who would believe it's been only 1 year and few months",

"Because I'm sure our friendship will last forever",

"Because you can recongnize me in a crowded place without seeing my face",

"Because you matter the most to me",

"Because I can't even think of losing you",

"Because I don't know how would I survive if weren't present there for me",

"Because you are the reason I still believe in female frieendships",

"Because no one could match my vibe like you do",

"Because I check my phone in the morning just to see if I receive a text from you or not",

"Because the way you make time when you ar ebusy just to check on me",

"Because everything is possible btu finding a best friend liek you is impossible",

"Because I still remeber our first conversation",

"Because I'm grateful that i joined the gc 'lucky charms' and became your friend",

"Because I text even when I'm super busy",

"Because my heart melts when you call me 'Madam jii' or 'Kjau katli'",

"Because you are unforgettable",

"Because I would still choose you as my best friend for millions of times if I get a chance",

"Because whenever you flirt with me I litreally blush like an idiot",

"Because you are the person who i wouldn't be able to forget till my last breath",

"Because you are the reason why my screen time is touching the sky",

"Because only few get to know my anger issues",

"Because I only get angryu on you cuz I know you wouldn't leave me",

"Because i litreally cried when you do little efforts to make me feel special or write a paragraph for me",

"Because you are the only one who can handle my anger issues if someone else was there at your place I'm sure they would have left me but I'm sure you wouldn't",

"Because you love me a lot even though I don't deserve it all",

"Because you could never imagine how much I love you maybe after seeing this website you'll get a idea but it's more than I show and more than you knwo",

"Because making you feel special, making efforts for you is the thing which I love to do a lot",

"Because after telling you my problems it feels like half of the problem is already solved",

"Because I've got my eyes on you",

"Because I can even die for you",

"Because I'll text even when my battery is just 1%",

"Because your one text of 'luvv uh' touches my heart",

"Because you are the only one who could know if I'm not well even if I don't",

"Because you are like my sister",

"Because of the way you reply to me",

"Because everything starts feeling special when you are around",

"Because you try to make me feel loved in every way possible",

"Because I don't awkward even when I'm acting weird",

"Because you stay even when I'm not fun to talk",

"Because I can talk to you after many days and still feel normal",

"Because you can turn my worst mood into laughter",

"Because you made me feel like I'm too much",

"Because you stay patient even when I'm dramatic",

"Because you listen to me even when I repeat the same story",

"Because you give honest advice",

"Because you are the part of my happiest memory",

"Because you make me feel less alone in everything",

"Because you forgive quick and don't hold grudges",

"Because you always come back to me no matter what happens",

"Because you don't misunderstood me",

"Because you made me believe in that real friendship exists", 

"Because you treat me like I really matter",

"Because you stay the same even when life gets busy",

"Because you make my bad days easier to survive",

"Because you accept my flaws without pointing them out", 

"Because you don't make me feel replaceable",

"Because I can be completely honest with you",

"Because you understand me even when I don't make any sense",

"Because talking to you instantly fixes my mood",

"Because you never judge my weird thoughts",

"Because you stay even when I'm annoying",

"Because you care like my mom",

"Because you can turn serious talk in joke in seconds",

"Because you never let me feel left out",

"Because you don't get tired of my nonsense",

"Because you accept my overthinking mind",

"Because you make 'nothing' conversation feel special",

"Because you are my fav notification",

"Because you get to know my mood just after one text",

"Because you can roast me and still love me at the same time",

"Because you make boring days feel less boring",

"Because I can be full weird with you",

"Because you don't leave conversation halfway",

"Because you are my emotional suppport chaos",

"Because you feel like home even though screen",

"Because even on my worst days you don't leave me alone with my thoughts",

"Because you make me feel like I still matter when I'm doubting myself",

"Because you've seen my broken moments and never used them against me",

"Because you stayed even when I became difficult to handle",

"Because youu make me feel understood without me having to explain everything",

"Because you are the only person who genuinely cares how I feel",

"Because you make my heart feel lighter just by being there",

"Because you never made me feel like I'm noot enouhg",

"Because you accepted me at my lowest without cahnging how you see me",

"Because you made me believe that I'm not alone in this world",

"Because your presence feels like emotional support to me",

"Because you doon't walk away when I'm struggling to express myself",

"Because you make me feel valued even when I don't value myself",

"Because you stayed consistent when everything else in my life felt unnstable",

"Because you listen to my pain even when I don't say it directly",

"Because you've become the part of my emotional healing without tryying",

"Because I can be honest with my feelings without the fear of judgement",

"Because you can make a heavy thought feel lighter", 

"Because you are the one reason I smile even when I don't like it",

"Because you remind me that I'm loved even when in my weakest moments",

"Because youu don't need a perfect version of me to stay",

"Because you understand my heart even when my words fail",

"Because you give comfort just by exixting in my life",

"Because you feel like a safe place I never want to lose",

"Because you care in ways that are rare too find",

"Because you make emotional ppain feel less unbearable",

"Because you never made me feel like I had to hide my feelings",

"Because you ar ethe reason I trust someone so deeply again",

"Because loving you as a friend feels like the most genuine thing in my life",

"BBecause you make me feel choosen, not just iincluded",

"Because your message can calm me down faster than anyhting else",

"Because yoou notice something is wrong even when I pretend I'm fine",

"Because you make me feel important without even trying",

"Because you never treat my feelings like they are silly",

"Because you stayed long enough to become part of my life forever",

"Because you are one of the first I want to tell things to",

"Because you care about my happiness genuinely",

"Because you kindness feels effortless and real",

"Because you don't disappear when life gets messy",

"Because your words stay in my mind for a long time",

"Because you made friendship feel easy instead of exhausting",

"Because you don't just hear me, you actually understand me",

"Because you make me feel seen in ways others don't",

"Because you gave me comfort during moments you didn't even realize were hard for me",

"Because you never made me beg for your attention",

"Because even your smallest effort means a lot to me",

"Because you became one of my fav part of everyday",

"Because you always leave a little happiness behind after every conversation",

"Because you made me realize how beautiful genuine friendship is",

"Because your presence can fix moods you didn't even cause",

"Because you care about the little things that matter to me",

"Because you care about the little things that matter to me",

"Because I never have too fake my personality around you",

"Because you somehow make chaos feel comforting",

"Because I trust your intentions with my whole heart",

"Because you never made me feel like a burned",

"Because your friendship feels rare and irreplaceable",

"Because even your random texts make my day better",

"Because you became a person I can't imagine my life without",

"Because you make me feel appreciated in small ways",

"Because your energy feels peaceful to my heart",

"Because you make ordinary moments unforgettable",

"Because you make me feel cared without asking for anything back",

"Because you gave me moeires I'll probably never stop thinking about",

"Because you stayed through versions of me that were hard to love",

"Because you made friendhsip feel warm and comforting",

"Because no matter how many people I meet, nobody feels like you",

"Because your existence makes my world feels sofer",

"Because my ady feel incompletewithout talking to you",

"Because the comfort that you give me is impossible to explain properly",

"Because no one can understand my randomness like you do",

"Because the way you care never felt forced",

"Because every conversation with you becomes a memory somehow",

"Because life has become softer after you cane into it",

"Because even your 'are you okay?' feels different from everyone else's",

"Because my inner child feels safe around you",

"Because the bond that we have is impossible for others to have",

"Because the effort that I put into our friendhsip never felt unnoticed",

"Because you make slience feel comfortable instead of awkward",

"Because nothing feels with you",

"Because you made me realize that friendship cna be thid deep too",

"Because you energy feels like peace to my overthinking mind",

"Because you make me feel I truly belong to you",

"Because the happiness that you bring into my life feels permanent",

"Because you will always stay important for me no matter how much time passes",

"Because our friendship became one of my fav thing",

"Because the way you listen to me",

"Because you make me feel understood instead pf misunderstood",

"Because your laugh instantly makes things better",

"Because I can never stay upset from you for a long time",

"Because the connection we have feels stronger than distance",

"Because talking to you feels like escaping stress for a while",

"Because you always manage to bring coomfort with simple words",

"Because my fav memories somehoe include you",

"Because you made friendship feel warm instead of complicated",

"Because you become someone I sliently depend on",

"Because no friendship has ever felt this naturally beautiful to me",

"Because even short conversations with you make my whole day better",

"Because you brought a different kind of peace to my life",

"Because you make me laugh in the ways no one else could",

"Because your friendship feel like my heart heart wanted from a long time",

"Because you make me feel heard not ignored",

"Because you never made me feel embarassing for having emotions",

"Because you made attachment feel beautful instead of scary",

"Because you became one of the best thing life randomly gave me",

"Because my happiness increase whenever I talk to you",

"Because you made me realize how healing the right person can be",

"Because yo understand my mood swings without getting irritated",

"Because you've never made our friendship feel one sided",

"Because you make me feel emotionally close even from far away",

"Because your kindness reaches part of me you don't even see",

"Because talking to you had become my fav habit",

"Because you bring softness into my hard days",

"Because being understood by you feels different from everyone else",

"Because you make me feel valued naturally",

"Because your existence gives me something to smile baout everyday",

"Because you are the one of the people I never get tired of",

"Because your support feels quite but powerful",

"Because you somehow make everything feel less heavy",

"Because the connection we built means more to me than words can explain",

"Because you have become someone my heart instantly looks for",

"Because you make me feel that I matter consistently",

"Because you make me feel appreciated just by the way you talk to me",

"Because your friendship feels like one of the safest place",

"Because you are the kind of person that others spend years hoping to find",

"Because loving you as my best friend feels effortless",

"Because you flood up my phone with notifications when I say 'I don't want to talk'",

"Because the long paras that you wrote for me will always have a reserved place in my heart",

"Because no matter how many times I get angry you, you can always handle me",

"Because your presence feels comforting",

"Because you are always on my mind",

"Because you have a beautiful way of thinking",

"Because you never lie to me",

"Because you share your details with me",

"Because I feel lucky to have a best friend like you in generation where all friends are snakes",

"Because you don't try to be like other, you have your own aura",

"Because you have your unique aura",

"Because you are more than enough for me",

"Because you are really hard to forget",

"Because you are someone I silently admire",

"Because you make waiting worthy",

"Because you are irreplaceacle",

"Because you are naturally beautiful (bith inside and out)", 

"Because you make me emotional with your cute texts",

"Because you are someone I cherish",

"Because you made me care for you more than anyone else",

"Because you make me feel lucky with your love and care",

"Because you make our conversations addictive",

"Because you are the only one who understands me truly",

"Because you are comforting to think about",

"Because you have a positive vibe",

"Because you are someone I appreciate daily",

"Because you make me feel connected even from far",

"Because you make me confortable being myself",

"Because you randomly pop up into my thoughts at the worst time and make that better",

"Because you make me reread the chats for no reason it just comforts me a lot",

"Because your vibe is hard to explain but easy to feel",

"Because I imagine your reaction to things randomly",

"Because you make songs suddenly feel personal",

"Because I check my phone eveytime when I get a notification hoping it's you",

"Because you make waitiing feel like a habit which not even boring a bit",

"Because you make me smile randomly",

"Because hearing your name itself feels comforting",

"Because you make me feel like I have nothing better to do than think of you",

"Because I replay our conversations in my mind",

"Because you feel like a comfort hug",

"Because you make even small replies feel big",

"Because you are the reason why I have so many screenshots of our chats",

"Because you make me feel like I'm the only one who matters to you",

"Because you always manage to leave me smiling after every conversation",

"Because you bring peace to my chaotic mind",

"Because your kindness leaves a lasting impact on me",

"Because your friendhsip is one of my ggreatest treasures",

"Because you make me feel like I'm the luckiest person to have you as my best friend",

"Because you are the reason why I believe in the beauty of genuine friendship",

"Because you never fail to make me feel valued",

"Because your frinedship is worth more than words can describe",

"Because you are always uniquely yourself",

"Because you make life more colorful with your presence",

"Because I sometime open chat even when there's no new message", 

"Because soem screenshots are more precious only beacuse they're related to you",

"Because you've accidently become one of my fav topic",

"Because I can recongnize your typing style instantly",

"Because you've made random dates momorable",

"Because I remeber conversations that you probably forgot",

"Because your messages are never just messages, they are like little gifts that brighten my day",

"Because our chats can be completely random and still entertaining",

"Because you make waiting for a reply worth it",

"Because I can guess your reaction to certain thngs",

"Because your name appears in my thoughts more often than you'd expect",

"Because you make want to share good news immediately with you",

"Because you've turned into a person I can't imagine my life without",

"Because you make me feel like I'm the most important person in your life even when you are busy with other things",

"Because your smile deserves its own fan club",

"Because I love hearing about your day",

"Because you make me feel lucky",

"Because you make be believe good people still exists",

"Because you make me at things that aren't even funny",

"Because every vision of you is worth loving",

"Because some songs belong to you in my head",

"Because you've made me stare at my phone and smile for no reason",

"Because I find myself wanting to tell you tiny things that nobody else would care about",

"Because you've made random objects remind me of you",  

"Because you've changed the meaning of certain words for me",

"Because you've made my camera roll more meaningful",

"Because you've made me laugh while being completely serious",

"Because you've made ordinary notifications feel important",

"Because you've made me care about things I never cared about before ",

"Because you've made me realize how one person can matter more than thousands",

"Because some of my happiness starts with your name",

"Because you've become part of my best stories",

"Because you've made memories out of absolutely nothing",

"Because you've made my life feel a little more intersting",

"Becaause if my memories had highlight reels, you'd keep showing up",

"Because you've occupied a suspiciously large amount of storage space in my heart",

"Because you've made me become a collector of memories",

"Because you've made me realize that the best things in life can be unexpected",

"Because you've made me realize that some people can feel like home even when they are far away",

"Because you've appreared in my thoughts during the most ransom moments",

"Because you've made me laugh while I was trying not to laugh",

"Because you've made me check my phone more than I'd like to admit",

"Because you've become part of my favorite routines",

"Because you've given meaning to appreciate timing",

"Because you've made my playlist more personal",

"Because you've made me realize how quickly someone can become important in your life",

"Because you've become part of my favorite 'remember when' stories",

"Because you've made time feel like it's flying when I'm talking to you",

"Because you've made me appreciate the little things in conversations",

"Because you've made me undstand nostalgia while still creating it",

"Because you've made me realize that some people can make you feel like you belong even when they are not physically there",

"Because you've made ordinary memoents extraordinary just by being part of them",   

"Because you've made me stop and appreciate the moment more often",

"Because you've made memories that still make me smile",

"Because you've made my days feel fuller",

"Because you've made me look at things differently",

"Because you've made the smallest interactions meaningful",

"Because you've become a favorite part of my day",

"Because you've given me more reasons to smile you know",

"Because my brain trets every intersting joke as something to tell you later",

"Because you've made me notice how nice it feels to be understood",

"Because you've made me value the present one",

"Because you've become part of my best accidental memories",    

"Because you've become reason behind random smiles",

"Because you've mmade familiarity feel like a special bond",

"Because you've made me realize that happiness can be quite",

"Because you've made me apprreciate the beauty of simple things",

"Because you've made me look forward to ordinary days",

"Because you've made me laugh at things days later",

"Because you've become attched to so many happy memories",

"Because you've made me notice details that remind me of you",

"Because you've made me appreciate the people who stay",

"Because you've made me believe some connections are special",

"Because you've become part of my favorite stories",

"Because you've made me realize how much joy small moments can hold",

"Because you've made me feel like I'm not alone in this world even when I am physically alone",

"Because you've made random moments feel significant",

"Because you've made me appreciate paitence more",

"Because you've become part of memories that still make me laugh",

"Because you've ordinary days easier",

"Because you've made me realize how much one person can brighten a day",

"Because you've made conversations feel sffortless",

"Because you've become one of my favorite surpries",

"Because you've made me appreciate little intercations",

"Because you've made my world feel bigger",

"Because you've become part of my countless reasons to smile",

"Because you've made me stop taking moments for granted",

"Because you've made everyday life feel a little more magical",

"Because you've become a favorite chapter in my story",

"Because you've made me appreciate genuine people",

"Because you've become a reason behind happy memories",

"Because you've simple things memorable",

"Because you've made me appreciate the little things",

"Because you've become a bright spot in ordinary days",

"Because you've made me smile at memories unexpectedly",

"Because you've made random moments worth rembering",

"Because you've become attached to some of my happiest thoughts",

"Because you've made me appreciate the jouney, not just the destination",

"BBecause you'v ebecome a favorite thought to revisit",

"Because you've given me memories I'll never get tired of telling",

"Because you've made life more meaningful",

"Because somehow, even after writing all these reasons, I still haven't run oot of reasons",

"Because my phone battery has suffered a lot because of you",

"Because you've probably caused an unhealthy amount of smiling",

"Because you've occupied rent free space in my thoughts",

"Because you've turned screenshots into treasures", 

"Because you've made me reread the messages like they are part of syllabus",

"Because you've made me forget what I was originally doing",

"Because you've caused several unnecessary trips to check my phone",

"Because you've become a recurring character in my daydreams",

"Because you've made me suddenly remember things and smile",

"Because you've made me feel like I'm the luckiest person to have you as my best friend",

"Because if my brain had a favorite folder, you'd be in it",

"Because you've turned ordinary notifications into mini-events",

"Because you've accidently become part of my peronality",

"Because you've made me appreciate coincedence as a concept",

"Because you've become one of the best plot twist in my life story",

"Because you've random dates memorable",

"Because you've somehow become associaated with happiness",

"Because my gallery has more photos of you more than mine",

"Because writing 1000 reasons is difficult, yet somehow you're making it possible",

"Because you've single-handedly increased my screen time",

"Because talking to you is more distracting than social media",

"Because you've made me forget what I opened my phone for",

"Because you soemhow turn 5 minutes conversation into 2 hours",

"Because my battery percentage fears your existence",

"Because you've made me laugh ay my phone like a weirdo",

"Because you've probably seen every version of me",

"Because you've caused several 'one more message and I'll sleep' moments",

"Because you're suspiciously good at occupying my thoughts",

"Because I balme you for 37% of my procrastination",

"Because you've turned me into a professional notification checker",

"Because you've made me smile at a screen more than is socially acceptable",

"Because you're proof that distractions can be worth it",

"Because you've make me 'I'll reply later' impossible",

"Because you've probably cost me a few brain cells from laughing",

"Because you've made me reread conversations instead of doing what I was supposed to do",

"Because you've become my favorite reason to ignore everything else",

"Because you somehow make nonsense entertaining",

"Because you've turned random moments intoo comedy shows",

"Because you can be adorable without even trying",

"Because your logic sometimes deserves its own scientific study",

"Because talking to you is like opening a mystery box",

"Because you have the talent of making serious conversations unserious",

"Because you're the proof that chaos can be lovable",

"Because you've made me laugh when I was trying to stay serious",

"Because your timing is either perfect or hilariously terribel",

"Because I somehow win arguments that you should have won",

"Because you're confidently wrogn in a very entertaining way",

"Because life would be suspiciously quite wihtout you",

"Because you've made me stare at my phone waiting for absolutely no reason",,

"Because we've created inside jokes that make no sense to anyone else",

"Because you make normal converaaations take unexpected detours",

"Because we have the magical ability to change topic every 12 seconds",

"Because you've made me laugh so hard I forgot what we were talking about",

"Because our randomness deserves an award",

"Because you somehow make confusion fun",

"Because you can turn the smallest thing into a whole discussion",

"Because you energy is impossible to predict",

"Because every conversation with you has at least one plot twist",

"Because you're one of thoes people who can make me laugh and sigh at the same time",

"Because you have a gift apprearing right when I'm bored",

"Because you are the reason 'just one more minute' becomes an hour",

"Because you somehow make nonsense sound important",

"Because you''ve made me laugh at things that shouldn't be funny",

"Because you're unintentionallly hilarious",

"Because you've mastered the art of being a menace and a sweetheart simulltaneously",

"Because if overthinking were an Olympic sport, we'd have stories about it",

"Because you've probably stolen more of my attention than my homework ever did",

"Because you've turned simple conversations into full-length adventures",

"Because you somehow create drama without actually creating drama",

"Because your messages arrive and suddenly my plans change",

"Because honestly, life would be way less entertaining without your brand of chaos",

"Because every day feels a little happier knowing you're in it",

"Because you make ordinary moments worth remembering",

"Because your happiness makes me happy too",

"Because you make even the shortest conversations feel special",

"Because I never get tired of hearing from you",

"Because somehow you make everything feel lighter",

"Because you make me smile before I even realize it",

"Because you've become one of my favorite parts of every day",

"Because you make good days better and bad days easier",

"Because you have a way of making people feel important",

"Because your excitement is contagious",

"Because your laugh deserves to be protected at all costs",

"Because you make memories without even trying",

"Because you make me appreciate the present moment",

"Because you make the world seem a little kinder",

"Because talking to you never feels like enough",

"Because you make random moments precious",

"Because you make me want to save memories",

"Because your existence is a pretty nice thing",

"Because you've turned countless ordinary days into good memories",

"Because your smile could probably improve anyone's mood",

"Because you make life feel a little more colorful",

"Because you somehow make time fly",

"Because you've made me laugh on days I didn't want to",

"Because you make me feel lucky",

"Because your voice is one of my favorite sounds",

"Because you've become a comfort thought",

"Because you make me smile at random memories",

"Because you're one of the nicest surprises life has given me",

"Because you make every conversation a little brighter",

"Because you've made certain songs feel special",

"Because you make me excited to share things with you",

"Because your presence has a calming effect",

"Because you're one of my favorite people to think about",

"Because every reason on this list somehow leads back to you",

"Because my first instinct when something funny happens is to tell you",

"Because some of my favorite screenshots exist because of you",

"Because you've accidentally become part of my daily happiness",

"Because seeing your name pop up never gets old",

"Because you've given me countless reasons to grin at my phone",

"Because your happiness feels like something worth celebrating",

"Because your existence has improved my story",

"Because you probably have no idea how laoable you are",

"Because your cuteness should require a warning label",

"Because if comfort were a person, it would exactly look like you",

"Because every version of you is worth loving",

"Because your presence feels like a home",

"Because no matter how many times I get angry on you, my love for you is impossible to decrease",

"Because I catch myself wanting to tell you thinigs before anyone else",

"Because you make random moments feel important",

"Because your energy is recognizable even through a screen",

"Because your happiness feels like a personal victory",

"Because you leave a impression without trying",

"Because you make me notice when you're not around",

"Because you can improve a day wihtout even knowing it",

"Because your prespective is always worth hearing",

"Because you make effort feel easy",

"Because you've commited multiple counts of being adorable",

"Because if my day were a book, you'd be the page I'd reread",

"Because some of my happiness thoughts don't even need context anymore-they just involve you",

"Because you've turned your name into a comfort word",

"Because some moments feel incomplete until I tell you about them",

"Because I collect memories of you the way people collect souvenirs",

"Because if I found a four-leaf clover, I'd still think meeting you was luckier",

"Because you make me want to remember things forever",

"Because you've accidentally become the answer to a lot of 'what made you smile today?'' questions",

"Because you've made patience feel worth it",

"Because you've given meaning to tiny things that used to mean nothing",

"Because I mentally save things to tell you later but I forget them when you come online",

"Because seeing something cute instantly makes me think of you",

"Because I secretly hope good things happen to you every day",

"Because I get curious about the smallest details of your day",

"Because I notice the little things you probably think nobody notices",

"Because your existence makes the world feel friendlier",

"Because you've become one of my favorite thoughts",

"Because you've somehow earned permanent VIP access to me",

"Because life before knowing you feels strangely quieter",

"Because I like the version of me that exists around you",

"Because you've become part of my 'good memories' collection",

"Because out of billions of people, you're one of my favorite accidents",

"Because you've become a landmark in my memories",

"Because my brain treats information about you as premium content",

"Because you make nostalgia in real time",

"Because talking to you feels like opening a favorite app",

"Because if memories had favorites, mine would probably pick you",

"Because some of my favorite moments happened when absolutely nothing important was happening except talking to you",

"Because I sometimes catch myself smiling before I even open your message",

"Because you've made ordinary days harder to forget",

"Because I can remember random details about you that I never planned on remembering",

"Because you've made me appreciate moments I would've rushed through before",

"Because when something good happens, you're one of the first people I want to tell",

"Because you've turned patience into something that actually feels rewarding",

"Because you make me pay attention to the little things",

"Because I sometimes wish I could save moments with you like bookmarks",

"Because you've become one of my favorite surprises life has given me",

"Because I wonder what you're doing whenever something reminds me of you",

"Because I remember conversations with you longer than I remember most things",

"Because you've made my phone feel more exciting",

"Because seeing your name instantly grabs my attention",

"Because you've turned simple conversations into core memories",

"Because if my memories had a 'favorites' folder, you'd be all over it",

"Because you've become a chapter I'd never skip",

"Because life feels a little warmer knowing you're in it",

"Because you've made happiness feel easier to find",

"Because you've taught me that people can be comforting from miles away",

"Because you've become one of the reasons I smile at random",

"Because you've turned 'just checking my phone' into an adventure",

"Because you make ordinary things feel special without even trying",

"Because some of my favorite stories start with you",

"Because you've given me memories I'll probably still smile about years from now",

"Because you've made me believe that little moments matter",

"Because you've made random moments memorable",

"Because you've become a reason behind countless smiles",

"Because knowing you has been one of my favorite experiences",

"Because out of all the poeple I could've met, i'm grateful I met you",

"Because you make ordinary days feel like a special occasion",

"Because you make time run fast while talkign to you and slow while waiting for you",

"Because you're a rare kind of people",

"Because you've changed tiny parts of my routine without realizing it",

"Because you've become part of the stories I tell myself",

"Because some of my favorite screenshots exist because oof you",

"Because you've made random dates on the calendar important",

"Because I catch myself saving things things just to show you later",

"Because you've unknowingly influenced mmy music playlist",

"Because some words immediately remind me of you",

"Because you've made waiting feel less annoying",

"Because you've made me appreciate slow conversations",

"Because you've made me care about things simply beacuse you care about them",

"Because you've probably appreared in more of my daydreams than you'll ever know",

"Because some of my happiest moments started with a notification from you",

"Because you've made me laugh when I had already decided I wasn't going to",

"Because you've changed my standards for what a good conversation feels like",

"Because you've made me notice beauty in details",

"Because you've probably caused at least 17 unnecessary smiles this week",

"Because my brain occasionally schedules you as the main topic without permission",

"Because you've somehow become a recurring character in my thoughts",

"Because you could probably win a comeptition for occupying my mind unexpectedly",

"Because my phone works harder when you're online",

"Because you've single-handedly increased my typing speed",

"Because you've made me reread messages I definitely didn't need to reread",

"Because meeting you added colors to my life that wasn't there before",

"Because if someone asked me to define happiness, I'll mention your name",

"Because you've shown me that some people arrive and quitely become important",

"Because you've taught me that affection lives in small details",

"Because you've made life feel more shareable",

"Because some of my favorite moments started with a complettely random message from you",

"Because I sometimes smile before opening your messages because I already know they'll be good",

"Because you've given meaning to countless litttle memories",

"Because your voice is like the most comfort song for me",

"Because I can imagine your reaction to things before telling you",

"Because you've made me excited about things I normally wouldn't care about",

"Because you've made my world feel a little bigger",

"Because you've made me appreciate things I used to overlook",

"Because you've become one of the first people I think of when something good happens",

"Because you've made life feel more connected",

"Because you've given me reasons to smile that nobody else knows about",

"Because you've influenced my favorite parts of the day",

"Because you've made simple conversations memorable",

"Because you've made appreciate presencemore than perfections",

"Because you've reminded me that good people really do exist",

"Because you've made certain words feel special",

"Because you've become part of the way I see the world",

"Because you've made ordinary happiness feel extraordinary",

"Because you've made time feel different",

"Because you've given me things to look forward to",

"Because you've made ordinary conversations feel important",

"Because you've made me believe that people are worth every second",

"Because you've left traces of happiness in unexpected places",

"Because you've improved days you didn't even know I was having",

"Because you've made memories feel alive",

"Because you've made life a little more beautiful simply by being part of it",

"Because you've become the answer to the questions nobody asked",

"Because you've turned ordinary notifications into tiny events",

"Because you've made 'later' feel exciting",

"Because you've quitely become important in a hundred different ways",

"Because you've made certain sunsets remind me of conversations with you",

"Because you've become proof that some people can change a day without even trying",

"Because out of all the poeple in all the places in all the moments, somehow there is stil no one quite like you",

"Because you've occupied corners of my heart I didn't know existed",

"Because you've made memories feel softer",

"Because you've become part of the soundtrack of my year",

"Because you've made me smile at things that don't make sense to anyone else",

"Because you've made ordinary afternoons memorable",

"Because you've made me realize how much joy can fit inside small moments",

"Because you've given meaning to random details",

"Because you've become one of tha reason certain day shine brighter",

"Because you've made me grateful for things that almost didn't happen",

"Because you've become a beautiful interruption to ordinary life",

"Because yo've made me smile at memories while trying not to smile",

"Because you've become a chapter i'd read twice",

"Because you've made my brain pick you as a favorite topic",

"Because you've made happiness easier to recognize",

"Because you've made cretain memories impossible to outgrow",

"Because you've made ordinary moments worth keeping forever",

"Because your happiness makes me happy",

"Because you can turn a boring conversation into a fun one",

"Because your reactions are never boring",

"Because your energy brightens every chat",

"Because you make people feel included",

"Because you make good memories even better",

"Because your personality can't copied",

"Because you make conversations feel effortless",

"Because you probably have no idea how many times I smile because of you",

"Because you have your brand of chaos",

"Because you randomness keeps life entertaining",

"Because your brain runs on its own operating system",

"Because you somehow have main=character moments when you're not even trying",

"Because my gallery photos of you more than mine",

"Because you can make small moments feel huge",

"Because your favorite things become more intersting when you talk about them",

"Because your energy is recognizable from miles away",

"Because your reactions deserves to be framed",

"Because you've created moments nobody else could reccreate",

"Because some memories are tied to you forever",

"Because my love for you increses faster than any virus",

"Because every text from you have a special place in my heart",

"Because I could never be close with someone else like I'm with you",

"Because even afer getting angry on you I stil think about you",

"Because you are the most important for me",

"Because no matter how much other people try to be like you, they coudl never",

"Because you made me feel unloved",

"Because you are wonderfully, unapologetically youself",

"Because you've been my favorite from the starting",

"Because some days feel easier simply because you exist in my life",

"Because you've become part of memories that I never want to forget",

"Because certain moments would lose tehir meaning if yoou weren't in them",

"Because you've taught me that people can leavea positive mark wihtout even trying",

"Because youu make me appreciate little things more",

"Because some of my favorite thoughts somehow lead back to you",

"Because you've turned ordinary days into chapters worth remebring",

"Because your existence has affected my life in ways you'll probably never fully know",

"Because there are versions of me that exist thoday bacause I met you",

"Because you remind me that the best things exist today because I met poeple, not places",

"Because some memories glow a little brighter because you're in them",

"Because when I think about certain happy moments, you're somewhere in it",

"Because you've made time feel valuable smiply ny being part of it",

"Because you have a way of making life feel less lonely",

"Because you've given me reasons to smile on days when I didn't expect to",

"Because you've become part of stories I'll probably tell years from now",

"Because knowing you changed the way I see somethings",

"Because your presence has left fingerprints on my happiest memories",

"Because you've made ordinary moments feel woth holding onto",

"Because you remind me that people can be beautiful in ways that have nothing to do with apprearance",

"Because you've shown me how much impact one person can have",

"Because some parts of my life make more sense with you in them",

"Because there are moments that matter to me simply because you were there",

"Because you've become one of thoes rare people who feel familiar to my heart",

"Because your existence has created thousands of tiny reasons to be thankful",

"Because even your smallest acst of kindness stay with me for a long time",

"Because you've proven that some people arrive quitely and mean a lot",

"Because you have place in my thoughts that nobody else can occupy in quite the same way",

"Because you've taught me that meaningful connections are rare and precious",

"Because some days are memorable because they include you",

"Because you've made me realize how much one person can matter",

"Because life before knowing you and life after knowing you don't feel exactly the same",

"Because you've added something valuable to my story",

"Because your presence has become one of thoes things I quitely appreciate",

"Because you've given m moments that still make me smile long after they've passed",

"Because after writing hundreds of reasons, I still find new ones",

"Because every reason on this list began with one simple fact: you're you",

"Because no number could ever fully measure what you mean to the me",

"Because no matter how many reasons I write, they'll never fully capture what you mean to me",

"Because some of the happiest versions of myself exist because you were there",

"Because your existence is a reminder that life sometimes gives us people worth being grateful for",

"Because even in days when you don't see your own worth, there are people who are thankful for you",

"Because meeting you became one of thoes things I'll always be glad happened",

"Because this list exist only because you made it possible to write",

"Because you've left a mark on my heart that time can't erase",

"Because the hardest thing of this list wasn't finding reasons, it was deciding which ones to leave out",

"Because if I started tomorrow, I'd probably find 1000 more",

"Because after writing 1000 reasons they aren't enough to describe how much special you are to me"

];


/* =========================================
   STAR FILES
========================================= */

const stars = [
    "pinkstar.png",
    "orange-star.png",
    "lightpink-satr.png",
    "green-star.png",
    "blue-star.png",
    "purple-star.png",
    "white-star.png",
    "yellow-star.png"
];


/* =========================================
   CURRENT REASON
========================================= */


const STORAGE_KEY = "armish1000ReasonsLastIndex";

function getSavedReasonIndex() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (saved === null) return 0;

        const index = Number(saved);

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < reasons.length
        ) {
            return index;
        }
    } catch (error) {
        console.warn("Could not load saved progress:", error);
    }

    return 0;
}

let currentReason = getSavedReasonIndex();



/* =========================================
   SHOW REASON
========================================= */


function showReason() {
    reasonNumber.textContent =
        `REASON #${String(currentReason + 1).padStart(3, "0")}`;

    reasonText.textContent =
        reasons[currentReason];

    try {
        localStorage.setItem(
            STORAGE_KEY,
            String(currentReason)
        );
    } catch (error) {
        console.warn("Could not save progress:", error);
    }
}



/* =========================================
   OPEN JAR — ANIMATION ONLY ONCE
========================================= */

jarWrapper.addEventListener("click", () => {

    /* Prevent opening the jar again */
    jarWrapper.style.pointerEvents = "none";


    /* Pick random star */
    const randomStar =
        stars[Math.floor(Math.random() * stars.length)];

    flyingStar.src = randomStar;


    /* Find jar position */
    const jar = jarWrapper.getBoundingClientRect();

    const startX = jar.left + jar.width * 0.50;
    const startY = jar.top + jar.height * 0.30;


    flyingStar.style.left = `${startX}px`;
    flyingStar.style.top = `${startY}px`;


    /* Reset animation */
    flyingStar.classList.remove("fly");

    void flyingStar.offsetWidth;


    /* Start star animation */
    flyingStar.classList.add("fly");


    /* Black transition */
    setTimeout(() => {

        blackTransition.classList.add("show");

    }, 1700);


    /* Show first reason */
    setTimeout(() => {

        showReason();

        reasonScreen.classList.add("show");

    }, 2400);

});


/* =========================================
   UNFOLD ANOTHER
   DIRECTLY SHOW NEXT REASON
========================================= */

function anotherReason() {

    /* Move to next reason */

    if (currentReason < reasons.length - 1) {

        currentReason++;

    } else {

        /*
           Temporary:
           go back to reason #1 after the last test reason.
           Later we'll make #1000 have a special ending.
        */

        currentReason = 0;

    }


    /* Update the paper immediately */

    showReason();


    /* Tiny paper transition */

    const paper = document.querySelector(".paper-container");

    paper.classList.remove("change-reason");

    void paper.offsetWidth;

    paper.classList.add("change-reason");

}


/* =========================================
   GO BACK TO HOMEPAGE
========================================= */

function goBack() {

    window.location.href = "homepage.html";

}