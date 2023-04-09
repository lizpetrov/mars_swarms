import { useState } from 'react';
import Link from 'next/link';
import { Title, Space } from '@mantine/core';

interface GradientTextButtonProps {
  text: string;
  href: string;
}

export default function GradientTextButton({ text, href }: GradientTextButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <Space h="sm" />

    <Link href={href}>
      <Title order={1}
        variant="gradient"
        sx={{
          background: isHovered
            ? 'linear-gradient(to right, #EC5800, #FFBF00)'
            : 'linear-gradient(to right, #FFBF00, #EC5800)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          transition: 'background 0.2s',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </Title>
    </Link>
    <Space h="sm" />
    </>
  );
}
