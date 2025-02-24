import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, ScrollView, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import Greeting from './components/Greeting';
import Task from './components/Task';
import UserDetails from './components/UserDetails';
import ToggleText from './components/ToggleText';
import DynamicForm from './components/DynamicForm';
import ClickCounter from './components/ClickCounter';
import RegistrationForm from './components/RegistrationForm';
import ThemeSwitcher from './components/ThemeSwitcher';
import AlertButton from './components/AlertButton';
import ParentCounter from './components/ParentCounter';
import ImageGallery from './components/ImageGallery';
import Game from './components/Game';

export default function App() {

  const datosUsuario = {
    nombre: 'Esteban',
    edad: 21,
    ocupacion: 'Estudiante',
  };

  const datosTarea = {
    title: 'Completar el taller',
    completed: true, // Cambiar a "false" para cambiar el estado
  };

  const [registro, setRegistro] = useState(null);
  const [tema, setTema] = useState('claro');

  const manejarRegistro = (datosRegistro) => {
    setRegistro(datosRegistro);
  };

  const cambiarTema = (nuevoTema) => {
    setTema(nuevoTema);
  };

  const mostrarAlerta = () => {
    Alert.alert('Alerta', 'Alertado');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.container, tema === 'oscuro' && styles.oscuro]}>

        {/* PUNTO 1: Paso de Parámetros a Componentes */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Punto 1: Paso de Parámetros</Text>
          <Greeting name="Esteban" />
          <UserDetails 
            nombre={datosUsuario.nombre} 
            edad={datosUsuario.edad} 
            ocupacion={datosUsuario.ocupacion} 
          />
          <Task task={datosTarea} />
        </View>

        {/* PUNTO 2: Uso de useState */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Punto 2: Uso de useState</Text>
          <ToggleText />
          <DynamicForm />
          <ClickCounter />
        </View>

        {/* PUNTO 3: Eventos con Botones */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Punto 3: Eventos con Botones</Text>
          <RegistrationForm onRegistrar={manejarRegistro} />
          {registro && (
            <View style={{ marginVertical: 10 }}>
              <Text>Registro realizado:</Text>
              <Text>Nombre: {registro.nombre}</Text>
              <Text>Correo: {registro.correo}</Text>
              <Text>Contraseña: {registro.contrasena}</Text>
            </View>
          )}
          <ThemeSwitcher temaActual={tema} onCambiarTema={cambiarTema} />
          <AlertButton onMostrarAlerta={mostrarAlerta} />
        </View>

        {/* PUNTO 4: Paso de Parámetros de Padre a Hijo */}
        <View style={styles.seccion}>
          <Text style={styles.tituloSeccion}>Punto 4: Paso de Parámetros de Padre a Hijo</Text>
          <ParentCounter />
          <ImageGallery />
          <Game />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  oscuro: {
    backgroundColor: '#3a3636',
  },
  seccion: {
    marginVertical: 20, // Separa cada punto de forma clara
    width: '100%',
    alignItems: 'center',
  },
  tituloSeccion: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
