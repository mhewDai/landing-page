export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  links: {
    demo?: string;
    code?: string;
    pdf?: string;
    citation?: string;
  };
  badges: string[];
  cover: string;
  screenshots: string[];
  featured: boolean;
  dateCreated: string;
  fileSize?: string;
}

export interface ProjectData {
  projects: Project[];
}

export function validateProject(project: any): project is Project {
  return (
    typeof project.slug === 'string' &&
    typeof project.title === 'string' &&
    typeof project.summary === 'string' &&
    typeof project.description === 'string' &&
    Array.isArray(project.tech) &&
    typeof project.links === 'object' &&
    Array.isArray(project.badges) &&
    typeof project.cover === 'string' &&
    Array.isArray(project.screenshots) &&
    typeof project.featured === 'boolean' &&
    typeof project.dateCreated === 'string'
  );
}

export function validateProjectData(data: any): data is ProjectData {
  return (
    typeof data === 'object' &&
    Array.isArray(data.projects) &&
    data.projects.every(validateProject)
  );
}