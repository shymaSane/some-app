import {StyleSheet} from 'react-native';

//Header color:
// const headerColor = '#3d3f4b'

const  styles = StyleSheet.create({
    //Main Header Styling
    mainHeader:{
        backgroundColor: '#3d3f4b',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15
    },
    headerRightButtons: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end',
        paddingRight: 20
        },
    mainHeaderLeftButtons:{
       flex: 1
    },
    headerIconContainer:{
        width: 25,
        height: 25,
        marginLeft: 10,
        marginRight: 10, 
        justifyContent:'center'
    },
    //Secondary Header Styling
    secondaryHeader: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 15,
        
    },
    secondaryHeaderLeftButtons:{
       flex: 1,
       flexDirection:'row',
    },
    secondaryHeaderTitle:{
        marginLeft: 10,
        color: '#3d3f4b',
        fontSize: 18, 
        letterSpacing: 1,
    },



})

export default styles;