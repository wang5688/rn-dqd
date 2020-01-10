import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inner: {
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  itemIcon: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  itemText: {
    fontSize: 14,
    color: '#333'
  },
  subText: {
    fontSize: 12,
    color: '#b5b5b5'
  },
  itemRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    width: 6,
    height: 12,
    marginLeft: 4,
  }
});