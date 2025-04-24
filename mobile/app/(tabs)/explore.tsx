import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#fdfffe' }}
      headerImage={
        <Image
          source={require('@/assets/images/inter.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Saldo R$110,00</ThemedText>
      </ThemedView>
      <ThemedText>Chave, Pix copia e Cola ou Favorito__________</ThemedText>
      <Collapsible title="Contatos Salvos">
        <ThemedText>
          Gustavo Kukla
        </ThemedText>
        <ThemedText>Jorge Henrique
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },reactLogo: {
    height: 25,
    width: 100,
    bottom: 200,
    left: 30,
    position: 'absolute',
  },
});
