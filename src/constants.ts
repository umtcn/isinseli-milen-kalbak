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
