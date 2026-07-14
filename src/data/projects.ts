import type { Project, ProjectImage } from '../types/project'

// Gentle Monster
import gmSculpt1 from '../images/Gentle monster/gm sculpt1.jpg'
import gmSculpt2 from '../images/Gentle monster/gm sculpt2.jpg'
import gmSculpt3 from '../images/Gentle monster/gm sculpt3.jpg'
import gmStock from '../images/Gentle monster/gm stock pic.jpg'
import gmPopUp from '../images/Gentle monster/GM POP UP.jpg'
import gmPopUp2 from '../images/Gentle monster/GM pop up2.jpg'

// Moto Bratz
import mbPhotoshoot from '../images/Moto bratz/MOTO bratz photoshoot.jpg'
import mbPhotoshoot1 from '../images/Moto bratz/MOTO bratz photoshoot1.jpg'
import mbPhotoshoot2 from '../images/Moto bratz/MOTO bratz photoshoot2.jpg'

// Fashion Pixiez
import fpStock from '../images/fashion pixies/FP stock pics.jpg'

// Charmz
import chStock from '../images/CHARMZ/charmz stock pic.jpg'

// Pop Starz
import psStock from '../images/POP STARZ/pop starz stock pic.jpg'

// LAMB
import lambCover from '../images/LAMB/LAMB1.jpg'
import lamb2 from '../images/LAMB/LAMB2.jpg'
import lamb3 from '../images/LAMB/LAMB3.jpg'
import lamb4 from '../images/LAMB/LAMB4.jpg'
import lamb5 from '../images/LAMB/LAMB5.jpg'
import lambCharacterSheet from '../images/LAMB/LAMB CHARACTER SHEET.jpg'
import lambPrinted from '../images/LAMB/lamb printed.jpg'

// Bratz Fairies
import bfCover from '../images/Bratz fairies/BF 1.jpg'
import bf2 from '../images/Bratz fairies/BF 2.jpg'
import bf3 from '../images/Bratz fairies/BF3.jpg'
import bf4 from '../images/Bratz fairies/BF4.jpg'
import bf5 from '../images/Bratz fairies/BF 5.jpg'
import bf6 from '../images/Bratz fairies/BF 6.jpg'
import bf7 from '../images/Bratz fairies/BF7.jpg'

// Converse
import converseCover from '../images/Converse/converse cover.jpg'
import converse1 from '../images/Converse/Converse (1).jpg'
import converse2 from '../images/Converse/Converse(2).jpg'
import converse3 from '../images/Converse/Converse(3).jpg'
import converseShoes from '../images/Converse/converse shoes 1.jpg'
import converseWA2 from '../images/Converse/IMG-20260305-WA0002.jpg'
import converseWA4 from '../images/Converse/IMG-20260305-WA0004.jpg'
import converseWA8 from '../images/Converse/IMG-20260305-WA0008.jpg'
import converseWA10 from '../images/Converse/IMG-20260305-WA0010.jpg'

// Oberon & Titania
import otRender from '../images/OBERON AND TITIANA/oberon render.jpg'
import otCover from '../images/OBERON AND TITIANA/Oberon Cover.jpg'
import otBW from '../images/OBERON AND TITIANA/oberon black and white.jpg'
import otOberon from '../images/OBERON AND TITIANA/OBERON.jpg'
import otOberon2 from '../images/OBERON AND TITIANA/OBERON2.jpg'
import otOriginal from '../images/OBERON AND TITIANA/oberon original.jpg'

// Goin' Out Jade
import jadeMain from '../images/Goin Out Jade sculpture/JADE10F.jpg'
import jade2 from '../images/Goin Out Jade sculpture/JADE2F.jpg'
import jade5 from '../images/Goin Out Jade sculpture/JADE5F.jpg'
import jade16 from '../images/Goin Out Jade sculpture/JADE16F.jpg'
import jade20 from '../images/Goin Out Jade sculpture/JADE20F.jpg'
import jade28 from '../images/Goin Out Jade sculpture/JADE28F.jpg'
import jade31 from '../images/Goin Out Jade sculpture/JADE31F.jpg'
import jade37 from '../images/Goin Out Jade sculpture/JADE37F.jpg'
import jadeTurnaround from '../images/Goin Out Jade sculpture/Jadeturnaround2.jpg'

/**
 * Folder-backed image sets. Vite resolves these at build time; files are ordered
 * naturally (img2 before img10) so the on-disk order is the display order.
 */
const allImages = import.meta.glob<string>(
  [
    '../images/fashion pixies/*/*.jpg',
    '../images/CHARMZ/*/*.jpg',
    '../images/POP STARZ/*/*.jpg',
    '../images/Moto bratz/*/*.jpg',
    '../images/Moto bratz/IMG_*.jpg',
    '../images/Gentle monster/GM[0-9]*.jpg',
    '../images/MOWALOLA/*.jpg',
    '../images/De4dname sculpture/*.jpg',
    '../images/DE4DNAME/*.jpg',
    '../images/Bratz twins/*.jpg',
  ],
  { eager: true, import: 'default' },
)

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' })

function folder(path: string, label: string): ProjectImage[] {
  const prefix = `../images/${path}/`
  return Object.entries(allImages)
    .filter(([key]) => key.startsWith(prefix) && !key.slice(prefix.length).includes('/'))
    .sort(([a], [b]) => collator.compare(a, b))
    .map(([key, src]) => ({
      id: key.slice('../images/'.length).replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(),
      src,
      label,
      aspectRatio: '4:3' as const,
    }))
}

function pick(path: string, files: string[], label: string): ProjectImage[] {
  return files.map((file) => {
    const key = `../images/${path}/${file}`
    const src = allImages[key]
    if (!src) throw new Error(`Missing image: ${key}`)
    return {
      id: `${path}/${file}`.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase(),
      src,
      label,
      aspectRatio: '4:3' as const,
    }
  })
}

export const projects: Project[] = [
  {
    id: 'gentle-monster-bratz',
    title: 'Gentle Monster X Bratz',
    subtitle: 'Limited Edition Collaboration',
    date: 'May 2025',
    sortDate: '2025-05-07',
    category: 'professional',
    role: 'Robotic Body, Shoes & Glasses',
    client: 'MGA Entertainment / Gentle Monster',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'Sculpted the complete robotic body, miniature shoes, and branded eyewear for the Gentle Monster x Bratz collaboration. Contributed to the design process alongside the Gentle Monster team, working from a 3D-scanned model to entirely rework the articulations and body structure. The collection was featured in exclusive pop-up installations across four major cities worldwide, with giant statues based on the 3D sculpt.',
    details: [
      'Full robotic articulated body sculpture',
      'Miniature platform shoes',
      'Branded miniature glasses',
      'Design contribution with Gentle Monster team',
    ],
    exhibitions: [
      'Los Angeles, USA',
      'Seoul, South Korea',
      'Shanghai, China',
      'Bangkok, Thailand',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'gm-4', src: gmStock, label: 'Final Product — Purple Cape', aspectRatio: '4:3' },
      { id: 'gm-1', src: gmSculpt1, label: 'Robotic Body — Blue/Silver', aspectRatio: '4:3' },
      { id: 'gm-2', src: gmSculpt2, label: 'Robotic Body — Gold/Bronze', aspectRatio: '4:3' },
      { id: 'gm-3', src: gmSculpt3, label: 'Full Figure — Gray Matte', aspectRatio: '4:3' },
      ...pick(
        'Gentle monster',
        ['GM1.jpg', 'GM2.jpg', 'GM3.jpg', 'GM4.jpg', 'GM5.jpg', 'GM6.jpg', 'GM7.jpg', 'GM8.jpg', 'GM9.jpg', 'GM10.jpg'],
        'Gentle Monster X Bratz',
      ),
      { id: 'gm-5', src: gmPopUp, label: 'Pop-up Store — Los Angeles', aspectRatio: '4:3' },
      { id: 'gm-6', src: gmPopUp2, label: 'Giant Statue — Installation', aspectRatio: '4:3' },
    ],
    featured: true,
  },
  {
    id: 'moto-bratz',
    title: 'Moto Bratz',
    subtitle: "Scorchin' Line — Racing Accessories",
    date: 'September 2024',
    sortDate: '2024-09-04',
    category: 'professional',
    role: 'All Accessories',
    client: 'MGA Entertainment',
    collaboration: 'Lolliword',
    titleFont: 'font-title-helvetica-compressed',
    description:
      "Moto Bratz was a promotional project for the official Bratz Instagram page. The goal was to promote the Scorchin' line by creating Moto sports characters. Sculpted all accessories including boots, gloves, chest protections, helmets, and a podium trophy, capturing high-energy racing aesthetics.",
    details: [
      'Motorcycle boots (multiple styles)',
      'Riding gloves',
      'Chest protection armor',
      'Audio headset helmets',
      'Podium trophy',
    ],
    tools: ['ZBrush'],
    images: [
      { id: 'mb-9', src: mbPhotoshoot1, label: 'Moto Bratz Photoshoot', aspectRatio: '4:3' },
      { id: 'mb-10', src: mbPhotoshoot2, label: 'Moto Bratz Photoshoot', aspectRatio: '16:9' },
      { id: 'mb-8', src: mbPhotoshoot, label: 'All Characters', aspectRatio: '4:3' },
    ],
    imageGroups: [
      folder('Moto bratz/chest', 'Moto Bratz'),
      folder('Moto bratz/gloves', 'Moto Bratz'),
      folder('Moto bratz/headphone', 'Moto Bratz'),
      folder('Moto bratz/shoes', 'Moto Bratz'),
      folder('Moto bratz/trophy', 'Moto Bratz'),
      pick(
        'Moto bratz',
        [
          'IMG_20241006_124519_812.jpg',
          'IMG_20241007_111721_781.jpg',
          'IMG_20241008_155238_560.jpg',
          'IMG_20241107_183820_969.jpg',
          'IMG_20241107_183822_667.jpg',
          'IMG_20241107_185334_091.jpg',
        ],
        'Moto Bratz',
      ),
    ],
    featured: false,
  },
  {
    id: 'fashion-pixiez',
    title: 'Fashion Pixiez',
    subtitle: 'Fairy-Themed Accessories Collection',
    date: 'August 2025',
    sortDate: '2025-08-06',
    category: 'professional',
    role: 'Full Accessories Range',
    client: 'MGA Entertainment',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'Designed and sculpted the entire accessory line for the Fashion Pixiez fairy-themed Bratz collection. Translated 2D concept art into production-ready 3D models, creating shoes, earrings, and bags infused with magic and fantasy while preserving the signature Bratz aesthetic.',
    details: [
      'Fairy-themed heeled shoes (multiple styles)',
      'Butterfly wing earrings',
      'Fantasy themed earrings',
      'Flowers themed handbags',
      'Fairy wings',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'fp-17', src: fpStock, label: 'Full Collection', aspectRatio: '4:3' },
    ],
    imageGroups: [
      folder('fashion pixies/cloe', 'Fashion Pixiez'),
      folder('fashion pixies/Jade', 'Fashion Pixiez'),
      folder('fashion pixies/lina', 'Fashion Pixiez'),
      folder('fashion pixies/sasha', 'Fashion Pixiez'),
      folder('fashion pixies/yamin', 'Fashion Pixiez'),
      folder('fashion pixies/wings', 'Fashion Pixiez'),
    ],
    featured: false,
  },
  {
    id: 'charmz',
    title: 'Charmz',
    subtitle: 'Elegant Accessories Line',
    date: 'January 2026',
    sortDate: '2026-01-02',
    category: 'professional',
    role: 'Shoes & Jewelry',
    client: 'MGA Entertainment',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'Sculpted an elegant accessories range for the Charmz collection, focusing on refined footwear and delicate jewelry with an enchanting tone and sophisticated detailing, while preserving the core Bratz aesthetic.',
    details: [
      'Heeled shoes with bow details',
      'Silver tall boots',
      'Pointed boots',
      'Pearl bracelets & creole earrings',
      'Studded bracelets & spike earrings',
      'Belt clips',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'ch-11', src: chStock, label: 'Full Collection', aspectRatio: '4:3' },
    ],
    imageGroups: [
      folder('CHARMZ/cloe', 'Charmz'),
      folder('CHARMZ/jade', 'Charmz'),
      folder('CHARMZ/sasha', 'Charmz'),
      folder('CHARMZ/yasmin', 'Charmz'),
    ],
    featured: false,
  },
  {
    id: 'pop-starz',
    title: 'Pop Starz',
    subtitle: 'Rock & Pop Performance Accessories',
    date: 'January 2026',
    sortDate: '2026-01-01',
    category: 'professional',
    role: 'Performance Accessories',
    client: 'MGA Entertainment',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'Designed rock and pop-inspired accessories for the Pop Starz collection, including performance boots and stage microphone props capturing the spirit of the music scene.',
    details: [
      'Laced-up performance boots',
      'Platform boots with straps',
      'Star & heart microphones',
      'Headset microphones',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'ps-9', src: psStock, label: 'Full Collection', aspectRatio: '4:3' },
    ],
    imageGroups: [
      folder('POP STARZ/cloe', 'Pop Starz'),
      folder('POP STARZ/jade', 'Pop Starz'),
      folder('POP STARZ/Sasha', 'Pop Starz'),
      folder('POP STARZ/yasmin', 'Pop Starz'),
    ],
    featured: false,
  },
  {
    id: 'bratz-twins',
    title: 'Bratz Twins',
    subtitle: 'Commissioned Accessories Set',
    date: 'February 2026',
    sortDate: '2026-02-01',
    category: 'professional',
    role: 'All Accessories',
    client: '@peace.love.plastic',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'A commission for @peace.love.plastic on Instagram. I sculpted all the accessories for the Bratz Twins project, working to the client\'s brief and delivering each piece as a finished, production-ready model.',
    details: ['All accessories sculpted for the set'],
    tools: ['ZBrush'],
    images: folder('Bratz twins', 'Bratz Twins'),
    featured: false,
  },
  {
    id: 'de4dname-wand',
    title: 'De4dname Magical Wand',
    subtitle: 'Commissioned Prop — 3D Printed Wand',
    date: 'February 2026',
    sortDate: '2026-02-02',
    category: 'professional',
    role: 'Prop Sculpt',
    client: '@de4dname',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'A commission for @de4dname on Instagram. I sculpted a magical wand intended to be 3D printed and painted for her thesis project.',
    details: ['Magical wand sculpt', 'Prepared for 3D printing and painting'],
    tools: ['ZBrush'],
    images: folder('DE4DNAME', 'De4dname Magical Wand'),
    featured: false,
  },
  {
    id: 'lamb',
    title: 'Lamb Mascot — Designer Collectible Figurine',
    subtitle: 'Brand Mascot Sculpt',
    date: 'December 2024',
    sortDate: '2024-12-03',
    category: 'professional',
    role: 'Character Design & Mascot',
    client: 'LAMB',
    titleFont: 'font-title-helvetica-compressed',
    description:
      "Developed in collaboration with Lamb, a Paris-based thrift store known for fashion pop-ups combining clothing, drinks, and DJ sets. The project reimagines the brand's 2D mascot as a premium collectible figurine, bridging graphic identity and physical form.\n\nWorking from a single front-facing reference, the sculpt required a full volumetric interpretation — extrapolating unseen angles while preserving the character's strong silhouette and graphic simplicity. The figurine was engineered for resin 3D printing at 8 × 10 × 4 cm, with attention to structural integrity and surface quality, then hand painted to match the brand's visual language. Designed with series scalability in mind, positioned between brand artifact and designer toy.",
    details: [
      'Full character body sculpt',
      'Character sheet & design documentation',
      'Printed figurine mockup',
    ],
    tools: ['ZBrush'],
    images: [
      { id: 'lamb-1', src: lambCover, label: 'LAMB Mascot', aspectRatio: '4:3' },
      { id: 'lamb-2', src: lamb2, label: 'LAMB Mascot', aspectRatio: '4:3' },
      { id: 'lamb-3', src: lamb3, label: 'LAMB Mascot', aspectRatio: '4:3' },
      { id: 'lamb-4', src: lamb4, label: 'LAMB Mascot', aspectRatio: '4:3' },
      { id: 'lamb-5', src: lamb5, label: 'LAMB Mascot', aspectRatio: '4:3' },
      { id: 'lamb-6', src: lambCharacterSheet, label: 'Character Sheet', aspectRatio: '4:3' },
      { id: 'lamb-7', src: lambPrinted, label: 'Printed Figurine', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'bratz-fairies',
    title: 'Bratz Fairies',
    subtitle: 'Articulated Fairy Wings — Fashion Doll Accessory',
    date: 'June 2025',
    sortDate: '2025-06-01',
    category: 'professional',
    role: 'Wing Accessory',
    client: 'MGA Entertainment',
    collaboration: 'Lolliword',
    titleFont: 'font-title-helvetica-compressed',
    description:
      "Developed in collaboration with artist Lolliword for a fairy-themed Bratz photoshoot. The design was inspired by Titania's wings from The Reconciliation of Oberon and Titania, translated from a single painted reference into a fully production-ready accessory.\n\nThe wings were built as a segmented articulated system, allowing controlled posing while maintaining durability. Pivot placement was carefully planned to support expressive photography. A custom back peg attachment ensures secure fit, clean integration with the doll body, and easy removal. The model was optimized for high-detail resin printing, with attention to wall thickness, part separation, and assembly tolerances.",
    details: [
      'Articulated segmented wing system',
      'Custom back peg attachment',
      'Optimized for resin printing',
      'Designed for expressive posing',
    ],
    tools: ['ZBrush'],
    images: [
      { id: 'bf-1', src: bfCover, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-2', src: bf2, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-3', src: bf3, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-4', src: bf4, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-5', src: bf5, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-6', src: bf6, label: 'Bratz Fairies', aspectRatio: '4:3' },
      { id: 'bf-7', src: bf7, label: 'Bratz Fairies', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'converse',
    title: 'Miniature Converse Lo Lab Sneakers',
    subtitle: 'Miniature Shoe Sculpt',
    date: 'March 2026',
    sortDate: '2026-03-05',
    category: 'professional',
    role: 'Miniature Footwear',
    client: 'Converse',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'Sculpted miniature Converse shoe replicas with precise detailing, capturing the iconic silhouette and branding at a small scale for collectible and display purposes.',
    details: [
      'Miniature Converse shoe sculpt',
      'Precise brand-accurate detailing',
      'Multiple colorway variations',
    ],
    tools: ['ZBrush'],
    images: [
      { id: 'cv-1', src: converseCover, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-2', src: converse1, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-3', src: converse2, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-4', src: converse3, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-5', src: converseShoes, label: 'Converse Shoes', aspectRatio: '4:3' },
      { id: 'cv-6', src: converseWA2, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-7', src: converseWA4, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-8', src: converseWA8, label: 'Converse', aspectRatio: '4:3' },
      { id: 'cv-9', src: converseWA10, label: 'Converse', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'mowalola-beats',
    title: 'Mowalola X Beats',
    subtitle: 'Campaign Recreation',
    date: 'March 2026',
    sortDate: '2026-03-10',
    category: 'personal',
    role: 'Character, Outfit & Props',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'A personal project recreating the original Mowalola x Beats campaign, the one featuring the singer JT. The goal was to rebuild that advertisement in 3D, matching its look and attitude as closely as possible.',
    details: ['Character sculpt', 'Outfit & accessories', 'Campaign scene recreation'],
    tools: ['ZBrush', 'Blender'],
    images: folder('MOWALOLA', 'Mowalola X Beats'),
    featured: false,
  },
  {
    id: 'de4dname-sculpture',
    title: 'De4dname Sculpture',
    subtitle: 'Character Sculpt from Original Artwork',
    date: 'March 2026',
    sortDate: '2026-03-08',
    category: 'personal',
    role: 'Character Sculpt',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'A personal project sculpting a character based on an original artwork by @boyknifeart on Instagram. The aim was to translate the 2D drawing into a fully realised 3D sculpt while staying faithful to the original design.',
    details: ['Full character sculpt', 'Translated from 2D artwork to 3D'],
    tools: ['ZBrush'],
    images: folder('De4dname sculpture', 'De4dname Sculpture'),
    featured: false,
  },
  {
    id: 'jade-goin-out',
    title: "Goin' Out Jade Sculpture",
    subtitle: 'Bratz Jade — "Goin\' Out" Look (3D Sculpt Study)',
    date: 'March 2026',
    sortDate: '2026-03-02',
    category: 'personal',
    role: 'Character, Hair, Outfit & Faceup',
    titleFont: 'font-title-helvetica-compressed',
    description:
      "A stylized character study focused on translating an existing doll design into a production-aware 3D model, including pose, hair, outfit, and faceup.\n\nThis project is a stylized 3D recreation of Jade from Bratz, based on her \"Goin' Out\" look. The objective was to capture the character's likeness while developing a fully posed sculpt, including hair, outfit, and attitude consistent with the brand's aesthetic.\n\nA primary focus was the faceup, recreating the original doll's makeup through UV mapping and texturing to match the look of a physical product. The project also explores stylized hair sculpting, garment forms, and overall silhouette.",
    details: [
      'Full character pose sculpt',
      'Stylized hair sculpting',
      'Garment & outfit forms',
      'Faceup via UV mapping & texturing',
    ],
    tools: ['ZBrush', 'UV Mapping', 'Texturing'],
    images: [
      { id: 'jade-1', src: jadeMain, label: 'Jade — Goin\' Out', aspectRatio: '4:3' },
      { id: 'jade-2', src: jade2, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-5', src: jade5, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-16', src: jade16, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-20', src: jade20, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-28', src: jade28, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-31', src: jade31, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-37', src: jade37, label: 'Jade', aspectRatio: '4:3' },
      { id: 'jade-turnaround', src: jadeTurnaround, label: 'Jade — Turnaround', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'oberon-titania',
    title: 'The Reconciliation of Oberon and Titania',
    subtitle: 'Character Sculpting & Cloth Simulation',
    date: 'June 2025',
    sortDate: '2025-06-01',
    category: 'personal',
    role: 'Lead Sculptor — Characters, Hair & Drapery',
    collaboration: 'Lolliword',
    titleFont: 'font-title-helvetica-compressed',
    description:
      'This personal project came directly after the Bratz Fairies project. Having sculpted the articulated fairy wings for that collection, I was inspired to take the concept further and sculpt full characters based on the original painting "The Reconciliation of Oberon and Titania." The project focused on character sculpting, posing, and detailed hair sculpting. Cloth simulation was used throughout the process, with the simulated garments then refined and edited in ZBrush to achieve the final look.',
    details: [
      'Full character body sculpting',
      'Character posing',
      'Detailed hair sculpting',
      'Cloth simulation (Marvelous Designer)',
      'Simulated cloth editing in ZBrush',
    ],
    tools: ['ZBrush', 'Blender', 'Marvelous Designer'],
    images: [
      { id: 'ot-3', src: otRender, label: 'Sculpt Render', aspectRatio: '4:3' },
      { id: 'ot-6', src: otCover, label: 'Oberon Cover', aspectRatio: '4:3' },
      { id: 'ot-4', src: otBW, label: 'Black & White', aspectRatio: '4:3' },
      { id: 'ot-1', src: otOberon, label: 'Oberon', aspectRatio: '4:3' },
      { id: 'ot-2', src: otOberon2, label: 'Oberon — Detail', aspectRatio: '4:3' },
      { id: 'ot-5', src: otOriginal, label: 'Original Painting', aspectRatio: '16:9' },
    ],
    featured: false,
  },
]

export const professionalProjects = projects
  .filter((p) => p.category === 'professional')
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

export const personalProjects = projects
  .filter((p) => p.category === 'personal')
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

function getYear(sortDate: string) {
  return sortDate.slice(0, 4)
}

export function groupByYear<T extends { sortDate: string }>(items: T[]): { year: string; projects: T[] }[] {
  const map = new Map<string, T[]>()
  for (const item of items) {
    const year = getYear(item.sortDate)
    if (!map.has(year)) map.set(year, [])
    map.get(year)!.push(item)
  }
  return Array.from(map.entries())
    .sort(([a], [b]) => b.localeCompare(a))
    .map(([year, projects]) => ({ year, projects }))
}

export const professionalByYear = groupByYear(professionalProjects)
export const personalByYear = groupByYear(personalProjects)
