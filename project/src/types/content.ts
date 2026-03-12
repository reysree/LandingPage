import { z } from "zod";

// --- Project schema ---
export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  summary: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  tags: z.array(z.string()),
  link: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  image: z.string().optional(),
  featured: z.boolean().default(false),
  publishedAt: z.string(),
});
export type Project = z.infer<typeof ProjectSchema>;

// --- Experience schema ---
export const ExperienceSchema = z.object({
  title: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.array(z.string()),
  skills: z.array(z.string()),
  current: z.boolean().default(false),
});
export type Experience = z.infer<typeof ExperienceSchema>;

// --- Certification schema ---
export const CertificationSchema = z.object({
  title: z.string(),
  link: z.string(),
  image: z.string(),
  issuer: z.string(),
});
export type Certification = z.infer<typeof CertificationSchema>;

// --- Skill group schema ---
export const SkillGroupSchema = z.object({
  category: z.string(),
  skills: z.array(z.object({ name: z.string(), concepts: z.array(z.string()) })),
});
export type SkillGroup = z.infer<typeof SkillGroupSchema>;

// --- Site settings schema ---
export const SiteSettingsSchema = z.object({
  name: z.string(),
  role: z.string(),
  tagline: z.string(),
  email: z.string().email(),
  github: z.string().url(),
  linkedin: z.string().url(),
  leetcode: z.string().url(),
  resumePdf: z.string(),
  gaId: z.string(),
});
export type SiteSettings = z.infer<typeof SiteSettingsSchema>;
