export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  stats?: { label: string; value: string }[];
  videos: string[];
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "ai-garden",
    title: "AI Garden",
    category: "AI Performance Marketing",
    description: "Successfully managed the full lifecycle of the 'v2 - Iteration4' creative over a 10-month period.",
    longDescription: "Proactively implementing strategic pivots and visual iterations to counteract ad fatigue and frequency-related ROAS fluctuations. Achieved CPRs as low as $42.28 with the 'V3 Transformation' series.",
    stats: [
      { label: "Total Spend", value: "$225k+" },
      { label: "Views", value: "9.5M" },
      { label: "Reach", value: "5.3M" }
    ],
    videos: ["/v2-iteration4-ai-garden.mp4", "/EN-Transformation3-D-AIGarden.mp4"],
    tags: ["AI Video", "ROAS Optimization", "Creative Strategy"]
  },
  {
    id: "donna-ai",
    title: "Donna AI",
    category: "AI Music & Entertainment",
    description: "A competitor-informed ad series optimized through extensive multi-variant testing.",
    longDescription: "By integrating AI music videos and diverse hooks, I standardized the format to significantly drive down CPM. Achieved over 18 million impressions and 1,800+ conversions across the 'AI Cover' and 'Crying' series.",
    stats: [
      { label: "Impressions", value: "18M+" },
      { label: "CPC", value: "$0.29" },
      { label: "CPM", value: "$19.10" }
    ],
    videos: ["/EN-AICoverCrying7-D-Milen-Donna.mp4", "/ES-AICoverLanguages-D-V3-Milen-Donna.mp4", "/EN-V3Iteration-D-V14-Milen-Donna.mp4", "/EN-V3Iteration-D-V15-Milen-Donna.mp4"],
    tags: ["AI Music", "Viral Hooks", "Multi-Variant Testing"]
  },
  {
    id: "tcg-scanner",
    title: "TCG Card Scanner",
    category: "Utility App Marketing",
    description: "The creative challenge was making a utility app feel exciting for a high-intent audience.",
    longDescription: "Scaled 'V1 PSA vs TCG' and 'V3 Set 2' to reach 2.2M+ users. Optimized budget management to achieve a peak Purchase ROAS of 0.85.",
    stats: [
      { label: "Reach", value: "2.2M+" },
      { label: "CTR", value: "1.21%" },
      { label: "ROAS", value: "0.85" }
    ],
    videos: ["/EN-Set2-D-V3-Milen-TCGCardValueIdentifier.mp4", "/EN-PSAvsTCG-D-V1-Milen-TCGKardo.mp4"],
    tags: ["UGC Style", "Utility Marketing", "ROAS"]
  },
  {
    id: "kai-comic",
    title: "KAI AI Comic Book",
    category: "AI Creative Tools",
    description: "Managed high-scale Facebook Ad campaigns utilizing the 'v11' creative series.",
    longDescription: "Successfully generated over 760 website purchases and reached nearly 2 million potential customers through data-driven optimization.",
    stats: [
      { label: "Purchases", value: "760+" },
      { label: "Reach", value: "2M" },
      { label: "Spend", value: "$16k+" }
    ],
    videos: ["/EN-FirstCreativeSet-D-V11-Milen-ComicBookAI.mp4", "EN-GoreComic-V3-KAIComicBook.mp4", "EN-GoreComic-V4-KAIComicBook.mp4"],
    tags: ["AI Comics", "Direct Response", "Facebook Ads"]
  },
  {
    id: "ai-car-designer",
    title: "AI Car Designer",
    category: "User Acquisition / iOS",
    description: "Drive app installs by demonstrating the 'Magic Moment' of turning static car photos into cinematic, AI-generated driving videos.",
    longDescription: "Developed a multi-language campaign (English/Spanish) targeting the automotive 'car-culture' niche on social media. Created a 'scroll-stopping' visual hook that lowered the perceived barrier to entry for professional-grade videography.",
    stats: [
      { label: "Role", value: "Strategist" },
      { label: "Platform", value: "iOS" },
      { label: "Markets", value: "EN/ES" }
    ],
    videos: ["/EN-CarsOnRoad-D-V5-Milen-AICar.mp4", "/ES-CarsOnRoad-D-V2-Milen-AICar.mp4"],
    tags: ["Creative Strategy", "Video Editing", "AI Video", "User Acquisition"]
  }
];

export const AUTOMATION = {
  title: "Ad Automation System",
  description: "Designed, built, and shipped an automated content system producing 100+ assets per day across UGC video, AI cover art, and transformation reels.",
  impact: "Replacing manual production by 40% and rolling out to a 6-person creative team.",
  image: ["/image-7.png", "/image-8.png"]
};

export const SOCIAL_MEDIA = [
  {
    client: "Ozan Parke",
    description: "Rebranded Instagram from a static catalog into a cohesive editorial feed. Reached 22k+ monthly accounts.",
    tags: ["Rebranding", "Editorial Feed", "Lifestyle Photography"],
    image: "/image-5.png",
    video: "/Ozan-P.mp4"
  },
  {
    client: "E-Movement (UK)",
    description: "Developed visual identity for a British e-bike brand. Reached 21k+ accounts within 30 days.",
    tags: ["Visual Identity", "Neon Overlays", "High-Contrast Lighting"],
    image: "/image-6.png",
    video: "/emovment-post-design.m4v"
  }
];

export const ARTWORKS = [
  {
    title: "Character Portraiture",
    type: "Traditional (Pencil/Ballpoint)",
    description: "Detailed character studies focusing on texture and psychological depth.",
    image: "/image-1.png"
  },
  {
    title: "Dutch Golden Age Digital",
    type: "Digital Painting",
    description: "Surrealist compositions bridging traditional aesthetics with digital media.",
    image: "/image-2.png"
  },
  {
    title: "VR Environment Design",
    type: "3D Modeling / Blender",
    description: "Interactive children's book world built for Meta Quest 3.",
    image: "/image-3.png"
  },
  {
    title: "Game Visual Identity",
    type: "2D Platformer",
    description: "Environmental lighting and color language for atmospheric storytelling.",
    image: "/image-4.png"
  }
];
