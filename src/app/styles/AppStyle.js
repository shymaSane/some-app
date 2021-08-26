import {StyleSheet} from 'react-native';
import {COLORS} from '../assets/colors';

//Header color:
// const headerColor = '#3d3f4b'

const styles = StyleSheet.create({
  //Main Header Styling
  mainHeader: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  headerRightButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
  },
  mainHeaderLeftButtons: {
    flex: 1,
  },
  headerIconContainer: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },
  //Secondary Header Styling
  secondaryHeader: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingBottom: 15,
  },
  secondaryHeaderLeftButtons: {
    flex: 1,
    flexDirection: 'row',
  },
  secondaryHeaderTitle: {
    marginLeft: 10,
    color: COLORS.primary,
    fontSize: 18,
    letterSpacing: 1,
  },
  homeBanner: {
    height: 50,
    backgroundColor: COLORS.secondary,
    color: COLORS.tertiary,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  homeBannerPrimary: {
      flex:2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  homeBannerSecondary: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
