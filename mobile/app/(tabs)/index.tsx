import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#fdfffe' }}
      headerImage={
        <Image
          source={require('@/assets/images/inter.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">R$ 110,00</ThemedText>

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#fdfffe' : '#fdfffe', // Escurece quando pressionado
            padding: 6,
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            width: 45,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
          })}
        >
          <ThemedText style={{ color: 'orange', fontWeight: 'bold' }}>PIX</ThemedText>
        </Pressable><Pressable
          onPress={() => router.push('/explore')}
          style={({ pressed }) => ({
            backgroundColor: pressed ? '#fdfffe' : '#fdfffe', // Escurece quando pressionado
            padding: 5,
            borderRadius: 1000000,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
            left: 60,
            bottom: 43,
          })}
        >
          <ThemedText style={{ color: 'orange', fontWeight: 'bold' }}><FontAwesome6 name="barcode" size={24} color="black" /> Pagar</ThemedText>
        </Pressable>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> 
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 25,
    width: 100,
    bottom: 200,
    left: 30,
    position: 'absolute',
  },
});
