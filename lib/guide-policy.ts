/**
 * The guide policy — one source for the client-facing page (/guide-policy)
 * and the first page of the PDF quote. The Taj Mahal rule it leans on is the
 * same one the packages and FAQ already state: inside the monument a guide is
 * not permitted alongside a working photographer.
 */

export const GUIDE_POLICY = {
  title: 'Before you book: one team for your whole day',
  lead:
    'We run every Taj Mahal photoshoot and tour with our own licensed team. Please read this before you confirm, so there are no surprises on the morning.',
  oneLine:
    'The guide on your day is our licensed guide only. We cannot accept a booking where a guide arranged by someone else will join the tour or the shoot.',
  reasons: [
    {
      heading: 'The monument’s own rule',
      body:
        'Inside the Taj Mahal a guide is not permitted alongside a working photographer. Your photographer is with you throughout inside; on the Guide + Photo packages our guide covers Agra Fort, Mehtab Bagh and Itmad-ud-Daulah, where both are allowed. An outside guide cannot change that rule, and two people competing for the same hour does not help your pictures.',
    },
    {
      heading: 'One team, one timetable',
      body:
        'Sunrise slots, the gate queue and the quiet window after opening last minutes, not hours. When one team plans the day, the light, the entry and the route fit together. Two teams working to two plans is how a good morning gets missed.',
    },
    {
      heading: 'One team to answer for it',
      body:
        'If something is late, changes or needs fixing, you know exactly who is responsible and you can reach them on WhatsApp. That only works when the whole day is ours.',
    },
    {
      heading: 'We stand behind what we plan',
      body:
        'We plan each route, timing and photograph around our own guide and photographer, and we can only take responsibility for the people we have briefed.',
    },
  ],
  forYou: [
    'Your hotel driver or taxi is fine for the photography-only packages. The rule is about the guide, not your car.',
    fillRates('If you want a guide for Agra Fort or the wider day, we provide one: the Guide + Photo packages start from {usd:guided-photo-tour-small} for 1–5 guests.'),
    'If you only want a guide and a car, with no photographer, the Transport + Guide day covers it.',
  ],
  alreadyArranged:
    'If a guide has already been arranged, by you or by your hotel, please tell us before you pay the advance. We will either adjust the plan so our guide covers it, or tell you honestly that we cannot take the booking. We would rather say that now than on the day.',
  faqs: [
    {
      question: 'Why can’t my own guide join us?',
      answer:
        'Because we can only run one plan for the day, and inside the Taj Mahal a guide is not permitted alongside a photographer in any case. Our guide covers the rest of Agra with you.',
    },
    {
      question: 'Is this a rule of the monument or yours?',
      answer:
        'Both. The restriction on a guide inside the Taj Mahal with a photographer is the monument’s. Using only our guide for the rest of the day is our policy, and we state it before you pay.',
    },
    {
      question: 'Can I still use my own driver?',
      answer:
        'Yes, for the photography-only packages where no transport is included. On the Transport + Guide package, our car and licensed guide come together.',
    },
    {
      question: 'What if my hotel has booked a guide for me?',
      answer:
        'Tell us before the advance is paid. We will find the simplest way to run the day with our guide, or tell you we cannot take the booking.',
    },
  ],
} as const;
import { fillRates } from './rates';

export const GUIDE_POLICY_PATH = '/guide-policy';
