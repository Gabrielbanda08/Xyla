    // ---Songs (with cover art and audio links) ---
    const songs = [  
      {
        title: "Miss My Dog",
        artist: "Young Thug",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://images.genius.com/07406019e5dbcd843638d340669dd539.1000x1000x1.jpg",
        audio: "Songs/Young Thug - Miss My Dogs.mp3",
      },
      {
        title: "Imma Shoot",
        artist: "Kodak Black",
        album: "Imma Shoot",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.XYzfmHFomjMtGmYaI0dIdUBMO0hpD078kSrLp5jwd-c?w=102&h=102&c=7&o=6&pid=SANGAM",
        audio: "Songs/Kodak Black - Imma Shoot.mp3",
      },
      {
        title: "Hit Stick",
        artist: "Kodak Black",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.DXIcyUIPVdxCWRDSrBQDVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Hit Stick (Lyrics).mp3",
      },
      {
        title: "Last Day In",
        artist: "Kodak Black",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.SAOuyg08CdoNEWPxgI9TRAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Last Day In Official Music Video.mp3",
      },
      {
        title: "Super Gremlin",
        artist: "Kodack Black",
        album: "Back For Everything",
        genre: "Hio Hop / Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.O5bBIVkEFEzgwgAaKYw0jgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak Black - Super Gremlin (Lyrics).mp3",
      },
      {
        title: "300 Blackout",
        artist: "Kodak Black",
        album: "Kuttthroat Bill Vol 1.",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/R.057950fb90b7d9a48523ae0199dd264c?rik=cHcMC5FT%2b9ubow&pid=ImgRaw&r=0",
        audio: "Songs/Kodak-Black-300-Blackout-(HipHopKit.com).mp3",
      },
      {
        title: "Feelin' Peachy",
        artist: "Kodak Black",
        album: "Happy Birthday Kodak",
        genre: "Hip Hop /  Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.hSYLJC9MzD0K3JGvvOkfvAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak-Black-Feelin-Peachy-(HipHopKit.com).mp3",
      },
      {
        title: "Purple Stamp",
        artist: "Kodack Black",
        album: "Back For Everthing",
        genre: "Hip Hop / Rap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.O5bBIVkEFEzgwgAaKYw0jgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kodak-Black-Purple-Stamp-(HipHopKit.com).mp3",
      },
      {
        title: "Apex",
        artist: "Lil Tjay",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.4aOD6Lu8D0o0cqn6GmKCWwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Apex.mp3",
      },
      {
        title: "Brothers",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Brothers.mp3",
      },
      {
        title: "Brothers (Remix)",
        artist: "Lil Tjay ft Lil Durk",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Brothers (Remix) (Feat Lil Durk).mp3",
      },
      {
        title: "Decline",
        artist: "Lil Tjay ft Lil Baby",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Decline (Feat Lil Baby).mp3",
      },
      {
        title: "FN",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "Hold On",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Hold On.mp3",
      },
      {
        title: "No No",
        artist: "Lil Tjay",
        album: "Single",
        genre: "Hip Hop / Rap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.Odv_TWvL9DHH1Mx6rvu9owHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - No No.mp3",
      },
      {
        title: "One Take",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - One Take.mp3",
      },
      {
        title: "Ruthless",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Ruthless (Feat Jay Critch).mp3",
      },
      {
        title: "Sex Sounds",
        artist: "Lil Tjay",
        album: "True 2 Myself",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/OIP.DJZecn_2FRR0-GII9wG1ogHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Lil Tjay - Sex Sounds.mp3",
      },
      {
        title: "Angel Pt. 1",
        artist: "Muni Long, NLE Choppa, Kodak Black & Jimin of BTS JVKE",
        album: "Fast X Soundtrack",
        genre: "Hip Hop",
        cover: "https://i1.sndcdn.com/artworks-IFPC1B8YhWt0R2NO-r0aKxw-t500x500.jpg",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "MoshPit",
        artist: "Kodak Black ft Juice WRLD",
        album: "Dying to Live",
        genre: "Hip Hop / Rap",
        cover: "https://th.bing.com/th/id/R.a96fc97f779ce1c5a6b7634d672ef7cd?rik=G9wQAdEQPblqwQ&pid=ImgRaw&r=0",
        audio: "Songs/Lil Tjay - FN.mp3",
      },
      {
        title: "Never Fold",
        artist: "Fox Kid",
        album: "Single",
        genre: "Hip -  Hop",
        cover: "Assets/Images/Fox Kid - Never Fold.png",
        audio: "Songs/fox kid  never fold  official audio.m4a",
      },
      {
        title: "No Return",
        artist: "Fox Kid",
        album: "Single",
        genre: "Afro",
        cover: "Assets/Images/Fox Kid - No Return.png",
        audio: "Songs/fox kid  no return .m4a",
      },
      {
        title: "Leaving",
        artist: "Fox Kid",
        album: "Single",
        genre: "Drill",
        cover: "Assets/Images/Fox Kid - Leaving.png",
        audio: "Songs/- fox kid  leaving  audio  2025-02-22 10_29.m4a",
      },
      {
        title: "Extravagant",
        artist: "Nasty C ft Case Klowzed",
        album: "Single",
        genre: "Hip Hop/Rap",
        cover: "https://th.bing.com/th/id/OSK.1zzFbqHFVWk5RMEnXoEarS5LhKWNTv7qsJ4ZO9zH61o?w=128&h=128&c=7&o=6&pid=SANGAM",
        audio: "Songs/Nasty C - Extravagant ft. Case-Klowzed.mp3",
      },
      {
        title: "Mad At You",
        artist: "King Von ft Dreezy",
        album: "Welcome to O'Block",
        genre: "	Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Mad At You (Feat Dreezy).mp3"
      },
      {
        title: "The Code",
        artist: "King Von ft Polo G",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - The Code (Feat Polo G).mp3"
      },
      {
        title: "Mine Too",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Mine Too.mp3",
      },
      {
        title: "I Am What I Am",
        artist: "King Von ft Fivio Foreign",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - I Am What I Am (Feat Fivio Foreign).mp3",
      },
      {
        title: "Gleesh Place",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Gleesh Place.mp3",
      },
      {
        title: "Can't Relate",
        artist: "King Von",
        album: "Welcome to O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Can't Relate.mp3",
      },
      {
        title: "Back Again",
        artist: "King Von ft Lil Durk & Prince Dre",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Back Again (Feat Lil Durk & Prince Dre).mp3",
      },
      {
        title: "All These Niggas",
        artist: "King Von ft Lil Durk",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - All These Niggas (Feat Lil Durk).mp3",
      },
      {
        title: "Ain't See It Coming",
        artist: "King Von ft Moneybagg Yo",
        album: "Welcome To O'Block",
        genre: "Hip hop . drill . gangsta rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Ain't See It Coming (Feat Moneybagg Yo).mp3",
      },
      {
        title: "Changes",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/xxxtentacion - Changes(Lyrics).mp3"
      },
      {
        title: "Jocelyn Flores",
        artist: "XXXTentacion",
        album: "?",
        genre: "Alternative hip hop · emo rap · lofi hip hop",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - Jocelyn Flores (lyrics).mp3"
      },
      {
        title: "Moonlight",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - Moonlight (Lyrics).mp3"
      },
      {
        title: "Everybody Dies In Their Nightmares",
        artist: "XXXTentacion",
        album: "17",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.V-l5rrbcUvSFm-ZcuwVWogHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Everybody Dies In Their Nightmares (Lyrics).mp3"
      },
      {
        title: "Ex Bitch",
        artist: "XXXTentacion",
        album: "Bad Vibe's Forever",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.csUZO8VoWrbaaeEOZfX1ugHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Ex Bitch (Audio).mp3"
      },
      {
        title: "Fuck Love",
        artist: "XXXTentacion",
        album: "17",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.V-l5rrbcUvSFm-ZcuwVWogHaHa?w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/XXXTENTACION - Fck Love Lyrics (with Trippie Redd).mp3",
      },
      {
        title: "Hope",
        artist: "XXXTentacion",
        album: "?",
        genre: "Emo rap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/55/Hope_-_XXXTentacion.png/250px-Hope_-_XXXTentacion.png",
        audio: "Songs/XXXTENTACION - Hope Lyrics.mp3",
      },
      {
        title: "Look At Me!",
        artist: "XXXTentacion",
        album: "Revenge",
        genre: "Trap metal · lo-fi",
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Look_at_Me%21.jpg/250px-Look_at_Me%21.jpg",
        audio: "Songs/XXXTENTACION - Look At Me (Audio).mp3",
      },
      {
        title: "Revenge",
        artist: "XXXTentacion",
        album: "17",
        genre: "Alternative rock · folk pop",
        cover: "https://upload.wikimedia.org/wikipedia/en/7/7e/Revenge_Single_Cover.jpg",
        audio: "Songs/XXXTENTACION - Revenge (Lyrics) Ive dug two graves for us my dear.mp3",
      },
      {
        title: "The Remedy for a Broken Heart (Why Am I So in Love)",
        artist: "XXXTentacion",
        album: "?",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/R.ef1a9e1278f7683742e4775489d8a501?rik=IlbHvhkt3m1o7A&pid=ImgRaw&r=0",
        audio: "Songs/XXXTENTACION - the remedy for the broken heart (Lyrics).mp3"
      },
      {
        title: "Pretty Little Fears",
        artist: "6LACK, J Cole",
        album: "East Atlanta Love Letter",
        genre: "R&B/Soul",
        cover: "https://th.bing.com/th/id/OIP.Fw0xqEk3fo1Npi2Wh1sSYwHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/6LACK, J. Cole - Pretty Little Fears (Lyrics).mp3"
      },
      {
        title: "A Lot",
        artist: "21 Savage, J Cole",
        album: "i am > i was",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/OSK.h8161fJR73Xh0jLwBuWBW3jjvawEL7dVizKg-YArP9I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3",
        audio: "Songs/21 Savage - a lot (Official Video) ft. J. Cole.mp3"
      },
      {
        title: "Bank Account",
        artist: "21 Savage",
        album: "ISSA",
        genre: "Hip hop · trap",
        cover: "https://th.bing.com/th/id/OIP.5Hlzh8-UV2kKeoBE2mwAuQHaHa?w=120&h=120&c=8&rs=1&qlt=80&o=6&cb=thwsc4&pid=3.1",
        audio: "Songs/21 Savage - Bank Account (Lyrics).mp3"
      },
      {
        title: "Dangerous",
        artist: "21 Savage ft Lil Durk",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21 Savage - Dangerous (Lyrics) Feat. Lil Durk Metro Boomin.mp3"
      },
       {
        title: "Knife Talk",
        artist: "Drake ft 21 Savage & Project Pat",
        album: "Certified Lover Boy",
        genre: "Horrorcore · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft 21-Savage Project Pat - Knife Talk.mp3"
      },
       {
        title: "Gun Smoke",
        artist: "21 Savage",
        album: "i am > i was",
        genre: "Hip Hop/Rap · Rap",
        cover: "https://th.bing.com/th/id/OSK.h8161fJR73Xh0jLwBuWBW3jjvawEL7dVizKg-YArP9I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3",
        audio: "Songs/21 Savage - Gun Smoke (Official Audio).mp3"
      },
      {
        title: "Redrum",
        artist: "21 Savage",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21 Savage - redrum (Lyrics).mp3"
      }, 
      {
        title: "Call Me Revenge",
        artist: "21 Savage ft D4VD",
        album: "Call of Duty - Soundtrack",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.gvE2mTIy1HqKmVf_NaWxlQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/21 Savage, d4vd - Call Me Revenge (Call of Duty Modern Warfare 3 - Official Game Video).mp3",
      },
      {
        title: "Glock On My Lap",
        artist: "21 Savage ft Future",
        album: "Savage Mode II",
        genre: "Hip-hop · trap",
        cover: "https://i1.sndcdn.com/artworks-IcSkqtF4TJgL-0-t500x500.jpg",
        audio: "Songs/21_savage_metro_boomin_glock_in_my_lap_official_music_video_mp3_47896.mp3",
      },
      {
        title: "X",
        artist: "21 Savage ft Future",
        album: "Savage Mode II",
        genre: "Hip-hop · trap",
        cover: "https://i.scdn.co/image/ab67616d00001e02aa57907bf0cb2ca0c8cc74bc",
        audio: "Songs/21_savage_metro_boomin_x_ft_future_official_music_video_mp3_26751.mp3",
      },
      {
        title: "Family Ties",
        artist: "Baby Keem ft Kendrick Lamar",
        album: "Melodic Blues",
        genre: "Hip-hop · trap",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0CcyYafFpAPfVqy6vuRNij_WJRDfZeI_gzQ&s",
        audio: "Songs/Baby Keem, Kendrick Lamar - family ties (Official Video).mp3",
      },
      {
        title: "Neé Nah",
        artist: "21 Savage ft Metro Boomin & Travis Scott",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-n-e-nah-Ft-Travis-Scott-Metro-Boomin-(HipHopKit.com).mp3",
      },
      {
        title: "Pop Ur Sh*t",
        artist: "21 Savage ft Metro Boomin & Young Thug",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-pop-ur-shit-Ft-Young-Thug-Metro-Boomin-(HipHopKit.com).mp3",
      },
      {
        title: "Prove It",
        artist: "21 Savage ft Summer Walker",
        album: "American Dream",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.XCudU2JLCJk5_y_pSy3bKAHaHa?w=198&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/21-Savage-prove-it-Ft-Summer-Walker-(HipHopKit.com).mp3",
      },
      {
        title: "Eastside",
        artist: "Benny Blanco ft Khalid & Halsey",
        album: "Friends Keep Secrets",
        genre: "Pop . Hip-hop",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Benny_Blanco_%E2%80%93_Friends_Keep_Secrets.png/250px-Benny_Blanco_%E2%80%93_Friends_Keep_Secrets.png",
        audio: "Songs/benny blanco, Halsey Khalid Eastside (official video).mp3",
      },
      {
        title: "Uptown",
        artist: "Bex",
        album: "Uptown",
        genre: "Pop",
        cover: "https://thvnext.bing.com/th/id/OSK.3mS9bUizDHuCgpntQ8AFc5hDXN2RmUHtGTGYw2KB__I?w=200&h=200&c=12&o=7&cb=thws4&pid=SANGAM&rm=3&ucfimg=1",
        audio: "Songs/Bex - Uptown (Lyric Video).mp3",
      },
      {
        title: "Bitch Don't Kill My Vibe",
        artist: "Kendrick Lamar ft Jay-Z",
        album: "good kid, m.A.A.d city (Deluxe)",
        genre: "Gangsta Rap · Hardcore Rap · Hip Hop/Rap · Rap · West Coast Rap",
        cover: "https://th.bing.com/th/id/R.b6d9fcb7be80d1fc841a3eb9ed3f8d17?rik=5j11%2fTlpQ4nkvQ&pid=ImgRaw&r=0",
        audio: "Songs/Bitch Dont Kill My Vibe (Remix) ft. Jay Z - Kendrick Lamar (good kid m.A.A.d city Deluxe).mp3",
      },
      {
        title: "Blood",
        artist: "Kendrick Lamar",
        album: "DAMN",
        genre: "Conscious hip-hop",
        cover: "https://assets.fontsinuse.com/static/use-media-items/52/51196/full-1500x1500/58f577f9/C9H8-PWUIAAzbQ2-jpg-large-e.jpeg",
        audio: "Songs/BLOOD - Kendrick Lamar (DAMN).mp3",
      },
      {
        title: "If I'm Lying",
        artist: "Burna Boy",
        album: "I Told Them",
        genre: "African · Afro-fusion",
        cover: "https://th.bing.com/th/id/ODL.eb26fad43e187fa641b854fe95fc6ac2?w=298&h=298&c=10&rs=1&o=6&pid=AlgoBlockDebug",
        audio: "Songs/Burna Boy - If Im Lying Official Audio.mp3",
      },
      {
        title: "Want It All",
        artist: "Burna Boy ft Polo G",
        album: "Want It All",
        genre: "African · Afro-fusion",
        cover: "https://tse1.mm.bing.net/th/id/OIP.FFGH8H_t5oMsZUkhwQd2GQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Burna Boy - Want It All (Lyrics) ft. Polo G.mp3",
      },
      {
        title: "GBP",
        artist: "Central Cee ft 21 Savage",
        album: "Can't Rush Greatness",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OSK.h5uidxxtcy7IEVXQ90Cf9qLUOQ-loyFl2BkZWZObP3g?w=64&h=64&c=7&o=6&pid=SANGAM",
        audio: "Songs/Central Cee - GBP (Lyrics) ft. 21 Savage.mp3",
      },
      {
        title: "Many Nights",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/01-Gunna-many-nights-(HipHopKit.com).mp3",
      },
      {
        title: "Let That Sink In",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/02-Gunna-let-that-sink-in-(HipHopKit.com).mp3",
      },
      {
        title: "Just Say Dat",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/03-Gunna-just-say-dat-(HipHopKit.com).mp3",
      },
      {
        title: "gp",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/04-Gunna-gp-(HipHopKit.com).mp3",
      },
      {
        title: "Sakpase",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/05-Gunna-sakpase-(HipHopKit.com).mp3",
      },
      {
        title: "At My Purest",
        artist: "Gunna ft Offset",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/06-Gunna-at-my-purest-Ft-Offset-(HipHopKit.com).mp3",
      },
      {
        title: "Bitting My Game",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/07-Gunna-biting-my-game-(HipHopKit.com).mp3",
      },
      {
        title: "Prototype",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/08-Gunna-prototype-(HipHopKit.com).mp3",
      },
      {
        title: "WGFT",
        artist: "Gunna ft Burna Boy",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/09-Gunna-wgft-ft-Burna-Boy-(HipHopKit.com).mp3",
      },
      {
        title: "Forever Be Mine",
        artist: "Gunna ft Wizkid",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/10-Gunna-forever-be-mine-ft-Wizkid-(HipHopKit.com).mp3",
      },
      {
        title: "Again",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/11-Gunna-again-(HipHopKit.com).mp3",
      },
      {
        title: "Endless",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/12-Gunna-endless-(HipHopKit.com).mp3",
      },
      {
        title: "I Can't Feel My Face",
        artist: "Gunna ft Nechie",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/13-Gunna-i-can-t-feel-my-face-Ft-Nechie-(HipHopKit.com).mp3",
      },
      {
        title: "Podcast",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/14-Gunna-podcast-(HipHopKit.com).mp3",
      },
      {
        title: "Club House",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/15-Gunna-club-house-(HipHopKit.com).mp3",
      },
      {
        title: "Satisfaction",
        artist: "Gunna  ft Asake",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/16-Gunna-satisfaction-ft-Asake-(HipHopKit.com).mp3",
      },
      {
        title: "Soda Pop",
        artist: "Juice WRLD ft Roddy Ricch",
        album: "Single",
        genre: "Hip - Hop",
        cover: "https://tse3.mm.bing.net/th/id/OIP.Qvk2UsIT6F7NSE44NzjvYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Soda Pop Ft. Roddy Ricch (Unreleased).mp3",
      },
      {
        title: "Fame & Riches",
        artist: "Polo G ft Roddy Ricch",
        album: "Hall of Fame",
        genre: "Hip - hop . rap",
        cover: "https://th.bing.com/th/id/OIP.ox2dPp2wtX07yQKwr4kaYAHaHa?w=185&h=185&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/Polo_G_-_Fame_Riches_(Official_Audio)_ft._Roddy_Ricch.mp3",
      },
      {
        title: "Down Below",
        artist: "Roddy Ricch",
        album: "Feed Tha Streets",
        genre: "Hip - hop . rap",
        cover: "https://images.genius.com/2816d8999b08609b866ff07083f7d330.1000x1000x1.png",
        audio: "Songs/Roddy Ricch - Down Below (Lyrics).mp3",
      },
      {
        title: "The Box",
        artist: "Roddy Ricch",
        album: "Please Excuse Me for Being Antisocial",
        genre: "Hip - hop . rap",
        cover: "https://wallpapercave.com/wp/wp5638300.jpg",
        audio: "Songs/Polo_G_-_Fame_Riches_(Official_Audio)_ft._Roddy_Ricch.mp3",
      },
      {
        title: "Fuck Witcha Boy",
        artist: "Gunna ft Nechie",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/17-Gunna-fuck-witcha-boy-(HipHopKit.com).mp3",
      },
      {
        title: "On Me",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/18-Gunna-on-me-(HipHopKit.com).mp3",
      },
      {
        title: "Rare Occassion",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/19-Gunna-rare-occasion-(HipHopKit.com).mp3",
      },
      {
        title: "Made For This Shit",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/20-Gunna-made-for-this-shit-(HipHopKit.com).mp3",
      },
      {
        title: "CFWM",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/21-Gunna-cfwm-(HipHopKit.com).mp3",
      },
      {
        title: "What They Thinking",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/22-Gunna-what-they-thinking-(HipHopKit.com).mp3",
      },
      {
        title: "Showed 'Em",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/23-Gunna-showed-em-(HipHopKit.com).mp3",
      },
      {
        title: "Won't Stop",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/24-Gunna-Won-t-Stop-(HipHopKit.com).mp3",
      },
      {
        title: "Him All Along",
        artist: "Gunna",
        album: "The Last Wun",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.EX2sbs_LBIAbxX6H9ZEaVAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/25-Gunna-1-HIM-ALL-ALONG-(HipHopKit.com).mp3",
      },
      {
        title: "Different Species",
        artist: "Offset ft Gunna",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Different-Species-ft-Gunna-(HipHopKit.com).mp3",
      },
      {
        title: "Angel Numbers (Ten Toes)",
        artist: "Chris Brown",
        album: "11:11",
        genre: "R&B/Soul",
        cover: "https://ratedrnb.com/cdn/2023/10/chris-brown-11-11-album-cover-scaled.jpg",
        audio: "Songs/Chris Brown - Angel Numbers Ten Toes (Official Video).mp3",
      },
      {
        title: "Meet You At The Graveyard",
        artist: "Cleffy",
        album: "Meet You At The Graveyard",
        genre: "Pop",
        cover: "https://images.genius.com/6543eadbb849af34186e3a6d4e0799ec.1000x1000x1.png",
        audio: "Songs/Cleffy - Meet you at the Graveyard (Lyrics).mp3",
      },
      {
        title: "Ball If I Want To",
        artist: "DaBaby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/DaBaby_-_Ball_If_I_Want_To.png/250px-DaBaby_-_Ball_If_I_Want_To.png",
        audio: "Songs/DaBaby - BALL IF I WANT TO (Official Music Video).mp3",
      },
      {
        title: "Lonely",
        artist: "DaBaby ft Lil Wayne",
        album: "Baby on Baby 2",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/d/de/DaBaby_and_Lil_Wayne_-_Lonely.png/250px-DaBaby_and_Lil_Wayne_-_Lonely.png",
        audio: "Songs/DaBaby - Lonely (with Lil Wayne) Official Video.mp3",
      },
      {
        title: "Red Light Green Light",
        artist: "DaBaby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/38/DaBaby_-_Red_Light_Green_Light.png/250px-DaBaby_-_Red_Light_Green_Light.png",
        audio: "Songs/DaBaby - Red Light Green Light Official Music Video.mp3",
      },
      {
        title: "Rockstar",
        artist: "DaBaby ft Roddy Ricch",
        album: "Blame It On Baby",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c6/Rockstar_Remix_%28Official_Single_Cover%29_-_DaBaby_featuring_Roddy_Ricch.png/250px-Rockstar_Remix_%28Official_Single_Cover%29_-_DaBaby_featuring_Roddy_Ricch.png",
        audio: "Songs/DaBaby ROCKSTAR FT RODDY RICCH Audio.mp3",
      },
      {
        title: "Suge (Yea Yea)",
        artist: "DaBaby",
        album: "Baby on Baby",
        genre: "Hip-hop",
        cover: "https://tse4.mm.bing.net/th/id/OIP.vyKeLwCNJoVCcMc268p2bgAAAA?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Dababy - Suge (Yea Yea) Official Music Video.mp3",
      },
      {
        title: "Today (Remix)",
        artist: "DaBaby ft Lil Baby",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://i1.sndcdn.com/artworks-DAEkwqpaIrpzyNc0-z4XYyQ-t500x500.jpg",
        audio: "Songs/DaBaby - Today (remix) ft. Lil Baby.mp3",
      },
      {
        title: "Location",
        artist: "Dave ft Burna Boy",
        album: "Psychodrama",
        genre: "Afrobeats . British Hip-hop",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Dave_Psychodrama.jpeg/250px-Dave_Psychodrama.jpeg",
        audio: "Songs/Dave - Location (ft. Burna Boy).mp3",
      },
      {
        title: "Storyteller",
        artist: "DDG",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.CIsysZaHtkHbF3N0tMouGgHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/DDG - Storyteller (Official Audio).mp3",
      },
      {
        title: "Bodies",
        artist: "Offset ft JID",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Bodies-Ft-JID-(HipHopKit.com).mp3",
      },
      {
        title: "Calories",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Calories-(HipHopKit.com).mp3",
      },
      {
        title: "Checkmate (Smooth)",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Checkmate-Smooth-(HipHopKit.com).mp3",
      },
      {
        title: "Favorite Girl",
        artist: "Offset ft Ty Dolla $ign",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Favorite-Girl-Ft-Ty-Dolla-ign-(HipHopKit.com).mp3",
      },
      {
        title: "Pills",
        artist: "Offset ft YoungBoy Never Broke Again",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Pills-Ft-YoungBoy-Never-Broke-Again-(HipHopKit.com).mp3",
      },
      {
        title: "Proffessional",
        artist: "Offset",
        album: "KIARI",
        genre: "Hip-hop · trap",
        cover: "https://supraphonline.cz/cover/200/8/5/8/901229.jpg?1756878331",
        audio: "Songs/Offset-Professional-(HipHopKit.com).mp3",
      },
      {
        title: "Churchhill Downs",
        artist: "Jack Harlow ft Drake",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/cf/9a/0e/cf9a0ee1-3b03-c511-cf7c-4929265e261c/075679745118.jpg/208x208bb.webp",
        audio: "Songs/Jack Harlow - Churchill Downs (Lyrics) feat. Drake.mp3",
      },
      {
        title: "Tyler Herro",
        artist: "Jack Harlow",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.CFlS7Xwk6IBPFXLfD1_gKwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Jack Harlow - Tyler Herro (Lyrics).mp3",
      },
      {
        title: "What's Poppin",
        artist: "Jack Harlow ft DaBaby, Tory Lanez & Lil Wayne",
        album: "Come Home The Kids Miss You",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.SPGKRTSvxdLTOr2c1WuHfwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Jack Harlow - WHATS POPPIN feat. Dababy, Tory Lanez, Lil Wayne Official Video.mp3",
      },
      {
        title: "Empty Out Your Pockets",
        artist: "Juice WRLD",
        album: "The Party Never Ends",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.atkyzUt1w6ZHyfnSH2xxYQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Empty Out Your Pockets (Lyrics).mp3",
      },
      {
        title: "Fighting Demons",
        artist: "Juice WRLD",
        album: "Fighting Demons",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.eQ7zNqk-K2YqitVjLASzPwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Fighting Demons (Official Audio).mp3",
      },
      {
        title: "Flaws And Sins",
        artist: "Juice WRLD",
        album: "Death Race For Love",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.l0WYurtjteAjUBwIN49LkwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - Flaws and Sins (Official Audio).mp3",
      },
      {
        title: "In My Head",
        artist: "Juice WRLD",
        album: "Death Race For Love",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.l0WYurtjteAjUBwIN49LkwHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD - In My Head.mp3",
      },
      {
        title: "Tell Me U Luv Me",
        artist: "Juice WRLD ft Trippe Redd",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD - Tell Me U Luv Me ft. Trippie Redd (Official Music Video).mp3",
      },
      {
        title: "Titanic",
        artist: "Juice WRLD",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD - Titanic (Official Audio).mp3",
      },
      {
        title: "Campfire (Freestyle)",
        artist: "Juice WRLD",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.2zc_PmkCCANfUOkWkexmYAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD freestyle sur Reine de Dadju Campfire Song official.mp3",
      },
      {
        title: "Life's A Mess",
        artist: "Juice WRLD ft Halsey",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD ft. Halsey - Lifes A Mess (Official Visualizer).mp3",
      },
      {
        title: "Come And Go",
        artist: "Juice WRLD & Marshmello",
        album: "Legends Never Die",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.bac957ae86204ba802e5c82e014ac3e9?rik=3sp7iBBzwAR86g&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD ft. Marshmello - Come Go (Official Audio).mp3",
      },
      {
        title: "Moonlight",
        artist: "Juice WRLD",
        album: "JuiceWrld 9 9 9",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/R.2d0a15c79a1c53e4c12a277f0861b351?rik=uIJJKe%2ftA3GpEA&pid=ImgRaw&r=0",
        audio: "Songs/Juice WRLD Moonlight (Official Audio).mp3",
      },
      {
        title: "All Girls Are The Same 2 (Insecurities)",
        artist: "Juice WRLD ft Nicky Minaj",
        album: "The Party Never Ends",
        genre: "Hip-hop · trap",
        cover: "https://tse1.mm.bing.net/th/id/OIP.atkyzUt1w6ZHyfnSH2xxYQHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Juice WRLD Nicki Minaj - AGATS2 (Insecure) (Official Audio).mp3",
      },
      {
        title: "Comportement (Freestyle)",
        artist: "Juice WRLD",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "",
        audio: "Songs/Juice wrld- COMPORTEMENT Freestyle.mp3",
      },
      {
        title: "Euphoria",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://tse2.mm.bing.net/th/id/OIP.Wbtd4r6Q-AsqiJBuwMelogHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - Euphoria (Lyrics) (Drake Diss).mp3",
      },
      {
        title: "Humble",
        artist: "Kendrick Lamar",
        album: "DAMN",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.hI1D5LhVJE8-T5m69SJUjAHaHa?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - HUMBLE..mp3",
      },
      {
        title: "Reincarneted",
        artist: "Kendrick Lamar",
        album: "GNX",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.mN_4C9DCqvlM-oHkoKk0rwHaHa?cb=ucfimg2ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - reincarnated (Official Audio).mp3",
      },
      {
        title: "Rich Sprit",
        artist: "Kendrick Lamar",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://th.bing.com/th?id=OIF.%2fkFY6fd8NorlbZDmvSF0CQ&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - Rich Spirit.mp3",
      },
      {
        title: "Savior",
        artist: "Kendrick Lamar ft Baby Keem & Sam Dew",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://th.bing.com/th?id=OIF.%2fkFY6fd8NorlbZDmvSF0CQ&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - Savior ft. Baby Keem Sam Dew (Official Audio).mp3",
      },
      {
        title: "Silent Hill",
        artist: "Kendrick Lamar ft Kodack Black",
        album: "Mr. Morale And The Big Steppers",
        genre: "Hip-hop · Rap",
        cover: "https://th.bing.com/th?id=OIF.%2fkFY6fd8NorlbZDmvSF0CQ&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - Silent Hill ft. Kodak Black (Official Audio).mp3",
      },
      {
        title: "Squabble Up",
        artist: "Kendrick Lamar",
        album: "GNX",
        genre: "Hip-hop · trap",
        cover: "https://tse3.mm.bing.net/th/id/OIP.mN_4C9DCqvlM-oHkoKk0rwHaHa?cb=ucfimg2ucfimg=1&w=600&h=600&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/Kendrick Lamar - squabble up (Lyrics).mp3",
      },
      {
        title: "The Heart Part 5",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Conscious hip-hop · soul · jazz rap",
        cover: "https://th.bing.com/th/id/R.fe8b7dea5e5630175cdfe21a04d84df7?rik=%2b44oPzl5FYI2Kg&pid=ImgRaw&r=0",
        audio: "Songs/Kendrick Lamar - The Heart Part 5.mp3",
      },
      {
        title: "Alright",
        artist: "Kendrick Lamar",
        album: "To Pimp A Butterfly",
        genre: "Hip-hop · Rap",
        cover: "https://th.bing.com/th/id/R.55cc61e937a642b4e57056e7cbb6aefe?rik=2YOo6qB3qYP4WA&pid=ImgRaw&r=0",
        audio: "Songs/Kendrick-Lamar-alright-(HipHopKit.com).mp3",
      },
      {
        title: "Armed And Dangerous",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Armed Dangerous (Official Video).mp3",
      },
      {
        title: "Demon",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Demon (Official Video).mp3",
      },
      {
        title: "How It Go",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - How It Go (Official Video).mp3",
      },
      {
        title: "Took Her To The O",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Took Her To The O (Official Video).mp3",
      },
      {
        title: "Don't Want To Be",
        artist: "King Von",
        album: "Levon James",
        genre: "Hip-hop · trap",
        cover: "https://tse4.mm.bing.net/th/id/OIP.t9ov_eQADO-8vowW_GxZcAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Dont Want to Be Me (Audio).mp3",
      },
      {
        title: "Don't Miss",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.05cC0YA9Njc8pW0Ohf2jGwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Dont Miss (Official Video).mp3",
      },
      {
        title: "Wayne's Story",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - Waynes Story (Official Video).mp3",
      },
      {
        title: "War",
        artist: "King Von",
        album: "What It Means to Be King",
        genre: "Hip hop · drill",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/King_Von_-_What_It_Means_to_Be_King.jpg/250px-King_Von_-_What_It_Means_to_Be_King.jpg",
        audio: "Songs/King Von - War (Official Lyric Video).mp3",
      },
      {
        title: "GTA",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/King_Von_-_Welcome_to_O%27Block.png/250px-King_Von_-_Welcome_to_O%27Block.png",
        audio: "Songs/King Von - GTA (Lyrics) Tryna be me, tell em do what I do (youd do it).mp3",
      },
      {
        title: "Grandson For President",
        artist: "King Von",
        album: "What It Means to Be King",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/King_Von_-_What_It_Means_to_Be_King.jpg/250px-King_Von_-_What_It_Means_to_Be_King.jpg",
        audio: "Songs/King Von - Grandson for President (Remix) (Official Video).mp3",
      },
      {
        title: "Robberies",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip hop · drill",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/King_Von_-_Robberies.png/250px-King_Von_-_Robberies.png",
        audio: "Songs/King Von - Robberies (Official AUDIO).mp3",
      },
      {
        title: "Think Am A Hoe",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.05cC0YA9Njc8pW0Ohf2jGwHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - Think Im A Hoe (Official AUDIO).mp3",
      },
      {
        title: "War Wit Us",
        artist: "King Von",
        album: "Grandson Vol. 1",
        genre: "Hip-hop · trap",
        cover: "https://th.bing.com/th/id/OIP.WacUjNS6ij_tnn4MqPgYZwHaHa?w=152&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/King Von - War Wit Us (Official Video) Shot by JerryPHD.mp3",
      },
      {
        title: "When I Die",
        artist: "King Von",
        album: "Grandson",
        genre: "Hip hop · drill",
        cover: "https://tse4.mm.bing.net/th/id/OIP._hE1i6YNFAcYChr7JBVqaAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von - When I Die (Official Visualizer).mp3",
      },
      {
        title: "Why He Told",
        artist: "King Von",
        album: "Welcome To O'Block",
        genre: "Hip hop · drill",
        cover: "https://th.bing.com/th/id/OIP.opDDwWI8pJYaPoTnukaXvgHaHa?w=163&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
        audio: "Songs/King Von - Why He Told (Official Video).mp3",
      },
      {
        title: "Twin Nem",
        artist: "King Von ft Lil Durk",
        album: "Grandson Vol. 1",
        genre: "Hip hop · drill",
        cover: "https://tse2.mm.bing.net/th/id/OIP.z0eoYOgl7zE-sVtlo9FtgQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        audio: "Songs/King Von (feat. Lil Durk) - Twin Nem (Audio).mp3",
      },
      {
        title: "Champagne Poetry",
        artist: "Drake",
        album: "Certified Lover Boy",
        genre: "Horrorcore · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake - Champagne Poetry.mp3",
      },
      {
        title: "Way 2 Sexy",
        artist: "Drake ft Future & Young Thug",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Future Young Thug - Way 2 Sexy.mp3",
      },
      {
        title: "Girls Want Girls",
        artist: "Drake ft Lil Baby",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Lil Baby - Girls Want Girls.mp3",
      },
      {
        title: "Fair Trade",
        artist: "Drake ft Travis Scott",
        album: "Certified Lover Boy",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/Drake_-_Certified_Lover_Boy.png/250px-Drake_-_Certified_Lover_Boy.png",
        audio: "Songs/Drake ft Travis Scott - Fair Trade.mp3",
      },
      {
        title: "BackOutside Boyz",
        artist: "Drake ft 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-BackOutsideBoyz-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Rich-Flex-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Broke Boys",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Broke-Boys-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Circo Loco",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Circo-Loco-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Chicargo Freestyle",
        artist: "Drake ft Giveon",
        album: "Dark Lane Demo Tapes",
        genre: "Hip-hop · R&B",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png/250px-Drake_-_Dark_Lane_Demo_Tapes.png",
        audio: "Songs/Drake-Chicago-Freestyle-ft-Giveon-(HipHopKit.com).mp3",
      },
      {
        title: "Jumbotron Shit Poppin'",
        artist: "Drake & 21 Savege",
        album: "Her Loss",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Jumbotron-Shit-Poppin-(HipHopKit.com).mp3"
      },
      {
        title: "Major Distribution",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Major-Distribution-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Privileged Rapper",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Privileged-Rappers-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Pussy & Millions",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Pussy-Millions-ft-21-Savage-Travis-Scott-(HipHopKit.com).mp3",
      },
      {
        title: "Rich Flex",
        artist: "Drake & 21 Savage",
        album: "Her Loss",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Drake_and_21_Savage_-_Her_Loss.png/250px-Drake_and_21_Savage_-_Her_Loss.png",
        audio: "Songs/Drake-Rich-Flex-ft-21-Savage-(HipHopKit.com).mp3",
      },
      {
        title: "Toosie Slide",
        artist: "Drake",
        album: "Dark Lane Demo Tapes",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Drake_-_Dark_Lane_Demo_Tapes.png/250px-Drake_-_Dark_Lane_Demo_Tapes.png",
        audio: "Songs/Drake-Toosie-Slide-(HipHopKit.com).mp3",
      },
      {
        title: "Wants And Needs",
        artist: "Drake ft Lil Baby",
        album: "Scary Hours 2",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Drake_-_Scary_Hours_2.png/250px-Drake_-_Scary_Hours_2.png",
        audio: "Songs/Drake-Wants-and-Needs-feat-Lil-Baby-(HipHopKit.com).mp3",
      },
      {
        title: "What Did I Miss?",
        artist: "Drake",
        album: "Iceman",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Drake_-_What_Did_I_Miss.png/250px-Drake_-_What_Did_I_Miss.png",
        audio: "Songs/Drake-What-Did-I-Miss-(HipHopKit.com).mp3",
      },
      {
        title: "Which One",
        artist: "Drake ft Central Cee",
        album: "Iceman",
        genre: "Hip-hop . trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/Drake_-_Which_One.png/250px-Drake_-_Which_One.png",
        audio: "Songs/Drake-Which-One-ft-Central-Cee-(HipHopKit.com).mp3",
      },
      {
        title: "6:16 In LA",
        artist: "Kendrick Lamar",
        album: "Single",
        genre: "Hip-hop · trap",
        cover: "https://upload.wikimedia.org/wikipedia/en/b/b5/Kendrick_Lamar_-_6-16_in_LA.png",
        audio: "Songs/Kendrick Lamar - 616 in LA (Drake Diss).mp3",
      },
    ];

    // --- Section Management ---
    const sectionArea = document.getElementById('section-area');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    let currentSection = 'home';

    sidebarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        const section = link.getAttribute('data-section');
        currentSection = section;
        loadSection(section);
      });
    });

    function loadSection(section) {
      if (section === 'settings') {
        document.getElementById('settings-panel').style.display = 'flex';
        return;
      }
      let html = '';
      if (section === 'home' || section === 'library' || section === 'trending') {
        html = `<div id="music-cards-container" class="music-cards"></div>`;
        sectionArea.innerHTML = html;
        renderMusicCards(songs); // Show all songs
      } else if (section === 'search') {
        html = `<div id="music-cards-container" class="music-cards"></div>`;
        sectionArea.innerHTML = html;
        renderMusicCards(songs);
      } else if (section === 'genres') {
        const genres = Array.from(new Set(songs.map(s => s.genre)));
        html = `<div style="padding:2em 2em 1em 2em;">
                  <h2>Genres</h2>
                  <div style="display:flex;flex-wrap:wrap;gap:1.2em;">
                    ${genres.map(g => `<button class="settings-btn" onclick="filterGenre('${g}')">${g}</button>`).join('')}
                  </div>
                </div>
                <div id="music-cards-container" class="music-cards"></div>`;
        sectionArea.innerHTML = html;
        renderMusicCards(songs);
      } else if (section === 'playlists') {
        html = `<div style="padding:2em 2em 1em 2em;">
                  <h2>Playlists</h2>
                  <p>Coming soon!</p>
                </div>`;
        sectionArea.innerHTML = html;
      } else {
        html = `<div style="padding:2em 2em 1em 2em;">
                  <h2>Welcome to Wave🌊!</h2>
                  <p>Enjoy your music.</p>
                </div>`;
        sectionArea.innerHTML = html;
      }
      // On all music sections, add cards
      if (section === 'home' || section === 'library' || section === 'search' || section === 'genres' || section === 'trending') {
        renderMusicCards(songs);
      }
    }

    // --- Music Cards Rendering ---
    function renderMusicCards(songsToRender) {
      const container = document.getElementById('music-cards-container');
      if (!container) return;
      container.innerHTML = '';
      songsToRender.forEach((song, idx) => {
        const card = document.createElement('div');
        card.className = 'music-card';
        card.innerHTML = `
          <div class="music-card-cover"><img src="${song.cover}" alt="${song.album} cover"></div>
          <div class="music-card-info">
            <div class="music-card-title">${song.title}</div>
            <div class="music-card-artist">${song.artist}</div>
            <div class="music-card-album">${song.album}</div>
          </div>
          <div class="music-card-actions">
            <a class="music-card-btn" title="Download" href="${song.audio}" download><span>&#128190;</span> Download</a>
          </div>
        `;
        // Make the whole card clickable to play
        card.onclick = (e) => {
        // Prevent download button from triggering play
          if (e.target.closest('.music-card-btn')) return;
          loadSong(idx, songsToRender);
        };
        container.appendChild(card);
      });
    }
    

    // --- Search Filter ---
    let currentSongsArray = songs;
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', function() {
      const query = searchInput.value.trim().toLowerCase();
      let filteredSongs;
      if (currentSection === 'genres') {
        // If genre filtered, get current genre
        let cards = songs;
        const genreBtns = document.querySelectorAll('.settings-btn');
        genreBtns.forEach(btn => {
          if (btn.classList.contains('active')) {
            cards = songs.filter(s => s.genre === btn.textContent);
          }
        });
        filteredSongs = (cards.filter(song =>
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query) ||
          song.genre.toLowerCase().includes(query)
        ));
      } else {
        filteredSongs = (songs.filter(song =>
          song.title.toLowerCase().includes(query) ||
          song.artist.toLowerCase().includes(query) ||
          song.genre.toLowerCase().includes(query)
        ));
      }
      currentSongsArray = filteredSongs;
      renderMusicCards(filteredSongs);
    });

    // --- Genre Filter function ---
    window.filterGenre = function(genre) {
      const genreBtns = document.querySelectorAll('.settings-btn');
      genreBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === genre) btn.classList.add('active');
      });
      const filteredSongs = songs.filter(s => s.genre === genre);
      currentSongsArray = filteredSongs;
      renderMusicCards(filteredSongs);
    };

    // --- Initial Load ---
    window.onload = () => {
      setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
        loadSection('home');
      }, 5000); // 5 seconds delay
    };

    // --- Audio Player Logic ---
    let currentSongIdx = null;
    let isPlaying = false;
    let shuffle = false;
    let repeatMode = 0; // 0 = off, 1 = repeat all, 2 = repeat one
    let audio = document.getElementById('audio');
    audio.onerror = () => {
    alert('Audio file not found or cannot be played.');
    pauseAudio();
      playerTitle.textContent = 'Error: Cannot play this song';
    };
    let playerCover = document.getElementById('player-cover');
    let playerTitle = document.getElementById('player-title');
    let playerArtist = document.getElementById('player-artist');
    let btnPlayPause = document.getElementById('btn-playpause');
    let btnNext = document.getElementById('btn-next');
    let btnPrev = document.getElementById('btn-prev');
    let btnRepeat = document.getElementById('btn-repeat');
    let btnShuffle = document.getElementById('btn-shuffle');
    let progressBar = document.getElementById('progress-bar');
    let progressInner = document.getElementById('progress-inner');
    let playerCurrent = document.getElementById('player-current');
    let playerDuration = document.getElementById('player-duration');
    let volumeRange = document.getElementById('volume-range');

    function loadSong(idx, songArray = songs) {
      const song = songArray [idx];
      currentSongIdx = idx;
      audio.src = song.audio;
      playerCover.src = song.cover;
      playerTitle.textContent = song.title;
      playerArtist.textContent = song.artist;
      audio.load();
      playAudio();
      highlightPlayingCard(idx);
    }
    function playAudio() {
      audio.play();
      isPlaying = true;
      btnPlayPause.innerHTML = '&#10073;&#10073;'; // Pause
    }
    function pauseAudio() {
      audio.pause();
      isPlaying = false;
      btnPlayPause.innerHTML = '&#9654;'; // Play
    }
    btnPlayPause.onclick = () => {
      if (!audio.src) {
        loadSong(0);
        return;
      }
      if (isPlaying) {
        pauseAudio();
      } else {
        playAudio();
      }
    };
    btnNext.onclick = () => {
      if (shuffle) {
        loadSong(Math.floor(Math.random() * currentSongsArray.length), currentSongsArray);
      } else {
        loadSong((currentSongIdx + 1) % currentSongsArray.length, currentSongsArray);
      }
    };
    btnPrev.onclick = () => {
      if (shuffle) {
        loadSong(Math.floor(Math.random() * currentSongsArray.length), currentSongsArray);
      } else {
        loadSong((currentSongIdx - 1 + currentSongsArray.length) % currentSongsArray.length);
      }
    };
    audio.onended = () => {
      if (repeatMode === 2) {
        playAudio(); // repeat one
      } else if (repeatMode === 1) {
        btnNext.onclick(); // repeat all
      }
      // repeatMode === 0: do nothing
    };
    btnRepeat.onclick = () => {
      repeatMode = (repeatMode + 1) % 3;
      if (repeatMode === 0) {
        btnRepeat.style.color = '#64b5f6';
        btnRepeat.style.boxShadow = '';
        btnRepeat.title = 'Repeat Off';
        btnRepeat.innerHTML = '&#128257;'; // repeat icon
      } else if (repeatMode === 1) {
        btnRepeat.style.color = '#fff';
        btnRepeat.style.boxShadow = '0 0 12px 2px #1976d2cc';
        btnRepeat.title = 'Repeat All';
        btnRepeat.innerHTML = '&#128257;'; // repeat icon
      } else if (repeatMode === 2) {
        btnRepeat.style.color = '#fff';
        btnRepeat.style.boxShadow = '0 0 12px 2px #1976d2cc';
        btnRepeat.title = 'Repeat One';
        btnRepeat.innerHTML = '&#128258;'; // repeat one icon
      }
    };
    audio.ontimeupdate = () => {
      let percent = (audio.currentTime / audio.duration) * 100;
      progressInner.style.width = percent + '%';
      playerCurrent.textContent = formatTime(audio.currentTime);
      playerDuration.textContent = formatTime(audio.duration);
    };
    function formatTime(sec) {
      if (isNaN(sec)) return '0:00';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
    let isDragging = false;

progressBar.addEventListener('mousedown', function(e) {
  isDragging = true;
  seekAudio(e);
});

document.addEventListener('mousemove', function(e) {
  if (isDragging) {
    seekAudio(e);
  }
});

document.addEventListener('mouseup', function() {
  isDragging = false;
});

// Touch support for mobile devices
progressBar.addEventListener('touchstart', function(e) {
  isDragging = true;
  seekAudio(e.touches[0]);
});

document.addEventListener('touchmove', function(e) {
  if (isDragging) {
    seekAudio(e.touches[0]);
  }
});

document.addEventListener('touchend', function() {
  isDragging = false;
});

function seekAudio(e) {
  const rect = progressBar.getBoundingClientRect();
  const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  audio.currentTime = percent * audio.duration;
}
    volumeRange.oninput = () => {
      audio.volume = volumeRange.value;
    };
    audio.volume = volumeRange.value;

    // Highlight playing song card
    function highlightPlayingCard(idx) {
      document.querySelectorAll('.music-card').forEach((card, i) => {
        card.style.boxShadow = i === idx ? "0 0 36px 8px #1e88e5cc, 0 0 18px 4px #fff8" : "";
        card.style.transform = i === idx ? "scale(1.05)" : "";
      });
    }

    // --- Settings Panel Logic ---
    const settingsPanel = document.getElementById('settings-panel');
    document.getElementById('close-settings').onclick = () => {
      settingsPanel.style.display = 'none';
    };
    document.getElementById('save-settings').onclick = () => {
      // Theme
      const theme = document.getElementById('theme-select').value;
      if (theme === 'blue') {
        document.body.style.background = 'linear-gradient(115deg, #141e30 68%, #243b55 100%)';
      } else if (theme === 'dark') {
        document.body.style.background = '#191c25';
      } else if (theme === 'light') {
        document.body.style.background = 'linear-gradient(120deg, #e3f2fd 60%, #90caf9 100%)';
      }
      // Speed
      audio.playbackRate = parseFloat(document.getElementById('speed-select').value);
      // Quality (simulated)
      // Account Name
      alert('Settings saved!');
      settingsPanel.style.display = 'none';
    };
    document.getElementById('logout-btn').onclick = () => {
      alert('Logged out!');
      settingsPanel.style.display = 'none';
    };

    // --- Click outside settings panel to close ---
    settingsPanel.addEventListener('click', (e) => {
      if (e.target === settingsPanel) settingsPanel.style.display = 'none';
    });
    // --- Contacts Panel Logic ---
      const contactsPanel = document.getElementById('contacts-panel');
      document.querySelector('.sidebar-link[data-section="contacts"]').onclick = function (e) {
        e.preventDefault();
        contactsPanel.style.display = 'flex';
      };
      document.getElementById('close-contacts').onclick = () => {
        contactsPanel.style.display = 'none';
      };