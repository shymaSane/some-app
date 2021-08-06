import {StyleSheet} from 'react-native';

//Header color:
// const headerColor = '#3d3f4b'

const  styles = StyleSheet.create({
    header:{
        backgroundColor: '#3d3f4b',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    headerRightButtons: {
        flex:1
    },
    headerLeftButtons:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-evenly'
    }

})

export default styles;