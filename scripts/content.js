function performLoopAndNavigate(websites) {
    const anchors = document.getElementsByTagName("a");
    let counter = 0;

    if (window.location.href === "https://old.reddit.com/r/all/??") {
        for (let i = anchors.length - 1; i >= 0; i--) {
            if (anchors[i].innerText === 'hide') {
                const closestTopMatterDiv = anchors[i].closest("div.top-matter");
                if (closestTopMatterDiv) {
                    const titleP = closestTopMatterDiv.querySelector("p.title");
                    const nestedAnchor = titleP ? titleP.querySelector("a") : null;
                    if (nestedAnchor) {
                        // console.log(i, nestedAnchor.innerText)
                        for (const word of bannedWords) {
                            if (nestedAnchor.innerText.toLowerCase().includes(word)) {
                                setTimeout(function () {
                                    console.log(i, anchors[i].parentElement)
                                    anchors[i].click();
                                }, counter++ * 1000);
                                break;
                            }
                        }
                    }
                }
            }
        }

    } else {
        for (let i = anchors.length - 1; i >= 0; i--) {
            if (anchors[i].innerText === 'hide') {
                setTimeout(function () {
                    console.log(i, anchors[i].parentElement)
                    anchors[i].click();
                }, counter++ * 1000);
            }
        }
    }

    let nextSiteIndex = websites.indexOf(window.location.href) + 1;
    nextSiteIndex = nextSiteIndex < websites.length ? nextSiteIndex : 0;

    if (nextSiteIndex < websites.length) {
        setTimeout(function () {
            window.location.href = websites[nextSiteIndex];
        }, counter++ * 1000);
    }
}

const bannedWords = [
    "ukrain",
    'russ',
    'lays off',
    'layoff'
]

const subredditsToHide = [
    "https://old.reddit.com/r/all/??",
    "https://old.reddit.com/r/197/??",
    "https://old.reddit.com/r/2meirl4meirl/??",
    "https://old.reddit.com/r/absolutelynotme_irl/??",
    "https://old.reddit.com/r/ActualPublicFreakouts/??",
    "https://old.reddit.com/r/AdviceAnimals/??",
    "https://old.reddit.com/r/AITAH/??",
    "https://old.reddit.com/r/AmItheAsshole/??",
    "https://old.reddit.com/r/anime_irl/??",
    "https://old.reddit.com/r/animememes/??",
    "https://old.reddit.com/r/Animemes/??",
    "https://old.reddit.com/r/antiwork/??",
    "https://old.reddit.com/r/atheism/??",
    "https://old.reddit.com/r/awfuleverything/??",
    "https://old.reddit.com/r/badroommates/??",
    "https://old.reddit.com/r/BatmanArkham/??",
    "https://old.reddit.com/r/bi_irl/??",
    "https://old.reddit.com/r/BikiniBottomTwitter/??",
    "https://old.reddit.com/r/BoomersBeingFools/??",
    "https://old.reddit.com/r/BrandNewSentence/??",
    "https://old.reddit.com/r/BravoRealHousewives/??",
    "https://old.reddit.com/r/ChainsawMan/??",
    "https://old.reddit.com/r/clevercomebacks/??",
    "https://old.reddit.com/r/CombatFootage/??",
    "https://old.reddit.com/r/comedyheaven/??",
    "https://old.reddit.com/r/confidentlyincorrect/??",
    "https://old.reddit.com/r/conservativeterrorism/??",
    "https://old.reddit.com/r/ContagiousLaughter/??",
    "https://old.reddit.com/r/CrappyDesign/??",
    "https://old.reddit.com/r/dankmemes/??",
    "https://old.reddit.com/r/Deltarune/??",
    "https://old.reddit.com/r/depressionmeals/??",
    "https://old.reddit.com/r/distressingmemes/??",
    "https://old.reddit.com/r/DiWHY/??",
    "https://old.reddit.com/r/egg_irl/??",
    "https://old.reddit.com/r/EnoughMuskSpam/??",
    "https://old.reddit.com/r/facepalm/??",
    "https://old.reddit.com/r/FluentInFinance/??",
    "https://old.reddit.com/r/formuladank/??",
    "https://old.reddit.com/r/FuckYouKaren/??",
    "https://old.reddit.com/r/funny/??",
    "https://old.reddit.com/r/FunnyandSad/??",
    "https://old.reddit.com/r/Funnymemes/??",
    "https://old.reddit.com/r/furry_irl/??",
    "https://old.reddit.com/r/Futurology/??",
    "https://old.reddit.com/r/Gamingcirclejerk/??",
    "https://old.reddit.com/r/Genshin_Impact/??",
    "https://old.reddit.com/r/Genshin_Impact_Leaks/??",
    "https://old.reddit.com/r/GreenAndPleasant/??",
    "https://old.reddit.com/r/hmmm/??",
    "https://old.reddit.com/r/hockey/??",
    "https://old.reddit.com/r/Hololive/??",
    "https://old.reddit.com/r/HolUp/??",
    "https://old.reddit.com/r/HonkaiStarRail/??",
    "https://old.reddit.com/r/HonkaiStarRail_leaks/??",
    "https://old.reddit.com/r/HumansBeingBros/??",
    "https://old.reddit.com/r/iamatotalpieceofshit/??",
    "https://old.reddit.com/r/IdiotsInCars/??",
    "https://old.reddit.com/r/ImTheMainCharacter/??",
    "https://old.reddit.com/r/insanepeoplefacebook/??",
    "https://old.reddit.com/r/Instagramreality/??",
    "https://old.reddit.com/r/JoeRogan/??",
    "https://old.reddit.com/r/Jokes/??",
    "https://old.reddit.com/r/Kanye/??",
    "https://old.reddit.com/r/LateStageCapitalism/??",
    "https://old.reddit.com/r/LeagueOfMemes/??",
    "https://old.reddit.com/r/LeopardsAteMyFace/??",
    "https://old.reddit.com/r/lgbt/??",
    "https://old.reddit.com/r/lies/??",
    "https://old.reddit.com/r/MadeMeSmile/??",
    "https://old.reddit.com/r/maybemaybemaybe/??",
    "https://old.reddit.com/r/me_irlgbt/??",
    "https://old.reddit.com/r/meirl/??",
    "https://old.reddit.com/r/me_irl/??",
    "https://old.reddit.com/r/meme/??",
    "https://old.reddit.com/r/memes/??",
    "https://old.reddit.com/r/MemeVideos/??",
    "https://old.reddit.com/r/mildlyinfuriating/??",
    "https://old.reddit.com/r/MoldyMemes/??",
    "https://old.reddit.com/r/MurderedByWords/??",
    "https://old.reddit.com/r/nba/??",
    "https://old.reddit.com/r/nbacirclejerk/??",
    "https://old.reddit.com/r/NewsOfTheStupid/??",
    "https://old.reddit.com/r/NoahGetTheBoat/??",
    "https://old.reddit.com/r/nope/??",
    "https://old.reddit.com/r/NotHowGirlsWork/??",
    "https://old.reddit.com/r/notinteresting/??",
    "https://old.reddit.com/r/notliketheothergirls/??",
    "https://old.reddit.com/r/OnePiece/??",
    "https://old.reddit.com/r/OnePunchMan/??",
    "https://old.reddit.com/r/PeopleFuckingDying/??",
    "https://old.reddit.com/r/perfectlycutscreams/??",
    "https://old.reddit.com/r/pettyrevenge/??",
    "https://old.reddit.com/r/Political_Revolution/??",
    "https://old.reddit.com/r/PoliticalHumor/??",
    "https://old.reddit.com/r/politics/??",
    "https://old.reddit.com/r/PublicFreakout/??",
    "https://old.reddit.com/r/rareinsults/??",
    "https://old.reddit.com/r/recruitinghell/??",
    "https://old.reddit.com/r/relationship_advice/??",
    "https://old.reddit.com/r/ShitPostCrusaders/??",
    "https://old.reddit.com/r/shitposting/??",
    "https://old.reddit.com/r/shittymoviedetails/??",
    "https://old.reddit.com/r/SipsTea/??",
    "https://old.reddit.com/r/StupidFood/??",
    "https://old.reddit.com/r/Superstonk/??",
    "https://old.reddit.com/r/Teachers/??",
    "https://old.reddit.com/r/technicallythetruth/??",
    "https://old.reddit.com/r/teenagers/??",
    "https://old.reddit.com/r/terriblefacebookmemes/??",
    "https://old.reddit.com/r/texts/??",
    "https://old.reddit.com/r/therewasanattempt/??",
    "https://old.reddit.com/r/TheRightCantMeme/??",
    "https://old.reddit.com/r/tifu/??",
    "https://old.reddit.com/r/TIHI/??",
    "https://old.reddit.com/r/TikTokCringe/??",
    "https://old.reddit.com/r/Tinder/??",
    "https://old.reddit.com/r/ToiletPaperUSA/??",
    "https://old.reddit.com/r/trans/??",
    "https://old.reddit.com/r/TrueOffMyChest/??",
    "https://old.reddit.com/r/TwoSentenceHorror/??",
    "https://old.reddit.com/r/TwoXChromosomes/??",
    "https://old.reddit.com/r/UFOs/??",
    "https://old.reddit.com/r/ukraine/??",
    "https://old.reddit.com/r/UkraineWarVideoReport/??",
    "https://old.reddit.com/r/unpopularopinion/??",
    "https://old.reddit.com/r/UpliftingNews/??",
    "https://old.reddit.com/r/WatchPeopleDieInside/??",
    "https://old.reddit.com/r/Wellthatsucks/??",
    "https://old.reddit.com/r/Whatcouldgowrong/??",
    "https://old.reddit.com/r/whenthe/??",
    "https://old.reddit.com/r/WhitePeopleTwitter/??",
    "https://old.reddit.com/r/wholesomememes/??",
    "https://old.reddit.com/r/WorkReform/??",
    "https://old.reddit.com/r/WTF/??",
    "https://old.reddit.com/r/yesyesyesyesno/"
];

performLoopAndNavigate(subredditsToHide);
