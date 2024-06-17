import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base'
import { Titulo } from '../componentes/Titulo'

export default function Perfil(){
  return(
   <ScrollView flex={1}>
    <VStack flex={1} alignItems="center" p={5}>
      <Titulo color="blue.500">Meu perfil</Titulo>

      <Avatar size="xl" source={{ uri: "https://avatars.githubusercontent.com/u/113932594?v=4" }} mt={5} />
      <Titulo color="blue.500">Informações pessoais</Titulo>
      <Titulo fontSize="lg" mb={1}>André Cunha</Titulo>
      <Text>14/50/5555</Text>
      <Text>São Paulo</Text>

      <Divider mt={5} />
      <Titulo color="blue.500" mb={1}>Histórico médico</Titulo>
      <Text>Brinquite</Text>
      <Text>Sinusite</Text>
    </VStack>
   </ScrollView>
  )
}