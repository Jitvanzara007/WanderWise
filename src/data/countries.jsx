export const countries = [
    {
        id: 1,
        name: "Japan",
        description: "A fascinating blend of ancient traditions and cutting-edge technology, Japan offers a unique travel experience.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        currency: "Japanese Yen (¥)",
        language: "Japanese",
        timezone: "UTC+9",
        continent: "Asia",
        bestTimeToVisit: "March to May and September to November for mild weather and beautiful scenery.",
        visaRequirements: "Visa requirements vary by nationality. Many countries receive 90-day visa-free entry.",
        gettingAround: "Efficient public transportation including bullet trains, subways, and buses.",
        tags: ["Culture", "Technology", "Food", "Nature", "History"],
        cities: [
            {
                id: "tokyo",
                name: "Tokyo",
                description: "A vibrant metropolis where the ultramodern and the traditional coexist.",
                image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
                temperature: "15°C - 30°C",
                places: [
                    {
                        id: "tokyo-tower",
                        name: "Tokyo Tower",
                        image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Iconic communications tower offering panoramic views of Tokyo.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Landmark"
                    },
                    {
                        id: "sensoji-temple",
                        name: "Sensoji Temple",
                        image: "https://www.touristinjapan.com/wp-content/uploads/2018/06/39574872171_e8020cece7_k.jpg",
                        description: "Tokyo's oldest and most significant Buddhist temple.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Religious Site"
                    },
                    {
                        id: "shibuya-crossing",
                        name: "Shibuya Crossing",
                        image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "World's busiest pedestrian crossing and symbol of modern Tokyo.",
                        rating: 4.6,
                        duration: "30 mins",
                        type: "Landmark"
                    },
                    {
                        id: "tsukiji-market",
                        name: "Tsukiji Outer Market",
                        image: "https://media.istockphoto.com/id/2058342237/photo/tsukiji-outer-market-in-tokyo-japan.jpg?s=612x612&w=0&k=20&c=OvY60P0SL4o5a2X_IaOZcyDTPvCUmMoKaZ0a0H-4yGI=",
                        description: "Famous fish market with fresh seafood and local cuisine.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Market"
                    }
                ]
            },
            {
                id: "kyoto",
                name: "Kyoto",
                description: "Japan's cultural heart with over 1,600 Buddhist temples and 400 Shinto shrines.",
                image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 35°C",
                places: [
                    {
                        id: "fushimi-inari",
                        name: "Fushimi Inari Shrine",
                        image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        bestTimeToVisit: "March-May, October-November",
                        description: "Shrine dedicated to Inari, the Shinto god of rice",
                        rating: 4.7,
                        type: "Religious Site"
                    },
                    {
                        id: "kinkaku-ji",
                        name: "Kinkaku-ji (Golden Pavilion)",
                        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Zen temple covered in gold leaf, surrounded by beautiful gardens.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Temple"
                    },
                    {
                        id: "arashiyama",
                        name: "Arashiyama Bamboo Grove",
                        image: "https://tse2.mm.bing.net/th?id=OIP.uINN797xyHICXw5L_4EN7AHaEK&pid=Api&P=0&h=180",
                        description: "Magical bamboo forest path and scenic mountain area.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Nature"
                    },
                    {
                        id: "kiyomizu-dera",
                        name: "Kiyomizu-dera Temple",
                        image: "https://a.cdn-hotels.com/gdcs/production184/d1612/12c8731c-afae-4a11-a3e3-e792eaa16061.jpg",
                        description: "Historic temple with wooden stage and panoramic views.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Temple"
                    }
                ]
            },
            {
                id: "osaka",
                name: "Osaka",
                description: "Japan's kitchen and entertainment capital, known for its food and nightlife.",
                image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "osaka-castle",
                        name: "Osaka Castle",
                        image: "https://i.pinimg.com/originals/17/3d/1f/173d1f141dd11a9374c3927dad4c9e03.jpg",
                        description: "Historic castle with museum and panoramic city views.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "dotonbori",
                        name: "Dotonbori",
                        image: "https://tse3.mm.bing.net/th?id=OIP.gMyd97CxdpY9Ea0uF1DYnwHaD3&pid=Api&P=0&h=180",
                        description: "Vibrant entertainment district with neon lights and street food.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Entertainment"
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: "France",
        description: "A country of art, fashion, and culinary excellence.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        currency: "Euro (€)",
        language: "French",
        timezone: "CET (UTC+1)",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to November for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Excellent train network (TGV), domestic flights, and regional buses available.",
        tags: ["Culture", "Food", "History", "Art", "Architecture"],
        cities: [
            {
                id: "paris",
                name: "Paris",
                description: "The City of Light is known for its iconic Eiffel Tower, world-class museums, and exquisite cuisine.",
                image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "eiffel-tower",
                        name: "Eiffel Tower",
                        image: "https://tse3.mm.bing.net/th?id=OIP.yxCsvFKOO69R714QgUh5iQHaEK&pid=Api&P=0&h=180",
                        description: "Iconic iron lattichttps://tse1.mm.bing.net/th?id=OIP.AW_3WtO4mpBHZSZBQ9OQ9QHaE8&pid=Api&P=0&h=180e tower on the Champ de Mars in Paris.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Landmark"
                    },
                    {
                        id: "louvre-museum",
                        name: "Louvre Museum",
                        image: "https://tse1.mm.bing.net/th?id=OIP.SiEYK8gVH-NSkwIkzjFnWQHaE8&pid=Api&P=0&h=180",
                        description: "World's largest art museum and historic monument, home to the Mona Lisa.",
                        bestTimeToVisit: "October-April",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum"
                    }
                ]
            },
            {
                id: "nice",
                name: "Nice",
                image: "https://www.bestofcinqueterre.com/photos/nice-promenade-des-anglais-from-viewpoint-of-castle-hill-2.jpg",
                description: "Beautiful coastal city on the French Riviera known for its beaches and promenade.",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "promenade-des-anglais",
                        name: "Promenade des Anglais",
                        image: "https://a.cdn-hotels.com/gdcs/production67/d1598/ef47e715-d543-4f3e-b13e-4f3e65fd9722.jpg",
                        description: "Famous seafront promenade with stunning Mediterranean views.",
                        bestTimeToVisit: "April-June, September-October",
                        rating: 4.8,
                        duration: "2 hours",
                        type: "Promenade"
                    },
                    {
                        id: "basilique-notre-dame",
                        name: "Basilique Notre-Dame de Nice",
                        image: "https://tse3.mm.bing.net/th?id=OIP.LAbF4h-2DGdwUxealTfaJgHaFj&pid=Api&P=0&h=180",
                        description: "Magnificent basilica with panoramic views of the city.",
                        bestTimeToVisit: "All year",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Religious Site"
                    }
                ]
            },
            {
                id: "bordeaux",
                name: "Bordeaux",
                image: "https://img.fotocommunity.com/bordeaux-place-de-la-bourse-7dcaf55d-3593-4e0b-aa69-e532a3b4f82a.jpg?height=1080",
                description: "Port city famous for its wine, elegant architecture, and vibrant waterfront.",
                temperature: "5°C - 28°C",
                places: [
                    {
                        id: "place-de-la-bourse",
                        name: "Place de la Bourse",
                        image: "https://img.fotocommunity.com/bordeaux-place-de-la-bourse-7dcaf55d-3593-4e0b-aa69-e532a3b4f82a.jpg?height=1080",
                        description: "Elegant square with the famous Water Mirror, the world's largest reflecting pool.",
                        bestTimeToVisit: "April-October",
                        rating: 4.7,
                        duration: "1 hour",
                        type: "Plaza"
                    },
                    {
                        id: "cite-du-vin",
                        name: "La Cité du Vin",
                        image: "https://tse4.mm.bing.net/th?id=OIP.0HLFrP0chpaWLEnFm4ij6gHaE8&pid=Api&P=0&h=180",
                        description: "Modern museum dedicated to the history of wine and wine culture.",
                        bestTimeToVisit: "All year",
                        rating: 4.5,
                        duration: "2-3 hours",
                        type: "Museum"
                    }
                ]
            },
            {
                id: "mont-saint-michel",
                name: "Mont-Saint-Michel",
                image: "https://images5.alphacoders.com/592/thumb-1920-592407.jpg",
                description: "Medieval monastery perched on a rocky island, one of France's most iconic landmarks.",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "abbey",
                        name: "Mont-Saint-Michel Abbey",
                        image: "https://tse3.mm.bing.net/th?id=OIP.EaqJVRQt2kk1s6SMRlOLSgHaEK&pid=Api&P=0&h=180",
                        description: "Historic Benedictine abbey with stunning Gothic architecture.",
                        bestTimeToVisit: "May-September",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "village",
                        name: "Medieval Village",
                        image: "https://tse2.mm.bing.net/th?id=OIP.F-LatN1Y1QFCYiPv6ndRgQHaE6&pid=Api&P=0&h=180",
                        description: "Charming village with narrow streets and historic buildings.",
                        bestTimeToVisit: "May-September",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Historic District"
                    }
                ]
            },
            {
                id: "provence",
                name: "Provence",
                image: "https://tse2.mm.bing.net/th?id=OIP.PqMBK31TZKWB9wthNG5RVwHaE7&pid=Api&P=0&h=180",
                description: "Picturesque region known for lavender fields, charming villages, and Mediterranean climate.",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "lavender-fields",
                        name: "Lavender Fields of Valensole",
                        image: "https://tse3.mm.bing.net/th?id=OIP.hu3oIcJrj94lzlm4_c7Q3AHaFj&pid=Api&P=0&h=180",
                        description: "Stunning purple lavender fields stretching to the horizon.",
                        bestTimeToVisit: "June-July",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Natural Landscape"
                    },
                    {
                        id: "aix-en-provence",
                        name: "Aix-en-Provence",
                        image: "https://tse2.mm.bing.net/th?id=OIP.gs_iI5ODyRVOaEZ4Bs44vgHaEJ&pid=Api&P=0&h=180",
                        description: "Elegant city with tree-lined boulevards, fountains, and historic architecture.",
                        bestTimeToVisit: "April-October",
                        rating: 4.7,
                        duration: "1 day",
                        type: "City"
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        name: "United States",
        description: "Diverse landscapes, iconic cities, and cultural experiences.",
        image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "US Dollar ($)",
        language: "English",
        timezone: "UTC-12 to UTC+12",
        continent: "North America",
        bestTimeToVisit: "April to October for most regions.",
        visaRequirements: "ESTA or visa required for most nationalities.",
        gettingAround: "Domestic flights, rental cars, and public transportation in cities.",
        tags: ["Nature", "Cities", "Culture", "Entertainment", "Shopping"],
        cities: [
            {
                id: "new-york",
                name: "New York City",
                description: "The city that never sleeps, known for its iconic skyline and cultural diversity.",
                image: "https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/16:9/w_2560%2Cc_limit/GettyImages-931933966.jpg",
                temperature: "-5°C - 35°C",
                places: [
                    {
                        id: "statue-of-liberty",
                        name: "Statue of Liberty",
                        image: "https://media.architecturaldigest.com/photos/5cdadfa704c41e74349a8438/16:9/w_2560%2Cc_limit/GettyImages-931933966.jpg",
                        description: "Iconic symbol of freedom and democracy.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Landmark"
                    },
                    {
                        id: "central-park",
                        name: "Central Park",
                        image: "https://www.tripsavvy.com/thmb/y4Q1NpK7WZbhDShNc8FAtshFFGg=/3864x2577/filters:no_upscale():max_bytes(150000):strip_icc()/new-york-city--central-park-171080521-5ae3262c1f4e130036176e7b.jpg",
                        description: "Vast urban park with lakes, trails, and recreational facilities.",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Park"
                    },
                    {
                        id: "times-square",
                        name: "Times Square",
                        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Famous commercial intersection and entertainment hub.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Entertainment"
                    }
                ]
            },
            {
                id: "los-angeles",
                name: "Los Angeles",
                description: "Entertainment capital with beaches, Hollywood, and diverse neighborhoods.",
                image: "https://ivctechnologies.com/wp-content/uploads/2019/03/AdobeStock_80216620.jpeg",
                temperature: "10°C - 35°C",
                places: [
                    {
                        id: "hollywood-sign",
                        name: "Hollywood Sign",
                        image: "https://i.pinimg.com/originals/ab/5f/28/ab5f283bf40aebbc8f8b9986f227ceec.jpg",
                        description: "Iconic landmark overlooking Hollywood.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark"
                    },
                    {
                        id: "santa-monica-pier",
                        name: "Santa Monica Pier",
                        image: "https://govisity.com/wp-content/uploads/2018/10/Santa-Monica-Pier-Los-Angeles-California-Visit-in-USA.jpg",
                        description: "Historic pier with amusement park and ocean views.",
                        rating: 4.6,
                        duration: "3-4 hours",
                        type: "Entertainment"
                    }
                ]
            },
            {
                id: "chicago",
                name: "Chicago",
                description: "Architectural marvels, deep-dish pizza, and lakefront beauty.",
                image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "-15°C - 35°C",
                places: [
                    {
                        id: "millennium-park",
                        name: "Millennium Park",
                        image: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Modern park featuring the famous Cloud Gate sculpture.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Park"
                    },
                    {
                        id: "willis-tower",
                        name: "Willis Tower",
                        image: "https://i.pinimg.com/originals/47/7f/f1/477ff166e5be9241d729524d98cd5493.jpg",
                        description: "Iconic skyscraper with observation deck.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark"
                    }
                ]
            },
            {
                id: "las-vegas",
                name: "Las Vegas",
                description: "Entertainment capital with casinos, shows, and nightlife.",
                image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 45°C",
                places: [
                    {
                        id: "strip",
                        name: "The Strip",
                        image: "https://media.istockphoto.com/id/1298123947/photo/the-famous-las-vegas-strip-with-the-bellagio-fountain-the-strip-is-home-to-the-largest-hotels.jpg?s=612x612&w=0&k=20&c=dMdkPGXGUgf8SrFa8k7hJOhTniZwf2qQcGFBWtIQ0Ns=",
                        description: "Famous boulevard with luxury hotels and casinos.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Entertainment"
                    },
                    {
                        id: "fremont-street",
                        name: "Fremont Street",
                        image: "https://media.gettyimages.com/id/599622377/photo/neon-sign-for-fremont-at-night-downtown-las-vegas-nevada-usa.jpg?s=612x612&w=0&k=20&c=7NsoJOdMFBZFCApTDhUPFq_Z1aLFOM2AB-0N4ZvtE_c=",
                        description: "Historic downtown area with light shows and casinos.",
                        rating: 4.6,
                        duration: "3-4 hours",
                        type: "Entertainment"
                    }
                ]
            },
            {
                id: "miami",
                name: "Miami",
                description: "Tropical paradise with beaches, art deco architecture, and vibrant culture.",
                image: "https://www.tripsavvy.com/thmb/iIuadVB5VqfQnXmee3DyK5HcGuk=/2121x1414/filters:fill(auto,1)/miami-skyline--florida-717173477-634a7f9c2192419eb1234e109a27c8fc.jpg",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "south-beach",
                        name: "South Beach",
                        image: "https://media.gettyimages.com/id/1299120919/photo/sun-beds-at-miami-beach-on-a-sunny-day-florida-usa.jpg?s=612x612&w=0&k=20&c=nV7I_7yyds1nfSg-FRv1zVAyoobChwuSz9CC8WAhRvk=",
                        description: "Famous beach with art deco architecture and nightlife.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Beach"
                    },
                    {
                        id: "little-havana",
                        name: "Little Havana",
                        image: "https://i.ytimg.com/vi/7A8-TxfohQg/maxresdefault.jpg",
                        description: "Cuban cultural district with restaurants and music.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Cultural District"
                    }
                ]
            },
            {
                id: "san-francisco",
                name: "San Francisco",
                description: "Hilly city known for the Golden Gate Bridge and cable cars.",
                image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 25°C",
                places: [
                    {
                        id: "golden-gate-bridge",
                        name: "Golden Gate Bridge",
                        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                        description: "Iconic suspension bridge spanning the Golden Gate strait.",
                        rating: 4.9,
                        duration: "1-2 hours",
                        type: "Landmark"
                    },
                    {
                        id: "alcatraz",
                        name: "Alcatraz Island",
                        image: "https://www.gannett-cdn.com/media/2018/08/17/USATODAY/USATODAY/636701422865855661-GettyImages-632216604.jpg",
                        description: "Historic prison island with guided tours.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Historic Site"
                    }
                ]
            }
        ]
    },
    
    {
        id: 3,
        name: "United Arab Emirates",
        description: "Modern desert nation known for luxury shopping, ultramodern architecture, and lively nightlife.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        currency: "UAE Dirham (AED)",
        language: "Arabic",
        timezone: "UTC+4",
        continent: "Asia",
        bestTimeToVisit: "November to March when temperatures are cooler.",
        visaRequirements: "Visa requirements vary by nationality. Many Western countries receive visa on arrival.",
        gettingAround: "Metro in Dubai, taxis, and ride-sharing services are widely available.",
        tags: ["Luxury", "Architecture", "Shopping", "Desert", "Beaches"],
        cities: [
            {
                id: "dubai",
                name: "Dubai",
                description: "Ultra-modern city known for luxury shopping, futuristic architecture, and vibrant nightlife.",
                image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "20°C - 45°C",
                places: [
                    {
                        id: "burj-khalifa",
                        name: "Burj Khalifa",
                        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        description: "World's tallest building with observation deck and luxury hotel.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Architecture"
                    },
                    {
                        id: "palm-jumeirah",
                        name: "Palm Jumeirah",
                        image: "https://wallpaperaccess.com/full/9052099.jpg",
                        description: "Artificial archipelago with luxury hotels, restaurants, and beaches.",
                        bestTimeToVisit: "November to March",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Landmark"
                    },
                    {
                        id: "dubai-mall",
                        name: "The Dubai Mall",
                        image: "https://tse1.mm.bing.net/th?id=OIP.kwsalpKdf2XK-t5n0y2X3QHaDh&pid=Api&P=0&h=180",
                        description: "One of the world's largest shopping malls with an aquarium and indoor theme park.",
                        bestTimeToVisit: "All year",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Shopping"
                    }
                ]
            },
            {                                                                               
                id: "abu-dhabi",
                name: "Abu Dhabi",                                                          
                image: "https://media.istockphoto.com/id/494812908/photo/sea-and-skyscrapers-in-abu-dhabi.jpg?s=612x612&w=0&k=20&c=RDbSQ7Ps2I2opsOho2n6F9aZBrhbLhWU1jyPAZeIT_I=",
                description: "The capital city with a blend of modern skyscrapers, traditional buildings, and cultural attractions.",
                temperature: "20°C - 45°C",
                places: [
                    {
                        id: "sheikh-zayed-mosque",
                        name: "Sheikh Zayed Grand Mosque",
                        image: "https://media.istockphoto.com/id/1138005939/photo/sheikh-zayed-grand-mosque.webp?a=1&b=1&s=612x612&w=0&k=20&c=or2VjbynqPXTFf08Rr31eXyFtiiumIvPOHVzm_UI1xg=",
                        bestTimeToVisit: "November to March",
                        rating: 4.9,
                        duration: "2 hours",
                        type: "Religious Site"
                    },
                    {
                        id: "louvre-abu-dhabi",
                        name: "Louvre Abu Dhabi",
                        image: "https://tse4.mm.bing.net/th?id=OIP.V3Vb-LfPv80fbBg8mUTWkQHaEK&pid=Api&P=0&h=180",
                        description: "Art and civilization museum with works from around the world.",
                        bestTimeToVisit: "All year",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum"
                    },
                    {
                        id: "ferrari-world",
                        name: "Ferrari World",
                        image: "https://tse3.mm.bing.net/th?id=OIP.nDUEMK1moVEMRAAiGsw3bwHaE7&pid=Api&P=0&h=180://images.unsplash.com/photo-1622653533660-a1c5c0bcd2ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        description: "Indoor amusement park with Ferrari-themed rides and attractions.",
                        bestTimeToVisit: "All year",
                        rating: 4.7,
                        duration: "Full day",
                        type: "Theme Park"
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Italy",
        description: "A European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine.",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        currency: "Euro (€)",
        language: "Italian",
        timezone: "CET (UTC+1)",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to October for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Extensive train network, regional buses, and domestic flights available.",
        tags: ["History", "Art", "Food", "Architecture", "Culture"],
        cities: [
            {
                id: "rome",
                name: "Rome",
                description: "The Eternal City is home to ancient ruins, Renaissance art, and Vatican City.",
                image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "colosseum",
                        name: "Colosseum",
                        image: "https://images.unsplash.com/photo-1552432552-06c0b0a94dda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-June, September-October",
                        description: "Iconic ancient Roman amphitheater, once used for gladiatorial contests.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "vatican-museums",
                        name: "Vatican Museums",
                        image: "https://images.unsplash.com/photo-1590005024862-6b67679a29fb?q=80&w=2009&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-June, September-October",
                        description: "World-renowned museums featuring art collected by the Catholic Church.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Museum"
                    },
                    {
                        id: "trevi-fountain",
                        name: "Trevi Fountain",
                        image: "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-June, September-October",
                        description: "Baroque fountain known for the tradition of throwing coins.",
                        rating: 4.6,
                        duration: "30 minutes",
                        type: "Landmark"
                    }
                ]
            },
            {
                id: "venice",
                name: "Venice",
                description: "Romantic city built on a lagoon, famous for its canals, gondolas, and historic architecture.",
                image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "5°C - 28°C",
                places: [
                    {
                        id: "st-marks-square",
                        name: "St. Mark's Square",
                        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2066&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-May, September-October",
                        description: "Main public square of Venice, surrounded by historic buildings and cafes.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Plaza"
                    },
                    {
                        id: "grand-canal",
                        name: "Grand Canal",
                        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-May, September-October",
                        description: "Main waterway through Venice, lined with historic palaces.",
                        rating: 4.9,
                        duration: "1-2 hours",
                        type: "Waterway"
                    }
                ]
            },
            {
                id: "florence",
                name: "Florence",
                image: "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Birthplace of the Renaissance, known for its art, architecture, and Tuscan cuisine.",
                temperature: "5°C - 30°C",
                places: [
                    {
                        id: "uffizi-gallery",
                        name: "Uffizi Gallery",
                        image: "https://images.unsplash.com/photo-1591014979414-c34976c808c8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                        bestTimeToVisit: "April-June, September-October",
                        description: "One of the world's most important art museums.",
                        rating: 4.8,
                        duration: "3-4 hours",
                        type: "Museum"
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        name: "Spain",
        description: "Vibrant culture, stunning architecture, and beautiful beaches.",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Euro (€)",
        language: "Spanish",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "April to June and September to October for pleasant weather and fewer crowds.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Extensive train network, domestic flights, and regional buses available.",
        tags: ["Culture", "Beaches", "Food", "Architecture", "History"],
        cities: [
            {
                id: "barcelona",
                name: "Barcelona",
                description: "Artistic city with unique architecture and Mediterranean charm.",
                image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "sagrada-familia",
                        name: "Sagrada Familia",
                        image: "https://wallpaperaccess.com/full/8741867.jpg",
                        description: "Antoni Gaudí's unfinished masterpiece, a UNESCO World Heritage site.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Architecture"
                    },
                    {
                        id: "park-guell",
                        name: "Park Güell",
                        image: "https://tse1.mm.bing.net/th?id=OIP.AqF5yqBzRUotrosgO3fF8wHaDZ&pid=Api&P=0&h=180",
                        bestTimeToVisit: "April to June, September to October",
                        description: "Colorful park with Gaudi's architectural elements",
                        rating: 4.8,
                        duration: "2 hours",
                        type: "Park"
                    },
                    {
                        id: "casa-batllo",
                        name: "Casa Batlló",
                        image: "https://tse3.mm.bing.net/th?id=OIP.Lz12ROibXm0tfndmc_Z0bgHaE6&pid=Api&P=0&h=180",
                        description: "Gaudí's masterpiece with organic architecture and colorful facade.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Architecture"
                    },
                    {
                        id: "la-rambla",
                        name: "La Rambla",
                        image: "https://www.cap-voyage.com/wp-content/uploads/2022/04/Las-Ramblas-a-Barcelone.jpg",
                        description: "Famous tree-lined pedestrian street with street performers and markets.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Street"
                    }
                ]
            },
            {
                id: "madrid",
                name: "Madrid",
                description: "Spain's capital with rich art and cultural heritage.",
                image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "prado-museum",
                        name: "Prado Museum",
                        image: "https://tse1.mm.bing.net/th?id=OIP.1gt1o5bfTwNpMmaidLkStwHaEo&pid=Api&P=0&h=180",
                        bestTimeToVisit: "All year",
                        description: "One of the world's finest art museums"
                    },
                    {
                        id: "retiro-park",
                        name: "Retiro Park",
                        image: "https://i.pinimg.com/originals/62/f5/b9/62f5b90952d839b0834ee2dcf0ed21fa.jpg",
                        description: "Beautiful park with Crystal Palace and boating lake.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Park"
                    },
                    {
                        id: "plaza-mayor",
                        name: "Plaza Mayor",
                        image: "https://tse4.mm.bing.net/th?id=OIP.yZ6vaApq8iCKL3g79YDKXAHaEs&pid=Api&P=0&h=180",
                        description: "Historic square with beautiful architecture and outdoor cafes.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Plaza"
                    }
                ]
            },
            {
                id: "seville",
                name: "Seville",
                description: "Andalusian city known for flamenco, tapas, and Moorish architecture.",
                image: "https://tse4.mm.bing.net/th?id=OIP.5IA4-kPiXhKtgqAECiBeKgHaEK&pid=Api&P=0&h=180",
                temperature: "10°C - 40°C",
                places: [
                    {
                        id: "alcazar",
                        name: "Real Alcázar",
                        image: "https://s.inyourpocket.com/gallery/seville/2019/09/real-alcazar-patio-doncellas-sevilla-59184254-istock.jpg",
                        description: "Royal palace with stunning Moorish architecture and gardens.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Palace"
                    },
                    {
                        id: "cathedral",
                        name: "Seville Cathedral",
                        image: "https://tse2.mm.bing.net/th?id=OIP.picjfSiKV6bDTgZT81VF8AHaCU&pid=Api&P=0&h=180",
                        description: "World's largest Gothic cathedral with Giralda tower.",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Cathedral"
                    }
                ]
            },
            {
                id: "granada",
                name: "Granada",
                description: "Historic city with stunning Alhambra palace and Moorish influence.",
                image: "https://tse4.mm.bing.net/th?id=OIP.Vmwj9AyO5o1e3-89DF6z2wHaE7&pid=Api&P=0&h=180",
                temperature: "5°C - 35°C",
                places: [
                    {
                        id: "alhambra",
                        name: "Alhambra",
                        image: "https://tse3.mm.bing.net/th?id=OIP.8GeLtZDd0BGald_1oEmX0QHaFS&pid=Api&P=0&h=180",
                        description: "Stunning Moorish palace and fortress complex.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Palace"
                    },
                    {
                        id: "albaicin",
                        name: "Albaicín",
                        image: "https://tse2.mm.bing.net/th?id=OIP.poXLwSpZT--UH-ODmbi7sQHaE8&pid=Api&P=0&h=180",
                        description: "Historic Moorish quarter with narrow streets and viewpoints.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Historic District"
                    }
                ]
            },
            {
                id: "ibiza",
                name: "Ibiza",
                description: "Famous party island with beautiful beaches and historic old town.",
                image: "https://tse3.mm.bing.net/th?id=OIP.7kDOM8zkw3gyVg6iEjGmrwHaE3&pid=Api&P=0&h=180",
                temperature: "15°C - 35°C",
                places: [
                    {
                        id: "dalt-vila",
                        name: "Dalt Vila",
                        image: "https://tse4.mm.bing.net/th?id=OIP.WPslgUTqoK4rENwqy2dR8wHaEE&pid=Api&P=0&h=180",
                        description: "UNESCO-listed old town with medieval walls and stunning views.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic District"
                    },
                    {
                        id: "cala-comte",
                        name: "Cala Comte",
                        image: "https://tse1.mm.bing.net/th?id=OIP.KjGsTnjkE4bfyomH0BVOigHaFj&pid=Api&P=0&h=180",
                        description: "Beautiful beach with crystal clear waters and sunset views.",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Beach"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: "Thailand",
        description: "A tropical paradise known for its beaches, temples, and vibrant street life.",
        image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        currency: "Thai Baht (฿)",
        language: "Thai",
        timezone: "UTC+7",
        continent: "Asia",
        bestTimeToVisit: "November to February when the weather is cooler and drier.",
        visaRequirements: "Visa requirements vary by nationality. Many countries receive visa-free entry.",
        gettingAround: "Domestic flights, trains, buses, and tuk-tuks available.",
        tags: ["Beaches", "Temples", "Food", "Nature", "Culture"],
        cities: [
            {
                id: "bangkok",
                name: "Bangkok",
                description: "Bustling metropolis known for street food and temples.",
                image: "https://tse2.mm.bing.net/th?id=OIP.7I5fMJXSsLO1PdKC6B_NbgHaEo&pid=Api&P=0&h=180",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "grand-palace",
                        name: "Grand Palace",
                        image: "https://tse4.mm.bing.net/th?id=OIP.KRrnc2l5KiQrYORxLSjxjQHaE7&pid=Api&P=0&h=180",
                        bestTimeToVisit: "November-February",
                        description: "Royal palace with beautiful architecture and the famous Emerald Buddha",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "wat-arun",
                        name: "Wat Arun",
                        image: "https://sentosawisata.com/wp-content/uploads/2013/11/Wat-Arun-Bangkok.jpg",
                        description: "Temple of Dawn with stunning riverside views",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Temple"
                    },
                    {
                        id: "chatuchak-market",
                        name: "Chatuchak Weekend Market",
                        image: "https://tse1.mm.bing.net/th?id=OIP.xZvicQdFfhrE_1vbUdD9-wHaEV&pid=Api&P=0&h=180",
                        description: "World's largest weekend market with over 15,000 stalls",
                        rating: 4.6,
                        duration: "3-4 hours",
                        type: "Market"
                    }
                ]
            },
            {
                id: "phuket",
                name: "Phuket",
                description: "Thailand's largest island with beaches and nightlife.",
                image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                temperature: "25°C - 32°C",
                places: [
                    {
                        id: "patong-beach",
                        name: "Patong Beach",
                        image: "https://content.phuket101.net/wp-content/uploads/20170722181914/patong-copy-2.jpg",
                        bestTimeToVisit: "November-April",
                        description: "Popular beach with vibrant nightlife and water activities",
                        rating: 4.5,
                        duration: "Full day",
                        type: "Beach"
                    },
                    {
                        id: "big-buddha",
                        name: "Big Buddha",
                        image: "https://tse3.mm.bing.net/th?id=OIP.V_F6l81tRvfzndq_C-_J5wHaEK&pid=Api&P=0&h=180",
                        description: "45-meter tall white marble statue with panoramic views",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Landmark"
                    }
                ]
            },
            {
                id: "chiang-mai",
                name: "Chiang Mai",
                description: "Cultural heart of Northern Thailand with ancient temples and mountain scenery.",
                image: "https://tse4.mm.bing.net/th?id=OIP.Pyi5AcmaDQGCLRI8sA4N-wHaE8&pid=Api&P=0&h=180",
                temperature: "20°C - 35°C",
                places: [
                    {
                        id: "wat-phra-singh",
                        name: "Wat Phra Singh",
                        image: "https://tse4.mm.bing.net/th?id=OIP.Vg6Af9yFA2c0aa_I8pMMoQHaDz&pid=Api&P=0&h=180",
                        description: "Most revered temple in Chiang Mai with beautiful Lanna architecture",
                        rating: 4.8,
                        duration: "1-2 hours",
                        type: "Temple"
                    },
                    {
                        id: "doi-suthep",
                        name: "Doi Suthep",
                        image: "https://tse2.mm.bing.net/th?id=OIP.d1UW7PNswDD_HHsewPhk5gHaE8&pid=Api&P=0&h=180",
                        description: "Sacred temple on the mountain with panoramic views",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Temple"
                    }
                ]
            },
            {
                id: "krabi",
                name: "Krabi",
                description: "Stunning coastal province with limestone cliffs and crystal-clear waters.",
                image: "https://tse1.mm.bing.net/th?id=OIP.6ZNp6CZJ4wghoXgXcRME-QHaE8&pid=Api&P=0&h=180",
                temperature: "25°C - 33°C",
                places: [
                    {
                        id: "railay-beach",
                        name: "Railay Beach",
                        image: "https://www.krabi-thailand-infoportal.de/wp-content/uploads/2018/04/DSCF3031.jpg",
                        description: "Secluded beach accessible only by boat, famous for rock climbing",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Beach"
                    },
                    {
                        id: "tiger-cave-temple",
                        name: "Tiger Cave Temple",
                        image: "https://tse4.mm.bing.net/th?id=OIP.1bhmYpXNGNVzpR4UZvgjrgHaE6&pid=Api&P=0&h=180",
                        description: "Buddhist temple with 1,237 steps to the summit",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Temple"
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        name: "Australia",
        description: "Diverse landscapes from beaches to outback adventures.",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Australian Dollar (A$)",
        language: "English",
        timezone: "UTC+8 to UTC+10",
        continent: "Oceania",
        bestTimeToVisit: "September to November and March to May for pleasant weather.",
        visaRequirements: "ETA or visa required for most nationalities.",
        gettingAround: "Domestic flights, rental cars, and public transportation in cities.",
        tags: ["Nature", "Beaches", "Wildlife", "Adventure", "Culture"],
        cities: [
            {
                id: "sydney",
                name: "Sydney",
                description: "Australia's largest city, known for its iconic Opera House and harbor.",
                image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "10°C - 30°C",
                places: [
                    {
                        id: "sydney-opera-house",
                        name: "Sydney Opera House",
                        image: "https://assets.atdw-online.com.au/images/082abec166a817adfae646daff53ad70.jpeg?rect=0%2C0%2C2048%2C1536&w=2048&h=1536&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjIzYzkyZDVmMTU2NTA0NWQ4MTBkMiIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9",
                        description: "Iconic performing arts center and architectural masterpiece.",
                        rating: 4.9,
                        duration: "2-3 hours",
                        type: "Architecture"
                    },
                    {
                        id: "bondi-beach",
                        name: "Bondi Beach",
                        image: "https://www.travoh.com/wp-content/uploads/2020/12/01-Bondi-Beach-Exploring-10-of-the-Top-Beaches-in-Sydney-Australia.jpg",
                        description: "Famous beach with great surfing and coastal walks.",
                        rating: 4.8,
                        duration: "Half day",
                        type: "Beach"
                    },
                    {
                        id: "harbour-bridge",
                        name: "Sydney Harbour Bridge",
                        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/474000/474772-Australia.jpg",
                        description: "Iconic bridge offering climbing experiences and stunning views.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Landmark"
                    }
                ]
            },
            {
                id: "melbourne",
                name: "Melbourne",
                description: "Cultural capital known for its arts, coffee culture, and sporting events.",
                image: "https://wallpaperaccess.com/full/1287723.jpg",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "federation-square",
                        name: "Federation Square",
                        image: "https://www.ytravelblog.com/wp-content/uploads/2014/03/melbourne-5-050.jpg",
                        description: "Cultural precinct with museums, galleries, and restaurants.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Cultural Center"
                    },
                    {
                        id: "great-ocean-road",
                        name: "Great Ocean Road",
                        image: "https://www.pommietravels.com/wp-content/uploads/2011/03/Great-Ocean-Road-Australia.jpg",
                        description: "Scenic coastal drive with the Twelve Apostles rock formations.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Scenic Drive"
                    }
                ]
            },
            {
                id: "gold-coast",
                name: "Gold Coast",
                description: "Famous for its beaches, theme parks, and surfing spots.",
                image: "/src/assets/goldcoast.png",
                temperature: "15°C - 30°C",
                places: [
                    {
                        id: "surfers-paradise",
                        name: "Surfers Paradise",
                        image: "https://www.aquaduck.com.au/wp-content/uploads/2020/07/PNR_SURFERS-PARADISE-ALLIANCE_2019-1-large.jpg",
                        description: "Famous beach with high-rise buildings and vibrant nightlife.",
                        rating: 4.6,
                        duration: "Full day",
                        type: "Beach"
                    },
                    {
                        id: "dreamworld",
                        name: "Dreamworld",
                        image: "https://media1.thrillophilia.com/filestore/zb9nen1s7utgrv9g0t7l6nspbw1d_Rides_in_Dreamworld_Gold_Coast_ddbccd4ccb.jpg",
                        description: "Popular theme park with rides and wildlife experiences.",
                        rating: 4.5,
                        duration: "Full day",
                        type: "Theme Park"
                    }
                ]
            },
            {
                id: "perth",
                name: "Perth",
                description: "Western Australia's capital with beautiful beaches and parks.",
                image: "https://www.thesouthwestedge.com.au/wp-content/uploads/2020/04/Perth_Elizabeth-Quay_-Day-scaled.jpg",
                temperature: "10°C - 35°C",
                places: [
                    {
                        id: "kings-park",
                        name: "Kings Park",
                        image: "http://images.trvl-media.com/media/content/shared/images/travelguides/destination/180013/Kings-Park-And-Botanic-Garden-40092.jpg",
                        description: "Large park with panoramic views of the city and Swan River.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Park"
                    },
                    {
                        id: "rottnest-island",
                        name: "Rottnest Island",
                        image: "https://springtime.se/wp-content/uploads/2016/01/Perth-Rottnest-Island.jpg",
                        description: "Island known for quokkas and beautiful beaches.",
                        rating: 4.7,
                        duration: "Full day",
                        type: "Island"
                    }
                ]
            },
            {
                id: "cairns",
                name: "Cairns",
                description: "Gateway to the Great Barrier Reef and Daintree Rainforest.",
                image: "https://artoftravel.tips/wp-content/uploads/2016/09/449259-Cairns-Esplanade-Landscape.jpg",
                temperature: "20°C - 35°C",
                places: [
                    {
                        id: "great-barrier-reef",
                        name: "Great Barrier Reef",
                        image: "https://www.diversden.com.au/wp-content/uploads/2020/01/Snorkelling-Trip-from-Cairns-120-1.jpg",
                        description: "World's largest coral reef system with amazing marine life.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Natural Wonder"
                    },
                    {
                        id: "daintree-rainforest",
                        name: "Daintree Rainforest",
                        image: "https://www.citysider.com.au/site/wp-content/uploads/img/daintree-rainforest-cairns-port-douglas-1.jpg",
                        description: "Ancient rainforest with unique wildlife and hiking trails.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Rainforest"
                    }
                ]
            },
            {
                id: "uluru",
                name: "Uluru",
                description: "Sacred Aboriginal site and iconic natural landmark.",
                image: "/src/assets/uluru.png",
                temperature: "5°C - 40°C",
                places: [
                    {
                        id: "ayers-rock",
                        name: "Uluru (Ayers Rock)",
                        image: "https://www.jetstar.com/_/media/destinations/images/australia/ayers-rock-uluru/poi/shutterstock-239397151.jpg?rev=d6a02b4e3cad4f1a932ab784e558a5f7&w=320&rc=1&cw=320&ch=200&cx=0&cy=0&hash=E68BE14DD98392A59FFC7ACFD00ECB744AD8DF53%20320w,/_/media/destinations/images/australia/ayers-rock-uluru/poi/shutterstock-239397151.jpg?rev=d6a02b4e3cad4f1a932ab784e558a5f7&w=480&rc=1&cw=480&ch=300&cx=0&cy=0&hash=30A4C0F992C3622A8B136A8BC5E3356A39C2020B%20480w,/_/media/destinations/images/australia/ayers-rock-uluru/poi/shutterstock-239397151.jpg?rev=d6a02b4e3cad4f1a932ab784e558a5f7&w=640&rc=1&cw=640&ch=400&cx=0&cy=0&hash=26392A9ED7EF2A830F42809CF087025A5AF25B3C%20640w",
                        description: "Massive sandstone monolith with cultural significance.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Natural Wonder"
                    },
                    {
                        id: "kata-tjuta",
                        name: "Kata Tjuta (The Olgas)",
                        image: "https://uluru-australia.com/wp-content/uploads/2022/01/Walpa-Gorge-entrance-in-Kata-Tjuta.jpg",
                        description: "Group of large domed rock formations near Uluru.",
                        rating: 4.8,
                        duration: "Half day",
                        type: "Natural Wonder"
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: "United Kingdom",
        description: "Historic landmarks, royal palaces, and cultural diversity.",
        image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
        currency: "British Pound (£)",
        language: "English",
        timezone: "UTC+0",
        continent: "Europe",
        bestTimeToVisit: "April to September for pleasant weather.",
        visaRequirements: "Visa required for most non-EU nationals.",
        gettingAround: "Extensive public transport network including the Underground.",
        tags: ["History", "Culture", "Architecture", "Royalty", "Museums"],
        cities: [
            {
                id: "london",
                name: "London",
                description: "Capital city with iconic landmarks and rich history.",
                image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "buckingham-palace",
                        name: "Buckingham Palace",
                        image: "https://media.timeout.com/images/100686093/image.jpg",
                        description: "Official residence of the British monarch.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Royal Palace"
                    },
                    {
                        id: "tower-of-london",
                        name: "Tower of London",
                        image: "https://i.ytimg.com/vi/_CqWuphG1iE/maxresdefault.jpg",
                        description: "Historic castle and fortress on the north bank of the River Thames.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "british-museum",
                        name: "British Museum",
                        image: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/the-British-Museum.jpg",
                        description: "World-famous museum of human history and culture.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Museum"
                    },
                    {
                        id: "london-eye",
                        name: "London Eye",
                        image: "https://images.hdqwalls.com/download/dawn-at-the-london-eye-4k-7f-1920x1080.jpg",
                        description: "Giant observation wheel on the South Bank of the River Thames.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Attraction"
                    }
                ]
            },
            {
                id: "edinburgh",
                name: "Edinburgh",
                description: "Scotland's capital with medieval architecture and cultural festivals.",
                image: "https://a.cdn-hotels.com/gdcs/production139/d484/ef175ad9-0f5b-440d-92e8-c54de869827c.jpg",
                temperature: "0°C - 20°C",
                places: [
                    {
                        id: "edinburgh-castle",
                        name: "Edinburgh Castle",
                        image: "https://www.webbaviation.co.uk/aerial/_data/i/galleries/z_Scotland/Edinburgh/Edinburgh_Castle_db58673-me.jpg",
                        description: "Historic fortress dominating the city's skyline.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Castle"
                    },
                    {
                        id: "royal-mile",
                        name: "Royal Mile",
                        image: "https://a.cdn-hotels.com/gdcs/production163/d1461/07c0b027-66a3-4574-9b26-40c228ee5f29.jpg",
                        description: "Historic street connecting Edinburgh Castle to Holyrood Palace.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Historic Street"
                    }
                ]
            },
            {
                id: "manchester",
                name: "Manchester",
                description: "Vibrant city known for its music scene and football culture.",
                image: "https://www.thehotelguru.com/_images/9e/62/9e62e0d7f7e7b798490021eab1cfff11/manchester-s1180x560.jpg",
                temperature: "5°C - 22°C",
                places: [
                    {
                        id: "old-trafford",
                        name: "Old Trafford",
                        image: "https://www.webbaviation.co.uk/aerial/galleries/Lancashire/Manchester/ManchesterStadiumAerial-cb18263.jpg",
                        description: "Home of Manchester United Football Club.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Sports Venue"
                    },
                    {
                        id: "manchester-art-gallery",
                        name: "Manchester Art Gallery",
                        image: "https://i2-prod.manchestereveningnews.co.uk/incoming/article8373569.ece/ALTERNATES/s1227b/JS50586251.jpg",
                        description: "Major art museum in the city center.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Museum"
                    }
                ]
            },
            {
                id: "liverpool",
                name: "Liverpool",
                description: "Famous for The Beatles and maritime history.",
                image: "https://www.signatureliving.co.uk/wp-content/uploads/2016/05/Liverpool-waterfront-1024x682.jpg",
                temperature: "5°C - 22°C",
                places: [
                    {
                        id: "beatles-story",
                        name: "The Beatles Story",
                        image: "https://i.pinimg.com/originals/76/fb/9d/76fb9d3aa7b4ac8f8eb58170fdfbb21d.jpg",
                        description: "Museum dedicated to The Beatles' story and music.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Museum"
                    },
                    {
                        id: "albert-dock",
                        name: "Albert Dock",
                        image: "https://a.cdn-hotels.com/gdcs/production37/d719/8b3d057d-cb1f-4e10-8882-32262111d6cb.jpg",
                        description: "Historic dock complex with museums and restaurants.",
                        rating: 4.6,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    }
                ]
            },
            {
                id: "bath",
                name: "Bath",
                description: "Roman-built spa town with Georgian architecture.",
                image: "https://www.tripsavvy.com/thmb/txK0HMw-_51zxx8hZgpOHfgfiqk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-463211139-59ee253b685fbe00112d0c8f.jpg",
                temperature: "5°C - 25°C",
                places: [
                    {
                        id: "roman-baths",
                        name: "Roman Baths",
                        image: "https://www.westend61.de/images/0001414455pw/the-roman-baths-and-bath-abbey-illuminated-at-dusk-unesco-world-heritage-site-bath-somerset-england-united-kingdom-europe-RHPLF15612.jpg",
                        description: "Well-preserved Roman public bathing complex.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                    {
                        id: "bath-abbey",
                        name: "Bath Abbey",
                        image: "https://cdn.sanity.io/images/kcbf19oh/aquae-sulis/bac0a1585aa402a7fc624285b67fca6d244606ed-2048x1365.jpg",
                        description: "Gothic abbey church in the city center.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Church"
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: "Switzerland",
        description: "A land of stunning Alpine landscapes, pristine lakes, and charming cities.",
        image: "https://www.ubi-interactive.com/wp-content/uploads/2022/10/bern-switzerland-shutterstock_1845136612.jpg_ecb4c93750.jpg",
        currency: "Swiss Franc (CHF)",
        language: "German, French, Italian, Romansh",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "June to September for hiking and outdoor activities, December to March for skiing.",
        visaRequirements: "Schengen visa required for many nationalities. EU citizens can travel freely.",
        gettingAround: "Excellent train network, cable cars, and scenic mountain railways.",
        tags: ["Mountains", "Lakes", "Skiing", "Hiking", "Culture"],
        cities: [
            {
                id: "zurich",
                name: "Zurich",
                description: "Switzerland's largest city, known for its banking, shopping, and cultural attractions.",
                image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "old-town",
                        name: "Old Town (Altstadt)",
                        image: "https://travel.usnews.com/static-travel/images/destinations/83/altstadt_zurich.jpg",
                        description: "Historic center with medieval buildings, churches, and charming streets.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic District"
                    },
                    {
                        id: "lake-zurich",
                        name: "Lake Zurich",
                        image: "https://static.toiimg.com/photo/54524091/.jpg",
                        description: "Beautiful lake offering boat tours and waterfront activities.",
                        bestTimeToVisit: "May to September",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Natural Attraction"
                    },
                    
                    
                ]
            },
            {
                id: "geneva",
                name: "Geneva",
                description: "International city known for diplomacy, luxury shopping, and Lake Geneva.",
                image: "https://www.roadaffair.com/wp-content/uploads/2017/10/aerial-view-geneva-switzerland-shutterstock_418408996.jpg",
                temperature: "0°C - 28°C",
                places: [
                    {
                        id: "jet-deau",
                        name: "Jet d'Eau",
                        image: "https://www.geneve.com/fileadmin/_processed_/0/1/csm_Jetee-Jet-d-Eau_2be9f224c2.webp",
                        description: "Famous water fountain in Lake Geneva.",
                        bestTimeToVisit: "All year",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Landmark"
                    },
                    {
                        id: "un-palace",
                        name: "Palace of Nations",
                        image: "https://i.redd.it/0e3p5yo1kyfz.jpg",
                        description: "European headquarters of the United Nations.",
                        bestTimeToVisit: "All year",
                        rating: 4.6,
                        duration: "2 hours",
                        type: "Historic Site"
                    },
                   
                    
                ]
            },
            {
                id: "interlaken",
                name: "Interlaken",
                description: "Adventure capital between two lakes, gateway to the Jungfrau region.",
                image: "https://wallpaperaccess.com/full/2134019.jpg",
                temperature: "-5°C - 25°C",
                places: [
                    {
                        id: "jungfraujoch",
                        name: "Jungfraujoch",
                        image: "https://www.touristsecrets.com/wp-content/uploads/2023/09/a-journey-to-jungfraujoch-and-the-beautiful-town-of-interlaken-switzerland-1695275852.jpg",
                        description: "Highest railway station in Europe with stunning Alpine views.",
                        bestTimeToVisit: "June to September",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Mountain"
                    },
                    {
                        id: "harder-kulm",
                        name: "Harder Kulm",
                        image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_headers/56086/2000x2000-0-70-efb9151dc29a56d502e5fa9f77f533d1.jpg",
                        description: "Viewpoint offering panoramic views of Interlaken and surrounding mountains.",
                        bestTimeToVisit: "April to October",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Viewpoint"
                    },
                   
                    
                ]
            },
            {
                id: "lucerne",
                name: "Lucerne",
                description: "Medieval city with a beautiful lake and mountain backdrop.",
                image: "https://wallpaperaccess.com/full/3845030.jpg",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "chapel-bridge",
                        name: "Chapel Bridge",
                        image: "https://tse1.mm.bing.net/th?id=OIP.l9zfM8qT1KNILw6Pk5jxLwHaEx&pid=Api&P=0&h=180",
                        description: "Historic wooden bridge with painted interior panels.",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Historic Site"
                    },
                    {
                        id: "mount-pilatus",
                        name: "Mount Pilatus",
                        image: "https://switzerland-tour.com/storage/media/Mt.%20Pilatus/Mt-Pilatus-Lucerne-in-Switzerland.jpg",
                        description: "Mountain with the world's steepest cogwheel railway.",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Mountain"
                    },
                    
                    {
                        id: "lake-lucerne",
                        name: "Lake Lucerne",
                        image: "https://content.r9cdn.net/rimg/dimg/4c/4e/8b951263-city-4394-16493694a54.jpg?width=1750&height=1000&xhint=1500&yhint=1039&crop=true",
                        description: "Beautiful lake with boat tours and swimming spots.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Natural Attraction"
                    }
                ]
            },
            {
                id: "zermatt",
                name: "Zermatt",
                description: "Car-free mountain resort with the iconic Matterhorn.",
                image: "https://st2.depositphotos.com/1402808/6601/i/950/depositphotos_66016431-stock-photo-aerial-view-on-zermatt-valley.jpg",
                temperature: "-10°C - 20°C",
                places: [
                    {
                        id: "matterhorn",
                        name: "Matterhorn",
                        image: "https://s1.1zoom.me/big0/434/426849-Kycb.jpg",
                        description: "Iconic pyramid-shaped mountain and symbol of Switzerland.",
                        rating: 4.9,
                        duration: "Full day",
                        type: "Mountain"
                    },
                    
                    
            
                ]
            },
            {
                id: "montreux",
                name: "Montreux",
                description: "Elegant resort town on Lake Geneva with a mild climate.",
                image: "https://cdn.getyourguide.com/img/location/5f9157f1a60ac.jpeg/88.jpg",
                temperature: "5°C - 30°C",
                places: [
                    {
                        id: "chillon-castle",
                        name: "Chillon Castle",
                        image: "http://www.kenkoskela.com/images/xl/Chillon-Castle-Sunset.jpg",
                        description: "Medieval castle on Lake Geneva with rich history.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Historic Site"
                    },
                   
                   
                    {
                        id: "rochers-de-naye",
                        name: "Rochers-de-Naye",
                        image: "https://1.bp.blogspot.com/-oXvMD3mdcRQ/XQ5-U0J7rWI/AAAAAAAAymg/ARia_I8QO6AjVDZeV-oZT_Odbd8lJYObQCLcBGAs/s1600/rochers_de_naye_2014_panorama_2000x992_72dpi_42592.jpg",
                        description: "Mountain viewpoint with panoramic views of Lake Geneva.",
                        rating: 4.7,
                        duration: "Half day",
                        type: "Mountain"
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        name: "Singapore",
        description: "Modern city-state with perfect blend of nature and urban life.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        currency: "Singapore Dollar (S$)",
        language: "English",
        timezone: "UTC+8",
        continent: "Asia",
        bestTimeToVisit: "February to April for pleasant weather and fewer crowds.",
        visaRequirements: "Visa requirements vary by nationality.",
        gettingAround: "Efficient public transportation including MRT and buses.",
        tags: ["Modern", "Food", "Shopping", "Nature", "Culture"],
        cities: [
            {
                id: "singapore",
                name: "Singapore",
                description: "A bustling city-state known for its multiculturalism and modern architecture.",
                image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "marina-bay-sands",
                        name: "Marina Bay Sands",
                        image: "https://www.jomjalan.com/wp-content/uploads/2019/03/marina-sands.jpg",
                        description: "Iconic hotel with three towers and a rooftop infinity pool.",
                        rating: 4.8,
                        duration: "2-3 hours",
                        type: "Architecture"
                    },
                    {
                        id: "gardens-by-the-bay",
                        name: "Gardens by the Bay",
                        image: "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Gardens-by-the-Bay.jpg",
                        description: "Futuristic nature park with Supertree Grove and Cloud Forest.",
                        rating: 4.9,
                        duration: "3-4 hours",
                        type: "Nature"
                    },
                    {
                        id: "merlion-park",
                        name: "Merlion Park",
                        image: "https://static.vecteezy.com/system/resources/previews/002/010/691/large_2x/merlion-statue-fountain-in-merlion-park-in-singapore-2018-free-photo.JPG",
                        description: "Famous statue of Singapore's national symbol.",
                        rating: 4.6,
                        duration: "1 hour",
                        type: "Landmark"
                    },
                    
                ]
            },
            {
                id: "sentosa",
                name: "Sentosa",
                description: "Island resort with beaches, theme parks, and entertainment.",
                image: "https://i.ytimg.com/vi/MQMGKExZvQA/maxresdefault.jpg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "universal-studios",
                        name: "Universal Studios Singapore",
                        image: "https://cdn-imgix.headout.com/mircobrands-content/image/90afaf4e18364b724fee6c453b32c9cf-AdobeStock_296166296_Editorial_Use_Only.jpeg",
                        description: "Movie-themed amusement park with thrilling rides.",
                        rating: 4.8,
                        duration: "Full day",
                        type: "Theme Park"
                    },
                    {
                        id: "siloso-beach",
                        name: "Siloso Beach",
                        image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/ab/7a.jpg",
                        description: "Popular beach with water sports and beach bars.",
                        rating: 4.5,
                        duration: "3-4 hours",
                        type: "Beach"
                    }
                ]
            },
            {
                id: "chinatown",
                name: "Chinatown",
                description: "Historic district with traditional Chinese culture and cuisine.",
                image: "https://tours.vangalderbus.com/Images/chinatown23262_gate_2836.jpeg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "buddha-tooth-relic",
                        name: "Buddha Tooth Relic Temple",
                        image: "https://img.freepik.com/premium-photo/buddha-tooth-relic-temple-is-buddhist-temple-located-chinatown-district-singapore_78361-6370.jpg",
                        description: "Beautiful Buddhist temple with cultural artifacts.",
                        rating: 4.7,
                        duration: "1-2 hours",
                        type: "Religious Site"
                    },
                   
                ]
            },
            {
                id: "little-india",
                name: "Little India",
                description: "Vibrant district showcasing Indian culture and heritage.",
                image: "https://www.roots.gov.sg/-/media/Roots/Images/landmarks/little-india-heritage-trail/sri-veeramakaliamman-temple/98-veeramakaliamman-temple-3.ashx",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "sri-veeramakaliamman",
                        name: "Sri Veeramakaliamman Temple",
                        image: "https://www.roots.gov.sg/-/media/Roots/Images/landmarks/little-india-heritage-trail/sri-veeramakaliamman-temple/98-veeramakaliamman-temple-3.ashx",
                        description: "Ancient Hindu temple with intricate architecture.",
                        rating: 4.6,
                        duration: "1 hour",
                        type: "Religious Site"
                    },
                    
                ]
            },
            {
                id: "orchard-road",
                name: "Orchard Road",
                description: "Singapore's premier shopping and entertainment district.",
                image: "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2018/07/Ion-Orchard-night-900x550.jpg",
                temperature: "25°C - 35°C",
                places: [
                    {
                        id: "ion-orchard",
                        name: "ION Orchard",
                        image: "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2018/07/Ion-Orchard-night-900x550.jpg",
                        description: "Luxury shopping mall with high-end brands.",
                        rating: 4.7,
                        duration: "2-3 hours",
                        type: "Shopping"
                    },
                    
                ]
            }
        ]
    },
    {
        id: 12,
        name: "Germany",
        description: "A country rich in history, culture, and natural beauty.",
        image: "https://images.alphacoders.com/552/552457.jpg",
        currency: "Euro (€)",
        language: "German",
        timezone: "UTC+1",
        continent: "Europe",
        bestTimeToVisit: "May to September for pleasant weather.",
        visaRequirements: "Schengen visa required for many nationalities.",
        gettingAround: "Efficient public transportation and autobahn network.",
        tags: ["History", "Culture", "Nature", "Architecture", "Beer"],
        cities: [
            {
                id: "berlin",
                name: "Berlin",
                description: "Germany's capital, known for its art, history, and vibrant culture.",
                image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
                temperature: "-2°C - 25°C",
                places: [
                    {
                        id: "brandenburg-gate",
                        name: "Brandenburg Gate",
                        image: "https://wallpapercave.com/wp/wp4196995.jpg",
                        description: "Iconic neoclassical monument and symbol of German unity.",
                        rating: 4.8,
                        duration: "1 hour",
                        type: "Historic Site"
                    },
                    {
                        id: "berlin-wall",
                        name: "Berlin Wall Memorial",
                        image: "https://tse4.mm.bing.net/th?id=OIP.eUuSR9jvcNtbsHzgIEeKEQHaE7&pid=Api&P=0&h=180",
                        description: "Historic site commemorating the division of Berlin.",
                        rating: 4.7,
                        duration: "2 hours",
                        type: "Historic Site"
                    }
                ]
            },
            {
                id: "munich",
                name: "Munich",
                description: "Bavaria's capital, famous for Oktoberfest and rich culture.",
                image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/23/13/munich-alamy.jpg",
                temperature: "-5°C - 30°C",
                places: [
                    {
                        id: "neuschwanstein",
                        name: "Neuschwanstein Castle",
                        image: "https://tourscanner.com/blog/wp-content/uploads/2020/02/Neuschwanstein-Castle-tours-from-Munich.jpg?x58227",
                        description: "Fairy-tale castle that inspired Disney's Sleeping Beauty Castle.",
                        rating: 4.9,
                        duration: "Half day",
                        type: "Castle"
                    },
                    {
                        id: "marienplatz",
                        name: "Marienplatz",
                        image: "https://themunichguide.de/wp-content/uploads/2020/01/new-town-hall-marienplatz-munich2.jpg",
                        description: "Central square with the famous Glockenspiel clock tower.",
                        rating: 4.6,
                        duration: "1-2 hours",
                        type: "Historic Site"
                    }
                ]
            },
            {
                id: "cologne",
                name: "Cologne",
                description: "Historic city known for its magnificent cathedral and vibrant culture.",
                image: "https://cdn.britannica.com/18/70118-050-934B6C18/passenger-boat-Cologne-Cathedral-Rhine-River-North.jpg",
                temperature: "0°C - 25°C",
                places: [
                    {
                        id: "cologne-cathedral",
                        name: "Cologne Cathedral",
                        image: "https://www.tripsavvy.com/thmb/Ov8lWKb8tAXkOlt5aGnjJ3xzVqU=/1945x1542/filters:no_upscale():max_bytes(150000):strip_icc()/colognecathedralGettyImages-181964026JorgGreuel-5a02c27e4e4f7d001a0dea0c.jpg",
                        description: "Gothic masterpiece and UNESCO World Heritage site.",
                        rating: 4.8,
                        duration: "2 hours",
                        type: "Religious Site"
                    },
                    {
                        id: "rhine-river",
                        name: "Rhine River Cruise",
                        image: "https://i.pinimg.com/originals/0e/37/f5/0e37f544fb2555388d5d57c9c6d06505.jpg",
                        description: "Scenic boat tours along the historic Rhine River.",
                        rating: 4.7,
                        duration: "3-4 hours",
                        type: "Natural Attraction"
                    }
                ]
            }
        ]
    }
];