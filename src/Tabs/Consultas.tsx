import { Text, Divider, ScrollView } from 'native-base'
import { CardConsulta } from '../componentes/CardConsulta'
import { Titulo } from '../componentes/Titulo'
import { Botao } from '../componentes/Botao'

export default function Consultas(){
  return(
    <ScrollView p="5">
        <Titulo color="blue.500" mb="5">Minhas consultas</Titulo>
        <Botao mt={5} mb="5">
          Agendar nova consulta
        </Botao>
        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb="2">Próximas consultas</Titulo>
        <CardConsulta 
          nome='Dr. Andre'
          especialidades='Cardiologista'
          foto='https://avatars.githubusercontent.com/u/113932594?v=4'
          data='20/05/2021'
          foiAgendado
        />
        <Divider mt="5" mb="5" />

        <Titulo color="blue.500" fontSize="lg" alignSelf="flex-start" mb="2">Consultas passadas</Titulo>
        <CardConsulta
          nome='Dr. Andre'
          especialidades='Cardiologista'
          foto='https://avatars.githubusercontent.com/u/113932594?v=4'
          data='20/05/2021'
          foiAtendido
        />
        <CardConsulta 
          nome='Dr. Andre'
          especialidades='Cardiologista'
          foto='https://avatars.githubusercontent.com/u/113932594?v=4'
          data='20/05/2021'
          foiAtendido
        />
        <CardConsulta 
          nome='Dr. Andre'
          especialidades='Cardiologista'
          foto='https://avatars.githubusercontent.com/u/113932594?v=4'
          data='20/05/2021'
          foiAtendido
        />
    </ScrollView>
  )
}
