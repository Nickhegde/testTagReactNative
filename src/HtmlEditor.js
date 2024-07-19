import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const HtmlEditor = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleUpdateHtml = () => {
    setHtmlContent(inputValue);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Paste your HTML here"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button title="Render HTML" onPress={handleUpdateHtml} />
        <View style={styles.webviewContainer}>
          <WebView
            originWhitelist={['*']}
            source={{ html: htmlContent }}
            style={styles.webview}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  input: {
    height: 150,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  webviewContainer: {
    flex: 1,
    height: '100%',  // Adjust the height as needed
    width: '100%',
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default HtmlEditor;