import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CardViewHeader from '../tasks/card/CardViewHeader'
import CardViewContent from '../tasks/card/CardViewContent'

const CardViewScreen = () => {
  return (
    <View style={styles.container}>
      <CardViewHeader />
      <CardViewContent />
    </View>
  )
}

export default CardViewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})