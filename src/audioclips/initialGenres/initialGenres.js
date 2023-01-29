// import { v4 as uuidv4 } from "uuid";

// const URL_PLAYLISTS = "https://63ce4f4c6d27349c2b6afb94.mockapi.io/playlists";

// fetch(URL_PLAYLISTS)
//     .then((res) => res.json())
//     .then((arr) => console.log(arr));

// export const initialGenres = [
//     {
//         id: "edc0d180-c435-44dd-b649-88ed9a72f984",
//         title: "Made For You",
//         playlistTitle: "Made For You",
//         background: "#1E3264",
//         playlistImg:
//             "https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe",
//         playlists: [
//             {
//                 id: "071e3c21-713d-4f0f-bc9f-792d9fdba806",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576",
//                 playlistName: "Alan Walker",
//                 playlistDescription: "Alan Walker",
//                 tracks: [
//                     {
//                         title: "Sing me to sleep",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3",
//                         id: 0,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
//                     },
//                     {
//                         title: "Fade-NCS Release",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3",
//                         id: 1,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
//                     },
//                     {
//                         title: "She-NCS Release",
//                         author: "Andromedik",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3",
//                         id: 2,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2737b8d8ca1a8e14506c8f35233",
//                     },
//                 ],
//             },
//             {
//                 id: "edee019-f6f9-49f8-a442-d0d50016b2ce",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6",
//                 playlistName: "Andromedik",
//                 playlistDescription: "Andromedik",
//                 tracks: [
//                     {
//                         title: "About you-NCS Release",
//                         author: "Ascence",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3",
//                         id: 3,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27335ca35166aba974dd2dd29a2",
//                     },
//                     {
//                         title: "On & On (feat. Daniel Levi) [NCS Release]",
//                         author: "Cartoon",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3",
//                         id: 4,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
//                     },
//                     {
//                         title: "Castle [NCS Release]",
//                         author: "Clarx & Harddope",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3",
//                         id: 5,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
//                     },
//                 ],
//             },
//             {
//                 id: "965ea829-d2d2-4051-9053-8a9839201eb2",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb65d82d90b55b4dd3cbb2efd2",
//                 playlistName: "Cartoon",
//                 playlistDescription: "Cartoon",
//                 tracks: [
//                     {
//                         title: "Invincible [NCS Release]",
//                         author: "DEAF KEV ",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3",
//                         id: 6,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27362a57823eced1cb4fd93b2c1",
//                     },
//                     {
//                         title: " Blank [NCS Release]",
//                         author: "Disfigure",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3",
//                         id: 7,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
//                     },
//                     {
//                         title: "Nekozilla [NCS Release]",
//                         author: "Different Heaven",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
//                         id: 8,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27309065005b0fbfc4b320d05de",
//                     },
//                 ],
//             },
//             {
//                 id: "c6ab6c6-c17c-4c1d-a5f3-8c9d52a1a638",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5ebd546aecf1aac2633551f4c26",
//                 playlistName: "Sabrina Carpenter",
//                 playlistDescription: "Sabrina Carpenter",
//                 tracks: [
//                     {
//                         title: "Savannah (feat. Philly K) [NCS Release]",
//                         author: "Diviners",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3",
//                         id: 9,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273b536cfb98c74558db48f8a46",
//                     },
//                     {
//                         title: "Cloud 9 [NCS Release]",
//                         author: "Itro & Tobu",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741836018974740/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3",
//                         id: 10,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273d6fd719531afda5f9cc0e248",
//                     },
//                     {
//                         title: "Sky High [NCS Release]",
//                         author: "Elektronomia",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3",
//                         id: 11,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba",
//                     },
//                 ],
//             },
//             {
//                 id: "b187d8f2-ea27-404c-a141-c338cd0c6a0c",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5ebf2855e25f1d9c8a20bcc85ae",
//                 playlistName: "DJ Snake ft Justin Bieber",
//                 playlistDescription: "DJ Snake ft Justin Bieber",
//                 tracks: [
//                     {
//                         title: "Where'd You Go (feat. Luna Lark) [NCS Release]",
//                         author: "Julius Dreisig",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3",
//                         id: 12,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273100fb4649eae80922bf1acbf",
//                     },
//                     {
//                         title: "Island [NCS BEST OF]",
//                         author: "Jarico",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3",
//                         id: 13,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273058c78826c35cbc3d03516c1",
//                     },
//                     {
//                         title: "Heroes Tonight (feat. Johnning) [NCS BEST OF]",
//                         author: "Janji",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741837385793556/Janji_-_Heroes_Tonight_feat._Johnning_NCS_ReleaMP3_160K.mp3",
//                         id: 14,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2739b07b787123fe99fffc9c789",
//                     },
//                 ],
//             },
//             {
//                 id: "f42defb6-de56-4c70-a8f4-bc3def2a1bd2",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5ebec1cd67f4c17468f335206eb",
//                 playlistName: "Demi Lovato",
//                 playlistDescription: "Demi Lovato",
//                 tracks: [
//                     {
//                         title: "Landscape (Vlog No Copyright Music)",
//                         author: "Janji",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741839517024256/Jarico_-_Landscape_NCS_BEST_OFMP3_160K.mp3",
//                         id: 15,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27328007758bd0a5ffb1a07abeb",
//                     },
//                     {
//                         title: "Chasing Dreams [NCS Release]",
//                         author: "Jim Yosef & Valentina Franco",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741840136994846/Jim_Yosef___Valentina_Franco_-_Chasing_Dreams_NCSMP3_160K.mp3",
//                         id: 16,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273c14d955611b72addabd9163c",
//                     },
//                     {
//                         title: "Link [NCS Release]",
//                         author: "Jim Yosef",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741840224813096/Jim_Yosef_-_Link_NCS_ReleaseMP3_160K.mp3",
//                         id: 17,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2734f1608584777e92bddd5c904",
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "059a2fe5-f3c6-41b4-870d-030d4747e2ab",
//         title: "Rock",
//         playlistTitle: "Rock",
//         background: "#E91429",
//         playlistImg:
//             "https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e",
//         playlists: [
//             {
//                 id: "6ab4f3bc-4313-4e24-82c3-d059cb55301a",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b273b44de5b9f5eba409dfa753e6",
//                 playlistName: "K-391",
//                 playlistDescription: "K-391",
//                 tracks: [
//                     {
//                         title: "Symbolism [NCS Release]",
//                         author: "Electro-Light",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741841010065418/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3",
//                         id: 18,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273b44de5b9f5eba409dfa753e6",
//                     },
//                     {
//                         title: "Invisible [NCS Release]",
//                         author: "Julius Dreisig & Zeus X Crona",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741873582899230/Julius_Dreisig___Zeus_X_Crona_-_Invisible_NCS_RelMP3_160K.mp3",
//                         id: 19,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27391b709ced968e29e8f00dfe3",
//                     },
//                     {
//                         title: "Earth [NCS Release]",
//                         author: "K-391",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741894939901992/K-391_-_Earth_NCS_ReleaseMP3_160K.mp3",
//                         id: 20,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2732ea7097370b211b8213cdb5a",
//                     },
//                 ],
//             },
//             {
//                 id: "2db2030-d53b-42c3-a892-6739a605f08f",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b273cac40eaa1c17e52e45a8098f",
//                 playlistName: "Kadenza",
//                 playlistDescription: "Kadenza",
//                 tracks: [
//                     {
//                         title: "Harpuia [NCS Release]",
//                         author: "Kadenza",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741906344869928/Kadenza_-_Harpuia_NCS_ReleaseMP3_160K.mp3",
//                         id: 21,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273cac40eaa1c17e52e45a8098f",
//                     },
//                     {
//                         title: "Dreams [NCS Release]",
//                         author: "Lost Sky",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741919178653716/Lost_Sky_-_Dreams_NCS_ReleaseMP3_160K.mp3",
//                         id: 22,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273eb4d7af8109e201a4d438e02",
//                     },
//                     {
//                         title: "Fearless pt.II (feat. Chris Linton) [NCS Release]",
//                         author: "Lost Sky",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741949998399572/Lost_Sky_-_Fearless_pt.II_feat._Chris_Linton_NCMP3_160K.mp3",
//                         id: 23,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2733be40769b1c2361cea9f0843",
//                     },
//                 ],
//             },
//             {
//                 id: "dccbe5c2-5df3-42e3-9a1f-43a8fa636742",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b273cec7c8ebb684882dbaf476f5",
//                 playlistName: "Sub Urban",
//                 playlistDescription: "Sub Urban",
//                 tracks: [
//                     {
//                         title: "Ark [NCS Release]",
//                         author: "Ship Wrek & Zookeepers",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741988191338526/Ship_Wrek___Zookeepers_-_Ark_NCS_ReleaseMP3_160K.mp3",
//                         id: 24,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27303c03da08efb9051d8fae5d5",
//                     },
//                     {
//                         title: "Where We Started (feat. Jex) [NCS Release]",
//                         author: "Lost Sky",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741989177524264/Lost_Sky_-_Where_We_Started_feat._Jex_NCS_ReleaMP3_160K.mp3",
//                         id: 25,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273a61f22690660bd5264495524",
//                     },
//                     {
//                         title: "Cradles [NCS Release]",
//                         author: "Sub Urban",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775741999978250250/Sub_Urban_-_Cradles_NCS_ReleaseMP3_160K.mp3",
//                         id: 26,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273cec7c8ebb684882dbaf476f5",
//                     },
//                 ],
//             },
//             {
//                 id: "0130ad3c-33b6-4ca3-b9b1-f0ae59b6620b",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b27361cb41224d1cc9dd052a5dba",
//                 playlistName: "Valence",
//                 playlistDescription: "Valence",
//                 tracks: [
//                     {
//                         title: "Feel Good [NCS Release]",
//                         author: "Syn Cole",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775742022085771278/Syn_Cole_-_Feel_Good_NCS_ReleaseMP3_160K.mp3",
//                         id: 27,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2736362397987db1fbf17f3d9b5",
//                     },
//                     {
//                         title: "Why Do I? (feat. Bri Tolani) [NCS",
//                         author: "Unknown Brain",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775742053337268224/Unknown_Brain_-_Why_Do_I__feat._Bri_Tolani_NCSMP3_160K.mp3",
//                         id: 28,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273c1d2f3c457d0ae59a7d7e4ce",
//                     },
//                     {
//                         title: "Infinite [NCS Release]",
//                         author: "Valence",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775742064893755402/Valence_-_Infinite_NCS_ReleaseMP3_160K.mp3",
//                         id: 29,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27361cb41224d1cc9dd052a5dba",
//                     },
//                 ],
//             },
//             {
//                 id: "437da7cc-4c26-4d71-92b7-8a7f972e769a",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b273daf19986ce2c148768f5c362",
//                 playlistName: "Warriyo",
//                 playlistDescription: "Warriyo",
//                 tracks: [
//                     {
//                         title: "Mortals (feat. Laura Brehm) [NCS Release]",
//                         author: "Warriyo",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/775742084321509437/Warriyo_-_Mortals_feat._Laura_Brehm_NCS_ReleaseMP3_160K.mp3",
//                         id: 30,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273daf19986ce2c148768f5c362",
//                     },
//                     {
//                         title: "Alone",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782126454690938890/Alan_Walker_-_AloneMP3_128K.mp3",
//                         id: 31,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9",
//                     },
//                     {
//                         title: "Look At Her Now",
//                         author: "Selena Gomez",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782128984070029322/Selena_Gomez_-_Look_At_Her_Now_Official_Music_VidMP3_128K.mp3",
//                         id: 32,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2732abcc266597eb46f897a8666",
//                     },
//                 ],
//             },
//             {
//                 id: "44309276-3c8f-4feb-bc5e-8d930ea2e6cf",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67616d0000b27308e30ab6a058429303d75876",
//                 playlistName: "Quavo",
//                 playlistDescription: "Quavo",
//                 tracks: [
//                     {
//                         title: "As Long As You Love Me",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/836516032620920833/928662227601457242/As_Long_As_You_Love_Me_-_Backstreet_Boys_Lyrics_.mp3",
//                         id: 81,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2736c20c4638a558132ba95bc39",
//                     },
//                     {
//                         title: "Confident",
//                         author: "Justin Bieber ft. Chance The Rapper",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130398385143818/Justin_Bieber_-_Confident_ft._Chance_The_Rapper_OMP3_160K.mp3",
//                         id: 82,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27358ae8fddecbd2630005409c9",
//                     },
//                     {
//                         title: "Intentions",
//                         author: "Justin Bieber ft. Quavo",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130437514067998/Justin_Bieber_-_Intentions_ft._Quavo_Official_VidMP3_160K.mp3",
//                         id: 83,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27308e30ab6a058429303d75876",
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "874caa4f-a440-40f9-9535-cfbba1956363",
//         title: "Rap",
//         playlistTitle: "Rap",
//         background: "#BC5900",
//         playlistImg:
//             "https://i.scdn.co/image/ab67fb8200005caf7e11c8413dc33c00740579c1",
//         playlists: [
//             {
//                 id: "b41b9a0d-ddbb-4ffe-a6ba-315134846275",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb7a487027eb0c10af725d5410",
//                 playlistName: "Clean Bandit",
//                 playlistDescription: "Clean Bandit",
//                 tracks: [
//                     {
//                         title: "Rockabye",
//                         author: "Clean Bandit",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130262342893618/Clean_Bandit_-_Rockabye_feat._Sean_Paul___Anne-MaMP3_160K.mp3",
//                         id: 78,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2731431c3bdf16aa99f71799d95",
//                     },
//                     {
//                         title: "Blank Space",
//                         author: "Taylor Swift",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130294697885696/Taylor_Swift_-_Blank_SpaceMP3_160K.mp3",
//                         id: 79,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27352b2a3824413eefe9e33817a",
//                     },
//                     {
//                         title: "What Do You Mean",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130340311203840/Justin_Bieber_-_What_Do_You_Mean__Official_MusicMP3_160K.mp3",
//                         id: 80,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
//                     },
//                 ],
//             },
//             {
//                 id: "bf8a12b4-f245-43bc-a72b-b3eec65ba56d",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb82a5d58059f81867b871d8b6",
//                 playlistName: "BTS",
//                 playlistDescription: "BTS",
//                 tracks: [
//                     {
//                         title: "Together",
//                         author: "Marshmello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130204519694336/Marshmello_-_Together_Official_Music_VideoMP3_160K.mp3",
//                         id: 75,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273ef5fa52beccb124c5f8da8d0",
//                     },
//                     {
//                         title: "Come & Get It",
//                         author: "Selena Gomez",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130215966605332/Selena_Gomez_-_Come___Get_ItMP3_128K.mp3",
//                         id: 76,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273cb16227d90152c2a5022bba1",
//                     },
//                     {
//                         title: "Boy With Luv",
//                         author: "BTS",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130258811289620/BTS____Boy_With_Luv_feat._HalMP3_160K.mp3",
//                         id: 77,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27318d0ed4f969b376893f9a38f",
//                     },
//                 ],
//             },
//             {
//                 id: "96aebedd-25a7-43f9-a752-1461fd50d933",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eba5205abffd84341e5bace828",
//                 playlistName: "Selena Gomez",
//                 playlistDescription: "Selena Gomez",
//                 tracks: [
//                     {
//                         title: "\u00c3\u2030chame La Culpa",
//                         author: "Luis Fonsi, Demi Lovato",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129660301279252/Luis_Fonsi__Demi_Lovato_-_Echame_La_Culpa_Video_OMP3_128K.mp3",
//                         id: 42,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2736be844b5d2fc0bf743fd7647",
//                     },
//                     {
//                         title: "Slow Down",
//                         author: "Selena Gomez",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129669578424330/Selena_Gomez_-_Slow_Down_OfficialMP3_128K.mp3",
//                         id: 43,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512",
//                     },
//                     {
//                         title: "On my Way",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129671055605760/Alan_Walker__Sabrina_Carpenter___Farruko_-_On_MyMP3_128K.mp3",
//                         id: 44,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273d2aaf635815c265aa1ecdecc",
//                     },
//                 ],
//             },
//             {
//                 id: "d49c12bc-f12b-4af0-8648-33e67f0212e8",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36",
//                 playlistName: "Ludacris",
//                 playlistDescription: "Ludacris",
//                 tracks: [
//                     {
//                         title: "Summer",
//                         author: "Marshmello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129702650773544/Marshmello_-_Summer_Official_Music_Video_with_LeMP3_160K.mp3",
//                         id: 45,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273a111c87c210cc9bff93948bd",
//                     },
//                     {
//                         title: "Can't Blame a Girl for Trying",
//                         author: "Sabrina Carpenter",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129754987692082/Sabrina_Carpenter_-_Can_t_Blame_a_Girl_for_TryingMP3_160K.mp3",
//                         id: 46,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2735d9a77afd5c144581be1e74e",
//                     },
//                     {
//                         title: "Baby",
//                         author: "Justin Bieber ft Ludacris",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129781373272084/Justin_Bieber_-_Baby_ft._Ludacris_Official_MusicMP3_128K.mp3",
//                         id: 47,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273629dc9e2e3bc20bbd7d92e4a",
//                     },
//                 ],
//             },
//             {
//                 id: "aa02a6af-00b9-45d2-866e-b75b6e139034",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb894f1e165ee9c04daa82a5b6",
//                 playlistName: "Charlie Puth",
//                 playlistDescription: "Charlie Puth",
//                 tracks: [
//                     {
//                         title: "Love You Like a Love Song",
//                         author: "Selena Gomez",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129797354618880/Selena_Gomez___The_Scene_-_Love_You_Like_A_Love_SoMP3_128K.mp3",
//                         id: 48,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2731c8193de8d62b2ffa49a09db",
//                     },
//                     {
//                         title: "We don't talk anymore",
//                         author: "Charlie Puth",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129797403770900/Charlie_Puth_-_We_Don_t_Talk_Anymore_feat._SelenaMP3_128K.mp3",
//                         id: 49,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273633a2d775747bccfbcb17a45",
//                     },
//                     {
//                         title: "Despacito",
//                         author: "Justin Bieber & Luis foni ",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129852181381121/Justin_Bieber_Despacito_Lyrics_--_ft._Luis_FonMP3_128K.mp3",
//                         id: 50,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
//                     },
//                 ],
//             },
//             {
//                 id: "b1738e7a-8248-4517-b3e7-56ca601edfc9",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb288ac05481cedc5bddb5b11b",
//                 playlistName: "Maroon 5",
//                 playlistDescription: "Maroon 5",
//                 tracks: [
//                     {
//                         title: "Yummy",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129879637950464/Justin_Bieber_-_Yummy_Official_VideoMP3_128K.mp3",
//                         id: 51,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2737fe4a82a08c4f0decbeddbc6",
//                     },
//                     {
//                         title: "PLAY",
//                         author: "Alan Walker ft Tungevaag",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129886810603530/Alan_Walker__K-391__Tungevaag__Mangoo_-_PLAY_AlanMP3_160K.mp3",
//                         id: 52,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2733899712512f50a8d9e01e951",
//                     },
//                     {
//                         title: "Girls Like You",
//                         author: "Maroon 5",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129896729214982/Maroon_5_-_Girls_Like_You_Lyrics_ft._Cardi_BMP3_128K.mp3",
//                         id: 53,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273deae7d931928fc1543e70203",
//                     },
//                 ],
//             },
//         ],
//     },
//     {
//         id: "e09a44ea-5076-40c3-87b8-b51bf5f61e37",
//         title: "Pop",
//         playlistTitle: "Pop",
//         background: "#148A08",
//         playlistImg:
//             "https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768",
//         playlists: [
//             {
//                 id: "22ee85c9-b10d-4b77-9eac-e299fd127a50",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab67706f00000002d971c6c23114fc7636dc23eb",
//                 playlistName: "Viral Hits",
//                 playlistDescription: "by Spotify",
//                 tracks: [
//                     {
//                         title: "Alone pt II/2 ",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129915348385822/Alan_Walker___Ava_Max_-_Alone__Pt._IIMP3_128K.mp3",
//                         id: 54,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273c7870db6e559380bbc80fee8",
//                     },
//                     {
//                         title: "Mistletoe",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129951695962142/Justin_Bieber_-_Mistletoe_Official_Music_VideoMP3_160K.mp3",
//                         id: 55,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2730315efc555d5a157b0392652",
//                     },
//                     {
//                         title: "Me Necesita",
//                         author: "PRETTYMUCH, CNCO",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129959174012928/PRETTYMUCH__CNCO_-_Me_Necesita_Official_VideoMP3_160K.mp3",
//                         id: 56,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2736fd30af95d17ad6a8a3a74ad",
//                     },
//                 ],
//             },
//             {
//                 id: "b961cffb-733b-406b-a3a6-fe12020f8b02",
//                 playlistCover:
//                     "https://wallpaperset.com/w/full/6/3/f/393829.jpg",
//                 playlistName: "NCS Release",
//                 playlistDescription: "by Spotify",
//                 tracks: [
//                     {
//                         title: "Senorita",
//                         author: "Shawn_Mendes,Camila_Cabello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782129973439102986/Shawn_Mendes__Camila_Cabello_-_Senorita_LyricsMP3_160K.mp3",
//                         id: 57,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273e6095c382c2853667c1623eb",
//                     },
//                     {
//                         title: "Ghost",
//                         author: "Au/Ra, Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130010088669204/Au_Ra__Alan_Walker_-_Ghost_Official_VideoMP3_160K.mp3",
//                         id: 58,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
//                     },
//                     {
//                         title: "Sorry",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130017793998848/Justin_Bieber_-_Sorry_Official_Lyric_VideoMP3_160K.mp3",
//                         id: 59,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
//                     },
//                 ],
//             },
//             {
//                 id: "23bfde1c-a544-4139-b0d2-09434f05ed06",
//                 playlistCover: "https://wallpapercave.com/wp/wp9683911.jpg",
//                 playlistName: "Justin Bieber",
//                 playlistDescription: "by Spotify",
//                 tracks: [
//                     {
//                         title: "I'll Show You",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130047695585310/Justin_Bieber_-_I_ll_Show_You_Official_Music_VideMP3_160K.mp3",
//                         id: 60,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273f46b9d202509a8f7384b90de",
//                     },
//                     {
//                         title: "Alone",
//                         author: "Marshmello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130063050014732/Marshmello_-_Alone_Official_Music_VideoMP3_160K.mp3",
//                         id: 61,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273153261ff7373a171c24ab9f9",
//                     },
//                     {
//                         title: "Liar",
//                         author: "Camila Cabello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130071020371978/Camila_Cabello_-_Liar_LyricsMP3_160K.mp3",
//                         id: 62,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2732df02f0877da45295a759f4c",
//                     },
//                 ],
//             },
//             {
//                 id: "98c59a7f-ef96-470d-ae84-cdf8f94b6235",
//                 playlistCover:
//                     "https://i.ytimg.com/vi/fOVlFm5_54w/maxresdefault.jpg",
//                 playlistName: "Marshmello",
//                 playlistDescription: "Marshmello",
//                 tracks: [
//                     {
//                         title: "Strongest",
//                         author: "Alan Walker ,Ina Wroldsen",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130079047221268/Alan_Walker___Ina_Wroldsen_-_Strongest_LyricsMP3_160K.mp3",
//                         id: 63,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2735510097a6f4875a4ad7c9095",
//                     },
//                     {
//                         title: "My Oh My",
//                         author: "Camila Cabello, DaBaby",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130082893398036/Camila_Cabello_-_My_Oh_My_Lyrics_ft._DaBabyMP3_160K.mp3",
//                         id: 64,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2735f53c0dbe5190a0af0fa28f3",
//                     },
//                     {
//                         title: "Believer",
//                         author: "Imagine Dragon",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130083555966986/Imagine_Dragons_-_Believer_LyricsMP3_160K.mp3",
//                         id: 65,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
//                     },
//                 ],
//             },
//             {
//                 id: "5e20079a-1056-4c61-bee7-a7839c8e21ff",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5ebf4a0158ec2c8cc0f203761da",
//                 playlistName: "Camila Cabello",
//                 playlistDescription: "Camila Cabello",
//                 tracks: [
//                     {
//                         title: "Shameless",
//                         author: "Camila Cabello",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130170789101578/Camila_Cabello_-_ShamelessMP3_160K.mp3",
//                         id: 72,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2735f53c0dbe5190a0af0fa28f3",
//                     },
//                     {
//                         title: "Unity",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130173805985792/Alan_x_Walkers_-_UnityMP3_160K.mp3",
//                         id: 73,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2734e14d839fbece313822fca82",
//                     },
//                     {
//                         title: "One Less Lonely Girl",
//                         author: "Justin Bieber",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130199692443678/Justin_Bieber_-_One_Less_Lonely_Girl_Official_MusMP3_160K.mp3",
//                         id: 74,
//                         cover: "https://i.scdn.co/image/ab67616d0000b2737c3bb9f74a98f60bdda6c9a7",
//                     },
//                 ],
//             },
//             {
//                 id: "9421fd78-5178-4476-89c5-c47d6a0a7757",
//                 playlistCover:
//                     "https://i.scdn.co/image/ab6761610000e5eb7e223c8c0a40da75838373b9",
//                 playlistName: "The Chainsmokers",
//                 playlistDescription: "The Chainsmokers",
//                 tracks: [
//                     {
//                         title: "Bad Boys for Life",
//                         author: "Ritmo",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130127374385162/RITMO_Bad_Boys_For_Life_Remix___Official_MusiMP3_160K.mp3",
//                         id: 69,
//                         cover: "https://i.scdn.co/image/ab67616d0000b27324147afe93bc68dfdb81209a",
//                     },
//                     {
//                         title: "Lost Control",
//                         author: "Alan Walker",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130131912228874/Alan_Walker_Lost_Control_Lyrics_ft._SoranaMP3_160K.mp3",
//                         id: 70,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273a108e07c661f9fc54de9c43a",
//                     },
//                     {
//                         title: "Closer",
//                         author: "The Chainsmokers",
//                         sound: "https://cdn.discordapp.com/attachments/775740994595323954/782130132722384907/The_Chainsmokers_-_Closer_Lyric_ft._HalseyMP3_128K.mp3",
//                         id: 71,
//                         cover: "https://i.scdn.co/image/ab67616d0000b273495ce6da9aeb159e94eaa453",
//                     },
//                 ],
//             },
//         ],
//     },
// ];
