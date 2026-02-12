import type { Project } from '../types/project'

// Gentle Monster
import gmSculpt1 from '../images/Gentle monster/gm sculpt1.jpg'
import gmSculpt2 from '../images/Gentle monster/gm sculpt2.jpg'
import gmSculpt3 from '../images/Gentle monster/gm sculpt3.jpg'
import gmStock from '../images/Gentle monster/gm stock pic.jpg'
import gmPopUp from '../images/Gentle monster/GM POP UP.jpg'
import gmPopUp2 from '../images/Gentle monster/GM pop up2.jpg'

// Moto Bratz
import mbTrophee from '../images/Moto bratz/trophee.jpg'
import mbHeadphones from '../images/Moto bratz/headphones.jpg'
import mbEthanShoes from '../images/Moto bratz/ethan shoes.jpg'
import mbBoots from '../images/Moto bratz/balenciaga boots.jpg'
import mbChestPiece from '../images/Moto bratz/chest piece.jpg'
import mbGloves from '../images/Moto bratz/kobe gloves.jpg'
import mbHands from '../images/Moto bratz/cameron hands.jpg'
import mbPhotoshoot from '../images/Moto bratz/MOTO bratz photoshoot.jpg'
import mbPhotoshoot1 from '../images/Moto bratz/MOTO bratz photoshoot1.jpg'
import mbPhotoshoot2 from '../images/Moto bratz/MOTO bratz photoshoot2.jpg'

// Fashion Pixiez
import fpCloeShoes from '../images/fashion pixies/cloe shoes.jpg'
import fpYasminShoes from '../images/fashion pixies/yasmin shoes.jpg'
import fpSashaShoes from '../images/fashion pixies/sasha shoes.jpg'
import fpJadeShoes from '../images/fashion pixies/Jade shoes.jpg'
import fpLina from '../images/fashion pixies/Lina.jpg'
import fpWings from '../images/fashion pixies/Wings.jpg'
import fpCloeEarrings from '../images/fashion pixies/cloe earrings.jpg'
import fpYasminEarrings from '../images/fashion pixies/Yasmin earrings.jpg'
import fpJadeEarrings from '../images/fashion pixies/jade earrings.jpg'
import fpSashaEarrings from '../images/fashion pixies/sasha earrings.jpg'
import fpCloeBags from '../images/fashion pixies/cloe bags.jpg'
import fpYasminBag from '../images/fashion pixies/yasmin bag.jpg'
import fpSashaBag from '../images/fashion pixies/sasha bag.jpg'
import fpJadeBag from '../images/fashion pixies/jade bag.jpg'
import fpLinaBag from '../images/fashion pixies/Lina bag.jpg'
import fpLinaEarrings from '../images/fashion pixies/lina earringd.jpg'
import fpStock from '../images/fashion pixies/FP stock pics.jpg'

// Charmz
import chYasminHairclip from '../images/CHARMZ/yasmin hairclip.jpg'
import chSashaHairclip from '../images/CHARMZ/sasha hairclip.jpg'
import chCloeHairclip from '../images/CHARMZ/cloe hairclip.jpg'
import chYasminEarrings from '../images/CHARMZ/yasmin earrings.jpg'
import chJade from '../images/CHARMZ/charmz jade.jpg'
import chYasmin from '../images/CHARMZ/charmz yasmin.jpg'
import chCloe from '../images/CHARMZ/charmz cloe.jpg'
import chSasha from '../images/CHARMZ/charmz sasha.jpg'
import chYasminNecklace from '../images/CHARMZ/yasmin necklace.jpg'
import chSashaNecklace from '../images/CHARMZ/sasha necklace.jpg'
import chStock from '../images/CHARMZ/charmz stock pic.jpg'

// Pop Starz
import psSashaShoes from '../images/POP STARZ/sasha shoes.jpg'
import psJadeShoes from '../images/POP STARZ/jade shoes.jpg'
import psCloeShoes from '../images/POP STARZ/cloe shoes.jpg'
import psYasminShoes from '../images/POP STARZ/yasmin shoes.jpg'
import psJadeMic from '../images/POP STARZ/jade mic.jpg'
import psCloeMic from '../images/POP STARZ/cloe mic.jpg'
import psSashaMic from '../images/POP STARZ/sasha mic.jpg'
import psYasminMic from '../images/POP STARZ/yasmin mic.jpg'
import psStock from '../images/POP STARZ/pop starz stock pic.jpg'

// Oberon & Titania
import otOberon from '../images/OBERON AND TITIANA/OBERON.jpg'
import otOberon2 from '../images/OBERON AND TITIANA/OBERON2.jpg'
import otStock from '../images/OBERON AND TITIANA/oberon stock pic.jpg'
import otBW from '../images/OBERON AND TITIANA/oberon black and white.jpg'
import otRender from '../images/OBERON AND TITIANA/oberon render.jpg'
import otOriginal from '../images/OBERON AND TITIANA/oberon original.jpg'

export const projects: Project[] = [
  {
    id: 'gentle-monster-bratz',
    title: 'Gentle Monster X Bratz',
    subtitle: 'Limited Edition Collaboration',
    date: 'September 2024',
    sortDate: '2024-09-20',
    category: 'professional',
    role: '3D Sculptor — Robotic Body, Shoes & Glasses',
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
    sortDate: '2024-09-15',
    category: 'professional',
    role: '3D Sculptor — All Accessories',
    client: 'MGA Entertainment',
    collaboration: 'Lolliword',
    description:
      "Created the complete motorcycle-themed accessory range for the Moto Bratz Scorchin' line, a promotional project for the official Bratz Instagram page. Sculpted all accessories including boots, gloves, chest protections, helmets, and a podium trophy, capturing high-energy racing aesthetics for 3D low-poly animation.",
    details: [
      'Motorcycle boots (multiple styles)',
      'Riding gloves',
      'Chest protection armor',
      'Audio headset helmets',
      'Podium trophy',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'mb-8', src: mbPhotoshoot, label: 'Moto Bratz Photoshoot', aspectRatio: '4:3' },
      { id: 'mb-1', src: mbEthanShoes, label: 'Motorcycle Boots', aspectRatio: '4:3' },
      { id: 'mb-2', src: mbBoots, label: 'Balenciaga Boots', aspectRatio: '4:3' },
      { id: 'mb-3', src: mbGloves, label: 'Riding Gloves', aspectRatio: '4:3' },
      { id: 'mb-4', src: mbChestPiece, label: 'Chest Protection', aspectRatio: '4:3' },
      { id: 'mb-5', src: mbHeadphones, label: 'Audio Headset', aspectRatio: '4:3' },
      { id: 'mb-6', src: mbTrophee, label: 'Podium Trophy', aspectRatio: '4:3' },
      { id: 'mb-7', src: mbHands, label: 'Cameron Hands', aspectRatio: '4:3' },
      { id: 'mb-9', src: mbPhotoshoot1, label: 'Moto Bratz Photoshoot', aspectRatio: '16:9' },
      { id: 'mb-10', src: mbPhotoshoot2, label: 'Moto Bratz Photoshoot', aspectRatio: '16:9' },
    ],
    featured: false,
  },
  {
    id: 'fashion-pixiez',
    title: 'Fashion Pixiez',
    subtitle: 'Fairy-Themed Accessories Collection',
    date: 'August 2024',
    sortDate: '2024-08-01',
    category: 'professional',
    role: '3D Sculptor — Full Accessories Range',
    client: 'MGA Entertainment',
    titleFont: 'font-title-corsiva',
    description:
      'Designed and sculpted the entire accessory line for the Fashion Pixiez fairy-themed Bratz collection. Translated 2D concept art into production-ready 3D models, creating shoes, earrings, and bags infused with magic and fantasy while preserving the signature Bratz aesthetic.',
    details: [
      'Fairy-themed heeled shoes (multiple styles)',
      'Butterfly wing earrings',
      'Star & tulip earrings',
      'Butterfly & orchid handbags',
      'Fairy wings',
    ],
    tools: ['ZBrush', 'Blender'],
    images: [
      { id: 'fp-17', src: fpStock, label: 'Full Collection', aspectRatio: '4:3' },
      { id: 'fp-1', src: fpCloeShoes, label: 'Cloe Shoes', aspectRatio: '4:3' },
      { id: 'fp-2', src: fpYasminShoes, label: 'Yasmin Shoes', aspectRatio: '4:3' },
      { id: 'fp-3', src: fpSashaShoes, label: 'Sasha Shoes', aspectRatio: '4:3' },
      { id: 'fp-4', src: fpJadeShoes, label: 'Jade Shoes', aspectRatio: '4:3' },
      { id: 'fp-5', src: fpLina, label: 'Lina', aspectRatio: '4:3' },
      { id: 'fp-6', src: fpWings, label: 'Fairy Wings', aspectRatio: '4:3' },
      { id: 'fp-7', src: fpCloeEarrings, label: 'Cloe Earrings', aspectRatio: '4:3' },
      { id: 'fp-8', src: fpYasminEarrings, label: 'Yasmin Earrings', aspectRatio: '4:3' },
      { id: 'fp-9', src: fpJadeEarrings, label: 'Jade Earrings', aspectRatio: '4:3' },
      { id: 'fp-10', src: fpSashaEarrings, label: 'Sasha Earrings', aspectRatio: '4:3' },
      { id: 'fp-11', src: fpCloeBags, label: 'Cloe Bags', aspectRatio: '4:3' },
      { id: 'fp-12', src: fpYasminBag, label: 'Yasmin Bag', aspectRatio: '4:3' },
      { id: 'fp-13', src: fpSashaBag, label: 'Sasha Bag', aspectRatio: '4:3' },
      { id: 'fp-14', src: fpJadeBag, label: 'Jade Bag', aspectRatio: '4:3' },
      { id: 'fp-15', src: fpLinaBag, label: 'Lina Bag', aspectRatio: '4:3' },
      { id: 'fp-16', src: fpLinaEarrings, label: 'Lina Earrings', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'charmz',
    title: 'Charmz',
    subtitle: 'Elegant Accessories Line',
    date: 'March 2024',
    sortDate: '2024-03-01',
    category: 'professional',
    role: '3D Sculptor — Shoes & Jewelry',
    client: 'MGA Entertainment',
    titleFont: 'font-title-delamoore',
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
      { id: 'ch-1', src: chJade, label: 'Charmz Jade', aspectRatio: '4:3' },
      { id: 'ch-2', src: chYasmin, label: 'Charmz Yasmin', aspectRatio: '4:3' },
      { id: 'ch-3', src: chCloe, label: 'Charmz Cloe', aspectRatio: '4:3' },
      { id: 'ch-4', src: chSasha, label: 'Charmz Sasha', aspectRatio: '4:3' },
      { id: 'ch-5', src: chYasminHairclip, label: 'Yasmin Hairclip', aspectRatio: '4:3' },
      { id: 'ch-6', src: chSashaHairclip, label: 'Sasha Hairclip', aspectRatio: '4:3' },
      { id: 'ch-7', src: chCloeHairclip, label: 'Cloe Hairclip', aspectRatio: '4:3' },
      { id: 'ch-8', src: chYasminEarrings, label: 'Yasmin Earrings', aspectRatio: '4:3' },
      { id: 'ch-9', src: chYasminNecklace, label: 'Yasmin Necklace', aspectRatio: '4:3' },
      { id: 'ch-10', src: chSashaNecklace, label: 'Sasha Necklace', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'pop-starz',
    title: 'Pop Starz',
    subtitle: 'Rock & Pop Performance Accessories',
    date: 'February 2024',
    sortDate: '2024-02-01',
    category: 'professional',
    role: '3D Sculptor — Performance Accessories',
    client: 'MGA Entertainment',
    titleFont: 'font-title-aeroblades',
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
      { id: 'ps-1', src: psSashaShoes, label: 'Sasha Boots', aspectRatio: '4:3' },
      { id: 'ps-2', src: psJadeShoes, label: 'Jade Boots', aspectRatio: '4:3' },
      { id: 'ps-3', src: psCloeShoes, label: 'Cloe Boots', aspectRatio: '4:3' },
      { id: 'ps-4', src: psYasminShoes, label: 'Yasmin Boots', aspectRatio: '4:3' },
      { id: 'ps-5', src: psJadeMic, label: 'Jade Microphone', aspectRatio: '4:3' },
      { id: 'ps-6', src: psCloeMic, label: 'Cloe Microphone', aspectRatio: '4:3' },
      { id: 'ps-7', src: psSashaMic, label: 'Sasha Microphone', aspectRatio: '4:3' },
      { id: 'ps-8', src: psYasminMic, label: 'Yasmin Microphone', aspectRatio: '4:3' },
    ],
    featured: false,
  },
  {
    id: 'oberon-titania',
    title: 'Oberon & Titania',
    subtitle: 'Articulated Fairy Wings',
    date: 'June 2025',
    sortDate: '2025-06-01',
    category: 'personal',
    role: 'Lead Sculptor — Articulated Wings & Characters',
    collaboration: 'Lolliword',
    description:
      'A personal project creating fully articulated fairy wings inspired by the painting "The Reconciliation of Oberon and Titania." Translated the intricate pictorial details of the original artwork into a functional 3D sculpt, balancing artistic fidelity with mechanical articulation.',
    details: [
      'Fully articulated fairy wing mechanism',
      'Character-specific body sculpting',
      'Floral crowns & drapery',
      'Faithful adaptation of classical painting',
    ],
    tools: ['ZBrush', 'Blender', 'Marvelous Designer'],
    images: [
      { id: 'ot-6', src: otStock, label: 'Final Presentation', aspectRatio: '4:3' },
      { id: 'ot-1', src: otOberon, label: 'Oberon — Full Render', aspectRatio: '4:3' },
      { id: 'ot-2', src: otOberon2, label: 'Oberon — Detail', aspectRatio: '4:3' },
      { id: 'ot-3', src: otRender, label: 'Sculpt Render', aspectRatio: '4:3' },
      { id: 'ot-4', src: otBW, label: 'Black & White', aspectRatio: '4:3' },
      { id: 'ot-5', src: otOriginal, label: 'Original Painting', aspectRatio: '16:9' },
    ],
    featured: false,
  },
]

export const professionalProjects = projects
  .filter((p) => p.category === 'professional')
  .sort((a, b) => b.sortDate.localeCompare(a.sortDate))

export const personalProjects = projects.filter(
  (p) => p.category === 'personal'
)
