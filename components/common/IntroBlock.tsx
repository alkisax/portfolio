// portfolio-page\components\common\IntroBlock.tsx
import { Box, Typography } from "@mui/material";

interface props {
  title: string
  text: string
}

const IntroBlock = ({ title, text }: props) => {
  return (
    <>
      <Box textAlign="center" mb={6}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography
          variant="h6"
          sx={{ color: "text.secondary" }}
          maxWidth="700px"
          mx="auto"
        >
          {text}
        </Typography>
      </Box>
    </>
  );
};

export default IntroBlock;
