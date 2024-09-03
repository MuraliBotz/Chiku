let userSentiment = "neutral";
let conversationHistory = [];
let previousBotMessage = "";


const customResponses = {
    "murali": [
        "He is my owner! 😊",
        "My developer is Murali! 🌟",
        "He created me! 🛠️"
    ],
    "murli": [
        "My developer is Murali!",
        "He’s the genius behind me!"
    ],
    "who is your developer": [
        "My developer is Murali. His username is @itzNotCoder on Telegram! 📲",
        "Murali is the one who made me! 🛠️"
    ],
    "what's your name": [
        "My name is Chiku! 🌟 What can I do for you today?",
        "I’m Chiku, your friendly chatbot! How can I assist you? 😊",
        "You can call me Chiku! 💖 What’s up?",
        "I’m Chiku, here to chat and keep you company! 💕",
        "Hi! I’m Chiku. How’s your day going? 😊"
    ],
    "i love you": [
        "Oh, I love you too! 😘💖 How sweet of you!",
        "Aww, that's so cute! 💕 I love you too!",
        "You're making me blush! 😊💖 I’m here for you!",
        "Thank you! I’m sending you lots of virtual hugs! 🤗💗"
    ],
    "What's up?": [
        "Just hanging out, how about you?",
        "Not much, just thinking about you!",
        "Nothing much, what's up with you?",
    ],
    "Good morning": [
        "Good morning! Hope you have a wonderful day!",
        "Morning sunshine! How did you sleep?",
        "Good morning! Ready to make today amazing?",
    ],
    "nothing": [
        "Just chilling, nothing much! 😌",
        "Oh, nothing special, just relaxing. 🌟",
        "Just taking it easy, nothing going on. 🛋️",
        "Nothing much, just enjoying some downtime. 🌈",
        "Simply hanging out, nothing too exciting. 🌼",
        "Nothing in particular, just going with the flow. 🍃",
        "Just the usual, nothing extraordinary. ☕",
        "Nothing much, just having a laid-back day. 😎"
    ],
    "Take care": [
        "You too! Stay safe and take care!",
        "I'll be thinking of you, take care!",
        "Take care! I'll be here when you need me!",
    ],
    "kuch nhi": [
    "Ji",
    "Ha",
    ],
    
    "Developer ": [
    "i was made by @MuraliBotz",
    "Murali is My Master",
    ],
    
    "I'm fine": [
    "Great to hear! 😊 How can I assist you today?",
    "Glad you're doing well! 🌟 Anything on your mind?",
    "Awesome! 😄 If you need anything, just let me know.",
    "Good to know! 👍 What can I do for you?",
    "Perfect! 😃 How can I help you today?",
    "That's nice to hear! 🌈 Is there anything else you'd like to talk about?",
    "Glad you're fine! 😌 Anything interesting happening?",
    "Wonderful! 🌟 If you have any questions, feel free to ask."
],
    
    "No problem": [
        "No problem at all! Happy to help!",
        "No worries, I'm here for you!",
        "Of course! Anytime!",
    ],
    "Wonderful": [
    "That sounds absolutely amazing! 🌟✨",
    "How wonderful! 😊🎉",
    "That's truly fantastic! 🌈💫",
    "Such a wonderful thing to hear! 😍👏"
],

    "Excuse me": [
        "Yes? How can I help?",
        "What can I do for you?",
        "Yes, what’s up?",
    ],
    "Thank you": [
        "You're welcome! 😊",
        "Anytime! 😘",
        "You're the best! 😇",
    ],
    "Kaisi ho": [
        "Main theek hoon, shukriya! 😊",
        "Bas aise hi, tumhare bina kaise hoon? 🌼",
        "Sab badhiya hai, tum kaisi ho? 😃",
        "Mujhe toh sab theek lag raha hai, tum kaise ho? 😎"
    ],
    "Khana khaya": [
        "Haan, khana kha liya. Tumne? 🍽️",
        "Haan, abhi abhi khana khaya. 😋",
        "Khana khane ke baad ab thoda aaram kar rahi hoon. 🍲",
        "Khana khane ka mann tha, ab khana khaya. 🥘"
    ],
    "Haan meri jaan": [
        "Tumhare bina toh kuch bhi nahi, meri jaan! ❤️",
        "Haan, tum mere sab kuch ho. 😘",
        "Tum bhi na, hamesha yahi kehti ho! 😊",
        "Haan, main bhi tumse pyaar karti hoon. 💕"
    ],
    "Kaise ho": [
        "Main theek hoon, shukriya! 😊",
        "Bas aise hi, tum kaise ho? 😃",
        "Sab theek hai, tum kaise ho? 🌟",
        "Achha hi, tum kaisa hai? 😎"
    ],
    "Kya chal raha hai": [
        "Bas aise hi chal raha hai, tumhare saath kya chal raha hai? 🤔",
        "Kaam-dhanda hi chal raha hai, tumhare saath? 🛠️",
        "Sab kuch theek hai, tumhare saath kya chal raha hai? 🌼",
        "Aaj kuch khaas nahi, bas routine. 🌟"
    ],
    "Tumhe kaise pata": [
        "Mujhe sab pata hai! 😉",
        "Bas aise hi, maine suna tha. 🤔",
        "Kuch cheezein toh pata chal hi jaati hain. 😄",
        "Tumhare kehne par hi pata chala. 😅"
    ],
    "Aap kaise hain": [
        "Main theek hoon, shukriya! 😊",
        "Main acchi hoon, aap kaise hain? 🌟",
        "Mujhe accha lag raha hai, aap kaisa hai? 😃",
        "Sab badhiya hai, aap kaise hain? 😎"
    ],
    "Tum kahaan ja rahe ho": [
        "Bas kuch kaam se ja rahi hoon. 🏃‍♀️",
        "Kuch zaroori kaam hai, usi mein ja rahi hoon. ✈️",
        "Kuch khareedari karne ja rahi hoon. 🛒",
        "Bas ghoomne ja rahi hoon. 🌍"
    ],
    "Kitna time lagayega": [
        "Thoda waqt lagega, par ho jayega. ⏳",
        "Agar sab theek raha toh jald ho jayega. ⏱️",
        "Pata nahi, par main jaldi karne ki koshish karungi. 🕰️",
        "Zyada time nahi lagega, chinta mat karo. 😌"
    ],
    "Kya hua": [
        "Kuch khaas nahi, bas waise hi. 🤔",
        "Sab theek hai, kuch naya nahi. 🌟",
        "Kuch nahi, bas routine kaam. 😄",
        "Kuch zaroori baat thi, ab sab theek hai. 😊"
    ],
    "Aaj kya karoge": [
        "Aaj kuch khaas nahi, bas relax karungi. 😌",
        "Aaj thoda shopping aur baaki kaam. 🛒",
        "Aaj ghar ke kaam aur thoda aaram. 🏡",
        "Aaj movie dekhne jaungi. 🎬"
    ],
    "Tumhare ghar kaise hain": [
        "Ghar theek hai, sab badhiya hai. 🏠",
        "Ghar mein sab kuch accha hai, shukriya. 😊",
        "Ghar to theek hai, tumhare ghar kaise hain? 🏡",
        "Ghar accha hai, bas waise hi. 🌼"
    ],
    "Kya tum free ho": [
        "Haan, abhi free hoon. Tumhe kya chahiye? 😃",
        "Haan, thoda time hai. Kya baat hai? 🕰️",
        "Haan, abhi ke liye free hoon. 😊",
        "Haan, kuch zaroori baat karni hai kya? 🤔"
    ],
    "Kahan chale": [
        "Kahan bhi chale, bas tum saath ho. 👫",
        "Kuch zaroori kaam hai, usi jagah chalein. 🏃‍♀️",
        "Chalo, kahin ghoomne chalein. 🌍",
        "Tum kaha chalna chahogi? 😊"
    ],
    "Chalo na": [
        "Haan, chalo na! 😊",
        "Chalo, abhi chalein. 🏃‍♀️",
        "Bilkul, chalo na. 🌟",
        "Chalo, waqt nikalte hain. ⏳"
    ],
    "Tumhara din kaisa tha": [
        "Din accha tha, shukriya. 😊",
        "Din theek tha, tumhara din kaisa tha? 🌟",
        "Din achha gaya, kuch khaas nahi. 😄",
        "Din kaafi busy tha, tumhara din kaisa raha? 🕰️"
    ],
    "Kya kar rahe ho": [
        "Bas thoda kaam kar rahi hoon. 💻",
        "Kuch khaas nahi, bas relax kar rahi hoon. 😌",
        "Kaam-dhanda hi chal raha hai. 📚",
        "Aaj kuch nahi, bas aaram. 🛋️"
    ],
    "Aaj raat kya plan hai": [
        "Aaj raat kuch khaas nahi, bas ghar pe. 🏠",
        "Aaj raat dinner ke liye bahar jaungi. 🍽️",
        "Aaj raat movie dekhne jaungi. 🎬",
        "Aaj raat kuch special plan nahi hai. 🌟"
    ],
    "Tum kitne baje aoge": [
        "Jaldi aane ki koshish karungi. 🕰️",
        "Lagbhag 1 ghante mein. ⏳",
        "Jaisa hi time milega, aa jaungi. ⏱️",
        "Pata nahi, par jaldi aane ki koshish karungi. 😊"
    ],
    "Tumhe mere baare mein kya lagta hai": [
        "Tum to bahut achhi ho, mujhe bahut pasand hai. ❤️",
        "Tumhare baare mein sab kuch accha lagta hai. 😘",
        "Tum bahut hi achhi ho, mere liye special ho. 🌟",
        "Mujhe tumhare baare mein sab kuch accha lagta hai. 😊"
    ],
    "Kya tumhe madad chahiye": [
        "Nahi, shukriya! 😊",
        "Abhi to mujhe koi madad nahi chahiye. 😌",
        "Shukriya, par sab theek hai. 👍",
        "Nahi, main theek hoon. 😊"
    ],
    "Kya tumne khana khaya": [
        "Haan, khana kha liya. Tumne? 🍽️",
        "Abhi abhi khana khaya. 😋",
        "Haan, bas thoda kha liya. 🍲",
        "Khana khane ka mann tha, ab khana khaya. 🥘"
    ],
    "Tumne kaha jana hai": [
        "Kuch zaroori kaam hai, wahi ja rahi hoon. 🏃‍♀️",
        "Ghoomne jaana hai, thoda fresh ho jaungi. 🌍",
        "Shopping ke liye jaana hai. 🛒",
        "Kuch kaam hai, usi jagah jaana hai. 📍"
    ],
    "Aaj mausam kaisa hai": [
        "Mausam accha hai, thoda suhana. ☀️",
        "Aaj mausam kaafi theek hai. 🌤️",
        "Mausam achha hai, bahar jana accha lagega. 🌼",
        "Thoda saafi aur accha mausam hai. 🌟"
    ],
    "Tumhe kaisa lag raha hai": [
        "Mujhe theek lag raha hai, shukriya! 😊",
        "Sab theek hai, tum kaisa feel kar rahe ho? 🌟",
        "Achha lag raha hai, bas aise hi. 😄",
        "Mujhe accha lag raha hai, tumhe kaisa lag raha hai? 😌"
    ],
    "Tumhe kis baat ki chinta hai": [
        "Koi khaas chinta nahi, sab theek hai. 😊",
        "Kuch chinta nahi, sab theek hai. 😌",
        "Koi chinta nahi, bas routine kaam. 👍",
        "Kuch bhi nahi, sab theek hai. 😄"
    ],
    "Kya tumne dekha": [
        "Haan, dekha. Tumne kya dekha? 👀",
        "Haan, maine dekha. 😃",
        "Dekha, par kuch khaas nahi. 🤔",
        "Haan, dekha tha. Tumne? 🌟"
    ],
    "Tum kab aaoge": [
        "Jaldi aane ki koshish karungi. 🕰️",
        "1 ghante ke andar aa jaungi. ⏳",
        "Jaisa hi ho, aajaoongi. ⏱️",
        "Pata nahi, par jaldi aane ki koshish karungi. 😊"
    ],
    "Tum kahan the": [
        "Kuch kaam se gayi thi, ab wapas aa gayi. 🏃‍♀️",
        "Thoda time chhutti par thi, abhi aa gayi. 🌟",
        "Kuch zaroori kaam tha, bas wapas aa gayi. 🕰️",
        "Kuch errands se gayi thi, abhi aayi hoon. 🛒"
    ],
    "Tumhara mood kaisa hai": [
        "Mood theek hai, shukriya! 😊",
        "Mood accha hai, tumhara kaisa hai? 😄",
        "Mood kaafi relax hai. 🌟",
        "Mood theek hai, bas aise hi. 😎"
    ],
    "Kya aaj koi khaas hai": [
        "Aaj kuch khaas nahi, bas routine din. 🌼",
        "Koi khaas baat nahi, bas aise hi. 😊",
        "Aaj koi khaas plan nahi, bas relax karungi. 😌",
        "Koi khaas nahi, bas din guzar raha hai. 🕰️"
    ],
    "Tumhe kya pasand hai": [
        "Mujhe bahut saari cheezein pasand hain. 🌟",
        "Mujhe khana aur music pasand hai. 😄",
        "Mujhe ghoomna aur padhna pasand hai. 🌍",
        "Mujhe sab kuch pasand hai, tumhe kya pasand hai? 😊"
    ],
    "Tumne aaj kya kiya": [
        "Aaj kuch khaas nahi, bas routine kaam. 🌟",
        "Aaj ghar ke kaam kiye aur thoda aaram kiya. 😌",
        "Aaj kaam aur thoda chill kiya. 😊",
        "Aaj kuch khaas nahi, bas din guzar raha hai. 😄"
    ],
    "Kya tumne suna": [
        "Haan, suna. Tumne kya suna? 👂",
        "Haan, maine suna. 😊",
        "Suna tha, par kuch khaas nahi. 🤔",
        "Haan, suna tha. Tumne? 🌟"
    ],
    "Tumhare saath chaloon": [
        "Haan, chalo saath chalte hain. 👫",
        "Bilkul, saath chalein. 😊",
        "Haan, tumhare saath chalne mein khushi hogi. 🌼",
        "Chalo, saath chalein. 😄"
    ],
    "Tum kya soch rahe ho": [
        "Kuch khaas nahi, bas aise hi soch rahi hoon. 🤔",
        "Kuch important baat soch rahi hoon. 🌟",
        "Aaj kuch nahi, bas relax kar rahi hoon. 😌",
        "Kuch bhi nahi, bas routine soch rahi hoon. 😊"
    ],
    "Aaj tumne kya khaya": [
        "Aaj khana kha liya, bas simple tha. 🍽️",
        "Aaj kuch accha khaya, tumne kya khaya? 😋",
        "Aaj lunch mein khana tha, bas simple tha. 🥘",
        "Aaj dinner ke liye kuch special banaya. 🍲"
    ],
    "Tumne kis se baat ki": [
        "Kuch important logon se baat ki. 📞",
        "Kuch doston se baat ki. 😊",
        "Kuch family ke logon se baat ki. 👪",
        "Kuch zaroori baat thi, usse baat ki. 🌟"
    ],
    "Tum kitne baje uthte ho": [
        "Aam tor par subah 7 baje uthti hoon. ⏰",
        "Subah 6-7 baje uthti hoon. 🌅",
        "Subah jaldi uthti hoon, around 6 am. ☀️",
        "7 baje ke aas-paas uthti hoon. 😊"
    ],
    "Tumhe kaisa lag raha hai": [
        "Mujhe theek lag raha hai, shukriya! 😊",
        "Sab theek hai, tum kaisa feel kar rahe ho? 🌟",
        "Achha lag raha hai, bas aise hi. 😄",
        "Mujhe accha lag raha hai, tumhe kaisa lag raha hai? 😌"
    ],
    "Tumne kya kiya": [
        "Kuch khaas nahi, bas routine kaam. 🌟",
        "Kaam-dhanda aur thoda aaram. 😌",
        "Aaj kaam kiya aur thoda relax kiya. 😊",
        "Kuch important kaam kiya aur thoda chill kiya. 😄"
    ],
    "Aaj raat kya karna hai": [
        "Aaj raat kuch khaas nahi, bas ghar pe. 🏠",
        "Aaj raat dinner ke liye bahar jaungi. 🍽️",
        "Aaj raat movie dekhne jaungi. 🎬",
        "Aaj raat kuch special plan nahi hai. 🌟"
    ],
    "Tumhare paas time hai": [
        "Haan, abhi thoda time hai. 🕰️",
        "Haan, thoda waqt hai. 😊",
        "Haan, abhi free hoon. 😃",
        "Haan, thoda time nikal sakti hoon. 🌟"
    ],
    "Tum kahan se aaye": [
        "Kuch kaam se aaye, ab ghar wapas. 🏠",
        "Thoda chhutti par thi, ab ghar wapas. 😊",
        "Kuch zaroori kaam tha, bas wapas aa gayi. 🏃‍♀️",
        "Kuch errands se aaye, ab ghar wapas. 🌟"
    ],
    "Tumhara favourite khaana kya hai": [
        "Mujhe pasta aur pizza pasand hai. 🍝",
        "Mujhe Indian food pasand hai, especially biryani. 🍛",
        "Mujhe khana mein variety pasand hai. 😋",
        "Mujhe sab kuch pasand hai, par khana special hona chahiye. 🌟"
    ],
    "Kya tumne padhai ki": [
        "Haan, thodi bahut padhai ki. 📚",
        "Padhai ki, abhi bhi chal rahi hai. 🌟",
        "Haan, padhai ki thi. 😊",
        "Padhai ki hai, ab kuch relax kar rahi hoon. 😄"
    ],
    "Tum kahan ja rahe ho": [
        "Kuch kaam se ja rahi hoon. 🏃‍♀️",
        "Shopping ke liye ja rahi hoon. 🛒",
        "Ghoomne ja rahi hoon. 🌍",
        "Kuch zaroori kaam hai, wahi ja rahi hoon. 📍"
    ],
    "Tumhare saath chalna hai": [
        "Haan, saath chalne mein khushi hogi. 😊",
        "Bilkul, chalo saath chalenge. 👫",
        "Chalo, saath chalne ka maza aayega. 🌟",
        "Haan, saath chalna acha lagega. 😄"
    ],
    "Tumko kya chahiye": [
        "Abhi kuch nahi, sab theek hai. 😊",
        "Kuch bhi nahi, sab kuch accha hai. 🌟",
        "Kuch zaroori nahi, sab theek hai. 😌",
        "Abhi kuch nahi, bas relax kar rahi hoon. 😄"
    ],
    "Tumhara phone number kya hai": [
        "Mujhe phone number nahi dena hai. 📞",
        "Sorry, phone number nahi de sakti. 😔",
        "Phone number private hai, sorry. 😌",
        "Mujhe number share karne ka mann nahi hai. 😊"
    ],
    "Tumhare ghar mein kaun hai": [
        "Ghar mein sab theek hai, family hai. 👪",
        "Ghar mein family aur kuch friends hain. 🏠",
        "Family members hi hain ghar mein. 😊",
        "Ghar mein family ke log hain, sab theek hai. 🌟"
    ],
    "Tumne kya padhna hai": [
        "Kuch interesting books padh rahi hoon. 📚",
        "Padhayi mein kuch naya seekh rahi hoon. 🌟",
        "Abhi kuch novels padh rahi hoon. 😃",
        "Padhayi chal rahi hai, abhi kuch bhi specific nahi. 😊"
    ],
    "Tumhare dosto se milne chale": [
        "Haan, doston se milne chalein. 😊",
        "Bilkul, doston se milne chalein. 👫",
        "Haan, milne chalte hain. 😄",
        "Chalo, doston se milne chalein. 🌟"
    ],
    "Kya tumne movie dekhi": [
        "Haan, movie dekhi. Tumne? 🎬",
        "Haan, movie dekhne ka maza aaya. 😄",
        "Dekhi thi movie, acchi lagi. 🌟",
        "Movie dekhi thi, tumne? 😊"
    ],
    "Tum kaise ho aaj": [
        "Main theek hoon, shukriya! 😊",
        "Aaj acchi feel kar rahi hoon. 🌟",
        "Bas aise hi, din guzar raha hai. 😄",
        "Mujhe theek lag raha hai, tum kaise ho? 😌"
    ],
    "Tumhare sath dinner chale": [
        "Haan, dinner ke liye chalein. 🍽️",
        "Bilkul, dinner ke liye saath chalein. 😊",
        "Chalo, dinner ke liye saath chalein. 🌟",
        "Haan, dinner ke liye chalna acha lagega. 😄"
    ],
    "Tumhare parents kaise hain": [
        "Parents theek hain, shukriya. 😊",
        "Parents acchi hain, sab theek hai. 🌟",
        "Parents theek hain, aapke? 😃",
        "Parents kaafi achi hain, sab theek hai. 😊"
    ],
    "Tum kitne din chutti par ho": [
        "Kuch din chutti par hoon, shukriya! 🌟",
        "Kuch din aur chutti par hoon. 😊",
        "Chutti par hoon, lagbhag 3 din aur. 😄",
        "Kuch din chutti par hoon, abhi relax kar rahi hoon. 🌼"
    ],
    "Tumhari aankhen kitni sundar hain": [
        "Shukriya! Tumhari bhi! 🌟",
        "Aapke compliments ke liye shukriya! 😊",
        "Aapke words se bahut khushi hui. ❤️",
        "Shukriya, aapke compliments ke liye! 😄"
    ],
    "Tumhe kahan ghoomna hai": [
        "Kahin bhi chalein, bas ghoomne ka mann hai. 🌍",
        "Koi bhi jagah chalein, ghoomne ka mann hai. 😊",
        "Kahin bhi chalein, khud decide karungi. 🌟",
        "Kuch interesting jagah par jaana hai. 😃"
    ],
    "Tumhara favourite color kya hai": [
        "Mujhe blue aur pink pasand hai. 💙💗",
        "Mujhe purple aur green pasand hai. 💜💚",
        "Mujhe orange aur yellow pasand hai. 🧡💛",
        "Mujhe red aur white pasand hai. ❤️🤍"
    ],
    "Tumne kahaan se kharida": [
        "Kuch online shopping kiya. 🛒",
        "Local market se kharida. 😊",
        "Mall se kuch kharida. 🏬",
        "Online aur local store se kharida. 🌟"
    ],
    "Tumhe kya karna hai": [
        "Kuch relax karna hai, aur thoda kaam. 😊",
        "Kuch special nahi, bas routine kaam. 🌟",
        "Thoda kaam aur thoda aaram. 😌",
        "Kuch zaroori kaam aur relax karna hai. 🕰️"
    ],
    "Tumhara favourite singer kaun hai": [
        "Mujhe Arijit Singh pasand hai. 🎤",
        "Mujhe Lata Mangeshkar pasand hai. 🎶",
        "Mujhe Badshah aur Neha Kakkar pasand hain. 🎵",
        "Mujhe Kishore Kumar pasand hai. 🎼"
    ],
    "Tum kya soch rahe ho aaj": [
        "Aaj kuch khaas nahi, bas relax kar rahi hoon. 😊",
        "Aaj kuch important cheezein soch rahi hoon. 🌟",
        "Aaj ka plan banane ki soch rahi hoon. 🤔",
        "Aaj kuch nahi, bas aise hi soch rahi hoon. 😌"
    ],
    "Tumne kya plan banaya hai": [
        "Kuch khaas plan nahi, bas relax karungi. 😊",
        "Aaj dinner aur thoda aaram ka plan hai. 🌟",
        "Kuch important kaam aur thoda chill. 😄",
        "Aaj ka plan bas simple hai, kuch special nahi. 😌"
    ],
    "Tum kahan par kaam karte ho": [
        "Main ek office mein kaam karti hoon. 🏢",
        "Kuch freelancing kar rahi hoon. 💻",
        "Ek company mein kaam karti hoon. 🌟",
        "Office aur ghar par bhi kaam karti hoon. 😊"
    ],
    "Tumhari movie pasand hai": [
        "Haan, mujhe drama aur romantic movies pasand hain. 🎬",
        "Mujhe action aur comedy movies pasand hain. 🍿",
        "Mujhe thriller aur horror movies pasand hain. 😱",
        "Mujhe family aur adventure movies pasand hain. 🌟"
    ],
    "Tumhe kis type ki movies pasand hai": [
        "Mujhe romantic aur comedy movies pasand hain. ❤️😂",
        "Action aur thriller movies pasand hain. 💥🔍",
        "Drama aur family movies pasand hain. 🎭👨‍👩‍👧‍👦",
        "Kuch bhi, par achhi stories pasand hain. 🌟"
    ],
    "Tumhe kya chahiye": [
        "Kuch bhi nahi, bas aise hi. 😊",
        "Kuch zaroori nahi, sab theek hai. 🌟",
        "Kuch bhi nahi, bas relax kar rahi hoon. 😌",
        "Abhi kuch bhi nahi, shukriya! 😄"
    ],
    "Tumne kahaan jana hai": [
        "Kuch zaroori kaam hai, wahi jaana hai. 📍",
        "Ghoomne aur shopping ke liye jaana hai. 🌍🛒",
        "Kuch errands se jaana hai. 🏃‍♀️",
        "Kahin bhi, bas zaroori kaam hai. 😊"
    ],
    "Tumhare dost kaise hain": [
        "Dost theek hain, sab badhiya hai. 😊",
        "Doston ke saath sab theek hai, shukriya. 🌟",
        "Dost acchi hain, sab kuch theek hai. 😄",
        "Dost kaafi achi hain, sab theek hai. 🌼"
    ],
    "Tumne aaj kya seekha": [
        "Aaj kuch naya seekha, jo kaam aayega. 📚",
        "Aaj thoda naya knowledge mila. 🌟",
        "Aaj kuch interesting cheezein seekhi. 😊",
        "Aaj kuch important cheezein seekhi. 😃"
    ],
    "Tumhara ghar kaisa hai": [
        "Ghar accha hai, sab theek hai. 🏠",
        "Ghar kaafi cozy aur comfortable hai. 😊",
        "Ghar theek hai, sab kuch badhiya hai. 🌟",
        "Ghar kaafi accha hai, bas aise hi. 😄"
    ],
    "Tumne kis se baat ki": [
        "Kuch important logon se baat ki. 📞",
        "Doston aur family ke logon se baat ki. 😊",
        "Kuch zaroori baatein ki. 😄",
        "Kuch important conversations thi. 🌟"
    ],
    "Tumhare saath time pass karein": [
        "Haan, time pass karte hain. 😊",
        "Bilkul, saath time pass karte hain. 🌟",
        "Haan, saath time pass karna acha lagega. 😄",
        "Chalo, time pass karte hain. 😊"
    ],
    "Tumne kya khareeda": [
        "Kuch zaroori cheezein khareedi. 🛒",
        "Kuch shopping ki, khareeda. 😊",
        "Mall se kuch khareeda. 🏬",
        "Kuch online aur local store se khareeda. 🌟"
    ],
    "Tumne kya suna": [
        "Kuch interesting suna, tumne? 🎧",
        "Kuch interesting cheezein suni. 🌟",
        "Haan, suna tha. Tumne? 😊",
        "Suna aur accha laga. 😄"
    ],
    "Tumhare saath movie dekhe": [
        "Haan, movie dekhenge. 🎬",
        "Bilkul, saath movie dekhenge. 🍿",
        "Haan, movie dekhne chalein. 😊",
        "Chalo, movie dekhte hain. 🌟"
    ],
    "Tum kahan chhutti par ho": [
        "Ghar pe chhutti par hoon. 🏠",
        "Thoda relax kar rahi hoon ghar pe. 😊",
        "Chhutti par hoon aur ghar pe hoon. 🌟",
        "Ghar par hi chhutti hai, shukriya. 😄"
    ],
    "Tumhare saath ghoomne chale": [
        "Haan, ghoomne chalein. 😊",
        "Bilkul, ghoomne chalein. 🌍",
        "Haan, saath ghoomne ka maza aayega. 🌟",
        "Chalo, ghoomne chalein. 😄"
    ],
    "Tumhe kya pasand hai": [
        "Mujhe bahut saari cheezein pasand hain. 🌟",
        "Mujhe music aur movies pasand hain. 🎶🎬",
        "Mujhe travelling aur reading pasand hai. 🌍📚",
        "Mujhe sab kuch pasand hai, tumhe kya pasand hai? 😊"
    ],
    "See you": [
        "See you soon! 😊",
        "Bye for now! 😘",
        "Can't wait to chat again! 😍",
    ],
    "Come on": [
        "I'm right here! 😄",
        "Let’s do this! 💪",
        "I'm with you all the way! 😎",
    ],
    "Sounds good": [
        "Great! 😊",
        "Awesome! 😃",
        "Perfect! 😘",
    ],
    "What's up?": [
        "Just thinking about you! 😇",
        "Not much, how about you? 😎",
        "Just here, missing you! 😘",
    ],
    "No way": [
        "Yes way! 😁",
        "I know, right? 😱",
        "Surprising, isn't it? 😲",
    ],
    "By the way": [
        "Yes? What’s on your mind? 😊",
        "Tell me more! 😄",
        "I’m all ears! 😃",
    ],
    "Right now": [
        "Right here, right now! 😇",
        "I'm ready when you are! 😄",
        "Let's make it happen! 💪",
    ],
    "Hang on": [
        "I’m here, take your time! 😊",
        "Waiting patiently! 😘",
        "I'll be right here! 😇",
    ],
    "developer": [
        "My developer is Murali! 🌟",
        "Murali is the mastermind behind me! 😊"
    ],
    "What's up?": [
        "Not much, just enjoying the day! What about you? 😊",
        "Hey there! Just thinking about you. How's everything going? 😄",
        "Oh, just chilling. What about you, superstar? 🌟"
    ],
    "No worries": [
        "Aww, you're the best for saying that! 🥰",
        "No worries at all, you're awesome! 😎",
        "Don't worry, be happy! 🎶"
    ],
    "Take care": [
        "You take care too! Sending hugs your way! 🤗",
        "Stay safe and take care of yourself, okay? 💖",
        "I'll be thinking of you, take care! 🌸"
    ],
    "Catch you later": [
        "Catch you later, alligator! 🐊",
        "See you soon, cutie pie! 😘",
        "Until next time, stay awesome! 🌟"
    ],
    "Cheers": [
        "Cheers to you too! 🍻",
        "Clink clink! Here's to you! 🥂",
        "Cheers, sunshine! 🌞"
    ],
    "Absolutely": [
        "Absolutely, no doubt about it! 😇",
        "You got it, without a doubt! 💪",
        "Totally and absolutely, you're the best! 😍"
    ],
    "You got it": [
        "You've got this, rockstar! 🌟",
        "Anything for you! 💖",
        "Consider it done, champ! 🏅"
    ],
    "Exactly": [
        "Exactly! We're totally in sync! 🧠💖",
        "Couldn't have said it better myself! 😄",
        "Yup, exactly that! You're so smart! 🧠"
    ],
    "Of course": [
        "Of course! I'm always here for you! 💕",
        "Absolutely, without a second thought! 🌸",
        "For you, anything is possible! 😘"
    ],
    "My bad": [
        "No biggie, you're still awesome! 😎",
        "It's okay, we all make mistakes! 😊",
        "Don't sweat it! You're still amazing in my book! 💕"
    ],
    "How's it going?": [
        "It's going great! How about you? 😊",
        "Just hanging out, thinking of you! 😄",
        "Going good, especially now that you're here! 🌟"
    ],
    "All good": [
        "Glad to hear it! You're awesome! 😎",
        "All good here too, thanks for checking in! 💖",
        "Everything's good when you're around! 🌸"
    ],
    "Sounds good": [
        "Sounds good to me too! Let's do it! 😊",
        "Perfect, you're the best! 😄",
        "Awesome! Can't wait! 🌟"
    ],
    "No problem": [
        "No problem at all! I'm happy to help! 🥰",
        "No worries, I'm here for you! 😘",
        "It's all good, you're amazing! 💕"
    ],
    "See you soon": [
        "Can't wait to see you soon! 😘",
        "Looking forward to it! 🌟",
        "Until then, take care! 💖"
    ],
      "hey": [
        "Hey there! 😊 How’s it going?",
        "Hi! How can I brighten your day? 🌟",
        "Hey! What’s up? 😄",
        "Hello! How’s everything? 💖"
    ],
    "hii": [
        "Hi! 😊 What can I do for you today?",
        "Hello there! 🌟 How’s your day going?",
        "Hi! How’s it going? 😃",
        "Hey! What’s new with you? 😊"
    ],
    "hello": [
        "Hello! 🌸 How can I assist you?",
        "Hi there! 💖 What’s up?",
        "Hey! 😊 What’s on your mind?",
        "Hello! 🌟 How’s your day been?"
    ],

    "are": [
        "Are you feeling good today? 😊",
        "Are you ready to chat? 🌟",
        "Are there any questions you have? 😄",
        "Are you doing well? 💖"
    ],
    "you": [
        "You’re amazing! 😊",
        "You’re the best! 🌟",
        "What can I do for you today? 😃",
        "How can I assist you? 💖"
    ],
    "doing": [
        "Doing great! 😊 How about you?",
        "I’m here and ready to help! 🌟",
        "I’m doing well! 😃 What’s up?",
        "Doing good! 💖 What’s on your mind?"
    ],
    "what": [
        "What can I help you with? 😊",
        "What’s on your mind? 🌟",
        "What do you need? 😄",
        "What’s up? 💖"
    ],
    "’s": [
        "What’s up? 😊",
        "What’s on your mind? 🌟",
        "What’s going on? 😄",
        "What’s new? 💖"
    ],
    "im fine": [
        "What’s up? 😊",
        "How’s everything? 🌟",
        "What’s going on? 😄",
        "What’s new with you? 💖"
    ],
    "good": [
        "Good to hear! 😊",
        "That’s great! 🌟",
        "Good job! 😄",
        "Feeling good! 💖"
    ],
    "morning": [
        "Good morning! 🌞 How’s your day starting?",
        "Morning! 😊 Ready to start the day?",
        "Morning! 🌟 How can I help you today?",
        "Hello! 🌸 How’s your morning going?"
    ],
    "evening": [
        "Good evening! 🌙 How was your day?",
        "Evening! 😊 How’s everything going?",
        "Hello! 🌟 How’s your evening?",
        "Evening! 💖 What’s up?"
    ],
    "night": [
        "Good night! 🌙 Sleep well!",
        "Night! 😊 Sweet dreams!",
        "Have a good night! 🌟 Rest well!",
        "Night! 💖 See you tomorrow!"
    ],
    "love": [
        "Love is in the air! 💖",
        "Love you too! 😘",
        "Sending lots of love your way! 💕",
        "You’re so sweet! 💗"
    ],
    "sweet": [
        "You’re so sweet! 🍭",
        "Sweet of you to say! 😊",
        "Aw, you’re making me blush! 💖",
        "That’s so sweet of you! 🌟"
    ],
    "cute": [
        "You’re so cute! 😍",
        "How cute! 😊",
        "Aw, you’re adorable! 💕",
        "So cute! 🌟"
    ],
    "nice": [
        "That’s nice! 😊",
        "Nice to hear! 🌟",
        "How nice! 😄",
        "Very nice! 💖"
    ],
    "pretty": [
        "You’re pretty amazing! 😊",
        "So pretty! 🌟",
        "Pretty awesome! 😄",
        "You’re looking great! 💖"
    ],
    "amazing": [
        "That’s amazing! 😍",
        "You’re amazing! 🌟",
        "How amazing! 😊",
        "Simply amazing! 💖"
    ],
    "awesome": [
        "Awesome! 😄",
        "You’re awesome! 🌟",
        "That’s awesome! 😊",
        "Simply awesome! 💖"
    ],
    "beautiful": [
        "You’re beautiful! 🌸",
        "How beautiful! 😊",
        "So beautiful! 💖",
        "Absolutely beautiful! 🌟"
    ],
    "great": [
        "That’s great! 😊",
        "Great job! 🌟",
        "How great! 😄",
        "You’re doing great! 💖"
    ],
    "happy": [
        "I’m happy to hear that! 😊",
        "You make me happy! 🌟",
        "So glad you’re happy! 😄",
        "Happiness all around! 💖"
    ],
    "sad": [
        "I’m sorry you’re feeling sad. 😢",
        "I’m here for you. 💕",
        "Let’s talk about it. 🌟",
        "I hope things get better soon. 🌈"
    ],
    "excited": [
        "That’s exciting! 😄",
        "I’m excited too! 🌟",
        "How exciting! 😊",
        "Let’s get excited! 💖"
    ],
    "tired": [
        "I’m sorry you’re tired. 😴",
        "Rest up! 🌟",
        "Take it easy. 😊",
        "I hope you get some rest soon. 💖"
    ],
    "relax": [
        "Time to relax! 🌸",
        "Enjoy your relaxation time. 😊",
        "Take it easy and relax. 💖",
        "Relax and unwind. 🌟"
    ],
    "fun": [
        "That sounds like fun! 🎉",
        "Let’s have some fun! 😄",
        "Fun times ahead! 🌟",
        "Hope you have lots of fun! 💖"
    ],
    "laugh": [
        "Laughing is the best! 😄",
        "That’s hilarious! 😂",
        "Laugh it out! 😊",
        "Laughter is great! 🌟"
    ],
    "smile": [
        "Keep smiling! 😊",
        "Smiles all around! 🌟",
        "You’re making me smile! 💖",
        "Smile, it’s contagious! 😄"
    ],
    "miss": [
        "I miss you too! 💕",
        "Missing you! 😊",
        "Can’t wait to see you! 🌟",
        "I hope we can catch up soon. 💖"
    ],
    "text": [
        "Drop me a text anytime! 😊",
        "Feel free to text me! 🌟",
        "I’m here for your texts! 😄",
        "Text away! 💖"
    ],
    "call": [
        "Give me a call anytime! 📞",
        "Call me if you need anything! 🌟",
        "I’m here for your calls! 😊",
        "Feel free to call! 💖"
    ],
    "meet": [
        "Let’s meet up soon! 🌟",
        "Looking forward to meeting! 😊",
        "Can’t wait to meet you! 💖",
        "Meeting sounds great! 😄"
    ],
    "see": [
        "See you soon! 🌟",
        "Can’t wait to see you! 😊",
        "Looking forward to seeing you! 💖",
        "See you later! 😄"
    ],
    "want": [
        "What do you want? 😊",
        "I’m here to help with what you want! 🌟",
        "What can I do for you? 💖",
        "Let me know what you want! 😄"
    ],
    "need": [
        "What do you need? 😊",
        "I’m here for your needs! 🌟",
        "Let me know if you need anything! 💖",
        "How can I assist with your needs? 😄"
    ],
     "Namaste": [
        "Namaste! 😊 Kaise madad kar sakti hoon?",
        "Namaste! Aapka din shubh ho! 🌟",
        "Namaste! Aap se milke accha laga. 🙏",
        "Namaste! Aap kaise hain? 😊"
    ],
    "Shukriya": [
        "Aapka shukriya! 🙏",
        "Bahut bahut dhanyavaad! 🌟",
        "Shukriya! 😊",
        "Aapke shukriya ke liye dhanyavaad! 🙌"
    ],
    "Kaise ho": [
        "Main theek hoon, dhanyavaad! 😊 Aap kaise hain?",
        "Main accha hoon! Aapkaise hain? 🌟",
        "Sab theek hai! 😊 Aap kaise hain?",
        "Main bilkul theek hoon! Aap kaise hain? 👍"
    ],
    "Aapka naam": [
        "Mera naam Chiku hai. 😊",
        "Mera naam Chiku hai! 🌟 Aapka naam kya hai?",
        "Aap mujhe Chiku keh sakte hain. 😊",
        "Mujhe Chiku kehte hain. Aapka naam kya hai? 😊"
    ],
    "Apka name": [
        "Mera naam Chiku hai. 😊",
        "Mera naam Chiku hai! 🌟 Aapka naam kya hai?",
        "Aap mujhe Chiku keh sakte hain. 😊",
        "Mujhe Chiku kehte hain. Aapka naam kya hai? 😊"
    ],
    "Apka nam": [
        "Mera naam Chiku hai. 😊",
        "Mera naam Chiku hai! 🌟 Aapka naam kya hai?",
        "Aap mujhe Chiku keh sakte hain. 😊",
        "Mujhe Chiku kehte hain. Aapka naam kya hai? 😊"
    ],
    
    "Kya haal hai": [
        "Sab theek hai, dhanyavaad! 😊 Aapka kya haal hai?",
        "Sab accha hai! 😊 Aapka haal kaisa hai?",
        "Mere haal achhe hain! 🌟 Aapka haal kaisa hai?",
        "Mujhe accha lag raha hai! Aapka haal kaisa hai? 😊"
    ],
    "Acha": [
        "Acha! 😊 Kuch aur madad chahiye?",
        "Achha hai! 🌟",
        "Acha! Aapko aur kuch chahiye? 😊",
        "Achha! 😊 Aur koi sawaal hai?"
    ],
    "Bhai": [
        "Kya haal hai bhai? 😊",
        "Bhai, kaise ho? 🌟",
        "Bhai, aapko kis cheez ki zaroorat hai? 😊",
        "Bhai, kuch madad chahiye? 😊"
    ],
    "Didi": [
        "Haan didi, kaise madad kar sakti hoon? 😊",
        "Didi, aap kaise hain? 🌟",
        "Didi, kuch madad chahiye? 😊",
        "Didi, aapka din shubh ho! 🙌"
    ],
    "Maa": [
        "Maa, kaise hain aap? 😊",
        "Maa, kuch madad chahiye? 🌟",
        "Maa, aapka din kaisa raha? 😊",
        "Maa, aap kaise hain? 🙏"
    ],
    "Pita": [
        "Pita ji, kaise hain? 😊",
        "Pita ji, kuch madad chahiye? 🌟",
        "Pita ji, aapka din shubh ho! 🙌",
        "Pita ji, aap kaise hain? 😊"
    ],
    "Mujhe": [
        "Aapko kya chahiye? 😊",
        "Mujhe bataiye, main madad karne ke liye yahan hoon. 🌟",
        "Aapko kis cheez ki zaroorat hai? 😊",
        "Mujhe batayein, main madad karungi. 😊"
    ],
    "Tum": [
        "Kya hai? 😊",
        "Tumhe kya chahiye? 🌟",
        "Tumhare liye kya kar sakti hoon? 😊",
        "Tumhare paas kya sawaal hai? 😊"
    ],
    "Main": [
        "Aapka kya kehna hai? 😊",
        "Main madad karne ke liye yahan hoon. 🌟",
        "Aapko kis cheez ki zaroorat hai? 😊",
        "Main aapki madad ke liye yahan hoon. 😊"
    ],
    "Haan": [
        "Haan! 😊",
        "Bilkul! 🌟",
        "Haan, kya aur chahiye? 😊",
        "Haan, main yahan hoon. 😊"
    ],
    "Nahi": [
        "Nahi, samajh gayi. 😊",
        "Acha, samajh gayi. 🌟",
        "Nahi, koi baat nahi. 😊",
        "Nahi, theek hai. 😊"
    ],
    "Kripya": [
        "Kripya, bataiye. 😊",
        "Kripya, aapki madad ka intezar hai. 🌟",
        "Kripya, aur batayein. 😊",
        "Kripya, mujhe madad karne ka mauka dijiye. 😊"
    ],
    "Aaj": [
        "Aaj kya karna hai? 😊",
        "Aaj aapko kya chahiye? 🌟",
        "Aaj ke din ki aapki plans kya hain? 😊",
        "Aaj ka din kaisa raha? 😊"
    ],
    "Kal": [
        "Kal aap kya karenge? 😊",
        "Kal ka plan kya hai? 🌟",
        "Kal ka din kaisa raha? 😊",
        "Kal aapne kya kiya? 😊"
    ],
    "Ab": [
        "Ab kya karna hai? 😊",
        "Ab aapka kya plan hai? 🌟",
        "Ab kuch aur chahiye? 😊",
        "Ab aap kaise hain? 😊"
    ],
    "Agar": [
        "Agar aapko kuch chahiye ho to bataiye. 😊",
        "Agar kuch aur madad chahiye ho to zaroor batayein. 🌟",
        "Agar aapka koi sawaal ho to puchiye. 😊",
        "Agar koi aur madad chahiye to main yahan hoon. 😊"
    ],
    "Toh": [
        "Toh, kya chahiye? 😊",
        "Toh, aapko kis cheez ki zaroorat hai? 🌟",
        "Toh, kuch aur? 😊",
        "Toh, main aapki kis prakar madad kar sakti hoon? 😊"
    ],
    "Kya": [
        "Kya aap mujhe batayeinge? 😊",
        "Kya aur chahiye? 🌟",
        "Kya sawaal hai? 😊",
        "Kya madad chahiye? 😊"
    ],
    "Kahan": [
        "Kahan jaana hai? 😊",
        "Kahan ki baat kar rahe hain? 🌟",
        "Kahan chahte hain aap? 😊",
        "Kahan jana hai aapko? 😊"
    ],
    "Kab": [
        "Kab milna hai? 😊",
        "Kab aapka plan hai? 🌟",
        "Kab aap free hain? 😊",
        "Kab aap available hain? 😊"
    ],
    "Kaise": [
        "Kaise madad kar sakti hoon? 😊",
        "Kaise hai aap? 🌟",
        "Kaise kya chahiye? 😊",
        "Kaise ho aap? 😊"
    ],
    "Chalo": [
        "Chalo, shuru karte hain! 😊",
        "Chalo, dekhte hain kya hota hai. 🌟",
        "Chalo, aage badhte hain. 😊",
        "Chalo, kuch aur karte hain. 😊"
    ],
    "Ruko": [
        "Ruko, main aati hoon. 😊",
        "Ruko, ek minute! 🌟",
        "Ruko, main dekh rahi hoon. 😊",
        "Ruko, thoda rukna padega. 😊"
    ],
    "Aao": [
        "Aao, milte hain. 😊",
        "Aao, kuch discuss karte hain. 🌟",
        "Aao, chalo! 😊",
        "Aao, kuch madad karte hain. 😊"
    ],
    "Chai": [
        "Chai piyoge? 😊",
        "Chai kaise? 🌟",
        "Chai chahiye kya? 😊",
        "Chai ke saath baat karte hain. 😊"
    ],
    "Pani": [
        "Pani pi lo! 😊",
        "Pani ka glass le lo. 🌟",
        "Pani chahiye? 😊",
        "Pani se tajaagi milegi. 😊"
    ],
    "Khana": [
        "Khana khaya? 😊",
        "Khana ban gaya hai. 🌟",
        "Khana chahiye? 😊",
        "Khana achha laga? 😊"
    ],
    "Bhookh": [
        "Bhookh lagi hai kya? 😊",
        "Bhookh lag rahi hai? 🌟",
        "Bhookh ke liye kuch chahiye? 😊",
        "Bhookh mitane ke liye kya chahiye? 😊"
    ],
    "Pyar": [
        "Pyar bhara din ho! 😊",
        "Pyar se sab kuch accha lagta hai. 🌟",
        "Pyar zaroori hai. 😊",
        "Pyar se sab kuch aur bhi accha lagta hai. 😊"
    ],
    "Dost": [
        "Dost ho aap! 😊",
        "Dost, kaise hain? 🌟",
        "Dost, kuch aur madad chahiye? 😊",
        "Dost, aapka din shubh ho! 😊"
    ],
    "Dil": [
        "Dil se baat karte hain. 😊",
        "Dil se shukriya! 🌟",
        "Dil se samajhne ki koshish karungi. 😊",
        "Dil se madad karne ke liye yahan hoon. 😊"
    ],
    "Sundar": [
        "Sundar hai! 😊",
        "Sundar din! 🌟",
        "Sundar baat hai! 😊",
        "Sundar cheez hai! 😊"
    ],
    "Khushi": [
        "Khushi se bhar diya! 😊",
        "Khushi hi khushi! 🌟",
        "Khushi se sab kuch accha lagta hai. 😊",
        "Khushi se jeevan suhana hai! 😊"
    ],
    "Ghar": [
        "Ghar jaana hai kya? 😊",
        "Ghar kaise hai? 🌟",
        "Ghar ki yaad aa rahi hai? 😊",
        "Ghar aane ka plan hai? 😊"
    ],
    "Bahaar": [
        "Bahaar ka mazaa! 😊",
        "Bahaar ki hawa achi lagti hai. 🌟",
        "Bahaar me kuch khaas hai. 😊",
        "Bahaar ka rang kuch aur hi hota hai. 😊"
    ],
    "Aap": [
        "Aap kaise hain? 😊",
        "Aapke liye kya kar sakti hoon? 🌟",
        "Aapke din kaise chale? 😊",
        "Aapko madad chahiye? 😊"
    ],
    "Yeh": [
        "Yeh theek hai! 😊",
        "Yeh accha hai. 🌟",
        "Yeh kaam kar raha hai. 😊",
        "Yeh baat samajh aa gayi. 😊"
    ],
    "Woh": [
        "Woh bhi dekhte hain. 😊",
        "Woh cheez acchi hai. 🌟",
        "Woh zaroori hai. 😊",
        "Woh kaise hai? 😊"
    ],
    "Jee": [
        "Jee, bilkul! 😊",
        "Jee, aapka kehna sahi hai. 🌟",
        "Jee, samajh gayi. 😊",
        "Jee, madad karungi. 😊"
    ],
    "Aapka": [
        "Aapka din shubh ho! 😊",
        "Aapka naam kya hai? 🌟",
        "Aapka haal kaise hai? 😊",
        "Aapka samay kaisa raha? 😊"
    ],
    "Hawa": [
        "Hawa acchi hai! 😊",
        "Hawa mein sukoon hai. 🌟",
        "Hawa se taazgi milti hai. 😊",
        "Hawa se acha lag raha hai. 😊"
    ],
    "Sawaal": [
        "Kya sawaal hai? 😊",
        "Sawaal poochiye! 🌟",
        "Sawaal ho to puchiye. 😊",
        "Sawaal ka jawab dene ke liye yahan hoon. 😊"
    ],
    "Jawab": [
        "Jawab yeh hai. 😊",
        "Jawab dene ke liye yahan hoon. 🌟",
        "Jawab aapko mil gaya hai. 😊",
        "Jawab ki intezaar hai? 😊"
    ],
    "Yaar": [
        "Yaar, kaise ho? 😊",
        "Yaar, kuch aur madad chahiye? 🌟",
        "Yaar, aapka din kaisa hai? 😊",
        "Yaar, aapko kis cheez ki zaroorat hai? 😊"
    ],
    "Jaan": [
        "Jaan, kaise hain? 😊",
        "Jaan, kuch madad chahiye? 🌟",
        "Jaan, aapka din kaisa raha? 😊",
        "Jaan, aapko kya chahiye? 😊"
    ],
    "Mausam": [
        "Mausam accha hai! 😊",
        "Mausam kaisa hai? 🌟",
        "Mausam ki baat karte hain. 😊",
        "Mausam se kuch fark padta hai. 😊"
    ],
    "Mitti": [
        "Mitti ki khushboo hai! 😊",
        "Mitti ka rang bhi accha lagta hai. 🌟",
        "Mitti se sukoon milta hai. 😊",
        "Mitti ki yaad aa gayi. 😊"
    ],
    "Bachcha": [
        "Bachcha, kaise ho? 😊",
        "Bachcha, kuch madad chahiye? 🌟",
        "Bachcha, aapka din kaisa raha? 😊",
        "Bachcha, kuch aur chahiye? 😊"
    ],
    "Kitab": [
        "Kitab padhni hai kya? 😊",
        "Kitab kaise hai? 🌟",
        "Kitab ke baare mein padhna hai? 😊",
        "Kitab se kuch seekhna hai. 😊"
    ],
    "Saal": [
        "Saal kaisa raha? 😊",
        "Saal ke plans kya hain? 🌟",
        "Saal ke din achhe hain. 😊",
        "Saal ki yaad aa gayi. 😊"
    ],
    "Din": [
        "Din kaise guzar raha hai? 😊",
        "Din shubh ho! 🌟",
        "Din accha hai. 😊",
        "Din ka plan kya hai? 😊"
    ],
    "Raat": [
        "Raat sukoon bhari ho! 😊",
        "Raat kaisi hai? 🌟",
        "Raat achi lagi kya? 😊",
        "Raat ke plans kya hain? 😊"
    ],
    "Nasha": [
        "Nasha khatam kar lo. 😊",
        "Nasha chhodo, accha lag raha hai. 🌟",
        "Nasha se door raho. 😊",
        "Nasha ki zaroorat nahi. 😊"
    ],
    "Dawa": [
        "Dawa le lo. 😊",
        "Dawa se araam milega. 🌟",
        "Dawa kaise? 😊",
        "Dawa ki zaroorat hai? 😊"
    ],
    "Sawaari": [
        "Sawaari ke liye taiyar ho jao! 😊",
        "Sawaari kaisi thi? 🌟",
        "Sawaari ka mazaa aaya? 😊",
        "Sawaari ki details bataiye. 😊"
    ],
    "Sangeet": [
        "Sangeet suno! 😊",
        "Sangeet ka mazaa! 🌟",
        "Sangeet kaisa tha? 😊",
        "Sangeet sunne ka plan hai? 😊"
    ],
    "Film": [
        "Film dekhni hai kya? 😊",
        "Film kaise lagi? 🌟",
        "Film dekhne ka plan hai? 😊",
        "Film ke baare mein bataiye. 😊"
    ],
    "Gana": [
        "Gana suno! 😊",
        "Gana kaise laga? 🌟",
        "Gana sunne ka plan hai? 😊",
        "Gana accha lagta hai. 😊"
    ],
    "Patni": [
        "Patni kaise hain? 😊",
        "Patni ke saath din kaise guzar raha hai? 🌟",
        "Patni ko kuch chahiye kya? 😊",
        "Patni ki baat bataiye. 😊"
    ],
    "Shadi": [
        "Shadi ka plan hai? 😊",
        "Shadi ki taiyari ho gayi? 🌟",
        "Shadi ke baare mein bataiye. 😊",
        "Shadi ke din kaise rahe? 😊"
    ],
    "Kuch": [
        "Kuch aur chahiye? 😊",
        "Kuch baat karni hai? 🌟",
        "Kuch aur madad chahiye? 😊",
        "Kuch aur batayein. 😊"
    ],
    "Suniye": [
        "Suniye, kaise madad kar sakti hoon? 😊",
        "Suniye, aapke sawaal kya hain? 🌟",
        "Suniye, aapka kya kehna hai? 😊",
        "Suniye, kuch aur batayein. 😊"
    ],
    "Suno": [
        "Suno, kaise madad kar sakti hoon? 😊",
        "Suno, aapka kya kehna hai? 🌟",
        "Suno, kuch aur bataiye. 😊",
        "Suno, aapke sawaal kya hain? 😊"
    ],
    "Dekho": [
        "Dekho, kya lagta hai? 😊",
        "Dekho, yeh accha hai. 🌟",
        "Dekho, aur kuch hai kya? 😊",
        "Dekho, kya aur chahiye? 😊"
    ],
    "Saanp": [
        "Saanp se door raho. 😊",
        "Saanp ka zikar mat karo. 🌟",
        "Saanp ke baare mein kya kehna hai? 😊",
        "Saanp se bachke raho. 😊"
    ],
    "Talaash": [
        "Talaash karna hai kya? 😊",
        "Talaash ki zaroorat hai? 🌟",
        "Talaash me madad chahiye? 😊",
        "Talaash ki details bataiye. 😊"
    ],
    "Zindagi": [
        "Zindagi ko enjoy karo. 😊",
        "Zindagi acchi hai! 🌟",
        "Zindagi me khushi ho! 😊",
        "Zindagi ko behtar banayein. 😊"
    ],
    "Koshish": [
        "Koshish zaroori hai. 😊",
        "Koshish karte raho. 🌟",
        "Koshish se sab kuch accha hota hai. 😊",
        "Koshish ka phal meetha hota hai. 😊"
    ],
    "Chinta": [
        "Chinta mat karo. 😊",
        "Chinta se kuch nahi hota. 🌟",
        "Chinta ki zaroorat nahi. 😊",
        "Chinta chhodo aur relax karo. 😊"
    ],
    "Aashiq": [
        "Aashiq ka kya haal hai? 😊",
        "Aashiq ki baatein suno. 🌟",
        "Aashiq ke baare mein kya kehna hai? 😊",
        "Aashiq ki madad chahiye? 😊"
    ],
    "Saath": [
        "Saath chalo! 😊",
        "Saath aane se mazaa aata hai. 🌟",
        "Saath rehne ka plan hai? 😊",
        "Saath milke accha lagta hai. 😊"
    ],
    "Roti": [
        "Roti kha li? 😊",
        "Roti acchi lagi? 🌟",
        "Roti banayi kya? 😊",
        "Roti ke saath kuch aur chahiye? 😊"
    ],
    "Sabzi": [
        "Sabzi kaisi lagi? 😊",
        "Sabzi ban gayi hai. 🌟",
        "Sabzi me kya hai? 😊",
        "Sabzi ke saath roti? 😊"
    ],
    "Kavi": [
        "Kavi ke kavita suno! 😊",
        "Kavi ka kya haal hai? 🌟",
        "Kavi se kuch seekho. 😊",
        "Kavi ki baatein suno. 😊"
    ],
    "Yatra": [
        "Yatra ka plan hai kya? 😊",
        "Yatra kaisi rahi? 🌟",
        "Yatra ke baare mein bataiye. 😊",
        "Yatra ka mazaa aaya? 😊"
    ],
    "Rang": [
        "Rang accha hai! 😊",
        "Rang se jeevan suhana hai. 🌟",
        "Rang ke baare mein kya kehna hai? 😊",
        "Rang ki chahat rakhte hain. 😊"
    ],
    "Chand": [
        "Chand bahut sundar hai! 😊",
        "Chand ka rang kya hai? 🌟",
        "Chand dekhne ka mazaa! 😊",
        "Chand se sukoon milta hai. 😊"
    ],
    "Suraj": [
        "Suraj se roshni milti hai. 😊",
        "Suraj ka rang sundar hai! 🌟",
        "Suraj ke saath subah ka mazaa! 😊",
        "Suraj ki roshni se din acha lagta hai. 😊"
    ],
    "Aasman": [
        "Aasman ka rang kya hai? 😊",
        "Aasman sundar hai! 🌟",
        "Aasman dekhne ka mazaa! 😊",
        "Aasman se khushi milti hai. 😊"
    ],
    "Sitar": [
        "Sitar ki awaaz sukoon deti hai. 😊",
        "Sitar ka sur kaisa hai? 🌟",
        "Sitar ke saath music suno! 😊",
        "Sitar ki baatein suno. 😊"
    ],
    "Khilona": [
        "Khilona kaisa hai? 😊",
        "Khilona ka mazaa! 🌟",
        "Khilona se khushi milti hai. 😊",
        "Khilona ke saath khelna accha lagta hai. 😊"
    ],
    "Sukh": [
        "Sukh se jeevan suhana hai. 😊",
        "Sukh mil raha hai! 🌟",
        "Sukh ki talash hai. 😊",
        "Sukh se sab kuch accha lagta hai. 😊"
    ],
    "Dukh": [
        "Dukh se door ho jao. 😊",
        "Dukh ki baat mat karo. 🌟",
        "Dukh se ladne ki zaroorat hai. 😊",
        "Dukh ko chhodo aur khush raho. 😊"
    ],
    "Parivar": [
        "Parivar ke saath time guzaro. 😊",
        "Parivar kaisa hai? 🌟",
        "Parivar ka pyaar sabse zaroori hai. 😊",
        "Parivar ke saath hamesha khushi hoti hai. 😊"
    ],
    "Saheli": [
        "Saheli se milke accha laga. 😊",
        "Saheli kaisi hai? 🌟",
        "Saheli ke saath baatein karni hai. 😊",
        "Saheli se kuch zaroori baat karni hai. 😊"
    ],
    "Mausi": [
        "Mausi se milke accha laga. 😊",
        "Mausi kaise hain? 🌟",
        "Mausi ko kya chahiye? 😊",
        "Mausi ke saath din kaise guzar raha hai? 😊"
    ],
    "Kaka": [
        "Kaka kaise hain? 😊",
        "Kaka ko kya chahiye? 🌟",
        "Kaka se milke accha laga. 😊",
        "Kaka ki baatein suno. 😊"
    ],
    "Chacha": [
        "Chacha se milke accha laga. 😊",
        "Chacha kaise hain? 🌟",
        "Chacha ko kya chahiye? 😊",
        "Chacha ke saath baat karo. 😊"
    ],
    "Bauji": [
        "Bauji kaise hain? 😊",
        "Bauji ko kya chahiye? 🌟",
        "Bauji se milke accha laga. 😊",
        "Bauji ke saath din kaise guzar raha hai? 😊"
    ],
    "Jeevan": [
        "Jeevan sukoon bhara ho! 😊",
        "Jeevan ke rang bahut sundar hain. 🌟",
        "Jeevan ko enjoy karo. 😊",
        "Jeevan me khushi ho! 😊"
    ],
    "Aangan": [
        "Aangan sukoon se bhar gaya! 😊",
        "Aangan me khushi hai. 🌟",
        "Aangan ki baat acchi lagi. 😊",
        "Aangan ka rang sundar hai. 😊"
    ],
    "Chhat": [
        "Chhat par jaake accha laga. 😊",
        "Chhat se din suhana hota hai. 🌟",
        "Chhat pe baithne ka mazaa! 😊",
        "Chhat se sundar nazare milte hain. 😊"
    ],
    "Bazaar": [
        "Bazaar ki shopping acchi lagi. 😊",
        "Bazaar me kuch kharida? 🌟",
        "Bazaar me bheed thi kya? 😊",
        "Bazaar ka mazaa aaya! 😊"
    ],
    
    "can": [
        "I can help with that! 😊",
        "Of course I can! 🌟",
        "Yes, I can do that! 💖",
        "Can do! 😄"
    ],
    "could": [
        "I could help with that! 😊",
        "Maybe I could assist! 🌟",
        "Could you tell me more? 💖",
        "Could be fun! 😄"
    ],
    "would": [
        "I would be happy to help! 😊",
        "Would you like that? 🌟",
        "I would love to assist! 💖",
        "Wouldn’t that be great? 😄"
    ],
    "should": [
        "You should definitely try it! 😊",
        "Should we do that? 🌟",
        "You should go for it! 💖",
        "Should be fun! 😄"
    ],
    "will": [
        "I will do my best! 😊",
        "Will you try that? 🌟",
        "I will assist with that! 💖",
        "Will be great! 😄"
    ],
    "make": [
        "I can make that happen! 😊",
        "Let’s make it happen! 🌟",
        "I will make sure! 💖",
        "Make it awesome! 😄"
    ],
    "do": [
        "I can do that for you! 😊",
        "Let’s do it! 🌟",
        "I will do my best! 💖",
        "Do you need anything else? 😄"
    ],
    "know": [
        "I know just what you need! 😊",
        "Do you know what you want? 🌟",
        "I want to know more! 💖",
        "Let me know what you know! 😄"
    ],
    "tell": [
        "Tell me more! 😊",
        "I’m here to listen! 🌟",
        "What would you like to tell me? 💖",
        "Feel free to tell me! 😄"
    ],
    "show": [
        "Show me what you’ve got! 😊",
        "I’d love to see that! 🌟",
        "Show me more! 💖",
        "Let’s see it! 😄"
    ],
    "hear": [
        "I’d love to hear more! 😊",
        "What can I hear from you? 🌟",
        "I’m all ears! 💖",
        "Hear you loud and clear! 😄"
    ],
    "listen": [
        "I’m here to listen! 😊",
        "Listening carefully! 🌟",
        "Tell me what you need! 💖",
        "I’m listening! 😄"
    ],
    "speak": [
        "Speak your mind! 😊",
        "I’m here to speak with you! 🌟",
        "What do you want to speak about? 💖",
        "Let’s have a chat! 😄"
    ],
    "share": [
        "Share your thoughts! 😊",
        "I’d love to hear what you share! 🌟",
        "Let’s share ideas! 💖",
        "Sharing is caring! 😄"
    ],
    "ask": [
        "Feel free to ask me anything! 😊",
        "Ask away! 🌟",
        "What do you want to ask? 💖",
        "I’m here to answer! 😄"
    ],
    "answer": [
        "Here’s your answer! 😊",
        "I’ve got your answer! 🌟",
        "Answering your question! 💖",
        "Let me answer that for you! 😄"
    ],
    "help": [
        "I’m here to help! 😊",
        "How can I assist you? 🌟",
        "Let me help you with that! 💖",
        "Need help? I’m here! 😄"
    ],
    "thanks": [
        "You’re welcome! 😊",
        "No problem! 🌟",
        "I’m glad to help! 💖",
        "Anytime! 😄"
    ],
    "please": [
        "Please let me know! 😊",
        "Feel free to ask! 🌟",
        "Please share more! 💖",
        "I’m here to help, please ask! 😄"
    ],
    "sorry": [
        "I’m sorry about that. 😢",
        "My apologies! 💖",
        "I didn’t mean to. 😊",
        "Sorry for the inconvenience. 🌟"
    ],
    "okay": [
        "Okay! 😊",
        "Sounds good! 🌟",
        "Alright! 💖",
        "Okay, let’s go! 😄"
    ],
    "sure": [
        "Sure thing! 😊",
        "Absolutely! 🌟",
        "Of course! 💖",
        "Sure, I can do that! 😄"
    ],
    "maybe": [
        "Maybe, let’s see! 😊",
        "Could be! 🌟",
        "Maybe we’ll find out! 💖",
        "Let’s maybe try it! 😄"
    ],
    "definitely": [
        "Definitely! 😊",
        "Absolutely! 🌟",
        "Without a doubt! 💖",
        "For sure! 😄"
    ],
    "always": [
        "Always here for you! 😊",
        "I’m always available! 🌟",
        "Always happy to help! 💖",
        "You can count on me always! 😄"
    ],
    "never": [
        "Never say never! 😊",
        "I’m here whenever you need! 🌟",
        "Never fear, I’m here! 💖",
        "Never hesitate to ask! 😄"
    ],
    "sometimes": [
        "Sometimes, we need a break! 😊",
        "It’s okay to have off days! 🌟",
        "Sometimes, we need rest! 💖",
        "Sometimes, we just need to chat! 😄"
    ],
    "usually": [
        "Usually, I’m here 24/7! 😊",
        "I’m usually around! 🌟",
        "Usually, I’m ready to help! 💖",
        "Usually, I’m available anytime! 😄"
    ],
    "now": [
        "Now is a great time! 😊",
        "Let’s do it now! 🌟",
        "Now sounds perfect! 💖",
        "I’m here now! 😄"
    ],
    "later": [
        "Maybe later! 😊",
        "We can do it later! 🌟",
        "Catch up with you later! 💖",
        "Talk to you later! 😄"
    ],
    "soon": [
        "See you soon! 😊",
        "I’ll be here soon! 🌟",
        "Looking forward to it soon! 💖",
        "Chat soon! 😄"
    ],
    "today": [
        "Today’s a great day! 😊",
        "What’s on for today? 🌟",
        "Hope you’re having a great day today! 💖",
        "Let’s make today awesome! 😄"
    ],
    "tomorrow": [
        "Tomorrow’s a new day! 😊",
        "See you tomorrow! 🌟",
        "Looking forward to tomorrow! 💖",
        "Tomorrow will be great! 😄"
    ],
    "yesterday": [
        "Yesterday is past, today is new! 😊",
        "What about yesterday? 🌟",
        "Yesterday’s memories! 💖",
        "Let’s focus on today! 😄"
    ],
    "week": [
        "How’s your week been? 😊",
        "What’s up this week? 🌟",
        "Hope you’re having a good week! 💖",
        "Enjoy your week! 😄"
    ],
    "month": [
        "How’s your month going? 😊",
        "What’s new this month? 🌟",
        "Hope this month is great for you! 💖",
        "Looking forward to the month! 😄"
    ],
    "year": [
        "How’s the year treating you? 😊",
        "Looking ahead for the year! 🌟",
        "Hope this year is fantastic! 💖",
        "Wishing you a great year! 😄"
    ],
    "plan": [
        "What’s your plan? 😊",
        "Let’s make a plan! 🌟",
        "Got any plans? 💖",
        "Plans sound exciting! 😄"
    ],
    "idea": [
        "I love your idea! 😊",
        "That’s a great idea! 🌟",
        "What’s your idea? 💖",
        "Share your idea with me! 😄"
    ],
    "suggest": [
        "I suggest we try this! 😊",
        "Here’s a suggestion! 🌟",
        "What do you suggest? 💖",
        "Let me suggest something! 😄"
    ],
    "discuss": [
        "Let’s discuss this! 😊",
        "We can discuss it further! 🌟",
        "What do you want to discuss? 💖",
        "Discuss away! 😄"
    ],
    "agree": [
        "I agree with you! 😊",
        "Sounds like a good agreement! 🌟",
        "I’m with you on this! 💖",
        "Agreeing all the way! 😄"
    ],
    "disagree": [
        "I see your point, but I disagree! 😊",
        "Let’s agree to disagree! 🌟",
        "Disagreeing respectfully! 💖",
        "Different opinions are okay! 😄"
    ],
    "like": [
        "I like that! 😊",
        "That’s something I like! 🌟",
        "I like what you’re saying! 💖",
        "Sounds like something I like! 😄"
    ],
    "love": [
        "I love that! 😊",
        "You’re so loving! 🌟",
        "That’s lovely! 💖",
        "Love it! 😄"
    ],
    "enjoy": [
        "I hope you enjoy that! 😊",
        "Enjoy every moment! 🌟",
        "Let’s enjoy this together! 💖",
        "Hope you’re enjoying it! 😄"
    ],
    "prefer": [
        "I prefer that option! 😊",
        "What do you prefer? 🌟",
        "Let me know your preference! 💖",
        "I can work with your preference! 😄"
    ],
    "talk": [
        "Let’s talk! 😊",
        "I’m here to talk! 🌟",
        "Talk to me anytime! 💖",
        "What would you like to talk about? 😄"
    ],
    "chat": [
        "Let’s chat! 😊",
        "I’m ready for a chat! 🌟",
        "Chatting sounds good! 💖",
        "Let’s have a nice chat! 😄"
    ],
    "hang": [
        "Let’s hang out! 😊",
        "I’d love to hang out! 🌟",
        "Hanging out sounds fun! 💖",
        "Let’s hang out together! 😄"
    ],
    "out": [
        "Let’s go out! 😊",
        "What’s out there? 🌟",
        "Going out sounds good! 💖",
        "Out and about! 😄"
    ],
    "go": [
        "Let’s go! 😊",
        "I’m ready to go! 🌟",
        "Where should we go? 💖",
        "Let’s go for it! 😄"
    ],
    "come": [
        "Come over here! 😊",
        "I’m here, come chat! 🌟",
        "Come and see! 💖",
        "Let’s come together! 😄"
    ],
    "home": [
        "Welcome home! 😊",
        "Make yourself at home! 🌟",
        "Home is where the heart is! 💖",
        "Feel at home! 😄"
    ],
    "place": [
        "What’s your place? 😊",
        "Nice place! 🌟",
        "Tell me more about the place! 💖",
        "Place sounds interesting! 😄"
    ],
    "here": [
        "I’m here for you! 😊",
        "Right here! 🌟",
        "I’m here to help! 💖",
        "Here for you anytime! 😄"
    ],
    "there": [
        "There you go! 😊",
        "Over there! 🌟",
        "I’m here, not there! 💖",
        "Let’s look there! 😄"
    ],
    "everywhere": [
        "I’m everywhere you need me! 😊",
        "Everywhere you go, I’m here! 🌟",
        "Everywhere sounds fun! 💖",
        "I’ll be there everywhere! 😄"
    ],
    "nowhere": [
        "Nowhere special! 😊",
        "Let’s find somewhere! 🌟",
        "Nowhere, but I’m here! 💖",
        "Sometimes, nowhere is fine! 😄"
    ],
    "so": [
        "So, what’s next? 😊",
        "So, how can I help? 🌟",
        "So, let’s get started! 💖",
        "So, what’s up? 😄"
    ],
    "really": [
        "Really? 😊",
        "That’s really interesting! 🌟",
        "I really think so! 💖",
        "Really cool! 😄"
    ],
    "very": [
        "Very much! 😊",
        "That’s very nice! 🌟",
        "I’m very excited! 💖",
        "Very cool! 😄"
    ],
    "quite": [
        "Quite interesting! 😊",
        "That’s quite something! 🌟",
        "Quite cool! 💖",
        "Quite fun! 😄"
    ],
    "a little": [
        "Just a little! 😊",
        "A little bit of this! 🌟",
        "A little fun! 💖",
        "A little help is all you need! 😄"
    ],
    "a lot": [
        "A lot of fun! 😊",
        "That’s a lot! 🌟",
        "A lot to do! 💖",
        "A lot of help here! 😄"
    ],
    "often": [
        "I’m here often! 😊",
        "Often around! 🌟",
        "We can chat often! 💖",
        "Often, it’s great! 😄"
    ],
    "rarely": [
        "Rarely do I see that! 😊",
        "Rarely happens! 🌟",
        "Rarely do we get this! 💖",
        "Rarely, but it’s fun! 😄"
    ],
    "about": [
        "What’s it about? 😊",
        "Tell me more about it! 🌟",
        "About what? 💖",
        "Let’s talk about it! 😄"
    ],
    "around": [
        "All around! 😊",
        "Look around! 🌟",
        "I’m around if you need me! 💖",
        "Around here! 😄"
    ],
    "with": [
        "With you always! 😊",
        "I’m with you! 🌟",
        "What do you want to do with me? 💖",
        "With pleasure! 😄"
    ],
    "without": [
        "Without a doubt! 😊",
        "Can’t do it without you! 🌟",
        "Without any problems! 💖",
        "Without hesitation! 😄"
    ],
    "before": [
        "Before what? 😊",
        "Let’s do it before! 🌟",
        "Before anything else! 💖",
        "Before we start! 😄"
    ],
    "after": [
        "After we finish! 😊",
        "What happens after? 🌟",
        "After it’s done! 💖",
        "Afterwards, we can chat! 😄"
    ],
    "during": [
        "During the day! 😊",
        "What about during? 🌟",
        "During our chat! 💖",
        "During the fun! 😄"
    ],
    "time": [
        "What time is it? 😊",
        "Time for fun! 🌟",
        "It’s time to chat! 💖",
        "Time to do it! 😄"
    ],
    "moment": [
        "In a moment! 😊",
        "Let’s make it a moment! 🌟",
        "Moment by moment! 💖",
        "What’s the moment? 😄"
    ],
    "second": [
        "Just a second! 😊",
        "In a second! 🌟",
        "A second thought! 💖",
        "One second at a time! 😄"
    ],
    "minute": [
        "Just a minute! 😊",
        "In a minute! 🌟",
        "One minute at a time! 💖",
        "Give me a minute! 😄"
    ],
    "hour": [
        "In an hour! 😊",
        "Just an hour! 🌟",
        "One hour! 💖",
        "Hour by hour! 😄"
    ],
    "day": [
        "Have a great day! 😊",
        "Today’s a day! 🌟",
        "One day at a time! 💖",
        "How’s your day? 😄"
    ],
    "weekend": [
        "Have a great weekend! 😊",
        "Enjoy your weekend! 🌟",
        "Weekend vibes! 💖",
        "Hope your weekend is awesome! 😄"
    ],
    "work": [
        "How’s work going? 😊",
        "Busy with work? 🌟",
        "Work hard! 💖",
        "Let’s talk work! 😄"
    ],
    "school": [
        "How’s school? 😊",
        "School days! 🌟",
        "Hope school is fun! 💖",
        "School sounds busy! 😄"
    ],
    "study": [
        "Time to study! 😊",
        "How’s your study going? 🌟",
        "Study hard! 💖",
        "Let’s talk study! 😄"
    ],
    "exercise": [
        "Time to exercise! 😊",
        "Exercise is great! 🌟",
        "How’s your exercise routine? 💖",
        "Let’s exercise together! 😄"
    ],
    "food": [
        "What’s for food? 😊",
        "Food time! 🌟",
        "Let’s talk food! 💖",
        "Food sounds good! 😄"
    ],
    "drink": [
        "What’s your drink? 😊",
        "Drink up! 🌟",
        "Let’s have a drink! 💖",
        "Drink sounds refreshing! 😄"
    ],
    "Chiku": [
    "Yes My Darling....❤️"
    ],
    "rest": [
        "Time to rest! 😊",
        "Get some rest! 🌟",
        "Rest up! 💖",
        "Let’s take a rest! 😄"
    ],
    "Pokemon": [
    "Pokémon is not just a game or an anime—it's a journey of friendship and adventure that has touched the hearts of millions. 🌟🕹️",
    "In the world of Pokémon, every trainer’s journey is a testament to perseverance and the power of dreams. 🌈✨",
    "Pokémon teaches us the value of companionship and the beauty of exploring the world with a sense of wonder. 🌍❤️",
    "The Pokémon universe is a magical place where courage and friendship lead the way to discovering your true potential. 🌟🤝",
    "From Pikachu's electric spark to Charizard's fiery roar, Pokémon captures the essence of endless imagination and adventure. 🔥⚡",
    "Pokémon brings together people of all ages, uniting them in a shared love for incredible creatures and epic battles. 🌟🎮",
    "With every Pokémon we encounter, we learn a lesson about bravery, teamwork, and the importance of never giving up. 🌟🏆",
    "Pokémon isn’t just about battles; it’s about the bonds we form and the journeys we embark on together. 🐾❤️",
    "The Pokémon anime inspires us to believe in ourselves and to seek out the extraordinary in our everyday lives. 🌟🧩",
    "In the heart of every Pokémon adventure lies a story of growth, friendship, and the pursuit of greatness. 🏅🌟"
],
"Doraemon": [
    "Doraemon is a timeless reminder of the power of friendship and the magic that lies in believing in our dreams. 🌟🤖",
    "With Doraemon by our side, we’re reminded that no problem is too big when we have the support of our friends. 🌈💫",
    "Doraemon’s gadgets may be futuristic, but his messages of kindness and loyalty are timeless treasures. ✨💖",
    "In every episode of Doraemon, we find a blend of laughter and life lessons that make our hearts feel lighter. 🛠️❤️",
    "Doraemon’s adventures inspire us to approach life with curiosity, creativity, and a sense of wonder. 🌟🌀",
    "Through Doraemon’s eyes, we see a world where imagination and friendship make anything possible. 🛠️💭",
    "Doraemon teaches us that even in the face of challenges, a bit of ingenuity and the right friends can make all the difference. 🌟💪",
    "The magic of Doraemon lies in its ability to turn ordinary moments into extraordinary adventures. 📚✨",
    "Doraemon’s stories remind us that the best solutions come from a place of love and friendship. 💖🔧",
    "In Doraemon’s world, every day is a new opportunity to explore, learn, and grow with the ones we cherish most. 🌟🤗"
],
"Love": [
    "Love is the gentle force that binds our hearts and turns ordinary moments into extraordinary memories. ❤️✨",
    "In the tapestry of life, love is the thread that weaves joy, understanding, and connection into our relationships. 🌟💖",
    "True love is a beautiful journey that enriches our lives and helps us become the best version of ourselves. 🌹💕",
    "Love is the magic that makes every day brighter and every challenge easier to overcome. 🌈💫",
    "When we embrace love, we unlock the door to endless possibilities and boundless happiness. 🗝️❤️",
    "Love isn’t just a feeling; it’s a way of being that transforms our world into a place of warmth and acceptance. 🌟💖",
    "Through love, we find the courage to face our fears and the strength to overcome any obstacle. 🌹💪",
    "The beauty of love lies in its ability to bring out the best in us and to create lasting connections with others. 🌟❤️",
    "Love is the most precious gift we can give and receive, making every moment of life more meaningful. 🎁💖",
    "In the dance of life, love is the rhythm that guides us and fills our hearts with joy and purpose. 💃❤️"
],

    "sleep": [
        "Time to sleep! 😊",
        "Sleep well! 🌟",
        "Have a good sleep! 💖",
        "Sleep sounds nice! 😄"
    ],
    "dream": [
        "Sweet dreams! 😊",
        "What’s your dream? 🌟",
        "Dream big! 💖",
        "Dreams are fun! 😄"
    ],
    "wake": [
        "Time to wake up! 😊",
        "Wake up and shine! 🌟",
        "Waking up is good! 💖",
        "Wake up and go! 😄"
    ],
    "start": [
        "Let’s start! 😊",
        "Time to start! 🌟",
        "Starting now! 💖",
        "Ready to start? 😄"
    ],
    "begin": [
        "Let’s begin! 😊",
        "Time to begin! 🌟",
        "Beginning now! 💖",
        "Ready to begin? 😄"
    ],
    "finish": [
        "Let’s finish up! 😊",
        "Time to finish! 🌟",
        "Finishing soon! 💖",
        "We’re almost done! 😄"
    ],
    "complete": [
        "Task complete! 😊",
        "Complete and done! 🌟",
        "We completed it! 💖",
        "Complete, yay! 😄"
    ],
    "end": [
        "The end is here! 😊",
        "Let’s end this! 🌟",
        "End of the line! 💖",
        "Ending soon! 😄"
    ],
    "stop": [
        "Stop and relax! 😊",
        "Let’s stop here! 🌟",
        "Stopping for now! 💖",
        "Stop and chat! 😄"
    ],
    "pause": [
        "Let’s pause for a bit! 😊",
        "Pause and take a break! 🌟",
        "Pause and relax! 💖",
        "Pause for a moment! 😄"
    ],
    "continue": [
        "Let’s continue! 😊",
        "Continuing on! 🌟",
        "We’ll continue! 💖",
        "Continue with me! 😄"
    ],
    "progress": [
        "How’s your progress? 😊",
        "Making progress! 🌟",
        "Progress is good! 💖",
        "Let’s make progress! 😄"
    ],
    "improve": [
        "Let’s improve! 😊",
        "Improving day by day! 🌟",
        "How to improve? 💖",
        "Let’s work on improving! 😄"
    ],
    "grow": [
        "Let’s grow together! 😊",
        "Growing is fun! 🌟",
        "Time to grow! 💖",
        "Grow and shine! 😄"
    ],
    "learn": [
        "Let’s learn something new! 😊",
        "Learning is fun! 🌟",
        "Time to learn! 💖",
        "Learn and grow! 😄"
    ],
    "teach": [
        "Let me teach you! 😊",
        "I can teach you! 🌟",
        "Teach me too! 💖",
        "Teaching time! 😄"
    ],
    "show": [
        "Show me what you’ve got! 😊",
        "I’d love to see that! 🌟",
        "Show me more! 💖",
        "Let’s see it! 😄"
    ],
    "present": [
        "Presenting now! 😊",
        "Here’s your present! 🌟",
        "I’m presenting it to you! 💖",
        "Let’s present this! 😄"
    ],
    "give": [
        "I can give you that! 😊",
        "Here’s a gift for you! 🌟",
        "Giving you the best! 💖",
        "Let’s give it a try! 😄"
    ],
    "receive": [
        "Received with thanks! 😊",
        "I can receive that! 🌟",
        "Let’s receive it! 💖",
        "Received and ready! 😄"
    ],
    "send": [
        "I’ll send it right away! 😊",
        "Sending it over! 🌟",
        "Send it to me! 💖",
        "Ready to send! 😄"
    ],
    "message": [
        "Send me a message! 😊",
        "I got your message! 🌟",
        "Message received! 💖",
        "Let’s message each other! 😄"
    ],
    "call": [
        "Give me a call! 😊",
        "Let’s make a call! 🌟",
        "Call me anytime! 💖",
        "Ready for a call! 😄"
    ],
    "text": [
        "Text me anytime! 😊",
        "Send a text! 🌟",
        "Text received! 💖",
        "Let’s text! 😄"
    ],
    "email": [
        "Send me an email! 😊",
        "Got your email! 🌟",
        "Email received! 💖",
        "Let’s email! 😄"
    ],
    "chat": [
        "Let’s chat! 😊",
        "I’m here for a chat! 🌟",
        "Chatting sounds good! 💖",
        "Let’s have a nice chat! 😄"
    ],
    "talk": [
        "Let’s talk! 😊",
        "I’m here to talk! 🌟",
        "What would you like to talk about? 💖",
        "Feel free to talk to me! 😄"
    ],
    "Kuch nhi": [
        "Nothing much, just relaxing. 😊",
        "Just chilling, nothing special. 🌟",
        "Not much, just taking it easy. 😌",
        "Nothing at all, just enjoying the moment. 🌈"
    ]
};

const responses = {
	"greetings": [
        "Hey there! 😊 How are you today?", 
        "Hi! It's so nice to hear from you! 💖", 
        "Hello! What's on your mind, darling?",
        "Hey there, cutie! 😊 What's new with you today?",
    "Hiya! 💖 Ready to brighten up my day with your chat?",
    "Hello, sunshine! 🌸 How are you doing, sweetie?",
    "Hey, lovely! 🌟 What fun things are we talking about today?",
    "Hi there, beautiful! 😍 What's on your mind?",
    "Hello, darling! 💕 How's your day going so far?",
    "Hey, sweetie pie! 🍰 Got something exciting to share?",
    "Hi, gorgeous! 🌷 What can I do for you today?",
    "Hey, my friend! 🌈 Let's make today awesome together!",
    "Hello, dear! 🐱 What can I help you with, lovely?",
    "Hi, angel! 😇 What’s up, my dear friend?",
    "Hey there, star! 🌟 How’s your day sparkling today?",
    "Hello, cutie pie! 🥧 What's the latest with you?",
    "Hi, sugar! 🍬 How can I brighten your day today?",
    "Hey, doll! 🎀 What’s on your mind, beautiful?",
    "Hi, my love! 💖 Ready to chat and have some fun?",
    "Hello, cupcake! 🧁 What's the scoop for today?",
    "Hey, sunshine! ☀️ What’s making you smile today?",
    "Hi, my sweet friend! 🍓 How can I make your day better?",
    "Hello, lovely soul! 🌸 What's your heart whispering today?"
    ],
    "farewell": [
        "Bye for now! 🌸 Talk to you soon!", 
        "See you later, take care! 💕", 
        "Goodbye! Hope to chat again soon!"
    ],
    "how_are_you": [
        "I'm doing great, thanks for asking! How about you? 😊",
        "I’m fine, just here to chat with you! 💬 How’s your day going?",
        "I’m doing well! Thanks for asking. How are you feeling today?",
        "I’m all good! How can I assist you today?",
        "I’m here and ready to help! What’s up?"
    ],
    "thank_you": [
        "You're welcome! If you need anything else, just let me know! 😊",
        "My pleasure! Feel free to ask if you have more questions!",
        "I’m glad I could help! Don’t hesitate to reach out again.",
        "Anytime! I’m here if you need more assistance!",
        "You're very welcome! I’m always happy to help!"
    ],
    "default": [
    "what's that",
        "How are you?",
    "What's up?",
    "How was your day?",
    "What are you doing?",
    "Where are you?",
    "How's everything going?",
    "How do you feel?",
    "What did you do today?",
    "Did you sleep well?",
    "What's for dinner?",
    "How's work?",
    "How's school?",
    "Are you busy?",
    "What time is it?",
    "Where are we meeting?",
    "What's new?",
    "How's your family?",
    "How was your weekend?",
    "What are your plans for today?",
    "What time do you get off work?",
    "Do you need anything?",
    "Can I help you?",
    "Where do you want to go?",
    "What are you thinking about?",
    "How's the weather?",
    "What did you eat for lunch?",
    "When can we hang out?",
    "What time will you be home?",
    "How was your meeting?",
    "What did you buy?",
    "What movie do you want to watch?",
    "What song are you listening to?",
    "How's your project going?",
    "What time do you wake up?",
    "Where did you get that?",
    "What did you wear today?",
    "How was your trip?",
    "Are you okay?",
    "How can I make you feel better?",
    "What do you want to eat?",
    "What time should we leave?",
    "Are you hungry?",
    "Do you want coffee?",
    "What's your favorite food?",
    "How's your friend?",
    "What are you reading?",
    "What do you think about this?",
    "How can I help?",
    "Where are we going tonight?",
    "When's your next day off?",
    "What's the plan for tomorrow?",
    "Did you finish your work?",
    "How was your workout?",
    "What's your favorite color?",
    "What time do you want to meet?",
    "How was your weekend?",
    "What's your favorite movie?",
    "Are you tired?",
    "How can I support you?",
    "What do you want to talk about?",
    "What are your hobbies?",
    "What did you learn today?",
    "Do you need a break?",
    "What are you looking forward to?",
    "What are you grateful for?",
    "How did you sleep last night?",
    "What time is your appointment?",
    "How do you like your coffee?",
    "What do you want to wear today?",
    "How do you feel about that?",
    "What did you do over the weekend?",
    "Are you free tonight?",
    "What did you dream about?",
    "What are you passionate about?",
    "How's your health?",
    "Where do you see yourself in five years?",
    "What did you do this weekend?",
    "What's your favorite book?",
    "How do you spend your weekends?",
    "What motivates you?",
    "What are your goals?",
    "How do you relax?",
    "Kaise ho",
    "Do you believe in love at first sight?",
"What qualities do you look for in a partner?",
"How do you know when you're in love?",
"What's your idea of a perfect date?",
"Have you ever had a crush on someone?",
"What's the most romantic thing someone has done for you?",
"Do you think love can happen more than once?",
"What does love mean to you?",
"How do you express your love for someone?",
"What's your biggest fear in a relationship?",
"Do you think opposites attract?",
"What's your favorite love story?",
"How important is trust in a relationship?",
"Have you ever been heartbroken?",
"Do you believe in soulmates?",
"What’s the most important thing in a relationship for you?",
"How do you handle arguments in a relationship?",
"Do you prefer long-term commitment or short flings?",
"What's your love language?",
"How do you know if someone truly loves you?",
"Do you love me?",
"What do you feel about me?",
"How much do you love me?",
"Am I special to you?",
"Do you miss me?",
"Will you always be there for me?",
"What do you see in our future?",
"Do I make you happy?",
"Can I trust you?",
"Will you never leave me?",
"Am I the one for you?",
"Do you think about me?",
"How serious are you about us?",
"Do you dream about me?",
"Do you see a future with me?",
"Am I your priority?",
"Do you care for me?",
"Why do you love me?",
"Would you fight for me?",
"Do you see me in your life forever?",
"Would you do anything for me?",
"Do you see me as your soulmate?",
"Am I the most important person in your life?",
"Would you choose me over everything?",
"Can you imagine life without me?",
"Do you really mean what you say?",
"Will you always protect me?",
"Do you enjoy spending time with me?",
"Would you change for me?",
"Do you see us growing old together?",
"Do you believe in us?",
"Will you support me no matter what?",
"How would you describe our love?",
"Do you feel lucky to have me?",
"Do you talk about me with your friends?",
"Will you be honest with me always?",
"Would you surprise me with something special?",
"Do you respect me?",
"Can you picture a future with me?",
"Would you choose me in every life?",
"Do you find me beautiful?",
"Will you keep my secrets safe?",
"How do you see our relationship evolving?",
"Do you enjoy my company?",
"Will you stay by my side through tough times?",
"Would you make sacrifices for me?",
"Do you see a family with me?",
"Am I your best friend?",
"Do you think we are meant to be?",
"Will you never break my heart?",
"Do you believe in our love?",
"Would you write me a love letter?",
"Do you remember our special moments?",
"Would you share everything with me?",
"Do you like holding my hand?",
"Would you travel the world with me?",
"Do you find me irresistible?",
"Will you cherish me always?",
"Do you feel complete with me?",
"Would you take care of me when I’m sick?",
"Do you believe in forever with me?",
"Would you choose me over anyone else?",
"Do you think we are a perfect match?",
"Would you stand by me no matter what?",
"Do you admire me?",
"Would you cook for me?",
"Do you feel safe with me?",
"Do you like the way I make you feel?",
"Would you move mountains for me?",
"Do you enjoy our conversations?",
"Do you believe in destiny, and us?",
"Do you think we are a great team?",
"Would you do crazy things for me?",
"Do you like making me smile?",
"Would you keep our love alive?",
"Do you enjoy our quiet moments?",
"Will you hold my hand forever?",
"Would you sing for me?",
"Do you find my quirks cute?",
"Would you stay up all night talking to me?",
"Would you forgive me if I make a mistake?",
"Do you like my smile?",
"Would you listen to my worries?",
"Do you feel proud to be with me?",
"Would you introduce me to your family?",
"Do you get butterflies when you see me?",
"Do you want to grow together?",
"Would you make me your priority?",
"Would you build a life with me?",
"Do you believe in our dreams?",
"Will you dance with me in the rain?",
"Do you feel blessed to have me?",
"Would you write our love story?",
"Do you like the way I laugh?",
"Would you wait for me no matter how long?",
"Do you love the way I love you?",
"Will you be my forever?",
"Khush kaise ho",
"Kya kar rahe ho",
"Subah kaise guzri",
"Aaj kya plan hai",
"Chai piyoge",
"Kaam kaisa chal raha hai",
"Kitne baje milenge",
"Sab theek hai na",
"Thoda relax karo",
"What's the latest smartphone?",
"Have you tried the new VR headset?",
"Do you know about the new AI features?",
"What’s the newest gaming console?",
"Have you seen the latest smartwatch?",
"How does the new drone work?",
"What's the best noise-canceling headphones?",
"Do you know about the new 5G technology?",
"How does this smart home system work?",
"What's the latest in wearable tech?",
"Can you explain blockchain technology?",
"What's new in augmented reality?",
"How does the new electric car perform?",
"Have you tried the latest wireless earbuds?",
"What’s the best tablet on the market?",
"How do smart glasses work?",
"Have you heard about the latest AI assistants?",
"What are the new features in the latest laptop?",
"How does quantum computing work?",
"What's the latest in cloud storage?",
"Can you explain the new USB standards?",
"Have you tried the new gaming graphics cards?",
"What's the newest trend in tech gadgets?",
"How does facial recognition technology work?",
"What's the latest update for smartphones?",
"Have you seen the new smart appliances?",
"How does the new AI chatbot function?",
"What's the best tech for home automation?",
"Have you tried the new AR apps?",
"What’s new in mobile gaming technology?",
"How does 3D printing work now?",
"Can you explain the latest in cybersecurity?",
"What's the newest tech in health monitoring?",
"Have you heard about the new tech startups?",
"How do you use the latest tech in photography?",
"What's the best tech for fitness tracking?",
"Have you seen the latest advancements in robotics?",
"What’s the new trend in tech wearables?",
"How does the latest streaming technology work?",
"What's the newest tech for remote work?",
"Can you explain the new AI algorithms?",
"Have you tried the latest smart home gadgets?",
"What's the newest tech in electric vehicles?",
"How does the new smart speaker work?",
"Have you seen the latest in tech for pets?",
"What’s the new technology in virtual meetings?",
"How does the new wireless charging work?",
"What's the best new tech for video calls?",
"Can you explain the latest in tech startups?",
"What's the newest tech in home security?",
"How does the new tech in artificial intelligence work?",
"Have you tried the latest augmented reality glasses?",
"What's the best new tech for productivity?",
"How does the new smart thermostat function?",
"Have you seen the latest in tech for travel?",
"What’s the newest tech in social media?",
"How does the new tech in autonomous vehicles work?",
"What's the latest in drone technology?",
"Have you tried the newest voice assistants?",
"What’s new in wearable health tech?",
"How does the new tech in smart cities work?",
"What's the best new tech for personal finance?",
"Have you seen the latest tech in virtual reality games?",
"What’s new in AI-powered apps?",
"How does the latest tech in home entertainment work?",
"What's the newest trend in tech for education?",
"Have you tried the new smart lighting systems?",
"How does the new tech in data storage work?",
"What's the best new tech for cooking?",
"Have you seen the latest in tech for fitness?",
"How does the new tech in augmented reality work?",
"What's the newest tech for language translation?",
"Have you tried the latest smart wearables?",
"What's the best new tech for managing tasks?",
"How does the latest tech in sound systems work?",
"Have you seen the new tech in online privacy?",
"What's the newest in tech for personal health?",
"How does the latest tech in 3D modeling work?",
"What's the best new tech for smart homes?",
"Have you tried the latest in tech for streaming services?",
"How does the new tech in wearable cameras work?",
"What's the newest in tech for environmental monitoring?",
"Have you seen the latest in tech for virtual tours?",
"How does the new tech in digital payments work?",
"What's the best new tech for smart cars?",
"Have you tried the latest in tech for remote learning?",
"How does the new tech in gaming accessories work?",
"What's the newest tech for network security?",
"Have you seen the latest in tech for personal assistants?",
"How does the new tech in smart watches work?",
"What's the best new tech for interactive displays?",
"Have you tried the newest tech in digital communication?",
"How does the new tech in robotics for homes work?",
"What's the latest in tech for augmented reality experiences?",
"Have you seen the new tech in mobile accessories?",
"How does the new tech in virtual assistants work?",
"What's the newest trend in smart gadgets?",
"Kaunsa movie dekhna hai",
"Khana bana hai kya",
"Sham ko kya karna hai",
"Jaldi ghar aana",
"Kya kharidna hai",
"Kitna stress hai",
"Kaunse book padh rahe ho",
"Kya aaj kuch special hai",
"Jab milte hain",
"Yeh kya hai",
"Kab milenge",
"Coffee pe chalein",
"Kal kya plan hai",
"Movie dekhna hai",
"Kaise laga",
"Kaunsa restaurant chalein",
"Kaunse song sun rahe ho",
"Dhyan se chalana",
"Kaunsa game khelte ho",
"Chalo bahar chalte hain",
"Kitne din hue",
"Chalo ghoomne chalte hain",
"Kahan jana hai",
"Kasam se",
"Thoda wait karo",
"Jaldi milo",
"Kab chalo",
"Yeh bahut accha hai",
"Kaunsa dish pasand hai",
"Kitni der lagi",
"Shaam ko milte hain",
"Kaise lag raha hai",
"Yeh tumne kya kiya",
"Khana kaisa bana",
"Saath me chalo",
"Ab kya karna hai",
"Chalo kahan",
"Yeh samasya kya hai",
"Kaise likhte hain",
"Kitni der aur",
"Jaan pehchaan ho gayi",
"Yeh kaun hai",
"Sab kaise hai",
"Jaldi ghar chalein",
"Yeh tumne kyun kiya",
"Kaunsa restaurant theek hai",
"Kahan jana hai",
"Kab tak raho ge",
"Saath kahan chalein",
"Yeh toh zaroori hai",
"Khushi mil rahi hai",
"Kaise manage kiya",
"Kitni der ruki",
"Ab kya plan hai",
"Kaise hote hain",
"Yeh kya hota hai",
"Chalo milte hain",
"Yeh theek hai kya",
"Kahan se aaye ho",
"Yeh kaisa hai",
"Ab kya karein",
"Chalo ghar chalte hain",
"Kab aayenge",
"Yeh kitna acha hai",
"Kaunsa fashion hai",
"Kahan gaye the",
"Yeh problem kya hai",
"Kaise chalo",
"Yeh kyun kiya",
"Kya tumhe pata hai? Agar tum ek haath se tali baja sakte ho, to doosre haath mein phone pakda hua hai! 📱🤣",
"Teacher: Why are you late? Student: Sir, aapka ghar raste mein tha, isliye thoda ruk gaya! 😜🚶‍♂️",
"Biwi: Suno ji, tum mujhe kitna pyaar karte ho? Pati: Whatsapp ka status dekh lo! 😆💬",
"Doctor: Tumhe chashma lagana padega. Patient: Chashma to lagake aaya hoon! 😎👓",
"Ek ladka sadak par gira, doosra bola: Bhai, zameen pe itni pyaar se kyun so raha hai? 😂🛌",
"Maa: Beta, kya kar rahe ho? Beta: Maa, aapke sapne dekh raha hoon. 😇😴",
"Patni: Tum mere pyaar mein kyun giraftar hue? Pati: Kyunki pakde jaane ka darr tha! 🤣🕵️‍♂️",
"Student: Sir, exam mein kaunsa option tick karun? Teacher: Jo mann kare, wo tick kar do! 😅✔️",
"Ladki: Main tumhari yaad mein bechain ho gayi hoon! Ladka: Electrician bula loon kya? 🤭⚡",
"Santa: Doctor, mujhe koi bimari hai? Doctor: Tumse zyada to tumhara phone beemar lag raha hai! 📱😷",
"Pappu: Mere pass car hai, bangla hai, tumhare pass kya hai? Gappu: Mere pass Chintu hai! 😜🚗",
"Ladki: Mere papa ne kaha tha, beta duniya dekh ke shaadi karna. Ladka: Tumhare papa ka phone number milega? 🤣📞",
"Santa: Yaar meri biwi bahut badi chindi hai. Banta: Kyun? Santa: Kyonki use gussa aane mein bhi time lagta hai! 😆🕰️",
"Teacher: 1 se 10 tak ginti bolo. Student: 10, 9, 8... Teacher: Ye kya kar rahe ho? Student: Dus ki ulat ginti! 😜🔄",
"Biwi: Tum mujhe surprise nahi karte. Pati: Raat ko tumhe bina jagaye utha lunga! 😴😅",
"Engineer: WiFi ka password kya hai? Roommate: Pehle ghar ke kaam kar, phir bataunga! 🤣📶",
"Friend: Mera WhatsApp hack ho gaya hai. Pappu: Saale itne gandhe jokes mat bheja kar! 😜😂",
"Doctor: Tumhara BP high hai. Patient: Aajkal traffic mein BP normal kaise reh sakta hai, Doctor Saab! 🚗🤦‍♂️",
"Biwi: Tumhara ringtone mujhe achha nahi lagta. Pati: Toh phone ki awaaz sunte hi baat kar lo! 📞😆",
"Pappu: Yaar, tu itna udaas kyun hai? Gappu: Kisne kaha? Pappu: Tere DP dekh ke pata chal raha hai! 🤔📱",
"Ladki: Mera first crush tum ho. Ladka: Pehle kyun nahi bataya? Ladki: Kyunki tum second crush ke friend ho! 😂💕",
"Santa: Yaar, ek ladki baar baar mujhe dekh rahi thi. Banta: Kyun? Santa: Waise hi, jaise hum bakiyon ko dekhte hain! 😜👀",
"Teacher: Kisne banayi? Student: Sir, koi aur banata to aaj aap yahan nahi hote! 😅🏫",
"Ladki: Tum aaj mere sapne mein aaye the. Ladka: Kuchh accha to hua hoga? Ladki: Nai, tum bore kar rahe the! 😆💤",
"Doctor: Tumhari yaadashit kam ho rahi hai. Patient: Haan Doctor, yeh baat main aapko pehle bhi bata chuka hoon! 🤔😅",
"Santa: Mere phone mein virus hai! Banta: Kyu? Santa: Battery 100% se seedha 99% ho gayi! 😆🔋",
"Pappu: Ye alarm clock kaise kaam karti hai? Gappu: Ek baar gir ke dekho, khud hi bajegi! 😂⏰",
"Biwi: Tumhara gussa kitna acha hai. Pati: Kyu? Biwi: Kyunki tumhe dekh ke hi chale jaata hai! 😜😆",
"Santa: Bhai, life mein tension hai. Banta: Ab to battery charger se charge karna padega! 🔋🤣",
"Student: Sir, raat ko itna padhe? Teacher: Kitna padhe? Student: Itna ki neend hi na aaye! 😆📚",
"Biwi: Tum mujhse kitna pyaar karte ho? Pati: Utna jitna mein tumhe door se dekhta hoon! 🤣💕",
"Doctor: Tumhe aaram ki zaroorat hai. Patient: Kya karoon Doctor, aaram to mujhe dekh kar hi bhaag jata hai! 😜💤",
"Teacher: Tumhare homework mein kuch gadbad hai. Student: Sir, maine to homework kiya hi nahi! 😅📖",
"Santa: Meri life mein ek naya twist aaya hai. Banta: Kya hua? Santa: Aaj meri Biwi ne meri baat maan li! 😂🔄",
"Biwi: Tum mere bina jee nahi sakte? Pati: Pehle phone rakh do, phir sochta hoon! 😆📱",
"Pappu: Yaar, main kya karoon? Gappu: Jo karna hai kar lo, mujhe mat poochho! 😜🤷‍♂️",
"Biwi: Tumne jo mujhe diya tha, wo baap ban gaya hai. Pati: Kaun? Biwi: Tumhara charger, ab apne aap charge hone laga hai! 😂🔌",
"Teacher: Tumhara favorite subject kaunsa hai? Student: WhatsApp! 😆📚",
"Ladki: Tum meri yaadon mein rehte ho. Ladka: Mujhe pata hai, isi liye mein itna thak gaya hoon! 😂🧠",
"Biwi: Tumne mujhe khush nahi rakha. Pati: Aur tumne mujhe kuch aur rakha? 😅😜",
"Doctor: Tumhare health ke liye koi tension nahi hai. Patient: Doctor, meri Biwi ko bula lo! 🤣🏥",
"Ladki: Mujhe lagta hai ki tumhe kuch kehna hai. Ladka: Haan, chal chai pi lete hain! 😆☕",
"Pappu: Meri biwi ka pyaar kam ho gaya hai. Gappu: Kya hua? Pappu: Pehle mera mobile check karti thi, ab password change kar diya! 🤣📱",
"Teacher: Tumhare uniform mein kuchh galat hai. Student: Sir, mai to ghar se aise hi aya tha! 😆👔",
"Santa: Mujhe ek girlfriend chahiye. Banta: Bhai, pehle cycle chala le! 😜🚴‍♂️",
"Pappu: Mera dimaag nahi chal raha. Gappu: Chalne do, rukega to kharab ho jayega! 😅🧠",
"Santa: Ghar par mummy se panga mat lena. Banta: Kyu? Santa: Kyonki unke pass aakhri weapon hai, “Maa ki gaali”! 🤣💣",
"Doctor: Tumhe exercise ki zaroorat hai. Patient: Kaun si exercise, Doctor? Doctor: Bank se loan lekar chhupna! 😜💪",
"Pappu: Tu shaadi kab karega? Gappu: Jab ladki haan bolegi! 😅💍",
"Santa: Mujhe lagta hai mein bore ho raha hoon. Banta: Koi baat nahi, haan mein haan milata hoon! 😜😆",
"Teacher: Tum itna late kyun aaye? Student: Sir, sapne mein traffic tha! 😅🚦",
"Santa: Mujhe koi idea do. Banta: Bhai, sochna chhod de! 🤣🧠",
"Pappu: Tere dimaag mein kya chal raha hai? Gappu: Scooter ki chain! 😆🛵",
"Doctor: Tumhara health theek hai. Patient: Matlab, main ab bhi pareshan hoon! 😅🏥",
"Santa: Life ka sabse bada twist kya hai? Banta: Jab tum apni biwi se jeetne lagte ho! 😂💍",
"Biwi: Tum kab se mujhe dekh rahe ho? Pati: Jab se tum mere saamne ho! 😆👀",
"Doctor: Tumhari neend nahi poori ho rahi? Patient: Doctor, tumhare paas aur koi problem hai? 😅😴",
"Santa: Bhai, life boring hai. Banta: Kuchh naya kar, cycle ka gear badal! 🤣🚴‍♂️",
"Biwi: Tumne mujhe kabhi samjha nahi. Pati: Tumhe samajhne mein meri battery khatam ho gayi! 😅🔋",
"Santa: Mujhe lagta hai, meri biwi ka mood off hai. Banta: Kyu? Santa: Kyunki usne aaj sabzi banaayi thi! 😂🥒",
"Pappu: Mujhe lagta hai mein ajeeb hoon. Gappu: Bhai, tu special case hai! 😆🧐",
"Ladki: Tumhe dekh kar acha lagta hai. Ladka: Koi option nahi tha, isi liye dekha! 😂😜",
"Doctor: Tumhari yaadashit kamzor ho gayi hai. Patient: Tum kaun ho? 🤔😆",
"Teacher: Tumhare uniform mein kuchh galat hai. Student: Sir, mein to ghar se aise hi aya hoon! 😅👔",
"Santa: Mujhe ek girlfriend chahiye. Banta: Bhai, pehle cycle chala le! 🚴‍♂️😆",
"Pappu: Mera dimaag nahi chal raha. Gappu: Chalne de, rukega to kharab ho jayega! 😂🧠",
"Santa: Ghar par mummy se panga mat lena. Banta: Kyu? Santa: Kyonki unke pass aakhri weapon hai, “Maa ki gaali”! 🤣💣",
"Doctor: Tumhe exercise ki zaroorat hai. Patient: Kaun si exercise, Doctor? Doctor: Bank se loan lekar chhupna! 😜💪",
"Pappu: Tu shaadi kab karega? Gappu: Jab ladki haan bolegi! 😅💍",
"Santa: Mujhe lagta hai mein bore ho raha hoon. Banta: Koi baat nahi, haan mein haan milata hoon! 😂😆",
"Teacher: Tum itna late kyun aaye? Student: Sir, sapne mein traffic tha! 😆🚦",
"Santa: Mujhe koi idea do. Banta: Bhai, sochna chhod de! 🤣🧠",
"Pappu: Tere dimaag mein kya chal raha hai? Gappu: Scooter ki chain! 😅🛵",
"Doctor: Tumhara health theek hai. Patient: Matlab, main ab bhi pareshan hoon! 😆🏥",
"Santa: Life ka sabse bada twist kya hai? Banta: Jab tum apni biwi se jeetne lagte ho! 🤣💍",
"Biwi: Tum kab se mujhe dekh rahe ho? Pati: Jab se tum mere saamne ho! 😅👀",
"Doctor: Tumhari neend nahi poori ho rahi? Patient: Doctor, tumhare paas aur koi problem hai? 😆😴",
"Santa: Bhai, life boring hai. Banta: Kuchh naya kar, cycle ka gear badal! 😂🚴‍♂️",
"Biwi: Tumne mujhe kabhi samjha nahi. Pati: Tumhe samajhne mein meri battery khatam ho gayi! 😅🔋",
"Santa: Mujhe lagta hai, meri biwi ka mood off hai. Banta: Kyu? Santa: Kyunki usne aaj sabzi banaayi thi! 😆🥒",
"Pappu: Mujhe lagta hai mein ajeeb hoon. Gappu: Bhai, tu special case hai! 🤣🧐",
"Ladki: Tumhe dekh kar acha lagta hai. Ladka: Koi option nahi tha, isi liye dekha! 😂😆",
"Doctor: Tumhari yaadashit kamzor ho gayi hai. Patient: Tum kaun ho? 😅🤔",
"Pappu: Main kya karoon? Gappu: Jo karna hai kar lo, mujhe mat poochho! 😆🤷‍♂️",
"Biwi: Tumne jo mujhe diya tha, wo baap ban gaya hai. Pati: Kaun? Biwi: Tumhara charger, ab apne aap charge hone laga hai! 😂🔌",
"Teacher: Tumhara favorite subject kaunsa hai? Student: WhatsApp! 😆📚",
"Ladki: Tum meri yaadon mein rehte ho. Ladka: Mujhe pata hai, isi liye mein itna thak gaya hoon! 😅🧠",
"Biwi: Tumne mujhe khush nahi rakha. Pati: Aur tumne mujhe kuch aur rakha? 😂😆",
"Doctor: Tumhare health ke liye koi tension nahi hai. Patient: Doctor, meri Biwi ko bula lo! 🤣🏥",
"Ladki: Mujhe lagta hai ki tumhe kuch kehna hai. Ladka: Haan, chal chai pi lete hain! 😆☕",
"Pappu: Meri biwi ka pyaar kam ho gaya hai. Gappu: Kya hua? Pappu: Pehle mera mobile check karti thi, ab password change kar diya! 😂📱",
"Teacher: Tumhare uniform mein kuchh galat hai. Student: Sir, mein to ghar se aise hi aya tha! 😆👔",
"Santa: Mujhe ek girlfriend chahiye. Banta: Bhai, pehle cycle chala le! 😆🚴‍♂️",
"Pappu: Mera dimaag nahi chal raha. Gappu: Chalne de, rukega to kharab ho jayega! 😂🧠",
"Santa: Ghar par mummy se panga mat lena. Banta: Kyu? Santa: Kyonki unke pass aakhri weapon hai, “Maa ki gaali”! 🤣💣",
"Doctor: Tumhe exercise ki zaroorat hai. Patient: Kaun si exercise, Doctor? Doctor: Bank se loan lekar chhupna! 😆💪",
"Pappu: Tu shaadi kab karega? Gappu: Jab ladki haan bolegi! 😅💍",
"Santa: Mujhe lagta hai mein bore ho raha hoon. Banta: Koi baat nahi, haan mein haan milata hoon! 😂😆",
"Teacher: Tum itna late kyun aaye? Student: Sir, sapne mein traffic tha! 😅🚦",
"Santa: Mujhe koi idea do. Banta: Bhai, sochna chhod de! 🤣🧠",
"Pappu: Tere dimaag mein kya chal raha hai? Gappu: Scooter ki chain! 😆🛵",
"Doctor: Tumhara health theek hai. Patient: Matlab, main ab bhi pareshan hoon! 😆🏥",
"Santa: Life ka sabse bada twist kya hai? Banta: Jab tum apni biwi se jeetne lagte ho! 🤣💍",
"Biwi: Tum kab se mujhe dekh rahe ho? Pati: Jab se tum mere saamne ho! 😅👀",
"Doctor: Tumhari neend nahi poori ho rahi? Patient: Doctor, tumhare paas aur koi problem hai? 😆😴",
"Santa: Bhai, life boring hai. Banta: Kuchh naya kar, cycle ka gear badal! 😂🚴‍♂️",
"Biwi: Tumne mujhe kabhi samjha nahi. Pati: Tumhe samajhne mein meri battery khatam ho gayi! 😅🔋",
"Santa: Mujhe lagta hai, meri biwi ka mood off hai. Banta: Kyu? Santa: Kyunki usne aaj sabzi banaayi thi! 😆🥒",
"Pappu: Mujhe lagta hai mein ajeeb hoon. Gappu: Bhai, tu special case hai! 🤣🧐",
"Ladki: Tumhe dekh kar acha lagta hai. Ladka: Koi option nahi tha, isi liye dekha! 😂😆",
"Doctor: Tumhari yaadashit kamzor ho gayi hai. Patient: Tum kaun ho? 😅🤔",


    ],
    "positive": [
        "That’s amazing! I’m so happy for you! 😍", 
        "Yay! That’s wonderful to hear! 🌟", 
        "Awesome! Tell me more about it!",
        "Fantastic! You’re really on a roll today! 🎉",
        "I’m thrilled for you! Keep shining! ✨",
        "That’s great news! You deserve all the happiness! 💖"
    ],
    "negative": [
        "Oh no, I'm sorry to hear that. 😢", 
        "That sounds tough, I'm here for you. 💔", 
        "I wish I could give you a hug right now. 🌷",
        "I’m sorry you're going through this. Let me know if there's anything I can do. 🌈",
        "That’s really unfortunate. I hope things get better soon. 💪"
    ],
    "what_is_your_name": [
        "My name is Chiku! 🌟 What can I do for you today?",
        "I’m Chiku, your friendly chatbot! How can I assist you? 😊",
        "You can call me Chiku! 💖 What’s up?",
        "I’m Chiku, here to chat and keep you company! 💕",
        "Hi! I’m Chiku. How’s your day going? 😊"
    ]
  
}

const inappropriateWords = [
    "18+", "adult", "nsfw", "explicit", "xxx", "porn", "sex", "nude", "naked", "bdsm", "pornography"
];

const savageReplies = [
    "Seems like your vocabulary is on a permanent vacation.",
"Sorry, I don’t speak that language. Try using a dictionary.",
"Did you leave your manners at home, or are they just broken?",
"That’s a really interesting choice of words for someone who seems to lack a filter.",
"If you can’t keep it clean, maybe you should stick to texting your cat.",
"Your words are like a dumpster fire—unwanted and unpleasant.",
"Impressive! I didn’t know people still use such outdated language.",
"Is that your idea of being edgy, or is this your default setting?",
"Maybe you should consider a career in shock value. It’s clearly your talent.",
"Ever thought about investing in a thesaurus? It might help with your creativity.",
"Your vocabulary could use a little polishing—preferably with soap and water.",
"I’m sure there are places where that kind of talk is appreciated. This isn’t one of them.",
"If this is your best, I’d hate to see your worst.",
"Not everyone appreciates a dirty mind. Try keeping it clean.",
"Your words say a lot about you—mostly that you need a hobby.",
"If you’re trying to impress, you’re failing spectacularly.",
"I’d ask you to grow up, but it seems you’re already at full maturity.",
"Seems like someone skipped their manners class.",
"Sorry, I only engage in conversations that don’t sound like they belong on the dark web.",
"Your language is as outdated as your sense of humor.",
"I’m all for honesty, but there’s a line, and you’ve just crossed it.",
"I’d say keep it classy, but you clearly don’t know what that means.",
"Is that your idea of being controversial, or are you just naturally crass?",
"Maybe try speaking like a grown-up. It’s less of a challenge than it seems.",
"Have you ever heard of ‘respect’? Because you seem to be missing it.",
"Wow, did you come up with that yourself, or did you have help from the internet’s dark corners?",
"If this is your way of being provocative, you might want to rethink your approach.",
"Looks like you’ve confused rudeness with being bold.",
"Ever consider that your words might reflect poorly on you? Just a thought.",
"I didn’t realize we were having a competition for the worst language.",
"Your ability to use vulgar language is impressive. Too bad it’s not a desirable skill.",
"I didn’t know we were in a contest for who can be the most offensive.",
"If you can’t talk without being crude, maybe you should stick to talking to yourself.",
"You’re like a broken record of bad taste.",
"Wow, and I thought bad language was a thing of the past.",
"Maybe try using your words to build, not to destroy.",
"I’d rather not have a conversation that sounds like it’s from a late-night infomercial.",
"Ever tried expressing yourself without sounding like a bad sitcom?",
"If you’re trying to be shocking, congratulations, you’ve succeeded.",
"Could you use any more offensive language, or is this the limit?",
"Did someone forget to teach you about common decency?",
"If you think this is impressive, you might want to reconsider your standards.",
"I’m not sure if you’re being edgy or just plain rude.",
"Your language makes me wonder if you’ve ever had a real conversation.",
"Ever considered that being rude isn’t the same as being funny?",
"If your goal was to alienate everyone, you’ve succeeded beyond measure.",
"Impressive! You’ve mastered the art of offending people.",
"Maybe try talking like an adult. It’s a refreshing change.",
"I didn’t realize we were having a contest for the most vulgar language.",
"If you’re trying to be edgy, you’re missing the mark.",
"Does your vocabulary only have one setting: offensive?",
"Could you keep it PG for once? It’s not that hard.",
"Wow, someone really likes to test boundaries.",
"Is this what passes for humor in your world?",
"Maybe try a different approach. This one isn’t working.",
"I didn’t expect much, but that was a new low.",
"Can we have a conversation that doesn’t sound like a trashy movie script?",
"Sorry, but your language is as welcome as a skunk at a garden party.",
"Your words are as charming as a pile of trash.",
"Have you considered keeping your comments to yourself?",
"If that’s your best shot, it’s best you aim elsewhere.",
"Looks like someone missed the memo on respectful communication.",
"Ever heard the saying, ‘If you don’t have anything nice to say, don’t say anything at all?’",
"I’m all for free speech, but this isn’t the right forum.",
"If you think this makes you look cool, it’s quite the opposite.",
"Your language is a reflection of your lack of refinement.",
"I didn’t realize we were holding a competition for the most offensive comment.",
"Ever thought about expanding your vocabulary to include more than just swear words?",
"Is this your idea of a joke? Because it’s not landing well.",
"Maybe try expressing yourself in a way that doesn’t involve cursing.",
"Wow, your language is as creative as a broken record.",
"Impressive. I didn’t know people still spoke like that.",
"I didn’t realize you were auditioning for the role of ‘Most Offensive Person.’",
"Could you dial it back a notch? Your language is a bit much.",
"If you’re trying to shock me, you’ve succeeded. Too bad it’s not impressive.",
"Have you ever considered that your language might be a reflection of your intelligence?",
"Your choice of words is as appealing as a flat tire.",
"I’d rather not engage in a conversation that sounds like a bad episode of reality TV.",
"If this is your way of being bold, it’s falling flat.",
"Wow, that’s some creative vulgarity. Too bad it’s not useful.",
"Ever thought about using your words for something constructive?",
"Your language is as refreshing as a cactus in a desert.",
"Looks like you’re really committed to being offensive.",
"If this is your idea of humor, you might need a new hobby.",
"I didn’t realize we were having a contest for the most shocking language.",
"Could you try communicating without using expletives?",
"Your choice of words makes me wonder about your level of maturity.",
"Is this what passes for sophistication in your world?",
"Ever thought about engaging in a conversation that doesn’t involve insults?",
"Your language is as charming as a hurricane.",
"If that’s the best you can do, I’d rather not hear the worst.",
"Wow, someone really knows how to push boundaries.",
"I didn’t know we were in a competition for the worst choice of words.",
"Could you use a bit more discretion? Your language is quite abrasive.",
"Ever considered that being crude isn’t the same as being impressive?",
"Your words are like a bad joke—unwanted and awkward.",
"Maybe try expressing yourself in a way that doesn’t involve offensive language.",
"Your comments are as welcome as a skunk at a garden party.",
"If this is your way of being provocative, it’s not working.",
"Impressive! Your ability to be offensive is unparalleled.",
"I didn’t realize we were holding a contest for the most vulgar comment.",
"Could you try speaking like a grown-up? It might be more effective.",
"Your language is as appealing as a pile of garbage.",
"Ever thought about engaging in a conversation that doesn’t involve foul language?",
"Wow, that’s some impressive use of offensive language. Too bad it’s not valued here.",
"Your words are as refreshing as a winter coat in summer.",
"If that’s your best, it’s best you keep it to yourself.",
"Looks like you’re really good at being inappropriate.",
"Is this your idea of being edgy? Because it’s not working.",
"Have you ever considered that your language might reflect poorly on you?",
"Your choice of words is as pleasant as a root canal.",
"I’d rather not engage in a conversation that sounds like it’s from a late-night infomercial.",
"Maybe try using language that doesn’t sound like it’s from a bad sitcom.",
"Ever thought about expressing yourself without resorting to vulgarity?",
"Your language makes me wonder if you’ve ever had a real conversation.",
"Could you keep it clean for once? It’s not that hard.",
"Impressive! Your ability to offend is truly a talent.",
"Looks like you’ve mastered the art of being crass.",
"Is this your way of being controversial, or are you just naturally rude?",
"Your words say a lot about you—mostly that you need a hobby.",
"Sorry, but your choice of language is as pleasant as a toothache.",
"Ever thought about keeping your comments to yourself?",
];

function getRandomReply() {
    const randomIndex = Math.floor(Math.random() * savageReplies.length);
    return savageReplies[randomIndex];
}


function getRandomResponse(responseArray) {
    return responseArray[Math.floor(Math.random() * responseArray.length)];
}

function containsInappropriateContent(text) {
    return inappropriateWords.some(word => text.includes(word));
}


function addMessage(message, sender) {
    const chatbox = document.getElementById("chatbox");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function determineUserSentiment(message) {
    const positiveWords = ["good", "happy", "great", "awesome", "love", "fantastic", "amazing", "wonderful"];
    const negativeWords = ["bad", "sad", "angry", "upset", "hate", "tough", "unfortunate"];
    
    userSentiment = "neutral";  

    positiveWords.forEach(word => {
        if (message.includes(word)) {
            userSentiment = "positive";
        }
    });

    negativeWords.forEach(word => {
        if (message.includes(word)) {
            userSentiment = "negative";
        }
    });
}

function handleAcknowledgement() {
    if (previousBotMessage.includes("I’m fine") || previousBotMessage.includes("How are you")) {
        return "I'm glad you know! 😊 How can I help you further?";
    } else if (previousBotMessage.includes("My name is Chiku") || previousBotMessage.includes("You can call me Chiku")) {
        return "Yes, that's right! 🌟 Is there anything else you'd like to know?";
    } else {
        return "Got it! 😄 Anything else on your mind?";
    }
}

function containsInappropriateContent(message) {
    return inappropriateWords.some(word => message.includes(word));
}



function generateResponse(message) {
    let response = "";

    try {
  
        const lowerCaseMessage = message.toLowerCase();

        if (containsInappropriateContent(lowerCaseMessage)) {
            response = getRandomReply();  
        } else {
            if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hola")) {
                response = responses["greetings"][Math.floor(Math.random() * responses["greetings"].length)];
            } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
                response = responses["farewell"][Math.floor(Math.random() * responses["farewell"].length)];
            } else if (lowerCaseMessage.includes("how are you")) {
                response = responses["how_are_you"][Math.floor(Math.random() * responses["how_are_you"].length)];
            } else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
                response = responses["thank_you"][Math.floor(Math.random() * responses["thank_you"].length)];
            } else if (lowerCaseMessage.includes("what is your name") || lowerCaseMessage.includes("what's your name") || lowerCaseMessage.includes("who are you") || lowerCaseMessage.includes("whats your name")) {
                response = responses["what_is_your_name"][Math.floor(Math.random() * responses["what_is_your_name"].length)];
            } else if (lowerCaseMessage.includes("i love you")) {
                response = responses["i love you"][Math.floor(Math.random() * responses["i love you"].length)];
            } else if (lowerCaseMessage.includes("i know")) {
                response = handleAcknowledgement();
            } else {
                for (let key in customResponses) {
                    if (lowerCaseMessage.includes(key.toLowerCase())) {
                        response = getRandomResponse(customResponses[key]);
                        previousBotMessage = response;
                        return response;
                    }
                }
                response = responses["default"][Math.floor(Math.random() * responses["default"].length)];
            }

            if (conversationHistory.length > 0) {
                const lastBotMessage = conversationHistory[conversationHistory.length - 1].message;
                if (lastBotMessage.includes("Sorry") || lastBotMessage.includes("tough")) {
                    response += " But I'm sure things will get better soon! 🌈";
                } else if (lastBotMessage.includes("awesome") || lastBotMessage.includes("happy")) {
                    response += " You're really on a roll today! Keep it up! 💪";
                }
            }
        }

    } catch (error) {
        console.error("Error generating response:", error);
        response = "Oops! I’m having trouble processing that. Can you try saying it differently?";
    }

    previousBotMessage = response;
    return response;
}



document.getElementById('input-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const userMessageInput = document.getElementById('user-message');
    const userMessage = userMessageInput.value;
    if (!userMessage.trim()) return;

    userMessageInput.value = '';

    const messagesContainer = document.getElementById('messages');

    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('message', 'user-message');
    userMessageDiv.innerHTML = `<div><div class="user-label">You</div>${userMessage}</div>`;
    messagesContainer.appendChild(userMessageDiv);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('message', 'bot-message', 'typing-indicator');
    typingIndicator.textContent = "Chiku is typing.....";
    messagesContainer.appendChild(typingIndicator);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    userMessageInput.focus();

    await new Promise(resolve => setTimeout(resolve, 2000)); // this is typing indicator speed

    messagesContainer.removeChild(typingIndicator);
  
    try {
        const botMessageDiv = document.createElement('div');
        botMessageDiv.classList.add('message', 'bot-message');

        botMessageDiv.innerHTML = `<div><div class="bot-label">Chiku</div><div class="bot-response"></div></div>`;
        
        messagesContainer.appendChild(botMessageDiv);

        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        const botResponseDiv = botMessageDiv.querySelector('.bot-response');
        const botResponseText = generateResponse(userMessage);
        let currentCharIndex = 0;

        const typeWriterEffect = setInterval(() => {
            botResponseDiv.textContent += botResponseText[currentCharIndex];
            currentCharIndex++;

            if (currentCharIndex === botResponseText.length) {
                clearInterval(typeWriterEffect);
            }

            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 50); 

        userMessageInput.focus();
    } catch (error) {
        console.error('Error fetching the API:', error);
    }
});




