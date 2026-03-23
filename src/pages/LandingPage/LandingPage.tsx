import { AppContainer, Container } from "@/components/layout/Containers";
import { Title, Text } from "@/components/ui";

export function Component() {
  return (
    <AppContainer>
      <Container>
        <Title variant="display">Catalyst Skeleton v4.0</Title>
        <Text variant="lg">
          O ponto de partida definitivo para aplicações empresariais sólidas.
        </Text>
      </Container>
    </AppContainer>
  );
}
