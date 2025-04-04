import { Image, StyleSheet, Platform, Pressable } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

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
    backgroundColor: pressed ? '#0062CC' : '#007AFF', // Escurece quando pressionado
    padding: 6,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 38,
    transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }], // Efeito de "afundar"
  })}
>
  <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>PIX</ThemedText>
</Pressable>
        <ThemedText>
           <ThemedText type="defaultSemiBold">oi</ThemedText> bbb
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
            })}
          </ThemedText>{' '}
          oi
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
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
