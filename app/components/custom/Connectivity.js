import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, ActivityIndicator,
} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { vw } from '../../utilities';

type P = {
  children: React.Node,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentPop: {
    width: vw(75),
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    margin: 40,
  },
  loadingText: {
    fontSize: 16,
  },
  infoText: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
    textAlign: 'center',
  },
});

const Connectivity = ({ children }: P) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    NetInfo.fetch().then((state) => {
      if (!state.isConnected) setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {children}
      {!isConnected && (
        <View style={styles.content}>
          <View style={styles.contentPop}>
            <ActivityIndicator style={{ margin: 40 }} size="large" color="#CC8527" />
            <Text style={styles.loadingText}>Checking Internet...</Text>
            <Text style={styles.infoText}>
              Unable to connect to internet. Please check your connection
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default Connectivity;
