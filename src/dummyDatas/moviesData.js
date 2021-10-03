import {images} from '../constants'

const moviesDatas = [
    {
        id:1,
        title:'Pasific Rim',
        description:'Pacific Rim is a 2013 American science fiction monster film directed by Guillermo del Toro, starring Charlie Hunnam, Idris Elba, Rinko Kikuchi, Charlie Day, Robert Kazinsky, Max Martini, Ron Perlman, and Mana Ashida, and the first film in the Pacific Rim franchise. The screenplay was written by Travis Beacham and del Toro from a story by Beacham. The film is set in the future, when Earth is at war with the Kaiju,[a] colossal sea monsters which have emerged from an interdimensional portal on the bottom of the Pacific Ocean. To combat the monsters, humanity unites to create the Jaegers,[b] gigantic humanoid mechas, each controlled by two co-pilots whose minds are joined by a mental link. Focusing on the war`s later days, the story follows Raleigh Becket, a washed-up Jaeger pilot called out of retirement and teamed with rookie pilot Mako Mori as part of a last-ditch effort to defeat the Kaiju.',
        img:images.movies1,
        rating:bintang2,
        rate:4.8,
        backdrop:images.movies1
    },
    {
        id:2,
        title:'Guardian Of Galaxy',
        description:'Guardians of the Galaxy (retroactively referred to as Guardians of the Galaxy Vol. 1)[4][5] is a 2014 American superhero film based on the Marvel Comics superhero team of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 10th film in the Marvel Cinematic Universe (MCU). Directed by James Gunn, who wrote the screenplay with Nicole Perlman, the film features an ensemble cast including Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, and Bradley Cooper as the titular Guardians, along with Lee Pace, Michael Rooker, Karen Gillan, Djimon Hounsou, John C. Reilly, Glenn Close, and Benicio del Toro. In the film, Peter Quill and a group of extraterrestrial criminals go on the run after stealing a powerful artifact. ',
        img:images.movies2,
        rating:bintang5,
        rate:4.7,
        backdrop:images.movies2
    },
    {
        id:3,
        title:'Beyond Skyline',
        description:'Beyond Skyline is a 2017 American science fiction action film written and directed by Liam O`Donnell in his directorial debut. It stars Frank Grillo, Bojana Novakovic, Jonny Weston, Iko Uwais, Callan Mulvey, Yayan Ruhian, Pamelyn Chee, Betty Gabriel, and Antonio Fargas. It is a sequel to the 2010 film Skyline, set concurrently with the events of the first film.The film was released on December 15, 2017 in the United States by Vertical Entertainment. Unlike its critically panned predecessor, Beyond Skyline received mixed reviews, with several critics calling it an improvement over the original. ',
        img:images.movies3,
        rating:bintang3,
        rate:3.8,
        backdrop:images.movies3
    },
    {
        id:4,
        title:'Man of Steel',
        description:'Man of Steel is a 2013 superhero film based on the DC Comics character Superman. Produced by Warner Bros. Pictures, Legendary Pictures, DC Entertainment, Syncopy and Peters Entertainment, and distributed by Warner Bros. Pictures, it is a British-American production[2] and the first installment in the DC Extended Universe (DCEU).[5][6] The film is directed by Zack Snyder, written by David S. Goyer, and stars Henry Cavill, Amy Adams, Michael Shannon, Kevin Costner, Diane Lane, Laurence Fishburne, Antje Traue, Ayelet Zurer, Christopher Meloni and Russell Crowe. Man of Steel is a reboot of the Superman film series that portrays the character`s origin story. In the film, Clark Kent learns that he is a superpowered alien from the planet Krypton. He assumes the role of mankind`s protector as Superman, making the choice to face General Zod and prevent him from destroying humanity. ',
        img:images.movies4,
        rating:bintang4,
        rate:5.0,
        backdrop:images.movies4
    },
    {
        id:5,
        title:'Avenger: End Game',
        description:'Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse the damage caused by Thanos in Infinity War. ',
        img:images.movies5,
        rating:bintang5,
        rate:4.1,
        backdrop:images.movies5
    },
    {
        id:6,
        title:'100Days of Love',
        description:'100 Days of Love is a 2015 Indian Malayalam-language romantic comedy film written and directed by debutant Jenuse Mohamed. The film stars Dulquer Salmaan and Nithya Menen in the lead roles. The film released worldwide on 20 March 2015. It received positive reviews from critics. Dialogues by Duo writers M R Vibin and Suhail Ibrahim The Telugu dubbing rights were bought by Abshishek Pictures, who released the film across Andhra Pradesh, Telangana, Karnataka among several other states on 26 August 2016. ',
        img:images.movies6,
        rating:bintang4,
        rate:2.1,
        backdrop:images.movies6
    },
    {
        id:7,
        title:'Shadow in the Cloud',
        description:'Shadow in the Cloud is a 2020 action horror film directed by Roseanne Liang,[4] from a screenplay by Liang and Max Landis. The film stars Chloë Grace Moretz, Taylor John Smith, Nick Robinson, Beulah Koale and Callan Mulvey.Shadow in the Cloud had its world premiere on September 12, 2020 at the 2020 Toronto International Film Festival, where it won the People   s Choice Award for Midnight Madness.[5] and was released on January 1, 2021, by Vertical Entertainment and Redbox Entertainment. ',
        img:images.movies7,
        rating:bintang2,
        rate:3.5,
        backdrop:images.movies7
    },  
    {
        id:8,
        title:'Once Upon a Time In Hollywood',
        description:'Once Upon a Time in Hollywood[a] is a 2019 comedy-drama film written and directed by Quentin Tarantino. Produced by Columbia Pictures, Bona Film Group, Heyday Films, and Visiona Romantica and distributed by Sony Pictures Releasing, it is a co-production between the United States, United Kingdom, and China. It features a large ensemble cast led by Leonardo DiCaprio, Brad Pitt, and Margot Robbie. Set in 1969 Los Angeles, the film follows a fading character actor and his stunt double as they navigate the rapidly changing film industry, with the looming threat of the Tate-LaBianca Murders hanging overhead. It features "multiple storylines in a modern fairy tale tribute to the final moments of Hollywood`s golden age.',
        img:images.movies8,
        rating:bintang1,
        rate:4.9,
        backdrop:images.movies8
    }
]

const bintang1 = 1
const bintang2 = 2
const bintang3 = 3
const bintang4 = 4
const bintang5 = 5

export {moviesDatas}
