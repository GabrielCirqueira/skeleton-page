import { AppContainer, Container } from "@/components/layout/Containers";
import { Title, Text } from "@/components/ui";

export function Component() {
  return (
    <AppContainer>
      <Container>
        <Title>Mensageria e Workers</Title>
        <Text>Symfony Messenger e Scheduler.</Text>
      </Container>
    </AppContainer>
  );
}
