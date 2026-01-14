
import { Anime, Episode } from './types';

export const GENRES = [
  'Action', 'Fantasy', 'Shounen', 'Drama', 'Isekai', 'Adventure', 'Romance', 'Sci-Fi'
];

export const MOCK_ANIMES: Anime[] = [
  {
    id: '1',
    title: 'One Piece Film: RED',
    image: 'https://picsum.photos/seed/opred/400/600',
    banner: 'https://picsum.photos/seed/opred-banner/800/400',
    rating: '8.6',
    episodes: 1,
    year: '2022',
    genres: ['Action', 'Adventure', 'Fantasy'],
    description: 'Uta, the most beloved singer in the world, whose voice has been described as "otherworldly", is renowned for concealing her own identity when performing. Now, for the first time ever, she will reveal herself to the world at a live concert.',
    progress: 75,
    currentEpisode: 1
  },
  {
    id: '2',
    title: 'Naruto Shippuden',
    image: 'https://picsum.photos/seed/naruto/400/600',
    banner: 'https://picsum.photos/seed/naruto-banner/800/400',
    rating: '8.6',
    episodes: 500,
    year: '2014',
    genres: ['Action', 'Adventure', 'Fantasy'],
    description: 'Tells the story of the struggle of an orphaned boy named Naruto Uzumaki who dreams of becoming a Hokage/the highest leader of the village. Along his journey, he faces countless threats from powerful enemies while learning the true meaning of friendship and sacrifice.',
    progress: 45,
    currentEpisode: 10
  },
  {
    id: '3',
    title: 'Prima Doll',
    image: 'https://picsum.photos/seed/prima/400/600',
    rating: '7.8',
    episodes: 12,
    year: '2022',
    genres: ['Sci-Fi', 'Slice of Life'],
    description: 'The story focuses on autonomous mechanical dolls, or automata, that were originally built to serve as weapons of war. After the war ended, they began working at a cafe called Kuronekotei.',
  },
  {
    id: '4',
    title: 'Yoru wa Neko to Issho',
    image: 'https://picsum.photos/seed/cat/400/600',
    rating: '8.2',
    episodes: 15,
    year: '2022',
    genres: ['Comedy', 'Slice of Life'],
    description: 'Fuuta-kun is surprised when his sister brings home a cat named Kyuruga. The anime depicts the daily life of Fuuta and Kyuruga.',
  },
  {
    id: '5',
    title: 'Kumichou Musume',
    image: 'https://picsum.photos/seed/yakuza/400/600',
    rating: '8.4',
    episodes: 12,
    year: '2022',
    genres: ['Slice of Life', 'Comedy'],
    description: 'Tooru Kirishima is the right-hand man of the Sakuragi crime family. For him, the job is a perfect excuse to let his violent instincts run wild, earning him the nickname "the Demon of Sakuragi."',
  },
  {
    id: '6',
    title: 'Tsuki ga Kirei',
    image: 'https://picsum.photos/seed/tsuki/400/600',
    rating: '8.1',
    episodes: 12,
    year: '2017',
    genres: ['Romance', 'School'],
    description: 'A beautiful story about young love and the challenges of growing up.',
  },
  {
    id: '7',
    title: 'ReLIFE',
    image: 'https://picsum.photos/seed/relife/400/600',
    rating: '8.0',
    episodes: 13,
    year: '2016',
    genres: ['Slice of Life', 'Romance'],
    description: 'Kaizaki Arata, a 27-year-old NEET, gets a chance to redo his life as a high school student.',
  }
];

export const MOCK_EPISODES: Episode[] = [
  { id: 'e1', number: 1, title: 'Episode 1', duration: '24:45 Min', image: 'https://picsum.photos/seed/ep1/200/120' },
  { id: 'e2', number: 2, title: 'Episode 2', duration: '24:45 Min', image: 'https://picsum.photos/seed/ep2/200/120' },
  { id: 'e3', number: 3, title: 'Episode 3', duration: '23:10 Min', image: 'https://picsum.photos/seed/ep3/200/120' },
  { id: 'e4', number: 4, title: 'Episode 4', duration: '24:00 Min', image: 'https://picsum.photos/seed/ep4/200/120' },
];
