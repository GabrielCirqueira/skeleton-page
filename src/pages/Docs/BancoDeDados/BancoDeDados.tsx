import { AppContainer, Container } from "@/components/layout/Containers";
import { Title, Text } from "@/components/ui";

export function Component() {
  return (
    <AppContainer>
      <Container>
        <Title>Banco de Dados</Title>
        <Text>UUID v7, Migrations e Doctrine.</Text>
      </Container>
    </AppContainer>
  );
}
