import {StyleSheet} from 'react-native';

//Header color:
// const headerColor = '#3d3f4b'

const  styles = StyleSheet.create({
    header:{
        backgroundColor: '#3d3f4b',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingTop: 10,
        paddingBottom: 10
    },
    headerRightButtons: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
        },
    headerLeftButtons:{
       flex: 1
    },
    headerLeftIconContainer:{
        width: '25%'
    }

})

export default styles;