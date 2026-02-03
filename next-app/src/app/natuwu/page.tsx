// app/valentine/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Grid, Button, Typography, Box } from '@mui/material';

export default function ValentinePage() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      color: string;
    }>
  >([]);

  const noMessages = [
    'No',
    'Plz',
    'Please say yes',
    "I'M DESPERATE",
    "I'll do anything",
    'JUST CLICK YES PLZ',
  ];

  useEffect(() => {
    if (accepted) {
      // Generate tons of confetti pieces with rainbow colors
      const rainbowColors = [
        '#FF0000', // Red
        '#FF7F00', // Orange
        '#FFFF00', // Yellow
        '#00FF00', // Green
        '#0000FF', // Blue
        '#4B0082', // Indigo
        '#9400D3', // Violet
        '#FF69B4', // Pink
        '#FF1493', // Deep Pink
        '#00FFFF', // Cyan
        '#FF00FF', // Magenta
        '#FFD700', // Gold
      ];

      const pieces = Array.from({ length: 300 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1 + Math.random() * 1.5,
        color: rainbowColors[Math.floor(Math.random() * rainbowColors.length)],
      }));
      setConfettiPieces(pieces);
    }
  }, [accepted]);

  const handleNoClick = () => {
    setNoClickCount(noClickCount + 1);
  };

  const handleYesClick = () => {
    setAccepted(true);
  };

  const getYesButtonSize = () => {
    const baseSize = 1;
    const increment = 0.2;
    return baseSize + noClickCount * increment;
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: { xs: 2, sm: 4 },
      }}
    >
      {/* Confetti */}
      {accepted &&
        confettiPieces.map((piece) => (
          <div
            key={piece.id}
            className="confetti"
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
              backgroundColor: piece.color,
            }}
          />
        ))}

      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: '800px', textAlign: 'center', width: '100%' }}
      >
        <Grid item sx={{ width: '100%' }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#f5a4f5',
              mb: { xs: 2, sm: 4 },
              fontSize: { xs: '2rem', sm: '3rem', md: '3.75rem' },
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.7 },
              },
            }}
          >
            Will You Be My Valentine? 💕
          </Typography>
        </Grid>

        {/* Image */}
        <Grid item sx={{ mb: { xs: 2, sm: 4 }, width: '100%' }}>
          <Box
            sx={{
              position: 'relative',
              width: { xs: '280px', sm: '350px', md: '400px' },
              height: { xs: '280px', sm: '350px', md: '400px' },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <Image
              src="/minyum.jpg"
              alt="Valentine"
              width={400}
              height={400}
              style={{
                objectFit: 'contain',
                borderRadius: '16px',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Grid>

        {/* Buttons or Success Message */}
        {!accepted ? (
          <Grid item sx={{ mt: { xs: 4, sm: 8 }, width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                gap: { xs: 2, sm: 4, md: 8 },
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                px: 2,
              }}
            >
              <Button
                onClick={handleNoClick}
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  fontWeight: 'bold',
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  border: '2px solid #e0e0e0',
                  minWidth: { xs: '120px', sm: '140px' },
                }}
              >
                {noMessages[noClickCount % noMessages.length]}
              </Button>

              <Button
                onClick={handleYesClick}
                variant="contained"
                sx={{
                  bgcolor: 'white',
                  color: 'black',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  fontWeight: 'bold',
                  py: { xs: 1.5, sm: 2 },
                  px: { xs: 3, sm: 4 },
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  border: '2px solid #e0e0e0',
                  transform: `scale(${getYesButtonSize()})`,
                  transition: 'transform 0.3s ease',
                  boxShadow: 3,
                  minWidth: { xs: '120px', sm: '140px' },
                }}
              >
                Yes 😸💘
              </Button>
            </Box>
          </Grid>
        ) : (
          <Grid item sx={{ mt: { xs: 4, sm: 8 }, width: '100%' }}>
            <Box
              sx={{
                animation: 'bounce 1s infinite',
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-20px)' },
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  mb: 2,
                  fontSize: { xs: '3rem', sm: '4rem', md: '3.75rem' },
                }}
              >
                YAY 😽
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 'bold',
                  color: '#f5a4f5',
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3rem' },
                }}
              >
                YIPPEE 🥳
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 'bold',
                  color: '#FFFFFF',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '2.125rem' },
                }}
              >
                WOOHOO 💝
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>

      <style jsx>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(1080deg);
            opacity: 0.8;
          }
        }

        .confetti {
          position: absolute;
          top: -10px;
          width: 12px;
          height: 12px;
          animation: confetti-fall linear infinite;
          border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
        }
      `}</style>
    </Box>
  );
}
