import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: '50%',
    borderBottomWidth: 1,
    marginBottom: 15
  },
  divider: {
    marginTop: 10
  },
  containerPrice: {
    flexDirection:"row",
    justifyContent: "space-between"
  },
  textCard: {
    fontWeight: "bold",
    fontSize: 20
  }
});

export default styles;