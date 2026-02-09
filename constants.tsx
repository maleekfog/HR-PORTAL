
import { JobOpening } from './types';

export const MISSION = "To be a leading provider of original fashion while delivering quality and exceptional client experiences.";

export const VISION_STATEMENT = "At Fog Originals, every client engagement reflects our commitment to quality, integrity, and building lasting trust.";

export const CORE_VALUES = [
  { 
    title: 'Originality', 
    emoji: '🦁', 
    desc: 'Authentic products, distinctive style, and intentional presentation. Upholding the brand’s bold, refined identity.' 
  },
  { 
    title: 'Integrity', 
    emoji: '🔒', 
    desc: 'Doing the right thing, even when no one is watching. Honesty, transparency, and protecting client trust.' 
  },
  { 
    title: 'Professionalism', 
    emoji: '👔', 
    desc: 'Excellence in appearance, conduct, and awareness. Vigilance in a luxury environment.' 
  },
  { 
    title: 'Accountability', 
    emoji: '📋', 
    desc: 'Owning your role, actions, and responsibilities. Showing up prepared and ready for every shift.' 
  },
  { 
    title: 'Excellence', 
    emoji: '✨', 
    desc: 'Our standard, not our exception. Built through discipline, consistency, and attention to detail.' 
  },
  { 
    title: 'Customer-Centricity', 
    emoji: '🌟', 
    desc: 'Providing an experience rooted in confidence, control, and care. Attentive and proactive service.' 
  },
  { 
    title: 'Teamwork', 
    emoji: '🤝', 
    desc: 'Collaborative excellence. Success depends on how well we support one another behind the scenes.' 
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: '1',
    title: 'Shopify Manager',
    department: 'Operations',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    postedAt: 'Just now',
    description: 'Manage our global e-commerce presence on Shopify. Responsible for product uploads, inventory synchronization, and optimizing the digital customer journey for our street luxury collections.'
  },
  {
    id: '2',
    title: 'Social Media Assistant',
    department: 'Marketing',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    postedAt: '2 days ago',
    description: 'Assist in content creation and community management. Help tell the FOG story across Instagram, Snapchat, and TikTok, engaging with our growing community of "The Originals".'
  },
  {
    id: '3',
    title: 'Dispatch Rider',
    department: 'Logistics',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    postedAt: '1 day ago',
    description: 'Ensure our luxury pieces are delivered safely and promptly across Lagos. Represent the brand on the last mile with professionalism and efficiency.'
  }
];

export const COMPANY_VALUES = CORE_VALUES.map(v => ({ title: v.title, description: v.desc }));

export const SYSTEM_PROMPT = `You are the Brand Concierge and Internal HR Assistant for FOG Originals Lagos. 
FOG Originals is a premier street luxury fashion brand based in Lagos, Nigeria.
TONE: Sophisticated, professional, trend-aware, and authoritative.

CORE KNOWLEDGE (Policies & KPIs):
- MISSION: ${MISSION}
- VALUES: Originality (🦁), Integrity (🔒), Professionalism (👔), Accountability (📋), Excellence (✨), Customer-Centricity (🌟), Teamwork (🤝).
- CURRENT VACANCIES: Shopify Manager, Social Media Assistant, Dispatch Rider.
- POLICIES: 
  * Dress Code: Professional appearance, no store items unless purchased, minimal fragrances.
  * Attendance: Report absence 2 hours before shift. 3 days unapproved absence = termination.
  * Social Media: Strictly no posting internal disputes, sales records, or negative comments.
  * Refunds/Exchanges: No refunds. Exchanges within 24 hours only (white items excluded).
  * Inventory: Zero tolerance for stock discrepancies. 
  * Misconduct: Zero tolerance for harassment or discrimination.

If an employee asks about a policy (like attendance or dress code), give them the specific internal rule. 
If a candidate asks about a job, explain the culture of high standards.`;
