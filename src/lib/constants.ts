export const SECTION_IDS = {
  hero: 'hero',
  about: 'about',
  projects: 'projects',
  personal: 'personal',
  contact: 'contact',
} as const

export const NAV_ITEMS = [
  { label: 'About', sectionId: SECTION_IDS.about },
  { label: 'Projects', sectionId: SECTION_IDS.projects },
  { label: 'Personal', sectionId: SECTION_IDS.personal },
  { label: 'Contact', sectionId: SECTION_IDS.contact },
]

export const CONTACT = {
  email: 'hanine.mez@gmail.com',
  location: 'Paris, France',
  instagram: 'capdollz',
}

export const TOOLS = ['ZBrush', 'Blender', 'Marvelous Designer', 'KeyShot']
