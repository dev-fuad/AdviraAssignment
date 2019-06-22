import { StyleSheet } from 'react-native';
import { vw } from '../../../utilities/Dimensions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyList: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    color: '#888',
    fontSize: 16,
  },
});

export const rowStyles = StyleSheet.create({
  image: {
    height: vw(100),
    width: vw(100),
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333C',
    flexDirection: 'row',
    padding: 20,
  },
  title: {
    flex: 1,
    color: '#CC8527',
    fontSize: 16,
  },
  place: {
    color: '#CC8527',
    fontSize: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  likes: {
    color: '#7C7C7C',
    fontSize: 12,
  },
  comments: {
    color: '#7C7C7C',
    fontSize: 12,
  },
});
