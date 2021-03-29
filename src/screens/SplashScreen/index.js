import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionText, SectionImage } from './styles';


export const SplashScreen = () => {
  return (    
      <SectionView>
        <SectionImage
        
        />
        <StatusBar hidden={true}/>
        <SectionText>Bem vindo!!!</SectionText>
      </SectionView>    
  );
};