// portfolio-page/components/page-components/about-components/AboutSectionBlock.tsx
import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  text: string;
  children?: React.ReactNode;
}

export default function AboutSectionBlock({ title, text, children }: Props) {
  return (
    <Box mb={8}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "text.primary" }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          mb: 3,
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </Typography>

      {children}
    </Box>
  );
}
