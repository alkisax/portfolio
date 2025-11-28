// portfolio-page/components/common/FeatureListCard.tsx
import { Card, CardContent, Typography } from "@mui/material";

interface Props {
  title: string;
  bg: string;
  bullets: string[];
  textColor?: string;
}

export default function FeatureListCard({
  title,
  bg,
  bullets,
  textColor = "grey.900",
}: Props) {
  return (
    <Card
      sx={{
        height: "100%",
        backgroundColor: bg,
      }}
    >
      <CardContent sx={{ color: textColor }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <ul style={{ paddingLeft: 20, color: "inherit", margin: 0 }}>
          {bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
