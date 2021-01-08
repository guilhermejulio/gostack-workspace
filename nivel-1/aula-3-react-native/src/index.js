import React, {useEffect, useState} from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native'

import api from './services/api';

//Não possuem valor semântico (significado)
//Não possuem estilização propria 
//Todos componenetes possuem por padrão, "display: flex"

//View: div, footer, header, main, aside, section
//Text: p, span, strong, h1, h2, h3

export default function App(){
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    
    <SafeAreaView style={styles.container}>
      <FlatList 
       style={styles.container} data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item: project }) => (
          <Text style={styles.project}>{project.title}</Text>
        )}
      />
    </SafeAreaView>


    {/* <View style={styles.container}>
      {projects.map(project => (
        <Text style={styles.project} key={project.id}>{project.title}</Text>
      ))}
    </View>  */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },

  project:{
    color: '#fff',
    fontSize: 30,
    
  },
});