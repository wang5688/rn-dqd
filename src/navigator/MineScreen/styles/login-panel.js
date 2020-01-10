import { StyleSheet } from 'react-native';
import { MAIN_COLOR } from '../../../styles/public/main';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  loginList: {
    marginTop: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  loginIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
  },
  loginButton: {
    height: 36,
    backgroundColor: MAIN_COLOR
  }
});
