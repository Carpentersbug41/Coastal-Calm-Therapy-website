import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Briefing Room | The Anxiety Protocol',
  description:
    'Technical briefings and deconstructions from The Anxiety Protocol. A collection of strategic documents, skill blueprints, and system deconstructions that form the intellectual foundation of our protocol.',
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

