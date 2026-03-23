import { AppContainer, Container } from "@/components/layout/Containers";
import { Title, Text } from "@/components/ui";

export function Component() {
  return (
    <AppContainer>
      <Container>
        <Title>Qualidade e Testes</Title>
        <Text>PHPUnit, PHPStan e Biome.</Text>
      </Container>
    </AppContainer>
  );
}
