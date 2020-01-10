import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 4,
    backgroundColor: '#fff',
    marginVertical: 8,
  },
  navItem: {
    alignItems: 'center',
    paddingTop: 22,
    paddingBottom: 14,
    paddingHorizontal: 28,
  },
  itemIcon: {
    width: 26,
    height: 26,
    marginBottom: 10
  },
  itemTitle: {
    fontSize: 12,
    color: '#333'
  }
});
