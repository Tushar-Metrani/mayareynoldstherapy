// All copy, links and image URLs live here. In the redesign pass, replace this file's
// contents with Dr. Maya Reynolds' content.

const CDN =
  "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10";
const img = (path: string) => `${CDN}/${path}?format=1500w`;

export const site = {
  brand: { name: "Conejo Valley", tagline: "Family Counseling" },

  nav: [
    { label: "About", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Specialties", href: "#" },
    { label: "Methods", href: "#" },
    { label: "FAQs", href: "#" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  logo: {
    src: img(
      "7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png",
    ),
    alt: "Conejo Valley",
  },

  hero: {
    eyebrow: "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
    headingStart:
      "Rebuild your foundation on solid ground and finally begin to",
    headingScript: "thrive",
    subtext:
      "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    cta: { label: "Book an appointment", href: "#contact" },
    imageMain: {
      src: img(
        "80513bd1-30ee-4a2d-aaf6-782d9be095ce/Jennifer+A+-+Images+%2866%29.jpg",
      ),
      alt: "Family walking together on a beach",
    },
    imageSide: {
      src: img(
        "3643a7ac-ff62-4927-b96e-9e65ecff0521/Jennifer+A+-+Images+%2867%29.jpg",
      ),
      alt: "Gentle ocean waves",
    },
  },

  intro: {
    heading:
      "You're holding onto hope that life can be better than it is right now.",
    leadLabel:
      "At Conejo Valley Family Counseling we want to make that hope a reality.",
    leftText:
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life's ups and downs.",
    rightText:
      "First and foremost, we believe what you're going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    image: {
      src: img(
        "7a40691c-70a5-4307-b9ae-974592087a8f/Jennifer+A+-+Images+%283%29.jpg",
      ),
      alt: "Sandy beach with gentle ocean waves",
    },
  },

  whoWeHelp: {
    headingStart: "Who we",
    headingScript: "help",
    items: [
      {
        title: "Adults",
        text: "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
        image: {
          src: img(
            "066f60e6-1354-4d47-a586-ab3f2f2ba612/Jennifer+A+-+Images+%288%29.jpg",
          ),
          alt: "Two people sitting together by the water",
        },
      },
      {
        title: "Couples",
        text: "Relationships require effort, and we're here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
        image: {
          src: img(
            "d0157712-388c-4800-aada-c78db97ee966/Jennifer+A+-+Images+%289%29.jpg",
          ),
          alt: "A couple embracing on the beach",
        },
      },
      {
        title: "Children & Teens",
        text: "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
        image: {
          src: img(
            "d5d62bf4-34a7-4bf4-bf00-e1169863ace7/Jennifer+A+-+Images+%2810%29.jpg",
          ),
          alt: "Two children playing in the shallows",
        },
      },
    ],
  },

  ourexpertise: {
    headingStart: "Our areas of",
    headingScript: "expertise",
    areas: [
      "DISSOCIATION",
      "ANXIETY",
      "TRAUMA",
      "RELATIONSHIPS",
      "FAMILY CONFLICT",
      "CHILDREN",
      "SPECIAL NEEDS PARENTING",
      "TEENS",
      "DEPRESSION",
      "INTIMACY & CONNECTION",
      "MARRIAGE",
      "...AND MORE.",
    ],
  },

  specialties: {
    headingStart: "Our",
    headingScript: "specialties",
    headingEnd: "include…",
    items: [
      {
        title: "Trauma",
        text: "We don't always know when and how we've experienced trauma. In therapy, we'll work together to help you process your past, understand what's causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don't have to carry your burdens alone.",
        cta: { label: "Learn more", href: "#" },
      },
      {
        title: "EMDR",
        text: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
        cta: { label: "Learn more", href: "#" },
      },
      {
        title: "Dissociation",
        text: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we'll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
        cta: { label: "Learn more", href: "#" },
      },
      {
        title: "Special Needs Parenting",
        text: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
        cta: { label: "Learn more", href: "#" },
      },
    ],
  },
  howWeWork: {
    eyebrow: "How we work",
    heading: "We're here to make a difference.",
    lead: "The clients we work with are balancing so many things at once, it's often hard for them to put themselves first.",
    textLeft:
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won't find anything “one-size-fits-all” here.) If you're ready to do the work, we're ready to help.",
    textRight:
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you've learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what's hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    cta: { label: "Learn more about us", href: "#" },
    
    image: {
      src: img("389808ad-7273-4e03-a32b-c172aa735f12/Jennifer+A+-+Images+%286%29.jpg"),
      alt: "Two people dancing on a sandy beach at sunset",
    },
  },

  quoteBand: {
    text: "You deserve a place where your story is heard, valued, and understood.",
    emphasis: "Nothing will be too heavy for us to carry together.",
    image: {
      src: img(
        "27b4f80c-ca73-4d1f-824e-ec29a2211142/Jennifer+A+-+Images+%282%29.png",
      ),
      alt: "Two children running along a quiet beach",
    },
  },

  appointmentCta: {
    eyebrow: "Schedule an appointment",
    headingStart: "Find a therapist who is the right fit for",
    headingScript: "you",
    text: "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
    note: "Click the button below to schedule an appointment.",
    cta: { label: "Book now", href: "#contact" },
    imageLeft: {
      src: img(
        "1b9495e0-ce39-4826-9df9-e24de99da82f/Jennifer+A+-+Images+%2812%29.jpg",
      ),
      alt: "A hand picking up seashells on a sandy beach",
    },
    imageRight: {
      src: img(
        "7557312a-044d-4489-a9d1-6f43ee9888b1/Jennifer+A+-+Images+%2811%29.jpg",
      ),
      alt: "A person pointing at shells in the sand beside a child standing barefoot",
    },
  },

  footer: {
    blurb:
      "We want to make getting started simple. You're welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.",
    navigate: [
      { label: "Home", href: "/" },
      { label: "About", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    team: [
      "Jennifer Anderson",
      "Heather Williams-Baumgart",
      "Autumn Bodily",
      "Candace Bletscher",
      "Samantha Johnson",
      "Rosa Gomez",
      "Chad Flores",
    ],
    contact: {
      address: [
        "925 Broadbeck Dr",
        "Suites 200 and 225",
        "Newbury Park, CA 91320",
      ],
      email: "info@conejovalleycounseling.com",
      phone: "805.242.3120",
      serviceArea:
        "Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, & Simi Valley",
    },
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Website by Grow My Therapy", href: "#" },
    ],
  },
};
