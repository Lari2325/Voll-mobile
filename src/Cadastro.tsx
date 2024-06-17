import { Image, Text, Box, Link, Checkbox, ScrollView } from 'native-base'
import { TouchableOpacity } from 'react-native';
import { useState } from 'react'; 
import Logo from './assets/Logo.png'
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/Titulo';
import { secoes } from './utils/CadastroEntradaTexto';

export default function Cadastro() {

const [numSecao, setNumSecao] = useState(0);

  function avancarSecao(){
    if(numSecao < secoes.length - 1){
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao(){
    if(numSecao > 0){
      setNumSecao(numSecao - 1);
    }
  }
  
  return (
    <ScrollView flex={1} p={5}>
      <Image source={Logo} alt="Logo Voll" alignSelf="center" />

      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      <Box>
          {
              secoes[numSecao]?.entradaTexto?.map(entrada => { 
                  return <EntradaTexto label={entrada.label} placeholder={entrada.placeholder} key={entrada.id} />
              })
          }
      </Box>
      <Box>
        <Text color="blue.800" fontWeight="bold" fontSize="md" mt="2" mb={4}>
          {secoes[numSecao].tituloCheckbox}
        </Text>
        {
          secoes[numSecao]?.checkbox?.map(checkbox => { 
            return <Checkbox 
              key={checkbox.id}
              value={checkbox.value}>
                {checkbox.value}
              </Checkbox>
          })
        }
      </Box>

      {numSecao > 0 && <Botao onPress={() => voltarSecao()} bgColor="gray.400">Voltar</Botao>}
      
      <Botao mt={4} mb={4} onPress={() => avancarSecao()}>Avançar</Botao>
    </ScrollView>
  );
}