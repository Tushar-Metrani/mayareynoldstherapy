// All copy, links and image URLs live here.
// Copy below is for Dr. Maya Reynolds, PsyD (Santa Monica, CA), derived strictly from her profile.
// Image `src` values are YOUR current ones, unchanged. Replace each remaining template (remote) image
// with your own file in /public/images and update its alt text to match what it shows.

const CDN =
  "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10";
const img = (path: string) => `${CDN}/${path}?format=1500w`;

export const site = {
  seo: {
    title:
      "Anxiety, Trauma & Burnout Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD",
    description:
      "Dr. Maya Reynolds, PsyD offers anxiety, trauma and burnout therapy for adults in Santa Monica, CA, in person and by secure telehealth across California.",
  },

  brand: { name: "Maya Reynolds", tagline: "Clinical Psychologist" },

  nav: [
    { label: "About", href: "#about" },
    { label: "Specialties", href: "#specialties" },
    { label: "Approach", href: "#approach" },
    { label: "Office", href: "#office" },
    { label: "FAQs", href: "#faqs" },
  ],
  navCta: { label: "Contact", href: "#contact" },

  logo: {
    // TODO: replace with Maya's own logo / wordmark file in /public/images
    src: img(
      "7116bf54-a0e1-4128-81d8-24fd9960c7ed/Conejo+Valley+Counseling+Logo.png",
    ),
    alt: "Dr. Maya Reynolds, PsyD, Clinical Psychologist",
  },

  hero: {
    eyebrow: "IN-PERSON IN SANTA MONICA & ONLINE ACROSS CALIFORNIA",
    headingStart:
      "Anxiety & trauma therapy in Santa Monica, CA to help you feel",
    headingScript: "grounded",
    subtext:
      "Dr. Maya Reynolds, PsyD, helps high-achieving adults quiet overthinking, recover from burnout, and heal from the past.",
    cta: { label: "Book an appointment", href: "#contact" },
    imageMain: {
      src: "/images/happy_mother_children.jpg",
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
      "You may look like you're holding it all together, but inside you're exhausted.",
    leadLabel:
      "At my Santa Monica practice, I help adults move from constant worry toward steadiness.",
    leftText:
      "Many of the people I work with are high-achieving, thoughtful, and self-aware, yet they feel stuck in overthinking, tense in their bodies, or always bracing for something to go wrong. If anxiety, panic, burnout, or the effects of past experiences are wearing you down, you don't have to keep pushing through alone.",
    rightText:
      "As a licensed clinical psychologist, I offer a warm, collaborative, and grounded space where you're respected, understood, and actively involved. Together we'll look at both the emotional and physical sides of what you're feeling, so you can build insight, resilience, and a stronger relationship with yourself.",
    image: {
      src: "/images/happy_father_daughter.jpg",
      alt: "Sandy beach with gentle ocean waves",
    },
  },

  whoWeHelp: {
    headingStart: "Who I",
    headingScript: "help",
    items: [
      {
        title: "Professionals",
        text: "You're capable and driven, but you're running on empty. I help professionals ease anxiety, panic, and burnout, and build more sustainable ways of working and living.",
        image: {
          src: "/images/young_professional.jpg",
          alt: "Two people sitting together by the water",
        },
      },
      {
        title: "Entrepreneurs & Creatives",
        text: "After years of pushing through stress, it's easy to feel disconnected from yourself. Therapy becomes a space to slow down, reconnect, and ease perfectionism and high internal pressure.",
        image: {
          src: "/images/group_of_women.jpg",
          alt: "A couple embracing on the beach",
        },
      },
      {
        title: "Adults Healing from Trauma",
        text: "Whether it's a single event or long-standing patterns from childhood, relationships, or chronic stress, we move at a careful pace, with safety and stabilization first.",
        image: {
          src: "/images/happy_couple.jpg",
          alt: "A happy couple",
        },
      },
    ],
  },

  ourexpertise: {
    headingStart: "My areas of",
    headingScript: "expertise",
    areas: [
      "ANXIETY",
      "PANIC",
      "TRAUMA",
      "COMPLEX TRAUMA",
      "BURNOUT",
      "PERFECTIONISM",
      "STRESS",
      "OVERTHINKING",
      "EMOTIONAL REGULATION",
      "RELATIONSHIPS",
      "CONFIDENCE",
      "...AND MORE.",
    ],
  },

  specialties: {
    headingStart: "My",
    headingScript: "specialties",
    headingEnd: "include…",
    items: [
      {
        title: "Anxiety & Panic",
        text: "Constant worry, racing thoughts, tension in your body, trouble sleeping: anxiety can be exhausting even when you look fine on the outside. Using CBT and mindfulness-based practices, we'll work to understand what drives your anxiety and help your mind and body settle.",
        cta: { label: "Learn more", href: "#" },
      },
      {
        title: "Trauma & EMDR",
        text: "Whether you're healing from a single event or long-standing patterns rooted in childhood, relationships, or chronic stress, we'll go at a careful pace. With EMDR and body-oriented techniques, we focus on safety and stabilization so you feel more regulated in everyday life.",
        cta: { label: "Learn more", href: "#" },
      },
      {
        title: "Burnout & Perfectionism",
        text: "After years of pushing through stress, it's common to feel disconnected from yourself. Therapy offers space to slow down, ease high internal pressure, and develop more sustainable ways of living and working.",
        cta: { label: "Learn more", href: "#" },
      },
    ],
  },

  howWeWork: {
    eyebrow: "How I work",
    heading: "Practical tools, with real depth.",
    lead: "Many people I work with look “functional” on the outside while quietly struggling inside.",
    textLeft:
      "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help you understand both the emotional and physiological sides of what you're experiencing.",
    textRight:
      "Trauma work is an important part of my practice. My approach is paced carefully, with an emphasis on safety, stabilization, and helping you feel more regulated in your daily life, not just during sessions. My goal is not only symptom relief, but also insight, resilience, and a stronger relationship with yourself over time.",
    cta: { label: "Learn more about my approach", href: "#about" },

    image: {
      src: "/images/woman_with_plants_ai.jpg",
      alt: "women observing plants",
    },
  },

  quoteBand: {
    text: "You've spent years pushing through. You deserve a space to slow down and be understood.",
    emphasis: "Healing can be paced, steady, and yours.",
    image: {
      src: "/images/nature_landscape.jpg",
      alt: "Two children running along a quiet beach",
    },
  },

  about: {
    id: "about",
    eyebrow: "About",
    heading: "Meet Dr. Maya Reynolds, PsyD",
    role: "Licensed Clinical Psychologist · Santa Monica, CA",
    paragraphs: [
      "I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.",
      "My work often focuses on anxiety, panic, trauma, and burnout. I believe therapy works best when you feel respected, understood, and actively involved in the process.",
      "If you're looking for a therapist who combines practical tools with depth-oriented work, and who understands the realities of living and working in a fast-paced environment, I may be a good fit.",
    ],
    // TODO: Maya's photo from the Drive link in the profile
    image: {
      src: "/images/maya.jpg",
      alt: "Dr. Maya Reynolds, licensed clinical psychologist in Santa Monica, CA",
    },
    cta: { label: "Book an appointment", href: "#contact" },
  },

  ourOffice: {
    id: "office",
    eyebrow: "Our office",
    heading: "A calm, grounding space in Santa Monica",
    text: "My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
    details: [
      "In-person sessions at 123th Street 45 W, Santa Monica, CA 90401",
      "Secure telehealth for clients located in California",
      "Private, quiet, and uncluttered, with natural light",
    ],
    // TODO: use the office photos from the Drive folder in the profile; update alt text to match each one
    images: [
      {
        src: "/images/office-1.jpg",
        alt: "Calm therapy room with natural light in Santa Monica, CA",
      },
      {
        src: "/images/office-2.jpg",
        alt: "Comfortable, uncluttered seating area in the therapy office",
      },
      {
        src: "/images/office-3.jpg",
        alt: "Quiet, private counseling space designed to feel grounding",
      },
    ],
  },

  appointmentCta: {
    eyebrow: "Schedule an appointment",
    headingStart: "Find support that fits your",
    headingScript: "life",
    text: "If you're looking for a therapist who combines practical tools with depth-oriented work, I may be a good fit. I offer in-person therapy from my Santa Monica office and secure telehealth sessions for clients located in California.",
    note: "Click the button below to schedule an appointment.",
    cta: { label: "Book now", href: "#contact" },
    imageLeft: {
      src: "/images/grass_flower.jpg",
      alt: "A hand picking up seashells on a sandy beach",
    },
    imageRight: {
      src: "/images/hands_touching_plant.jpg",
      alt: "A person pointing at shells in the sand beside a child standing barefoot",
    },
  },

  footer: {
    blurb:
      "Therapy for adults in Santa Monica, CA. Come into my quiet, private office or meet by secure telehealth from anywhere in California, whichever feels best for you.",
    navigate: [
      { label: "Home", href: "/" },
      { label: "About", href: "#about" },
      { label: "FAQs", href: "#faqs" },
      { label: "Contact", href: "#contact" },
    ],
    // Replaces the team list (Maya practices solo). Rename the column heading in Footer to "Specialties".
    team: ["Anxiety & Panic", "Trauma & EMDR", "Burnout & Perfectionism"],
    contact: {
      address: ["123th Street 45 W", "Santa Monica, CA 90401"],
      // The profile gives no email or phone, so they are left empty. Hide those two lines in Footer.
      email: "",
      phone: "",
      serviceArea:
        "In-person in Santa Monica. Secure telehealth for clients located in California.",
    },
    legal: [
      { label: "Terms", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Disclaimer", href: "#" },
      { label: "Website by Grow My Therapy", href: "#" },
    ],
  },
};