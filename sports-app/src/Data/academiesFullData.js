const academiesFullData = [
  // ================= AHMEDABAD =================

  {
    id: "spsa",
    name: "Sardar Patel Sports Academy",
    city: "Ahmedabad",
    area: "Navrangpura",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d",

    description:
      "Government Recognized Multi-Sports Training Academy with 15+ years of excellence.",

    phone: "+917923245678",
    email: "spsa.ahd@sports.in",
    timing: "6–10 AM | 4–8 PM",
    address: "Navrangpura Sports Complex, Ahmedabad – 380009",

    sports: ["Cricket", "Athletics", "Football", "Badminton"],

    facilities: [
      "Certified Coaches",
      "Fitness Training",
      "Practice Matches",
      "Modern Equipment",
    ],

    achievements: {
      players: "120+",
      students: "3000+",
      experience: "15+ Years",
    },

    gallery: [
      "https://images.unsplash.com/photo-1517649763962-0c623066013b",
      "https://images.unsplash.com/photo-1546519638-68e109498ffc",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    ],

    map: "https://www.google.com/maps?q=Navrangpura%20Sports%20Complex%20Ahmedabad&output=embed",
  },

  {
    id: "afa",
    name: "Ahmedabad Football Academy",
    city: "Ahmedabad",
    area: "Maninagar",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",

    description:
      "Professional football coaching academy for beginners to advanced players.",

    phone: "+917912345678",
    email: "afa@sports.in",
    timing: "5–9 AM | 5–9 PM",
    address: "Maninagar Football Ground, Ahmedabad",

    sports: ["Football"],
    facilities: ["Turf Ground", "Certified Coach", "Fitness Sessions"],
    achievements: {
      players: "80+",
      students: "1500+",
      experience: "10+ Years",
    },

    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6",
    ],

    map: "https://www.google.com/maps?q=Maninagar%20Ahmedabad&output=embed",
  },

  {
    id: "aba",
    name: "Ace Badminton Academy",
    city: "Ahmedabad",
    area: "Satellite",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/7235235/pexels-photo-7235235.jpeg",

    description: "Indoor badminton courts with state-level coaching.",

    phone: "+917934567890",
    email: "aba@sports.in",
    timing: "6 AM – 9 PM",
    address: "Satellite Indoor Stadium, Ahmedabad",

    sports: ["Badminton"],
    facilities: ["Wooden Courts", "Air Conditioned Hall"],
    achievements: {
      players: "60+",
      students: "1200+",
      experience: "8+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/17619318/pexels-photo-17619318.jpeg",
    ],

    map: "https://www.google.com/maps?q=Satellite%20Ahmedabad&output=embed",
  },

  {
    id: "esc",
    name: "Elite Swimming Centre",
    city: "Ahmedabad",
    area: "Bopal",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1600965962102-9d260a71890d",

    description: "Olympic size swimming pool with certified trainers.",
    phone: "+917945612378",
    email: "esc@sports.in",
    timing: "5 AM – 8 PM",
    address: "Bopal Swimming Arena, Ahmedabad",

    sports: ["Swimming"],
    facilities: ["Olympic Pool", "Locker Room", "Trainer"],
    achievements: {
      players: "50+",
      students: "900+",
      experience: "7+ Years",
    },

    gallery: [
      "https://images.unsplash.com/photo-1600965962102-9d260a71890d",
    ],

    map: "https://www.google.com/maps?q=Bopal%20Ahmedabad&output=embed",
  },

  {
    id: "abh",
    name: "Ahmedabad Basketball Hub",
    city: "Ahmedabad",
    area: "Vastrapur",
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg",

    description: "Professional basketball training for youth.",
    phone: "+917912398765",
    email: "abh@sports.in",
    timing: "6 AM – 8 PM",
    address: "Vastrapur Sports Complex, Ahmedabad",

    sports: ["Basketball"],
    facilities: ["Indoor Court", "Team Practice"],
    achievements: {
      players: "40+",
      students: "800+",
      experience: "6+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/264258/pexels-photo-264258.jpeg",
    ],

    map: "https://www.google.com/maps?q=Vastrapur%20Ahmedabad&output=embed",
  },

  {
    id: "wma",
    name: "Warrior Martial Arts Academy",
    city: "Ahmedabad",
    area: "Ghatlodia",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/6005459/pexels-photo-6005459.jpeg",

    description: "Karate, Taekwondo & Self-defense classes.",
    phone: "+917998877665",
    email: "wma@sports.in",
    timing: "5 PM – 9 PM",
    address: "Ghatlodia Martial Arts Centre, Ahmedabad",

    sports: ["Karate", "Taekwondo"],
    facilities: ["Self Defense Training", "Certified Coach"],
    achievements: {
      players: "70+",
      students: "1000+",
      experience: "12+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/6005459/pexels-photo-6005459.jpeg",
    ],

    map: "https://www.google.com/maps?q=Ghatlodia%20Ahmedabad&output=embed",
  },

  // ================= GANDHINAGAR =================

  {
    id: "gsga",
    name: "Gujarat State Sports Academy",
    city: "Gandhinagar",
    area: "Sector 15",
    rating: 4.6,
    image:
      "https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg",

    description: "State level cricket & fitness academy.",
    phone: "+917934567111",
    email: "gsga@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 15 Sports Complex, Gandhinagar",

    sports: ["Cricket", "Fitness"],
    facilities: ["Large Ground", "Gym", "Trainer"],
    achievements: {
      players: "150+",
      students: "4000+",
      experience: "18+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/843341/pexels-photo-843341.jpeg",
    ],

    map: "https://www.google.com/maps?q=Sector%2015%20Gandhinagar&output=embed",
  },

  {
    id: "imsc",
    name: "Indroda Multi Sports Complex",
    city: "Gandhinagar",
    area: "Indroda Circle",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",

    description: "Multi-sport training centre.",
    phone: "+917934561234",
    email: "imsc@sports.in",
    timing: "6 AM – 8 PM",
    address: "Indroda Circle, Gandhinagar",

    sports: ["Football", "Basketball"],
    facilities: ["Outdoor Ground", "Indoor Court"],
    achievements: {
      players: "90+",
      students: "2000+",
      experience: "9+ Years",
    },

    gallery: [
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018",
    ],

    map: "https://www.google.com/maps?q=Indroda%20Circle%20Gandhinagar&output=embed",
  },

  {
    id: "stta",
    name: "Smash Table Tennis Academy",
    city: "Gandhinagar",
    area: "Sector 21",
    rating: 4.4,
    image:
      "https://images.pexels.com/photos/17619318/pexels-photo-17619318.jpeg",

    description: "Professional table tennis coaching.",
    phone: "+917934561567",
    email: "stta@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 21 Indoor Hall, Gandhinagar",

    sports: ["Table Tennis"],
    facilities: ["Professional Tables", "Coach"],
    achievements: {
      players: "55+",
      students: "900+",
      experience: "7+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/17619318/pexels-photo-17619318.jpeg",
    ],

    map: "https://www.google.com/maps?q=Sector%2021%20Gandhinagar&output=embed",
  },

  {
    id: "tftc",
    name: "Track & Field Training Centre",
    city: "Gandhinagar",
    area: "Sector 11",
    rating: 4.1,
    image:
      "https://images.pexels.com/photos/2413089/pexels-photo-2413089.jpeg",

    description: "Athletics and running coaching.",
    phone: "+917934567222",
    email: "tftc@sports.in",
    timing: "5 AM – 8 PM",
    address: "Sector 11 Ground, Gandhinagar",

    sports: ["Athletics"],
    facilities: ["Running Track", "Fitness Trainer"],
    achievements: {
      players: "45+",
      students: "850+",
      experience: "6+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/2413089/pexels-photo-2413089.jpeg",
    ],

    map: "https://www.google.com/maps?q=Sector%2011%20Gandhinagar&output=embed",
  },

  {
    id: "pta",
    name: "Pro Tennis Academy",
    city: "Gandhinagar",
    area: "Sector 7",
    rating: 4.3,
    image:
      "https://images.pexels.com/photos/13793163/pexels-photo-13793163.jpeg",

    description: "Professional lawn tennis academy.",
    phone: "+917934561999",
    email: "pta@sports.in",
    timing: "6 AM – 9 PM",
    address: "Sector 7 Tennis Court, Gandhinagar",

    sports: ["Tennis"],
    facilities: ["Clay Court", "Trainer"],
    achievements: {
      players: "60+",
      students: "1100+",
      experience: "10+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/13793163/pexels-photo-13793163.jpeg",
    ],

    map: "https://www.google.com/maps?q=Sector%207%20Gandhinagar&output=embed",
  },

  {
    id: "gsa",
    name: "Gandhinagar Skating Arena",
    city: "Gandhinagar",
    area: "Sector 24",
    rating: 4.0,
    image:
      "https://images.pexels.com/photos/7335457/pexels-photo-7335457.jpeg",

    description: "Roller skating and speed skating coaching.",
    phone: "+917934568888",
    email: "gsa@sports.in",
    timing: "5 PM – 9 PM",
    address: "Sector 24 Skating Arena, Gandhinagar",

    sports: ["Skating"],
    facilities: ["Skating Track", "Safety Equipment"],
    achievements: {
      players: "35+",
      students: "600+",
      experience: "5+ Years",
    },

    gallery: [
      "https://images.pexels.com/photos/7335457/pexels-photo-7335457.jpeg",
    ],

    map: "https://www.google.com/maps?q=Sector%2024%20Gandhinagar&output=embed",
  },
];

export default academiesFullData;
